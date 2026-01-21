import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import RightSidebar from "../components/RightSidebar";
import HelpModalAlertas from "../components/HelpModalAlertas";

const ConfigAlertas = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [threshold, setThreshold] = useState(20);

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

      <div
        className="main-container"
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div className="pd-ltr-20" style={{ flex: 1 }}>
          {/* HEADER DE PÁGINA */}
          <div className="page-header mt-0 mb-30 shadow-sm d-flex justify-content-between align-items-center pd-20 bg-white border-radius-10">
            <div>
              <h4 className="text-blue">Configuración de Alertas</h4>
              <p className="mb-0 text-muted">
                Gestión de ruido y umbrales de riesgo inteligente.
              </p>
            </div>
            <div className="btn-list">
              <button className="btn btn-success btn-sm rounded-pill mr-2 shadow-sm">
                <i className="fa fa-save mr-2"></i> Activar Filtros
              </button>
              <button
                className="btn btn-primary btn-sm rounded-pill shadow-sm"
                data-toggle="modal"
                data-target="#help-modal-alertas"
              >
                <i className="fa fa-info-circle mr-2"></i> Guía Alertas
              </button>
            </div>
          </div>

          <div className="row">
            {/* COLUMNA IZQUIERDA: CANALES DE ENVÍO */}
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm border-radius-10">
                <h5 className="h5 text-blue mb-20">Canales (Webhooks)</h5>

                <div className="form-group">
                  <label className="weight-600">Plataforma de Salida</label>
                  <div className="list-group">
                    {[
                      {
                        name: "Microsoft Teams",
                        icon: "fa-windows",
                        color: "text-primary",
                      },
                      {
                        name: "Slack Channel",
                        icon: "fa-slack",
                        color: "text-warning",
                      },
                      {
                        name: "Email Corporativo",
                        icon: "fa-envelope",
                        color: "text-danger",
                      },
                    ].map((chan) => (
                      <div
                        key={chan.name}
                        className="d-flex align-items-center justify-content-between mb-3 pd-10 border border-radius-10 bg-light"
                      >
                        <div className="d-flex align-items-center">
                          <i
                            className={`fa ${chan.icon} ${chan.color} font-20 mr-3`}
                          ></i>
                          <span className="weight-600 font-14">
                            {chan.name}
                          </span>
                        </div>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={chan.name}
                            defaultChecked={chan.name === "Email Corporativo"}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={chan.name}
                          ></label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 border-top pt-3">
                  <h6 className="font-14 weight-700 mb-3 text-secondary text-uppercase">
                    Horario de Notificación
                  </h6>
                  <select className="form-control rounded-pill mb-2">
                    <option>Solo en Turno (8:00 - 18:00)</option>
                    <option>Críticas 24/7</option>
                  </select>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: GESTIÓN DE RUIDO E IA */}
            <div className="col-xl-8 col-lg-8 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm border-radius-10">
                <h5 className="h5 text-blue mb-20">Inteligencia de Umbrales</h5>

                <div className="pd-20 border-radius-10 bg-light-blue mb-30 border border-blue shadow-sm">
                  <div className="d-flex align-items-center mb-10">
                    <i className="dw dw-rocket-1 text-blue font-30 mr-3"></i>
                    <h6 className="text-blue weight-700 mb-0">
                      Filtro de Desviación Histórica
                    </h6>
                  </div>
                  <p className="font-14 text-dark mb-20">
                    Evita la fatiga de alertas. El sistema solo notificará si el
                    riesgo supera la media histórica del centro.
                  </p>

                  <div className="form-group mb-0">
                    <label className="weight-700 font-16">
                      Umbral de Sensibilidad:{" "}
                      <span className="text-blue">{threshold}%</span>
                    </label>
                    <input
                      type="range"
                      className="custom-range"
                      min="5"
                      max="50"
                      value={threshold}
                      onChange={(e) => setThreshold(e.target.value)}
                    />
                    <div className="d-flex justify-content-between mt-2 text-muted font-12">
                      <span>Más Ruido (Poco sensible)</span>
                      <span>Menos Ruido (Alta precisión)</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Widget Riesgo Absentismo */}
                  <div className="col-md-6 mb-20">
                    <div className="pd-20 border border-radius-10 height-100-p bg-white shadow-sm">
                      <div className="d-flex align-items-center mb-2">
                        <div className="bg-light-danger pd-10 border-radius-100 mr-2">
                          <i className="fa fa-user-times text-danger"></i>
                        </div>
                        <h6 className="font-14 weight-700 mb-0 text-dark">
                          Riesgo Absentismo
                        </h6>
                      </div>
                      <small
                        className="text-muted d-block mb-3"
                        style={{ lineHeight: "1.2" }}
                      >
                        Notificar si la probabilidad de baja sube por encima de
                        la media:
                      </small>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          defaultValue="15"
                          style={{
                            borderRadius: "10px 0 0 10px",
                            borderRight: "none",
                          }}
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text bg-white text-blue weight-700"
                            style={{
                              borderRadius: "0 10px 10px 0",
                              borderLeft: "none",
                            }}
                          >
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Widget Fatiga Crítica */}
                  <div className="col-md-6 mb-20">
                    <div className="pd-20 border border-radius-10 height-100-p bg-white shadow-sm">
                      <div className="d-flex align-items-center mb-2">
                        <div className="bg-light-warning pd-10 border-radius-100 mr-2">
                          <i className="fa fa-bolt text-warning"></i>
                        </div>
                        <h6 className="font-14 weight-700 mb-0 text-dark">
                          Fatiga Crítica
                        </h6>
                      </div>
                      <small
                        className="text-muted d-block mb-3"
                        style={{ lineHeight: "1.2" }}
                      >
                        Notificar si un trabajador en puesto único llega a un
                        nivel de:
                      </small>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          defaultValue="85"
                          style={{
                            borderRadius: "10px 0 0 10px",
                            borderRight: "none",
                          }}
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text bg-white text-blue weight-400"
                            style={{
                              borderRadius: "0 10px 10px 0",
                              borderLeft: "none",
                            }}
                          >
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pd-20 border-radius-10 bg-dark text-white shadow">
                  <div className="d-flex align-items-center">
                    <div className="spinner-grow spinner-grow-sm text-success mr-2"></div>
                    <span className="font-12 weight-600">
                      Motor de IA Activo:
                    </span>
                  </div>
                  <p className="font-11 opacity-7 mt-2 mb-0">
                    "Actualmente filtrando el{" "}
                    <strong>64% de las micro-alertas</strong>. Se estima que
                    recibirá 2 notificaciones relevantes esta semana por cada
                    centro."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      <HelpModalAlertas />
    </>
  );
};

export default ConfigAlertas;
