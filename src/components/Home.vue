<template>
  <div class="home-data">
    <h3>This is our home page</h3>
    <Cart />
    <Product />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cart from "@/components/Cart.vue";
import Product from "@/components/product/product.vue"

export default defineComponent({
  name: "home",
  components: {
    Cart,
    Product
  },
  data() {
    return {
      
    };
  },
  methods: {},
});
</script>

<style>
</style>
