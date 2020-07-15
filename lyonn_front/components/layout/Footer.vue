<template>
  <footer>
    <div class="d-flex container-body px-4 flex-wrap">
      <div class="col-12 col-md-4 col-lg-3 h-fit">
        <h3 class="ff-gilroy-bold fw-700 fs-22 fs-sm-22 mb-0 title-area-footer" @click="expandMenuFooter('servicios')">
          Servicios</h3>
        <ul ref="servicios" class="ff-gilroy-bold fw-700 list-footer">
          <li>
            <nuxt-link to="/servicios">Diseño de logotipos en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Diseño de marcas en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Páginas Web en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Tienda en Línea en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Plataformas Digitales en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Negocios Digitales en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Registro de Marca en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Sistemas de Gestión (E.R.P.) en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Aplicaciones Móviles en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Marketing Digital en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Redes Sociales en Morelia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/servicios">Vídeos & Spots en Morelia</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-4 col-lg-3 h-f h-fit">
        <h3 class="ff-gilroy-bold fw-700 fs-22 fs-sm-22 mb-0 title-area-footer" @click="expandMenuFooter('soporte')">
          Soporte</h3>
        <ul ref="soporte" class="ff-gilroy-bold fw-700 list-footer">
          <li>
            <nuxt-link to="/soporte">Licencia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/soporte">Consultoría</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/soporte">Ventas</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/soporte">Recursos</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/soporte">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/soporte">FAQ</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/soporte">Conferencias & Cursos</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/soporte">Soporte</nuxt-link>
          </li>
        </ul>
        <h3 class="ff-gilroy-bold fw-700 fs-22 fs-sm-22 mb-0 title-area-footer" @click="expandMenuFooter('terminos')">
          Términos &
          Condiciones</h3>
        <ul ref="terminos" class="ff-gilroy-bold fw-700 list-footer">
          <li>
            <nuxt-link to="/terminos-y-condiciones">Términos de Servicio</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/terminos-y-condiciones">Privacidad de datos</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-4 col-lg-2 h-fit">
        <h3 class="ff-gilroy-bold fw-700 fs-22 fs-sm-22 mb-0 title-area-footer" @click="expandMenuFooter('compañia')">
          Agencia
        </h3>
        <ul ref="compañia" class="ff-gilroy-bold fw-700 list-footer">
          <li>
            <nuxt-link to="/nosotros">Nosotros</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/agencia">Trabajo</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contacto">Contacto</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/agencia">Allianzas</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/agencia">Accionista de Lyonn</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/agencia">Lyonn para ti</nuxt-link>
          </li>
        </ul>
        <h3 class="ff-gilroy-bold fw-700 fs-22 fs-sm-22 mb-0 title-area-footer" @click="expandMenuFooter('areas')">
          Áreas</h3>
        <ul ref="areas" class="ff-gilroy-bold fw-700 list-footer">
          <li>
            <nuxt-link to="areas/diseno">Diseño Gráfico</nuxt-link>
          </li>
          <li>
            <nuxt-link to="areas/desarrollo">Desarrollo Web</nuxt-link>
          </li>
          <li>
            <nuxt-link to="areas/mercadotecnia">Marketing Digital</nuxt-link>
          </li>
          <li>
            <nuxt-link to="areas/audiovisual">Producción Audiovisual</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-8 col-lg-4 mt-4 mt-sm-5 mt-lg-0 h-fit mx-md-auto">
        <div>
          <h3 class="ff-gilroy-bold fw-700 fs-22 fs-sm-28 text-sm-center text-lg-left">Suscríbete a nuestro boletín</h3>
          <p class="ff-gilroy-medium text-sm-center text-lg-left fw-300 fs-14 fs-sm-14">
            Las últimas noticias, promociones, artículos y recursos de Lyonn,
            enviados directamente a su bandeja de entrada cada mes.
          </p>
        </div>
        <div class="mt-4 mt-sm-5">
          <div class="d-flex align-items-center flex-wrap">
            <div class="col-12 px-0 d-flex align-items-center justify-content-sm-center justify-content-lg-start">
              <ValidationProvider
                ref="myinput"
                mode="eager"
                name="email"
                rules="required|email"
                v-slot="{ errors }"
              >
                <input
                  v-model="singleEmail"
                  type="text"
                  class="input-lyonn col-12 px-0"
                  placeholder="Tu correo electrónico"
                />
                <span class="ff-gilroy-medium fw-300 fs-16">{{ errors[0] }}</span>
              </ValidationProvider>
              <button class="btn-round-row" @click="sendMail"></button>
            </div>
            <br/>
            <span class="ff-gilroy-medium fw-300 fs-14 col-12 px-0">{{messageStatus}}</span>
          </div>
        </div>
        <div class="mt-4 d-none d-sm-block">
          <div
            class="d-flex ff-gilroy-bold fs-16 fs-sm-16 mt-5 fw-700 text-center flex-wrap justify-content-sm-center justify-content-lg-start">
            <p>Movil: (443) 220 9267 Oficina (443) 506 0575</p>
            <p>Mail: hola@lyonn.co | hello@lyonn.co</p>
          </div>
        </div>
        <div class="social-icons-footer d-flex mt-5 justify-content-sm-center justify-content-lg-start">
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
        <div class="mt-4 d-lg-none">
          <p class="ff-gilroy-bold fs-16 fs-sm-16 mt-5 fw-700 text-center text-lg-left ">
            Lyonn Agency © 2020 All Rights Reserved. Lyonn Agency ® is a brand own by Lyonn Company
          </p>
        </div>
      </div>
      <div class="col-12 d-none d-lg-flex justify-content-center">
        <div class="col-6 px-auto d-flex justify-content-center">
          <p class="ff-gilroy-bold fs-16 fs-sm-16 mt-5 fw-700 text-center ">
            Lyonn Agency © 2020 All Rights Reserved. Lyonn Agency ® <br> is a brand own by Lyonn Company
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    methods: {
      expandMenuFooter(refList) {
        console.log(this.$refs);
        if (this.$refs[refList].style.maxHeight) {
          this.$refs[refList].style.maxHeight = null;
          this.$refs[refList].previousElementSibling.classList.remove('expanded');
        } else {
          this.$refs[refList].style.maxHeight = this.$refs[refList].scrollHeight + 'px';
          this.$refs[refList].previousElementSibling.classList.add('expanded');
        }
      },
      async sendMail() {
        // First validate the input
        this.$refs.myinput
          .validate()
          .then(result => {
            // returns the validate state
            return result.valid
          })
          .then(isValid => {
            // creates a new custom promise to handle the logic
            // important to include the async method
            return new Promise(async (resolve, reject) => {
              if (isValid === true) {
                this.messageStatus = 'Enviando...'
                let data = {email: this.singleEmail}
                // cretes the axios petition and waits for the response
                let response = await this.$axios.$post('commons/forms/', data)
                // returns the value returned from the axios petition
                return resolve(response)
              }
              return reject('error')
            })
          })
          .then(response => {
            if (response.success === 'Sent') {
              this.emailSent = true;
              this.singleEmail = '';
              this.messageStatus =
                'Gracias por suscribirte a nuestro boletín!';
              this.$refs.myinput.reset()
            }
          })

      }
    },
    data() {
      return {
        singleEmail: '',
        mailStatus: 'invalid-input',
        emailSent: false,
        messageStatus: ''
      }
    }
  }
</script>

<style>
</style>
