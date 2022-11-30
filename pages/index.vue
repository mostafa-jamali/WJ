<template>
  <b-container class="wj-main">
    <!-- <base-button :btn-name="btnName" :loading="loading" ></base-button> -->
    <ol class="breadcrumb pr-0 mb-5">
      <li class="breadcrumb-item">خانه</li>
      <li class="breadcrumb-item active">وبلاگ</li>
    </ol>
    <b-row class="d-flex flex-column align-items-center">
      <h1 class="mb-5">وبلاگ</h1>
      <b-col cols="10" md="8" lg="6" class="mb-5">
        <b-form-input v-model="querySearch" placeholder="     جستجو کنید ..." class="input-search"></b-form-input>
        <i class="icon-search"></i>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="6" lg="4" class="pl-lg-5">
        <categories></categories>
      </b-col>
      <b-col cols="12" lg="8" class="result-section mt-5 mt-lg-0">
        <p v-if="$fetchState.pending">در حال دریافت اطلاعات....</p>
        <p v-else-if="$fetchState.error">در دریافت اطلاعات خطایی رخ داده است</p>
        <template v-else>
          <blog-card v-for="(blog, index) in blogs" :key="index" :blog="blog"></blog-card>

          <!-- pagination  -->
          <div v-if="totalBlogs > 5" class="d-flex justify-content-center my-5">
            <b-pagination v-model="currentPage" pills :total-rows="totalBlogs" :per-page="limit"
                          @input="getBlogs"></b-pagination>
          </div>
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
      currentPage: 1,
      limit: 5,
      skip: 0,
      totalBlogs: null,
    };
  },

  async fetch() {
    await this.getBlogs();
    await this.getBlogsCount();
  },

  methods: {
    async getBlogsCount() {
      this.totalBlogs = await this.$axios.$get('https://challenge.webjar.ir/posts/count')
    },
    async getBlogs(page) {
      if (page) {
        this.skip = (page - 1) * 5
      } else {
        this.skip = 0
      }
      const requestOptions = {
        params: {
          limit: 5,
          skip: this.skip
        }
      }
      this.blogs = await this.$axios.$get('https://challenge.webjar.ir/posts', requestOptions)
    },
  }
};
</script>

<style lang="scss" src="~/assets/styles/layout/main.scss"></style>

