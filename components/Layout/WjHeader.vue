<template>
  <div class="wj-header">
    <client-only>
      <b-navbar toggleable="lg" type="dark" variant="light" fixed="top">
        <!-- PC header -->
        <b-container class="d-none d-lg-flex px-0">
          <b-navbar-brand href="/" class="mr-0 ml-5">
            <img src="../../assets/images/logo.svg" alt="wj-logo" class="header-logo rounded" height="40px" />
          </b-navbar-brand>

          <b-navbar-nav class="mr-5">
            <b-nav-item href="/" class="mx-5">خانه</b-nav-item>
            <b-nav-item href="/" class="mx-5">محصولات</b-nav-item>
            <b-nav-item href="/" class="mx-5">خدمات</b-nav-item>
            <b-nav-item href="/" class="mx-5">وبلاگ</b-nav-item>
          </b-navbar-nav>

          <!-- Left aligned nav items -->
          <b-navbar-nav class="mr-auto">
            <b-nav-item-dropdown left class="mr-5">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <i class="icon-user mx-2"></i>
                <em>کاربر</em>
              </template>
              <b-dropdown-item href="/">پروفایل</b-dropdown-item>
              <b-dropdown-item @click="logOutUser">خروج</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-container>

        <!-- mobile header -->
        <b-container class="d-flex d-lg-none px-0">
          <b-navbar-brand href="/" class="mr-0">
            <img src="../../assets/images/logo.svg" alt="wj-logo" class="header-logo rounded" height="30px" />
          </b-navbar-brand>

          <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="pr-0">
              <b-nav-item href="/">خانه</b-nav-item>
              <b-nav-item href="/">محصولات</b-nav-item>
              <b-nav-item href="/">خدمات</b-nav-item>
              <b-nav-item href="/">وبلاگ</b-nav-item>
            </b-navbar-nav>

            <!-- Left aligned nav items -->
            <b-navbar-nav class="pr-0">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <i class="icon-user mx-2"></i>
                  <em>کاربر</em>
                </template>
                <b-dropdown-item href="/">پروفایل</b-dropdown-item>
                <b-dropdown-item @click="logOutUser">خروج</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'WjHeader',
  methods: {
    async logOutUser() {
      await this.$auth.logout();
      this.$router.push({ path: '/auth/login' });
    },
  },
};
</script>
<style lang="scss" src="~/assets/styles/layout/Header.scss"></style>
