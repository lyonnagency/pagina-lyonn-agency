<template>
  <div class="col-3 px-sm-0 col-lg-2 px-lg-4">
    <a :href="linkRef" class="text-black ff-gilroy-bold fw-700 fs-16 reset-link">
      <p class="text-sm-right text-md-center text-lg-right underline-hover underline-center w-100">
        {{linkText}}
      </p>
    </a>
  </div>
</template>

<script>
  export default {
    name: "SeeMoreLink",
    props: {
      linkText:{
        type: String,
        default:'Ver portafolio completo'
      },
      linkRef:{
        type: String,
        default: '#'
      }
    }

  }
</script>

<style>

</style>
