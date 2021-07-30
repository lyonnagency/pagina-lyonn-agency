<!--This is a component to create the card on the home page -->
<template>
  <div class="card-lyonn-hero-main shadow-hover border-radius-30">
    <div class="px-4 py-4 px-md-5 py-md-5">
      <img class="ico-area-hero" :src="require('~/assets/img/ico/'+imageUrl)" alt="Diseño Gráfico Lyonn Agency">
      <h2 class="ff-gilroy-bold fw-700 fs-20 mt-4 pr-5">{{text}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "card-hero",
    props:{
      imageUrl:{
        type: String,
        default:'area-design.svg'
      },
      text:{
        type: String,
        // default:'Diseño Gráfico.'
        default:'Graphic Design.'
      }
    }
  }
</script>

<style>

</style>
