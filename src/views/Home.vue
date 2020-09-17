<template>
  <v-app>
    <!-- Configure app theme in src/plugins/vuetify.js -->
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <!-- Can add a nav-menu here. Refer vuetify docs for more info -->
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h2 class="ml-2">Vue Material Kickstart</h2>
      </div>
      <v-spacer></v-spacer>
      <!-- Can add icons and buttons here. Refer vuetify docs for more info -->
    </v-app-bar>

    <v-main>
      <!--Add your main component here -->
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
