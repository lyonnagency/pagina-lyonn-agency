<template>
  <div class="contain-wraning text-center py-5">
    <div class="">
      <nuxt-link to="/" title="Inicio">
        <img
          src="~/assets/img/ico/lyonn-positive.svg"
          alt="Link a página de inicio"
          width="60"
          title="Inicio"
        />
      </nuxt-link>
      <div class=" d-flex justify-content-center align-items-center flex-wrap text-center mt-4">

        <div class=" container">
          <h2 class="ff-gilroy-black fs-40 text-center">
<!--            La página de {{nombrePagina}} <br> esta siendo mejorada.-->
            This page is being improved, please come back later.
          </h2>
          <h3 class="ff-gilroy-black fs-30 text-center mt-4">
            We invite you to explore our social networks and see our work portfolio.
          </h3>

          <div class="social-icons-footer d-flex mt-5 justify-content-center">
            <a target="_blank" href="https://www.facebook.com/LyonnAgency/">
              <img src="~/assets/img/ico/social-facebook.svg" alt="Facebook Lyonn Agency"/>
            </a>
            <a target="_blank" href="https://www.instagram.com/lyonn_agency/">
              <img src="~/assets/img/ico/social-instagram.svg" alt="Instagram Lyonn Agency"/>
            </a>
            <a target="_blank" href="https://twitter.com/lyonn_agency">
              <img src="~/assets/img/ico/social-twitter.svg" alt="Twitter Lyonn Agency"/>
            </a>
            <a target="_blank" href="https://www.behance.net/lyonn-agency">
              <img src="~/assets/img/ico/social-behance.svg" alt="Behance Lyonn Agency"/>
            </a>
            <a target="_blank" href="https://dribbble.com/Lyonn">
              <img src="~/assets/img/ico/social-dribbble.svg" alt="Facebook Lyonn Agency"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ResponsiveWarning",
    props: {
      nombrePagina: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>


</style>
