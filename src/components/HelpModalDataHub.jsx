import React from "react";

const HelpModalDataHub = () => {
  return (
    <div
      className="modal fade"
      id="help-modal-datahub"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title text-white">
              <i className="dw dw- library mr-2"></i> Guía del Centro de Mando
              de Datos
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
              Este módulo centraliza la{" "}
              <strong>ingesta y calidad de la información</strong> necesaria
              para que los modelos de IA y Machine Learning generen predicciones
              precisas.
            </p>

            <div className="row">
              {/* Sección 1: Conectores */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue shadow-sm">
                  <h6 className="weight-700 mb-10 text-blue">
                    <i className="fa fa-plug mr-2"></i> Ecosistema de Conectores
                  </h6>
                  <p className="font-14 text-muted">
                    Gestiona las fuentes de datos (SAP, Workday, Excel).
                  </p>
                  <ul className="font-12 pl-3 mt-2 text-secondary">
                    <li>
                      <strong>Sync %:</strong> Progreso de la última carga
                      masiva.
                    </li>
                    <li>
                      <strong>Estado Óptimo:</strong> Conexión activa y datos
                      actualizados.
                    </li>
                    <li>
                      <strong>Caducado:</strong> Requiere actualización manual
                      de archivos.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sección 2: Calidad */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-success shadow-sm">
                  <h6 className="weight-700 mb-10 text-success">
                    <i className="dw dw-analytics-11 mr-2"></i> Salud Global
                    (88%)
                  </h6>
                  <p className="font-14 text-muted">
                    Métrica de fiabilidad de los datos importados.
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-12 border">
                    <span className="text-danger">● Críticos:</span> Campos
                    obligatorios vacíos (Ej: Fechas).
                    <br />
                    <span className="text-warning">● Avisos:</span> Datos fuera
                    de rango o inconsistencias leves.
                  </div>
                </div>
              </div>

              {/* Sección 3: Mapeo IA */}
              <div className="col-md-12">
                <div
                  className="card-box pd-20 shadow-sm"
                  style={{ borderLeft: "5px solid #1b00ff" }}
                >
                  <h6 className="weight-700 mb-10 text-dark">
                    <i className="dw dw-logic mr-2"></i> Mapeo y Dependencias IA
                  </h6>
                  <p className="font-14 text-muted">
                    Aquí se asocian los campos de tu base de datos con las
                    variables que el algoritmo de absentismo utiliza.
                  </p>
                  <div className="row mt-15">
                    <div className="col-md-4">
                      <div className="pd-10 border-radius-5 bg-white border text-center">
                        <small className="d-block text-muted">Impacto IA</small>
                        <strong className="text-danger">Alta / Crítica</strong>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <p className="font-12 mt-1">
                        Si una variable con impacto <strong>"Alta"</strong> está
                        en estado <strong>"BLOQUEADO"</strong>, las predicciones
                        de absentismo para ese colectivo no serán visibles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer bg-white">
            <button
              className="btn btn-outline-danger mr-auto"
              data-toggle="modal"
              data-target="#error-log-modal"
              data-dismiss="modal"
            >
              <i className="fa fa-bug mr-2"></i> Ver Historial de Errores
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
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

export default HelpModalDataHub;
