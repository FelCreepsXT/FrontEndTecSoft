<template>
  <v-card>
  </v-card>
</template>

<script>

export default {
  name: "Delivery",
  components: {
  },
  methods: {
    navigateToState(id){
      this.$router.push({name: 'State', params: {id:id}})
    }
  }
}
</script>

<style scoped>

</style>
