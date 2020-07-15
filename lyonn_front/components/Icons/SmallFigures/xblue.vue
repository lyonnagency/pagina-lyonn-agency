<template>
  <svg ref="rightscissor" :style="'left:' +left+'%;' +'top:' +top+'%;' " xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 11.76 11.78">
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <path class="cls-1" d="M9.86,0l1.9,1.9-4,4,4,4-1.9,1.9-4-4-4,4L0,9.86l4-4-4-4L1.9,0l4,4Z"/>
      </g>
    </g>
  </svg>
</template>

<script>
  import {TweenMax, Sine} from 'gsap'

  export default {
    name: "xblue",
    data() {
      return {
        left:0,
        top:0
      }
    },
    methods: {
      calculatePosition() {
        this.left = Math.random() * 100;

        this.top = Math.random() * 100;
      },
      startMove() {
        //this.move(this.$refs.rightscissor, 30)
      },
      move(el, rot) {
        TweenMax.to(el, 2, {
          repeat: 'infinite',
          rotation:100,
          yoyo: true,
          svgOrigin: '0 5',
          ease: Sine.easeInOut
        })
      },
    },
    mounted() {
      this.calculatePosition();
      this.startMove();
    },
  }
</script>

<style scoped>
  .cls-1 {
    fill: #89d4ed;
  }
</style>
