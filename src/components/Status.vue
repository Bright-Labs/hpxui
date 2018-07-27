<template lang="pug">
.status This app communicates with Amazon through their SDK.  Your credentials are never sent to us.
  StatusPoller(:start_polling='true', initial_status="Please fill out the form to check on your stack.")
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
</template>

<script>
import StatusPoller from "@/components/StatusPoller"

export default {
  name: "Status",
  components: { StatusPoller },
  data: vm => ({
    sharedState: vm.$store.state,
    valid: false,
  }),
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
