<template>
  <div id="home_p" class="overflow-hidden">
    <!--Component-->
<!--    <ResponsiveWarning></ResponsiveWarning>-->
<!--    <ResponsiveWarning nombrePagina="Inicio" class="show"></ResponsiveWarning>-->
<!--    <PageMaintance class="show"></PageMaintance>-->
    <MenuHeader></MenuHeader>
    <section class="hero flex-wrap">
      <div class="hero-sub">
        <BlueCircle></BlueCircle>
        <div
          class="container d-flex flex-wrap align-items-center justify-content-center height-100"
        >
          <div class="d-flex col-12 flex-wrap align-items-center justify-content-center mt-5 mx-sm-2">
            <h1 class="ff-gilroy-black fs-79 text-center mt-5">
<!--              Somos tu agencia-->
<!--              <br/>integral en Morelia-->
              We Are Lyonn, Your Digital Agency
            </h1>
            <div class="col-12 d-flex justify-content-center mt-5 flex-wrap">
              <button class="btn-black btn-lyonn mx-5 mx-sm-2 mx-md-2 my-2 my-mb-0">
<!--                Empezar-->
                Start Now
              </button>
              <a href="https://www.behance.net/lyonn-agency" target="_blank"
                 class="btn-white btn-lyonn mx-5 mx-sm-2 mx-md-2 my-2 my-mb-0">
<!--                Ver Portafolio-->
                View Portfolio
              </a>
            </div>
          </div>
        </div>
        <RedCircle></RedCircle>
      </div>
      <!---->
      <!-- AREAS SECTION-->
      <div class="col-12 px-0 container-body-smaller d-flex space-bottom-section flex-wrap">
        <div class="col-6 col-sm-3 col-md-3 px-sm-0">
          <!--COMPONENT-->
          <CardHero></CardHero>
        </div>
        <div class="col-6 col-sm-3 col-md-3 px-sm-0">
          <!--COMPONENTS-->
<!--          <CardHero imageUrl="area-d.t.svg" text="Desarrollo tecnológico."></CardHero>-->
          <CardHero imageUrl="area-d.t.svg" text="Web Development."></CardHero>
        </div>
        <div class="col-6 col-sm-3 col-md-3 px-sm-0">
          <!--COMPONENTS-->
<!--          <CardHero imageUrl="area-m.k.svg" text="Marketing digital."></CardHero>-->
          <CardHero imageUrl="area-m.k.svg" text="Digital Marketing."></CardHero>
        </div>
        <div class="col-6 col-sm-3 col-md-3 px-sm-0">
          <!--COMPONENTS-->
<!--          <CardHero imageUrl="area-p.a.svg" text="Producción audiovisual."></CardHero>-->
          <CardHero imageUrl="area-p.a.svg" text="Audiovisual Production."></CardHero>
        </div>
      </div>
    </section>
    <!--     SECTION 2 -->
    <section class="space-bottom-section">
      <div class="container-body px-md-4 d-flex justify-content-between align-items-center space-bottom-subsection">
<!--        <TitleSection title="Los servicios que tu" title2="necesitas."></TitleSection>-->
        <TitleSection title="Lyonn's " title2="Services."></TitleSection>
<!--        <div class="col-3 d-none d-md-block">-->
<!--          <a href="#" class="text-black ff-gilroy-bold fw-700 fs-16 link-lyonn">-->
<!--            Ver todos los resultados-->
<!--          </a>-->
<!--        </div>-->
<!--      <SeeMoreLink linkText="Ver todos los servicios" class="d-none d-sm-block"></SeeMoreLink>-->
      <SeeMoreLink linkText="View All Our Services" class="d-none d-sm-block"></SeeMoreLink>
      </div>
      <div class="container-body-lg px-5 px-sm-1 px-md-5 px-lg-0 d-flex align-items-center justify-content-between flex-wrap">
