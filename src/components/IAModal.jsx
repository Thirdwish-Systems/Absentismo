import React from "react";

const BenchmarkIAModal = () => {
  return (
    <div className="modal fade" id="benchmark-ia-modal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px', overflow: 'hidden' }}>
          
          {/* Header con gradiente similar al DataHub */}
          <div className="modal-header pd-30 text-white" style={{ background: 'linear-gradient(135deg, #1b00ff 0%, #7d33ff 100%)' }}>
            <div>
              <h5 className="modal-title text-white font-20 weight-700">
                <i className="fa fa-rocket mr-2"></i> Guía del Copiloto IA
              </h5>
              <p className="mb-0 opacity-8 text-uppercase font-10 weight-700 tracking-wider">
                Cómo interactuar con el motor predictivo
              </p>
            </div>
            <button type="button" className="close text-white" data-dismiss="modal"><span>&times;</span></button>
          </div>

          <div className="modal-body pd-30 bg-light">
            <div className="row">
              
              {/* Sección 1: Lenguaje Natural */}
              <div className="col-md-12 mb-20">
                <div className="pd-20 bg-white border-radius-15 shadow-sm border-left" style={{ borderLeft: '5px solid #1b00ff' }}>
                    <div className="d-flex align-items-center mb-10">
                        <i className="fa fa-comments text-primary font-20 mr-2"></i>
                        <h6 className="text-dark weight-700 mb-0">Habla con tus Datos</h6>
                    </div>
                    <p className="font-14 text-secondary">
                        No necesitas saber SQL. Pregunta cosas como: <em>"¿Cuál es la calidad del dato en Madrid?"</em> o <em>"Muestra las ausencias de Operaciones"</em>. El sistema entenderá tu intención y filtrará la información automáticamente.
                    </p>
                </div>
              </div>

              {/* Sección 2: Razonamiento (CoT) */}
              <div className="col-md-6 mb-20">
                <div className="card-box pd-20 height-100-p bg-white">
                    <h6 className="weight-700 font-14 mb-15 text-blue">Transparencia (CoT)</h6>
                    <p className="font-12 text-muted">
                        Cada respuesta incluye un apartado de <strong>"Razonamiento Técnico"</strong>. Ábrelo para ver los pasos lógicos que la IA ha seguido y las tablas que ha consultado para darte el resultado.
                    </p>
                    <div className="text-center mt-2">
                        <span className="badge badge-pill badge-outline-info font-10">VER RAZONAMIENTO TÉCNICO</span>
                    </div>
                </div>
              </div>

              {/* Sección 3: Acciones e Insights */}
              <div className="col-md-6 mb-20">
                <div className="card-box pd-20 height-100-p bg-dark text-white d-flex flex-column justify-content-between">
                    <div>
                        <h6 className="weight-700 font-14 mb-10 text-info">Insights Predictivos</h6>
                        <p className="font-12 opacity-8">
                            Si la IA detecta una anomalía (como un benchmark bajo), aparecerá un botón de <strong>"Ver Insights"</strong>. Púlsalo para ver el análisis profundo y el plan de acción sugerido.
                        </p>
                    </div>
                    <button className="btn btn-info btn-block rounded-pill weight-700 font-12 shadow" data-dismiss="modal">
                        ¡ENTENDIDO!
                    </button>
                </div>
              </div>

            </div>
          </div>

          <div className="modal-footer border-0 pd-20 bg-white justify-content-center">
            <p className="font-11 text-muted mb-0">
                <i className="fa fa-shield mr-1"></i> Consultas protegidas por el protocolo de seguridad del Centro de Mando.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkIAModal;