<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El componente formativo Protocolos de bioseguridad y control de actividades anexas de producción, abarca temas relacionados al manejo de la bioseguridad en avicultura, su implementación y ejecución, permitiendo el logro de un estatus sanitario que garantice la productividad y rentabilidad de este tipo de explotaciones, por esto es importante implementar protocolos que permitan estandarizar los procesos, controlando y garantizando el cumplimiento a la normatividad vigente.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="Síntesis. Protocolos de bioseguridad y control de actividades anexas de producción basada en la implementación de condiciones bioseguras en la explotación pecuaria.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
