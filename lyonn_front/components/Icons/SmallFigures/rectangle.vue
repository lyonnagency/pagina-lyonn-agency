<template>
  <svg ref="rightscissor" :style="'left:' +left+'%;' +'top:' +top+'%;' " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.47 17.47">
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <rect class="cls-1" x="2.34" y="2.34" width="12.79" height="12.79" rx="3.17"
              transform="translate(-3.62 8.73) rotate(-45)"/>
      </g>
    </g>
  </svg>
</template>

<script>
  export default {
    name: "rectangle",
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
    stroke: #86f1e0;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
</style>
