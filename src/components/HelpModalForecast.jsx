import React from "react";

const HelpModalForecast = () => {
  return (
    <div
      className="modal fade"
      id="help-modal-forecast"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title text-white">
              <i className="fa fa-microchip mr-2"></i> Guía Avanzada: Análisis Predictivo y Causalidad
            </h5>
            <button type="button" className="close text-white" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>

          <div className="modal-body pd-30 bg-light-gray">
            <p className="mb-30 text-secondary font-15 text-center">
              Este módulo utiliza algoritmos de <strong>Gradient Boosting (XGBoost)</strong> para transformar datos históricos en estrategias preventivas de capital humano.
            </p>

            <div className="row">
              {/* 1. Forecast y Confianza */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue shadow-sm">
                  <h6 className="weight-700 mb-10 text-blue">
                    <i className="fa fa-line-chart mr-2"></i> El Forecast (60 días)
                  </h6>
                  <p className="font-13 text-muted">
                    La línea discontinua proyecta el volumen de bajas basándose en patrones de estacionalidad y variables de entorno.
                  </p>
                  <div className="bg-info pd-10 border-radius-5 font-11 text-white mt-2">
                    <strong>Intervalo de Confianza (95%):</strong> Es el "margen de seguridad". Si la sombra es ancha, la IA indica alta volatilidad; si es estrecha, la predicción es estable.
                  </div>
                </div>
              </div>

              {/* 2. Causalidad SHAP */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-danger shadow-sm">
                  <h6 className="weight-700 mb-10 text-danger">
                    <i className="fa fa-sitemap mr-2"></i> Valores SHAP (Drivers)
                  </h6>
                  <p className="font-13 text-muted">
                    Explica la contribución individual de cada factor al resultado final de la predicción.
                  </p>
                  <ul className="font-12 pl-3 mt-2 text-secondary">
                    <li><strong>Impacto Positivo (Rojo):</strong> Factores que empujan el absentismo al alza.</li>
                    <li><strong>Impacto Negativo (Verde):</strong> Factores protectores que reducen el riesgo.</li>
                  </ul>
                </div>
              </div>

              {/* 3. Factores No Médicos */}
              <div className="col-md-12 mb-30">
                <div className="card-box pd-20 shadow-sm" style={{ borderLeft: "5px solid #f1b44c" }}>
                  <h6 className="weight-700 mb-10 text-warning">
                    <i className="fa fa-eye mr-2"></i> ¿Por qué "Factores No Médicos"?
                  </h6>
                  <p className="font-13 text-muted">
                    Analizamos variables de gestión: <strong>antigüedad, rotación de turnos, distancia al centro y carga de horas extra</strong>. Esto permite intervenir antes de que el factor derive en una baja real, garantizando la privacidad (RGPD).
                  </p>
                </div>
              </div>

              {/* 4. Glosario Técnico (Espacio Rellenado) */}
              <div className="col-md-12">
                <div className="card-box pd-20 bg-dark text-white shadow-sm">
                  <h6 className="weight-700 mb-15 text-white">
                    <i className="fa fa-book mr-2"></i> Glosario de Decisiones IA
                  </h6>
                  <div className="row">
                    <div className="col-md-4 border-right border-secondary">
                      <small className="d-block weight-700 text-info">XGBoost</small>
                      <p className="font-11 opacity-7">Algoritmo que destaca por su precisión en predecir eventos de riesgo laboral.</p>
                    </div>
                    <div className="col-md-4 border-right border-secondary">
                      <small className="d-block weight-700 text-info">Causalidad IA</small>
                      <p className="font-11 opacity-7">Diferencia entre saber "qué pasará" y "por qué pasará" para atacar la raíz del problema.</p>
                    </div>
                    <div className="col-md-4">
                      <small className="d-block weight-700 text-info">Umbral de Alerta</small>
                      <p className="font-11 opacity-7">Nivel crítico donde el forecast activa automáticamente un Playbook de Intervención.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer bg-white">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal">Entendido, ver Forecast</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModalForecast;