import React from "react";

const HelpModalAlertas = () => {
  return (
    <div className="modal fade" id="help-modal-alertas" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-blue text-white">
            <h5 className="modal-title text-white">Guía de Gestión de Ruido</h5>
            <button type="button" className="close text-white" data-dismiss="modal"><span>&times;</span></button>
          </div>
          <div className="modal-body pd-30">
            <div className="row">
              <div className="col-md-6 mb-20">
                <h6 className="text-blue weight-700"><i className="fa fa-bell-slash mr-2"></i> Fatiga de Alertas</h6>
                <p className="font-13 text-muted">Ajusta el umbral para que el sistema aprenda qué es una "desviación normal" y qué es un riesgo real.</p>
              </div>
              <div className="col-md-6 mb-20">
                <h6 className="text-blue weight-700"><i className="fa fa-plug mr-2"></i> Webhooks Integrados</h6>
                <p className="font-13 text-muted">Conecta las alertas directamente con los canales donde tu equipo ya trabaja (Teams/Slack).</p>
              </div>
            </div>
            <div className="bg-light pd-20 border-radius-10">
              <p className="mb-0 font-12 text-secondary italic">
                <strong>Consejo PRO:</strong> Un umbral del 20% es el estándar óptimo para evitar notificaciones de falsos positivos en centros de más de 50 empleados.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary rounded-pill" data-dismiss="modal">Configurar Umbrales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModalAlertas;