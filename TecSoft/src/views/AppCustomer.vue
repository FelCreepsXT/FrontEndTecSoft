<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>In-App Navigation Sample</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed>
          <router-link to="/customer/home">Hola</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link to="/customer/findCompany">FindCompany</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/customer/state">My package</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "AppCustomer",
  methods:{
  }

}
</script>

<style scoped>

</style>
