<template>
  <div class="home-steps-accompaniment">
    <StartGoal class="home-start-goal-row"></StartGoal>
    <ul class="list-steps-accompaniment">
      <li class="text-color-mk">
        <ListIcon></ListIcon>
        <div class="ff-boston fw-500">
          <i class="mr-3 ff-baysoir fs-20 ">Paso 1</i>
          Estrategias de marketing
        </div>
      </li>
      <li class="text-color-design">
        <ListIcon color="#ff5a5f"></ListIcon>
        <div class="ff-boston fw-500">
          <i class="mr-3 ff-baysoir fs-20 ">Paso 2</i>
          Identidad corporativa
        </div>
      </li>
      <li class="text-color-reg">
        <ListIcon color="#fa8232"></ListIcon>
        <div class="ff-boston fw-500">
          <i class="mr-3 ff-baysoir fs-20 ">Paso 3</i>
          Registros de marca
        </div>
      </li>
      <li class="text-color-dev ">
        <ListIcon color="#22aff8"></ListIcon>
        <div class="ff-boston fw-500">
          <i class="mr-3 ff-baysoir fs-20 ">Paso 4</i>
          Sitios web y redes sociales
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import ListIcon from '~/components/Icons/list-step'
  import StartGoal from '~/components/Icons/home-start-goal-home'

  export default {
    name: "SecondLeft",
    components: {
      ListIcon,
      StartGoal
    }
  }
</script>

<style scoped>

</style>
