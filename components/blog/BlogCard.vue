<template>
  <b-row class="blog-card mb-3">
    <b-col cols="4" lg="3"><img src="../../assets/images/blog-img.png" alt="blog-img" class="blog-img"/></b-col>
    <b-col cols="8" lg="9">
      <b-row>
        <b-col cols="12" lg="9">
          <p class="blog-title">{{ blog.title }}</p>
          <p class="blog-body">{{ blog.body }}</p>
          <div class="blog-info d-flex justify-content-between">
            <p dir="ltr">
              {{ blog.updatedAt }}
              <i class="icon-date ml-1"></i>
            </p>
            <p dir="ltr">
              {{ blog.commentCount }}
              <i class="icon-comment ml-1"></i>
            </p>
            <p>
              <i class="icon-user ml-1"></i>
              {{ blog.author }}
            </p>
          </div>
        </b-col>
        <b-col cols="12" lg="3" class="align-self-end mb-2">
          <NuxtLink :to='`/blogs/${blog._id}`'>
            <base-button :btn-name="btnName"></base-button>
          </NuxtLink>
        </b-col>
      </b-row>
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
};
</script>
<style lang="scss" src="~/assets/styles/component-styles/blog-card.scss"></style>
