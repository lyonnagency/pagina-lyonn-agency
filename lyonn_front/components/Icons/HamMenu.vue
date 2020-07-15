<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.85 11.36">
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_1-2" data-name="Capa 1">
        <line id="line-1" class="cls-1" x1="1" y1="1" :x2="x21" y2="1"/>
        <line id="line-2" class="cls-1" x1="1" y1="10.36" :x2="x22" y2="10.36"/>
      </g>
    </g>
  </svg>
</template>

<script>
  export default {
    name: 'HamMenu',
    props:{
      x21:{
        type: String,
        default: '21'
      },
      x22:{
        type: String,
        default: '11'
      },
    }
  }
</script>

<style lang="scss" scoped>
  .cls-1 {
    fill: none;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }

  svg.black-ico {
    .cls-1 {
      stroke: #262626;
    }
  }

  svg.white-ico {
    .cls-1 {
      stroke: #ffffff;
    }

    #line-1 {
      transform: rotate(45deg) translateY(45%);
      transform-origin: center;

    }

    #line-2 {
      transform: rotate(-45deg) translateY(-50%);
      transform-origin: center;
    }
  }
</style>
