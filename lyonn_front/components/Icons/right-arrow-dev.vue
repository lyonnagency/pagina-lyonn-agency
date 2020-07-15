<template>
  <svg ref="rightscissor" v-on:mouseenter="startScissors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.06 20.51">
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <g  class="cls-1">
          <path  class="cls-2" d="M7.19,7.34c11.21,6.4,36.5,17.17,62,2.93"/>
          <path class="cls-3" d="M3.48,13.86a7.52,7.52,0,1,1,10.38-2.3A7.52,7.52,0,0,1,3.48,13.86Z"/>
          <polygon  class="cls-3"
                   points="67.07 20.51 65.18 19.84 68.46 10.54 58.94 7.96 59.47 6.02 71.06 9.18 67.07 20.51"/>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
  import {TweenMax, Sine} from 'gsap'

  export default {
    name: "right-arrow-dev",
    methods: {
      startScissors() {
        //alert();
        this.scissorAnim(this.$refs.rightscissor, -20, 5);
      },
      scissorAnim(el, rot, x) {
        TweenMax.to(el, 1.25, {
          x: x,
          rotation: rot,
          repeat: 1,
          yoyo: true,
          svgOrigin: '50 45',
          ease: Sine.easeInOut
        })
      },
    },
     mounted(){
        this.startScissors();
      }
  }
</script>

<style scoped>
  svg {
    animation-name: show-arrow;
    animation-duration: 2s;
    animation-delay: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }

  .cls-1 {
    opacity: 0.5;
  }

  .cls-2 {
    fill: none;
    stroke: #22aff8;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 2px;
    stroke-dasharray: 6 6;
  }

  .cls-3 {
    fill: #22aff8;
  }
</style>
