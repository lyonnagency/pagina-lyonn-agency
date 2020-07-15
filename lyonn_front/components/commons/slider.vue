<template>
  <div class="slider-lyonn ">
    <div class="mt-5" :class="sliderClass">
      <div class="container-item py-4">
        <VueSlickCarousel v-bind="settings">
          <div
            :class="sliderItemClass"
            v-for="(item, index) in sliderItems"
            v-bind:key="item"
          >
            <div class="img-container">
<!--              {{item}}-->
              <img class="img-slider" :src="getImage(item)" :alt="'Agencia Lyonn - '+item"/>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <!--    <VueSlickCarousel :arrows="true" :dots="true">
          <div
            :class="sliderItemClass"
            v-for="(item, index) in sliderItems"
            v-bind:key="item"
          >
            <div class="img-container">
              <img :src="getImage(item)"  alt="Portafolio" />
            </div>
          </div>
        </VueSlickCarousel>-->
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


  export default {

    name: 'slider',
    components: {VueSlickCarousel},
    methods: {
      // // this method is used to reorder the elements in the portfolio list
      // // what it does is to removes the first element in the array and then
      // // put it at the end of the array
      // moveSliderLeft() {
      //   // removes the first element
      //   let elem = this.sliderItems.splice(0, 1)
      //   // this.sliderItems.splice(this.sliderLen, 0, elem[0])
      //   setTimeout(() => {
      //     this.sliderItems.splice(this.sliderLen, 0, elem[0])
      //   }, 100)
      // },
      // moveSliderRight() {
      //   // removes and get the last element
      //   let elem = this.sliderItems.pop()
      //   // Then wait and inserts the elem variable to the start of the array
      //   setTimeout(() => {
      //     this.sliderItems.splice(0, 0, elem)
      //   }, 100)
      // },
      // touchstart(event) {
      //   this.touch.startX = event.touches[0].clientX
      //   this.touch.endX = 0
      // },
      // touchmove(event) {
      //   this.touch.endX = event.touches[0].clientX
      // },
      // touchend(event) {
      //   if (this.touch.endX < this.touch.startX) this.moveSliderLeft()
      //   else if (this.touch.endX > this.touch.startX) this.moveSliderRight()
      // },
      // dblclick(event) {
      //   this.mouse.startX = event.movementX;
      //   this.mouse.endX = 0
      // },
      // mousedown(event) {
      //   this.mouse.endX = 0
      //   this.mouse.startX = 0
      // },
      // mousemove(event) {
      //   this.mouse.endX = event.movementX
      // },
      // mouseup(event) {
      //   if (this.mouse.endX < this.mouse.startX) this.moveSliderLeft();
      //   else if (this.mouse.endX > this.mouse.startX) this.moveSliderRight();
      // },
      getImage(item) {
        return require('~/assets/img/' + this.subDirectory + item)
      }
    },
    data() {
      return {
        sliderLen: this.sliderItems.length,
        settings: {
          // "centerMode": true,
          "centerPadding": "20px",
          "focusOnSelect": true,
          "infinite": true,
          "slidesToShow": 5,
          "speed": 500,
          "lazyLoad": "ondemand",
          "slidesToScroll": 1,
          "swipeToSlide": true,
          "responsive": [
            {
              "breakpoint": 1024,
              "settings": {
                "centerPadding": "20px",
                "focusOnSelect": true,
                "infinite": true,
                "slidesToShow": 3,
                "speed": 500,
                "lazyLoad": "progressive",
                "slidesToScroll": 1,
                "swipeToSlide": true,
              }
            },
            {
              "breakpoint": 768,
              "settings": {
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "initialSlide": 1
              }
            },
            {
              "breakpoint": 640,
              "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "initialSlide": 1
              }
            },
            {
              "breakpoint": 480,
              "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 1
              }
            },
          ]
        },
        newSliderItems: 2,
        touch: {
          startX: 0,
          endX: 0
        },
        mouse: {
          startX: 0,
          endX: 0
        }
      }
    },
    mounted() {
      // window.setInterval(this.moveSliderRight, 3000)
      // Tocuh events
      // this.$el.addEventListener('touchstart', event => this.touchstart(event));
      // this.$el.addEventListener('touchmove', event => this.touchmove(event));
      // this.$el.addEventListener('touchend', event => this.touchend());
      // // Mouse events
      // this.$el.addEventListener('mousedown', event => this.mousedown(event));
      // this.$el.addEventListener('dblclick', event => this.dblclick(event));
      // this.$el.addEventListener('mousemove', event => this.mousemove(event));
      // this.$el.addEventListener('mouseup', event => this.mouseup());
    },
    props: {
      sliderItems: {
        type: Array,
        default: []
      },
      rootPathImg: {
        type: String,
        default: '~/assets/img/'
      },
      subDirectory: {
        type: String,
        default: 'portfolio/'
      },
      sliderClass: {
        type: String,
        default: 'portfolio-slider'
      },
      sliderItemClass: {
        type: String,
        default: 'portfolio-slider-item'
      }
    }
  }
</script>

<style scoped></style>
