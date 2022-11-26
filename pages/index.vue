<template>
  <b-container class="wj-main">
    <!-- <base-button :btn-name="btnName" :loading="loading" ></base-button> -->
    <ol class="breadcrumb pr-0 mb-5">
      <li class="breadcrumb-item">خانه</li>
      <li class="breadcrumb-item active">وبلاگ</li>
    </ol>
    <b-row class="d-flex flex-column align-items-center">
      <h1 class="mb-5">وبلاگ</h1>
      <b-col cols="6" class="mb-5">
        <b-form-input v-model="querySearch" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4" class="pl-5">
        <categories></categories>
      </b-col>
      <b-col cols="8" class="result-section">
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching mountains</p>
        <template v-else>
          <blog-card v-for="(blog, index) in blogs" :key="index" :blog="blog"></blog-card>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      btnName: 'بیشتر',
      loading: false,
      querySearch: '',
      blogs: [],
    };
  },
  async fetch() {
    this.blogs = await fetch('https://challenge.webjar.ir/posts').then(res => res.json());
  },
};
</script>
<style lang="scss" src="~/assets/styles/component-styles/main.scss"></style>
