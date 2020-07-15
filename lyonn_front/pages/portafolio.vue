<template>
  <ResponsiveWarning :nombrePagina="namePage" class="show"></ResponsiveWarning>

</template>

<script>
  import ResponsiveWarning from "~/components/commons/ResponsiveWarning";

  export default {
    name: "portafolio",
    components: {
      ResponsiveWarning
    },
    data() {
      return{
        namePage:'portafolio'
      }
    },
    head() {
      return {
        title: 'Nuestro portafolio de trabajo',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              `En esta página encontrarás mas detalles sobre el ${this.namePage} de proyectos de Agencia Lyonn, por ahora te invitamos a que visites nuestro portafolio.`
          },
          {
            property: 'og:description',
            content: `En esta página encontrarás mas detalles sobre el ${this.namePage} de proyectos de Agencia Lyonn, por ahora te invitamos a que visites nuestro portafolio.`,
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
            content: 'Agencia Lyonn | Nuestro portafolio de trabajo',
            vmid: 'og:title'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
