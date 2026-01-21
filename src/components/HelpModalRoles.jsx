import React from "react";

const HelpModalRoles = () => {
  return (
    <div className="modal fade" id="help-modal-roles" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-blue text-white">
            <h5 className="modal-title text-white">Guía de Seguridad Granular</h5>
            <button type="button" className="close text-white" data-dismiss="modal"><span>&times;</span></button>
          </div>
          <div className="modal-body pd-30">
            <div className="row">
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue"><i className="dw dw-key mr-2"></i> Control de Acciones</h6>
                  <p className="font-12 text-muted">Define quién puede solo observar y quién tiene permisos de edición o exportación de datos.</p>
                </div>
              </div>
              <div className="col-md-6 mb-30">
                <div className="card-box pd-20 height-100-p border-light">
                  <h6 className="weight-600 mb-10 text-blue"><i className="dw dw-map mr-2"></i> Alcance Geográfico</h6>
                  <p className="font-12 text-muted">Segmenta la visibilidad. Un jefe de planta solo verá los datos de su centro asignado, protegiendo la privacidad global.</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="bg-light-orange pd-20 border-radius-10">
                  <h6 className="font-14 weight-700 text-warning-dark"><i className="fa fa-shield mr-2"></i> Protección de Datos Sensibles</h6>
                  <p className="font-12 mb-0">El sistema bloquea automáticamente campos financieros y de salud personal para perfiles operativos, cumpliendo con la GDPR de forma nativa.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary rounded-pill" data-dismiss="modal">Entendido</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModalRoles;