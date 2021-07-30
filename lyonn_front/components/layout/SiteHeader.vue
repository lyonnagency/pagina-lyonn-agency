<template>
  <!-- <div class="container-menu">
    <div class="d-flex align-items-center col-12 px-0">
      <div class="col">
        <span class="menu-hamuger">
          <img src="~/assets/img/ico/menu-bar.svg" alt="Lyonn Agency">
        </span>
      </div>
      <div class="col">
        <div class="menu-logo-wrapper d-flex justify-content-center">
          <nuxt-link to="/">
            <img src="~/assets/img/ico/lyonn-positive.svg" alt="Lyonn Agency Logo">
          </nuxt-link>
        </div>
      </div>
      <div class="col d-flex justify-content-end">
        <a class="text-dark underline-hover" href=" https://wa.me/5214432209267" target="_blank">
          <span class="ff-gilroy-bold fw-700 fs-13">Let's talk</span>
          <img class="wp-menu ml-3" src="~/assets/img/ico/wp-positive.svg" alt="Whatsapp Lyonn Contact">
        </a>
      </div>
    </div>
  </div> -->
  <div
    class="menu-site menu container-menu"
    v-scroll="handleScroll"
    ref="menuHeaderRef"
  >
    <b-navbar class="px-0" toggleable="false" type="dark">
      <div class="d-flex justify-content-between w-100 px-lg-5 px-3 align-items-center">
        <b-navbar-toggle target="nav-collapse" @click="toggleHandler" ref="toggler">
          <span><HamMenu :class="classHamMenu" class="ico-menu"></HamMenu></span>
        </b-navbar-toggle>
        <div class="menu-logo-wrapper d-flex justify-content-center">
          <nuxt-link to="/">
            <img
              src="~/assets/img/ico/lyonn-positive.svg"
              alt="Lyonn Agency Logo"
            />
          </nuxt-link>
        </div>
        <a
          class="text-dark underline-hover d-flex"
          href="https://wa.me/5214435060575"
          target="_blank"
        >
          <span class="ff-gilroy-bold fw-700 fs-13 fs-sm-13 d-none d-sm-block">Contact Us</span>
          <img
            class="wp-menu ml-3"
            src="~/assets/img/ico/wp-positive.svg"
            alt="Whatsapp Lyonn Contact"
          />
        </a>
      </div>
      <b-collapse id="nav-collapse" is-nav>
        <!--    Menu Controls    -->
        <div class="nav-controls px-lg-5 px-3 justify-content-start">
          <b-navbar-toggle target="nav-collapse" @click="toggleHandler" ref="toggler">
            <span><HamMenu x22="21" :class="classHamMenu" class="ico-menu"></HamMenu></span>
          </b-navbar-toggle>
        </div>
        <div class="d-flex px-5 justify-content-end">
          <div class="menu-logo-wrapper menu-logo-expanded d-flex justify-content-center">
            <nuxt-link to="/">
              <img
                src="~/assets/img/ico/lyonn-w.svg"
                alt="Lyonn Agency Logo"
                class="mr-4 mr-sm-0"
              />
            </nuxt-link>
          </div>
        </div>
        <!--   Menu content     -->
        <div class="d-flex h-fi flex-wrap menu-content">
          <div class="container-body px-lg-4 d-flex flex-wrap align-items-center flex-wrap">
            <b-navbar-nav class="col-md-6 col-lg-6 col-12 col-sm-6 menu-links h-fit px-3">
              <b-nav-item class="hover-line-middle" to="/areas/diseno"><span>
<!--                Diseño.-->
                Design.
              </span></b-nav-item>
              <b-nav-item class="hover-line-middle" to="/areas/desarrollo"><span>
<!--                Desarrollo.-->
                Web Development.
              </span></b-nav-item>
              <b-nav-item class="hover-line-middle" to="/areas/mercadotecnia"><span>
<!--                Mercadotecnia.-->
                Marketing.
              </span></b-nav-item>
              <b-nav-item class="hover-line-middle" to="/areas/audiovisual"><span>
