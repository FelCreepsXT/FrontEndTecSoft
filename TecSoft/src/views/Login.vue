<template>
  <div class="text-center">
    <h1 >Bienvenido Login</h1>
    <div class="my-2">
      <v-btn @click="navigateToHomeCustomer(1)">Customer</v-btn>
    </div>
    <div class="my-2">
      <v-btn @click="navigateToHomeCompany(1)">Company</v-btn>
    </div>
    <div class="my-2">
      <v-btn @click="navigateToHomeDealer(1)">Dealer</v-btn>
    </div>
    <div class="my-2">
      <v-btn @click="navigateToHomeDispatcher(1)">Dispatcher</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  methods:{
    navigateToHomeCustomer(id){
      this.$route
      this.$router.push({ name: 'HomeCustomer', params: {id:id} });
    },
    navigateToHomeDealer(id){
      this.$router.push({ name: 'HomeDealer', params: {id:id}});
    },
    navigateToHomeCompany(id){
      this.$router.push({ name: 'AppCompany', params: {id:id} });
    },
    navigateToHomeDispatcher(id){
      this.$router.push({name: 'HomeDispatcher', params: {id:id}});
    }
  }
}
</script>