<!--      <div class="container-body px-4 px-sm-0 d-flex align-items-center justify-content-between flex-wrap">-->
        <div class="col-12 col-sm-4 col-lg-3 px-sm-0 px-md-3">
          <!--Column for design-->
          <div v-for="(stikcy, index) in designDataServices.services" v-bind:key="index">
            <HomeServices
              :serviceTit="stikcy"
              :area="designDataServices.titleArea"
              :icoBase="designDataServices.icoBase"
            ></HomeServices>
          </div>
        </div>

        <div class="col-12 col-sm-4 col-lg-3 px-sm-0 px-md-3">
          <!--Column for DT-->
          <div v-for="(stikcy, index) in devDataServices.services" v-bind:key="index">
            <HomeServices
              :serviceTit="stikcy"
              :area="devDataServices.titleArea"
              :icoBase="devDataServices.icoBase"
            ></HomeServices>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-lg-3 px-sm-0 px-md-3">
          <!--Column for MARKETING-->
          <div v-for="(stikcy, index) in mkDataServices.services" v-bind:key="index">
            <HomeServices
              :serviceTit="stikcy"
              :area="mkDataServices.titleArea"
              :icoBase="mkDataServices.icoBase"
            ></HomeServices>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-lg-3 px-sm-0 px-md-3 d-none d-lg-block">
          <!--Column for AUDIOVISUAL PRODUCTION-->
          <div v-for="(stikcy, index) in prodDataServices.services" v-bind:key="index">
            <HomeServices
              :serviceTit="stikcy"
              :area="prodDataServices.titleArea"
              :icoBase="prodDataServices.icoBase"
            ></HomeServices>
          </div>
        </div>
      </div>
      <SeeMoreLink class="col-12 text-center mt-4 d-sm-none" linkText="Ver todos los resultados"></SeeMoreLink>
<!--      <div class="col-12 d-block d-md-none text-center mt-5">-->
<!--        <a href="#" class="text-black ff-gilroy-bold fw-700 fs-16 link-lyonn ">-->
<!--          Ver todos los resultados-->
<!--        </a>-->
<!--      </div>-->
    </section>

    <!--Portafolio de proyectos-->
    <section class="space-bottom-section">
      <div class="container-body px-4 d-flex justify-content-between align-items-center space-bottom-subsection">
<!--        <TitleSection title="Portafolio de" title2="proyectos."></TitleSection>-->
        <TitleSection title="Projects" title2="Portfolio."></TitleSection>
        <SeeMoreLink class="d-none d-sm-block"></SeeMoreLink>
      </div>
      <!--SLIDER COMPONENT-->
      <SliderLyonn :sliderItems="sliders"></SliderLyonn>

    </section>

    <!--SECTION 3-->
    <!--Proyectos-->
    <section class="space-bottom-section">
      <div class="container-body px-md-4">
        <h2 class="text-center ff-gilroy-bold fw-700 fs-40   space-bottom-section">
<!--          Más de-->
<!--          <span class="text-color-design">+100</span>-->
<!--          proyectos de marketing digital y publicidad creativa, diseño web, manejo de redes sociales y mucho más.-->
          Over
          <span class="text-color-design">+100</span>
          Projects Made by Our Digital Marketing Services, Web Design and Professional Logo Design Areas.
        </h2>
        <div class="d-flex flex-wrap flex-md-nowrap">
          <!--Left side-->
<!--          <DescriptionSide-->
<!--            class="col-12 col-md-5 col-lg-4 px-0"-->
<!--            title="Agencia integral, todo en un mismo lugar."-->
<!--            description="-->
<!--            En Lyonn Agency, agencia de publicidad digital en Morelia nos encargamos de cubrir todos los aspectos para-->
<!--            potenciar tu negocio, desde la creación de tu logotipo y el diseño de tu marca, siguiendo por la difusión en-->
<!--            redes sociales para dar a conocer tu trabajo y así lograr una mejor aceptación por parte de tus clientes.-->
<!--            No tienes nada que preocuparte, tenemos paquetes para el manejo de redes sociales que se adaptan a tus necesidades.-->
<!--            Creamos todo el contenido siguiendo las campañas de publicidad digital creativa diseñadas específicamente para tu marca.-->
<!--            Además, podemos ayudarte con la creación de tu propio sitio web y que sea un potenciador para que tu marca sea reconocida.-->
<!--            "-->
<!--            classColor="text-color-design"-->
<!--            classBtn="btn-design"-->
<!--          ></DescriptionSide>-->
          <DescriptionSide
            class="col-12 col-md-5 col-lg-4 px-0"
            title="Digital Agency, All In One Place."
            description="
            Lyonn Agency as a digital agency can take care of covering all the aspects to boost your business. Starting
            from the logo design and a creative branding until share you brand on social media.

            Lyonn can create all content following a creative digital advertising campaigns. We can help with the design
            and development of your own website, using many technologies like WordPress. Also we can provide you design
            of digital banners for websites or social media according to you brand.
            "
            classColor="text-color-design"
            classBtn="btn-design"
          ></DescriptionSide>
          <!--Right Side-->
          <FirstRight class="col-12 col-md-8 col-lg-8 col-xl-7 offset-lg-1 offset-xl-2 mt-5 px-xl-5 mt-lg-0 height-special-figure"></FirstRight>
        </div>
      </div>
    </section>
    <!--SECTION 5-->
    <!--Accompaniment Section-->
    <section class="space-bottom-section">
      <div class="d-flex container-body px-lg-4 flex-wrap-reverse flex-md-nowrap ">
        <SecondLeft class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 mt-5 mt-md-0 height-special-figure"></SecondLeft>
