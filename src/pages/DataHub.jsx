import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import HelpModalDataHub from "../components/HelpModalDataHub";
import ErrorLogModal from "../components/ErrorLogModal";

// IMPORTACIÓN DE DATOS EXTERNOS
import { stats, connectors, mappingData } from "../data/dataHubData";

const DataHub = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.classList.remove("login-page");

    const initDataTable = () => {
      if (window.$ && window.$.fn.DataTable) {
        if (window.$.fn.DataTable.isDataTable(".data-table-mapping")) {
          window.$(".data-table-mapping").DataTable().destroy();
        }

        window.$(".data-table-mapping").DataTable({
          scrollCollapse: true,
          autoWidth: false,
          responsive: true,
          columnDefs: [{ targets: "datatable-nosort", orderable: false }],
          lengthMenu: [
            [5, 10, 25, -1],
            [5, 10, 25, "Todos"],
          ],
          language: {
            info: "_START_-_END_ de _TOTAL_ registros",
            searchPlaceholder: "Buscar variable o campo...",
            paginate: {
              next: '<i class="ion-chevron-right"></i>',
              previous: '<i class="ion-chevron-left"></i>',
            },
          },
        });
      }
    };

    const timeoutId = setTimeout(initDataTable, 200);
    return () => {
      clearTimeout(timeoutId);
      if (
        window.$ &&
        window.$.fn.DataTable &&
        window.$.fn.DataTable.isDataTable(".data-table-mapping")
      ) {
        window.$(".data-table-mapping").DataTable().destroy(true);
      }
    };
  }, []);

  return (
    <>
      <Header onSettingsClick={() => setIsRightSidebarOpen(true)} />
      <RightSidebar
        isOpen={isRightSidebarOpen}
        setIsOpen={setIsRightSidebarOpen}
      />
      <LeftSideBar />

      <div className="main-container">
        <div className="pd-ltr-20">
          <div className="page-header mt-0 mb-30 shadow-sm d-flex justify-content-between align-items-center pd-20 bg-white border-radius-10">
            <div>
              <h4 className="text-blue">Centro de Mando de Datos</h4>
              <p className="mb-0 text-muted">
                Orquestación de fuentes y validación para IA Predictiva.
              </p>
            </div>
            <div className="btn-list">
              <button
                className="btn btn-primary btn-sm rounded-pill mr-2"
                data-toggle="modal"
                data-target="#help-modal-datahub"
              >
                <i className="fa fa-info-circle mr-2"></i> Guía DataHub
              </button>
              <button
                className="btn btn-outline-danger btn-sm rounded-pill mr-2"
                data-toggle="modal"
                data-target="#error-log-modal"
              >
                <i className="fa fa-history"></i> Histórico
              </button>
              <button className="btn btn-outline-primary btn-sm rounded-pill">
                <i className="fa fa-refresh"></i> Sincronizar Todo
              </button>
            </div>
          </div>

          {/* INDICADORES (STATS) */}
          <div className="row mb-30">
            {stats.map((stat, idx) => (
              <div key={idx} className="col-xl-3 col-lg-3 col-md-6 mb-10">
                <div className="card-box pd-20 shadow-sm border-radius-10">
                  <div className="d-flex align-items-center">
                    <div className={`micon font-30 mr-3 ${stat.color}`}>
                      <i className={`dw ${stat.icon}`}></i>
                    </div>
                    <div>
                      <div className="weight-700 font-20">{stat.value}</div>
                      <div className="font-12 text-secondary">{stat.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FILA CENTRAL: CONECTORES + SALUD */}
          <div className="row mb-30">
            <div className="col-xl-9 col-lg-9 mb-10">
              <div className="card-box pd-20 height-100-p shadow-sm">
                <h5 className="h5 mb-20">Ecosistema de Conectores</h5>
                <div className="row">
                  {connectors.map((conn) => (
                    <div key={conn.id} className="col-md-4 mb-20">
                      <div
                        className="pd-15 border border-radius-10 bg-white shadow-sm text-center"
                        style={{
                          borderTop: `4px solid ${conn.health === "Caducado" ? "#e95959" : "#1b00ff"}`,
                        }}
                      >
                        <div className="d-flex justify-content-end mb-1">
                          <span
                            className={`badge badge-pill ${conn.health === "Caducado" ? "badge-danger" : "badge-success"}`}
                            style={{ fontSize: "9px" }}
                          >
                            {conn.type}
                          </span>
                        </div>
                        <div className="icon-box pd-10 border-radius-100 bg-light d-inline-block mb-10">
                          <i
                            className={`fa ${conn.icon} font-20 text-blue`}
                          ></i>
                        </div>
                        <div className="weight-700 font-14 mb-1 text-dark text-truncate">
                          {conn.name}
                        </div>
                        <div className="font-11 text-muted mb-10">
                          Estado:{" "}
                          <span className="weight-600">{conn.health}</span>
                        </div>
                        <div
                          className="progress mb-0"
                          style={{ height: "5px" }}
                        >
                          <div
                            className={`progress-bar progress-bar-striped ${conn.color}`}
                            style={{ width: `${conn.status}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 mb-10">
              <div className="card-box pd-20 height-100-p shadow-sm text-center d-flex flex-column justify-content-center bg-white">
                <h6 className="weight-700 mb-20 text-blue">Calidad del Dato</h6>
                <div className="position-relative mb-20 d-flex justify-content-center">
                  <div
                    className="border-radius-100 d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "120px",
                      height: "120px",
                      border: "10px solid #28a745",
                      borderLeftColor: "#e95959",
                    }}
                  >
                    <div className="font-24 weight-700">88%</div>
                  </div>
                </div>
                <div className="text-left font-12">
                  <div className="mb-1">
                    <i className="fa fa-circle text-success mr-2"></i> Validados
                    (162)
                  </div>
                  <div className="mb-1">
                    <i className="fa fa-circle text-danger mr-2"></i> Críticos
                    (12)
                  </div>
                  <div className="font-12">
                    <i className="fa fa-circle text-warning mr-2"></i> Avisos
                    (24)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DATATABLE */}
          <div className="card-box mb-30 shadow-sm border-radius-10">
            <div className="pd-20 d-flex justify-content-between align-items-center">
              <h5 className="h5 text-blue">Mapeo y Dependencias IA</h5>
              <span className="badge badge-danger">2 Módulos Bloqueados</span>
            </div>
            <div className="pb-20">
              <table className="table stripe hover data-table-mapping nowrap">
                <thead>
                  <tr>
                    <th className="table-plus">Variable Predictiva</th>
                    <th>Campo Origen</th>
                    <th>Calidad</th>
                    <th>Estado de Cálculo</th>
                    <th>Impacto IA</th>
                    <th className="datatable-nosort">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {mappingData.map((row) => (
                    <tr key={row.id}>
                      <td className="table-plus">
                        <span className="weight-600">{row.variable}</span>
                      </td>
                      <td>{row.fuente}</td>
                      <td>
                        <span
                          className={`weight-700 ${row.calidad === "Faltante" ? "text-danger" : "text-success"}`}
                        >
                          {row.calidad}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge badge-pill badge-outline-${row.estado === "ACTIVO" ? "success" : "danger"}`}
                        >
                          {row.estado}
                        </span>
                      </td>
                      <td>
                        <i
                          className={`fa fa-arrow-${row.tendencia} mr-2 ${row.impacto === "Crítica" ? "text-danger" : "text-primary"}`}
                        ></i>
                        {row.impacto}
                      </td>
                      <td>
                        <button className="btn btn-sm btn-link text-blue p-0">
                          <i className="dw dw-edit2"></i>
                        </button>
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

      {/* MODALES */}
      <HelpModalDataHub />
      <ErrorLogModal />
    </>
  );
};

export default DataHub;
