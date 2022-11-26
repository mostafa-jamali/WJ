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
        <b-form-input v-model="" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4" class="pl-5">
        <categories></categories>
      </b-col>
      <b-col cols="8" class="result-section">
        <blog-card></blog-card>
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
    };
  },
};
</script>
<style lang="scss" src="~/assets/styles/component-styles/main.scss"></style>
