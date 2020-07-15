<template>
  <div class="border-radius-50 py-4 d-flex my-2 color-hover services-card-hover" :class="'color-'+area+'-hover'">
    <div class="col-3 col-md-3 d-flex justify-content-end">
      <img  class="ico-sm-20" :src="require('~/assets/img/ico/'+icoBase)" alt="Diseño de marcas">
    </div>
    <div class="col-9"><h3 class="ff-gilroy-bold fw-500 fs-13 my-0 fs-18" v-html="splitService"></h3></div>
  </div>
</template>

<script>
  export default {
    name: "home-services",
    props:{
      icoBase:{
        type:String,
        default:'area-desing-simple.svg'
      },
      serviceTit:{
        type:String,
        default:'Diseño de marcas'
      },
      area:{
        type:String,
        default:'design'
      }
    },

    computed:{
      splitService(){
        let newWord = ''
        let splited = this.serviceTit.split(' ')
        // console.log(splited)
        splited.forEach((word, index) => {
          newWord+=' '
          if (index>0 & index<2) {
            newWord+='<br/>';
          }
          newWord+=word;
        });
        return newWord
        console.log(newWord)
      }
    },
    mounted(){
      //this.splitService()
    }
  }
</script>

<style scoped>

</style>
