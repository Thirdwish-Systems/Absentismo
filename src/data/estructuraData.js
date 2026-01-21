export const treeData = [
  {
    id: "corp",
    name: "Corporación Global",
    children: [
      {
        id: "ops",
        name: "Operaciones y Logística",
        children: [
          { id: "mad-log", name: "Hub Madrid (MAD01)" },
          { id: "bcn-log", name: "Hub Barcelona (BCN02)" },
          { id: "val-log", name: "Hub Valencia (VAL03)" },
          { id: "sev-log", name: "Hub Sevilla (SEV04)" }
        ]
      },
      {
        id: "sales",
        name: "Red de Ventas",
        children: [
          { id: "retail-n", name: "Zona Norte" },
          { id: "retail-s", name: "Zona Sur" },
          { id: "retail-e", name: "Zona Este" },
          { id: "retail-c", name: "Zona Centro" }
        ]
      }
    ]
  }
];

// Si el campo turno está vacío: Le pone el badge rojo de Incompleto.
// Si el campo coste es 0 o nulo: Le pone un badge naranja de Revisar Coste.
//Si tiene ambos: Le pone el verde de Óptimo.

export const empleadosData = [
  { id: 1, nombre: "Ana García", centro: "Hub Madrid", turno: "", coste: "€32k", tag: "Logística" },
  { id: 2, nombre: "Juan Pérez", centro: "Zona Norte", turno: "Tarde", coste: "€28k", tag: "Retail" },
  { id: 3, nombre: "Elena Sanz", centro: "Hub Madrid", turno: "Noche", coste: "€41k", tag: "Especialista" },

  { id: 4, nombre: "Carlos Ruiz", centro: "Hub Barcelona", turno: "Mañana", coste: "€30k", tag: "Logística" },
  { id: 5, nombre: "Laura Martínez", centro: "Zona Sur", turno: "Tarde", coste: "€27k", tag: "Retail" },
  { id: 6, nombre: "Miguel Torres", centro: "Hub Madrid", turno: "Mañana", coste: "€35k", tag: "Supervisor" },
  { id: 7, nombre: "Sofía López", centro: "Zona Norte", turno: "Noche", coste: "€29k", tag: "Retail" },
  { id: 8, nombre: "David Romero", centro: "Hub Barcelona", turno: "Tarde", coste: "€33k", tag: "Logística" },
  { id: 9, nombre: "Paula Navarro", centro: "Zona Sur", turno: "Mañana", coste: "€26k", tag: "Retail" },
  { id: 10, nombre: "Javier Molina", centro: "Hub Madrid", turno: "Tarde", coste: "€38k", tag: "Especialista" },

  { id: 11, nombre: "Marta Iglesias", centro: "Hub Barcelona", turno: "Noche", coste: "", tag: "Logística" },
  { id: 12, nombre: "Luis Fernández", centro: "Zona Norte", turno: "Mañana", coste: "€31k", tag: "Retail" },
  { id: 13, nombre: "Cristina Vega", centro: "Zona Sur", turno: "Tarde", coste: "€28k", tag: "Retail" },
  { id: 14, nombre: "Alberto Cano", centro: "Hub Madrid", turno: "Noche", coste: "€42k", tag: "Especialista" },
  { id: 15, nombre: "Natalia Ríos", centro: "Hub Barcelona", turno: "Mañana", coste: "€29k", tag: "Logística" },
  { id: 16, nombre: "Pablo Ortega", centro: "Zona Norte", turno: "Tarde", coste: "€30k", tag: "Retail" },
  { id: 17, nombre: "Irene Gil", centro: "Zona Sur", turno: "Noche", coste: "€27k", tag: "Retail" },

  { id: 18, nombre: "Raúl Santos", centro: "Hub Madrid", turno: "Mañana", coste: "€36k", tag: "Supervisor" },
  { id: 19, nombre: "Beatriz León", centro: "Hub Barcelona", turno: "Tarde", coste: "€32k", tag: "Logística" },
  { id: 20, nombre: "Álvaro Prieto", centro: "Zona Norte", turno: "Mañana", coste: "€34k", tag: "Retail" }
];
