<template>
  <div v-for="product in products" :key="product.sku">
    <card :product="product" ></card>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
  setup() {
    onMounted(async () => {
    try {
      await shopService.getAllProducts('api/Products')
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