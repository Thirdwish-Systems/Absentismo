import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import { exclusionRules, tramosSS } from "../data/legalRulesData";
import HelpModalLegal from "../components/HelpModalLegal";

const ReglasLegales = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [costeMedio, setCosteMedio] = useState(145.5);
  const [convenio, setConvenio] = useState("general");

  useEffect(() => {
    document.body.classList.remove("login-page");
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
              <h4 className="text-blue">Motor de Costes y Reglas Legales</h4>
              <p className="mb-0 text-muted">
                Configuración avanzada de lógica financiera y criterios de
                exclusión.
              </p>
            </div>
            <div className="btn-list">
              <button
                className="btn btn-primary btn-sm rounded-pill mr-2"
                data-toggle="modal"
                data-target="#help-modal-legal"
              >
                <i className="fa fa-question-circle mr-2"></i> Ayuda Técnica
              </button>

              <button className="btn btn-success btn-sm rounded-pill shadow-sm">
                <i className="fa fa-save mr-2"></i> Guardar Cambios
              </button>
            </div>
          </div>

          {/* SELECTOR DE CONVENIO RÁPIDO */}
          <div
            className="card-box pd-20 mb-30 shadow-sm border-radius-10 border-left"
            style={{ borderLeft: "5px solid #1b00ff" }}
          >
            <div className="row align-items-center">
              <div className="col-md-4">
                <h6 className="weight-700">
                  Cargar Configuración por Convenio
                </h6>
                <p className="font-12 text-muted mb-0">
                  Aplica automáticamente los tramos legales de tu sector.
                </p>
              </div>
              <div className="col-md-5">
                <select
                  className="form-control"
                  value={convenio}
                  onChange={(e) => setConvenio(e.target.value)}
                >
                  <option value="general">
                    Régimen General (Estatuto Trabajadores)
                  </option>
                  <option value="metal">Convenio del Metal</option>
                  <option value="comercio">Convenio Comercio / Retail</option>
                  <option value="hosteleria">Hostelería y Turismo</option>
                </select>
              </div>
              <div className="col-md-3 text-right">
                <button className="btn btn-primary btn-sm">
                  Cargar Plantilla
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            {/* EXCLUSIONES Y MOTIVOS */}
            <div className="col-xl-4 col-lg-5 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm">
                <h5 className="h5 mb-20 text-blue">Filtro de Gestión</h5>
                <p className="font-12 text-muted mb-20">
                  Define qué ausencias son{" "}
                  <strong>responsabilidad del manager</strong> (Evitables) y
                  cuáles son <strong>exclusiones legales</strong>.
                </p>

                {exclusionRules.map((rule) => (
                  <div
                    key={rule.id}
                    className="d-flex justify-content-between align-items-center mb-15 pb-10 border-bottom"
                  >
                    <div className="pr-2">
                      <div className="weight-600 font-14">{rule.label}</div>
                      <small className="text-muted d-block">{rule.desc}</small>
                    </div>
                    <div className="custom-control custom-switch pr-0">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={rule.id}
                        defaultChecked={rule.defaultChecked}
                      />
                      <label
                        className="custom-control-input-label"
                        htmlFor={rule.id}
                      ></label>
                    </div>
                  </div>
                ))}

                <div className="mt-20">
                  <button className="btn btn-sm btn-outline-blue btn-block border-dashed">
                    <i className="fa fa-plus mr-2"></i> Añadir Motivo de
                    Exclusión
                  </button>
                </div>
              </div>
            </div>

            {/* CONFIGURACIÓN FINANCIERA */}
            <div className="col-xl-8 col-lg-7 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm">
                <div className="d-flex justify-content-between mb-20">
                  <h5 className="h5 text-blue">Parámetros de Cálculo ROI</h5>
                  <span className="badge badge-pill badge-outline-primary">
                    Moneda: EUR (€)
                  </span>
                </div>

                <div className="row mb-30">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="weight-600">
                        Coste Bruto Medio Diario
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">€</span>
                        </div>
                        <input
                          type="number"
                          className="form-control font-20 weight-700 text-blue"
                          value={costeMedio}
                          onChange={(e) => setCosteMedio(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="weight-600">
                        % Cotización Empresa (SS)
                      </label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          defaultValue="31.5"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h6 className="mb-20 weight-700 border-bottom pb-2">
                  Escalado de IT y Complementos
                </h6>
                <div className="table-responsive">
                  <table className="table table-sm text-center">
                    <thead className="bg-light">
                      <tr>
                        <th>Rango Días</th>
                        <th>% Pago SS</th>
                        <th>% Compl. Empresa</th>
                        <th>Impacto Final</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tramosSS.map((tramo, idx) => (
                        <tr key={idx}>
                          <td className="weight-600 pd-10">{tramo.dias}</td>
                          <td>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center"
                              defaultValue={tramo.ss}
                              style={{ width: "60px", margin: "auto" }}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control form-control-sm text-center text-blue weight-700"
                              defaultValue={tramo.complemento}
                              style={{ width: "60px", margin: "auto" }}
                            />
                          </td>
                          <td>
                            <div
                              className="progress mt-1"
                              style={{
                                height: "8px",
                                width: "100px",
                                margin: "auto",
                              }}
                            >
                              <div
                                className="progress-bar bg-danger"
                                style={{ width: `${100 - tramo.ss}%` }}
                              ></div>
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: `${tramo.complemento}%` }}
                              ></div>
                            </div>
                            <small className="font-10 text-muted">
                              Carga: {100 - tramo.ss + tramo.complemento}%
                            </small>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* WIDGET DE INTELIGENCIA DE COSTES */}
          <div className="row mb-30">
            <div className="col-md-12">
              <div className="card-box pd-20 bg-dark text-white border-radius-10 shadow-lg">
                <div className="row align-items-center">
                  <div className="col-md-3 border-right border-secondary">
                    <h2 className="text-success weight-700">€27.2k</h2>
                    <p className="mb-0 text-uppercase font-12 opacity-7">
                      Ahorro potencial / mes
                    </p>
                  </div>
                  <div className="col-md-6 pd-20">
                    <h6 className="text-white mb-2">
                      Resumen de la Lógica Actual
                    </h6>
                    <p className="font-12 mb-0 opacity-8 text-justify">
                      Estás asumiendo el <strong>100% del coste</strong> los
                      primeros 3 días de cada baja. Un total de{" "}
                      <strong>42 categorías</strong> de absentismo están
                      marcadas como "Gestionables", lo que significa que la IA
                      enfocará sus Playbooks en reducir estos motivos
                      específicos para maximizar el ROI.
                    </p>
                  </div>
                  <div className="col-md-3 text-center">
                    <button className="btn btn-warning btn-sm btn-block font-12 weight-600">
                      DESCARGAR INFORME FINANCIERO
                    </button>
                    <small className="d-block mt-2 opacity-5 italic">
                      Datos actualizados hoy 08:00 AM
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      <HelpModalLegal />
    </>
  );
};

export default ReglasLegales;
