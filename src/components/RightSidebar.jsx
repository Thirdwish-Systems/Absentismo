import React from "react";

const RightSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`right-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-title">
        <h3 className="weight-600 font-16 text-blue">
          Configuración del Sistema
          <span className="btn-block font-weight-400 font-12">
            Gestión de la aplicación
          </span>
        </h3>
        <div className="close-sidebar" onClick={() => setIsOpen(false)}>
          <i className="icon-copy ion-close-round"></i>
        </div>
      </div>

      <div className="right-sidebar-body customscroll">
        <div className="right-sidebar-body-content">
          {/* SECCIÓN: GESTIÓN DE ABSENTISMO */}
          <h4 className="uppercase font-14 pb-10">Parámetros de Absentismo</h4>
          <div className="settings-list">
            <div className="form-group mb-10">
              <label className="font-14">Umbral de Alerta (%)</label>
              <input
                type="number"
                className="form-control form-control-sm"
                defaultValue="15"
              />
              <small className="form-text text-muted">
                Aviso automático al superar este porcentaje.
              </small>
            </div>
            <div className="custom-control custom-checkbox mb-5">
              <input
                type="checkbox"
                className="custom-control-input"
                id="autoReport"
                defaultChecked
              />
              <label
                className="custom-control-label font-14"
                htmlFor="autoReport"
              >
                Generar reporte mensual automático
              </label>
            </div>
          </div>

          <hr />

          {/* SECCIÓN: NOTIFICACIONES CRÍTICAS */}
          <h4 className="uppercase font-14 pb-10">Alertas de Correo</h4>
          <div className="settings-list">
            <div className="custom-control custom-checkbox mb-10">
              <input
                type="checkbox"
                className="custom-control-input"
                id="notifAdmin"
                defaultChecked
              />
              <label
                className="custom-control-label font-14"
                htmlFor="notifAdmin"
              >
                Notificar bajas de larga duración
              </label>
            </div>
            <div className="custom-control custom-checkbox mb-10">
              <input
                type="checkbox"
                className="custom-control-input"
                id="notifReview"
              />
              <label
                className="custom-control-label font-14"
                htmlFor="notifReview"
              >
                Recordatorio de revisión médica
              </label>
            </div>
          </div>

          <hr />

          {/* SECCIÓN: DATOS Y SEGURIDAD */}
          <h4 className="uppercase font-14 pb-10">Base de Datos</h4>
          <div className="settings-list">
            <button className="btn btn-outline-info btn-sm btn-block mb-10">
              <i className="dw dw-download"></i> Exportar Datos (Excel)
            </button>
            <button className="btn btn-outline-warning btn-sm btn-block mb-10">
              <i className="dw dw-file-3"></i> Crear Backup de Seguridad
            </button>
          </div>

          <hr />

          {/* SECCIÓN: MANTENIMIENTO Y SOPORTE (Sustituye a Sesión) */}
          <h4 className="uppercase font-14 pb-10">Mantenimiento</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-0 py-2 border-0 d-flex justify-content-between align-items-center">
              <span className="font-14 text-dark">
                <i className="dw dw-analytics-21 mr-2 text-primary"></i> Estado
                Servidor
              </span>
              <span className="badge badge-pill badge-success">Online</span>
            </li>

            <li className="list-group-item px-0 py-2 border-0">
              <a href="#" className="text-dark font-14">
                <i className="dw dw-file-31 mr-2 text-primary"></i> Registro de
                Logs
              </a>
            </li>

            <li className="list-group-item px-0 py-2 border-0">
              <a href="#" className="text-dark font-14">
                <i className="dw dw-help mr-2 text-primary"></i> Soporte Técnico
                IT
              </a>
            </li>

            <li className="list-group-item px-0 py-2 border-0 mt-2">
              <div className="bg-light pd-10 border-radius-4">
                <p className="font-12 mb-0 text-muted">
                  Versión de App: <strong>1.0.4-stable</strong>
                </p>
                <p className="font-12 mb-0 text-muted">
                  Último backup: <strong>Hoy, 04:30 AM</strong>
                </p>
              </div>
            </li>
          </ul>

          <div className="pt-30 text-center">
            <button
              className="btn btn-primary btn-block"
              onClick={() => setIsOpen(false)}
            >
              Aplicar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
