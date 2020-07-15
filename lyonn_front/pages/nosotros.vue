<template>
  <!--  <ResponsiveWarning :nombrePagina="namePage" class="show"></ResponsiveWarning>-->
  <div>
    <MenuHeader></MenuHeader>
    <section class="d-flex justify-content-center height-40 align-items-center">
      <h1 class="ff-gilroy-black fs-50 mt-5">Agencia Lyonn</h1>
    </section>
    <section class="d-flex container-body mb-5 flex-wrap">
      <div class="col-12 col-lg-3 mt-1">
        <ul class="clean-list ff-gilroy-bold fs-22 w-fit-content list-horizontal-sm">
          <li class="underline-hover my-2 mb-md-3 cursor-pointer" @click="nosotrosContent(0, $event)">Nosotros
          </li>
          <li class="underline-hover my-2 my-md-3 cursor-pointer" @click="nosotrosContent(1, $event)">Misión y Visión
          </li>
          <li class="underline-hover my-2 my-md-3 cursor-pointer" @click="nosotrosContent(2, $event)">Cultura Lyonn</li>
          <li class="underline-hover my-2 my-md-3 cursor-pointer" @click="nosotrosContent(3, $event)">Lyonn School</li>
          <li class="underline-hover my-2 my-md-3 cursor-pointer" @click="nosotrosContent(4, $event)">Lyonn Care</li>
          <li class="underline-hover my-2 my-md-3 cursor-pointer" @click="nosotrosContent(5, $event)">Lyonn Actions
          </li>
        </ul>
      </div>
      <div class="col-12 col-lg-7 offset-lg-1" v-html="nosotrosDataContentVar">
      </div>
    </section>
    <SliderLyonn :sliderItems="sliders"></SliderLyonn>
    <section class="d-flex container-body my-5">
      <div class="col-12 col-lg-7 offset-lg-1 offset-lg-4">
        <h2 class="ff-gilroy-semi-bold fs-40 pb-5 text-center text-lg-left">
          Emprende con el valor de un león y
          <br>
          con la creatividad de un niño.
        </h2>
        <p class="ff-boston fs-16 fw-300 text-center text-lg-left">
          Emprender o innovar tu proyecto implica un gran reto, es necesario contar no solo con fondos económicos, sino
          que, también es necesario tener mucho valor, confianza en tu idea, creatividad, actitud de líder para tomar
          decisiones y amor por lo que haces. Sin embargo, en ocasiones, es necesaria la ayuda en caso de que no estar
          seguro hacía donde ir y en ese momento es donde puedes acudir a Agencia Lyonn, que te asistirá con planes
          pensados a futuro, ya que dentro de nuestras propuestas incluimos estrategias de marketing digital, en donde
          podemos incluir todo un proceso que involucra un buen manejo en redes sociales, aumentar tu presencia en
          internet con tu propia página web, además de que si cuentas con tu sitio web, tus posibilidades de llegar a
          más personas se puede incrementar notoriamente; creemos que todo esto es una de las mejores opciones para
          llegar a un gran número de personas con una inversión razonable y así, hacer de tu empresa un negocio de
          éxito.
        </p>
      </div>
    </section>
    <Counter></Counter>
    <CurvedCallToAction
      mainTitle="¿Te vas a perder la oportunidad de hacer crecer tu negocio?"
      subTitle="Obtén un 10% de descuento si mencionas que visitaste nuestra página"
      class="space-bottom-section margin-less-40"
    >
    </CurvedCallToAction>
    <Footer class="mb-5"></Footer>
  </div>
</template>

