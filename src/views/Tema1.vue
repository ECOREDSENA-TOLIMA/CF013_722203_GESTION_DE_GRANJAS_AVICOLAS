<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Calidad del agua potable 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El agua es una sustancia líquida inolora, incolora e insípida que existe en la naturaleza, cubre gran parte de la superficie de la tierra, se encuentra en los mares, océanos, glaciares, polos, ríos, quebradas, lagos, etc.  El agua cumple funciones en los seres vivos que permiten, entre otros procesos, el transporte de nutrientes a nivel celular en el hombre, los animales y las plantas, coadyuvando en diferentes procesos metabólicos de los organismos vivos. En la siguiente figura se presenta la distribución del agua en el planeta.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 1.] #[i Distribución del agua en el planeta] 
        figure
          img(src='@/assets/curso/temas/tema1/tema1-2.svg', alt='En la figura 1 se muestra la distribución del agua en el planeta tierra.')  
          figcaption.mt-2 Nota. Adaptado Fenavi (2018).
      
    p.mb-5(data-aos="fade-down") El agua tiene propiedades físicas percibidas por los sentidos, entre ellas se encuentra el olor, color, sabor, el estado, pH, puntos de congelación y ebullición, presión y temperatura críticas, características que inciden en el consumo por parte de las aves en las granjas avícolas, puesto que, si las aguas presentan sabores desagradables o temperaturas altas para el caso de la producción avícola, reduce su consumo y esto afecta la productividad del lote.

    .cajon-b.color-acento-botones.p-3.mb-4(data-aos="fade-down")
      p.mb-4 A continuación, se relacionan las propiedades físicas del agua con su respectiva descripción: 

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-10.col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Propiedades físicas del agua] 
      .col-12.col-md-10.col-lg-8(data-aos="fade-right")
        .tabla-b.color-acento-contenido.mb-5
          table(style="min-width:auto")
            caption Nota. Adaptado de ATL (2008).
            thead
              tr.cabecera-a.text-center
                th Propiedad 
                th Descripción 
            tbody
              tr.text-center
                th.cabecera-b Estado
                td Sólido, líquido y gaseoso
              tr.text-center
                th.cabecera-b Color
                td Incoloro
              tr.text-center
                th.cabecera-b Sabor
                td Insípido
              tr.text-center
                th.cabecera-b Olor
                td Inodoro
              tr.text-center
                th.cabecera-b Densidad
                td 1 g/cc a 4 grados Celsius
              tr.text-center
                th.cabecera-b Punto de congelación
                td 0° grados Celsius
              tr.text-center
                th.cabecera-b Punto de ebullición
                td 100 grados Celsius
              tr.text-center
                th.cabecera-b Presión crítica
                td 217.5 atmósferas
              tr.text-center
                th.cabecera-b Temperatura crítica
                td 374 grados Celsius

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Fuentes

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down") 
      .col-md-4.col-lg-5.col-12
        img(src='@/assets/curso/temas/tema1/tema1-3.png' alt='')
      .col-md-8.col-lg-7.col-12
        p Las fuentes de agua en el planeta son definidos por la Agencia de protección ambiental de Estados Unidos (2021) como “agua de origen (como ríos, arroyos, lagos, embalses, manantiales y aguas subterráneas) que proporciona agua a los suministros públicos de agua potable y a los pozos privados”. Igualmente se pueden definir las fuentes hídricas como las corrientes de agua ubicadas superficialmente o subterránea que pueden ser utilizadas para el consumo de los seres humanos, animales y plantas;  a partir de lo anterior, es importante conocer que las explotaciones avícolas requieren la provisión de agua, cumpliendo dos principios, cantidad y calidad, para ser suministradas a las aves y empleada para el consumo humano, teniendo en cuenta que su consumo es alto y se debe asegurar que esté siempre disponible.

    .cajon-b.color-acento-botones.p-3.mb-4(data-aos="fade-down")
      p.mb-4 En el siguiente recurso de aprendizaje se presentan las principales fuentes de agua empleadas por los avicultores para obtener este recurso del medio ambiente:

    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-down-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b RÍOS:] corriente de agua de grandes dimensiones que sirve de canal natural en una cuenca de drenaje.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-4.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b ARROYO:] curso de agua pequeño y poco profundo, por lo general de flujo permanente y en cierto modo turbulento.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b MANANTIALES:] es una fuente natural de agua que surge del interior de la tierra por un punto específico. El agua puede fluir con fuerza o bien, brotar con lentitud. Sus características dependen de la topografía del terreno, la posición de la capa freática y de las unidades permeables e impermeables del suelo, la roca o el sedimento.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b LAGOS:] gran depósito natural de agua en una depresión del terreno, que recoge aguas pluviales, subterráneas o de uno o varios ríos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Jagüey:] son depósitos artesanales construidos para almacenamiento de agua durante la época de sequía.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-8.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b AGUAS SUBTERRÁNEAS:] son parte de la precipitación que se penetra a través de los poros y fisuras de las rocas hacia el subsuelo, hasta llegar al material rocoso, haciendo parte del agua que se encuentra en los acuíferos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-9.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b AGUAS LLUVIAS:] el aprovechamiento de las aguas lluvias requiere de un sistema independiente de recolección que las conduzca hacia el reservorio. La viabilidad técnica y económica depende de la pluviosidad de la zona de captación y del uso que se le dé al agua recogida.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')

    p.mb-5(data-aos="fade-down") La conservación del agua implica las diferentes medidas, alternativas y acciones para un uso responsable o reducción del agua, para la industria avícola el recurso hídrico es de vital importancia y se requieren grandes volúmenes que satisfagan las necesidades, por lo cual se requiere la implementación de prácticas de uso racional y eficiente de este recurso natural.

    .row.justify-content-center.align-items-center.mb-4.tarj.tarjeta--gris(data-aos="fade-down") 
      .col-md-8.col-lg-7.col-12
        p Dentro de las estrategias que la industria avícola viene desarrollando para la conservación y uso recurso hídrico está el programa para el uso eficiente y ahorro del agua, que permite adquirir por parte de las empresas avícolas una cultura de conservación y manejo sostenible del recurso hídrico, de acuerdo con lo establecido en la Ley 373 de 1997. 
      .col-md-4.col-lg-5.col-12
        .py-3
          img(src='@/assets/curso/temas/tema1/tema1-11.png' alt='')

    p.mb-5(data-aos="fade-down") A continuación, se presentan los pasos a seguir para la implementación del plan de ahorro y uso eficiente del agua mediante las herramientas del Plan de producción más limpia (PML), recomendado por Fenavi (2018). En el material complementario se relaciona la Guía rápida de consideraciones técnicas para la gestión integral del recurso hídrico en granjas avícolas, de importante lectura para profundizar en la temática:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-12.svg' alt='')
          .tarjeta.color-acento-botones
            .p-4
              h4.mt-4.text-center Definir equipo de trabajo
              p.mb-0 Designar un equipo de trabajo para la implementación de las actividades del plan de ahorro del agua.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-13.svg' alt='')
          .tarjeta.color-secundario
            .p-4
              h4.mt-4.text-center Diagnóstico
              p.mb-0 Identificar y enumerar todas las etapas del proceso que requieren consumo de agua, incluyendo las viviendas. Calcular los indicadores de consumo vs. producción para un periodo mínimo de seis meses.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-14.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.mt-4.text-center.texto-negro Aplicar herramientas
              p.mb-0 Ecomapas, análisis de costos de ineficiencia, indicadores de calidad ambiental y matriz DOFA.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Suministro, normativa sanitaria y ambiental

    p.mb-5(data-aos="fade-down") El suministro de agua en las granjas avícolas se realiza mediante un sistema de distribución diseñado, de acuerdo con las necesidades de la explotación (capacidad instalada, aves encasetadas), se requiere la disposición de la infraestructura necesaria como tanques o depósitos de almacenamiento del agua tratada para ser distribuida por tuberías que llegarán a los tanques que surten finalmente a los bebederos en los galpones y a las demás instalaciones que la requieran (baterías sanitarias, duchas, etc.).

    .row.justify-content-center.align-items-center.mb-4.tarj.tarjeta--primario(data-aos="fade-down") 
      .col-md-4.col-lg-5.col-12
        .py-3
          img(src='@/assets/curso/temas/tema1/tema1-15.png' alt='')
      .col-md-8.col-lg-7.col-12
        p El avicultor debe prestar atención en el manejo y mantenimiento de tanques de almacenamiento, tratamiento del agua y las condiciones de tuberías de distribución del agua en las instalaciones de las granjas avícolas, para evitar la afectación de las aves por la deficiente calidad del agua.

    p.mb-5(data-aos="fade-down") En Colombia se ha emitido la reglamentación y la normativa sanitaria y ambiental respecto al uso eficiente del agua, en el siguiente recurso de aprendizaje se relacionan estas normas: 

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/tema1-info.svg', alt='')
      .tarjeta.color-primario.basico.p-3(x="14%" y="5%" numero="1")
        p Designa las pautas para el manejo y aprovechamiento adecuado de los recursos naturales, buscando su sostenibilidad.
      .tarjeta.color-primario.basico.p-3(x="92%" y="11.2%" numero="2")
        p Busca prevenir y controlar los daños sobre los recursos naturales derivados de actividades humanas, lograr la conservación, preservación y restauración de estos.
      .tarjeta.color-primario.basico.p-3(x="0%" y="20%" numero="3")
        p El Ministerio de Ambiente y Desarrollo Sostenible a través de esta Resolución estructura el contenido del programa de uso eficiente y ahorro del agua (PUEAA).
      .tarjeta.color-primario.basico.p-3(x="100%" y="27%" numero="4")
        p Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.
      .tarjeta.color-primario.basico.p-3(x="14%" y="37%" numero="5")
        p Por la cual se desarrollan los parágrafos 1 y 2 del Artículo 2.2.3.2.1.1.3. del Decreto 1090 de 2018, mediante el cual se adiciona el Decreto 1076 de 2015.
      .tarjeta.color-primario.basico.p-3(x="94%" y="45%" numero="6")
        p Establece los lineamientos para garantizar el cumplimiento y desarrollo del programa para el uso eficiente y ahorro del agua a nivel nacional.
      .tarjeta.color-primario.basico.p-3(x="2%" y="54%" numero="7")
        p Garantizar la sostenibilidad del recurso hídrico, a través del ordenamiento territorial y la preservación de ecosistemas hídricos.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Toma de muestras 

    p.mb-5(data-aos="fade-down") Las empresas avícolas deben controlar la calidad del agua que se suministra a sus aves, pues de ello depende la sanidad y productividad de la explotación. Por lo cual, se debe realizar periódicamente la toma de muestras de agua para ser llevadas al laboratorio y realizar los correspondientes exámenes fisicoquímicos, microbiológicos y toxicológicos del agua que se suministra a las aves. 

    .row.justify-content-center.align-items-center.mb-4.tarj.tarjeta--primario(data-aos="fade-down") 
      .col-md-8.col-lg-7.col-12
        p El objetivo de la toma de la muestra de agua que se colecte debe ser representativa para los tipos de análisis que se pretendan realizar y se pueden tomar de diferentes fuentes como cuerpos de aguas superficiales, subterráneas o aguas represadas, para ello se deben tener en cuenta las características ambientales del sitio de la toma, el transporte y manipulación de la muestra, siguiendo los protocolos establecidos por la norma NTC ISO 5667.
      .col-md-4.col-lg-5.col-12
        .py-3
          img(src='@/assets/curso/temas/tema1/tema1-16.png' alt='')

    p.mb-5(data-aos="fade-down") A continuación, se relacionan los tipos de muestreo y muestras que se toman para el análisis del agua con sus características: 







      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
