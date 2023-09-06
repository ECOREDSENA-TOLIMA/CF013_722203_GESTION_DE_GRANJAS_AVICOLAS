<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Control de plagas

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El propósito del control de plagas es disminuir su población en las granjas para evitar los daños de infraestructura, alimentos, equipos y la posibilidad de ser diseminadores de enfermedades, este puede ser preventivo o correctivo, dependiendo de la situación en que se encuentre la explotación avícola, las principales plagas que tienen interés sanitario y económico en las producciones avícolas son: roedores, moscas y #[em alphitobius]. 

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Monitorear la presencia de plagas

    p.mb-3(data-aos="fade-down") Las granjas avícolas dentro de sus procedimientos estandarizados contemplan el manejo integrado de plagas y en esta documentación uno de los temas de interés es el monitoreo que se realiza de las plagas que afectan o pueden llegar a afectar la producción.
    p.mb-5(data-aos="fade-down") En el siguiente video se presentan los tipos de monitoreos de presencia de plagas que se deben realizar en la granja avícola:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9D7TgGi3huQ" title="Monitoreo de plagas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: monitoreo de plagas

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Verificar métodos de control de plagas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-3.col-lg-2.col-12
        img(src='@/assets/curso/temas/tema3/tema3-2.svg' alt='')
      .col-md-9.col-lg-10.col-12
        p La verificación del control de plagas se realiza mediante la aplicación de listas de chequeo y registros en formatos establecidos por la empresa avícola donde se verifica la efectividad de los cebos, trampas e insecticidas empleados en el control de las plagas de importancia para la producción avícola.
        p En la siguiente tabla se presenta un ejemplo del formato de registro de control integrado de plagas en el que se registran los comportamientos de las plagas, de acuerdo con la aplicación de los controles efectuados por el personal encargado en las granjas.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 16.] #[i Registro control integrado de plagas] 
        img(src='@/assets/curso/temas/tema3/tabla-16.png')








</template>

<script>
export default {
  name: 'Tema3',
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
