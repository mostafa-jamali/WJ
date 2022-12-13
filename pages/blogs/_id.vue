<template>
  <b-container class="wj-main">
    <b-row class="blog-card mb-3">
      <b-col cols="4" lg="3"><img src="../../assets/images/blog-img.png" alt="blog-img" class="blog-img"/></b-col>
      <b-col cols="8" lg="9">
        <div>
          عنوان مقاله: {{ blog.title }}
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'BlogId',
  middleware: 'auth', // this is differnce with auth: true
  data() {
    return {
      btnName: 'بیشتر',
      blog: {}
    };
  },
  mounted() {
     this.getBlog();
  },
  methods:{
     getBlog() {
        this.$axios.$get(`https://challenge.webjar.ir/posts/${this.$route.params.id}`).then(res => this.blog= res.data);
    },
  }
};
</script>
<style lang="scss" src="~/assets/styles/component-styles/blog-card.scss"></style>
