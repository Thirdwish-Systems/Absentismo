import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import RightSidebar from "../components/RightSidebar";
import HelpModalPRL from "../components/HelpModalPRL";

const CoveragePRL = () => {
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.classList.remove("login-page");
  }, []);

  const skills = [
    "Puente Grúa",
    "Carretilla",
    "Calidad ISO",
    "Mantenimiento",
    "Logística",
  ];

  const employees = [
    {
      id: 1,
      name: "Francisco Alanzaves",
      skills: [1, 0, 0, 0, 0],
      fatigue: 88,
      risk: "Crítico",
      status: "Único",
      impact: 1200,
      line: "Línea Ensamblaje A",
    },
    {
      id: 2,
      name: "Sofía Lara",
      skills: [1, 1, 1, 0, 0],
      fatigue: 35,
      risk: "Bajo",
      status: "Backup",
      impact: 0,
      line: "Polivalente",
    },
    {
      id: 3,
      name: "Iker Casillas",
      skills: [0, 0, 0, 1, 1],
      fatigue: 75,
      risk: "Alto",
      status: "Crítico",
      impact: 850,
      line: "Mantenimiento Central",
    },
    {
      id: 4,
      name: "Lucía Martos",
      skills: [0, 1, 0, 0, 1],
      fatigue: 12,
      risk: "Bajo",
      status: "Backup",
      impact: 0,
      line: "Logística Norte",
    },
    {
      id: 5,
      name: "José Sánchez",
      skills: [0, 0, 1, 1, 0],
      fatigue: 92,
      risk: "Crítico",
      status: "Único",
      impact: 1500,
      line: "Calidad / Lab",
    },
  ];

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
          {/* PAGE HEADER - Estilo DataHub */}
          <div className="page-header mt-0 mb-30 shadow-sm d-flex justify-content-between align-items-center pd-20 bg-white border-radius-10">
            <div>
              <h4 className="text-blue">Matriz de Cobertura & Riesgo PRL</h4>
              <p className="mb-0 text-muted">
                Análisis de redundancia operativa y factores de fatiga por IA.
              </p>
            </div>
            <div className="btn-list">
              <button
                className="btn btn-primary btn-sm rounded-pill mr-2"
                data-toggle="modal"
                data-target="#help-modal-prl"
              >
                <i className="fa fa-info-circle mr-2"></i> Guía PRL
              </button>
              <button className="btn btn-outline-danger btn-sm rounded-pill mr-2">
                <i className="fa fa-history"></i> Alertas
              </button>
              <button className="btn btn-outline-primary btn-sm rounded-pill">
                <i className="fa fa-refresh"></i> Recalcular Riesgo
              </button>
            </div>
          </div>

          {/* INDICADORES (STATS) - Estilo DataHub */}
          <div className="row mb-30">
            {[
              {
                title: "Nodos Críticos",
                value: "3",
                icon: "dw-warning",
                color: "text-danger",
              },
              {
                title: "Riesgo Fatiga",
                value: "74%",
                icon: "dw-flow-chart-1",
                color: "text-warning",
              },
              {
                title: "Cobertura Media",
                value: "2.4",
                icon: "dw-user-13",
                color: "text-success",
              },
              {
                title: "Coste Parada",
                value: "€1.450/h",
                icon: "dw-money-2",
                color: "text-primary",
              },
            ].map((stat, idx) => (
              <div key={idx} className="col-xl-3 col-lg-3 col-md-6 mb-10">
                <div className="card-box pd-20 shadow-sm border-radius-10">
                  <div className="d-flex align-items-center">
                    <div className={`micon font-30 mr-3 ${stat.color}`}>
                      <i className={`dw ${stat.icon}`}></i>
                    </div>
                    <div>
                      <div className="weight-700 font-20">{stat.value}</div>
                      <div className="font-12 text-secondary text-uppercase">
                        {stat.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            {/* MATRIZ DE HABILIDADES - Estilo Tabla DataHub */}
            <div className="col-xl-8 col-lg-8 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm border-radius-10">
                <div className="d-flex justify-content-between align-items-center mb-20">
                  <h5 className="h5 text-blue mb-0">
                    Matriz de Habilidades & Relevos
                  </h5>
                  <span className="badge badge-warning">
                    Actualizado hace 5m
                  </span>
                </div>
                <div className="table-responsive">
                  <table className="table stripe hover text-center">
                    <thead>
                      <tr className="bg-light">
                        <th className="text-left table-plus">Empleado</th>
                        {skills.map((s) => (
                          <th key={s} className="font-10 text-uppercase">
                            {s}
                          </th>
                        ))}
                        <th>Fatiga</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((emp) => (
                        <tr
                          key={emp.id}
                          onClick={() => setSelectedEmp(emp)}
                          style={{ cursor: "pointer" }}
                          className={
                            selectedEmp?.id === emp.id ? "bg-light-blue" : ""
                          }
                        >
                          <td className="text-left">
                            <div className="weight-600 font-14">{emp.name}</div>
                            <small className="text-muted">IA: {emp.risk}</small>
                          </td>
                          {emp.skills.map((s, i) => (
                            <td key={i}>
                              <i
                                className={`fa ${s ? "fa-check-circle text-success" : "fa-circle-o text-light"}`}
                              ></i>
                            </td>
                          ))}
                          <td>
                            <span
                              className={
                                emp.fatigue > 80
                                  ? "text-danger weight-700"
                                  : "text-muted"
                              }
                            >
                              {emp.fatigue}%
                            </span>
                          </td>
                          <td>
                            <span
                              className={`badge badge-pill ${emp.status === "Único" ? "badge-danger" : "badge-outline-primary"}`}
                            >
                              {emp.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* SIMULADOR DINÁMICO - Estilo Columna Derecha DataHub */}
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm bg-white border-radius-10">
                <h6 className="mb-20 text-uppercase weight-700 font-14 text-blue">
                  <i className="fa fa-flask mr-2"></i>Simulador de Impacto
                </h6>

                {selectedEmp ? (
                  <div className="animate__animated animate__fadeIn">
                    <div
                      className="pd-15 border border-radius-10 bg-light mb-20 text-center"
                      style={{ borderTop: "4px solid #1b00ff" }}
                    >
                      <div className="weight-700 font-16 text-dark">
                        {selectedEmp.name}
                      </div>
                      <div className="font-12 text-muted mb-2">
                        {selectedEmp.line}
                      </div>
                      <div className="d-flex justify-content-between font-12 bg-white pd-10 border-radius-5">
                        <span>Pérdida Económica:</span>
                        <span className="text-danger weight-700">
                          €{selectedEmp.impact}/día
                        </span>
                      </div>
                    </div>

                    <div className="alert bg-white border border-radius-10 font-12 shadow-sm mb-20">
                      <h6 className="font-12 weight-700 mb-2">
                        Análisis de Relevo IA:
                      </h6>
                      {selectedEmp.status === "Único" ? (
                        <p className="text-danger mb-0">
                          <i className="fa fa-warning mr-1"></i>{" "}
                          <strong>Peligro:</strong> Nodo sin backup.
                        </p>
                      ) : (
                        <p className="text-success mb-0">
                          <i className="fa fa-check mr-1"></i>{" "}
                          <strong>Seguro:</strong> Relevo disponible.
                        </p>
                      )}
                    </div>

                    {/* Widget PRL Estilizado */}
                    <div
                      className={`pd-20 border-radius-10 text-white shadow-sm ${selectedEmp.fatigue > 80 ? "bg-danger" : "bg-warning"}`}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <small className="text-white opacity-8 uppercase weight-600">
                          Nivel de Fatiga
                        </small>
                        <i className="fa fa-bolt animate__animated animate__pulse animate__infinite"></i>
                      </div>
                      <div className="h3 mb-2 text-white weight-700">
                        {selectedEmp.fatigue}%
                      </div>
                      <div
                        className="progress mb-2"
                        style={{
                          height: "6px",
                          backgroundColor: "rgba(255,255,255,0.2)",
                        }}
                      >
                        <div
                          className="progress-bar bg-white"
                          style={{ width: `${selectedEmp.fatigue}%` }}
                        ></div>
                      </div>
                      <small className="font-11 d-block opacity-9">
                        {selectedEmp.fatigue > 80
                          ? "Rotación inmediata requerida."
                          : "Operación estable."}
                      </small>
                    </div>

                    <button className="btn btn-primary btn-block btn-sm rounded-pill mt-3 shadow-sm">
                      Generar Plan de Relevo
                    </button>
                  </div>
                ) : (
                  <div className="text-center pd-30">
                    <div className="icon-box pd-20 border-radius-100 bg-light d-inline-block mb-20">
                      <i className="fa fa-mouse-pointer font-30 text-blue"></i>
                    </div>
                    <p className="text-muted font-13">
                      Selecciona un empleado para analizar el impacto en la
                      cadena.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <HelpModalPRL />
    </>
  );
};

export default CoveragePRL;
