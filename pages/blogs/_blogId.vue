<template>
  <b-container class="wj-main">
    <b-row class="blog-card mb-3">
      <b-col cols="4" lg="3"><img src="../../assets/images/blog-img.png" alt="blog-img" class="blog-img"/></b-col>
      <b-col cols="8" lg="9">
        <p v-if="$fetchState.pending">در حال دریافت اطلاعات....</p>
        <p v-else-if="$fetchState.error">در دریافت اطلاعات خطایی رخ داده است</p>
        <div v-else>
          عنوان مقاله: {{ blog.title }}
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'BlogCard',
  props: {
    blog: {
      type: Object,
    },
  },
  data() {
    return {
      btnName: 'بیشتر',
      blog: {}
    };
  },
  async fetch({params}) {
    this.blog = await fetch(
      `https://challenge.webjar.ir/posts/${params.blogId}`
    ).then(res => res.json())
  },
};
</script>
<style lang="scss" src="~/assets/styles/component-styles/blog-card.scss"></style>
