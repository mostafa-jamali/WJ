<template>
  <b-row class="blog-card mb-3">
    <b-col cols="3"><img src="../../assets/images/blog-img.png" alt="blog-ig" class="blog-img" /></b-col>
    <b-col cols="7">{{ blog.author }}</b-col>
    <b-col cols="2"></b-col>
  </b-row>
</template>
<script>
export default {
  name: 'BlogCard',
  props: {
    blog: {
      type: Object,
    },
  },
};
</script>
<style lang="scss"></style>
