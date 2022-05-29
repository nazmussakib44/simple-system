<template>
  <div class="home-data">
    <h3>This is our about page</h3>
    <Cart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cart from "@/components/Cart.vue";

export default defineComponent({
  name: "About",
  components: {
    Cart,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
});
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>