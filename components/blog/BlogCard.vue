<template>
  <b-row class="blog-card mb-3">
    <b-col cols="3"><img src="../../assets/images/blog-img.png" alt="blog-ig" class="blog-img" /></b-col>
    <b-col cols="7">
      <p class="blog-title">{{ blog.title }}</p>
      <p class="blog-body" >{{ blog.body }}</p>
      <div class="blog-info d-flex justify-content-between">
        <p>
          {{ blog.updatedAt }}
          <i class="icon-date ml-1"></i>
        </p>
        <p>
          {{ blog.commentCount }} نظر
          <i class="icon-comment ml-1"></i>
        </p>
        <p>
          <i class="icon-user ml-1"></i>
          {{ blog.author }}
        </p>
      </div>
    </b-col>
    <b-col cols="2" class="align-self-end mb-2">
      <NuxtLink to="/">
        <base-button :btn-name="btnName"></base-button>
      </NuxtLink>
    </b-col>
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
  data() {
    return {
      btnName: 'بیشتر',
    };
  },
  mounted() {
    console.log('blog: ', this.blog);
  },
};
</script>
<style lang="scss"></style>
