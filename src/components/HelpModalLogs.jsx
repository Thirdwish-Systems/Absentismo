import React from "react";

const HelpModalLogs = () => {
  return (
    <div className="modal fade" id="help-modal-logs" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title text-white"><i className="fa fa-shield mr-2"></i> Centro de Cumplimiento Legal</h5>
            <button type="button" className="close text-white" data-dismiss="modal"><span>&times;</span></button>
          </div>
          <div className="modal-body pd-30">
            <div className="row">
              <div className="col-md-6 mb-20">
                <h6 className="text-blue weight-700">Trazabilidad RGPD</h6>
                <p className="font-13 text-muted">Cada vez que un usuario consulta una baja médica o dato sensible, el sistema genera una huella digital imborrable.</p>
              </div>
              <div className="col-md-6 mb-20">
                <h6 className="text-blue weight-700">Auditoría Financiera</h6>
                <p className="font-13 text-muted">Cualquier cambio en las fórmulas de cálculo de ahorro queda registrado para revisiones de contabilidad.</p>
              </div>
            </div>
            <div className="alert bg-light-danger pd-15 border-radius-10">
              <small className="text-danger weight-700 d-block mb-1 text-uppercase">Advertencia Legal:</small>
              <p className="font-12 mb-0">Este log cumple con la normativa de auditoría técnica. Los registros no pueden ser eliminados ni modificados por ningún perfil de usuario.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModalLogs;