<template>
  <div class="wj-header">
    <client-only>
      <b-navbar toggleable="lg" type="dark" variant="light" fixed="top">
        <!-- PC header -->
        <b-container class="d-none d-lg-flex px-0">
          <nuxt-link to="/">
            <img src="../../assets/images/logo.svg" alt="wj-logo" class="header-logo rounded" height="30px"/>
          </nuxt-link>

          <b-navbar-nav class="mr-5">
            <nuxt-link to="/" class="mx-5">خانه</nuxt-link>
            <nuxt-link to="/" class="mx-5">محصولات</nuxt-link>
            <nuxt-link to="/" class="mx-5">خدمات</nuxt-link>
            <nuxt-link to="/" class="mx-5">وبلاگ</nuxt-link>
          </b-navbar-nav>

          <!-- Left aligned nav items -->
          <b-navbar-nav class="mr-auto">
            <p v-if="userInfo.fullName">{{userInfo.fullName}}</p>
            <b-button v-else variant="primary px-5 py-1" @click="goToLoginPage">ورود</b-button>
            <!--            <b-nav-item-dropdown left class="mr-5">-->
            <!--              &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
            <!--              <template #button-content>-->
            <!--                <i class="icon-user mx-2"></i>-->
            <!--                <em>کاربر</em>-->
            <!--              </template>-->
            <!--              <b-dropdown-item href="/">پروفایل</b-dropdown-item>-->
            <!--              <b-dropdown-item @click="logOutUser">خروج</b-dropdown-item>-->
            <!--            </b-nav-item-dropdown>-->
          </b-navbar-nav>
        </b-container>

        <!-- mobile header -->
        <b-container class="d-flex d-lg-none px-0">
            <nuxt-link to="/">
              <img src="../../assets/images/logo.svg" alt="wj-logo" class="header-logo rounded" height="30px"/>
            </nuxt-link>

          <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="pr-0">
              <nuxt-link to="/">خانه</nuxt-link>
              <nuxt-link to="/">محصولات</nuxt-link>
              <nuxt-link to="/">خدمات</nuxt-link>
              <nuxt-link to="/">وبلاگ</nuxt-link>
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
  data(){
    return{
      userInfo: {}
    }
  },
  mounted() {
    if (this.$nuxt.$auth.loggedIn) {
      this.userInfo = this.$auth.strategies.local.user;
    }
  },
  methods: {
    async logOutUser() {
      await this.$auth.logout();
      this.$router.push({path: '/auth/login'});
    },
    goToLoginPage() {
      this.$router.push({path: '/auth/login'})
    }
  },
};
</script>
<style lang="scss" src="~/assets/styles/layout/Header.scss"></style>
