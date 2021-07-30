<template>
  <!-- <svg v-on:mouseenter="startScissors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.38 291.51">
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <circle ref="circleelem" class="cls-1" cx="40.11" cy="140.25" r="39.6"/>
        <path ref="topElem" class="cls-1" d="M78,122.2S67.8,68.52,15.06,43"/>
        <path ref="bottomElem" class="cls-1" d="M80.25,148.82s1.3,54.62-44.88,90.7"/>
        <circle class="cls-2" cx="18.71" cy="248.54" r="9.02"/>
        <polygon class="cls-2" points="12.41 14.5 12.44 27.41 29.76 20.92 12.41 14.5"/>
        <line class="cls-3" x1="12.41" y1="14.5" x2="12.45" y2="33.89"/>
        <line class="cls-3" x1="7.66" y1="33.9" x2="17.24" y2="33.88"/>
        <text ref="startTxt" class="cls-4" transform="translate(27.03 281.69)">Estrategia</text>
        <text ref="goalTxt" class="cls-4" transform="translate(40.11 18.24)">Meta!</text>
      </g>
    </g>
  </svg> -->
  <svg v-on:mouseenter="startScissors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.38 293.8">
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <circle ref="circleelem" class="cls-1" cx="40.11" cy="139.8" r="39.6" />
        <path ref="bottomElem" class="cls-1" d="M78,121.75s-10.22-53.68-63-79.23" />
        <path ref="topElem" class="cls-1" d="M80.25,148.37s1.3,54.62-44.88,90.7" />
        <polygon class="cls-2" points="18.02 236.68 18.05 249.59 35.37 243.1 18.02 236.68" />
        <line class="cls-3" x1="18.02" y1="236.68" x2="18.06" y2="256.08" />
        <line class="cls-3" x1="13.27" y1="256.09" x2="22.85" y2="256.07" />
        <circle class="cls-2" cx="10.45" cy="26.24" r="9.02" />
        <text ref="startTxt" class="cls-4" transform="translate(27.03 18.24)">Strategy</text>
        <text ref="goalTxt" class="cls-4" transform="translate(40.11 283.98)">Goal!</text>
      </g>
    </g>
  </svg>
</template>

<script>
import { TweenMax, Sine } from 'gsap'

export default {
  name: 'home-start-goal-home',
  methods: {
    startScissors() {
      //alert();
      this.startAnim(this.$refs.startTxt, 5, 5)
      this.bottomAnim(this.$refs.bottomElem, 5, 5)
      this.circleAnim(this.$refs.circleelem, 5, 5)
      this.topAnim(this.$refs.topElem, 5, 5)
      this.goalAnim(this.$refs.goalTxt, 5, 5)
    },
    startAnim(el, rot, x) {
      TweenMax.to(el, 1.25, {
        //x: x,
        //rotation: rot,
        scale: 1.2,
        repeat: 1,
        yoyo: true,
        svgOrigin: '0 5',
        ease: Sine.easeInOut
      })
    },
    bottomAnim(el, rot, x) {
      TweenMax.to(el, 1.25, {
        //x: x,
        scale: 1.05,
        repeat: 1,
        yoyo: true,
        svgOrigin: '0 5',
        ease: Sine.easeInOut,
        delay: 0.5
      })
    },
    circleAnim(el, rot, x) {
      TweenMax.to(el, 1.25, {
        //x: x,
        scale: 1.05,
        repeat: 1,
        yoyo: true,
        svgOrigin: '0 5',
        ease: Sine.easeInOut,
        delay: 1
      })
    },
    topAnim(el, rot, x) {
      TweenMax.to(el, 1.25, {
        //x: x,
        scale: 1.05,
        repeat: 1,
        yoyo: true,
        svgOrigin: '0 5',
        ease: Sine.easeInOut,
        delay: 1.5
      })
    },
    goalAnim(el, rot, x) {
      TweenMax.to(el, 1.25, {
        //x: x,
        //rotation: rot,
        scale: 1.02,
        repeat: 1,
        yoyo: true,
        svgOrigin: '0 5',
        ease: Sine.easeInOut,
        delay: 2
      })
    }
  },
  mounted() {
    this.startScissors()
  }
}
</script>

<style scoped>
.cls-1,
.cls-3 {
  fill: none;
  stroke: #ff5a5f;
  stroke-miterlimit: 10;
}

.cls-1 {
  stroke-linecap: round;
  stroke-dasharray: 6;
}

.cls-2,
.cls-4 {
  fill: #ff5a5f;
}

.cls-2 {
  opacity: 0.61;
}

.cls-4 {
  font-size: 20px;
  font-family: Baysoir;
}
</style>
