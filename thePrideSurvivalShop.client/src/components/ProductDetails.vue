<template>
  <p>{{ product.description }}</p>
  <img :src="product.imageUrl" :alt="product.productName" class="img-fluid productImage">
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  },
  setup(props) {
    return
  }

}
</script>

<style>

</style>