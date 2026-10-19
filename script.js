// Catálogo oficial de los 14 servicios de Duke's Beauty Studio
const serviciosDukes = [
  {
    id: 1,
    nombre: "Diagnóstico Capilar Avanzado",
    categoria: "tricologia",
    precio: "Sin costo adicional",
    descripcion: "Diagnóstico capilar avanzado con capilógrafo que utiliza una microcámara de alta magnificación para examinar a profundidad la salud del cuero cabelludo y la fibra del cabello."
  },
  {
    id: 2,
    nombre: "Corte de Cabello",
    categoria: "corte-color",
    precio: "$20 en adelante",
    descripcion: "Corte profesional personalizado según tus facciones, estilo y textura natural para dar movimiento y frescura a tu cabello."
  },
  {
    id: 3,
    nombre: "Peinados para Toda Ocasión",
    categoria: "corte-color",
    precio: "Según diseño y largo del cabello",
    descripcion: "Trenzas, recogidos elegantes para eventos especiales y blower profesional con acabado duradero."
  },
  {
    id: 4,
    nombre: "Balayage",
    categoria: "corte-color",
    precio: "Según técnica y largo del cabello",
    descripcion: "Técnica francesa de coloración capilar que crea un degradado suave, natural y luminoso en tu melena."
  },
  {
    id: 5,
    nombre: "Highlights (Reflejos)",
    categoria: "corte-color",
    precio: "$150 en adelante",
    descripcion: "Reflejos más claros que el color base del cabello para aportar dimensión, contraste y luz al rostro."
  },
  {
    id: 6,
    nombre: "Color, Baño de Brillo y Canas",
    categoria: "corte-color",
    precio: "$60 en adelante (según largo)",
    descripcion: "Aplicación de color completo, baño de brillo revitalizante, cubrimiento total de canas y técnica de camuflaje."
  },
  {
    id: 7,
    nombre: "Tratamientos e Hidratación Capilar",
    categoria: "tricologia",
    precio: "$90 en adelante",
    descripcion: "Terapias intensivas de desintoxicación, Botox capilar y Detox del cuero cabelludo para devolver vitalidad y suavidad."
  },
  {
    id: 8,
    nombre: "Control Frizz (Nanoplastia y Botox)",
    categoria: "tricologia",
    precio: "$120 en adelante",
    descripcion: "Procedimientos especializados como Nanoplastia y Botox capilar para disciplinar el cabello, eliminar el frizz y dar brillo espejo."
  },
  {
    id: 9,
    nombre: "Maquillaje Profesional",
    categoria: "rostro",
    precio: "$60 en adelante",
    descripcion: "Maquillaje social y para eventos especiales con productos de alta duración que realzan tus facciones."
  },
  {
    id: 10,
    nombre: "Lifting de Pestañas",
    categoria: "rostro",
    precio: "$60",
    descripcion: "Tratamiento que eleva y curva tus pestañas naturales desde la raíz para lograr una mirada más abierta y expresiva."
  },
  {
    id: 11,
    nombre: "Laminado de Cejas y Henna",
    categoria: "rostro",
    precio: "$60",
    descripcion: "Diseño y laminado de cejas (Brow Lamination) acompañado de sombreado o tinte de cejas con henna para una definición perfecta."
  },
  {
    id: 12,
    nombre: "Colocación y Mantenimiento de Extensiones",
    categoria: "corte-color",
    precio: "Según la cantidad",
    descripcion: "Instalación profesional y mantenimiento de extensiones capilares para aportar volumen y longitud con un acabado natural."
  },
  {
    id: 13,
    nombre: "Tratamientos Faciales y Cuidado de la Piel",
    categoria: "piel-productos",
    precio: "$90 en adelante",
    descripcion: "Higiene facial profunda, hidratación y mantenimiento especializado para rejuvenecimiento, flacidez, manchas y acné."
  },
  {
    id: 14,
    nombre: "Venta de Productos (Cabello y Piel)",
    categoria: "piel-productos",
    precio: "$20 en adelante",
    descripcion: "Productos profesionales de cuidado básico y especializado para mantener la salud de tu cabello y tu piel en casa."
  }
];

// ⚠️ CAMBIA ESTE NÚMERO POR TU NÚMERO DE WHATSAPP REAL (con código de país, sin el signo +)
const TELEFONO_WHATSAPP = "+573206847599";

const servicesGrid = document.getElementById("servicesGrid");
const serviceSelect = document.getElementById("serviceSelect");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");

// Renderizar tarjetas de servicios
function mostrarServicios(filtroCategoria = "todos", textoBusqueda = "") {
  servicesGrid.innerHTML = "";

  const filtrados = serviciosDukes.filter((servicio) => {
    const coincideCategoria = filtroCategoria === "todos" || servicio.categoria === filtroCategoria;
    const coincideTexto =
      servicio.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
      servicio.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());
    return coincideCategoria && coincideTexto;
  });

  if (filtrados.length === 0) {
    servicesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center;">No se encontraron servicios con esa búsqueda.</p>`;
    return;
  }

  filtrados.forEach((servicio) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div>
        <div class="service-top">
          <span class="service-num">Servicio #${servicio.id}</span>
          <span class="service-price">${servicio.precio}</span>
        </div>
        <h3>${servicio.nombre}</h3>
        <p>${servicio.descripcion}</p>
      </div>
      <button class="service-btn" onclick="seleccionarServicio('${servicio.nombre} (${servicio.precio})')">
        Agendar este servicio →
      </button>
    `;
    servicesGrid.appendChild(card);
  });
}

// Llenar el selector del formulario de contacto
function cargarOpcionesFormulario() {
  serviceSelect.innerHTML = `<option value="">-- Selecciona un servicio --</option>`;
  serviciosDukes.forEach((s) => {
    const option = document.createElement("option");
    option.value = `${s.nombre} (${s.precio})`;
    option.textContent = `${s.id}. ${s.nombre} — ${s.precio}`;
    serviceSelect.appendChild(option);
  });
}

// Al hacer clic en "Agendar este servicio" en una tarjeta
window.seleccionarServicio = function (nombreServicio) {
  serviceSelect.value = nombreServicio;
  document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
};

// Eventos de botones de categoría
let categoriaActual = "todos";
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    categoriaActual = btn.getAttribute("data-filter");
    mostrarServicios(categoriaActual, searchInput.value);
  });
});

// Evento de barra de búsqueda
searchInput.addEventListener("input", (e) => {
  mostrarServicios(categoriaActual, e.target.value);
});

// Menú móvil
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Envío de formulario hacia WhatsApp
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("clientName").value;
  const servicio = document.getElementById("serviceSelect").value;
  const fecha = document.getElementById("preferredDate").value || "Por definir";
  const notas = document.getElementById("clientNotes").value || "Ninguna";

  const mensaje = `Hola Duke's Beauty Studio! ✨%0A%0AMi nombre es *${nombre}* y me gustaría agendar una cita:%0A• *Servicio:* ${servicio}%0A• *Fecha preferida:* ${fecha}%0A• *Detalles:* ${notas}`;
  window.open(`https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`, "_blank");
});

// Año actual en el footer e inicialización
document.getElementById("currentYear").textContent = new Date().getFullYear();
mostrarServicios();
cargarOpcionesFormulario();