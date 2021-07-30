<template>
  <div class="text-center text-sm-left">
    <h3 class="ff-gilroy-bold fw-700 fs-30 pr-sm-5 pr-md-0" :class="classColor">{{title}}</h3>
    <p class="ff-boston fw-300 fs-16 my-4">
     {{description}}
    </p>
    <button class="btn-lyonn" :class="classBtn">
<!--      Comenzar-->
      Start Now
    </button>
  </div>
</template>

<script>
  export default {
    name: "DescriptionSide",
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      btnText: {
        type: String,
        default: ''
      },
      classColor: {
        type: String,
        default: ''
      },
      classBtn: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
