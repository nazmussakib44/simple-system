import { createStore } from "vuex";
import axios from "axios";
import posts from "./posts"

// export type State = { counter: number, posts: any };

// const state: State = { counter: 0, posts: [] };

export const store = createStore({
    // state,
    // actions: {
    //     // getallposts({ commit }) {
    //     //     axios
    //     //         .get("https://jsonplaceholder.typicode.com/posts")
    //     //         .then(function (response) {
    //     //             commit("setposts", response.data);
    //     //         })
    //     //         .catch(function (error) {
    //     //             console.log(error);
    //     //         });
    //     // },
    //     // increment({ commit }) {
    //     //     commit("increment");
    //     // }
    // },
    // mutations: {
    //     // setposts(state, data) {
    //     //     console.log(data)
    //     //     state.posts = data;
    //     // },
    //     // increment(state, data) {
    //     //     state.counter++;
    //     // }
    // },
    // getters: {
    //     // getposts(state) {
    //     //     return state.posts;
    //     // },
    //     // counter(state) {
    //     //     return state.counter;
    //     // }
    // },
    modules: {
        posts
    }
});