<!--                Audiovisual.-->
                Audiovisual.
              </span></b-nav-item>
              <!--              <b-nav-item href="/contacto">Contacto</b-nav-item>-->
            </b-navbar-nav>

            <b-navbar-nav
              class="col-md-2 col-lg-2 col-12 col-sm-3 offset-sm-3 offset-md-4 offset-lg-3 menu-links h-fit px-3 d-flex flex-row flex-sm-column mt-3">
              <div class="col-6 px-sm-0 col-sm-12 pl-0">
                <b-nav-item class="link-18 py-1 hover-line-middle" to="/"><span>Home.</span></b-nav-item>
                <b-nav-item class="link-18 py-1 hover-line-middle" to="/servicios"><span>Services.</span></b-nav-item>
                <b-nav-item class="link-18 py-1 hover-line-middle" to="/galeria"><span>Gallery.</span></b-nav-item>
              </div>
              <div class="col-6 px-sm-0 col-sm-12">
                <b-nav-item class="link-18 py-1 hover-line-middle" to="/portafolio"><span>Portfolio.</span></b-nav-item>
                <b-nav-item class="link-18 py-1 hover-line-middle" to="/nosotros"><span>About Us.</span></b-nav-item>
                <b-nav-item class="link-18 py-1 hover-line-middle" to="/contacto"><span>Contact.</span></b-nav-item>
              </div>
              <!--              <b-nav-item href="/contacto">Contacto</b-nav-item>-->
            </b-navbar-nav>
          </div>
          <div class="col-12 px-0 mt-lg-5 mt-3">
            <div class="container-body social-menu-body">
              <div class="col-12 col-md-10 col-lg-12 d-flex flex-wrap">
                <div class="col-lg-5 px-0 d-flex">
                  <div class="d-flex d-sm-none">
                    <div class=" col-6 col-lg px-sm-0 col-sm-12 pl-0 d-flex flex-column flex-lg-row">
                      <a class="py-1 py-lg-0 ml-0 mx-sm-2 line-float-left-menu" target="_blank"
                         href="https://www.facebook.com/LyonnAgency/">Facebook</a>
                      <a class="py-1 py-lg-0 ml-0 mx-sm-2" target="_blank"
                         href="https://www.instagram.com/lyonn_agency/">Instagram</a>
                    </div>
                    <div
                      class="col-5 col-lg-7 px-sm-0 col-sm-12 d-flex justify-content-lg-start flex-column flex-lg-row">
                      <a class="py-1 ml-0 mx-sm-2" href="#">LinkedIn</a>
                      <a class="py-1 ml-0 mx-sm-2" target="_blank" href="https://wa.me/5214435060575">WhatsApp</a>
                    </div>
                  </div>
                  <div class="d-sm-flex d-none">
                    <a class="py-1 ml-0 mx-sm-2 line-float-left-menu" target="_blank"
                       href="https://www.facebook.com/LyonnAgency/">Facebook</a>
                    <a class="py-1 ml-0 mx-sm-2" target="_blank" href="https://www.instagram.com/lyonn_agency/">Instagram</a>
                    <a class="py-1 ml-0 mx-sm-2" href="#">LinkedIn</a>
                    <a class="py-1 ml-0 mx-sm-2" target="_blank" href="https://wa.me/5214435060575">WhatsApp</a>

                  </div>
                </div>
                <div class="col-lg-7 d-flex flex-wrap px-0 mt-3 mt-sm-0">
                  <a target="_blank" class="py-1 mx-sm-2 col-12 col-sm px-0  line-float-left-menu" href="tel:5214432209267">Phone (443) 220 9267</a>
                  <a target="_blank" class="py-1 mx-sm-2 col-12 col-sm px-0 " href="tel:5214435060575">Office (443) 506 0575</a>
                  <a target="_blank" class="py-1 mx-sm-2 col-12 col-sm px-0 " href="mailto:hola@lyonn.co">Mail hola@lyonn.co</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import Vue from 'vue'

  Vue.directive('scroll', {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
  })

  import HamMenu from '~/components/icons/HamMenu'

  export default {
    name: 'SiteHeader',
    components: {
      HamMenu
    },
    data() {
      return {
        hederHeight: 80, // this data is setted manually
        headerElement: null,
        toggled: false
      }
    },
    mounted() {
      this.headerElement = this.$refs.menuHeaderRef
    },
    methods: {
      handleScroll(evt, el) {
        if (
          window.scrollY > this.hederHeight &&
          !this.headerElement.classList.contains('menu-white')
        ) {
          this.headerElement.classList.add('menu-white')
        } else if (
          window.scrollY < this.hederHeight &&
          this.headerElement.classList.contains('menu-white')
        ) {
          this.headerElement.classList.remove('menu-white')
        }
      },
      toggleHandler(evt) {
        setTimeout(() => {
          this.toggled = this.$refs.toggler.toggleState;
          console.log(this.toggled)
        }, 10)
      }
    },
    computed: {
      classHamMenu: function () {
        let data = this.toggled ? 'white-ico' : 'black-ico';
        console.log(data);
        return data;
      }
    }
  }
</script>

<style lang="scss">
  // @import '~/assets/styles/mixin.scss';
  @import '~/assets/styles/variables.scss';


</style>
