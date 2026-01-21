import React from "react";

const HelpModalCommandCenter = () => {
  return (
    <div
      className="modal fade"
      id="help-command-center"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-blue text-white">
            <h5 className="modal-title text-white">
              <i className="fa fa-lightbulb-o mr-2"></i> Guía del Command Center
            </h5>
            <button
              type="button"
              className="close text-white"
              data-dismiss="modal"
            >
              <span>&times;</span>
            </button>
          </div>

          <div className="modal-body pd-30 bg-light-gray">
            <p className="mb-30 text-secondary font-15 text-center">
              Este panel permite supervisar la{" "}
              <strong>salud financiera y operativa</strong> cruzando datos de
              costes reales con la eficiencia de recuperación de la Seguridad
              Social.
            </p>

            <div className="row">
              {/* Sección 1: Correlación Financiera */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue shadow-sm">
                  <h6 className="weight-700 mb-10 text-blue">
                    <i className="fa fa-calculator mr-2"></i> Correlación
                    Financiera
                  </h6>
                  <p className="font-14 text-muted">
                    Análisis del flujo monetario derivado de la plantilla.
                  </p>
                  <ul className="font-12 pl-3 mt-2 text-secondary">
                    <li>
                      <strong>Gasto Real:</strong> Coste total de salarios y
                      cargas.
                    </li>
                    <li>
                      <strong>Ahorro SS:</strong> Bonificaciones y
                      recuperaciones obtenidas.
                    </li>
                    <li>
                      <strong>Impacto Neto:</strong> El coste real final para la
                      empresa.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sección 2: Drill-down & Status */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-danger shadow-sm">
                  <h6 className="weight-700 mb-10 text-danger">
                    <i className="fa fa-sitemap mr-2"></i> Función Drill-down
                  </h6>
                  <p className="font-14 text-muted">
                    Capacidad de filtrar por unidades específicas en riesgo.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12 border">
                    <span className="weight-700 text-danger">
                      ● Unidades en Rojo:
                    </span>{" "}
                    Presentan un ratio de absentismo crítico (superior al 8%).
                    <br />
                    <span className="weight-700 text-primary">
                      ● Recalculado:
                    </span>{" "}
                    Al filtrar, toda la pantalla muestra datos exclusivos de esa
                    unidad.
                  </div>
                </div>
              </div>

              {/* Sección 3: Disponibilidad y Forecast */}
              <div className="col-md-12">
                <div
                  className="card-box pd-20 shadow-sm"
                  style={{ borderLeft: "5px solid #ffab00" }}
                >
                  <h6 className="weight-700 mb-10 text-dark">
                    <i className="fa fa-line-chart mr-2"></i> Predicción de
                    Disponibilidad
                  </h6>
                  <p className="font-14 text-muted">
                    Modelos predictivos aplicados a la cobertura de turnos.
                  </p>
                  <div className="row mt-15 align-items-center">
                    <div className="col-md-4">
                      <div className="pd-10 border-radius-5 bg-white border text-center">
                        <small className="d-block text-muted">Heatmap</small>
                        <strong className="text-warning">
                          Tensión de Turnos
                        </strong>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <p className="font-12 mb-0">
                        El <strong>Forecast</strong> proyecta el impacto
                        económico de los próximos 7 días basado en patrones
                        históricos de absentismo y el calendario de turnos
                        actual.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer bg-white border-0">
            <button
              type="button"
              className="btn btn-secondary rounded-pill px-4"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary rounded-pill px-4"
              data-dismiss="modal"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModalCommandCenter;
