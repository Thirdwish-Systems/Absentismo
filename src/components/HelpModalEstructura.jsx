import React from "react";

const HelpModalEstructura = () => {
  return (
    <div
      className="modal fade"
      id="help-modal-estructura"
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
              <i className="dw dw-diagram mr-2"></i> Guía de Asignación
              Organizativa
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
              Esta pantalla vincula a las personas con su contexto laboral. Es
              la base para que la IA pueda comparar resultados entre centros.
            </p>
            <div className="row">
              {/* Bloque 1: Jerarquía */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue shadow-sm">
                  <h6 className="weight-700 text-blue mb-10">
                    <i className="fa fa-sitemap mr-2"></i> Árbol Jerárquico
                  </h6>
                  <p className="font-13 text-muted">
                    Representa la estructura real de centros y departamentos.
                  </p>
                  <ul className="font-12 pl-3 mt-2 text-secondary">
                    <li>
                      Los costes y reglas se <strong>heredan</strong> de los
                      niveles superiores a menos que se definan específicamente
                      en el centro.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bloque 2: Agrupaciones */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-success shadow-sm">
                  <h6 className="weight-700 text-success mb-10">
                    <i className="fa fa-tags mr-2"></i> Agrupaciones Lógicas
                  </h6>
                  <p className="font-13 text-muted">
                    Es la pieza clave para el <strong>Benchmark</strong>.
                  </p>
                  <p className="font-12 text-secondary">
                    Permite agrupar centros por "naturaleza" (ej: Tiendas de
                    Costa) para que la IA compare centros similares aunque estén
                    en provincias distintas.
                  </p>
                </div>
              </div>

              {/* Bloque 3: Importancia del Turno */}
              <div className="col-md-12">
                <div
                  className="card-box pd-20 shadow-sm border-left"
                  style={{ borderLeft: "5px solid #ffab00" }}
                >
                  <h6 className="weight-700 mb-10 text-dark">
                    <i className="fa fa-clock-o mr-2"></i> ¿Por qué asignar
                    Turnos y Costes?
                  </h6>
                  <p className="font-14 text-muted">
                    La IA analiza patrones de <strong>fatiga por turno</strong>{" "}
                    (Mañana/Tarde/Noche). Sin esta asignación, el Forecast
                    predictivo perderá un 40% de precisión.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {/* CORRECCIÓN: Eliminada la barra invertida en data-dismiss */}
            <button
              type="button"
              className="btn btn-primary btn-block"
              data-dismiss="modal"
            >
              Entendido, configurar estructura
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModalEstructura;
