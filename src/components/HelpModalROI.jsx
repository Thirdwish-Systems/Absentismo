import React from "react";

const HelpModalROI = () => {
  return (
    <div
      className="modal fade"
      id="help-modal-roi"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title text-white">
              <i className="fa fa-calculator mr-2"></i> Guía: Simulador de ROI y Caso de Negocio
            </h5>
            <button type="button" className="close text-white" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>

          <div className="modal-body pd-30 bg-light-gray">
            <p className="mb-30 text-secondary font-15 text-center">
              Esta herramienta permite realizar un <strong>modelado "What-if"</strong> para cuantificar el retorno económico de las estrategias preventivas sugeridas por la IA.
            </p>

            <div className="row">
              {/* 1. Simulación Dinámica */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue shadow-sm">
                  <h6 className="weight-700 mb-10 text-blue">
                    <i className="fa fa-sliders mr-2"></i> Modelado "What-if"
                  </h6>
                  <p className="font-13 text-muted">
                    Ajusta los sliders para proyectar escenarios de reducción de absentismo. El sistema recalcula instantáneamente el impacto en el margen operativo.
                  </p>
                </div>
              </div>

              {/* 2. Costes Directos e Indirectos */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-success shadow-sm">
                  <h6 className="weight-700 mb-10 text-success">
                    <i className="fa fa-money mr-2"></i> Estructura de Ahorro
                  </h6>
                  <p className="font-13 text-muted">
                    El cálculo no solo incluye salarios, sino también <strong>costes de sustitución (ETTs)</strong> y mitigación de penalizaciones por SLAs perdidos en contratos operativos.
                  </p>
                </div>
              </div>

              {/* 3. Conexión con Configuración Legal */}
              <div className="col-md-12 mb-30">
                <div className="card-box pd-20 shadow-sm" style={{ borderLeft: "5px solid #1b00ff" }}>
                  <h6 className="weight-700 mb-10 text-dark">
                    <i className="fa fa-university mr-2"></i> Base de Cálculo Financiero
                  </h6>
                  <p className="font-13 text-muted">
                    Los cálculos utilizan el <strong>Coste Medio Diario</strong> definido en el Motor de Costes (1.2), garantizando que los datos presentados a Dirección sean 100% coherentes con los convenios vigentes.
                  </p>
                </div>
              </div>

              {/* 4. Valor Estratégico */}
              <div className="col-md-12">
                <div className="card-box pd-20 bg-dark text-white shadow-sm">
                  <h6 className="weight-700 mb-10 text-white">
                    <i className="fa fa-bullseye mr-2"></i> De la Predicción a la Cuenta de Resultados
                  </h6>
                  <p className="font-13 opacity-8">
                    El objetivo de este módulo es demostrar que reducir el absentismo mediante factores no médicos (fatiga, clima, turnicidad) es una inversión rentable, no un gasto de personal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer bg-white">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal">Entendido, iniciar simulación</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModalROI;