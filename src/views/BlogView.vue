<template>
    <div class="blog-page">
      <h1 class="text-primary">THA BUNI BLOG </h1>
      <h5 class="text-secondary">AN EMBODIMENT OF FERVENT IDEALS. AN ELOQUENT TESTAMENT TO THE ASPIRATIONS THAT KINDLE THE ANTIQUATED HUMAN SPIRIT. A SYMPHONY OF THOUGHT AND ACTION, METICULOUSLY WOVEN THROUGH THE MEDIUM OF WORD, SALT, AND EXPANDED POLYSTYRENE. A CLARION CALL TO THE HEARTS OF THOSE WHO SEEK CHANGE. A LUMINOUS CONSTELLATION GUIDING SEEKERS TOWARDS A SHARED HORIZON OF TRANSFORMATION. A DISHEVELED COLLECTION OF “WORD VOMIT” FROM DERELICTS WHOSE SOLE DESIRE IS…
        <span class="text-primary">SURF</span>.
         </h5>
      <!-- <ul> -->
        <div class="blog-list-container">
          <div v-for="post in posts" :key="post.id">
          <!-- <router-link :to="{ name: 'BlogPost', params: { id: post.id } }">
            {{ post.title }}
          </router-link> -->
              <Card style="width: 25em">
        <template #header>
            <img alt="user header" :src="require(`@/assets/images/${post.src}`)" />
        </template>
        <template #title>{{ post.title }}</template>
        <template #subtitle> {{ post.author }} - {{ post.date }} </template>
        <template #content>
            <p class="m-0">
              {{ post.summary }}
            </p>
        </template>
        <template #footer>
          <router-link :to="{ name: 'BlogPost', params: { id: post.id } }">
            <Button icon="pi pi-book" label="Read Now" />
          </router-link>
        </template>
      </Card>
    </div>
        </div>
      <!-- </ul> -->
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    name: 'BlogView',
    setup() {
      const store = useStore();
      const posts = ref([]);
  
      onMounted(async () => {
        await store.dispatch('fetchBlogPosts');
        posts.value = store.state.blogPosts;
      });
  
      return { posts };
    },
  };
  </script>
  <style scoped>
a {
  /* color: #FFE37B; */
  text-decoration: none;
}
ul {
  list-style: none;
}

h5{
  margin-left: 50px;
    margin-right: 50px;
}

.blog-list-container{
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>