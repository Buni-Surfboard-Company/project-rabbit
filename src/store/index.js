import { createStore } from 'vuex'


export default createStore({
  state: {
    blogPosts: [], // Initialize with an empty array
  },
  mutations: {
    setBlogPosts(state, posts) {
      state.blogPosts = posts;
    },
  },
  actions: {
    async fetchBlogPosts({ commit }) {
      // Fetch blog posts from the static file (replace with your file path)
      const response = await fetch('/blogposts.json');
      const posts = await response.json();
      commit('setBlogPosts', posts);
    },
  },
  getters: {
    getBlogPostById: (state) => (id) => {
      return state.blogPosts.find((post) => post.id == id);
    },
  },
})
