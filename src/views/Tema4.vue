<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Registros de programas de bioseguridad

    .row.tarjeta.color-primario.p-4.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-4.col-lg-3.col-12
        img(src='@/assets/curso/temas/tema4/tema4-1.png' alt='')
      .col-md-8.col-lg-9.col-12
        p Los registros constituyen una herramienta fundamental en el programa de bioseguridad, pues allí se evidencia el estado sanitario de la granja avícola y permite de acuerdo con el análisis de los datos registrados tomar decisiones oportunas y pertinentes para la producción avícola. Esta documentación se conserva mínimo un año en la granja, lo cual permite realizar seguimientos a los diferentes procesos y procedimientos tendientes a cumplir con la normatividad de bioseguridad.
        p.mb-0 Los formatos para registros como los POE se pueden actualizar permanentemente, se redactan con un lenguaje sencillo, claro y preciso, disponibles para su análisis por parte de los encargados de la toma de decisiones.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Tipos y diligenciamiento

    .cajon-b.color-acento-contenido.p-3.mb-4(data-aos="fade-down")
      p Los registros en el programa de bioseguridad están relacionados con los procedimientos operativos estandarizados en la granja avícola, en los formatos establecidos para cada uno de ellos el productor registrará las novedades que se presenten en su explotación. A continuación, se relacionan los nombres de los diferentes registros que por normatividad se tienen en las granjas avícolas.
      p Los formatos relacionados con los Procedimientos Operativos Estandarizados (POE) diseñados por las empresas avícolas deben cumplir con las exigencias de la normatividad vigente, en cuanto a su conservación por un período no inferior a un año y registrar en ellos información general solicitada para identificar los formatos a utilizar.
      p La información que debe contener todos los formatos según las resoluciones ICA 3650, 3651, 3652, corresponde a:

    .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-md-11.col-lg-10.col-12
          ul.lista-ol.lista-ol--separador
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Nombre de la empresa.
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Nombre de la granja avícola biosegura (aves de postura y/o levante, pollo de engorde, reproductora).
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Identificación del formato.
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Fecha de diligenciamiento.
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Nombre y firma del responsable.
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Observaciones.

    p.mb-3(data-aos="fade-down") El diligenciamiento de cada formato según sea el caso debe ser realizado por el responsable asignado por la empresa de acuerdo con las funciones que realice dentro de la explotación avícola, la información que allí se registra debe ser verídica y clara para que permita su análisis.
    p.mb-5(data-aos="fade-down") Para cada formato de control de los procedimientos operativos estandarizados requieren información específica según lo establecido por la normatividad, la cual se relaciona a continuación:

    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-down-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Ingreso de personal, objetos y vehículos a la granja:] hora de ingreso, placa vehículo, procedencia, motivo del ingreso, nombre completo y firma.
            p #[b Sistema de tratamiento de agua:] nombre del producto y dosificación.
            p #[b Limpieza y desinfección de instalaciones, equipos y utensilios:] nombre del producto y dosificación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-2.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Control integrado de plagas:] nombre del producto, ubicación y verificación de efectividad del control.
            p #[b Mortalidad de las aves:] mortalidad diaria, número de galpón, posible causa de mortalidad, indicar si se realizó toma de muestras y necropsia.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-3.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Manejo y disposición final de la mortalidad:] describe el tipo de manejo que se hace, periodicidad y el destino final. Si hay compostaje incluir la información sobre el número de cajón, número de aves muertas por día, fecha de llenado del cajón, fecha de volteo, fecha de retiro del compost, número de aves por día total de bultos de compost producidos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-4.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Tratamiento térmico de la poliniza y/o gallinaza:] identificación del apilado, fecha de inicio del apilado, fecha de terminación del apilado, fecha de evacuación, temperatura, fecha y hora de verificación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-5.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Vacunación:] nombre del producto utilizado con registro ICA, enfermedad, cepa, dosis, número de lote de producto, fecha de vencimiento, vía de aplicación, edad de las aves, número de animales vacunados, nombre y firma del médico veterinario, zootecnista y responsable sanitario de la granja avícola biosegura.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-6.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Formato del uso de medicamentos veterinarios:] nombre del producto utilizado con registro ICA, laboratorio productor del medicamento veterinario, número de lote del producto, fecha de vencimiento, dosis, vía de administración, identificación del lote de aves tratadas, nombre y firma del médico veterinario o médico veterinario zootecnista responsable sanitario de la granja biosegura (aves y postura, y/o levante, pollo de engorde o reproductora).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-7.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Formato de capacitación:] tema, nombre del capacitador, lista y firma de los participantes.
            p #[b Formato de mantenimiento:] acciones preventivas, acciones correctivas tomadas y verificación de estas.
            p #[b Formato de trazabilidad del huevo para consumo humano:] número de huevos recogidos, número de lote, número de galpón, número de huevos aptos y rechazados.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-8.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Formato de mortalidad y descarte:] mortalidad y descarte al nacimiento, causa de la mortalidad y descarte, indicar si se realizó toma de muestra y embriodiagnóstico (material genético).
            p #[b Formato calibración equipos:] acciones preventivas, acciones correctivas tomadas y verificación de estas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-9.png', alt='')


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Interpretación
      
    p.mb-5(data-aos="fade-down") Los datos registrados de las actividades del programa de bioseguridad en granjas avícolas en formatos escritos o electrónicos tienen el propósito de consolidar la información y permitir su análisis para establecer estrategias de mejora continua, que se reflejan en los resultados sanitarios y productivos de la explotación.

    .row.tarjeta.color-acento-contenido.p-4.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-4.col-lg-3.col-12
        img(src='@/assets/curso/temas/tema4/tema4-10.png' alt='')
      .col-md-8.col-lg-9.col-12
        p.texto-negro.mb-0 El correcto registro de la información de los movimientos y acontecimientos que ocurren diariamente en la granja avícola permiten medir, reportar y comparar el comportamiento de lotes y de la granja en general.

    p.mb-5(data-aos="fade-down") Las siguientes tablas son ejemplos de formatos para el registro de información relacionada con el programa de bioseguridad en granjas avícolas.  El diseño de los formatos está a discrecionalidad de la empresa avícola teniendo en cuenta su tamaño podrán elaborarse mediante hojas de cálculo, papel o software disponible en el mercado o creado exclusivamente para la explotación avícola.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 17.] #[i Ejemplo formato control de ingreso personas y vehículos (visitantes)] 
        img(src='@/assets/curso/temas/tema4/tabla-17.png')

    p.mb-5(data-aos="fade-down") Para el control de ingreso de personas y vehículos (visitantes), el registro de ingreso de personal externo (proveedores, asistentes técnicos, vigilancia por entidades como  ICA, CDMB, etc.) le permite a la empresa avícola tener control y trazabilidad de los movimientos del personal que visita la granja; en este documento podrá revisar la procedencia de los vehículos o personas que en un momento dado pueden ser factor de riesgo para la producción de la explotación, por ejemplo, si el visitante ha estado en otras granjas donde se presentan problemas sanitarios por enfermedad de las aves.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 18.] #[i Ejemplo formato mantenimiento instalaciones, equipos y utensilios] 
        img(src='@/assets/curso/temas/tema4/tabla-18.png')

    p.mb-5(data-aos="fade-down") Con el registro de mantenimiento instalaciones, equipos y utensilios, la empresa avícola tendrá a su disposición la información correspondiente a las actividades de mantenimiento que se realizan en la granja, tanto de instalaciones cuando se realizan reparaciones locativas como a equipos, lo que permite identificar cuáles equipos han sido sometidos a mantenimiento o reparación y analizar en qué punto por costos es mejor reemplazarlos, ver la siguiente tabla.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 19.] #[i Ejemplo formato Control de vacunación] 
        img(src='@/assets/curso/temas/tema4/tabla-19.png')

    p.mb-5(data-aos="fade-down") En el registro de control de vacunación el productor tendrá disponible la información relacionada con la aplicación del plan vacunal de la explotación. En el caso de contingencia por reacciones negativas a la vacuna suministrada, el avicultor puede referenciar a los entes encargados la información relacionada con el biológico aplicado (nombre de la vacuna, cepa, laboratorio, lote, registro ICA, dosis) para efectuar la trazabilidad y si se da lugar a reclamaciones al productor del biológico. Además, tiene la trazabilidad del personal responsable de la aplicación de la vacuna, entre otros datos de importancia para la toma de decisiones en este tema.


</template>

<script>
export default {
  name: 'Tema4',
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
