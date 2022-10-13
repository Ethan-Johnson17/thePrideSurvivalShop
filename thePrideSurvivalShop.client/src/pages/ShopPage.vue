<template>
  <div class="container-fluid">
    <div class="row py-5">
      <div class="col-3" v-for="prod in products" :key="prod.id">
        <card :product="prod" ></card>
      </div>
    </div>
  </div>
  
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import {shopService} from '../services/ShopService'

export default {
  setup() {
    onMounted(async () => {
    try {
      await shopService.getAllProducts('api/products')
    } catch (error) {
      logger.error(error)
      Pop.toast(error.message, 'error')
    }
    })
    return {
    products: computed(() => AppState.products)
  }
}
}
</script>

<style>

</style>