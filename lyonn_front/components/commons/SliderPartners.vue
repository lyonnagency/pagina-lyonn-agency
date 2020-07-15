<template>
  <div class="slider-lyonn">
    <div class="mt-5 py-5 partner-slider">
      <div class="container-item">
        <transition-group name="list-complete">
          <div
            class="partner-slider-item"
            v-for="(item, index) in sliderItemsPartners"
            v-bind:key="item">
            <img :src="require('~/assets/img/ico/partner/'+item)" alt="Portafolio"/>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SliderPartners',
    methods: {
      // this method is used to reorder the elements in the portfolio list
      // what it does is to removes the first element in the array and then
      // put it at the end of the array
      moveSliderPartners() {
        // let size = this.sliderItemsPartners.length
        // // removes the first element
        // let elem = this.sliderItemsPartners.splice(0, 1)
        //
        let size = this.sliderItemsPartners.length
        // removes the first element
        let elem = this.sliderItemsPartners.splice(0, 1)
        //
        setTimeout(() => {
          this.sliderItemsPartners.splice(size, 0, elem[0])
        }, 2000)
      }
    },
    mounted() {
      // window.setInterval(this.moveSliderPartners, 5000)
    },
    props: {
      sliderItemsPartners: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
</style>
