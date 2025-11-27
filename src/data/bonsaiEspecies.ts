const especies = [
  {
    id: 1,
    especie: "Juniperus procumbens",
    descripcion: "Enebro prostrado, clásico bonsái por su follaje compacto y facilidad para ramificar.",
    cuidadosGenerales: "Riego moderado; sustrato drenante; poda de mantenimiento frecuente.",
    ubicacion: "Exterior, pleno sol a semisombra ligera.",
    cuandoyComoAbonar: "Abr–Sep cada 2 semanas con abono balanceado; orgánico en invierno.",
    fechasParaTrabajarlo: "Trasplante en primavera; alambrado en primavera/otoño; pinzado todo el crecimiento.",
    dificultad: "principiante",
    tecnicas: [
      "Pinzado de brotes para densificar",
      "Defoliado parcial si es necesario",
      "Alambrado para movimiento de ramas",
      "Injertos raros en casos avanzados"
    ],
    images: [
      "https://source.unsplash.com/800x600/?juniper,bonsai",
      "https://source.unsplash.com/800x600/?Juniperus,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 101, especie: "Juniperus procumbens 'Nana'", descripcion: "Var. enana, muy usada en bandejas y shohin.", cuidadosGenerales: "Igual que la especie." }
    ]
  },

  {
    id: 2,
    especie: "Juniperus chinensis",
    descripcion: "Enebro chino, fuerte, acepta alambrado y jinaje; gran capacidad de recuperación.",
    cuidadosGenerales: "Sustrato muy drenante, sol fuerte para cerrar heridas.",
    ubicacion: "Exterior, máximo sol.",
    cuandoyComoAbonar: "Primavera–otoño, abono rico en potasio para madera y cicatrización.",
    fechasParaTrabajarlo: "Alambrado en primavera/otoño, jin y desbaste en verano seco.",
    dificultad: "intermedio",
    tecnicas: ["Pinzado de acículas", "Jin y shari", "Alambrado fuerte"],
    images: [
      "https://source.unsplash.com/800x600/?juniper-chinese,bonsai",
      "https://source.unsplash.com/800x600/?Juniperus-chinensis,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 201, especie: "Juniperus chinensis 'Shimpaku'", descripcion: "Muy valorado por hojas y textura de corteza." }
    ]
  },

  {
    id: 3,
    especie: "Pinus thunbergii",
    descripcion: "Pino negro japonés, clásico para estilos formales; corteza atractiva en ejemplares maduros.",
    cuidadosGenerales: "Mucha luz y ventilación; riego moderado; evitar encharcar.",
    ubicacion: "Exterior pleno sol.",
    cuandoyComoAbonar: "Abr–Jun y Sep–Oct con abono para coníferas (baja N en otoño).",
    fechasParaTrabajarlo: "Trasplante en primavera; acodo y trasvase en primavera; pinzado de acículas en verano.",
    dificultad: "avanzado",
    tecnicas: [
      "Desyemado / pinzado de acículas (needle pruning)",
      "Trasplante con poda de raíces controlada",
      "Alambrado con cuidado por agujas"
    ],
    images: [
      "https://source.unsplash.com/800x600/?pine,bonsai",
      "https://source.unsplash.com/800x600/?Pinus-thunbergii,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 301, especie: "Pinus thunbergii (variedad de costa)", descripcion: "Buena resistencia a condiciones salinas." }
    ]
  },

  {
    id: 4,
    especie: "Pinus sylvestris",
    descripcion: "Pino silvestre: aguja fina, excelente veteado y corteza en edad madura.",
    cuidadosGenerales: "Sol pleno; sustrato drenante; podas de formación en primavera.",
    ubicacion: "Exterior, climas templados.",
    cuandoyComoAbonar: "Primavera/otoño con fertilizante para coníferas.",
    fechasParaTrabajarlo: "Trasplante en primavera; pinzado en verano.",
    dificultad: "intermedio",
    tecnicas: ["Pinzado de brotes", "Control de agujas", "Jin/ shari en maduras"],
    images: [
      "https://source.unsplash.com/800x600/?scots-pine,bonsai",
      "https://source.unsplash.com/800x600/?Pinus-sylvestris,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 401, especie: "Pinus sylvestris 'Compacta'", descripcion: "Buena para macetas pequeñas." }
    ]
  },

  {
    id: 5,
    especie: "Pinus parviflora",
    descripcion: "Pino blanco japonés: agujas cortas, excelente para estilos formales y literati.",
    cuidadosGenerales: "Exposición soleada; riegos regulares; protección frente a calor extremo.",
    ubicacion: "Exterior, clima templado-frío.",
    cuandoyComoAbonar: "Primavera y principios de otoño con abono equilibrado.",
    fechasParaTrabajarlo: "Trasplante en primavera; pinzado de acículas en verano.",
    dificultad: "avanzado",
    tecnicas: ["Control de agujas", "Alambrado con cuidados", "Injerto en injertos de agujas"],
    images: [
      "https://source.unsplash.com/800x600/?white-pine,bonsai",
      "https://source.unsplash.com/800x600/?Pinus-parviflora,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 501, especie: "Pinus parviflora 'Glauca'", descripcion: "Agujas azuladas, muy ornamentales." }
    ]
  },

  {
    id: 6,
    especie: "Ficus retusa",
    descripcion: "Ficus tropical robusto, apto para interior bien iluminado; produce raíces aéreas.",
    cuidadosGenerales: "Humedad ambiente moderada; no tolera frío; riegos regulares.",
    ubicacion: "Interior luminoso o exterior en climas cálidos.",
    cuandoyComoAbonar: "Mar–Sep cada 2–3 semanas con abono líquido.",
    fechasParaTrabajarlo: "Podas estructurales en primavera/verano; trasplante en primavera.",
    dificultad: "principiante",
    tecnicas: ["Poda de raíces", "Defoliado parcial", "Manejo de raíces aéreas"],
    images: [
      "https://source.unsplash.com/800x600/?ficus,bonsai",
      "https://source.unsplash.com/800x600/?Ficus-retusa,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 601, especie: "Ficus retusa 'Microcarpa'", descripcion: "Hojas pequeñas, ideal bonsái interior." }
    ]
  },

  {
    id: 7,
    especie: "Ficus microcarpa",
    descripcion: "Ficus de hojas pequeñas, rápido crecimiento y tolerante a podas drásticas.",
    cuidadosGenerales: "No mover de lugar frecuentemente; riego moderado.",
    ubicacion: "Interior muy iluminado o exterior en zonas cálidas.",
    cuandoyComoAbonar: "Cada 2 semanas en crecimiento.",
    fechasParaTrabajarlo: "Modelado en primavera/verano.",
    dificultad: "principiante",
    tecnicas: ["Acortado de ramas", "Defoliado parcial", "Injerto de raíces aéreas"],
    images: [
      "https://source.unsplash.com/800x600/?ficus-microcarpa,bonsai",
      "https://source.unsplash.com/800x600/?ginseng-ficus,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 701, especie: "Ficus microcarpa 'Ginseng'", descripcion: "Base de tronco gruesa y raíces aparentes." }
    ]
  },

  {
    id: 8,
    especie: "Ficus benjamina",
    descripcion: "Ficus benjamina: hojas más finas, delicado a cambios bruscos de luz.",
    cuidadosGenerales: "Evitar corrientes de aire; riegos regulares pero sin encharcar.",
    ubicacion: "Interior con buena iluminación.",
    cuandoyComoAbonar: "Cada 2–3 semanas en crecimiento.",
    fechasParaTrabajarlo: "Podas en temporada cálida.",
    dificultad: "intermedio",
    tecnicas: ["Poda estructural", "Control de raíces", "Defoliado cuidadoso"],
    images: [
      "https://source.unsplash.com/800x600/?ficus-benjamina,bonsai",
      "https://source.unsplash.com/800x600/?weeping-fig,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 801, especie: "Ficus benjamina var.", descripcion: "Variantes con hojas más pequeñas." }
    ]
  },

  {
    id: 9,
    especie: "Acer palmatum",
    descripcion: "Arce japonés: hoja palmeada, color otoñal espectacular; preferido en estilos formales y shohin.",
    cuidadosGenerales: "Evitar sol muy fuerte; sustrato ácido/ligeramente húmedo.",
    ubicacion: "Exterior, sombra parcial.",
    cuandoyComoAbonar: "Primavera y otoño con abono bajo en nitrógeno para favorecer coloración.",
    fechasParaTrabajarlo: "Trasplante a finales de invierno; defoliado y pinzado en verano según objetivos.",
    dificultad: "intermedio",
    tecnicas: ["Defoliado para reducción de hoja", "Pinzado de brotes", "Alambrado temporal"],
    images: [
      "https://source.unsplash.com/800x600/?acer-palmatum,bonsai",
      "https://source.unsplash.com/800x600/?maple,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 901, especie: "Acer palmatum 'Atropurpureum'", descripcion: "Hojas rojizas, ornamental en otoño." }
    ]
  },

  {
    id: 10,
    especie: "Acer buergerianum",
    descripcion: "Arce tridente: resistente, hoja pequeña, rápido ramificado.",
    cuidadosGenerales: "Sustrato húmedo, protección de sol fuerte en climas cálidos.",
    ubicacion: "Exterior, sombra parcial.",
    cuandoyComoAbonar: "Primavera a verano con abono suave.",
    fechasParaTrabajarlo: "Trasplante al final del invierno; podas de formación en temporada de crecimiento.",
    dificultad: "principiante-intermedio",
    tecnicas: ["Defoliado parcial", "Pinzado y modelado", "Acodo en ejemplares jóvenes"],
    images: [
      "https://source.unsplash.com/800x600/?acer-buergerianum,bonsai",
      "https://source.unsplash.com/800x600/?trident-maple,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 1001, especie: "Acer buergerianum 'Compactum'", descripcion: "Forma compacta y adecuada para macetas pequeñas." }
    ]
  },

  {
    id: 11,
    especie: "Ulmus parvifolia",
    descripcion: "Olmo chino (Zelkova en ocasiones): hoja pequeña, corteza atractiva; muy tolerante.",
    cuidadosGenerales: "Riego regular, poda frecuente para mantener estructura.",
    ubicacion: "Exterior, tolera sol y semisombra.",
    cuandoyComoAbonar: "Primavera–otoño con abono equilibrado.",
    fechasParaTrabajarlo: "Trasplantes en primavera; poda de ramas en invierno/tarde invierno.",
    dificultad: "principiante",
    tecnicas: ["Alambrado", "Repicado de raíces", "Pinzado de brotes"],
    images: [
      "https://source.unsplash.com/800x600/?elm,bonsai",
      "https://source.unsplash.com/800x600/?Ulmus-parvifolia,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 1101, especie: "Ulmus parvifolia 'Alley'", descripcion: "Variante usada por su vigor y hoja fina." }
    ]
  },

  {
    id: 12,
    especie: "Zelkova serrata",
    descripcion: "Zelkova: similar al olmo, buena ramificación y corteza; excelente para bonsái.",
    cuidadosGenerales: "Riego moderado; poda para densificar.",
    ubicacion: "Exterior, ambiente templado.",
    cuandoyComoAbonar: "Primavera–otoño con abonos balanceados.",
    fechasParaTrabajarlo: "Podas en invierno; trasplante en primavera.",
    dificultad: "intermedio",
    tecnicas: ["Defoliado", "Alambrado", "Poda de formación"],
    images: [
      "https://source.unsplash.com/800x600/?zelkova,bonsai",
      "https://source.unsplash.com/800x600/?zelkova-serrata,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 1201, especie: "Zelkova serrata var.", descripcion: "Variedades con hojas un poco más pequeñas para shohin." }
    ]
  },

  {
    id: 13,
    especie: "Malus (Manzano)",
    descripcion: "Manzano en bonsái: flor y, a veces, fruto; caducifolio y ornamental.",
    cuidadosGenerales: "Necesita frío invernal para floración; evitar exceso de humedad.",
    ubicacion: "Exterior, pleno sol a semisombra.",
    cuandoyComoAbonar: "Primavera y verano con abono equilibrado; potasio antes de floración/ fruto.",
    fechasParaTrabajarlo: "Poda post-floración; trasplante a finales de invierno.",
    dificultad: "intermedio",
    tecnicas: ["Poda de fructificación", "Defoliado parcial", "Reducción de brotes"],
    images: [
      "https://source.unsplash.com/800x600/?apple-tree,bonsai",
      "https://source.unsplash.com/800x600/?malus,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 1301, especie: "Malus halliana", descripcion: "Floración temprana y abundante." },
      { id: 1302, especie: "Malus domestica (miniatura)", descripcion: "Variedades enanas para bonsái frutal." }
    ]
  },

  {
    id: 14,
    especie: "Prunus serrulata (Cerezo)",
    descripcion: "Cerezo ornamental de floración espectacular; más delicado con poda.",
    cuidadosGenerales: "Prevención de hongos; riegos regulares; necesita frío para brotar bien.",
    ubicacion: "Exterior, pleno sol o semisombra ligera.",
    cuandoyComoAbonar: "Primavera con abono suave; reducir en otoño.",
    fechasParaTrabajarlo: "Poda ligera después de floración; trasplante en invierno tardío.",
    dificultad: "intermedio",
    tecnicas: ["Poda post-floración", "Control de brotes", "Manejo de raíces para floración"],
    images: [
      "https://source.unsplash.com/800x600/?cherry-blossom,bonsai",
      "https://source.unsplash.com/800x600/?Prunus-serrulata,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 1401, especie: "Prunus mume (ume)", descripcion: "Cerezo japonés/orejón con flor temprana." }
    ]
  },

  {
    id: 15,
    especie: "Rhododendron / Azalea (Satsuki)",
    descripcion: "Azalea bonsái con floraciones intensas; requiere sustrato ácido.",
    cuidadosGenerales: "Riego con agua baja en cal; sustrato ácido (kanuma o mezcla ácida).",
    ubicacion: "Exterior con sombra parcial.",
    cuandoyComoAbonar: "Después de floración con abono ácido; evitar exceso de N.",
    fechasParaTrabajarlo: "Trasplante justo después de floración; poda después de floración.",
    dificultad: "intermedio",
    tecnicas: ["Poda de flor", "Defoliado suave", "Uso de kanuma en sustrato"],
    images: [
      "https://source.unsplash.com/800x600/?azalea,bonsai",
      "https://source.unsplash.com/800x600/?rhododendron,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 1501, especie: "Rhododendron indicum (Satsuki)", descripcion: "Muy usado por su floración variada." }
    ]
  },

  {
    id: 16,
    especie: "Olea europaea (Olivo)",
    descripcion: "Olivo mediterráneo: resistente, tolera sequía, corteza y fruto ornamentales.",
    cuidadosGenerales: "Riego escaso-moderado; suelos bien drenados; mucha luz.",
    ubicacion: "Exterior, pleno sol.",
    cuandoyComoAbonar: "Primavera y otoño con abono bajo en nitrógeno, más potasio.",
    fechasParaTrabajarlo: "Trasplante en primavera; podas en primavera/verano.",
    dificultad: "intermedio",
    tecnicas: ["Defoliado parcial", "Poda de formación", "Trabajo de raíces para reducir vigor"],
    images: [
      "https://source.unsplash.com/800x600/?olive-tree,bonsai",
      "https://source.unsplash.com/800x600/?Olea-europaea,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 1601, especie: "Olea europaea var. sylvestris", descripcion: "Var. silvestre, tronco muy atractivo." }
    ]
  },

  {
    id: 17,
    especie: "Buxus microphylla (Boj)",
    descripcion: "Boj: hojas pequeñas, excelente para topiaria y densidad en bonsái.",
    cuidadosGenerales: "Sustrato húmedo pero drenante; tolera poda frecuente.",
    ubicacion: "Exterior a semisombra.",
    cuandoyComoAbonar: "Primavera–verano con abono balanceado.",
    fechasParaTrabajarlo: "Podas de formación en temporada de crecimiento; trasplante en primavera.",
    dificultad: "principiante",
    tecnicas: ["Poda de formación intensa", "Defoliado parcial en casos", "Alambrado ligero"],
    images: [
      "https://source.unsplash.com/800x600/?boxwood,bonsai",
      "https://source.unsplash.com/800x600/?Buxus,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 1701, especie: "Buxus microphylla 'Faulkner'", descripcion: "Var. compacta, hojas muy pequeñas." }
    ]
  },

  {
    id: 18,
    especie: "Cotoneaster horizontalis",
    descripcion: "Cotoneaster: ramas horizontales y frutos rojos; muy ornamental en otoño-invierno.",
    cuidadosGenerales: "Sol parcial a pleno; sustrato bien drenante; poda para mantener forma.",
    ubicacion: "Exterior.",
    cuandoyComoAbonar: "Primavera con abono suave.",
    fechasParaTrabajarlo: "Poda de formación en primavera; trasplante en final de invierno.",
    dificultad: "principiante-intermedio",
    tecnicas: ["Poda de fructificación", "Alambrado para crear ramificación fina"],
    images: [
      "https://source.unsplash.com/800x600/?cotoneaster,bonsai",
      "https://source.unsplash.com/800x600/?cotoneaster-fruit,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 1801, especie: "Cotoneaster horizontalis (var.)", descripcion: "Buen desarrollo de ramillas finas." }
    ]
  },

  {
    id: 19,
    especie: "Pyracantha coccinea (Espino de fuego)",
    descripcion: "Arbusto con flores blancas y frutos naranjas/rojos; buena ramificación espinosa.",
    cuidadosGenerales: "Pleno sol; sustrato drenante; podas para controlar tamaño.",
    ubicacion: "Exterior, sol pleno.",
    cuandoyComoAbonar: "Primavera/Verano con abono equilibrado.",
    fechasParaTrabajarlo: "Podas y alambrado en temporada de crecimiento.",
    dificultad: "intermedio",
    tecnicas: ["Defoliado parcial", "Alambrado con cuidado por espinas"],
    images: [
      "https://source.unsplash.com/800x600/?pyracantha,bonsai",
      "https://source.unsplash.com/800x600/?firethorn,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 1901, especie: "Pyracantha 'Orange Glow'", descripcion: "Frutos grandes y coloridos." }
    ]
  },

  {
    id: 20,
    especie: "Bougainvillea spectabilis",
    descripcion: "Bougainvillea: tropical florido, ramas flexibles y tronco texturizado; necesita calor.",
    cuidadosGenerales: "Sol intenso; riegos moderados; poda para formar ramillas.",
    ubicacion: "Exterior en climas cálidos/tropicales.",
    cuandoyComoAbonar: "Primavera–verano con abono rico en potasio para floración.",
    fechasParaTrabajarlo: "Poda ligera después de floración; trasplante en primavera.",
    dificultad: "intermedio",
    tecnicas: ["Poda drástica tolerada", "Uso de alambrado suave", "Defoliado parcial"],
    images: [
      "https://source.unsplash.com/800x600/?bougainvillea,bonsai",
      "https://source.unsplash.com/800x600/?bougainvillea-flowers,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 2001, especie: "Bougainvillea 'Barbara Karst'", descripcion: "Variedad de flor grande y color intenso." }
    ]
  },

  {
    id: 21,
    especie: "Serissa foetida (Tree of a thousand stars)",
    descripcion: "Arbusto tropical con flores blancas pequeñas; follaje fino y ramificación densa.",
    cuidadosGenerales: "No tolera cambios bruscos de riego; necesita humedad ambiental.",
    ubicacion: "Interior luminoso o exterior en climas cálidos.",
    cuandoyComoAbonar: "Cada 2–3 semanas en crecimiento con abono suave.",
    fechasParaTrabajarlo: "Poda frecuente para mantener ramificación; trasplante en primavera.",
    dificultad: "intermedio",
    tecnicas: ["Poda de ramillas finas", "Defoliado suave", "Control de raíces"],
    images: [
      "https://source.unsplash.com/800x600/?serissa,bonsai",
      "https://source.unsplash.com/800x600/?tree-of-a-thousand-stars,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 2101, especie: "Serissa foetida var.", descripcion: "Variedades con tamaños de hoja algo más pequeños." }
    ]
  },

  {
    id: 22,
    especie: "Carmona microphylla (Ehretia microphylla / Fukien Tea)",
    descripcion: "Fukien Tea: hojas pequeñas y sutiles flores blancas; apto para interior.",
    cuidadosGenerales: "Humedad ambiental media; riego regular; sensibilidad al frío.",
    ubicacion: "Interior luminoso o exterior en clima cálido.",
    cuandoyComoAbonar: "Abono líquido cada 2 semanas en crecimiento.",
    fechasParaTrabajarlo: "Poda y modelado en primavera/verano; trasplante en primavera.",
    dificultad: "intermedio",
    tecnicas: ["Defoliado parcial", "Poda de estructura", "Control de raíces y transplantado con cuidado"],
    images: [
      "https://source.unsplash.com/800x600/?fukien-tea,bonsai",
      "https://source.unsplash.com/800x600/?Carmona,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 2201, especie: "Carmona microphylla 'Standard'", descripcion: "Hoja pequeña, apto para interior." }
    ]
  },

  {
    id: 23,
    especie: "Ligustrum japonicum (Ligustrum)",
    descripcion: "Ligustrum: hoja coriácea, buena ramificación y respuesta a poda; usado en bonsái y setos miniatura.",
    cuidadosGenerales: "Sustrato ligeramente húmedo; poda para densificar.",
    ubicacion: "Exterior a semisombra.",
    cuandoyComoAbonar: "Primavera–verano con abono equilibrado.",
    fechasParaTrabajarlo: "Podas de formación en temporada de crecimiento; trasplante en primavera.",
    dificultad: "principiante-intermedio",
    tecnicas: ["Poda intensa", "Alambrado de ramas finas", "Defoliado parcial"],
    images: [
      "https://source.unsplash.com/800x600/?privet,bonsai",
      "https://source.unsplash.com/800x600/?Ligustrum,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 2301, especie: "Ligustrum japonicum 'Texanum'", descripcion: "Var. de hoja más grande pero ramifica bien." }
    ]
  },

  {
    id: 24,
    especie: "Sageretia theezans (Sweet Plum)",
    descripcion: "Árbol de follaje fino, tronco atractivo y buena ramificación; popular bonsái chino y japonés.",
    cuidadosGenerales: "Riego regular; no tolera heladas fuertes.",
    ubicacion: "Interior luminoso o exterior en climas cálidos.",
    cuandoyComoAbonar: "Primavera–verano cada 2–3 semanas.",
    fechasParaTrabajarlo: "Poda de ramillas en crecimiento; trasplante en primavera.",
    dificultad: "intermedio",
    tecnicas: ["Poda fina", "Alambrado para definir curvas", "Defoliado suave"],
    images: [
      "https://source.unsplash.com/800x600/?sageretia,bonsai",
      "https://source.unsplash.com/800x600/?sweet-plum,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 2401, especie: "Sageretia theezans 'Compacta'", descripcion: "Var. compacta para macetas pequeñas." }
    ]
  },

  {
    id: 25,
    especie: "Schefflera arboricola",
    descripcion: "Tropical con hojas en radios; rápido crecimiento, usado para interior y entrenamiento.",
    cuidadosGenerales: "Luz brillante, humedad, evitar frío.",
    ubicacion: "Interior luminoso o exterior en climas cálidos.",
    cuandoyComoAbonar: "Cada 2–3 semanas en estación de crecimiento.",
    fechasParaTrabajarlo: "Poda de reducción en primavera/verano; trasplante en primavera.",
    dificultad: "principiante",
    tecnicas: ["Poda para reducción de hojas", "Manejo de raíces", "Defoliado parcial"],
    images: [
      "https://source.unsplash.com/800x600/?schefflera,bonsai",
      "https://source.unsplash.com/800x600/?umbrella-tree,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 2501, especie: "Schefflera arboricola 'Luseane'", descripcion: "Var. enana y compacta." }
    ]
  },

  {
    id: 26,
    especie: "Taxus baccata (Tejo)",
    descripcion: "Tejo: conífera de hojas planas, excelente para formas clásicas y literati.",
    cuidadosGenerales: "Sombra parcial a semisombra; riegos moderados; no tolera encharque.",
    ubicacion: "Exterior, sombra parcial.",
    cuandoyComoAbonar: "Primavera y otoño con abono equilibrado.",
    fechasParaTrabajarlo: "Trasplante en primavera; poda en invierno.",
    dificultad: "intermedio-avanzado",
    tecnicas: ["Alambrado suave", "Poda de densidad", "Trabajo de corteza en maduras"],
    images: [
      "https://source.unsplash.com/800x600/?yew,bonsai",
      "https://source.unsplash.com/800x600/?Taxus,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 2601, especie: "Taxus baccata 'Fastigiata'", descripcion: "Var. columnar con interesante movimiento." }
    ]
  },

  {
    id: 27,
    especie: "Quercus ilex (Encina)",
    descripcion: "Encina/Holm oak: robusta, hojas perennes, buena para estilos mediterráneos.",
    cuidadosGenerales: "Sequía tolerante; sustrato bien drenado; pleno sol.",
    ubicacion: "Exterior, clima mediterráneo.",
    cuandoyComoAbonar: "Primavera con abono moderado.",
    fechasParaTrabajarlo: "Trasplante en primavera; podas en temporada templada.",
    dificultad: "intermedio",
    tecnicas: ["Poda de formación", "Control de raíces", "Trabajo de corteza en maduras"],
    images: [
      "https://source.unsplash.com/800x600/?holm-oak,bonsai",
      "https://source.unsplash.com/800x600/?Quercus-ilex,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 2701, especie: "Quercus ilex 'Dwarf'", descripcion: "Var. enana usada para bonsái mediterráneo." }
    ]
  },

  {
    id: 28,
    especie: "Ginkgo biloba",
    descripcion: "Ginkgo: hoja única en forma de abanico; caducifolio con gran interés ornamental.",
    cuidadosGenerales: "Tolera suelos pobres; sol parcial a pleno.",
    ubicacion: "Exterior.",
    cuandoyComoAbonar: "Primavera con abono equilibrado.",
    fechasParaTrabajarlo: "Trasplante en primavera; poda y alambrado en verano/frío controlado.",
    dificultad: "intermedio",
    tecnicas: ["Defoliado parcial", "Alambrado cuidadoso", "Control de brotes apicales"],
    images: [
      "https://source.unsplash.com/800x600/?ginkgo,bonsai",
      "https://source.unsplash.com/800x600/?Ginkgo-bonsai,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 2801, especie: "Ginkgo biloba 'Mariken'", descripcion: "Var. de hoja pequeña ideal para bonsái." }
    ]
  },

  {
    id: 29,
    especie: "Cotoneaster sp.",
    descripcion: "Variedades de cotoneaster muy usadas por su ramificación fina y frutos decorativos.",
    cuidadosGenerales: "Pleno sol a semisombra; sustrato drenante.",
    ubicacion: "Exterior.",
    cuandoyComoAbonar: "Primavera con abono ligero.",
    fechasParaTrabajarlo: "Poda en primavera; trasplante final de invierno.",
    dificultad: "principiante",
    tecnicas: ["Poda de formación", "Alambrado para ramillas", "Control de fructificación"],
    images: [
      "https://source.unsplash.com/800x600/?cotoneaster,bonsai",
      "https://source.unsplash.com/800x600/?cotoneaster-berries,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 2901, especie: "Cotoneaster franchetii", descripcion: "Buena ramilla y frutos llamativos." }
    ]
  },

  {
    id: 30,
    especie: "Prunus mume (Albaricoque japonés / Ume)",
    descripcion: "Prunus mume: flor temprana, aroma; usado por flor y carácter antiguo.",
    cuidadosGenerales: "Necesita periodo de frío; suelos fértiles y drenantes.",
    ubicacion: "Exterior, pleno sol.",
    cuandoyComoAbonar: "Primavera con abono suave.",
    fechasParaTrabajarlo: "Poda pos-floración; trasplante en invierno.",
    dificultad: "intermedio",
    tecnicas: ["Poda post-floración", "Defoliado moderado", "Control de fructificación"],
    images: [
      "https://source.unsplash.com/800x600/?prunus-mume,bonsai",
      "https://source.unsplash.com/800x600/?ume,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 3001, especie: "Prunus mume 'Beni-chidori'", descripcion: "Var. con flor rosada muy ornamental." }
    ]
  },

  {
    id: 31,
    especie: "Sageretia theezans (Sweet Plum)",
    descripcion: "Arbusto con follaje denso y tronco bonito; ramifica muy bien.",
    cuidadosGenerales: "Riego regular; sensible a heladas fuertes.",
    ubicacion: "Exterior en clima templado-cálido.",
    cuandoyComoAbonar: "Primavera–verano con abono equilibrado.",
    fechasParaTrabajarlo: "Poda fina en crecimiento; trasplante en primavera.",
    dificultad: "intermedio",
    tecnicas: ["Alambrado fino", "Poda de ramillas", "Defoliado parcial"],
    images: [
      "https://source.unsplash.com/800x600/?sageretia,bonsai",
      "https://source.unsplash.com/800x600/?sweet-plum-bonsai,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 3101, especie: "Sageretia theezans 'Compacta'", descripcion: "Var. de hoja más pequeña." }
    ]
  },

  {
    id: 32,
    especie: "Bougainvillea (var.)",
    descripcion: "Tropicales floridos; ramas flexibles y excelente para bonsái de clima cálido.",
    cuidadosGenerales: "Sol pleno, calor y riego moderado; poda fuerte tolerada.",
    ubicacion: "Exterior en clima cálido/tropical.",
    cuandoyComoAbonar: "Primavera–verano con potasio para floración.",
    fechasParaTrabajarlo: "Poda ligera tras floración; trasplante primavera.",
    dificultad: "intermedio",
    tecnicas: ["Poda drástica", "Alambrado suave", "Control de raíces"],
    images: [
      "https://source.unsplash.com/800x600/?bougainvillea,bonsai",
      "https://source.unsplash.com/800x600/?bougainvillea-bonsai,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 3201, especie: "Bougainvillea 'Barbara Karst'", descripcion: "Var. muy usada por color intenso." }
    ]
  },

  {
    id: 33,
    especie: "Ligustrum lucidum",
    descripcion: "Privet grande, ramificación rápida, buena recuperación de poda.",
    cuidadosGenerales: "Sustrato moderadamente húmedo, buena poda para concentrar ramillas.",
    ubicacion: "Exterior a semisombra.",
    cuandoyComoAbonar: "Primavera–verano con abono general.",
    fechasParaTrabajarlo: "Podas frecuentes en temporada de crecimiento.",
    dificultad: "principiante",
    tecnicas: ["Poda intensa", "Alambrado fino", "Defoliado parcial"],
    images: [
      "https://source.unsplash.com/800x600/?ligustrum,bonsai",
      "https://source.unsplash.com/800x600/?privet-bonsai,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 3301, especie: "Ligustrum lucidum 'Compactum'", descripcion: "Var. compacta para bonsái." }
    ]
  },

  {
    id: 34,
    especie: "Schefflera arboricola 'Luseane'",
    descripcion: "Variante enana de schefflera, usada como bonsái interior por su tolerancia.",
    cuidadosGenerales: "Luz brillante, riegos regulares, evita corrientes frías.",
    ubicacion: "Interior luminoso.",
    cuandoyComoAbonar: "Cada 2–3 semanas en crecimiento.",
    fechasParaTrabajarlo: "Poda y reducción de ramas en primavera.",
    dificultad: "principiante",
    tecnicas: ["Poda de reducción", "Control de raíces", "Defoliado leve"],
    images: [
      "https://source.unsplash.com/800x600/?schefflera-luseane,bonsai",
      "https://source.unsplash.com/800x600/?dwarf-schefflera,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 3401, especie: "Schefflera 'Luseane'", descripcion: "Muy compacta y fácil de mantener." }
    ]
  },

  {
    id: 35,
    especie: "Sageretia / Carmona / Serissa (grupo de interior comunes)",
    descripcion: "Grupo representativo de especies interiores populares: Sageretia, Carmona (Fukien Tea) y Serissa.",
    cuidadosGenerales: "Ambiente estable, luz intensa indirecta, riegos controlados.",
    ubicacion: "Interior luminoso / exterior templado.",
    cuandoyComoAbonar: "Cada 2–3 semanas en crecimiento.",
    fechasParaTrabajarlo: "Poda de ramillas en primavera; trasplante en primavera.",
    dificultad: "intermedio",
    tecnicas: ["Defoliado parcial", "Poda finísima", "Manejo de raíces en maceta pequeña"],
    images: [
      "https://source.unsplash.com/800x600/?interior-bonsai,bonsai",
      "https://source.unsplash.com/800x600/?serissa-carmona-sageretia,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 3501, especie: "Sageretia theezans", descripcion: "Arbusto de hojas pequeñas." },
      { id: 3502, especie: "Carmona microphylla (Fukien Tea)", descripcion: "Interior clásico, flores pequeñas." },
      { id: 3503, especie: "Serissa foetida", descripcion: "Follaje fino y floración frecuente." }
    ]
  },

  {
    id: 36,
    especie: "Cotoneaster / Pyracantha / Buxus (grupo ornamentales pequeños)",
    descripcion: "Grupo de arbustos con bonitos frutos/hojas usados en bonsái ornamental.",
    cuidadosGenerales: "Pleno sol a semisombra, sustrato drenante.",
    ubicacion: "Exterior.",
    cuandoyComoAbonar: "Primavera con abono equilibrado.",
    fechasParaTrabajarlo: "Poda de formación en primavera; control de fructificación.",
    dificultad: "principiante",
    tecnicas: ["Poda de formación", "Alambrado para ramillas finas", "Reducción de brotes"],
    images: [
      "https://source.unsplash.com/800x600/?garden-bonsai,bonsai",
      "https://source.unsplash.com/800x600/?small-shrub-bonsai,bonsai"
    ],
    integrantesDeLaEspecie: [
      { id: 3601, especie: "Cotoneaster horizontalis", descripcion: "Ramillas finas y frutos rojizos." },
      { id: 3602, especie: "Pyracantha coccinea", descripcion: "Frutos naranjas brillantes." },
      { id: 3603, especie: "Buxus microphylla", descripcion: "Hojas muy pequeñas, ideal para poda." }
    ]
  }
];

// Export (si lo quieres usar como módulo)
export default especies;
