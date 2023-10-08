<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Residuos

    .row.tarjeta.color-acento-contenido.p-4.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-3.col-lg-2.col-12
        img(src='@/assets/curso/temas/tema2/tema2-1.svg' alt='')
      .col-md-9.col-lg-10.col-12
        p.mb-0.texto-negro La definición de residuo propuesta por Fenavi (2018) es “cualquier objeto, material, sustancia o elemento sólido, líquido o gaseoso generado en actividades de producción que se abandona, bota o rechaza, y que es susceptible o no de aprovechamiento o transformación en un bien con valor económico” (p.33).

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Clasificación

    .cajon-b.color-acento-botones.p-3.mb-4(data-aos="fade-down")
      p En los procesos productivos de las granjas avícolas se generan residuos que requieren ser manejados de acuerdo con los protocolos establecidos en los procedimientos operativos estandarizados para ser reciclados, reutilizados o proceder a su disposición final. 
      p.mb-4 A continuación, se presenta la clasificación de los residuos sólidos en granjas avícolas:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-5.col-12.mb-3(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-2.svg' alt='')
          .col-12.tarjeta.color-primario
            .text-center.p-4
              h2.texto-negro Ordinarios
              p.mb-0 Colillas de cigarrillo, #[em.texto-negro tetrapak, icopor,] espumas, restos de vajillas y porcelanas, residuos con materia orgánica, papel o cartón sucio, papel carbón, sacas de tamo, cortinas de fibra, empaques de comida, vidrio partido, baldosas plásticas sucias de baja densidad, hilos o cabuyas, ropa en mal estado y residuos sanitarios (papel higiénico, toallas higiénicas y pañales desechables).

      .col-md-6.col-lg-5.col-12.mb-3(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-3.svg' alt='')
          .col-12.tarjeta.tarjeta--azul
            .p-4.text-center
              h2 Reciclables
              p.mb-0 Papel, cartón, plástico, vidrio y chatarra.
              
      .col-md-6.col-lg-5.col-12.mb-3(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-4.svg' alt='')
          .col-12.tarjeta.color-acento-contenido
            .p-4.text-center
              h2.texto-negro Orgánicos
              p.texto-negro Domiciliarios - residuos de comida, restos de vegetales o frutas, alimentos descompuestos.
              p.mb-0.texto-negro Industriales - gallinaza o pollinaza, cáscaras de huevo y mortalidad.
              
      .col-md-6.col-lg-5.col-12.mb-3(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-5.svg' alt='')
          .col-12.tarjeta.color-acento-botones
            .p-4.text-center
              h2 Peligrosos
              p.mb-0 Jeringas, guantes usados, agujas, material cortopunzante, recipientes de vacunas, medicamentos, insecticidas, raticidas, herbicidas, reactivos, lubricantes, desinfectantes de alta toxicidad, lancetas, pilas, fluorescentes y residuos derivados del petróleo.

    p.mb-5(data-aos="fade-down") Para la separación de los residuos se emplea un código de colores que permite a los trabajadores fácilmente determinar en cuál de los recipientes debe disponer los residuos de acuerdo con la categoría que le corresponda.  En la siguiente figura se aprecia la distribución de los residuos de acuerdo con el color, que ha sido asignado para dicho propósito según la Resolución 2184 de 2019.

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 3.] #[i Código de colores para separar residuos] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-6.png', alt='Color blanco: plástico, vidrio, metales, papel y cartón. Color negro: papel higiénico, servilletas, comida preparada, residuos COVID-19 (tapabocas, guantes, etc.) Color verde: residuos orgánicos, aprovechables como cáscaras de fruta, verduras y restos de alimentos crudos.')  
          figcaption.mt-2 Nota. Adaptado del Ministerio del Medio Ambiente y Desarrollo Sostenible (2021).

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Manejo y disposición

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-md-7.col-12
        p Las resoluciones ICA para la certificación de granjas bioseguras 3650, 3651 y 3652 indican que las explotaciones avícolas deben establecer y ejecutar el programa de manejo integral de residuos, que contempla las actividades de separación en la fuente, que optimice su aprovechamiento dentro de la granja o en otros procesos de la producción. Los programas establecidos por la organización estarán en concordancia con la normatividad ambiental vigente.
        p Los programas, procedimientos y protocolos implementados en las granjas avícolas deben contener la información necesaria de manera clara y precisa para la disposición de los residuos por parte de los operarios y/o trabajadores de la granja.
        p Los generadores de residuos ordinarios de acuerdo con Fenavi (2018) tienen la responsabilidad de cumplir con lo siguiente:
      .col-md-5.col-12
        img(src='@/assets/curso/temas/tema2/tema2-7.png' alt='')

    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-6.col-lg-4.col-12.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/tema2-8.png' alt='')
        .div-footer.p-3
          p.text-center Almacenar y presentar los residuos sólidos, realizar separación de residuos en la fuente, presentar los residuos sólidos para la recolección en recipientes retornables o desechables, almacenar en los recipientes la cantidad de residuos, tanto en volumen como en peso, acorde con la tecnología para su recolección, ubicar los residuos sólidos en los sitios determinados para su presentación, presentar los residuos en un área pública.
      .col-md-6.col-lg-4.col-12.mb-3(data-aos="fade-down")
        img(src='@/assets/curso/temas/tema2/tema2-9.png' alt='')
        .div-footer.p-3
          p.text-center Todas las granjas deben disponer de puntos ecológicos o caseta de residuos para el almacenamiento, la cual debe estar cubierta totalmente para evitar que la lluvia entre en contacto con los materiales depositados allí. 
            | Los residuos se depositan en recipientes destinados para tal fin de acuerdo con la separación o clasificación que la organización tenga dispuesto para este propósito.
      .col-md-6.col-lg-4.col-12.mb-3(data-aos="fade-down")
        img(src='@/assets/curso/temas/tema2/tema2-10.png' alt='')
        .div-footer.p-3
          p.text-center El tamaño de los puntos ecológicos está sujeto a la capacidad instalada en la granja avícola, igualmente, debe contar con un recipiente (guardián) para el almacenamiento de los residuos cortopunzantes que se generen en la granja.

    p.mb-3(data-aos="fade-down") Los residuos almacenados deberán disponerse de acuerdo con sus características, algunos serán reciclados o reutilizados, otros se llevarán a los rellenos sanitarios.  
    p.mb-5(data-aos="fade-down") A continuación, se presentan los pasos que puede tener un residuo generado dentro de las granjas avícolas: 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 4.] #[i Ciclo de residuos generados en granja] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-11.svg', alt='En la figura 4 se muestra el ciclo de residuos generados en granja.')  


    p.mb-3(data-aos="fade-down") Este ciclo de pasos inicia con la producción, pues de esta se deriva la generación de los diferentes residuos, los cuales deben separarse adecuadamente en el sitio, definiendo el lugar destinado para su almacenamiento, posteriormente serán recolectados y transportados por empresa encargada, y de acuerdo con su clasificación se podrá dar disposición final o algún tipo de tratamiento para su aprovechamiento, volviendo a iniciar el ciclo, buscando siempre reducir la cantidad de residuos y reusando los que lo permitan.
    p.mb-5(data-aos="fade-down") En la siguiente tabla se presenta un ejemplo de clasificación para los residuos inorgánicos generados en las granjas avícolas, para posteriormente realizar su reutilización o disposición final para el relleno sanitario.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 10.] #[i Ejemplo de clasificación de residuos inorgánicos] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead.text-small
              tr.cabecera-a.text-center
                th Residuo
                th Reciclables
                th No reciclables o basura
                th Peligroso
            tbody.text-small
              tr
                th Plástico
                td.p-2 Bebederos y comederos (con previa autorización del veterinario). Mangueras para conexiones de gas, mangueras de polietileno, carretel de pita y envases plásticos.
                td.p-2 Bolsas de vacunas, bolsas de polietilenos (bolsas plásticas de colores, claros y transparentes), recipientes de lavaloza, cortinas, polisombra, tubos de PVC, mangueras de motobombas, escobas sin palo, sacos sucios y dañados, pesas (con previa autorización del jefe de zona o veterinario), pitillos, vasos desechables y botas de caucho.
                td.p-2 Envases de desinfectantes, medicamentos, fungicidas, insecticidas y venoclisis.
              tr
                th Papel, cartón y otros
                td.p-2 Papeles de oficina (se debe utilizar por ambas caras y no arrugarlo), libros y cuadernos.
                td.p-2 Cajas de medicinas, cosméticos, cigarrillos, papel aluminio, papel carbón, envolturas de golosinas, envases (#[em tetra pack]), carpetas legajadoras, guantes de caucho, delantales y dotación dada de baja (sin logos).
                td.p-2 Vacunas (deben ser depositadas en el guardián).
              tr
                th Vidrio
                td.p-2 Envases de vidrio transparentes (sin color).
                td.p-2 Vidrios de colores, espejos, planos o partidos y lozas (platos o enchape).
                td.p-2 Frascos de vacunas y bombillos.
              tr
                th Chatarra
                td.p-2 Latas en general, láminas de #[em zinc], elementos de hierro, bronce y aluminio en general (mallas de Galpón).
                td.p-2
                td.p-2 Aluminio del sello de las vacunas.

    p.mb-5(data-aos="fade-down") Para los residuos peligrosos requieren un manejo especial, y en el siguiente recurso de aprendizaje se mencionan aspectos a considerar:

    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2 Residuos peligrosos
    
    .row.tarjeta.color-primario.p-4.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema2/tema2-12.png' alt='')
      .col-md-8.col-12
        p.mb-0 #[b Residuos de vacunas:] sumergir en una solución desinfectante (definida por la organización) durante 24 horas, los frascos de vidrio y/o envases plásticos que contenían el biológico, después se deben guardar en el recipiente asignado e identificado en el área establecida en el punto ecológico.

    .row.tarjeta.color-primario.p-4.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-8.col-12
        p #[b Plaguicidas y desinfectantes:] estos envases requieren un triple lavado.
        p El triple lavado es repetir 3 veces los siguientes pasos:
        ul.lista-ul--color
          li.lista-custom
            i
              img(src='@/assets/curso/temas/ico-huevo.svg')
            span Agregue agua hasta ¼ del envase vacío.
          li.lista-custom
            i
              img(src='@/assets/curso/temas/ico-huevo.svg')
            span Agítelo bien por 30 segundos.
          li.lista-custom
            i
              img(src='@/assets/curso/temas/ico-huevo.svg')
            span Vierta la mezcla en su bomba de aspersión.
        p Luego, se retiran las etiquetas, se perfora varias veces el envase y se dispone en el área dispuesta en el punto ecológico para ser almacenado.
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema2/tema2-13.png' alt='')

    .row.tarjeta.color-primario.p-4.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema2/tema2-14.png' alt='')
      .col-md-8.col-12
        p.mb-0 #[b Bombillos y luminarias:] se disponen en los empaques originales o se embalan en un material que evite su ruptura y por último se almacenan en el punto ecológico.

    .cajon.color-acento-botones.p-4.mb-4(data-aos="fade-down")
      p.mb-0 Las empresas avícolas han implementado programas de posconsumo, cuya estrategia es la disposición de los residuos como pilas, bombillos, equipos electrónicos, envases, etc., para ser llevados a un centro de acopio de estos elementos y las compañías productoras de estos insumos realizan la disposición final de ellos. 

    p.mb-5(data-aos="fade-down") Los programas de la Asociación Nacional de Empresarios de Colombia relacionan estrategias para el manejo de residuos de posconsumo, en la siguiente tabla se detallan:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 11.] #[i Programas posconsumo en Colombia] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado de Sentido Verde Eco Consultores (2019).
            thead
              tr.cabecera-a.text-center
                th(style="width:40%") Programa
                th Residuos
            tbody
              tr
                th 
                  img(src='@/assets/curso/temas/tema2/tema2-15.png' alt='')
                td.p-2 Envases y empaques vacíos con triple lavado de plaguicidas de uso agropecuario.
              tr
                th 
                  img(src='@/assets/curso/temas/tema2/tema2-16.png' alt='')
                td.p-2 Tubos fluorescentes, compactas ahorradoras y de alta intensidad de descarga (HID).
              tr
                th 
                  img(src='@/assets/curso/temas/tema2/tema2-17.png' alt='')
                td.p-2 Neveras, hornos microondas, aires acondicionados y lavadoras.
              tr
                th 
                  img(src='@/assets/curso/temas/tema2/tema2-18.png' alt='')
                td.p-2 Pilas AA, AAA, D, C, cuadradas de 6 y 9v con botón, pilas de celulares y pilas de computadores.
              tr
                th 
                  img(src='@/assets/curso/temas/tema2/tema2-19.png' alt='')
                td.p-2 Llantas de automotor, camionetas, buses, busetas, volquetas y tractomulas de rin 13 hasta 22,5.
              tr
                th 
                  img(src='@/assets/curso/temas/tema2/tema2-20.png' alt='')
                td.p-2 USB, discos duros, portátiles y tabletas, residuos de elementos de computadores, monitores, CPU, teclados, mouses, bafles, impresoras y escáner.
              tr
                th 
                  img(src='@/assets/curso/temas/tema2/tema2-21.png' alt='')
                td.p-2 Medicamentos únicamente de uso humano vencidos o deteriorados, consumidos parcialmente y sus envases.
              tr
                th 
                  img(src='@/assets/curso/temas/tema2/tema2-22.png' alt='')
                td.p-2 Envases y empaques de insecticidas de uso doméstico como aerosol, pastillas laminadas, bombas manuales de fumigación y envases plásticos de aspersión.
              tr
                th 
                  img(src='@/assets/curso/temas/tema2/tema2-23.png' alt='')
                td.p-2 Baterías usadas plomo-ácido de vehículos y motos.

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En cuanto a los residuos orgánicos generados en las explotaciones avícolas Fenavi (2018), lo define como los residuos “que tienen su origen en materiales biológicos (vivos), por lo que su descomposición es más sencilla para el ambiente” (p.2), en las explotaciones avícolas los principales residuos orgánicos que se generan son la gallinaza y/o pollinaza y la mortalidad, su manejo y disposición deben cumplir con lo establecido en la normatividad vigente del Instituto Colombiano Agropecuario - ICA y de las Corporaciones Autónomas Regionales con jurisdicción en la zona donde está ubicada la granja.
          br
          br 
          | La sanitación de gallinaza y/o pollinaza se conoce como el proceso térmico “al que se somete la pollinaza y la gallinaza con el fin de reducir o eliminar la presencia de microorganismos patógenos (generadores de enfermedades), antes de que el material sea retirado de la granja o se reutilice” (Fenavi, 2018, p.3), la sanitización de este material es de suma importancia, cuando los productores lo realizan correctamente se reduce la posibilidad de que las enfermedades se diseminan y se mejora el estatus sanitario de la  granja, la región o el país.


    .cajon-b.color-acento-botones.p-3.mb-4(data-aos="fade-down")
      p.mb-4 El proceso de sanitización en una granja avícola según Fenavi debe cumplir con los siguientes pasos:
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema2/tema2-25.png' alt='')
      .col-md-8.col-12
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Homogenizar la cama") 
            p Se homogeniza la cama, flameándola y picándola para eliminar material empastado.
          div(numero="2" titulo="Humedecer la cama y formar pilas") 
            p Se humedece la cama y se forman pilas, moviendo el material hacia el centro del galpón, verificando la humedad alcanzada, el alto de la pila debe ser la mitad del ancho de la base y no menor a 1,50 m.
          div(numero="3" titulo="Cubrir con plástico") 
            p Al finalizar el apilamiento de toda la cama se cubre con un plástico de calibre grueso para aumentar la temperatura del material y se requiere numerar las pilas para registrar y controlar temperatura.
          div(numero="4" titulo="Medición diaria de la temperatura") 
            p Actividad que se debe realizar todos los días y registrar en los formatos establecidos, cuando la pila alcance la temperatura de 52 a 55° C deben permanecer al menos dos días sin movimiento.
          div(numero="5" titulo="Enfriamiento de las pilas /empaque y retiro del material") 
            p Las pilas se extienden para su enfriamiento y se empacan para ser retirados del galpón.

    p.mb-3(data-aos="fade-down") Las actividades realizadas en el proceso de sanitización se registran en el formato establecido para este propósito por la administración de la empresa avícola. 
    p.mb-5(data-aos="fade-down") En la siguiente tabla se presenta un ejemplo del formato de control de sanitización de las camas, en el que se registra la siguiente información: identificación de la granja, galpón, responsable, fecha de salida de la última ave, fecha de dimensiones de apilamiento, temperatura en diferentes áreas de la pila, firma y observaciones si se requieren.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 12.] #[i Ejemplo formato control de sanitización de la cama] 
        img(src='@/assets/curso/temas/tema2/tabla-12.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema2/tema2-26.png')
      .col-md-8.col-12
        .cajon.tarjeta--azul.p-4
          p El proceso de compostaje de gallinaza de jaula en galera cubierta tiene como propósito transformar las excretas de las aves alojadas en jaula con la participación de bacterias, temperatura y tiempo para la generación de abono orgánico con características inocuas y seguras para la agricultura. Para el proceso se requiere condiciones especiales de temperatura, humedad relativa y pH.
          p.mb-0 En las granjas avícolas que manejan jaulas para el alojamiento de las aves se requiere otra infraestructura y equipos especiales para el establecimiento de una planta de compostaje; la planta de compostaje requiere de infraestructura que varía de acuerdo con el material a procesar, debe estar techada y distribuida en áreas definidas para el recibo y almacenamiento de materia prima (gallinaza y carbonados), clasificación y mezclado de materiales, zona para aireación, zona de empaque, cargue y descargue.

    .cajon-b.color-acento-botones.p-3.mb-4(data-aos="fade-down")
      p.mb-4 A continuación, se describe el proceso de compostaje de gallinaza proveniente de aves alojadas en jaula:

    PasosA.color-acento-contenido.mb-5(tipo="l" data-aos="fade-down")
      div
        h4 Recolección
        p.mb-0 Las excretas son retiradas mediante bandas trasportadoras a un pozo de recolección y de allí por medio de bombas son enviadas a los vehículos, que las transportan a la planta de compostaje.
      div.text-start
        h4 Distribución
        p.mb-0 La gallinaza es descargada en la planta de procesamiento para disminuir la humedad que contiene, en este momento se realiza la adición de material carbonado (viruta de madera, cascarilla de arroz, aserrín, residuos de cosecha, etc.), con este proceso se busca lograr una humedad del 60 % del material.
      div
        h4 Aireación y volteo
        p.mb-0 El material ingresa al área de aireación donde se forman pilas y mediante cargadores o maquinaria especializada para esta labor realizan la aireación y el volteo del material, para lograr el proceso de deshidratación de la gallinaza. Los volveos del material dependen de los volúmenes que se manejen, peso, densidad la humedad, pueden ser 1 o 2 días. El proceso dará como resultado abono orgánico seco, parejo y sin olor.
      div.text-start
        h4 Molido y empacado
        p.mb-0 De acuerdo con los requerimientos del mercado o cliente se realiza la molida del material para obtener uniformidad y buena presentación del producto y finalmente, es empacado para ser distribuido.

    p.mb-4(data-aos="fade-down") Para comprender un poco más el proceso se presenta el siguiente flujograma de las etapas del proceso de compostaje de gallinaza proveniente de galpones con alojamiento en jaula.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 5.] #[i Flujograma de las etapas desarrolladas en la planta de compostaje] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-27.svg', alt='En la figura 5 se muestra un flujograma de las etapas desarrolladas en la planta de compostaje.')  
          figcaption.mt-2 Nota. Adaptado del SENA, CANG y OEI (2015).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8
        .p-3.cajon.color-primario
          p El proceso de compostaje de la mortalidad según Fenavi (2018) “se debe a la acción transformadora de microorganismos en presencia de aire, manteniendo una humedad cercana al 60 %” (p.3), el propósito de este compostaje es poder darle manejo de acuerdo con la normatividad vigente acerca de las mortalidades que se presentan en las explotaciones avícola, con el fin de mitigar el impacto ambiental que pueda generar y aprovecharlo para la producción de abonos orgánicos para el sector agrícola.
          p La aireación es un factor de importancia en este tipo de compostaje, pues la presencia de oxígeno contribuye a que el proceso se realice efectivamente, además de la relación carbono, nitrógeno y humedad, determina la velocidad y calidad del producto final.
      .col-12.col-md-4
        img(src='@/assets/curso/temas/tema2/tema2-28.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-5
        p Entre los beneficios del compostaje de mortalidades en granjas están:
        ul.lista-ul--color
          li.lista-custom
            i
              img(src='@/assets/curso/temas/ico-huevo.svg')
            span Reducir la diseminación de agentes patógenos.
          li.lista-custom
            i
              img(src='@/assets/curso/temas/ico-huevo.svg')
            span Disminuir el impacto ambiental (reducción olor, moscas).
          li.lista-custom
            i
              img(src='@/assets/curso/temas/ico-huevo.svg')
            span Aprovechamiento económico de subproductos. 
      .col-12.col-md-2
        .p-2.cajon.color-acento-botones
          img(src='@/assets/curso/temas/tema2/tema2-29.svg')
      .col-12.col-md-5
        .p-4.cajon.color-primario
          p.mb-0 La implementación de la unidad o caseta de compostaje es de obligatoriedad para las granjas avícolas de acuerdo con las resoluciones ICA de bioseguridad para granjas avícolas (3650, 3651 y 3652).

    p.mb-4(data-aos="fade-down") Según Fenavi (2018) la unidad de compostaje tiene las siguientes características:

    .tarjeta.color-acento-botones.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-md-10.col-12
          ul.lista-ul--color
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span #[b Dimensiones de los cajones:] 1,5 metros (largo) x 1,5 metros (ancho) x 1,6 metros (altura).
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span #[b Techo:] altura ente los 2,2 y 2,5 metros. Además, es necesario contar con un alero mínimo de un metro para evitar el ingreso del agua lluvias.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span #[b Zanjas perimetrales:] con el fin de direccionar las aguas lluvias y evitar procesos erosivos, reboses o infiltraciones en la zona de compostaje.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span #[b Piso:] ser en cemento para contribuir con las óptimas condiciones de orden y aseo. Esto evita la transferencia de humedad proveniente del suelo al material en proceso de compostaje.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span #[b El borde:] debe ser de 2 o 3 cm y una pendiente aproximada de 3 % desde el centro hacia el exterior de la estructura.

    p.mb-4(data-aos="fade-down") Al poner en funcionamiento la compostera requiere cumplir los siguientes requisitos:

    .tarjeta.color-acento-botones.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-md-10.col-12
          ul.lista-ul--color
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Distancia adecuada de los galpones para evitar la transmisión de enfermedades.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Retirado de fuentes hídricas.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Determinar la cantidad y distribución de cajones del #[em compost] de acuerdo con el tipo de explotación (pollo de engorde, aves de postura y/o levante, material genético) para facilitar las actividades de los operarios o trabajadores encargados de este proceso.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Techo y enmallado para evitar el ingreso de animales silvestres, roedores, aves carroñeras, etc.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Disponer de los insumos requeridos: palas, baldes, tijeras, escobas, elementos de protección personal, zarandas, elementos de control de plagas.
            li.lista-custom
              i
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Identificación de los cajones construidos.

    p.mb-4(data-aos="fade-down") La cantidad de cajones a emplear en la granja avícola depende del número de aves encasetadas, tipo de explotación (pollo de engorde, aves de postura, reproductoras), en la siguiente tabla se relaciona la cantidad de cajones requeridos por tipo de explotación:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 13.] #[i Requerimiento de cajones de compostaje por tipo de explotación]
        figure
          img(src='@/assets/curso/temas/tema2/tabla-13.png')
          figcaption.mt-2 Nota. Adaptado de Fenavi (2018).

    p.mb-4(data-aos="fade-down") En relación con la distribución de los cajones existen varias formas de diseñarlas, pero la elección debe realizarse de acuerdo con los requerimientos de aireación, protección de agua lluvia, áreas de volteo y características del terreno, duración del proceso, costos y evacuación del material. En la siguiente figura se presentan las posibles distribuciones de los cajones para compostar.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 6.] #[i Flujograma de las etapas desarrolladas en la planta de compostaje] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-30.svg', alt='En la figura 6 se muestra el diseño de una compostera.')  
          figcaption.mt-2 Nota. Tomado de Fenavi (2018).

    p.mb-4(data-aos="fade-down") En el siguiente recurso de aprendizaje se presenta el paso a paso para el llenado de los cajones composteros:

    .tarjeta.color-acento-botones.p-4.mb-4(data-aos="fade-down")
      PasosB.color-acento-contenido
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Disminuir uniformemente una primera capa de 25 a 30 cm de pollinaza / gallinaza amedada con material vegetal.
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Abrir el ave en la zona abdominal e introducir sus patas.
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Ubicarlas sobre la capa conformada con una distancia de 12 a 15 cm de cada pared del cajón e intercalando cabeza y cola para optimizar el espacio.
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Humedecer los cadáveres rociándolos hasta alcanzar una humedad del 60 % y nunca empapar el material (encharcar).
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Cubrir las aves totalmente con pollinaza / gallinaza, iniciando por el sellamiento de los espacios entre ellas.
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Una vez se complete la última capa de disposición de mortalidad se deben cubrir las aves completamente.

    p.mb-4(data-aos="fade-down") Cuando el cajón se llena se debe esperar 30 días para realizar el volteo del material, la descripción de este proceso se presenta en el siguiente recurso de aprendizaje, por pasos de procedimiento de volteo y retiro del material:

    .tarjeta.color-acento-botones.p-4.mb-4(data-aos="fade-down")
      PasosB.color-acento-contenido
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Tras 30 días se debe desarmar el cajón, retirar el material para picar los restos y palearlo.
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Verificar las condiciones de humedad mediante la prueba de puño. Según la observación se decidirá si es necesario agregar más agua hasta alcanzar el 60 % de humedad o si se requiere palear e incluir material seco.
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Ingresar el material nuevamente al cajón (ya sea uno contiguo o el mismo), y cubrir completamente el material con gallinaza o pollinaza.
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Desde este momento se contarán 30 días más para el retiro del material (fase 2).
        .row.col-ipad
          .col-12.mb-4.mb-md-0
            p Al cumplir con el tiempo se extrae el material y se cierne empleando un tamizador.

    p.mb-4(data-aos="fade-down") Todas las actividades realizadas se registran en los formatos diseñados por la empresa avícola para llevar el control de la mortalidad en la granja. En las siguientes tablas se dan ejemplos de formatos que pueden usar como referencia para el control de la mortalidad y el manejo y disposición de la mortalidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 14.] #[i Formato control de mortalidad]
        figure
          img(src='@/assets/curso/temas/tema2/tabla-14.png')
          
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 15.] #[i Formato manejo y disposición de mortalidad]
        figure
          img(src='@/assets/curso/temas/tema2/tabla-15.png')

    p.mb-4(data-aos="fade-down") Para profundizar en el tema se sugiere ingresar al sitio del Ministerio de Ambiente y Desarrollo Sostenible y al de Fenavi donde se publica información para el manejo correcto de residuos sólidos ordinarios de granja; en el material complementario se relacionan los recursos adicionales de consulta.

</template>

<script>
export default {
  name: 'Tema2',
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
