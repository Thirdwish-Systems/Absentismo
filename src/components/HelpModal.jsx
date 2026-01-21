import React from "react";

const HelpModal = () => {
  return (
    <div
      className="modal fade"
      id="help-modal"
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
              Guía Maestra de Indicadores
            </h5>
            <button
              type="button"
              className="close text-white"
              data-dismiss="modal"
            >
              <span>&times;</span>
            </button>
          </div>

          <div className="modal-body pd-30">
            <p className="mb-30 text-secondary font-15">
              Utiliza esta guía para entender el significado de los datos y{" "}
              <strong>qué acciones tomar</strong> según los resultados.
            </p>
            <div className="row">
              {/* Gráfica 1: Forecast */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-analytics-11 mr-2"></i> Forecast
                    Predictivo
                    <span className="badge badge-primary float-right">
                      IA / ML
                    </span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Proyecta el absentismo a 60 días.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">
                      Cómo interpretarlo:
                    </strong>
                    <span className="text-danger">● Línea roja sube:</span>{" "}
                    Falta personal a futuro. Revisa turnos.
                    <br />
                    <span className="text-success">● Línea plana:</span>{" "}
                    Operativa estable.
                  </div>
                </div>
              </div>

              {/* Gráfica 2: Drivers */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-Library mr-2"></i> Drivers No Médicos
                    <span className="badge badge-info float-right">
                      Análisis
                    </span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Causas de comportamiento y entorno.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">
                      Cómo interpretarlo:
                    </strong>
                    <span className="text-warning">● Predomina Fatiga:</span>{" "}
                    Revisa rotaciones de descanso.
                    <br />
                    <span className="text-primary">
                      ● Predomina Clima:
                    </span>{" "}
                    Necesitas mejorar la motivación.
                  </div>
                </div>
              </div>

              {/* Gráfica 3: Departamentos */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-flow mr-2"></i> Absentismo por Depto.
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Impacto operativo segmentado por área.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">
                      Cómo interpretarlo:
                    </strong>
                    <span className="text-dark">● Compara barras:</span> Si una
                    barra destaca, el problema es local.
                  </div>
                </div>
              </div>

              {/* Gráfica 4: Riesgo */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-warning mr-2"></i> Riesgo vs. Antigüedad
                    <span className="badge badge-danger float-right">
                      Alerta
                    </span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Identifica Burnout o mala adaptación.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">
                      Cómo interpretarlo:
                    </strong>
                    <span className="text-danger">
                      ● Puntos en poca antigüedad:
                    </span>{" "}
                    Fallo en acogida.
                    <br />
                    <span className="text-danger">
                      ● Puntos en mucha antigüedad:
                    </span>{" "}
                    Cansancio crónico.
                  </div>
                </div>
              </div>

              {/* Gráfica 5: Control Tower */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-balance mr-2"></i> Control Tower:
                    Benchmark
                    <span className="badge badge-warning float-right">
                      Mercado
                    </span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Tu posición frente al sector y objetivo ideal.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">
                      Cómo interpretarlo:
                    </strong>
                    <span className="text-dark">● Compara con la media:</span>{" "}
                    Estar por encima significa pérdida de competitividad.
                  </div>
                </div>
              </div>

              {/* Gráfica 6: Playbooks */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-rocket mr-2"></i> Playbooks de IA
                    Sugeridos
                    <span className="badge badge-success float-right">
                      Solución
                    </span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Acciones concretas con retorno de inversión.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">
                      Cómo interpretarlo:
                    </strong>
                    <span className="text-success">● Columna ROI:</span> Ahorro
                    económico si aplicas la acción hoy.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Entendido, ir al Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
