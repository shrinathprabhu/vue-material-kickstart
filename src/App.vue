<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<style scoped>
/* Add all the styles to be used by this component here. */
/* You can also add lang attribute to style tag and values can be 'sass', 'scss', 'less' and 'stylus' */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
// Import components, mixins, store and dependencies here
export default {
  name: "App", // Name of the app
  components: {
    // Register your imported component here
  },
  data: () => ({
    // Add all the properties and data elements that can be accessed by the UI here
  }),
  mounted: function () {
    // Add the logic that needs to be executed everytime this component is mounted (displayed in UI).
    // Avoid arrow functions here
  },
  created: function () {
    // Add the logic that needs to be executed when this component is created or called.
    // Avoid arrow functions here
  },
  methods: {
    // Add the methods that'll be executed in this component on some event
  },
  computed: {
    // Add properties that'll be computed here. Any changes to these properties will be automatically
    // updated in DOM
  },
  mixins: [
    // Add all the mixins here. Note: importing mixins might affect/ replace your properties in this
    // component if both mixin and this component have same property name but different value
  ],
};
</script>
