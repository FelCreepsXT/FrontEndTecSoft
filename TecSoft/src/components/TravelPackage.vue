<template>
  <v-card>
    <v-tabs
        background-color="transparent"
        color="basil"
        grow>
      <v-tab depressed to="/dispatcher/packages/1">En espera</v-tab>
      <v-tab depressed to="/dispatcher/packages/2">En camino</v-tab>
      <v-tab depressed to="/dispatcher/packages/3">En terminal</v-tab>
    </v-tabs>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-card>
</template>

<script>

export default {
  name: "TravelPackage",
  data(){
    return{
    }
  },
  components: {
  },
}
</script>

<style scoped>

</style>
