/* Arreglo de Objetos */
const destinosDeViaje = [
  {
    nombre: 'Cartagena',
    tipoTurismo: ["Playa", "Vida Nocturna", "Cultura", "Gastronomía"],
    actividades: ["Fuerte San Felipe", "Playas de Barú", "Islas del Rosario", "Centro Histórico"],
    costo: 374,
    clima: 'Tropical',
  },
  {
    nombre: 'Bogotá',
    tipoTurismo: ["Convenciones", "Negocios", "Compras", "Gastronomía", "Vida Nocturna"],
    actividades: ['La Candelaria', 'Monserrate', 'Zona G', 'Usaquén'],
    costo: 162,
    clima: 'Frío',
  },
  {
    nombre: 'Medellín',
    tipoTurismo: ["Compras", "Cultura", "Salud", "Convenciones", "Vida Nocturna"],
    actividades: ['Guatapé', 'El Poblado', 'Jardín Botánico', 'Pueblito Paisa'],
    costo: 220,
    clima: 'Tropical',
  },
];

/* Mostrar destinos disponibles con una función, ciclo for y template string*/

console.log(``);
console.log(`----------------------------| Destinos Disponibles |----------------------------`);
function mostrarDestinos() {
  for (let i = 0; i < destinosDeViaje.length; i++) {
    const destino = destinosDeViaje[i];
    console.log(`...........................................................................`);
    console.log(`Nombre: ${destino.nombre}`);
    console.log(`Tipo de Turísmo: ${destino.tipoTurismo}`);
    console.log(`Actividades: ${destino.actividades}`);
    console.log(`Costo: $${destino.costo}`);
    console.log(`Clima: ${destino.clima}`);
  }
}

mostrarDestinos();

/* Mostrar ciudades disponibles según presupuesto usando forEach */

function mostrarDestinosPresupuesto(presupuesto) {
  console.log(``);
  console.log(`----------------------------| Ciudades Disponibles con Presupuesto $${presupuesto} |----------------------------`);
  let ciudadesEncontradas = false;

  destinosDeViaje.forEach((destino) => {
    if (destino.costo <= presupuesto) {
      console.log(`...........................................................................`);
      console.log(`Ciudad: ${destino.nombre}`);
      console.log(`Tipo de Turísmo: ${destino.tipoTurismo}`);
      console.log(`Actividades: ${destino.actividades}`);
      console.log(`Costo: $${destino.costo}`);
      console.log(`Clima: ${destino.clima}`);
      ciudadesEncontradas = true;
    }
  });

  if (!ciudadesEncontradas) {
    console.log(`No se encontraron ciudades disponibles dentro del presupuesto.`);
  }
}

const presupuestoCliente = 162;
mostrarDestinosPresupuesto(presupuestoCliente);