<!--        <DescriptionSide-->
<!--          class="col-12 col-md-5 col-lg-4 offset-md-2 offset-lg-3 "-->
<!--          title="Acompañamiento desde el primer momento."-->
<!--          description="-->
<!--            Todo comienza por definir hacia dónde va tu marca, creando una estrategia de marketing nos dará la pauta para-->
<!--            saber cómo es y hacia donde irá.-->
<!--            Una vez definido lo anterior, comienzamos el proceso creativo para definir la forma intangible de tu marca, su-->
<!--            personalidad, eso que la hará única del resto; es decir, la identidad corporativa de tu marca.-->
<!--            Una vez definida la identidad corporativa, es importante protegerla, es por eso que te ayudamos con el proceso-->
<!--            de registro de marca, siguiendo todas las normativas de la ley.-->
<!--            Es momento de mostrar tu marca al público y hacer que nos reconozcan. Para lograrlo hay que crear difusión en-->
<!--            las redes sociales, ya que, haciendo un correcto manejo de redes sociales podemos llegar a más personas, lo que-->
<!--            se traduce a una mejor aceptación y con ello un aumento en las ventas de tu empresa. Asimismo, también podemos-->
<!--            ayudarte con el diseño y creación de tu sitio web.-->
<!--          "-->
<!--          classColor="text-color-mk"-->
<!--          classBtn="btn-mk"-->
<!--        ></DescriptionSide>-->
        <DescriptionSide
          class="col-12 col-md-5 col-lg-4 offset-md-2 offset-lg-3 "
          title="Professional Accompaniment With You Troughout The Process."
          description="
          Lyonn Agency will be with you at all time and make you feel safe. Sometimes start a new business could be a
          challenge because you do not know where to start. You will get professional advices to make you company grow.

          We will create a creative strategy, starting from the brand design and logo, social media management and
          website creation. Lyonn hears you to create your brand identity to be sure that the result will be what you
          want. We are a professional digital agency and we love to give just the best for all our customers.

          You don’t have to worry about anything, Lyonn has everything covered, we will giving you periodical advances
          about your project.
          "
          classColor="text-color-mk"
          classBtn="btn-mk"
        ></DescriptionSide>
      </div>
    </section>
    <!--SECTION 6-->
    <!--Accompaniment Section-->
    <section class="space-bottom-section">
      <div class="d-flex container-body px-md-4 flex-wrap flex-md-nowrap">
