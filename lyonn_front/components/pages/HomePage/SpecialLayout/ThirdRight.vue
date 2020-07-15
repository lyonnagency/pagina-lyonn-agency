<template>
  <div class="home-section-6" v-scroll="handleScroll">
    <div class="circle-center circle-base">
      <div class="text-center text-color-reg">
        <span class="ff-boston fw-700 fs-40">{{counters['countries']}}</span>
        <br />
        <span class="ff-boston fw-500 fs-13">Countries</span>
      </div>
    </div>
    <div class="circle-top circle-base">
      <div class="text-center text-color-dev">
        <span class="ff-boston fw-700 fs-40">{{counters['brand']}}+</span>
        <br />
        <span class="ff-boston fw-500 fs-13">New Brands</span>
      </div>
    </div>
    <div class="circle-bottom circle-base">
      <div class="text-center text-color-design">
        <span class="ff-boston fw-700 fs-40">{{counters['bigBrands']}}</span>
        <br />
        <span class="ff-boston fw-500 fs-13">Big Brands</span>
      </div>
    </div>
    <div class="circle-left circle-base">
      <div class="text-center text-color-yelow">
        <span class="ff-boston fw-700 fs-40">{{counters['customers']}}+</span>
        <br />
        <span class="ff-boston fw-500 fs-13">Customers</span>
      </div>
    </div>
    <div class="circle-right circle-base">
      <div class="text-center text-color-green">
        <span class="ff-boston fw-700 fs-40">{{counters['startups']}}+</span>
        <br />
        <span class="ff-boston fw-500 fs-13">New Startups</span>
      </div>
    </div>
    <Triangle class="small-figure"></Triangle>
    <Rectangle class="small-figure"></Rectangle>
    <Equis class="small-figure"></Equis>
    <Rectangle class="small-figure"></Rectangle>
    <Triangle class="small-figure"></Triangle>
    <CircleLyonn class="small-figure"></CircleLyonn>
    <Triangle class="small-figure"></Triangle>
    <Rectangle class="small-figure"></Rectangle>
  </div>
</template>

<script>
import Equis from '~/components/Icons/SmallFigures/xblue'
import Rectangle from '~/components/Icons/SmallFigures/rectangle'
import Triangle from '~/components/Icons/SmallFigures/triangle'
import CircleLyonn from '~/components/Icons/SmallFigures/circle-fig'
import Vue from 'vue'
export default {
  name: 'ThirdRight',
  components: {
    Equis,
    Rectangle,
    Triangle,
    CircleLyonn
  },
  created() {
    Vue.directive('scroll', {
      inserted: function(el, binding) {
        let f = function(evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
            //alert('acabo')
          }
        }
        window.addEventListener('scroll', f)
      }
    })
  },
  data() {
    return {
      counters: {
        countries: 0,
        brand: 0,
        startups: 0,
        bigBrands: 0,
        customers: 0
      },
      countersTop: {
        countries: 5,
        brand: 30,
        startups: 50,
        bigBrands: 3,
        customers: 100
      }
    }
  },
  methods: {
    upgradeNumber() {
      // Increaces the numbers

      // iterates over the object
      for (const key in this.counters) {
        let interval = false
        interval = window.setInterval(() => {
          // if the iteretor is greater than the seted on the countersTop object, clear the interval
          if (this.counters[key] + 1 >= this.countersTop[key]) {
            clearInterval(interval)
          }
          this.counters[key] += 1
        }, 100)
      }
    },
    handleScroll: function(evt, el) {
      // alert();
      // console.log((el.getBoundingClientRect().top))
      if (el.getBoundingClientRect().top < 450) {
        this.upgradeNumber()
        return true
      }
    }
  }
}
</script>

<style scoped>
</style>
