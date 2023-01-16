<template>
    <div class="card rounded">
      <div class="card-body p-0">
        <div class="text-container p-2">
          <h3 class="card-title">{{product.productName}}</h3>
          <p class="card-text">{{product.description}}</p>
          <button class="btn btn-info" data-bs-toggle="modal" :data-bs-target="'#detailsFor' + product.id">Details</button>
        </div>
        <div class="img-container">
          <img class="productImage img-fluid" :src="product.imageUrl" :alt="product.productName">
        </div>
      </div>
    </div>

    <ProductModal :id="'detailsFor' + product.id">
      <template #modal-title>{{ product.productName }}</template>
      <template #modal-body>
        <productDetails :product="product" />
      </template>
    </ProductModal>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  },
  setup(props) {

    return {
      
    }
  }
}
</script>

<style>
.productImage {
  width: 100%;
}

.text-container {
  height: 10rem;
}

</style>