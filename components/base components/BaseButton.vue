<template>
  <b-button variant="primary" class="base-button">
    <i v-if="loading" class="icon-loading ml-1 position-relative"></i>
    {{ btnName }}
  </b-button>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    btnName: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" src="~/assets/styles/component-styles/base/baseButton.scss"></style>
