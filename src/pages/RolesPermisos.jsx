import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import RightSidebar from "../components/RightSidebar";
import HelpModalRoles from "../components/HelpModalRoles";

const RolesPermisos = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Jefe de Turno");

  useEffect(() => {
    document.body.classList.remove("login-page");
  }, []);

  const modulos = [
    { id: "dh", name: "DataHub (Fuentes)", icon: "dw-database" },
    { id: "prl", name: "Coverage PRL (Operaciones)", icon: "dw-flow-chart-1" },
    { id: "rep", name: "Reporting Studio (Finanzas)", icon: "dw-money-2" },
    { id: "ia", name: "IA Playbooks", icon: "dw-rocket" },
  ];

  const roles = ["SuperAdmin", "Director RRHH", "Jefe de Turno", "Analista Financiero"];

  return (
    <>
      <Header onSettingsClick={() => setIsRightSidebarOpen(true)} />
      <RightSidebar
        isOpen={isRightSidebarOpen}
        setIsOpen={setIsRightSidebarOpen}
      />
      <LeftSideBar />

      {/* Contenedor principal con flexbox para fijar el footer abajo */}
      <div className="main-container d-flex flex-column" style={{ minHeight: "100vh" }}>
        <div className="pd-ltr-20 flex-grow-1">
          
          {/* HEADER DE PÁGINA */}
          <div className="page-header mt-0 mb-30 shadow-sm d-flex justify-content-between align-items-center pd-20 bg-white border-radius-10">
            <div>
              <h4 className="text-blue">Gestión de Roles y Seguridad</h4>
              <p className="mb-0 text-muted">
                Control granular de acceso y visibilidad por perfil.
              </p>
            </div>
            <div className="btn-list">
              <button
                className="btn btn-primary btn-sm rounded-pill mr-2 shadow-sm"
                data-toggle="modal"
                data-target="#help-modal-roles"
              >
                <i className="fa fa-info-circle mr-2"></i> Guía Seguridad
              </button>
              <button className="btn btn-success btn-sm rounded-pill shadow-sm">
                <i className="fa fa-save mr-2"></i> Guardar Cambios
              </button>
            </div>
          </div>

          <div className="row">
            {/* SELECTOR DE PERFIL */}
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm border-radius-10">
                <h5 className="h5 text-blue mb-20">Configuración de Perfil</h5>
                
                <div className="form-group">
                  <label className="weight-600">Seleccionar Rol</label>
                  <select 
                    className="form-control rounded-pill" 
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    {roles.map(rol => <option key={rol}>{rol}</option>)}
                  </select>
                </div>

                <div className="form-group mt-30">
                  <label className="weight-600">Alcance Geográfico / Org.</label>
                  <div className="pd-10 border border-radius-10 bg-light">
                    {["Planta Norte", "Centro Logístico", "Oficinas Centrales"].map(loc => (
                      <div key={loc} className="custom-control custom-checkbox mb-2">
                        <input 
                          type="checkbox" 
                          className="custom-control-input" 
                          id={loc} 
                          defaultChecked={loc === "Planta Norte"} 
                        />
                        <label className="custom-control-label font-12" htmlFor={loc}>{loc}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="alert bg-light-blue border-radius-10 mt-30 shadow-sm">
                  <small className="text-blue weight-700 d-block mb-1 text-uppercase">Nota de Seguridad:</small>
                  <p className="font-12 mb-0">
                    Controla que un jefe de turno vea datos de su equipo pero no los salarios.
                  </p>
                </div>
              </div>
            </div>

            {/* MATRIZ DE PERMISOS */}
            <div className="col-xl-8 col-lg-8 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm border-radius-10">
                <div className="d-flex justify-content-between align-items-center mb-20">
                  <h5 className="h5 text-blue">Matriz de Acciones: {selectedRole}</h5>
                  <span className="badge badge-pill badge-outline-primary">Acceso Granular</span>
                </div>
                
                <div className="table-responsive">
                  <table className="table stripe hover nowrap">
                    <thead>
                      <tr className="bg-light text-muted">
                        <th className="table-plus">Módulo</th>
                        <th className="text-center">Ver</th>
                        <th className="text-center">Editar</th>
                        <th className="text-center">Exportar</th>
                        <th className="text-center">Sensible</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modulos.map((mod) => (
                        <tr key={mod.id}>
                          <td>
                            <div className="weight-600 font-14">
                              <i className={`dw ${mod.icon} mr-2 text-blue`}></i> {mod.name}
                            </div>
                          </td>
                          <td className="text-center">
                            <input type="checkbox" defaultChecked />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" defaultChecked={mod.id === "prl"} />
                          </td>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">
                            <i className={`fa ${mod.id === "rep" ? "fa-lock text-danger" : "fa-unlock text-muted"}`}></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-20 pd-20 border-radius-10 bg-dark text-white shadow">
                  <h6 className="text-white font-14 mb-2">
                    <i className="dw dw-eye mr-2"></i> Vista Previa del Perfil: {selectedRole}
                  </h6>
                  <p className="font-12 opacity-7 mb-0">
                    {selectedRole === "Jefe de Turno" 
                      ? "Operaciones ve coberturas, pero Finanzas ve ahorro." 
                      : "RRHH ve todos los drivers y comportamientos."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer siempre al fondo */}
        <Footer />
      </div>

      <HelpModalRoles />
    </>
  );
};

export default RolesPermisos;