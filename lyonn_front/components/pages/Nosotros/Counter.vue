<template>
  <section class="d-flex justify-content-center align-items-center bg-rounded-gray py-5 " v-scroll="ScrollCounter">
    <div class="d-flex justify-content-start justify-content-lg-center flex-wrap col-md-10 col-lg-12 px-xl-5
      content-bg-rounded-gray pb-5">
      <div
        class="col-6 col-sm-4 col-lg-2 d-flex justify-content-center px-0 mt-4 mt-lg-0"
      >
        <div class="col-10">
          <h2 class="ff-gilroy-semi-bold my-4 fs-40">+{{counters['clients']}}</h2>
          <p class="ff-gilroy-medium fw-300 fs-13 mt-3 mt-sm-5">
            Años de <br>
            experiencia
          </p>
        </div>
      </div>
      <div
        class="col-6 col-sm-4 col-lg-2  d-flex justify-content-center px-0 mt-4 mt-lg-0"
      >
        <div class="col-10">
          <h2 class="ff-gilroy-semi-bold my-4 fs-40">{{counters['proyects']}}</h2>
          <p class="ff-gilroy-medium fw-300 fs-13 mt-3 mt-sm-5">
            Cursos, talleres y <br>
            conferencias impartidas
          </p>
        </div>
      </div>
      <div
        class="col-6 col-sm-4 col-lg-2 d-flex justify-content-center px-0 mt-4 mt-lg-0"
      >
        <div class="col-10">
          <h2 class="ff-gilroy-semi-bold my-4 fs-40">{{counters['obras']}}</h2>
          <p class="ff-gilroy-medium fw-300 fs-13 mt-3 mt-sm-5">
            Alianzas <br>
            estratégicas
          </p>
        </div>
      </div>
      <div
        class="col-6 col-sm-4 col-lg-2 d-flex justify-content-center px-0 mt-4 mt-lg-0"
      >
        <div class="col-10">
          <!--            <img src="../assets/img/process/worker.svg" alt="Entendimiento">-->
          <h2 class="ff-gilroy-semi-bold my-4 fs-40">+{{counters['maintenance']}}</h2>
          <p class="ff-gilroy-medium fw-300 fs-13 mt-3 mt-sm-5">
            Clientes <br>
            satisfechos
          </p>
        </div>
      </div>
      <div
        class="col-6 col-sm-4 col-lg-2 d-flex justify-content-center px-0 mt-4 mt-lg-0"
      >
        <div class="col-10">
          <!--            <img src="~/assets/img/process/delivery.svg" alt="Entendimiento">-->
          <h2 class="ff-gilroy-semi-bold my-4 fs-40">
            <img class="img-infinite" src="~/assets/img/ico/symbol-infinite.svg" alt="Soluciones infinitas - lyonn agency Morelia">
          </h2>
          <p class="ff-gilroy-medium fw-300 fs-13 mt-3 mt-sm-5">
            Soluciones
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  export default {
    created() {
      Vue.directive('scroll', {
        inserted: function(el, binding) {
          let f = function(evt) {
            if (binding.value(evt, el)) {
              window.removeEventListener('scroll', f)
              // alert('acabo')
            }
          }
          window.addEventListener('scroll', f)
        }
      })
    },
    methods: {
      ScrollCounter: function(evt, el) {
        //console.log(el.getBoundingClientRect().top)
        if (el.getBoundingClientRect().top < 450) {
          this.upgradeNumber()

          return true
        }
        //return window.scrollY > 100
      },
      upgradeNumber() {
        // Increaces the numbers

        // iterates over the object
        for (const key in this.counters) {
          let interval = false
          interval = window.setInterval(() => {
            // if the iteretor is greater than the seted on the countersTop object, clear the interval
            if (this.counters[key] + 1 >= this.countersTop[key]) {
              clearInterval(interval)
            }
            this.counters[key] += 1
          }, 100)
        }
      }
    },
    data() {
      return {
        counters: {
          clients: 0,
          proyects: 0,
          obras: 0,
          maintenance: 0,
          models: 0,
          designs:0
        },
        countersTop: {
          clients: 70,
          proyects: 113,
          obras: 16,
          maintenance: 8,
          models: 4,
          designs:7
        },
        NumCounter: [1, 2, 3, 4, 5]
        // 434 343 33 26
      }
    }
  }
</script>

<style>

</style>
