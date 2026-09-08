// Número de WhatsApp
const WHATSAPP_NUMBER = "573156358655";

// Base de datos de inventario
const productos = [
  { sku: "ART-001", nombre: "Cristo crucificado de base - 65 cm", precio: 150000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-001.jpg", desc: "✨ Cristo crucificado de base\n🔹 Material: Fibra de vidrio\n📏 Medida: 70 cm | ⚖️ Peso: 750 g\n📍 Detalle: Base de apoyo" },
  { sku: "ART-002", nombre: "Cristo crucificado de pared - 90 cm", precio: 320000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-002.jpg", desc: "✨ Cristo crucificado de pared\n🔹 Material: Fibra de vidrio y Madera\n📏 Medida: 90 cm | ⚖️ Peso: 4 kg\n📍 Detalle: Cruz de madera, para colgar en pared" },
  { sku: "ART-003", nombre: "Cristo de base - 65 cm", precio: 180000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-003.jpg", desc: "✨ Cristo de base\n🔹 Material: Fibra de vidrio y Madera\n📏 Medida: 65 cm | ⚖️ Peso: 2 kg\n📍 Detalle: Acabado madera con base" },
  { sku: "ART-004", nombre: "Crucifijo en cerámica de base - 40 cm", precio: 25000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-004.jpg", desc: "✨ Crucifijo en cerámica de base\n🔹 Material: Cerámica\n📏 Medida: 40 cm | ⚖️ Peso: 2 kg\n📍 Detalle: Crucifijo tradicional con base" },
  { sku: "ART-005", nombre: "Cuadro de pared de San Judas - 40 x 30 cm", precio: 60000, cat: "Cuadros y Relieves", estado: "Disponible", url_img: "img/ART-005.jpg", desc: "✨ Cuadro de pared de San Judas\n🔹 Material: Hilo de oro / Enmarcado\n📏 Medida: 40 x 30 cm | ⚖️ Peso: 300 g\n📍 Detalle: Bordado con hilo de oro para pared" },
  { sku: "ART-006", nombre: "Guadalupana - 35 cm", precio: 140000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-006.jpg", desc: "✨ Guadalupana\n🔹 Material: Fibra de vidrio\n📏 Medida: 30 cm | ⚖️ Peso: 400 g\n📍 Detalle: Acabado fino premium" },
  { sku: "ART-007", nombre: "Guadalupana - 30 cm", precio: 28000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-007.jpg", desc: "✨ Guadalupana\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 400 g\n📍 Detalle: Pintura artesanal clásica" },
  { sku: "ART-008", nombre: "Guadalupana - 30 cm", precio: 28000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-008.jpg", desc: "✨ Guadalupana\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 350 g\n📍 Detalle: Línea clásica cerámica" },
  { sku: "ART-009", nombre: "Guadalupana - 30 cm", precio: 28000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-009.jpg", desc: "✨ Guadalupana\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 300 g\n📍 Detalle: Diseño compacto liviano" },
  { sku: "ART-010", nombre: "Guadalupana - 35 cm", precio: 140000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-010.jpg", desc: "✨ Guadalupana\n🔹 Material: Fibra de vidrio\n📏 Medida: 30 cm | ⚖️ Peso: 400 g\n📍 Detalle: Línea clásica fibra de vidrio" },
  { sku: "ART-011", nombre: "Guadalupana con Niño Jesús - 35 cm", precio: 140000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-011.jpg", desc: "✨ Guadalupana con Niño Jesús\n🔹 Material: Fibra de vidrio\n📏 Medida: 30 cm | ⚖️ Peso: 300 g\n📍 Detalle: Detalle iconográfico especial con Niño Jesús" },
  { sku: "ART-012", nombre: "Guadalupana - 15 cm", precio: 30000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-012.jpg", desc: "✨ Guadalupana\n🔹 Material: Marmolina\n📏 Medida: 20 cm | ⚖️ Peso: 120 g\n📍 Detalle: Alta densidad y fino acabado en marmolina" },
  { sku: "ART-013", nombre: "Guadalupanas infantiles - 8 cm", precio: 8000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-013.jpg", desc: "✨ Guadalupanas infantiles\n🔹 Material: Cerámica\n📏 Medida: 8 cm | ⚖️ Peso: 20 g\n📍 Detalle: Estilo tierno/infantil para recuerdos y detalles" },
  { sku: "ART-014", nombre: "Guadalupana grande - 60 cm", precio: 80000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-014.jpg", desc: "✨ Guadalupana grande\n🔹 Material: Cerámica\n📏 Medida: 60 cm | ⚖️ Peso: 6 kg\n📍 Detalle: Tamaño altar / pedestal" },
  { sku: "ART-015", nombre: "La Inmaculada Concepción (Asunción de la Virgen) - 60 cm", precio: 220000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-015.jpg", desc: "✨ La Inmaculada Concepción (Asunción de la Virgen)\n🔹 Material: Fibra de vidrio\n📏 Medida: 60 cm | ⚖️ Peso: 4 kg\n📍 Detalle: Excelente detalle escultórico y policromía" },
  { sku: "ART-016", nombre: "La Milagrosa - 20 cm", precio: 16000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-016.jpg", desc: "✨ La Milagrosa\n🔹 Material: Cerámica\n📏 Medida: 20 cm | ⚖️ Peso: 300 g\n📍 Detalle: Talla de mesa / repisa (Foto 2)" },
  { sku: "ART-017", nombre: "La Sagrada Familia - 30 cm", precio: 30000, cat: "Sagrada Familia", estado: "Disponible", url_img: "img/ART-017.jpg", desc: "✨ La Sagrada Familia\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 300 g\n📍 Detalle: Grupo escultórico familiar" },
  { sku: "ART-018", nombre: "La Sagrada Familia - 40 cm", precio: 50000, cat: "Sagrada Familia", estado: "Disponible", url_img: "img/ART-018.jpg", desc: "✨ La Sagrada Familia\n🔹 Material: Cerámica\n📏 Medida: 40 cm | ⚖️ Peso: 800 g\n📍 Detalle: Pintura detallada tradicional (Foto 2)" },
  { sku: "ART-019", nombre: "La Sagrada Familia - 40 cm", precio: 50000, cat: "Sagrada Familia", estado: "Disponible", url_img: "img/ART-019.jpg", desc: "✨ La Sagrada Familia\n🔹 Material: Cerámica\n📏 Medida: 40 cm | ⚖️ Peso: 800 g\n📍 Detalle: Pintura detallada tradicional" },
  { sku: "ART-020", nombre: "La Sagrada Familia - 40 cm", precio: 160000, cat: "Sagrada Familia", estado: "Disponible", url_img: "img/ART-020.jpg", desc: "✨ La Sagrada Familia\n🔹 Material: Fibra de vidrio\n📏 Medida: 40 cm | ⚖️ Peso: 500 g\n📍 Detalle: Fina policromía y alta durabilidad en fibra" },
  { sku: "ART-022", nombre: "La Virgen de la Vida - 30 cm", precio: 80000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-022.jpg", desc: "✨ La Virgen de la Vida\n🔹 Material: Marmolina\n📏 Medida: 30 cm | ⚖️ Peso: 300 g\n📍 Detalle: Escultura en pasta de mármol pulida" },
  { sku: "ART-023", nombre: "María Auxiliadora - 30 cm", precio: 20000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-023.jpg", desc: "✨ María Auxiliadora\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 400 g\n📍 Detalle: Corona y cetro tradicional (Foto 3)" },
  { sku: "ART-024", nombre: "María Auxiliadora - 30 cm", precio: 20000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-024.jpg", desc: "✨ María Auxiliadora\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 400 g\n📍 Detalle: Pintura artesanal clásica" },
  { sku: "ART-025", nombre: "María Auxiliadora - 60 cm", precio: 70000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-025.jpg", desc: "✨ María Auxiliadora\n🔹 Material: Cerámica\n📏 Medida: 60 cm | ⚖️ Peso: 2 kg\n📍 Detalle: Gran tamaño de altar (Foto 2)" },
  { sku: "ART-026", nombre: "María Auxiliadora - 60 cm", precio: 120000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-026.jpg", desc: "✨ María Auxiliadora\n🔹 Material: Fibra de vidrio\n📏 Medida: 60 cm | ⚖️ Peso: 800 g\n📍 Detalle: Gran ligereza y resistencia en fibra" },
  { sku: "ART-027", nombre: "Milagrosa - 30 cm", precio: 28000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-027.jpg", desc: "✨ Milagrosa\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 600 g\n📍 Detalle: Rayos de gracia y pose clásica" },
  { sku: "ART-028", nombre: "Niño Jesús - 20 cm", precio: 18000, cat: "Niño Jesús", estado: "Disponible", url_img: "img/ART-028.jpg", desc: "✨ Niño Jesús\n🔹 Material: Cerámica\n📏 Medida: 20 cm | ⚖️ Peso: 240 g\n📍 Detalle: Pesebre o cuna completo" },
  { sku: "ART-029", nombre: "Niño Jesús con ojos de cristal - 40 cm", precio: 140000, cat: "Niño Jesús", estado: "Disponible", url_img: "img/ART-029.jpg", desc: "✨ Niño Jesús con ojos de cristal\n🔹 Material: Fibra de vidrio\n📏 Medida: 40 cm | ⚖️ Peso: 400 g\n📍 Detalle: Ojos de cristal hiperrealistas de alta calidad" },
  { sku: "ART-031", nombre: "Sagrada Familia - 60 cm", precio: 80000, cat: "Sagrada Familia", estado: "Disponible", url_img: "img/ART-031.jpg", desc: "✨ Sagrada Familia\n🔹 Material: Cerámica\n📏 Medida: 60 cm | ⚖️ Peso: 5 kg\n📍 Detalle: Gran formato para altar y templo" },
  { sku: "ART-032", nombre: "Sagrada Familia de pared - 15 cm", precio: 14000, cat: "Sagrada Familia", estado: "Disponible", url_img: "img/ART-032.jpg", desc: "✨ Sagrada Familia de pared\n🔹 Material: Cerámica\n📏 Medida: 15 cm | ⚖️ Peso: 100 g\n📍 Detalle: Relieve para colgar en puerta o pared" },
  { sku: "ART-033", nombre: "Sagrado Corazón de Jesús - 40 cm", precio: 220000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-033.jpg", desc: "✨ Sagrado Corazón de Jesús\n🔹 Material: Fibra de vidrio\n📏 Medida: 40 cm | ⚖️ Peso: 2 kg\n📍 Detalle: Detalles dorados y expresión solemne" },
  { sku: "ART-034", nombre: "Sagrado Corazón de María de pared - 15 cm", precio: 14000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-034.jpg", desc: "✨ Sagrado Corazón de María de pared\n🔹 Material: Cerámica\n📏 Medida: 15 cm | ⚖️ Peso: 100 g\n📍 Detalle: Medallón / relieve para colgar en pared" },
  { sku: "ART-035", nombre: "San Gregorio Hernández - 30 cm", precio: 20000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-035.jpg", desc: "✨ San Gregorio Hernández\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 400 g\n📍 Detalle: Traje médico característico" },
  { sku: "ART-036", nombre: "San José - 30 cm", precio: 30000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-036.jpg", desc: "✨ San José\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 300 g\n📍 Detalle: Lirio y niño en brazos, policromía fina" },
  { sku: "ART-037", nombre: "San José - 30 cm", precio: 14000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-037.jpg", desc: "✨ San José\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 300 g\n📍 Detalle: Línea económica tradicional" },
  { sku: "ART-038", nombre: "San José - 60 cm", precio: 70000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-038.jpg", desc: "✨ San José\n🔹 Material: Cerámica\n📏 Medida: 60 cm | ⚖️ Peso: 2 kg\n📍 Detalle: Gran formato de presencia devocional" },
  { sku: "ART-039", nombre: "San José dormido - 30 cm", precio: 90000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-039.jpg", desc: "✨ San José dormido\n🔹 Material: Fibra de vidrio\n📏 Medida: 30 cm | ⚖️ Peso: 250 g\n📍 Detalle: Devoción papal, excelente acabado" },
  { sku: "ART-040", nombre: "San José dormido con cojín - 40 cm", precio: 160000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-040.jpg", desc: "✨ San José dormido con cojín\n🔹 Material: Fibra de vidrio\n📏 Medida: 40 cm | ⚖️ Peso: 250 g\n📍 Detalle: Incluye cojín acolchado decorativo" },
  { sku: "ART-041", nombre: "San José dormido en la roca - 40 cm", precio: 30000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-041.jpg", desc: "✨ San José dormido en la roca\n🔹 Material: Cerámica\n📏 Medida: 40 cm | ⚖️ Peso: 600 g\n📍 Detalle: Base rústica estilo roca natural" },
  { sku: "ART-042", nombre: "San José dormido - 15 cm", precio: 14000, cat: "Santos y Beatos", estado: "Agotado", url_img: "img/ART-042.jpg", desc: "✨ San José dormido\n🔹 Material: Cerámica\n📏 Medida: 15 cm | ⚖️ Peso: 100 g\n📍 Detalle: Tamaño pequeño para mesa de noche o regalo" },
  { sku: "ART-043", nombre: "San José dormido - 20 cm", precio: 16000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-043.jpg", desc: "✨ San José dormido\n🔹 Material: Cerámica\n📏 Medida: 20 cm | ⚖️ Peso: 150 g\n📍 Detalle: Tamaño mediano para oratorio personal" },
  { sku: "ART-044", nombre: "San Judas Tadeo - 40 cm", precio: 120000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-044.jpg", desc: "✨ San Judas Tadeo\n🔹 Material: Fibra de vidrio\n📏 Medida: 40 cm | ⚖️ Peso: 400 g\n📍 Detalle: Patrono de las causas difíciles, alta calidad" },
  { sku: "ART-045", nombre: "Santa Marta - 20 cm", precio: 40000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-045.jpg", desc: "✨ Santa Marta\n🔹 Material: Marmolina\n📏 Medida: 20 cm | ⚖️ Peso: 140 g\n📍 Detalle: Con dragón y acetre, detalle refinado" },
  { sku: "ART-046", nombre: "Señor Caído de Girardota - 15 cm", precio: 15000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-046.jpg", desc: "✨ Señor Caído de Girardota\n🔹 Material: Cerámica\n📏 Medida: 15 cm | ⚖️ Peso: 150 g\n📍 Detalle: Devoción tradicional de Girardota" },
  { sku: "ART-047", nombre: "Señor Caído de Monserrate - 15 cm", precio: 15000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-047.jpg", desc: "✨ Señor Caído de Monserrate\n🔹 Material: Cerámica\n📏 Medida: 15 cm | ⚖️ Peso: 150 g\n📍 Detalle: Santuario de Monserrate Bogotá" },
  { sku: "ART-048", nombre: "Señor de la Misericordia - 30 cm", precio: 70000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-048.jpg", desc: "✨ Señor de la Misericordia\n🔹 Material: Marmolina\n📏 Medida: 30 cm | ⚖️ Peso: 300 g\n📍 Detalle: Rayos rojo y pálido finamente pintados" },
  { sku: "ART-049", nombre: "Señor de los Milagros con base - 40 cm", precio: 30000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-049.jpg", desc: "✨ Señor de los Milagros con base\n🔹 Material: Cerámica\n📏 Medida: 40 cm | ⚖️ Peso: 2 kg\n📍 Detalle: Devoción del Señor de los Milagros de Buga" },
  { sku: "ART-050", nombre: "Vela artesanal Guadalupana - 10 cm", precio: 14000, cat: "Velas y Cuadros", estado: "Disponible", url_img: "img/ART-050.jpg", desc: "✨ Vela artesanal Guadalupana\n🔹 Material: Cera de vela\n📏 Medida: 10 cm | ⚖️ Peso: 150 g\n📍 Detalle: Vela votiva decorativa con imagen guadalupana" },
  { sku: "ART-051", nombre: "Virgen de Fátima - 1 Metro", precio: 100000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-051.jpg", desc: "✨ Virgen de Fátima\n🔹 Material: Cerámica\n📏 Medida: 60 cm | ⚖️ Peso: 3 Kg\n📍 Detalle: Tres pastorcitos en base y detalles dorados" },
  { sku: "ART-052", nombre: "Virgen de Fátima - 40 cm", precio: 14000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-052.jpg", desc: "✨ Virgen de Fátima\n🔹 Material: Cerámica\n📏 Medida: 20 cm | ⚖️ Peso: 450 g\n📍 Detalle: Gran formato de altar y capilla" },
  { sku: "ART-053", nombre: "Virgen de Guadalupe monumental - 100 cm (1 m)", precio: 550000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-053.jpg", desc: "✨ Virgen de Guadalupe monumental\n🔹 Material: Fibra de vidrio\n📏 Medida: 100 cm (1 m) | ⚖️ Peso: 4 kg\n📍 Detalle: Estatua grande de alta resistencia intemperie/interior" },
  { sku: "ART-054", nombre: "Virgen de los Dolores monumental - 100 cm (1 m)", precio: 600000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-054.jpg", desc: "✨ Virgen de los Dolores monumental\n🔹 Material: Fibra de vidrio\n📏 Medida: 100 cm (1 m) | ⚖️ Peso: 5 kg\n📍 Detalle: Obra de gran formato con espada y manto solemne" },
  { sku: "ART-055", nombre: "Virgen de Lourdes - 30 cm", precio: 80000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-055.jpg", desc: "✨ Virgen de Lourdes\n🔹 Material: Fibra de vidrio\n📏 Medida: 30 cm | ⚖️ Peso: 200 g\n📍 Detalle: Fina túnica blanca con lazo azul" },
  { sku: "ART-056", nombre: "Virgen del Carmen - 30 cm", precio: 30000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-056.jpg", desc: "✨ Virgen del Carmen\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 400 g\n📍 Detalle: Patrona de los conductores con escapulario" },
  { sku: "ART-058", nombre: "Virgen del Carmen - 60 cm", precio: 70000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-058.jpg", desc: "✨ Virgen del Carmen\n🔹 Material: Cerámica\n📏 Medida: 60 cm | ⚖️ Peso: 3 kg\n📍 Detalle: Ideal para altares o negocios" },
  { sku: "ART-059", nombre: "Virgen del Carmen - 30 cm", precio: 28000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-059.jpg", desc: "✨ Virgen del Carmen\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 500 g\n📍 Detalle: Línea clásica en cerámica" },
  { sku: "ART-060", nombre: "Virgen del Carmen - 40 cm", precio: 120000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-060.jpg", desc: "✨ Virgen del Carmen\n🔹 Material: Fibra de vidrio\n📏 Medida: 40 cm | ⚖️ Peso: 300 g\n📍 Detalle: Pintura automotriz de alta duración" },
  { sku: "ART-061", nombre: "Virgen del Carmen - 60 cm", precio: 220000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-061.jpg", desc: "✨ Virgen del Carmen\n🔹 Material: Fibra de vidrio\n📏 Medida: 60 cm | ⚖️ Peso: 3 kg\n📍 Detalle: Estatua majestuosa de alta resistencia" },
  { sku: "ART-062", nombre: "Virgen Guadalupana - 30 cm", precio: 28000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-062.jpg", desc: "✨ Virgen Guadalupana\n🔹 Material: Cerámica\n📏 Medida: 30 cm | ⚖️ Peso: 400 g\n📍 Detalle: Pintura artesanal viva" },
  { sku: "ART-063", nombre: "Virgen Milagrosa - 40 cm", precio: 30000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-063.jpg", desc: "✨ Virgen Milagrosa\n🔹 Material: Cerámica\n📏 Medida: 40 cm | ⚖️ Peso: 1 kg\n📍 Detalle: Excelente relación calidad-precio" },
  { sku: "ART-064", nombre: "Virgen Milagrosa - 60 cm", precio: 220000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-064.jpg", desc: "✨ Virgen Milagrosa\n🔹 Material: Fibra de vidrio\n📏 Medida: 60 cm | ⚖️ Peso: 3 kg\n📍 Detalle: Acabado celestial en fibra de alta durabilidad" },
  { sku: "ART-065", nombre: "Cuadro de pared Sagrado Corazón de Jesús - 60 x 30 cm", precio: 80000, cat: "Cuadros y Relieves", estado: "Agotado", url_img: "img/ART-065.jpg", desc: "✨ Cuadro de pared Sagrado Corazón de Jesús\n🔹 Material: Hilo de oro / Enmarcado\n📏 Medida: 60 x 30 cm | ⚖️ Peso: 550 g\n📍 Detalle: Bordado con hilo de oro para pared" },
  { sku: "ART-066", nombre: "Virgen de la Dulce Espera (dorada)", precio: 12000, cat: "Advocaciones Marianas", estado: "Agotado", url_img: "img/ART-066.jpg", desc: "✨ Virgen de la Dulce Espera (dorada)\n◇ Material: Cerámica\n📏 Medida: 20 cm | ⚖️ Peso: 200 g\n🏷️ Código: ART-066 | 💰 Valor: $12.000" },
  { sku: "ART-067", nombre: "Virgen de la Dulce Espera (manto azul)", precio: 12000, cat: "Advocaciones Marianas", estado: "Agotado", url_img: "img/ART-067.jpg", desc: "✨ Virgen de la Dulce Espera (manto azul)\n◇ Material: Cerámica\n📏 Medida: 20 cm | ⚖️ Peso: 200 g\n🏷️ Código: ART-067 | 💰 Valor: $12.000" },
  { sku: "ART-068", nombre: "Virgen de la Dulce Espera (manto celeste)", precio: 12000, cat: "Advocaciones Marianas", estado: "Agotado", url_img: "img/ART-068.jpg", desc: "✨ Virgen de la Dulce Espera (manto celeste)\n◇ Material: Cerámica\n📏 Medida: 20 cm | ⚖️ Peso: 200 g\n🏷️ Código: ART-068 | 💰 Valor: $12.000" },
  { sku: "ART-069", nombre: "Virgen de Guadalupe", precio: 150000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-069.jpg", desc: "✨ Virgen de Guadalupe\n◇ Material: Cerámica\n📏 Medida: 1 m | ⚖️ Peso: 15 kg\n🏷️ Código: ART-069 | 💰 Valor: $150.000" },
  { sku: "ART-070", nombre: "San Judas Tadeo", precio: 10000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-070.jpg", desc: "✨ San Judas Tadeo\n◇ Material: Plástico\n📏 Medida: 10 cm | ⚖️ Peso: 50 g\n🏷️ Código: ART-070 | 💰 Valor: $10.000" },
  { sku: "ART-071", nombre: "Ángel de la Guarda / San Rafael", precio: 4000, cat: "Ángeles y Arcángeles", estado: "Disponible", url_img: "img/ART-071.jpg", desc: "✨ Ángel de la Guarda / San Rafael\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-071 | 💰 Valor: $4.000" },
  { sku: "ART-072", nombre: "San Antonio de Padua", precio: 4000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-072.jpg", desc: "✨ San Antonio de Padua\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-072 | 💰 Valor: $4.000" },
  { sku: "ART-073", nombre: "San Miguel Arcángel", precio: 4000, cat: "Ángeles y Arcángeles", estado: "Disponible", url_img: "img/ART-073.jpg", desc: "✨ San Miguel Arcángel\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-073 | 💰 Valor: $4.000" },
  { sku: "ART-074", nombre: "Sagrado Corazón de Jesús", precio: 4000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-074.jpg", desc: "✨ Sagrado Corazón de Jesús\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-074 | 💰 Valor: $4.000" },
  { sku: "ART-075", nombre: "Divino Niño Jesús", precio: 4000, cat: "Niño Jesús", estado: "Disponible", url_img: "img/ART-075.jpg", desc: "✨ Divino Niño Jesús\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-075 | 💰 Valor: $4.000" },
  { sku: "ART-076", nombre: "Ángel Custodio", precio: 4000, cat: "Ángeles y Arcángeles", estado: "Disponible", url_img: "img/ART-076.jpg", desc: "✨ Ángel Custodio\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-076 | 💰 Valor: $4.000" },
  { sku: "ART-077", nombre: "Virgen del Carmen", precio: 4000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-077.jpg", desc: "✨ Virgen del Carmen\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-077 | 💰 Valor: $4.000" },
  { sku: "ART-078", nombre: "Dr. José Gregorio Hernández", precio: 4000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-078.jpg", desc: "✨ Dr. José Gregorio Hernández\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-078 | 💰 Valor: $4.000" },
  { sku: "ART-080", nombre: "Velón pequeño devocional", precio: 2000, cat: "Velas y Velones", estado: "Disponible", url_img: "img/ART-080.jpg", desc: "✨ Velón pequeño devocional\n◇ Material: Cera / Vaso\n📏 Medida: 5 cm | ⚖️ Peso: N/D\n🏷️ Código: ART-080 | 💰 Valor: $2.000" },
  { sku: "ART-081", nombre: "Souvenir Virgen del Carmen con rosa para pintar", precio: 2000, cat: "Recuerdos y Souvenirs", estado: "Disponible", url_img: "img/ART-081.jpg", desc: "✨ Souvenir Virgen del Carmen con rosa para pintar\n◇ Material: Madera y Cerámica\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-081 | 💰 Valor: $2.000" },
  { sku: "ART-082", nombre: "Santísima Trinidad", precio: 60000, cat: "Sagrada Familia y Trinidad", estado: "Disponible", url_img: "img/ART-082.jpg", desc: "✨ Santísima Trinidad\n◇ Material: Cerámica\n📏 Medida: 60 cm | ⚖️ Peso: 8 kg\n🏷️ Código: ART-082 | 💰 Valor: $60.000" },
  { sku: "ART-083", nombre: "Virgen de la Candelaria / Coromoto", precio: 4000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-083.jpg", desc: "✨ Virgen de la Candelaria / Coromoto\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-083 | 💰 Valor: $4.000" },
  { sku: "ART-084", nombre: "Virgen Milagrosa / Inmaculada", precio: 4000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-084.jpg", desc: "✨ Virgen Milagrosa / Inmaculada\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-084 | 💰 Valor: $4.000" },
  { sku: "ART-085", nombre: "San Martín de Porres", precio: 4000, cat: "Santos y Beatos", estado: "Disponible", url_img: "img/ART-085.jpg", desc: "✨ San Martín de Porres\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-085 | 💰 Valor: $4.000" },
  { sku: "ART-086", nombre: "Virgen de Guadalupe pequeña", precio: 4000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-086.jpg", desc: "✨ Virgen de Guadalupe pequeña\n◇ Material: Plástico\n📏 Medida: 6 cm | ⚖️ Peso: 20 g\n🏷️ Código: ART-086 | 💰 Valor: $4.000" },
  { sku: "ART-087", nombre: "Coronilla de San José", precio: 9000, cat: "Rosarios y Camándulas", estado: "Disponible", url_img: "img/ART-087.jpg", desc: "✨ Rosario de San José\n◇ Material: Cuentas / Cordón\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-087 | 💰 Valor: $9.000" },
  { sku: "ART-088", nombre: "María Auxiliadora", precio: 160000, cat: "Advocaciones Marianas", estado: "Disponible", url_img: "img/ART-088.jpg", desc: "✨ María Auxiliadora\n◇ Material: Fibra de vidrio\n📏 Medida: 60 cm | ⚖️ Peso: 2 kg\n🏷️ Código: ART-088 | 💰 Valor: $160.000" },
  { sku: "ART-089", nombre: "Llavero medalla de San Benito", precio: 8000, cat: "Llaveros y Accesorios", estado: "Disponible", url_img: "img/ART-089.jpg", desc: "✨ Llavero medalla de San Benito\n◇ Material: Metálico\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-089 | 💰 Valor: $8.000" },
  { sku: "ART-090", nombre: "Escapulario tradicional en tela", precio: 3000, cat: "Escapularios", estado: "Disponible", url_img: "img/ART-090.jpg", desc: "✨ Escapulario tradicional en tela\n◇ Material: Tela bordada\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-090 | 💰 Valor: $3.000" },
  { sku: "ART-091", nombre: "Escapulario de la Virgen del Carmen", precio: 1000, cat: "Escapularios", estado: "Disponible", url_img: "img/ART-091.jpg", desc: "✨ Escapulario de la Virgen del Carmen\n◇ Material: Cordón / Medalla\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-091 | 💰 Valor: $1.000" },
  { sku: "ART-092", nombre: "Cuadro de San Cayetano en madera", precio: 10000, cat: "Cuadros y Relieves", estado: "Disponible", url_img: "img/ART-092.jpg", desc: "✨ Cuadro de San Cayetano en madera\n◇ Material: Madera enmarcada\n📏 Medida: 20 x 13 cm | ⚖️ Peso: 100 g\n🏷️ Código: ART-092 | 💰 Valor: $10.000" },
  { sku: "ART-093", nombre: "Cristo de San Benito metálico con estuche", precio: 50000, cat: "Crucifijos y Cristos", estado: "Disponible", url_img: "img/ART-093.jpg", desc: "✨ Cristo de San Benito metálico en estuche\n◇ Material: Metálico\n📏 Medida: 20 cm | ⚖️ Peso: 150 g\n🏷️ Código: ART-093 | 💰 Valor: $50.000" },
  { sku: "ART-094", nombre: "Camándula en madera", precio: 2000, cat: "Rosarios y Camándulas", estado: "Disponible", url_img: "img/ART-094.jpg", desc: "✨ Camándula en madera\n◇ Material: Madera\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-094 | 💰 Valor: $2.000" },
  { sku: "ART-095", nombre: "Camándula en bolas de acero", precio: 18000, cat: "Rosarios y Camándulas", estado: "Disponible", url_img: "img/ART-095.jpg", desc: "✨ Camándula en bolas de acero\n◇ Material: Acero\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-095 | 💰 Valor: $18.000" },
  { sku: "ART-096", nombre: "Camándula en acero plateado", precio: 18000, cat: "Rosarios y Camándulas", estado: "Disponible", url_img: "img/ART-096.jpg", desc: "✨ Camándula en acero plateado\n◇ Material: Acero plateado\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-096 | 💰 Valor: $18.000" },
  { sku: "ART-097", nombre: "Camándula en acero dorado", precio: 18000, cat: "Rosarios y Camándulas", estado: "Disponible", url_img: "img/ART-097.jpg", desc: "✨ Camándula en acero dorado\n◇ Material: Acero dorado\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-097 | 💰 Valor: $18.000" },
  { sku: "ART-098", nombre: "Camándula artesanal con estuche", precio: 3000, cat: "Rosarios y Camándulas", estado: "Disponible", url_img: "img/ART-098.jpg", desc: "✨ Camándula artesanal\n◇ Material: Artesanal\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-098 | 💰 Valor: $3.000" },
  { sku: "ART-099", nombre: "Camándula en piedras perladas con cajita", precio: 12000, cat: "Rosarios y Camándulas", estado: "Disponible", url_img: "img/ART-099.jpg", desc: "✨ Camándula en piedras perladas con cajita\n◇ Material: Piedras perladas\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-099 | 💰 Valor: $12.000" },
  { sku: "ART-100", nombre: "Cadena con dije Virgen de Guadalupe en caja", precio: 12000, cat: "Cadenas y Dijes", estado: "Disponible", url_img: "img/ART-100.jpg", desc: "✨ Cadena con dije Virgen de Guadalupe en caja\n◇ Material: Fantasía fina\n📏 Medida: N/D | ⚖️ Peso: N/D\n🏷️ Código: ART-100 | 💰 Valor: $12.000" },
  { sku: "ART-101", nombre: "Placa de pared 'Dios bendice este negocio'", precio: 14000, cat: "Cuadros y Relieves", estado: "Disponible", url_img: "img/ART-101.jpg", desc: "✨ Placa de pared 'Dios bendice este negocio'\n◇ Material: Cerámica esmaltada\n📏 Medida: 20 x 20 cm | ⚖️ Peso: 300 g\n🏷️ Código: ART-101 | 💰 Valor: $14.000" },
  { sku: "ART-102", nombre: "Figura metálica Virgen con Niño / San Antonio", precio: 6000, cat: "Imágenes Pequeñas", estado: "Disponible", url_img: "img/ART-102.jpg", desc: "✨ Figura metálica Virgen con Niño / San Antonio\n◇ Material: Metálica\n📏 Medida: 6 cm | ⚖️ Peso: 40 g\n🏷️ Código: ART-102 | 💰 Valor: $6.000" },
  { sku: "ART-103", nombre: "Figura metálica Virgen Milagrosa", precio: 6000, cat: "Imágenes Pequeñas", estado: "Disponible", url_img: "img/ART-103.jpg", desc: "✨ Figura metálica Virgen Milagrosa\n◇ Material: Metálica\n📏 Medida: 6 cm | ⚖️ Peso: 40 g\n🏷️ Código: ART-103 | 💰 Valor: $6.000" },
  { sku: "ART-104", nombre: "Busto metálico Sagrado Corazón de Jesús", precio: 6000, cat: "Imágenes Pequeñas", estado: "Disponible", url_img: "img/ART-104.jpg", desc: "✨ Busto metálico Sagrado Corazón de Jesús\n◇ Material: Metálica envejecida\n📏 Medida: 6 cm | ⚖️ Peso: 40 g\n🏷️ Código: ART-104 | 💰 Valor: $6.000" },
  { sku: "ART-105", nombre: "Figura metálica Virgen con Niño / San José", precio: 6000, cat: "Imágenes Pequeñas", estado: "Disponible", url_img: "img/ART-105.jpg", desc: "✨ Figura metálica Virgen con Niño / San José\n◇ Material: Metálica envejecida\n📏 Medida: 6 cm | ⚖️ Peso: 40 g\n🏷️ Código: ART-105 | 💰 Valor: $6.000" },
  { sku: "ART-106", nombre: "Figura metálica María Auxiliadora", precio: 6000, cat: "Imágenes Pequeñas", estado: "Disponible", url_img: "img/ART-106.jpg", desc: "✨ Figura metálica María Auxiliadora\n◇ Material: Metálica envejecida\n📏 Medida: 6 cm | ⚖️ Peso: 40 g\n🏷️ Código: ART-106 | 💰 Valor: $6.000" },
  { sku: "ART-107", nombre: "Figura metálica Virgen con Niño peana cónica", precio: 6000, cat: "Imágenes Pequeñas", estado: "Disponible", url_img: "img/ART-107.jpg", desc: "✨ Figura metálica Virgen con Niño peana cónica\n◇ Material: Metálica\n📏 Medida: 6 cm | ⚖️ Peso: 40 g\n🏷️ Código: ART-107 | 💰 Valor: $6.000" },
  { sku: "ART-108", nombre: "Pesebre envejecido de 11 piezas", precio: 460000, cat: "Pesebres y Nacimientos", estado: "Disponible", url_img: "img/ART-108.jpg", desc: "✨ Pesebre envejecido de 11 piezas\n◇ Material: Fibra de vidrio\n📏 Medida: 30 cm | ⚖️ Peso: N/D\n🏷️ Código: ART-108 | 💰 Valor: $460.000" }
];

// Elementos DOM
const productGrid = document.getElementById('productGrid');
const categoryFilters = document.getElementById('categoryFilters');
const mobileCategorySelect = document.getElementById('mobileCategorySelect');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');
const productCounter = document.getElementById('productCounter');

const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalImgContainer = document.getElementById('modalImgContainer');
const modalImg = document.getElementById('modalImg');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalSku = document.getElementById('modalSku');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalWhatsapp = document.getElementById('modalWhatsapp');

// Visor Lightbox
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxBackdrop = document.querySelector('.lightbox-backdrop');

let currentCategory = "Todos";
let currentSearchTerm = "";
let currentActiveProduct = null;

// Formato de moneda colombiana
const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
    }).format(price || 0);
};

// Generador de mensaje comercial
const generateWhatsAppLink = (product) => {
    const message = `¡Hola! Me comunico por la liquidación de bodega de El Almacén de la Fe:
• Ref: ${product.sku || 'N/A'}
• Producto: ${product.nombre || ''}
• Precio: ${formatPrice(product.precio)}

Quisiera apartarlo antes de que se agote. ¿Aún lo tienen disponible?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Extrae características breves para las tarjetas
const extractChips = (descText) => {
    if (!descText) return '';
    const lines = descText.split('\n');
    let chipsHtml = '';
    lines.forEach(line => {
        if (line.includes('Material:') || line.includes('Medida:')) {
            const clean = line.replace(/^[✨🔹◇📏\s]+/, '').trim();
            chipsHtml += `<span class="chip">${clean}</span>`;
        }
    });
    return chipsHtml;
};

// Funciones Visor Pantalla Completa
const openLightbox = (imgSrc, titleText) => {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = titleText || 'Imagen en tamaño completo';
    if (lightboxCaption) lightboxCaption.textContent = titleText || '';
    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
};

const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
};

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

// Abrir detalle en el Modal
const openModal = (product) => {
    currentActiveProduct = product;
    const isAgotado = product.estado === "Agotado";
    modalImg.src = product.url_img || '';
    modalImg.alt = product.nombre || '';
    modalCategory.textContent = product.cat || '';
    modalTitle.textContent = product.nombre || '';
    modalSku.textContent = product.sku ? `Referencia: ${product.sku}` : '';
    modalDesc.textContent = product.desc || '';
    modalPrice.textContent = formatPrice(product.precio);
    
    const modalBadge = productModal.querySelector('.stock-pill-modal');
    if (modalBadge) {
        modalBadge.textContent = isAgotado ? "Agotado" : "Precio de Liquidación";
        modalBadge.style.background = isAgotado ? "#b02a37" : "#C2410C";
    }

    if (isAgotado) {
        modalWhatsapp.href = "#";
        modalWhatsapp.textContent = "Pieza Agotada";
        modalWhatsapp.style.background = "#8395A7";
        modalWhatsapp.style.pointerEvents = "none";
    } else {
        modalWhatsapp.href = generateWhatsAppLink(product);
        modalWhatsapp.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.075-2.227-.563-1.832-.763-3.003-2.628-3.095-2.75-.091-.122-.744-.991-.744-1.89s.469-1.341.636-1.527c.166-.186.363-.232.485-.232.121 0 .243.002.348.007.113.006.265-.043.414.316.152.368.52 1.267.566 1.359.045.093.076.201.015.323-.061.121-.092.197-.183.303-.09.106-.19.237-.272.318-.09.09-.184.188-.079.369.106.182.472.78 1.013 1.261.696.621 1.282.813 1.464.904.182.09.289.076.395-.045.107-.122.455-.53.576-.713.121-.182.243-.151.409-.09.167.061 1.061.5 1.243.591.181.09.303.136.348.212.045.076.045.438-.099.843zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.957-1.3c1.455.794 3.118 1.3 4.962 1.3 5.486 0 9.944-4.437 10-9.923C22 6.541 17.514 2 12 2z"/></svg>
            Pedir y Apartar por WhatsApp
        `;
        modalWhatsapp.style.background = "";
        modalWhatsapp.style.pointerEvents = "";
    }
    
    productModal.classList.add('open');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

// Clic para abrir el visor ampliado desde el modal
if (modalImgContainer) {
    modalImgContainer.addEventListener('click', () => {
        if (currentActiveProduct && currentActiveProduct.url_img) {
            openLightbox(currentActiveProduct.url_img, currentActiveProduct.nombre);
        }
    });
}

// Cerrar Modal
const closeModal = () => {
    productModal.classList.remove('open');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

if (modalClose) modalClose.addEventListener('click', closeModal);
const backdrop = productModal ? productModal.querySelector('.modal-backdrop') : null;
if (backdrop) backdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (lightboxModal && lightboxModal.classList.contains('open')) {
            closeLightbox();
        } else if (productModal && productModal.classList.contains('open')) {
            closeModal();
        }
    }
});

// Renderizador dinámico de categorías
const renderFilters = () => {
    if (!categoryFilters || !mobileCategorySelect) return;

    const categorias = ["Todos", ...new Set(productos.map(p => p.cat).filter(Boolean))];
    
    categoryFilters.innerHTML = categorias.map(cat => `
        <button class="pill ${cat === currentCategory ? 'active' : ''}" data-category="${cat}">${cat}</button>
    `).join('');

    mobileCategorySelect.innerHTML = categorias.map(cat => `
        <option value="${cat}" ${cat === currentCategory ? 'selected' : ''}>Categoría: ${cat}</option>
    `).join('');

    document.querySelectorAll('.pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-category');
            mobileCategorySelect.value = currentCategory;
            filterAndRender();
        });
    });

    mobileCategorySelect.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        document.querySelectorAll('.pill').forEach(btn => {
            if (btn.getAttribute('data-category') === currentCategory) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        filterAndRender();
    });
};

// Renderizar tarjetas en catálogo
const renderProducts = (productsToRender) => {
    if (!productGrid || !productCounter) return;

    if (productsToRender.length === 0) {
        productGrid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        productCounter.textContent = "0 piezas encontradas";
        return;
    }
    if (emptyState) emptyState.style.display = 'none';
    productCounter.textContent = `${productsToRender.length} piezas en liquidación`;

    productGrid.innerHTML = productsToRender.map(p => {
        const isAgotado = p.estado === "Agotado";
        return `
        <article class="card ${isAgotado ? 'card-agotada' : ''}" data-sku="${p.sku || ''}" style="${isAgotado ? 'opacity: 0.65;' : ''}">
            <div class="card-img-wrapper">
                <span class="badge-scarcity" style="${isAgotado ? 'background: #b02a37;' : ''}">
                    ${isAgotado ? '✕ Agotado' : '<span class="pulse-dot"></span> Liquidación'}
                </span>
                
                <img src="${p.url_img}" alt="${p.nombre || ''}" class="product-img" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/300?text=Arte+Sacro'">
                
                <span class="card-quick-view">🔍 Ver detalles y foto</span>
            </div>
            <div class="card-body">
                <span class="card-category">${p.cat || 'General'}</span>
                <h3 class="card-title serif">${p.nombre || 'Sin título'}</h3>
                <span class="card-sku">${p.sku ? `SKU: ${p.sku}` : 'Pieza única'}</span>
                
                <div class="card-chips">
                    ${extractChips(p.desc)}
                </div>

                <div class="card-price-row">
                    <div>
                        <div class="card-price" style="${isAgotado ? 'text-decoration: line-through; color: #8395A7;' : ''}">
                            ${formatPrice(p.precio)}
                        </div>
                    </div>
                    <span class="card-unit">${isAgotado ? 'No disponible' : 'Precio Fábrica'}</span>
                </div>
                
                ${isAgotado 
                    ? `<button class="btn-whatsapp" style="background:#8395A7; cursor:not-allowed;" disabled onclick="event.stopPropagation()">Agotado</button>`
                    : `<a href="${generateWhatsAppLink(p)}" target="_blank" class="btn-whatsapp" onclick="event.stopPropagation()">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.075-2.227-.563-1.832-.763-3.003-2.628-3.095-2.75-.091-.122-.744-.991-.744-1.89s.469-1.341.636-1.527c.166-.186.363-.232.485-.232.121 0 .243.002.348.007.113.006.265-.043.414.316.152.368.52 1.267.566 1.359.045.093.076.201.015.323-.061.121-.092.197-.183.303-.09.106-.19.237-.272.318-.09.09-.184.188-.079.369.106.182.472.78 1.013 1.261.696.621 1.282.813 1.464.904.182.09.289.076.395-.045.107-.122.455-.53.576-.713.121-.182.243-.151.409-.09.167.061 1.061.5 1.243.591.181.09.303.136.348.212.045.076.045.438-.099.843zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.957-1.3c1.455.794 3.118 1.3 4.962 1.3 5.486 0 9.944-4.437 10-9.923C22 6.541 17.514 2 12 2z"/></svg>
                        Apartar Pieza
                    </a>`
                }
            </div>
        </article>`;
    }).join('');

    // Listener para abrir modal
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const sku = card.getAttribute('data-sku');
            const selectedProduct = productos.find(p => p.sku === sku);
            if (selectedProduct) openModal(selectedProduct);
        });
    });
};

// Lógica de filtrado seguro
const filterAndRender = () => {
    const term = (currentSearchTerm || "").toLowerCase();
    const filtered = productos.filter(p => {
        const cat = p.cat || "";
        const nombre = p.nombre || "";
        const sku = p.sku || "";
        const desc = p.desc || "";

        const matchCategory = currentCategory === "Todos" || cat === currentCategory;
        const matchSearch = nombre.toLowerCase().includes(term) || 
                            sku.toLowerCase().includes(term) || 
                            desc.toLowerCase().includes(term);

        return matchCategory && matchSearch;
    });

    renderProducts(filtered);
};

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        filterAndRender();
    });
}

// Inicialización garantizada
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    filterAndRender();
});