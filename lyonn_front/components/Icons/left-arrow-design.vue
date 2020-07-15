<template>
  <svg ref="rightscissor" v-on:mouseenter="startScissors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.06 20.51">
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <g  class="cls-1">
          <path ref="rightscissor" class="cls-2" d="M63.87,13.17C52.66,6.77,27.37-4,1.87,10.24"/>
          <path class="cls-3" d="M67.57,6.64A7.52,7.52,0,1,1,57.19,9,7.51,7.51,0,0,1,67.57,6.64Z"/>
          <polygon class="cls-3" points="3.99 0 5.88 0.66 2.6 9.96 12.12 12.55 11.59 14.48 0 11.33 3.99 0"/>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
  export default {
    name: "left-arrow-design",
    methods: {
      startScissors() {
        this.scissorAnim(this.$refs.rightscissor, 20, 5);
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
        this.startScissors()
      }
  }
</script>

<style scoped>
  .cls-1 {
    opacity: 0.5;
  }

  .cls-2 {
    fill: none;
    stroke: #ff5a5f;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 2px;
    stroke-dasharray: 6 6;
  }

  .cls-3 {
    fill: #ff5a5f;
    stroke-dasharray: 6 6;
  }
</style>
