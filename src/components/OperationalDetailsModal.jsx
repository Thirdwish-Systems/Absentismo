import React from "react";

const OperationalDetailsModal = ({ unit, data }) => {
  if (!data) return null;

  const isDanger = data.status === "danger";

  // Definición de colores basada en tu paleta
  const themeColor = isDanger ? "#ff3e3e" : "#1b00ff";
  const gradient = isDanger
    ? "linear-gradient(135deg, #ff3e3e 0%, #ff6b6b 100%)"
    : "linear-gradient(135deg, #1b00ff 0%, #4facfe 100%)";

  return (
    <div
      className="modal fade"
      id="operational-details-modal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className="modal-content border-0 shadow-lg"
          style={{ borderRadius: "20px", overflow: "hidden" }}
        >
          {/* HEADER CON DEGRADADO NATIVO */}
          <div
            className="modal-header border-0 pd-30 d-flex align-items-center"
            style={{ background: gradient, paddingBottom: "60px" }}
          >
            <div className="bg-white border-radius-10 pd-10 mr-15 shadow-sm">
              <i
                className={`fa ${isDanger ? "fa-flash text-danger" : "fa-rocket text-primary"} font-24`}
              ></i>
            </div>
            <div>
              <h5 className="modal-title text-white font-24 weight-700">
                {unit}
              </h5>
              <p className="text-white opacity-8 mb-0">
                Análisis de Inteligencia Operativa
              </p>
            </div>
            <button
              type="button"
              className="close text-white"
              data-dismiss="modal"
            >
              <span className="font-30">&times;</span>
            </button>
          </div>

          <div
            className="modal-body pd-30"
            style={{
              marginTop: "-40px",
              background: "#f4f7f6",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
            }}
          >
            {/* WIDGETS DE ALTO IMPACTO */}
            <div className="row mb-30">
              <div className="col-md-4 mb-10">
                <div className="card-box pd-20 height-100-p bg-white shadow-sm border-radius-15 text-center">
                  <div className="font-12 weight-700 text-muted uppercase mb-1">
                    Estado Crítico
                  </div>
                  <div
                    className={`font-30 weight-800 ${isDanger ? "text-danger" : "text-primary"}`}
                  >
                    {data.alertas}
                  </div>
                  <small className="weight-600 text-muted">
                    Alertas Activas
                  </small>
                </div>
              </div>
              <div className="col-md-4 mb-10">
                <div className="card-box pd-20 height-100-p bg-white shadow-sm border-radius-15 text-center">
                  <div className="font-12 weight-700 text-muted uppercase mb-1">
                    Salud Unidad
                  </div>
                  <div className="font-30 weight-800 text-dark">
                    {isDanger ? "62%" : "98%"}
                  </div>
                  <div
                    className={`font-12 weight-700 ${isDanger ? "text-danger" : "text-success"}`}
                  >
                    <i
                      className={`fa ${isDanger ? "fa-arrow-down" : "fa-arrow-up"}`}
                    ></i>{" "}
                    {isDanger ? "Crítico" : "Excelente"}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-10">
                <div
                  className="card-box pd-20 height-100-p bg-white shadow-sm border-radius-15 text-center border"
                  style={{ borderColor: themeColor }}
                >
                  <div className="font-12 weight-700 text-muted uppercase mb-1">
                    Carga Financiera
                  </div>
                  <div className="font-24 weight-800 text-dark">
                    €{(data.gasto / 1000).toFixed(1)}k
                  </div>
                  <small className="text-muted weight-600">
                    Impacto en Caja
                  </small>
                </div>
              </div>
            </div>

            <div className="row">
              {/* LISTA DE INCIDENCIAS ESTILO DASHBOARD */}
              <div className="col-lg-7 mb-20">
                <h6 className="weight-700 mb-15 text-dark font-16">
                  <i className="fa fa-list-ul mr-2 text-blue"></i> Desglose de
                  Incidencias
                </h6>
                <div
                  style={{
                    maxHeight: "320px",
                    overflowY: "auto",
                    paddingRight: "10px",
                  }}
                >
                  {data.detalles &&
                    data.detalles.map((item, idx) => (
                      <div
                        key={idx}
                        className="pd-15 mb-15 bg-white border-radius-10 shadow-sm border-left"
                        style={{ borderLeft: `5px solid ${themeColor}` }}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="weight-700 font-14 text-dark">
                            {item.titulo}
                          </span>
                          <span
                            className={`badge badge-pill ${isDanger ? "badge-outline-danger" : "badge-outline-primary"} font-10`}
                          >
                            ACTIVO
                          </span>
                        </div>
                        <p className="font-12 text-secondary mb-0">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* PANEL DE IA (WOW FACTOR SIN CSS EXTERNO) */}
              <div className="col-lg-5">
                <div
                  className="card-box pd-25 height-100-p shadow-lg"
                  style={{ background: "#1b2a3a", borderRadius: "15px" }}
                >
                  <div className="d-flex align-items-center mb-20">
                    <i className="fa fa-android text-info font-20 mr-2"></i>
                    <h6 className="weight-700 mb-0 text-white font-14">
                      IA Predictiva
                    </h6>
                  </div>

                  <div
                    className="pd-15 border-radius-10 mb-20"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <p className="font-12 text-white italic mb-0 opacity-8">
                      "Análisis completado: Se recomienda una reasignación
                      inmediata para mitigar el{" "}
                      {isDanger ? "riesgo operativo" : "coste de oportunidad"}{" "}
                      en {unit}."
                    </p>
                  </div>

                  <div className="mb-20">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="text-white opacity-50 font-10 uppercase">
                        Nivel de Confianza
                      </small>
                      <small className="text-info weight-700 font-10">
                        94%
                      </small>
                    </div>
                    <div
                      className="progress"
                      style={{
                        height: "4px",
                        background: "rgba(255,255,255,0.1)",
                      }}
                    >
                      <div
                        className="progress-bar bg-info"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                  </div>

                  <button
                    className={`btn btn-block rounded-pill weight-700 font-12 py-2 ${isDanger ? "btn-danger" : "btn-primary shadow"}`}
                  >
                    OPTIMIZAR AHORA
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer border-0 bg-white pd-20">
            <button
              type="button"
              className="btn btn-light rounded-pill px-4 weight-600 text-muted"
              data-dismiss="modal"
            >
              Cerrar Vista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalDetailsModal;
