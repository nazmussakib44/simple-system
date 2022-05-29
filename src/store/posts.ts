import axios from "axios";
import { createStore } from "vuex";

export type State = { allposts: any };

const state: State = { allposts: [] };
const posts: any = {
    state,
    actions: {
        getallposts( { commit, state }:any ){
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(function (response) {
                // console.log(response.data)
                commit( 'setPosts', response.data );
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    },

    mutations: {
        setPosts( state:any, data:any ){
            state.allposts = data;
        }
    },

    getters: {
        getPosts( state:any ){
            return state.allposts;
        }
    }
}

export default posts;