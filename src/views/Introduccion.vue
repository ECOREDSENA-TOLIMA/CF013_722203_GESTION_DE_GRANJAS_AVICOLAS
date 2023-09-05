<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4(data-aos="fade-down")
      .col-12
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Se invita a revisar el siguiente video para que comprenda algunas indicaciones iniciales del proceso de aprendizaje y los elementos de abordaje acerca de los protocolos de bioseguridad y el control de actividades en las granjas avícolas: 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/I4NAuta4lK8" title="Protocolos de bioseguridad y control de actividades anexas de producción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Protocolos de bioseguridad y control de actividades anexas de producción
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
