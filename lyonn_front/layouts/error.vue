<template>
  <div class="contain-wraning text-center py-5 show">
    <div class="">
      <img
        src="~/assets/img/ico/lyonn-positive.svg"
        alt="Lyonn Agency Logo"
        width="60"
      />
      <div class=" d-flex justify-content-center align-items-center flex-wrap text-center mt-4">

        <div class=" container">
          <h2 v-if="statusCode===404" class="ff-gilroy-black fs-30 text-center mt-4">
            ERROR 404
          </h2>
<!--          <h2 class="ff-gilroy-black fs-40 text-center">-->
<!--            Estamos haciendo mejoras a esta página con el fin de brindarte la mejor experiencia.-->
<!--          </h2>-->
          <h3 class="ff-gilroy-black fs-30 text-center mt-4">
            Te invitamos a explorar nuetras redes sociales.
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
    name: 'NuxtError',
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    computed: {
      statusCode () {
        return (this.error && this.error.statusCode) || 500
      },
      message () {
        return this.error.message || '<%= messages.client_error %>'
      }
    },
    head () {
      return {

      }
    }
  }
</script>

<style>

</style>
