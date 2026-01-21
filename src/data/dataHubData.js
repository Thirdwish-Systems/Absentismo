// src/data/dataHubData.js

export const stats = [
    { title: "Registros Totales", value: "45.2k", icon: "dw-user1", color: "text-blue" },
    { title: "Calidad Media", value: "92%", icon: "dw-analytics-11", color: "text-success" },
    { title: "Campos Críticos", value: "18/20", icon: "dw-board", color: "text-warning" },
    { title: "Alertas Activas", value: "3", icon: "dw-notification", color: "text-danger" },
];

export const connectors = [
    { id: "sap", name: "SAP SuccessFactors", icon: "fa-database", status: 100, color: "bg-success", type: "API", health: "Óptimo" },
    { id: "workday", name: "Workday HR", icon: "fa-cloud", status: 100, color: "bg-success", type: "API", health: "Óptimo" },
    { id: "excel", name: "Plantilla Excel", icon: "fa-file-excel-o", status: 30, color: "bg-danger", type: "Manual", health: "Caducado" },
    { id: "ad", name: "Active Directory", icon: "fa-vcard", status: 90, color: "bg-blue", type: "LDAP", health: "Sincronizando" },
    { id: "salesforce", name: "Salesforce Maps", icon: "fa-cloud-download", status: 100, color: "bg-success", type: "Webhook", health: "Óptimo" },
    { id: "sql", name: "SQL Data Warehouse", icon: "fa-server", status: 65, color: "bg-warning", type: "Direct", health: "Incompleto" },
];

export const mappingData = [
    { id: 1, variable: "Driver: Edad", fuente: "Fecha_Nacimiento", calidad: "Faltante", estado: "BLOQUEADO", impacto: "Alta", tendencia: "down" },
    { id: 2, variable: "Driver: Antigüedad", fuente: "Fecha_Alta", calidad: "100%", estado: "ACTIVO", impacto: "Media", tendencia: "up" },
    { id: 3, variable: "Target: Riesgo Baja", fuente: "Histórico_Absentismo", calidad: "82%", estado: "DEGRADADO", impacto: "Crítica", tendencia: "up" },
    { id: 4, variable: "Driver: Turnicidad", fuente: "Rotación_Turnos", calidad: "95%", estado: "ACTIVO", impacto: "Baja", tendencia: "up" },
    { id: 5, variable: "Driver: Horas Extra", fuente: "Payroll_Overtime", calidad: "40%", estado: "INCOMPLETO", impacto: "Media", tendencia: "down" },
    { id: 6, variable: "Driver: Género", fuente: "Gender_Code", calidad: "100%", estado: "ACTIVO", impacto: "Baja", tendencia: "up" },
];