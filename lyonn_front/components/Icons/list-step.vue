<template>
  <svg class="list-step" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.16 41.42">
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <ellipse class="cls-1" :fill="color" cx="22.08" cy="20.71" rx="22.08" ry="20.71"/>
        <path :fill="color"
              d="M20.18,31.08l-7.93-5.25A1.25,1.25,0,0,1,11.92,24a1.45,1.45,0,0,1,1.93-.31l5.5,3.64L29.93,11a1.44,1.44,0,0,1,1.9-.44,1.27,1.27,0,0,1,.47,1.79Z"/>
      </g>
    </g>
  </svg>
</template>

<script>
  export default {
    name: "list-step",
    props:{
      color:{
        type:String,
        default:'#6ec028'
      }
    }
  }
</script>

<style scoped>

  .cls-1 {
    opacity: 0.1;
  }
  .list-step{
    display: inline-block;
  }
</style>
