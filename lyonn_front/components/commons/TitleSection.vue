<template>
  <div class="col-12 col-sm-7 col-md-6 col-lg-4 px-sm-0">
    <h2 class=" ff-gilroy-bold fw-700 fs-40 text-center text-sm-left">
      {{title}}
      <br>
      {{title2}}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'TitleSection',
  props: {
    title: {
      type: String,
      default: ''
    },
    title2: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>
