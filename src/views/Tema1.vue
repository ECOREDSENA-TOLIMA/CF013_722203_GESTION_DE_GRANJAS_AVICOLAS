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
      p.mb-4 A continuación, se presentan las principales fuentes de agua empleadas por los avicultores para obtener este recurso del medio ambiente:

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

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6.col-lg-4.col-12.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/tema1-17.png' alt='')
        .div-footer.p-3
          .h4.text-center.mb-0 Muestreo manual
      .col-md-6.col-lg-4.col-12.mb-3(data-aos="fade-down")
        img(src='@/assets/curso/temas/tema1/tema1-18.png' alt='')
        .div-footer.p-3
          .h4.text-center.mb-0 Muestreo automático
      .col-md-6.col-lg-4.col-12.mb-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/tema1-19.png' alt='')
        .div-footer.p-3
          .h4.text-center.mb-0 Muestreo mixto
      .col-md-6.col-lg-4.col-12.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/tema1-20.png' alt='')
        .div-footer.p-3
          .h4.text-center.mb-0 Muestra simple o puntual
      .col-md-6.col-lg-4.col-12.mb-3(data-aos="fade-down")
        img(src='@/assets/curso/temas/tema1/tema1-21.png' alt='')
        .div-footer.p-3
          .h4.text-center.mb-0 Muestra compuesta
      .col-md-6.col-lg-4.col-12.mb-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/tema1-22.png' alt='')
        .div-footer.p-3
          .h4.text-center.mb-0 Muestra integrada

    .cajon.color-primario.p-4.mb-5(data-aos="fade-down-left")
      p.mb-0 Respecto a los análisis fisicoquímicos, Fenavi - Fonav (2018) afirma que mediante este tipo de prueba se busca determinar “la presencia de sustancias orgánicas e inorgánicas que puedan producir efectos nocivos sobre los humanos y las aves, o que alteren la eficiencia de los diferentes procesos realizados en la granja. Paralelamente, permite determinar las condiciones organolépticas” (p. 9), este tipo de muestras se toman en frascos de vidrio o plásticos de boca ancha, previamente lavados y con capacidad de 2 litros, se tendrá en cuenta el sitio donde se tome la muestra de acuerdo con el tipo de fuente y los frascos se llenan completamente para evitar la presencia de burbujas que alteren el resultado de la prueba.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-right")
      .col-md-3.col-lg-2.col-12
        img(src='@/assets/curso/temas/tema1/tema1-23.svg' alt='')
      .col-md-9.col-lg-10.col-12
        p La contaminación microbiana del agua puede provenir de la fuente o también en sus sistemas de transporte o almacenamiento dentro de la instalación, el agua puede contener bacterias, virus, protozoos, patógenos y huevos de helmintos intestinales, la presencia de estos microorganismos afecta la productividad de las aves alojadas en la explotación avícola, es por estos que la toma de la muestra de agua para este tipo de análisis de laboratorio debe hacerse en recipientes estériles y evitando contaminación cruzada que altere los resultados.
        p Los análisis toxicológicos se realizan para determinar la presencia y concentración de compuestos químicos tóxicos en el agua, causantes de enfermedades en aves y personas, para la toma de las diferentes muestras se requiere cumplir con algunos requerimientos relacionados con el tipo de recipientes, rotulados, forma de tomar la muestra, preservación y envío.

    p.mb-5(data-aos="fade-down") Respecto a los recipientes empleados para la toma de muestras de agua, los más empleados son los de vidrio y polietileno. Los de vidrio tienen la ventaja de que el estado de superficie interior es fácilmente visible, los de polietileno no son tan susceptibles al peligro de rotura, por esto es de suma importancia la selección correcta del envase a utilizar, porque debe garantizar que la muestra no se contamine generando resultados erróneos, en la siguiente imagen se observan los tipos de recipientes para la toma de muestras de análisis fisicoquímicos y microbiológicos, ver figura 2.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 2.] #[i Recipientes para la toma de muestras de análisis fisicoquímicos y microbiológicos] 
        figure
          img(src='@/assets/curso/temas/tema1/tema1-24.png', alt='Recipiente de 1000 ml de plástico o vidrio para los parámetros de DBO5, sólidos disueltos totales, turbiedad, nitratos, PH y fosfatos. Recipiente de 250 ml de plástico o vidrio para la DQO. Recipiente de 100 ml de vidrio, para el análisis de coliformes fecales. Recipiente Winkler, para el análisis de oxígeno disuelto.')  
          figcaption.mt-2 Nota. Tomado de Hernández Pérez (2021).

    p.mb-5(data-aos="fade-down") A continuación, se describen los requerimientos de envase, cantidad de muestra y recomendaciones para la toma de muestra.


    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-12(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Requisitos para la toma de muestras de agua para el análisis de laboratorio] 
        .tabla-b.color-acento-contenido.mb-5
          table(style="min-width:auto")
            caption Nota. Adaptado de Hernández (2021).
            thead
              tr.cabecera-a.text-center
                th(style="width:18%") Tipo de análisis 
                th Recipiente 
                th(style="width:20%") Cantidad de muestra  
                th Recomendaciones
            tbody
              tr
                th Fisicoquímico
                td.p-2 Vidrio o plástico no tóxico, esterilizado, boca ancha, tapa protectora y cierre hermético.
                td.p-2 No inferior a 2 litros.
                td.p-2
                  p.mb-0 En fuentes superficiales (ríos, quebradas, nacimientos) se toma la muestra a contracorriente, en sitios representativos del cauce y a diferentes profundidades.
                  p.mb-0 En la planta de tratamiento se tomará del agua que ya esté tratada para revisar la efectividad del proceso.
                  p Evitar el contacto del agua con las tapas metálicas o plásticas.
              tr
                th Bacteriológico
                td.p-2 Vidrio o plástico, boca ancha, esterilizado.
                td.p-2 250 a 500 ml.
                td.p-2 
                  p Los envases deben estar esterilizados y evitar su contaminación. Tener en cuenta el sitio donde se van a tomar la muestra (grifos), dejar salir los primeros chorros de agua y luego tomar la muestra para evitar su contaminación. Muestras tomadas de tanques o reservorios de ríos, quebradas, lagos, etc. y desinfectar el grifo para evitar la contaminación. En aguas cloradas adicionar tiosulfato de sodio para neutralizar el cloro.  Evitar temperaturas superiores a 6°C porque fomentan la multiplicación de los microorganismos de la muestra.
              tr
                th Toxicológico
                td.p-2 Frascos de vidrio.
                td.p-2 500 a 1000 ml.
                td.p-2 
                  p Se debe conocer el historial del uso de sustancias químicas en la zona donde se tome la muestra, seleccionar en el cuerpo de agua un área representativa alejada de orillas, a una profundidad media entre el lecho y la superficie, el envase se debe lavar varias veces con el agua a analizar, luego tomar la muestra y sellar el envase. Se sugiere la toma de submuestras para ser mezcladas y obtener una muestra definitiva para ser llevada al laboratorio. En lagos o estanques se toman muestras en diferentes profundidades.

    .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-md-6.col-12
          p Todas las muestras requieren ser registradas en una planilla de control en la que se evidencie las condiciones del entorno donde se recolectó la muestra, es decir, registrar la temperatura. Las etiquetas de los envases con las muestras deben contener los siguientes datos de identificación:
        .col-md-6.col-12
          ul.lista-ul--color
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Lugar de la toma.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Fecha de toma.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Hora.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Temperatura al momento de la toma.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Nombre de la persona que realiza la toma.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Demás datos pertinentes que considere la organización que debe contener la etiqueta.

    p.mb-5(data-aos="fade-down") Las muestras deben estar refrigeradas para su conservación, evitando su congelación. Se debe transportar lo más rápido posible al laboratorio para su análisis.   

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Métodos de tratamiento 

    p.mb-5(data-aos="fade-down") Según las recomendaciones de Fenavi (2018) después de que se determine la calidad de agua con la que dispone el productor mediante los análisis de laboratorio, procede a realizar los tratamientos pertinentes para ofertar agua de calidad a las aves. El agua puede ser potabilizada mediante diferentes tratamientos que se relacionan a continuación:
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-right")
      .col-md-4.col-lg-3.col-12
        img(src='@/assets/curso/temas/tema1/tema1-25.png' alt='')
      .col-md-8.col-lg-9.col-12
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Tratamiento de cloración") 
            p Procedimiento comúnmente usado y junto con el lavado diario de bebederos se traducen como las medidas más eficaces para controlar la carga microbiana.
            p El efecto deseado de este tratamiento se logra cuando la concentración del cloro sea de 3 ppm a nivel de los bebederos.
            p Aspectos a tener en cuenta: aumenta el pH del agua, disminuye su efectividad en presencia de materia orgánica, es altamente volátil.
          div(numero="2" titulo="Tratamiento de peroxidación") 
            p El uso de peróxido actúa contra bacterias, esporas, virus y hongos cuando se emplea en las dosificaciones correctas.
          div(numero="3" titulo="Filtros de arena y carbón activados") 
            p Los filtros de arena son lentos y tienen cierta acción eliminadora de bacterias, pero necesitan mucho espacio para la purificación de aguas; estos filtros retienen tierra, arena y algunas impurezas, pero dejan pasar microorganismos y sustancias químicas, por lo cual son utilizados mayormente para retener impurezas.
            p El carbón activado se utiliza como filtro y su acción es eliminar olor, sabor y color del agua tratada.
          div(numero="4" titulo="Ozono") 
            p Al entrar en contacto con sustancias oxidables, se descompone rápidamente en oxígeno naciente, el cual es capaz de destruir la materia orgánica. Aunque no deja olor, sí deja algo de sabor, aunque este no sea desagradable.
          div(numero="5" titulo="Coagulación y floculación") 
            p Consiste en la aplicación de productos químicos para desestabilizar sustancias que se encuentran suspendidas en el agua, produciendo una aglomeración de estas que forman partículas más grandes que se van a sedimentar posteriormente.
            p Este proceso de coagulación se lleva a cabo en dos fases que se llaman coagulación y floculación.
            p Los coagulantes comúnmente usados incluyen las sales de aluminio o de hierro y el más ampliamente utilizado es el sulfato de aluminio.

    p.mb-4(data-aos="fade-down") El tratamiento o potabilización del agua lo define el Ministerio de Protección Social y el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2007)  como “el conjunto de operaciones y procesos que se realizan sobre el agua cruda, con el fin de modificar sus características físicas, químicas y microbiológicas, para hacerla apta para el consumo humano” (p.2), teniendo en cuenta que el agua que se suministra a las aves en las explotaciones avícolas debe ser de excelente calidad y requiere la implementación de métodos para su tratamiento.  
    p.mb-5(data-aos="fade-down") El tratamiento más utilizado en este tipo de explotaciones tiene cuatro fases que se relacionan en el siguiente esquema interactivo:

    .h4.text-center.mb-4(data-aos="fade-down-right") Fases de tratamiento del agua

    PasosA.color-primario.mb-5(tipo="n" data-aos="fade-down-right")
      div
        p #[b Coagulación:] empleado en el tratamiento del agua se refiere al fenómeno de desestabilización de las partículas coloidales que puede conseguirse por medio de la neutralización de sus cargas eléctricas, con este procedimiento se pretende la aglomeración de las sustancias que se encuentran suspendidas en el agua con la aplicación de coagulantes como el sulfato de aluminio, cloruro de aluminio, cloruro férrico, sulfato férrico, sulfato ferroso, sulfato cúprico, ozono, entre otros.
      div.text-start
        p #[b Floculación:] es descrita por Andia (2020) como el proceso que consiste en “la agitación de la masa coagulada que sirve para permitir el crecimiento y aglomeración de los flósculos recién formados con la finalidad de aumentar el tamaño y peso necesario para sedimentar con facilidad” (p.33), la floculación es la siguiente fase para el tratamiento del agua, cuyo propósito es lograr que las partículas suspendidas en el agua se junten y se puedan sedimentar.
      div
        p #[b Sedimentación:] es la tercera fase empleada en las granjas avícolas para el tratamiento del agua, de acuerdo con Pérez (2005) la define como “el proceso natural por el cual las partículas más pesadas del agua que se encuentra en su seno en suspensión, son removidas por la acción de la gravedad” (p.2), es decir, todas las partículas que estén suspendidas en el agua a potabilizar serán llevadas al fondo del tanque o reservorio  por el efecto de la gravedad al ser más pesadas que el agua, permitiendo de esta forma separar las impurezas y removerlas.
      div.text-start
        p #[b Filtración:] se utiliza para eliminar las partículas que no se sedimentaron, al respecto la Academia Nacional de Ciencias (2017), afirma que los sistemas de filtración “tratan el agua pasándola a través de lechos de materiales granulares (por ejemplo, arena) que retira y retiene contaminantes”. Además, este proceso puede ayudar a la eliminación de bacterias, virus y protozoos.
      div
        p #[b Desinfección:] en esta etapa se aplica un desinfectante que cumpla con unas características especiales relacionadas con su efectividad como bactericida, no debe afectar las propiedades organolépticas del agua, es de fácil efectividad para eliminar el #[em biofilm]; el desinfectante que es más empleado en las granjas avícolas para el tratamiento del agua es el cloro (hipoclorito de sodio), el cual debe ser dosificado de acuerdo con el volumen del agua a tratar y su concentración.

    p(data-aos="fade-down") A continuación, se presenta un ejemplo:
    p.mb-5(data-aos="fade-down") Se requiere la desinfección de 3.000 litros de agua, se cuenta con hipoclorito de sodio líquido al 12 %, y de acuerdo con las recomendaciones del fabricante se deben emplear 5 ppm. Para realizar el cálculo se emplea la siguiente fórmula:

    .tarjeta.color-acento-botones.p-4.mb-5(data-aos="fade-down")
      div.mb-3
        mfrac 
          mo Cantidad de producto (en gramos o cc) =
        math
          mfrac
            mrow
              mo volumen de agua a tratar x dosis recomendada producto
            mrow
              mo Concentración del producto x 10
      div.mb-3
        mfrac 
          mo Cantidad de producto (en gramos o cc) =
        math
          mfrac
            mrow
              mo 3.000 litros x 5 ppm
            mrow
              mo 12 x 10
      div.mb-3
        mfrac 
          mo Cantidad de producto (en gramos o cc) =
        math
          mfrac
            mrow
              mo 3.000 litros x 5 ppm
            mrow
              mo 120
      div.mb-3
        mfrac 
          mo Cantidad de producto (en gramos o cc) = 25

    p.mb-5(data-aos="fade-down") Para profundizar en el tema se invita al aprendiz a ver los videos que se comparten en el material complementario de este componente formativo. 

    .row.justify-content-center.align-items-center.mb-4.tarj.tarjeta--gris(data-aos="fade-down") 
      .col-md-8.col-lg-7.col-12
        p Es importante que a pesar de realizar un excelente tratamiento del agua tener en cuenta que, si los sistemas de almacenamiento y conducción no se encuentran limpios, esto no servirá de nada, por lo cual es de vital importancia que los procedimientos operativos establecidos para este propósito se realicen con la periodicidad propuesta en los mismos para reducir la presencia de #[em biofilm], y las posibilidades de contaminación del agua en tuberías y tanques de almacenamiento.
      .col-md-4.col-lg-5.col-12
        .py-3
          img(src='@/assets/curso/temas/tema1/tema1-26.png' alt='')
      
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Fichas de registro de las actividades de desinfección

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down") 
      .col-md-4.col-lg-3.col-12
        img(src='@/assets/curso/temas/tema1/tema1-27.png' alt='')
      .col-md-8.col-lg-9.col-12
        p Cada una de las actividades establecidas en los Procedimientos Operativos Estandarizados (POE), diseñados para el tratamiento del agua en las explotaciones avícolas, deben estar de acuerdo con lo establecido en los protocolos de la organización y registrados en los formatos diseñados para tal propósito. La información sobre las actividades de desinfección y tratamiento del agua deben realizarse y registrarse en el momento que se realicen, con la información recolectada le permite al productor realizar la toma de decisiones y ajustes a que tenga lugar de acuerdo con las circunstancias que se estén presentando en la explotación avícola, los registros son un apoyo de gran valor para el correcto funcionamiento de la granja.
        p De acuerdo con las resoluciones de bioseguridad para las granjas avícolas, los formatos requieren contener los siguientes ítems:

    .tarjeta.color-acento-botones.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-md-11.col-lg-9.col-12
          ul.lista-ul--color
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Nombre de la empresa.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Nombre de la granja avícola biosegura (pollo, aves de postura y/o levante, material genético).
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Identificación del formato.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Fecha de diligenciamiento.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Nombre y firma del responsable.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Observaciones.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Nombre del producto empleado para la desinfección del agua y su dosificación.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Además de la información que considere pertinente la organización que se registre.
            
    .cajon-b.color-acento-contenido.p-3.mb-4(data-aos="fade-down")
      p.mb-4 A continuación, se presentan dos ejemplos de formatos, los cuales son sugeridos para el registro del tratamiento del agua y uso de las sustancias químicas en el proceso de desinfección:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Formato para el registro del tratamiento del agua en granjas avícolas] 
        img(src='@/assets/curso/temas/tema1/tabla-3.png')


    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-12(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 4.] #[i Formato para el registro del control de sustancias químicas en el proceso de limpieza y desinfección en granjas avícolas] 
        .tabla-b.color-acento-contenido.mb-5
          table(style="min-width:auto")
            thead.text-small
              tr.cabecera-a.text-center
                th(colspan="3") AVÍCOLA EL POLLITO
                th(colspan="4") CONTROL SUSTANCIAS QUÍMICAS EN EL PROCESO DE LIMPIEZA Y DESINFECCIÓN
                th(colspan="2") CÓDIGO: formato 3
                th(colspan="3") VERSIÓN: 2 
            tbody.text-small
              tr.text-center
                td.cabecera-b.p-2(rowspan="2") LUGAR
                td.cabecera-b.p-2(rowspan="2") ACTIVIDAD
                td.cabecera-b.p-2(rowspan="2") DESCRIPCIÓN GENERAL
                td.cabecera-b.p-2(colspan="2") TIPO DE ACTIVIDAD
                td.cabecera-b.p-2(rowspan="2") FRECUENCIA DE ACTIVIDAD
                td.cabecera-b.p-2(rowspan="2") SUSTANCIA INDICADA PARA EL LAVADO Y/O DESINFECCIÓN
                td.cabecera-b.p-2(rowspan="2") DOSIS
                td.cabecera-b.p-2(rowspan="2") NOMBRE COMERCIAL
                td.cabecera-b.p-2(rowspan="2") FICHA TÉCNICA (SI/NO)
                td.cabecera-b.p-2(rowspan="2") HOJA DE SEGURIDAD (SI/NO)
                td.cabecera-b.p-2(rowspan="2") OBSERVACIONES O RECOMENDACIONES
              tr.text-center
                td.cabecera-b.p-2 L
                td.cabecera-b.p-2 D
              tr 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0
                td.py-3.px-0
                td.py-3.px-0
              tr 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0
                td.py-3.px-0
                td.py-3.px-0
              tr 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0
                td.py-3.px-0
                td.py-3.px-0
              tr 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0
                td.py-3.px-0
                td.py-3.px-0
              tr 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0
                td.py-3.px-0
                td.py-3.px-0
              tr 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0 
                td.py-3.px-0
                td.py-3.px-0
                td.py-3.px-0

    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Interpretación de los resultados del análisis de la calidad del agua
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los diferentes análisis de laboratorio del agua evalúan la presencia de ciertos elementos o microorganismos en ella y permiten al productor tomar las decisiones pertinentes para realizar los correctivos y ofrecer agua de excelente calidad a las aves de la explotación avícola que van a permitir mejorar las condiciones sanitarias y productivas.
          br
          br 
          | A nivel microbiológico según Fenavi (2018), la calidad del agua se ve afectada por “la contaminación microbiológica que puede originarse en bacterias, virus o parásitos y llegan a generar problemas sanitarios agudos a las aves” (p.6), esta contaminación se encuentra presente en las heces y para el caso de aguas expuestas a excretas de animales y seres humanos.

    .tarjeta.color-primario.basico.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/descargar.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Anexo_1_agentes_microbiologicos.pdf
              p.text-small Agentes microbiológicos 
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_1_agentes_microbiologicos.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-3(data-aos="fade-down") En el análisis fisicoquímico Fenavi (2018), destaca los parámetros que se buscan en este tipo de pruebas para medirlas como “turbidez, color, olor y pH del agua, permitiendo identificar elementos que puedan perjudicar el rendimiento zootécnico de las aves” (p.6).
    p.mb-5(data-aos="fade-down") A continuación, se describen los principales elementos que se deben analizar en las pruebas fisicoquímicas y su efecto en las aves:

    .h4.text-center.mb-4(data-aos="fade-down") Elementos fisicoquímicos para el análisis del agua y su efecto en las aves

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/tema1-info-2.svg', alt='')
      .tarjeta.color-primario.basico.p-3(x="14%" y="55%" numero="1")
        h4 Nitratos y nitritos 
        p Causan problemas digestivos, disminución del peso del huevo, disminución de la ganancia de peso y disminución de la capacidad de transportar oxígeno en la sangre.
      .tarjeta.color-primario.basico.p-3(x="35%" y="20%" numero="2")
        h4 Hierro
        p Ocasiona obstrucción de conducciones y disminución de la ganancia de peso (valores muy altos).
      .tarjeta.color-primario.basico.p-3(x="12%" y="75%" numero="3")
        h4 Sulfatos
        p Efecto laxante y mala conversión alimenticia.
      .tarjeta.color-primario.basico.p-3(x="50%" y="58%" numero="4")
        h4 pH alto
        p Debilita el efecto del cloro y predispone la presencia de #[em biofilm] en las conducciones.
      .tarjeta.color-primario.basico.p-3(x="85%" y="25%" numero="5")
        h4 Dureza
        p Representa la presencia de sales de calcio y magnesio, a pesar de que no afecta la salud de las aves. Cuando se presentan niveles altos puede interferir con la eficacia de los tratamientos con antibióticos; además, puede causar obstrucción de las tuberías de los bebederos e inhibir la acción de detergentes que se utilizan en labores de limpieza.

    p.mb-3(data-aos="fade-down") Para las pruebas toxicológicas se consideran en los análisis verificar la presencia o no de algunos elementos tóxicos en el agua que beben las aves, como el arsénico, cadmio, plomo, benceno y tricloroetileno, estos son solo algunos de los principales agentes contaminantes que pueden encontrarse en el agua, los cuales pueden asociarse al uso inadecuado de pesticidas y que con poca frecuencia son monitoreados. 
    p.mb-5(data-aos="fade-down") Teniendo en cuenta que el agua suministrada a las aves debe cumplir con la Resolución 2115 de 2007, emitida por el Ministerio de Salud y Protección Social y el Ministerio de Ambiente y Desarrollo Sostenible, en la cual se establecen las características físicas y químicas del agua para el consumo humano, que igual aplica para la producción avícola del país. En la siguiente tabla se señalan las características físicas que debe cumplir para el consumo humano.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 5.] #[i Características físicas del agua a cumplir] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado del Ministerio de Salud y Protección Social y el Ministerio de Ambiente y Desarrollo Sostenible (2007).
            thead
              tr.cabecera-a.text-center
                th Características físicas
                th Expresadas como 
                th Valor máximo aceptable
            tbody
              tr.text-center
                th Color aparente
                td.p-2 Unidades de Platino Cobalto (UPC).
                td.p-2 15
              tr.text-center
                th Olor y sabor
                td.p-2 Aceptable o no aceptable.
                td.p-2 Aceptable
              tr.text-center
                th Turbiedad
                td.p-2 Unidades nefelométricas de turbiedad (UNT).
                td.p-2 2

    p.mb-5(data-aos="fade-down") Con relación a las características químicas se debe contemplar la presencia de algunos elementos o compuestos químicos diferentes a plaguicidas, que puedan tener efectos negativos para la salud, en la siguiente tabla se presentan las características químicas que tienen reconocido efecto adverso en la salud humana y que también son aplicables a la industria avícola, en ella se relacionan los principales elementos químicos que pueden estar presentes en el agua que se bebe.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 6.] #[i Características químicas que tienen reconocido efecto adverso en la salud humana] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado del Ministerio de Salud y de Protección Social y del Ministerio de Ambiente y Desarrollo Sostenible (2007).
            thead
              tr.cabecera-a.text-center
                th Elementos, compuestos químicos y mezclas de compuestos químicos, diferentes a los plaguicidas y a otras sustancias
                th Expresados como
                th Valor máximo aceptable (mg/L)
            tbody
              tr.text-center
                th Antimonio
                th Sb
                th 0.02
              tr.text-center
                th Arsénico
                th As
                th 0.01
              tr.text-center
                th Bario
                th Ba
                th 0.7
              tr.text-center
                th Cadmio
                th Cd
                th 0.003
              tr.text-center
                th Cianuro libre y disociable
                th CN
                th 0.05
              tr.text-center
                th Cobre
                th Cu
                th 1.0
              tr.text-center
                th Cromo total
                th Cr
                th 0.05
              tr.text-center
                th Mercurio
                th Hg
                th 0.001
              tr.text-center
                th Níquel
                th Ni
                th 0.02
              tr.text-center
                th Plomo
                th Pb
                th 0.01
              tr.text-center
                th Selenio
                th Se
                th 0.01
              tr.text-center
                th Trihalometanos totales
                th THMs
                th 0.2
              tr.text-center
                th Hidrocarburos aromáticos policíclicos (HAP)
                th HAP
                th 0.01

    p.mb-5(data-aos="fade-down") Además, en el Artículo 6 de la Resolución 2115 se establecen las características químicas que tienen implicaciones sobre la salud humana, las cuales se presentan en la siguiente tabla donde están relacionados los elementos o sustancias químicas que afectan la salud si están presentes en el agua de consumo humano o avícola.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 7.] #[i Características químicas que tienen implicaciones sobre la salud humana] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado del Ministerio de Salud y de Protección Social y del Ministerio de Ambiente y Desarrollo Sostenible (2007).
            thead
              tr.cabecera-a.text-center
                th Elementos, compuestos químicos y mezclas de compuestos químicos, que tienen implicaciones sobre la salud humana
                th Expresados como
                th Valor máximo aceptable (mg/L)
            tbody
              tr.text-center
                th Carbono orgánico total
                th COT
                th 5.0
              tr.text-center
                th Nitritos
                th NO#[sub 2]
                th 0.1
              tr.text-center
                th Nitratos
                th NO#[sub 3]
                th 10
              tr.text-center
                th Floruros
                th F
                th 1.0

    p.mb-5(data-aos="fade-down") En el Artículo 7 de la Resolución 2115 se presentan otras características que tienen consecuencias económicas e indirectas en la salud, las cuales se relacionan en la siguiente tabla con los valores máximos aceptados para estos elementos y compuestos químicos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 8.] #[i Características químicas que tienen mayores consecuencias económicas e indirectas sobre la salud humana] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado del Ministerio de Salud y de Protección Social y del Ministerio de Ambiente y Desarrollo Sostenible (2007).
            thead
              tr.cabecera-a.text-center
                th Elementos, compuestos químicos que tienen mayores consecuencias económicas e indirectas sobre la salud humana
                th Expresados como
                th Valor máximo aceptable (mg/L)
            tbody
              tr.text-center
                th Calcio
                th Ca
                th 60
              tr.text-center
                th Alcalinidad total
                th CaCo#[sub 3]
                th 200
              tr.text-center
                th Cloruros
                th Cl#[sup -]
                th 250
              tr.text-center
                th Aluminio
                th Al#[sup 3+]
                th 0.2
              tr.text-center
                th Dureza total
                th CaCO#[sub 3]
                th 300
              tr.text-center
                th Hierro total
                th Fe
                th 0.3
              tr.text-center
                th Magnesio
                th Mg
                th 36
              tr.text-center
                th Manganeso
                th Mn
                th 0.1
              tr.text-center
                th Molibdeno
                th Mo
                th 0.07
              tr.text-center
                th Sulfatos
                th SO#[sub 4] #[sup 2-]
                th 250
              tr.text-center
                th Zinc
                th Zn
                th 3
              tr.text-center
                th Fosfatos
                th Po#[sub 4] #[sup 3-]
                th 0.5

    p.mb-5(data-aos="fade-down") En el Artículo 11 de la Resolución 2115 se describen las características microbiológicas, las técnicas para el análisis y los valores máximos permisibles para el agua con destino para el consumo humano. En la siguiente tabla se presentan estos parámetros establecidos, teniendo en cuenta los límites de confianza que corresponden al 95 % y para su detección desde una unidad formadora de colonia o un microorganismo en 100 cm de muestra.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 9.] #[i Características microbiológicas] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado del Ministerio de Salud y de Protección Social y del Ministerio de Ambiente y Desarrollo Sostenible (2007).
            thead
              tr.cabecera-a.text-center
                th Técnicas utilizadas
                th Coliformes totales
                th Escherichia coli
            tbody
              tr
                th Filtración por membrana
                th 0 UFC/100 cm#[sup 3]
                th 0 UFC/100 cm#[sup 3]
              tr
                th Enzima sustrato
                th < de 1 microorganismo en 100 cm#[sup 3]
                th < de 1 microorganismo en 100 cm#[sup 3]
              tr
                th Sustrato definido
                th 0 microorganismo en 100 cm#[sup 3]
                th 0 microorganismo en 100 cm#[sup 3]
              tr
                th Presencia - ausencia 
                th Ausencia en 100 cm#[sup 3]
                th Ausencia en 100 cm#[sup 3]

    .row.tarjeta.color-acento-botones.p-4.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-4.col-lg-3.col-12
        img(src='@/assets/curso/temas/tema1/tema1-29.svg' alt='')
      .col-md-8.col-lg-9.col-12
        p Los productores avícolas deben tener en cuenta los anteriores parámetros emitidos por la Resolución 2115 para el análisis de los resultados de las pruebas de laboratorio y así determinar la calidad del agua que suministran en sus granjas y realizar los correctivos pertinentes para mejorar las condiciones del agua que consumen las aves.

    .tarjeta.color-primario.basico.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/descargar.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Calidad del agua
              p.text-small Para continuar profundizando en el tema revise el documento “Calidad del agua”, ingresando al siguiente enlace: 
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(href="https://repositorio.sena.edu.co/sitios/calidad_del_agua/pdf/Calidad_del_agua.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

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
