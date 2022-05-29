<template>
  <div id="app">
    <h3>Welcome to our site</h3>
    <div style="right: 5%; top: 17%; position: absolute">
      <span>Cart Quantity: {{ store_manager.counter }}</span>
    </div>
    <div class="navbar-nav mr-auto">
      <div
        style="
          display: inline-flex;
          text-align: center;
          width: 170px;
          margin: 0 auto;
        "
      >
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">Posts</router-link>
        </li>
      </div>
    </div>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const store_manager = ref(store.state);
    return {
      store_manager,
    };
  },
  name: "App",
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li.nav-item {
  padding: 5px;
}
</style>
