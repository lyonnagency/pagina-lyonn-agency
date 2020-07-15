<template>
  <svg ref="rightscissor" :style="'left:' +left+'%;' +'top:' +top+'%;' " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.83 12.34">
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <path class="cls-1"
              d="M1.47,5l6,5.94a1.58,1.58,0,0,0,2.64-.77l1.65-7.2A1.57,1.57,0,0,0,10,1L2.32,2.29A1.57,1.57,0,0,0,1.47,5Z"/>
      </g>
    </g>
  </svg>
</template>

<script>
  export default {
    name: "triangle",
    data() {
      return {
        left: 0,
        top: 0
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
          rotation: 100,
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
    fill: none;
    stroke: #e494fa;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
</style>
