import React from "react";

const HelpModalLegal = () => {
  return (
    <div
      className="modal fade"
      id="help-modal-legal"
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
              <i className="dw dw-balance mr-2"></i> Guía: Configuración del
              Motor de Costes
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
              Esta pantalla es el <strong>corazón financiero</strong> del
              sistema. Define cómo calculamos el impacto económico y qué datos
              debe procesar la IA.
            </p>

            <div className="row">
              {/* 1. Convenios y Plantillas */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue shadow-sm">
                  <h6 className="weight-700 mb-10 text-blue">
                    <i className="fa fa-briefcase mr-2"></i> Plantillas de
                    Convenio
                  </h6>
                  <p className="font-13 text-muted">
                    Permite cargar configuraciones legales predefinidas según tu
                    sector (Metal, Comercio, etc.).
                  </p>
                  <div className="bg-light pd-10 border-radius-5 font-11">
                    <i className="fa fa-lightbulb-o text-warning mr-1"></i>
                    <strong>Tip:</strong> Al cargar una plantilla, se actualizan
                    los tramos de SS y complementos automáticamente, pero puedes
                    ajustarlos manualmente después.
                  </div>
                </div>
              </div>

              {/* 2. Toggles de Exclusión */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-danger shadow-sm">
                  <h6 className="weight-700 mb-10 text-danger">
                    <i className="fa fa-filter mr-2"></i> Exclusiones (KPI
                    Gestionable)
                  </h6>
                  <p className="font-13 text-muted">
                    Define qué motivos de ausencia son "responsabilidad" de la
                    empresa.
                  </p>
                  <ul className="font-12 pl-3 mt-2 text-secondary">
                    <li>
                      <strong>Activado:</strong> El motivo suma al índice de
                      absentismo.
                    </li>
                    <li>
                      <strong>Desactivado:</strong> Se excluye del análisis (ej:
                      Maternidad).
                    </li>
                    <li>
                      <em>
                        Esto asegura que los objetivos de los managers sean
                        realistas.
                      </em>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Tramos y Complementos */}
              <div className="col-md-12 mb-30">
                <div
                  className="card-box pd-20 shadow-sm"
                  style={{ borderLeft: "5px solid #28a745" }}
                >
                  <h6 className="weight-700 mb-10 text-success">
                    <i className="fa fa-list-ol mr-2"></i> Tramos de IT y Carga
                    de Empresa
                  </h6>
                  <div className="row">
                    <div className="col-md-7 border-right">
                      <p className="font-13 text-muted">
                        Configura el porcentaje de salario que la empresa asume
                        en cada fase de la baja:
                      </p>
                      <div className="bg-light pd-10 border-radius-5 font-11 mt-2">
                        <strong>Fórmula de Coste:</strong> (Salario - % Pago SS)
                        + % Complemento Empresa.
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="pd-10">
                        <small className="d-block mb-1">
                          Visualización de impacto:
                        </small>
                        <div
                          className="progress mt-1"
                          style={{ height: "10px" }}
                        >
                          <div
                            className="progress-bar bg-danger"
                            style={{ width: "60%" }}
                          ></div>
                          <div
                            className="progress-bar bg-warning"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                        <span className="font-10 text-muted">
                          Barra Roja/Naranja: Indica la carga económica real.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. ROI y Simulación */}
              <div className="col-md-12">
                <div className="card-box pd-20 bg-dark text-white shadow-sm">
                  <h6 className="weight-700 mb-10 text-white">
                    <i className="fa fa-calculator mr-2"></i> ROI: El valor del
                    dato
                  </h6>
                  <p className="font-13 opacity-8">
                    El <strong>Coste Medio Diario</strong> es el multiplicador
                    que usa la IA para decirte cuánto dinero estás perdiendo por
                    cada punto de absentismo. Un ajuste preciso aquí hace que
                    los informes para dirección sean 100% fiables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer bg-white">
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
              Entendido, ir a configurar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModalLegal;
