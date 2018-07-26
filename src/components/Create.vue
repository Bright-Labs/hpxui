<template lang="pug">
.create This is a client side script, using Amazon's SDK.  None of your information (particularily keys and passwords) are sent to us.
  v-alert(:value='error' type="error") Got this error from AWS: #[pre {{error}}]  Are your credentials right?
  StatusPoller(
    v-if='show_poller'
    initial_status="Bringing up your stack!"
    :start_polling='show_poller'
    )
  v-form(v-model="valid")
    v-text-field(
      v-model="sharedState.accessKey"
      label="AWS Access Key"
      v-validate="'required'"
      data-vv-name="access key"
      :error-messages="errors.collect('access key')"
      required
      )
    v-text-field(
      v-model="sharedState.secretKey"
      label="AWS Secret Key"
      v-validate="'required'"
      data-vv-name="secret key"
      :error-messages="errors.collect('secret key')"
      required )
    v-text-field(
      v-model="sharedState.region"
      label="AWS Region"
      hint="Only us-west-2 is supported for now"
      readonly
      required )
    v-text-field(
      v-model="sharedState.prefix"
      label="Stack Prefix"
      v-validate="{required: true, regex: /^[a-zA-Z0-9]{1,16}$/}"
      data-vv-name="prefix"
      :error-messages="errors.collect('prefix')"
      pattern="[a-zA-Z0-9]{1,16}"
      counter=16
      required )
    v-text-field(
      v-model="version"
      label="HPX Version"
      v-validate="'required'"
      data-vv-name="version"
      :error-messages="errors.collect('version')"
      required )
    v-text-field(
      v-model="redshift_username"
      label="Redshift Username"
      v-validate="{required: true, regex: /^[a-z]{1}[a-z0-9]{0,127}$/}"
      data-vv-name="redshift username"
      :error-messages="errors.collect('redshift username')"
      pattern="[a-z]{1}[a-z0-9]{0,127}"
      counter=128
      required )
    v-text-field(
      v-model="redshift_password"
      label="Redshift Password"
      v-validate="{required: true, regex: /^(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[a-zA-Z0-9]{8,}$/}"
      data-vv-name="redshift password"
      :error-messages="errors.collect('redshift password')"
      pattern="(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[a-zA-Z0-9]{8,}"
      placeholder="Aa123456"
      hint="At last 8 characters, and contain an uppercase letter, an lowercase letter, and a number"
      persistent-hint
      required )
    v-text-field(
      v-model="vpc"
      label="VPC Block"
      v-validate="{required: true, regex: /^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$/}"
      data-vv-name="vpc"
      :error-messages="errors.collect('vpc')"
      pattern="([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?"
      required )
    v-text-field(
      v-model="whitelist"
      label="Whitelist IP Block"
      v-validate="{required: true, regex: /^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$/}"
      data-vv-name="whitelist"
      :error-messages="errors.collect('whitelist')"
      pattern="([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?"
      required )
    v-btn(
      :disabled="!valid"
      @click="submit"
    ) create
</template>

<script>
import ipify from "ipify"
import got from "got"
import aws from "@/aws"
import StatusPoller from "@/components/StatusPoller"

export default {
  name: "Create",
  components: { StatusPoller },
  data: vm => ({
    sharedState: vm.$store.state,
    valid: false,
    region: "us-west-2",
    version: "LATEST",
    redshift_username: "hpx",
    redshift_password: "",
    vpc: "172.31.0.0/16",
    whitelist: "",
    show_poller: false,
    error: false,
  }),
  async created() {
    const [whitelist, latest] = await Promise.all([
      ipify(),
      got("http://hpx-release-us-west-2.s3.amazonaws.com/LATEST"),
    ])
    this.whitelist = `${whitelist}/32`
    this.version = latest.body
  },
  methods: {
    async submit() {
      this.error = false
      if (await this.$validator.validateAll()) {
        try {
          await aws.makeStack(
            this.sharedState.accessKey,
            this.sharedState.secretKey,
            this.sharedState.region,
            this.sharedState.prefix,
            this.version,
            this.redshift_username,
            this.redshift_password,
            this.vpc,
            this.whitelist
          )
          this.show_poller = true
        } catch (e) {
          this.error = e
        }
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
