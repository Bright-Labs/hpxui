<template lang='pug'>
  v-app
    v-navigation-drawer(
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    )
      v-list
        v-list-tile(to="/", exact=true)
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title Home
        v-list-tile(to="/status", exact=true)
          v-list-tile-action
            v-icon info
          v-list-tile-content
            v-list-tile-title Status
        v-list-tile(to="/create", exact=true)
          v-list-tile-action
            v-icon build
          v-list-tile-content
            v-list-tile-title Create
    v-toolbar(
      app
      :clipped-left="clipped"
    )
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title(v-text="title")
      v-spacer
    v-content
      v-container(fluid)
        router-view
    v-footer(:fixed="fixed" app)
      span &copy; 2018
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: "Hacker Pixel",
    }
  },
}
</script>
