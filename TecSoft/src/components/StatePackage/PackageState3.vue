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
        <v-card-actions v-if="compare ==='/dispatcher/packages/3'">
          <v-btn
              outlined
              rounded
              text
              @click="updateState(pack.id,-1)"
          >
            AtrasOtra
          </v-btn>
        </v-card-actions>
        <v-card-actions v-if="compare ==='/dealer/packages/3'">
          <v-btn
              outlined
              rounded
              text
              @click="updateState(pack.id,1)"
          >
            Adelante
          </v-btn>
          <v-btn
              outlined
              rounded
              text
              @click="updateState(pack.id,-1)"
          >
            Atras
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>

<script>
import PackageService from '@/services/Delivery/packages-service'

export default {
  name: "PackageState3",
  data(){
    return {
      packages: [],
      compare: this.$route.path
    }
  },
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
          .then(() => {
            this.refresh(3);
          })
          .catch(e => {
            console.log(e);
          })
    }
  },
  mounted() {
    console.log(this.$route.path);
    this.retrievePackageState(3);
  }
}
</script>

<style scoped>

</style>
