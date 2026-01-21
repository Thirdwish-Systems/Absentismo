import React from "react";

const HelpModalPRL = () => {
  return (
    <div
      className="modal fade"
      id="help-modal-prl"
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
              Guía de Continuidad & Redundancia PRL
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
              Esta pantalla permite gestionar la <strong>resiliencia operativa</strong> asegurando que cada puesto crítico tenga un respaldo certificado.
            </p>
            <div className="row">
              {/* Sección 1: Matriz */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-table mr-2"></i> Matriz de Habilidades
                    <span className="badge badge-primary float-right">Certificaciones</span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Visualiza quién está capacitado para cada tarea técnica.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">Leyenda:</strong>
                    <span className="text-success">● Check verde:</span> Certificación activa y vigente.
                    <br />
                    <span className="text-muted">● Círculo vacío:</span> Sin capacitación en esa área.
                  </div>
                </div>
              </div>

              {/* Sección 2: Simulador */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-rocket-1 mr-2"></i> Simulador de Ausencia
                    <span className="badge badge-info float-right">Análisis IA</span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Calcula el impacto económico de una baja inesperada.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">Acción:</strong>
                    Haz clic en cualquier empleado para ver si el sistema detecta un <strong>backup disponible</strong> o si el nodo quedaría bloqueado.
                  </div>
                </div>
              </div>

              {/* Sección 3: Factor Fatiga */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-warning mr-2"></i> Riesgo por Fatiga
                    <span className="badge badge-danger float-right">Preventivo</span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Monitorización de carga de trabajo y horas extra.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">Alertas:</strong>
                    <span className="text-danger">● menor de 80%:</span> Riesgo alto de accidente o error humano.
                    <br />
                    <span className="text-warning">● 60-80%:</span> Fatiga moderada. Se recomienda rotación.
                  </div>
                </div>
              </div>

              {/* Sección 4: Nodos Críticos */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue">
                  <h6 className="weight-600 mb-10 text-blue">
                    <i className="dw dw-logic mr-2"></i> Estado "Único"
                    <span className="badge badge-warning float-right">Crítico</span>
                  </h6>
                  <p className="font-14 text-muted mb-10">
                    Identifica empleados que no tienen relevo.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12">
                    <strong className="d-block mb-1 text-dark">Prioridad 1:</strong>
                    Estos puestos requieren un <strong>Plan de Relevo Externo</strong> o formación urgente de compañeros.
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
              Entendido, gestionar cobertura
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModalPRL;