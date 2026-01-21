import React from "react";

const HelpModalReporting = () => {
  return (
    <div
      className="modal fade"
      id="help-modal-reporting"
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
              Guía de Reporting & Evidencia de Impacto
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
              El <strong>Reporting Studio</strong> transforma los datos en evidencia económica, permitiendo comparar el rendimiento real frente al grupo de control.
            </p>
            <div className="row">
              {/* Sección 1: Foto del Ahorro */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-money-2 mr-2"></i> Foto del Ahorro
                    <span className="badge badge-success float-right">ROI</span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Resumen ejecutivo para el comité mensual.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">Propósito:</strong>
                    Cuantifica en euros la reducción del gasto gracias a la intervención temprana y la optimización de relevos.
                  </div>
                </div>
              </div>

              {/* Sección 2: Grupo Control vs IA */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-balance mr-2"></i> Grupo Control vs. IA
                    <span className="badge badge-info float-right">Evidencia</span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Comparativa científica de efectividad.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">Cómo leerlo:</strong>
                    Compara centros con Playbooks activos vs. centros con gestión tradicional para aislar el impacto real de la herramienta.
                  </div>
                </div>
              </div>

              {/* Sección 3: Duración Media */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-fast-forward-1 mr-2"></i> Duración de Bajas
                    <span className="badge badge-primary float-right">KPI</span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Efectividad del acompañamiento.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">Interpretación:</strong>
                    Un descenso en este porcentaje indica que las medidas preventivas y de retorno están funcionando con éxito.
                  </div>
                </div>
              </div>

              {/* Sección 4: Distribución Automatizada */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-share-alt mr-2"></i> Envío a Destinatarios
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Automatización del flujo de comunicación.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">Configuración:</strong>
                    Define quién recibe el informe (HR, Gerencia, Finanzas) para asegurar que la evidencia llegue a los tomadores de decisiones.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary rounded-pill"
              data-dismiss="modal"
            >
              Entendido, ver reportes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModalReporting;