<template>
  <div class=" main-areas-left d-flex justify-content-center align-items-center">
    <div class="col-4 px-1">
      <div class="card-lyonn-sec border-radius-15 shadow-lyonn d-flex align-items-center">
        <div class="px-xl-5 py-xl-5 w-100">
          <img class="ico-area-hero" src="~/assets/img/ico/area-design.svg"
               alt="Diseño Gráfico Lyonn Agency">
<!--          <h2 class="ff-boston fw-500 fs-16 mt-4 px-2 px-sm-4 text-color-design">Diseño de marcas</h2>-->
          <h2 class="ff-boston fw-500 fs-16 mt-4 px-2 px-sm-4 text-color-design">Brand Design</h2>
        </div>
      </div>
    </div>
    <div class="col-4 px-1">
      <!--COMPONENT-->
      <LeftArrow class="left-arrow"></LeftArrow>
      <div class="card-lyonn-sec border-radius-15 shadow-lyonn d-flex align-items-center">
        <div class="px-xl-5 py-xl-5 w-100">
          <img class="ico-area-hero" src="~/assets/img/ico/area-m.k.svg"
               alt="Diseño Gráfico Lyonn Agency">
<!--          <h2 class="ff-boston fw-500 fs-16 mt-4 px-2 px-sm-4 text-color-mk">Marketing digital</h2>-->
          <h2 class="ff-boston fw-500 fs-16 mt-4 px-2 px-sm-4 text-color-mk">Digital Marketing</h2>
        </div>
      </div>
      <!--COMPONENT-->
      <RightArrow class="right-arrow"></RightArrow>
    </div>
    <div class="col-4 px-1">
      <div class="card-lyonn-sec border-radius-15 shadow-lyonn d-flex align-items-center">
        <div class="pxllg-5 pxllg-5 w-100">
          <img class="ico-area-hero" src="~/assets/img/ico/area-d.t.svg"
               alt="Diseño Gráfico Lyonn Agency">
<!--          <h2 class="ff-boston fw-500 fs-16 mt-4 px-2 px-sm-4 text-color-dev">Desarrollo web</h2>-->
          <h2 class="ff-boston fw-500 fs-16 mt-4 px-2 px-sm-4 text-color-dev">Web Development</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftArrow from '~/components/Icons/left-arrow-design'
  import RightArrow from '~/components/Icons/right-arrow-dev'

  export default {
    name: "FirstRight",
    components:{
      LeftArrow,
      RightArrow,
    }
  }
</script>

<style scoped>

</style>
