export default {
  global: {
    componenteFormativo:
      'Protocolos de bioseguridad y control de actividades anexas de producción',
    descripcionCurso:
      'El manejo de la bioseguridad en avicultura es uno de los factores de mayor relevancia para tener en cuenta, su implementación y ejecución permite el logro de un estatus sanitario que garantice la productividad y rentabilidad de este tipo de explotaciones, por esto es importante implementar protocolos de bioseguridad que permitan estandarizar los procesos en la explotación avícola, que puedan llevar a cabo su control y estar acorde con la normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Calidad del agua potable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Calidad del agua potable',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Suministro y normativa sanitaria y ambiental',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Toma de muestras',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Métodos de tratamiento',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Fichas de registro de las actividades de desinfección',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Interpretación de los resultados de análisis de la calidad del agua',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Manejo y disposición',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Control de plagas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Monitorear la presencia de plagas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Verificar métodos de control de plagas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Registros de programas de bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos y diligenciamiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Interpretación',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Calidad del agua potable',
      referencia:
        'ViSci. (2019). El agua: <em>características químicas, físicas y biológicas</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gUTTgcS0eEc',
    },
    {
      tema: 'Fuentes',
      referencia: 'Italco. (2019). <em>Manejo del agua</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SKI4G-trHOk',
    },
    {
      tema: 'Toma de muestras',
      referencia:
        'Fenavi. (2018). <em>Guía rápida de gestión integral del recurso hídrico en unidades de producción avícola.</em> Fenavi.',
      tipo: 'Cartilla',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Guia_Rapida_Ambiental_Gestion_integral_del_recurso_hidrico.pdf',
    },
    {
      tema: 'Métodos de tratamiento',
      referencia:
        'Italcol. (2019). <em>Manejo - tratamiento básico del agua</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=M38tf-i2Yh4',
    },
    {
      tema: 'Residuos',
      referencia:
        'Fenavi. (2018). <em>Guía rápida alternativas para el manejo de residuos sólidos orgánicos en granja.</em> Fenavi.',
      tipo: 'Cartilla',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/guia-rapida-alternativas-para-el-manejo-de-residuos-organicos-de-la-produccion-avicola-en-granja/',
    },
    {
      tema: 'Clasificación',
      referencia:
        'Fenavi. (2014). <em>Guía ambiental para el subsector avícola.</em> Fenavi.',
      tipo: 'Libro',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/GUIA_AMBIENTAL_SUBSECTOR_AVICOLA.pdf',
    },
    {
      tema: 'Residuos',
      referencia:
        'Avicultores Colombia. (2016). <em>Sanitización de la cama en granjas avícolas</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eCHU31e0DZs',
    },
    {
      tema: 'Clasificación',
      referencia:
        'Fenavi. (2018). Guía rápida alternativas para el manejo de residuos sólidos ordinarios en granja. Fenavi.',
      tipo: 'Cartilla',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/guia-rapida-alternativas-para-el-manejo-de-residuos-solidos-ordinarios-en-granja/',
    },
    {
      tema: 'Manejo y disposición',
      referencia:
        'Backhus. (2014). <em>Compostaje de gallinaza</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8Zj4HFz2130/',
    },
    {
      tema: 'Manejo y disposición',
      referencia:
        'Industrias Inmetsan. (2018). <em>Compostadoras de gallinaza, pollinaza, codornaza</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YEzh9qV45iM',
    },
    {
      tema: 'Manejo y disposición',
      referencia:
        'Zucami Poultry. (2019). <em>Secado de gallinaza de aves y procesamiento como fertilizante orgánico</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YXTbudWLg1E',
    },
    {
      tema: 'Control de plagas',
      referencia:
        'Avicultores Colombia. (2016). <em>Compostaje de mortalidad.</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fd5mo5Pr1pQ',
    },
    {
      tema: 'Verificar métodos de control de plagas',
      referencia:
        'Italco. (2019). <em>Bioseguridad - control de plagas en granjas avícolas</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HUBpTO23mcI',
    },
    {
      tema: 'Registros de programas de bioseguridad',
      referencia:
        'Italco. (2019). Bioseguridad - ¿Qué es un POE? Procedimientos operativos estandarizados [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sMvg1W7Jlbs',
    },
  ],
  glosario: [
    {
      termino: 'Análisis físico y químico del agua',
      significado:
        'son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas.',
    },
    {
      termino: 'Análisis microbiológico del agua',
      significado:
        'son los procedimientos de laboratorio que se efectúan a una muestra de agua para consumo humano, con el fin de evaluar la presencia o ausencia, tipo y cantidad de microorganismos.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas, acciones y procedimientos que se deben tomar para evaluar, evitar, prevenir, mitigar, manejar y/o controlar los posibles riesgos sanitarios y sus efectos directos e indirectos en la salud humana, el medio ambiente, la biodiversidad, la productividad y producción pecuaria.',
    },
    {
      termino: 'Coliformes',
      significado:
        'bacterias <em>gram</em> negativas en forma bacilar que fermentan la lactosa a temperatura de 35 a 37ºC, produciendo ácido y gas (CO2) en un plazo de 24 a 48 horas. Se clasifican como aerobias o anaerobias facultativas, son oxidasa negativa, no forman esporas y presentan actividad enzimática de la β galactosidasa. Es un indicador de contaminación microbiológico del agua para consumo humano.',
    },
    {
      termino: '<em>Compost</em>',
      significado:
        'proceso aeróbico controlado de biotransformación en el que se encuentran involucrados organismos y microorganismos descomponedores que, empleando la energía pasiva del sol, transforman la mezcla de cadáveres y pollinaza en productos estabilizados, libres de patógenos y larvas de insectos.',
    },
    {
      termino: 'Guardián',
      significado:
        'recipiente desechable y de color rojo (pimpina de CID 20) destinado para la disposición final de los residuos peligrosos generados por uso veterinario.',
    },
    {
      termino: 'Muestra',
      significado:
        'conjunto de unidades de muestreo. Cantidad representativa de un producto que se somete a un tipo de análisis particular, mediante el cual se considera que el resto del lote se encuentra en igualdad de condiciones.',
    },
    {
      termino: 'Residuos',
      significado:
        'cualquier objeto, material, sustancia o elemento sólido, líquido o gaseoso generado en actividades de producción que se abandona, bota o rechaza, y que es susceptible o no de aprovechamiento o transformación en un bien con valor económico.',
    },
    {
      termino: 'Residuo inorgánico',
      significado:
        'es todo desecho de origen no biológico, industrial o de algún otro proceso no natural, por ejemplo, plástico, telas sintéticas, vidrio, papel o metal.',
    },
    {
      termino: 'Residuo orgánico',
      significado:
        'es todo residuo de origen biológico, por ejemplo, hojas, ramas, cáscaras, pollinaza, gallinaza o desperdicios de cocina.',
    },
    {
      termino: 'Residuo peligroso',
      significado:
        'es todo desecho, ya sea de origen biológico o no, que por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas puede causar riesgo o daño para la salud humana y el ambiente, y por lo cual debe ser tratado de forma especial. Asimismo, se consideran residuos o desechos peligrosos, los envases, los empaques y los embalajes que hayan estado en contacto con ellos, por ejemplo, material médico infeccioso, lámparas de neón o fluorescentes, tóner de impresoras, pilas alcalinas y bombillos.',
    },
    {
      termino: 'Sanitización',
      significado:
        'proceso u operaciones físicas, químicas o biológicas o mezcla de estas, a los que se somete la pollinaza para garantizar la eliminación de agentes infectocontagiosos para las aves, otros animales y para los seres humanos. Proceso en el cual se eleva la temperatura de la pollinaza, con el fin de eliminar organismos patógenos que afectan la sanidad de las aves.',
    },
    {
      termino: 'Toxicología',
      significado:
        'ciencia que estudia las sustancias químicas y los agentes físicos en cuanto son capaces de producir alteraciones patológicas a los seres vivos, a la par que estudia los mecanismos de producción de tales alteraciones y los medios para contrarrestarlas, así como los procedimientos para detectar, identificar y determinar tales agentes y valorar su grado de toxicidad.',
    },
  ],
  referencias: [
    // {
    //   referencia:
    //     'Academia Nacional de Ciencias. (2017). Sistemas de filtración. Página web koshland. ',
    //   link:
    //     'https://www.koshland-science-museum.org/water/html/es/Treatment/Filtration-Systems.html',
    // },
    {
      referencia:
        'Andia, Y. (2020). Tratamiento de agua. Coagulación y floculación. Página web ingenieroambiental. ',
      link: 'http://www.ingenieroambiental.com/4014/andia.pdf',
    },
    {
      referencia: 'ATL. (2008). Propiedades físicas del agua. Página web ATL. ',
      link:
        'http://www.atl.org.mx/index.php?option=com_content&view=article&id=293:fisica&catid=72:ciencias-naturales&Itemid=480',
    },
    {
      referencia:
        'Eco consultores. (2019). Todo sobre los programas de posconsumo. Página web Sentidoverde. ',
      link: 'https://www.sentidoverde.com/post/los-programas-posconsumo',
    },
    {
      referencia:
        'Fenavi. (2018). <em>Bioseguridad en la industria avícola.</em> Fenavi. ',
      link:
        'https://fenavi.org/publicaciones-programa-tecnico/bioseguridad-en-la-industria-avicola/#bioseguridad-en-la-industria-avicola/1',
    },
    {
      referencia:
        'Fenavi - Fonav. (2018). <em>Gestión del recurso hídrico en granjas avícolas.</em> Fenavi. ',
      link: 'https://fenavi.org/etiquetas/recurso-hidrico/',
    },
    {
      referencia:
        'Fenavi. (2018). <em>Guía rápida consideraciones técnicas para gestión integral del recurso hídrico en granjas avícolas.</em> Fenavi. ',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/guia-rapida-consideraciones-tecnicas-para-gestion-integral-del-recurso-hidrico-en-granjas-avicolas/',
    },
    {
      referencia:
        'Fenavi. (2018). <em>Memorias de capacitación. Aspectos claves de la bioseguridad en avicultura.</em> Fenavi. ',
      link: 'http://fenavibioseguridadavicultura.blogspot.com/',
    },
    {
      referencia:
        'Fenavi. (2018). <em>Guía rápida para el manejo de residuos sólidos ordinarios en granja.</em> Fenavi. ',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/guia-rapida-alternativas-para-el-manejo-de-residuos-solidos-ordinarios-en-granja/',
    },
    {
      referencia:
        'Fenavi. (2018). <em>Aspectos productivos y administrativos en la industria avícola.</em> Fenavi. ',
      link:
        'https://fenavi.org/publicaciones-programa-tecnico/aspectos-productivos-y-administrativos-en-la-industria-avicola/',
    },
    {
      referencia:
        'Hernández, M. (2021). Procedimientos para tomar muestras representativas de agua [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=YiSpsKE2eIc',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). <em>Todo lo que deben saber los colombianos sobre el nuevo código de colores para la separación de residuos que empieza a regir a partir del 1° de enero de 2021.</em> Minambiente. ',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/colombia-iniciara-el-2021-con-nuevo-codigo-de-colores-para-la-separacion-de-residuos/',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social y Ministerio de Ambiente y Desarrollo Sostenible. (2007). Resolución 2115. Minambiente. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resoluci%C3%B3n_2115_de_2007.pdf',
    },
    {
      referencia:
        'Perez, L. (2005). <em>Teoría de la sedimentación.</em> UBA. ',
      link:
        'https://cms.fi.uba.ar/uploads/institutos_teoria_sedimentacion_8d6be3a941.pdf',
    },
    {
      referencia:
        'SENA, CANG, OEI. (2015). <em>Memorias seminario actualización en avicultura.</em> SENA, CANG, OEI. Timsa Técnicas e ingeniería de mezclas. (2021). <em>Tratamiento de agua.</em> Timsa. ',
      // link: 'https://www.timsa.com/coagulacion-floculacion-agua/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Fabiola Monroy Rivera',
          cargo: 'Instructora',
          centro:
            'Regional Santander - Centro Agroempresarial y Turístico de Los Andes',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
