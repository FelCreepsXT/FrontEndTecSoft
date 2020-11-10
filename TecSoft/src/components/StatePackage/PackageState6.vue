<template>
  <v-card>
    <div v-for="pack in packages" :key="pack.id">
      <v-card
          class="mx-auto mb-15"
          max-width="600"
          outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              {{ pack.id }}
            </div>
            <v-list-item-title class="headline mb-1">
              {{ pack.description }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ pack.observations }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </v-card>
</template>

<script>
import PackageService from '@/services/Delivery/packages-service'

export default {
  name: "ShowDeliveryState",
  data(){
    return {
      packages: []
    }
  },
  props: [
    'update'
  ],
  methods: {
    retrievePackageState(id){
      PackageService.getAllByState(id)
          .then(response => {
            this.packages = response.data;
          })
          .catch(e => {
            console.log(e);
          })
    },
    refresh(id){
      this.retrievePackageState(id);
    },
    updateState(id,value){
      PackageService.updatePackageState(id,value)
          .then(response => {
            this.packages = response.data;
            this.refresh(1);
          })
          .catch(e => {
            console.log(e);
          })
    }
  },
  mounted() {
    this.retrievePackageState(6);
  }
}
</script>

<style scoped>

</style>
