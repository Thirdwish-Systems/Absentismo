import React, { useState } from "react";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import HelpModalCommandCenter from "../components/HelpModalCommandCenter";

// COMPONENTE: Modal de Detalles Operativos (Nuevo)
const OperationalDetailsModal = ({ unit, data }) => (
  <div
    className="modal fade"
    id="operational-details-modal"
    tabIndex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content border-0 shadow-lg">
        <div
          className={`modal-header ${data.status === "danger" ? "bg-danger" : "bg-primary"} text-white`}
        >
          <h5 className="modal-title text-white">
            <i className="fa fa-list-alt mr-2"></i> Detalles: {unit}
          </h5>
          <button
            type="button"
            className="close text-white"
            data-dismiss="modal"
          >
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body pd-20">
          <h6 className="mb-3 weight-700">
            Desglose de Alertas ({data.alertas})
          </h6>
          <ul className="list-group list-group-flush">
            {data.detalles.map((item, idx) => (
              <li
                key={idx}
                className="list-group-item d-flex align-items-start pd-10 border-radius-5 mb-2 bg-light"
              >
                <i
                  className={`fa ${data.status === "danger" ? "fa-exclamation-triangle text-danger" : "fa-info-circle text-blue"} mt-1 mr-3`}
                ></i>
                <div>
                  <div className="weight-600 font-14">{item.titulo}</div>
                  <small className="text-muted">{item.desc}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="modal-footer border-0">
          <button
            type="button"
            className="btn btn-secondary rounded-pill"
            data-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
);

const CommandCenter = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("Consolidado Global");

  // DATA ENGINE: Ampliado con detalles para el modal
  const unitData = {
    "Consolidado Global": {
      gasto: 452120,
      ahorro: 128450,
      alertas: 14,
      status: "warning",
      detalles: [
        {
          titulo: "Absentismo General",
          desc: "Ligero repunte en sector logística (+1.2%)",
        },
        {
          titulo: "Bonificaciones Pendientes",
          desc: "8 expedientes en revisión por la SS",
        },
      ],
    },
    "Planta Logística": {
      gasto: 112400,
      ahorro: 14200,
      alertas: 9,
      status: "danger",
      detalles: [
        {
          titulo: "Baja Crítica: Carretillero",
          desc: "Turno Noche sin cobertura (Skill requerida)",
        },
        {
          titulo: "Huelga de Transporte",
          desc: "Retraso en recepción afecta a 4 turnos",
        },
        { titulo: "Pico de IT", desc: "5 bajas por contingencia común hoy" },
      ],
    },
    "Servicios Centrales": {
      gasto: 98000,
      ahorro: 45600,
      alertas: 2,
      status: "success",
      detalles: [
        {
          titulo: "Eficiencia Óptima",
          desc: "Sin incidencias reportadas en las últimas 48h",
        },
      ],
    },
    "Red Comercial": {
      gasto: 241720,
      ahorro: 68650,
      alertas: 3,
      status: "success",
      detalles: [
        {
          titulo: "Ruta Norte",
          desc: "Sustitución programada para mañana completada",
        },
      ],
    },
  };

  const current = unitData[selectedUnit];
  const impactoNeto = current.gasto - current.ahorro;

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
          {/* HEADER PRINCIPAL */}
          <div className="page-header mt-0 mb-30 shadow-sm d-flex justify-content-between align-items-center pd-20 bg-white border-radius-10">
            <div>
              <h4 className="text-blue font-24">Command Center</h4>
              <p className="mb-0 text-muted weight-500">
                Visualizando:{" "}
                <span className="text-dark weight-700">{selectedUnit}</span>
              </p>
            </div>

            <div className="d-flex align-items-center">
              <button
                className="btn btn-primary btn-sm rounded-pill mr-3"
                data-toggle="modal"
                data-target="#help-command-center"
              >
                <i className="fa fa-info-circle mr-2"></i> Guía Command Center
              </button>

              <div className="btn-group">
                <button
                  type="button"
                  className={`btn btn-${current.status === "danger" ? "danger" : "primary"} dropdown-toggle rounded-pill px-4 shadow-sm`}
                  data-toggle="dropdown"
                >
                  <i className="fa fa-sitemap mr-2"></i> {selectedUnit}
                </button>
                <div className="dropdown-menu dropdown-menu-right shadow-lg border-0">
                  {Object.keys(unitData).map((unit) => (
                    <button
                      key={unit}
                      className={`dropdown-item d-flex justify-content-between align-items-center ${unit === selectedUnit ? "bg-light weight-700" : ""}`}
                      onClick={() => setSelectedUnit(unit)}
                    >
                      {unit}
                      {unitData[unit].status === "danger" && (
                        <span className="badge badge-danger badge-pill ml-2">
                          Crítico
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-30">
            {/* CORRELACIÓN FINANCIERA */}
            <div className="col-xl-8 col-lg-8 mb-10">
              <div
                className="card-box pd-20 height-100-p shadow-sm border-top"
                style={{ borderTop: "4px solid #1b00ff" }}
              >
                <h5 className="h5 text-blue mb-20">
                  Análisis de Correlación: Gasto vs. Ahorro
                </h5>
                <div className="row text-center">
                  <div className="col-md-4 border-right text-truncate">
                    <div className="font-12 text-uppercase weight-600 text-muted">
                      Gasto Real
                    </div>
                    <div className="font-30 weight-700 text-dark">
                      €{current.gasto.toLocaleString()}
                    </div>
                  </div>
                  <div className="col-md-4 border-right text-truncate">
                    <div className="font-12 text-uppercase weight-600 text-success">
                      Ahorro SS
                    </div>
                    <div className="font-30 weight-700 text-success">
                      €{current.ahorro.toLocaleString()}
                    </div>
                  </div>
                  <div className="col-md-4 text-truncate">
                    <div className="font-12 text-uppercase weight-600 text-blue">
                      Impacto Neto
                    </div>
                    <div className="font-30 weight-700 text-blue">
                      €{impactoNeto.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pd-15 bg-light border-radius-10">
                  <div
                    className="progress border-radius-pill"
                    style={{ height: "12px" }}
                  >
                    <div
                      className="progress-bar bg-success"
                      style={{
                        width: `${(current.ahorro / current.gasto) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="progress-bar bg-blue opacity-2"
                      style={{
                        width: `${(impactoNeto / current.gasto) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between font-11 mt-2 text-muted weight-700">
                    <span>
                      EFICIENCIA DE RECUPERACIÓN:{" "}
                      {((current.ahorro / current.gasto) * 100).toFixed(1)}%
                    </span>
                    <span className="text-blue uppercase">
                      Brecha de Coste Optimizada
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* STATUS OPERATIVO CON BOTÓN DE DETALLES */}
            <div className="col-xl-4 col-lg-4 mb-10">
              <div
                className={`card-box pd-20 height-100-p shadow-sm border-left ${current.status === "danger" ? "bg-danger text-white" : "bg-white"}`}
                style={
                  current.status !== "danger"
                    ? { borderLeft: "4px solid #28a745" }
                    : {}
                }
              >
                <div className="d-flex justify-content-between align-items-center mb-20">
                  <h5
                    className={`h5 ${current.status === "danger" ? "text-white" : "text-blue"}`}
                  >
                    Status Operativo
                  </h5>
                  <i
                    className={`fa fa-shield ${current.status === "danger" ? "text-white" : "text-success"} font-20`}
                  ></i>
                </div>
                <div className="text-center pd-10">
                  <div
                    className={`font-45 weight-800 ${current.status === "danger" ? "text-white" : "text-dark"}`}
                  >
                    {current.alertas}
                  </div>
                  <div
                    className={`font-12 weight-600 text-uppercase mb-20 ${current.status === "danger" ? "opacity-8" : "text-muted"}`}
                  >
                    Alertas Detectadas
                  </div>
                </div>
                <div
                  className={`pd-15 border-radius-10 ${current.status === "danger" ? "bg-dark-danger" : "bg-light"}`}
                >
                  <p
                    className={`mb-0 font-13 weight-500 ${current.status === "danger" ? "text-white" : "text-dark"}`}
                  >
                    <i className="fa fa-info-circle mr-2"></i>
                    {current.status === "danger"
                      ? "Umbral crítico de absentismo superado."
                      : "Unidad en niveles de eficiencia óptimos."}
                  </p>
                </div>
                {/* BOTÓN CON ACCIÓN */}
                <button
                  className={`btn btn-block mt-3 rounded-pill weight-600 shadow-sm ${current.status === "danger" ? "btn-light text-danger" : "btn-primary"}`}
                  data-toggle="modal"
                  data-target="#operational-details-modal"
                >
                  <i className="fa fa-search mr-2"></i> Ver Detalles
                </button>
              </div>
            </div>
          </div>

          <div className="row mb-30">
            {/* HEATMAP */}
            <div className="col-xl-7 col-lg-7">
              <div className="card-box pd-20 height-100-p shadow-sm">
                <h5 className="h5 text-blue mb-20">
                  Disponibilidad Crítica (Heatmap Turnos)
                </h5>
                <div className="table-responsive">
                  <table className="table table-sm table-borderless text-center">
                    <thead>
                      <tr className="text-muted font-11 uppercase weight-700">
                        <th></th>
                        {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map(
                          (d) => (
                            <th key={d}>{d}</th>
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {["Mañana", "Tarde", "Noche"].map((turno, idx) => (
                        <tr key={idx}>
                          <td
                            className="text-left weight-600 font-12 text-muted"
                            style={{ width: "80px" }}
                          >
                            {turno}
                          </td>
                          {[1, 2, 3, 4, 5, 6, 7].map((d) => {
                            const intensity = (idx + d + current.alertas) % 4;
                            const colors = [
                              "#f0f2f5",
                              "#c6e48b",
                              "#ffab00",
                              "#ff5b5b",
                            ];
                            return (
                              <td key={d} className="pd-5">
                                <div
                                  className="border-radius-5 shadow-inner"
                                  style={{
                                    height: "30px",
                                    backgroundColor: colors[intensity],
                                  }}
                                ></div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* FORECAST */}
            <div className="col-xl-5 col-lg-5">
              <div className="card-box pd-20 height-100-p shadow-sm text-center">
                <h5 className="h5 text-blue mb-20 text-left">
                  Proyección de Impacto (Forecast)
                </h5>
                <div
                  className="d-flex align-items-end justify-content-between bg-light pd-20 border-radius-10"
                  style={{ height: "180px" }}
                >
                  {[40, 60, 85, 45, 90, 30, 70].map((h, i) => (
                    <div key={i} className="text-center flex-fill mx-1">
                      <div
                        className={`border-radius-5 mb-2 ${current.status === "danger" ? "bg-danger" : "bg-blue"}`}
                        style={{
                          height: `${h * 1.2}px`,
                          transition: "all 0.4s ease",
                          opacity: 0.6,
                        }}
                      ></div>
                      <span className="font-10 text-muted weight-700">
                        D-{i + 1}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="font-11 text-muted mt-3 mb-0 italic">
                  Variación de coste estimada en base a IA predictiva.
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      {/* MODALES AL FINAL */}
      <HelpModalCommandCenter />
      <OperationalDetailsModal unit={selectedUnit} data={current} />
    </>
  );
};

export default CommandCenter;
