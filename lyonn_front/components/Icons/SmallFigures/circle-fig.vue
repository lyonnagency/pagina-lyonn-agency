<template>
  <svg ref="rightscissor" :style="'left:' +left+'%;' +'top:' +top+'%;' " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.94 12.94">
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <circle class="cls-1" cx="6.47" cy="6.47" r="5.47"/>
      </g>
    </g>
  </svg>
</template>

<script>
  export default {
    name: "circle-fig",
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
