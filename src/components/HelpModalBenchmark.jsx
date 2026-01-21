import React from "react";

const HelpModalBenchmark = () => {
  return (
    <div
      className="modal fade"
      id="help-modal-benchmark"
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
              <i className="fa fa-info-circle mr-2"></i> Guía del Benchmark del
              Sector
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
              Este módulo permite comparar el{" "}
              <strong>desempeño de tu empresa</strong> frente a la media real
              del mercado, utilizando datos normalizados por zona y actividad.
            </p>

            <div className="row">
              {/* Sección 1: Normalización */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue shadow-sm">
                  <h6 className="weight-700 mb-10 text-blue">
                    <i className="fa fa-balance-scale mr-2"></i> Normalización
                    (100 Emp.)
                  </h6>
                  <p className="font-14 text-muted">
                    Para que la comparación sea justa, calculamos la tasa de
                    absentismo por cada 100 empleados.
                  </p>
                  <div className="pd-10 border-radius-5 bg-white border mt-10">
                    <small className="text-muted d-block italic">
                      Esto permite comparar una planta de 50 trabajadores con
                      una de 2.000 sin sesgos por tamaño.
                    </small>
                  </div>
                </div>
              </div>

              {/* Sección 2: Segmentación */}
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-blue shadow-sm">
                  <h6 className="weight-700 mb-10 text-blue">
                    <i className="fa fa-map-marker mr-2"></i> Filtros de Mercado
                  </h6>
                  <p className="font-14 text-muted">
                    Los datos del sector se segmentan por{" "}
                    <strong>Provincia</strong> y <strong>CNAE</strong>.
                  </p>
                  <ul className="font-12 mt-10 text-muted pl-3">
                    <li>Tendencias geográficas específicas.</li>
                    <li>Riesgos intrínsecos de cada actividad laboral.</li>
                    <li>Actualización mensual de fuentes oficiales.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sección Inferior: Leyenda de Colores */}
            <div className="row">
              <div className="col-md-12">
                <div className="card-box pd-20 border-blue shadow-sm bg-white">
                  <h6 className="weight-700 mb-15 text-blue">
                    <i className="fa fa-check-square-o mr-2"></i> Indicadores de
                    Desviación
                  </h6>
                  <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                      <span className="badge badge-pill badge-danger px-3 py-2 mb-2">
                        Déficit Crítico
                      </span>
                      <p className="font-11 text-muted">
                        Tasa superior a la media del sector.
                      </p>
                    </div>
                    <div className="col-md-8 border-left">
                      <p className="font-13 mb-0">
                        Si tu barra es <strong>roja</strong>, significa que
                        estás perdiendo competitividad frente a tus rivales
                        directos en esa categoría.
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

export default HelpModalBenchmark;