<!--        <DescriptionSide-->
<!--          class="col-12 col-md-5 col-lg-4"-->
<!--          title="Experiencia en diversos rubros y muchas ideas."-->
<!--          description="-->
<!--          Hemos tenido el privilegio de colaborar en diversos rubros empresariales, startups, mypymes, pequeñas y grandes-->
<!--          marcas de Morelia, México y diferentes partes del mundo. Puedes estar seguro de que podemos ayudarte.-->
<!--          Aportaremos ideas creativas e innovadoras de gran valor para que al finalizar el proyecto quedes 100% satisfecho con el resultado.-->
<!--          Podemos aportar valor sin importar en la parte del proceso en la que este tu marca, ya que puedes contar con-->
<!--          Lyonn Agency en la creación de logotipos, folletos, diseño de papelería corporativa o empresarial, menús para-->
<!--          tu restaurante, diseño y creación de páginas web, e-commerce, spot comerciales, motion graphic, fotografía de-->
<!--          producto, todo tipo de producción audiovisual, community management, estrategias creativas, ,estrategias digitales,-->
<!--          campañas en Facebook, branding y mucho más.-->
<!--"-->
<!--          classColor="text-color-dev"-->
<!--          classBtn="btn-dev">-->
<!--        </DescriptionSide>-->
        <DescriptionSide
          class="col-12 col-md-5 col-lg-4"
          title="Experience In Many Areas And So Many Ideas."
          description="
          We have worked with many companies around the world, so this has given us the experience to improve your brand.
          No matter the objective, you can be sure we can help you. Lyonn agency will help you using a creative internet
          marketing campaign or designing your new brand.

          Lyonn can help you creating a personal or a simple website to give a more professional look to your brand. We
          can create a simple WordPress website or an e-commerce using WooCommerce to sell your products around the world.
          Lyonn is full service digital Agency, providing you web design, responsive design and of course web development
          for your webpage. Trust in Lyonn Agency means leave in the hands of professionals the result you always wanted.
"
          classColor="text-color-dev"
          classBtn="btn-dev">
        </DescriptionSide>
        <ThirdRight class="col-12 col-md-7 offset-md-1 col-lg-5 offset-lg-3 height-special-figure"></ThirdRight>
      </div>
    </section>
    <section class="space-bottom-section">
      <div class="d-flex container-body px-4 col-12 space-bottom-subsection">
        <div class="col-12">
          <h2 class=" ff-gilroy-bold fw-700 fs-40 text-center">
<!--            Nos han brindado su-->
<!--            <br>-->
<!--            confianza.-->

            Lyonn Customers
          </h2>
        </div>
      </div>
      <SliderLyonn
        :sliderItems="slidersPartner"
        subDirectory="ico/partner/"
        sliderClass="partner-slider"
        sliderItemClass="partner-slider-item">
      </SliderLyonn>
    </section>
