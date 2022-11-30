<template>
  <div class="category-section ml-lg-5 p-3">
    <p class="category-heading mb-1">دسته بندی</p>

    <b-form-group
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        v-for="caategory in categories"
        v-model="selected"
        :key="caategory._id"
        :value="caategory.name"
        :aria-describedby="ariaDescribedby"
      >
        {{ caategory.name }}
      </b-form-checkbox>
    </b-form-group>

  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: 'Categories',
  data() {
    return {
      selected: [],
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories,
    })
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    ...mapActions(['getCategories']),
  }
}
</script>
<style lang="scss" src="~/assets/styles/component-styles/category.scss"></style>
