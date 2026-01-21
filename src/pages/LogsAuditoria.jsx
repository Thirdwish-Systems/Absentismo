import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import RightSidebar from "../components/RightSidebar";
import HelpModalLogs from "../components/HelpModalLogs";

const LogsAuditoria = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  // Datos ampliados para visualización de DataTable
  const logsData = [
    { id: 1, usuario: "Admin_Juan", accion: "Consulta Detalle Baja Médica (Art. 9 RGPD)", modulo: "PRL", fecha: "20/01/2026 10:15", ip: "192.168.1.45", tipo: "Sensible" },
    { id: 2, usuario: "Finanzas_Marta", accion: "Modificación de Multiplicador Coste/Hora", modulo: "Reporting", fecha: "20/01/2026 09:30", ip: "192.168.1.22", tipo: "Financiero" },
    { id: 3, usuario: "Sistema_IA", accion: "Recálculo Automático Umbral de Ruido", modulo: "Alertas", fecha: "20/01/2026 08:00", ip: "Internal", tipo: "Sistema" },
    { id: 4, usuario: "RRHH_Lucia", accion: "Acceso Matriz de Habilidades Críticas", modulo: "Coverage", fecha: "19/01/2026 17:45", ip: "192.168.1.12", tipo: "Estándar" },
    { id: 5, usuario: "Admin_Juan", accion: "Exportación Informe Impacto Q4", modulo: "Reporting", fecha: "19/01/2026 16:20", ip: "192.168.1.45", tipo: "Estándar" },
    { id: 6, usuario: "Gerencia_Carlos", accion: "Consulta de Datos Identificativos", modulo: "DataHub", fecha: "19/01/2026 15:10", ip: "172.16.0.88", tipo: "Sensible" },
    { id: 7, usuario: "Finanzas_Marta", accion: "Ajuste de Regla de Cálculo: Plus Turnicidad", modulo: "Reporting", fecha: "19/01/2026 14:05", ip: "192.168.1.22", tipo: "Financiero" },
    { id: 8, usuario: "Sistema_IA", accion: "Generación de Alerta: Fatiga Crítica Nodo A-12", modulo: "Alertas", fecha: "19/01/2026 12:00", ip: "Internal", tipo: "Sistema" },
    { id: 9, usuario: "RRHH_Lucia", accion: "Alta de Nuevo Perfil de Acceso", modulo: "Roles", fecha: "19/01/2026 10:30", ip: "192.168.1.12", tipo: "Seguridad" },
    { id: 10, usuario: "Admin_Juan", accion: "Sincronización Manual Fuente: SAP HR", modulo: "DataHub", fecha: "19/01/2026 09:15", ip: "192.168.1.45", tipo: "Sistema" },
    { id: 11, usuario: "Soporte_Tech", accion: "Revisión Log de Errores Críticos", modulo: "Sistema", fecha: "18/01/2026 23:40", ip: "10.0.0.5", tipo: "Sistema" },
    { id: 12, usuario: "Finanzas_Marta", accion: "Descarga Proyección Presupuestaria 2026", modulo: "Reporting", fecha: "18/01/2026 11:00", ip: "192.168.1.22", tipo: "Financiero" },
    { id: 13, usuario: "RRHH_Lucia", accion: "Modificación de Skill: Operador Grúa", modulo: "Coverage", fecha: "18/01/2026 09:20", ip: "192.168.1.12", tipo: "Estándar" },
    { id: 14, usuario: "Admin_Juan", accion: "Borrado de Conector Obsoleto (Excel Temp)", modulo: "DataHub", fecha: "17/01/2026 18:05", ip: "192.168.1.45", tipo: "Seguridad" },
    { id: 15, usuario: "Sistema_IA", accion: "Optimización de Base de Datos Predictiva", modulo: "Sistema", fecha: "17/01/2026 04:00", ip: "Internal", tipo: "Sistema" },
  ];

  useEffect(() => {
    document.body.classList.remove("login-page");

    // Lógica idéntica a Alarmas.jsx para inicializar DataTable
    const initDataTable = () => {
      if (window.$ && window.$.fn.DataTable) {
        if (window.$.fn.DataTable.isDataTable(".data-table-logs")) {
          window.$(".data-table-logs").DataTable().destroy();
        }

        window.$(".data-table-logs").DataTable({
          scrollCollapse: true,
          autoWidth: false,
          responsive: true,
          order: [[3, "desc"]], // Ordenar por Fecha (columna 3) por defecto
          columnDefs: [{ targets: "datatable-nosort", orderable: false }],
          lengthMenu: [[5, 10, 20, -1], [5, 10, 20, "Todos"]],
          language: {
            info: "_START_-_END_ de _TOTAL_ registros",
            searchPlaceholder: "Buscar en auditoría...",
            lengthMenu: "Mostrar _MENU_ logs",
            paginate: {
              next: '<i class="ion-chevron-right"></i>',
              previous: '<i class="ion-chevron-left"></i>',
            },
          },
          dom: "lBfrtip",
          buttons: ["copy", "csv", "pdf", "print"],
        });
      }
    };

    const timeoutId = setTimeout(initDataTable, 200);
    return () => {
      clearTimeout(timeoutId);
      if (window.$ && window.$.fn.DataTable && window.$.fn.DataTable.isDataTable(".data-table-logs")) {
        window.$(".data-table-logs").DataTable().destroy(true);
      }
    };
  }, []);

  return (
    <>
      <Header onSettingsClick={() => setIsRightSidebarOpen(true)} />
      <RightSidebar isOpen={isRightSidebarOpen} setIsOpen={setIsRightSidebarOpen} />
      <LeftSideBar />

      <div className="main-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div className="pd-ltr-20" style={{ flex: 1 }}>
          
          <div className="page-header mt-0 mb-30 shadow-sm d-flex justify-content-between align-items-center pd-20 bg-white border-radius-10">
            <div>
              <h4 className="text-blue">Logs y Auditoría de Sistema</h4>
              <p className="mb-0 text-muted">Registro inalterable y cumplimiento legal (RGPD).</p>
            </div>
          </div>

          <div className="card-box mb-30 shadow-sm border-radius-10 bg-white">
            <div className="pd-20">
              <h5 className="h5 text-blue">Traza de Actividad Reciente</h5>
            </div>
            <div className="pb-20">
              {/* Se añade la clase 'data-table-logs' y 'nowrap' como en Alarmas.jsx */}
              <table className="table stripe hover data-table-logs nowrap">
                <thead>
                  <tr className="bg-light">
                    <th className="table-plus">Usuario / IP</th>
                    <th>Acción Realizada</th>
                    <th>Módulo</th>
                    <th>Fecha / Hora</th>
                    <th className="text-center datatable-nosort">Categoría</th>
                  </tr>
                </thead>
                <tbody>
                  {logsData.map((log) => (
                    <tr key={log.id}>
                      <td>
                        <div className="weight-600 font-14">{log.usuario}</div>
                        <small className="text-muted font-10">{log.ip}</small>
                      </td>
                      <td style={{ whiteSpace: "normal", maxWidth: "300px" }}>{log.accion}</td>
                      <td><span className="badge badge-pill badge-light border">{log.modulo}</span></td>
                      <td className="font-12">{log.fecha}</td>
                      <td className="text-center">
                        <span className={`badge badge-pill ${
                          log.tipo === 'Sensible' ? 'badge-danger' : 
                          log.tipo === 'Financiero' ? 'badge-warning' : 
                          log.tipo === 'Seguridad' ? 'badge-info' : 'badge-primary'
                        }`}>
                          {log.tipo}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
      <HelpModalLogs />
    </>
  );
};

export default LogsAuditoria;