<template lang="pug">
.statuspoller
  v-card
    v-card-title {{sharedState.prefix}} Status
    v-card-text
      div(v-html="status")
      div(v-if="next_update") Next update in {{next_update}}
</template>

<script>
import interval from "interval-promise"
import aws from "@/aws"

export default {
  name: "StatusPoller",
  props: ["start_polling", "initial_status"],
  data: vm => ({
    sharedState: vm.$store.state,
    next_update: 0,
    cloud_formation: null,
    cloud_front: null,
    redshift: null,
    aws_error: null,
    status: vm.initial_status,
    stopPoller: false,
    paused: false,
  }),
  computed: {
    ready: function() {
      return (
        this.start_polling &&
        this.sharedState.accessKey &&
        this.sharedState.secretKey &&
        this.sharedState.region &&
        this.sharedState.prefix &&
        !this.paused
      )
    },
  },
  created() {
    interval(async (iteration, stop) => {
      if (this.stopPoller) {
        stop()
        return
      }

      if (this.ready) {
        this.update_status()
        this.next_update -= 1
        if (this.next_update < 1) {
          this.next_update = 30
          this.$hpx("hpxui.checkstatus")
          try {
            ;[
              this.cloud_formation,
              this.redshift,
              this.cloudfront,
            ] = await aws.checkStack(
              this.sharedState.accessKey,
              this.sharedState.secretKey,
              this.sharedState.region,
              this.sharedState.prefix
            )
            if (this.cloud_formation) {
              this.$hpx(`hpxui.${this.cloud_formation.StackStatus}`)
            } else {
              this.$hpx("hpxui.NO_STACK")
            }
          } catch (e) {
            this.aws_error = e
          }
          this.update_status()
        }
      }
    }, 1000)
  },
  beforeDestroy() {
    this.stopPoller = true
  },
  methods: {
    pause() {
      this.paused = true
      this.next_update = 0
    },
    update_status() {
      if (this.aws_error) {
        this.status = `Got an error from aws: <pre>${
          this.aws_error
        }</pre>  Check the credentials?`
        this.pause()
        return
      }

      if (!this.cloud_formation) {
        this.status = "Fetching status from AWS."
        return
      }

      if (this.redshift && this.cloudfront) {
        const redshift_endpoint = `${
          this.redshift.Clusters[0].Endpoint.Address
        }:${this.redshift.Clusters[0].Endpoint.Port}`
        const pixel_url = `http://${
          this.cloudfront.Distribution.DomainName
        }//1x1.gif?a=value1&b=value2&c=value3&d=value4`

        this.status = `
        Your stack is ready!
          <div>
        Redshift Endpoint: ${redshift_endpoint}
          </div>
          <div>
        Pixel Url: ${pixel_url}
          </div>
              `
        this.pause()
        return
      }

      if (!this.cloud_formation.StackStatus.endsWith("_IN_PROGRESS")) {
        // Nothing should change with the stack
        this.pause()
        this.status = `This stack is in ${
          this.cloud_formation.StackStatus
        } state.`
        return
      }

      this.status = `Stack not ready yet: Got ${
        this.cloud_formation.StackStatus
      } back from AWS.`
      return
    },
  },
  watch: {
    sharedState: {
      deep: true,
      handler: function() {
        this.paused = false
        this.next_update = 0
        this.aws_error = false
      }, //restart the poller if anything changes
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
