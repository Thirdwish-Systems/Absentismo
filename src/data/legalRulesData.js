export const exclusionRules = [
    { id: "mat", label: "Maternidad / Paternidad", desc: "Excluir del KPI de gestión por ser derecho protegido.", defaultChecked: true },
    { id: "acc", label: "Accidente Laboral", desc: "Tratamiento diferenciado de costes de mutua.", defaultChecked: false },
    { id: "vac", label: "Vacaciones / Permisos", desc: "No computar como absentismo gestionable.", defaultChecked: true },
    { id: "hos", label: "Hospitalización", desc: "Excluir casos graves de la tasa de frecuencia.", defaultChecked: false },
];

export const tramosSS = [
    { dias: "1 - 3", ss: 0, complemento: 100, label: "Tramo Inicial" },
    { dias: "4 - 20", ss: 60, complemento: 15, label: "Tramo Medio" },
    { dias: "21+", ss: 75, complemento: 0, label: "Tramo Largo" },
];