<!--    <CurvedCallToAction-->
<!--      mainTitle="¿Te vas a perder la oportunidad de hacer crecer tu negocio?"-->
<!--      subTitle="Obtén un 10% de descuento si mencionas que visitaste nuestra página"-->
<!--      class="space-bottom-section"-->
<!--    >-->
<!--    </CurvedCallToAction> -->
    <CurvedCallToAction
      mainTitle="Don´t Lose The Opportunity To Grow Your Business!"
      subTitle="Get a 10% discount if you mention that you visited our page"
      class="space-bottom-section"
    >
    </CurvedCallToAction>
    <Footer class="mb-5"></Footer>

  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import MenuHeader from '~/components/layout/SiteHeader'
  import Footer from '~/components/layout/Footer'
  import CardHero from '~/components/pages/HomePage/card-hero'
  import HomeServices from '~/components/pages/HomePage/home-services'
  import SliderLyonn from '~/components/commons/slider'
  import TitleSection from '~/components/commons/TitleSection'
  import SeeMoreLink from "~/components/commons/SeeMoreLink";

  // Layout
  import DescriptionSide from '~/components/pages/HomePage/DescriptionSide'
  import FirstRight from '~/components/pages/HomePage/SpecialLayout/FirstRight'
  import SecondLeft from '~/components/pages/HomePage/SpecialLayout/SecondLeft'
  import ThirdRight from '~/components/pages/HomePage/SpecialLayout/ThirdRight'
  import ResponsiveWarning from "~/components/commons/ResponsiveWarning";
  import PageMaintance from "~/components/commons/PageUnderMaintance";
  //
  import CurvedCallToAction from '~/components/layout/CurvedCallToAction'

  // Icons
  import  BlueCircle from '~/components/Icons/BlueCIrcle'
  import RedCircle from '~/components/Icons/RedCircle'

  export default {
    components: {
      Logo,
      MenuHeader,
      Footer,
      CardHero,
      HomeServices,
      SliderLyonn,
      TitleSection,
      CurvedCallToAction,

      DescriptionSide,
      FirstRight,
      SecondLeft,
      ThirdRight,

      BlueCircle,
      RedCircle,

      ResponsiveWarning,
      SeeMoreLink,
      PageMaintance
    },
    computed: {},
    data: function () {
      return {
        designDataServices: {
          titleArea: 'design',
          icoBase: 'area-desing-simple.svg',
          services: [
            // 'Diseño de marcas',
            // 'Diseño de logotipos',
            // 'Diseño de publicidad'
            'Brand Design',
            'Logo Design',
            'Advertising Design'
          ]
        },
        devDataServices: {
          titleArea: 'dev',
          icoBase: 'area-dev-simple.svg',
          services: [
            // 'Páginas web & e-commerce',
            // 'Sistemas web & plataformas',
            // 'Sistemas empresariales'
            'Websites & E-commerce',
            'Web Systems & Platforms',
            'Systems Management'
          ]
        },
        mkDataServices: {
          titleArea: 'mk',
          icoBase: 'area-mk-simple.svg',
          services: [
            // 'Estratégias de marketing',
            // 'Redes sociales',
            // 'Registro de marcas'
            'Marketing Strategies',
            'Social Media',
            'Trademark Registration'
          ]
        },
        prodDataServices: {
          titleArea: 'prod',
          icoBase: 'area-prod-simple.svg',
          services: [
            // 'Spots comerciales',
            // 'Motion graphics',
            // 'Fotografía de producto'
            'Commercial Spots',
            'Motion Graphics',
            'Product Photography'
          ]
        },
        // array of the slider used to show
        sliders: [
          'port_betanzos.webp',
          'port_betanzos_2.webp',
          'port_bubble.webp',
          'port_bubble_2.webp',
          'port_capilab.webp',
          'port_capilab_5.webp',
          'port_capilab_6.webp',
          'port_capilab_7.webp',
          'port_capilab_1.webp',
          'port_capilab_3.webp',
          'port_capilab_4.webp',
          'port_capella_1.webp',
          'port_eca_1.webp',
          'port_eca_2.webp',
          'port_eca_3.webp',
          'port_eca_4.webp',
          'port_eca_5.webp',

          'port_diariom.webp',
          'port_diariom-2.webp',
          'port_elprado.webp',
          'port_flawless.webp',
          'port_gale.webp',
          'port_homebird.webp',
          'port_lafragua.webp',
          'port_lafragua_2.webp',
          'port_lord_black.webp',
          'port_lord_black_2.webp',
          'port_lucilu.webp',
          'port_mafra.webp',
          'port_mfpsicologos.webp',
          'port_mfpsicologos_2.webp',
          'port_mfpsicologos_3.webp',
          'port_mfpsicologos_4.webp',
          'port_mfpsicologos_5.webp',
          'port_mfpsicologos_6.webp',
          'port_oseznos.webp',
          'port_prefabricaceros.webp',
          'port_prefabricaceros_2.webp',
          'port_perrisimo.webp',
          'port_tavoil.webp',
          'port_tanoili.webp',
          'port_tanoili_2.webp',
          'port_tanoili_avocados.webp',
          'port_tanoili_avocados_2.webp',
          'port_tanoili_avocados_3.webp',
          'port_abaco_1.webp',
          'port_abaco_2.webp',
          'port_abaco_4.webp',
          'port_pluma_1.webp',
          'port_veneciano_2.webp',
          'port_1.webp',

        ],
        slidersPartner: [
          'partner-bubble.svg',
          'partner-ensamble.svg',
          'partner-gewissen.svg',
          'partner-lord.svg',
          'partner-tanoili.svg',
          'partner-heineken.svg',
          'partner-interlight.svg',
          'partner-plumaroja.svg',
          'partner-obaling.svg',
          'partner-sociall.svg',
          'partner-fragua.svg'
        ]
      }
    },
    head() {
      return {
        title: 'Digital Agency in Morelia',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Somos una agencia de publicidad en Morelia que ofrece diseño gráfico, páginas web, tiendas en línea, diseño de logotipos y producción audiovisual.'
          },
          {
            property: 'og:description',
            content: 'Somos una agencia de publicidad en Morelia que ofrece diseño gráfico, páginas web, tiendas en línea, diseño de logotipos y producción audiovisual.',
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
            content: 'Agencia Lyonn | Agencia de Publicidad, diseño de logotipos, páginas web en Morelia',
            vmid: 'og:title'
          }
        ]
      }
    }
  }
</script>

<style>
</style>
