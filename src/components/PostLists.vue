<template>
  <div class="Counter">
    <button @click="inc">{{ button_message }}</button>
    <ul v-if="store_manager.posts.allposts && store_manager.posts.allposts.length">
      <li v-for="data of store_manager.posts.allposts" :key="data.id">
        <h3>{{ data.title }}</h3>
        <p>{{ data.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup(props) {
    const store = useStore();
    const button_message = ref<string>("Click to show posts");
    const store_manager = ref(store.state);
    const inc = () => {
      button_message.value = "Showing all posts";
      store.dispatch("getallposts");
    };

    return {
      button_message,
      store_manager,
      inc,
    };
  },
  name: "Retriever",
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>