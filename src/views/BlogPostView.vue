<template>
    <div>
      <h1 class="text-primary">{{ post.title }}</h1>
      <h4>by {{ post.author }} - {{ post.date }}</h4>
      <Card>
    <template #content>
      <div class="m-0" v-html="renderHtml(post.content)"></div>
    </template>
    <template #footer>
      <router-link to="/blog">
          <Button icon="pi pi-arrow-left" label="Back to Blog" />
      </router-link>
    </template>
</Card>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  
  export default {
    name: 'BlogPost',
    setup() {
      const store = useStore();
      const route = useRoute();
      const postId = ref(route.params.id);
      const post = ref({});
  
      onMounted(async() => {
        await store.dispatch('fetchBlogPosts');
        post.value = store.getters.getBlogPostById(postId.value);
      });

      const renderHtml = (htmlString) => {
      // You can sanitize the HTML if needed (e.g., using DOMPurify)
      // For simplicity, we are not sanitizing in this example
      return htmlString;
    };
  
      return { post, renderHtml };
    },
  };
  </script>
  <style>
.p-card{
  width: 50%;
    margin: auto;
  text-align: left;
}

@media (max-width: 700px) {
  .p-card {
    width: 100%;
    margin: auto;
  text-align: left;
}
}
</style>