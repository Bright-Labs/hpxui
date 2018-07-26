<template lang="pug">
#home
  | You can either #[router-link(to="/create") create]
  | or #[router-link(to="/status") check] on a stack.
</template>

<script>
export default {
  name: "home",
}
</script>