<script>
  import ResponsiveWarning from "~/components/commons/ResponsiveWarning";

  import MenuHeader from '~/components/layout/SiteHeader'

  import SliderLyonn from '~/components/commons/slider'
  import Counter from '~/components/pages/Nosotros/Counter'
  import CurvedCallToAction from '~/components/layout/CurvedCallToAction'
  import Footer from '~/components/layout/Footer'


  export default {
    name: "nosotros",
    components: {
      ResponsiveWarning,
      MenuHeader,
      SliderLyonn,
      CurvedCallToAction,
      Counter,
      Footer
    },
    data() {
      return {
        namePage: 'nosotros',
        nosotrosDataContentVar: '',
        clieckedElement: null,
        nosotrosDataContent: [
          `
        <h2 class="ff-gilroy-semi-bold fs-40 pb-1 pb-lg-5 text-center text-lg-left">
         Nosotros
        </h2>
        <p class="ff-boston fs-16 fw-300 mt-4 text-center text-lg-left">
           Lyonn es una agencia de publicidad en Morelia que ofrece servicios de Diseño Gráfico, Diseño de logotipos,
           Marketing digital, Manejo de redes sociales, Desarrollo de páginas web y producción audiovisual, que convierte
           ideas, negocios y empresas en éxito, por medio de estrategias globales que involucran todas nuestras áreas de
           manera integral, sumado a modelos de negocios efectivos para el cliente. Agencia Lyonn tiene la capacidad de
           solucionar cualquier problema o necesidad que se suscite en un negocio, una empresa o incluso una idea, pues
           con la integración de todos nuestros departamentos tenemos la capacidad para proveer de soluciones y en efecto
           de éxito.
        </p>`,
          `
        <h2 class="ff-gilroy-semi-bold fs-40 pb-1 pb-lg-1 text-center text-lg-left">
          Misión
        </h2>
        <p class="ff-boston fs-16 fw-300 mt-4 text-center text-lg-left pb-5">
            Crear identidades fuertes que trasciendan en el mercado, por medio de mentes apasionadas y tecnologías de vanguardia.
        </p>
       <h2 class="ff-gilroy-semi-bold fs-40 pb-1 pb-lg-1 text-center text-lg-left">
          Visión
        </h2>
        <p class="ff-boston fs-16 fw-300 mt-4 text-center text-lg-left">
          Ser la agencia nacional más importante y tener renombre a nivel internacional.
        </p>
`,
          `
        <h2 class="ff-gilroy-semi-bold fs-40 pb-1 pb-lg-5 text-center text-lg-left">
          Cultura Lyonn
        </h2>
        <p class="ff-boston fs-16 fw-300 mt-4 text-center text-lg-left">
          En Agencia Lyonn creemos en la importancia de la capacidad profesional de nuestro equipo, pero sin duda, para
          nosotros lo más importante es la calidad humana dentro de un eficiente grupo de trabajo. Con valores como: ser
          Propositivos, Proactividad, Creatividad, Estrategia, Pasión y Ética; hemos trabajado cada día, lo que nos ha
          puesto en el camino correcto para lograr nuestros objetivos y los de nuestros clientes. Además, en cada uno de
          nuestros proyectos, tratamos de integrar nuestros conceptos como agencia: minimalismo, innovación y frescura.
        </p>`, `
        <h2 class="ff-gilroy-semi-bold fs-40 pb-1 pb-lg-5 text-center text-lg-left">
           Lyonn School.
        </h2>
        <p class="ff-boston fs-16 fw-300 mt-4 text-center text-lg-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
        </p>`, `
        <h2 class="ff-gilroy-semi-bold fs-40 pb-1 pb-lg-5 text-center text-lg-left">
           Lyonn Care.
        </h2>
        <p class="ff-boston fs-16 fw-300 mt-4 text-center text-lg-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
        </p>`, `
        <h2 class="ff-gilroy-semi-bold fs-40 pb-1 pb-lg-5 text-center text-lg-left">
           Lyonn Actions.
        </h2>
        <p class="ff-boston fs-16 fw-300 mt-4 text-center text-lg-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
        </p>`,
        ],
        sliders: [
          'port_betanzos.jpg',
          'port_betanzos_2.jpg',
          'port_bubble.jpg',
          'port_bubble_2.jpg',
          'port_capilab.jpg',
          'port_capilab_5.jpg',
          'port_capilab_6.jpg',
          'port_capilab_7.jpg',
          'port_capilab_1.jpg',
          'port_capilab_3.jpg',
          'port_capilab_4.jpg',
          'port_capella_1.jpg',
          'port_eca_1.jpg',
          'port_eca_2.jpg',
          'port_eca_3.jpg',
          'port_eca_4.jpg',
          'port_eca_5.jpg',

          'port_diariom.jpg',
          'port_diariom-2.jpg',
          'port_elprado.jpg',
          'port_flawless.jpg',
          'port_gale.jpg',
          'port_homebird.jpg',
          'port_lafragua.jpg',
          'port_lafragua_2.jpg',
          'port_lord_black.jpg',
          'port_lord_black_2.jpg',
          'port_lucilu.jpg',
          'port_mafra.jpg',
          'port_mfpsicologos.jpg',
          'port_mfpsicologos_2.jpg',
          'port_mfpsicologos_3.jpg',
          'port_mfpsicologos_4.jpg',
          'port_mfpsicologos_5.jpg',
          'port_mfpsicologos_6.jpg',
          'port_oseznos.jpg',
          'port_prefabricaceros.jpg',
          'port_prefabricaceros_2.jpg',
          'port_perrisimo.jpg',
          'port_tavoil.jpg',
          'port_tanoili.jpg',
          'port_tanoili_2.jpg',
          'port_tanoili_avocados.jpg',
          'port_tanoili_avocados_2.jpg',
          'port_tanoili_avocados_3.jpg',
          'port_abaco_1.jpg',
          'port_abaco_2.jpg',
          'port_abaco_4.jpg',
          'port_pluma_1.jpg',
          'port_veneciano_2.jpg',
          'port_1.jpg',

        ],
      }
    },
    methods: {
      nosotrosContent(index, el) {

        console.log(el);
        if (this.clieckedElement !== null) this.clieckedElement.target.classList.remove('active');
        el.target.classList.add('active');
        this.clieckedElement = el;
        this.nosotrosDataContentVar = this.nosotrosDataContent[index];
      }
    },
    created() {
      this.nosotrosDataContentVar = this.nosotrosDataContent[0];
    },
    head() {
      return {
        title: 'Acerca de nosotros',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              `En esta página encontrarás mas detalles sobre ${this.namePage}, por ahora te invitamos a que visites nuestro portafolio.`
          },
          {
            property: 'og:description',
            content: `En esta página encontrarás mas detalles sobre ${this.namePage}, por ahora te invitamos a que visites nuestro portafolio.`,
            vmid: 'og:description'
          },
          {
            property: 'og:url',
            content: 'https://lyonn.co/',
            vmid: 'og:url'
          },
          {
            property: 'og:image',
            'content': '',
            // content: this.socialImg,
            vmid: 'og:image'
          },
          {
            property: 'og:type',
            'content': 'website',
            vmid: 'og:type'
          },
          {
            property: 'og:site_name',
            'content': 'Lyonn Agency',
            vmid: 'og:site_name'
          },
          {
            property: 'og:title',
            content: 'Agencia Lyonn | Acerca de nosotros',
            vmid: 'og:title'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
