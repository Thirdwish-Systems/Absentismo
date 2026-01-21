import React from "react";

const ErrorLogModal = () => {
  const logs = [
    {
      id: 1,
      type: "error",
      msg: "Fallo en conexión API SAP SuccessFactors",
      time: "Hace 10 min",
      icon: "fa-times-circle",
    },
    {
      id: 2,
      type: "success",
      msg: "Sincronización Workday completada (452 registros)",
      time: "Hace 2h",
      icon: "fa-check-circle",
    },
    {
      id: 3,
      type: "warning",
      msg: "Excel: Columna 'Departamento' con formatos inconsistentes",
      time: "Hace 5h",
      icon: "fa-exclamation-triangle",
    },
    {
      id: 4,
      type: "success",
      msg: "Actualización Active Directory OK",
      time: "Ayer, 18:30",
      icon: "fa-check-circle",
    },
  ];

  return (
    <div
      className="modal fade"
      id="error-log-modal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title text-white">
              <i className="dw dw-list3 mr-2"></i> Historial de Ingesta
            </h5>
            <button
              type="button"
              className="close text-white"
              data-dismiss="modal"
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body pd-0">
            <div className="list-group list-group-flush">
              {logs.map((log) => (
                <div key={log.id} className="list-group-item pd-20">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i
                        className={`fa ${log.icon} font-20 mr-3 ${log.type === "error" ? "text-danger" : log.type === "warning" ? "text-warning" : "text-success"}`}
                      ></i>
                      <div>
                        <div className="weight-600 font-14">{log.msg}</div>
                        <small className="text-muted">{log.time}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorLogModal;
