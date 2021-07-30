<template>
  <section class="curved-wrapper">
<!--    <CurvedBackground></CurvedBackground>-->
    <div class="curved-background"></div>
    <div class="content pt-4">
      <div class="container-body d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap flex-md-nowrap mt-4">
          <div class="col-12 col-md-6 col-lg-6 offset-md-1 d-flex justify-content-sm-center justify-content-lg-start align-items-center flex-wrap px-sm-5 px-md-3">
            <h2 class="text-white ff-gilroy-bold fw-sm-800 fs-33 title-lyonn-call-action text-center text-md-left py-1">
              {{mainTitle}}
              <LyonnIcoPositive class="ico-call-action"></LyonnIcoPositive>
            </h2>
            <h3 class="text-white ff-gilroy-medium fw-300 fs-18 opacity-60 text-center text-md-left py-1">
              {{subTitle}}
            </h3>
          </div>
          <div class="col-md-6 col-lg-4 d-flex align-items-center flex-wrap justify-content-center mt-3 mx-4">
            <a href="https://wa.me/5214435060575" target="_blank" class="btn-lyonn mx-2 my-2 btn-border-black">
<!--              Contáctanos-->
              Contact Us
            </a>
            <a href="https://wa.me/5214435060575" target="_blank" class="btn-lyonn mx-2 my-2 btn-border-black">
<!--              Comenzar-->
              Start Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CurvedBackground from '~/components/layout/curved-background'
import LyonnIcoPositive from '~/components/Icons/LyonnIcoPositive'
export default {
  name: 'CurvedCallToAction',
  components: {
    CurvedBackground,
    LyonnIcoPositive
  },
  props: {
    mainTitle: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>
