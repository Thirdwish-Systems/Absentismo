import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import HelpModalEstructura from "../components/HelpModalEstructura";

// IMPORTACIÓN DE DATOS
import { treeData, empleadosData as initialData } from "../data/estructuraData";

const Estructura = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [empleados, setEmpleados] = useState(initialData);

  useEffect(() => {
    document.body.classList.remove("login-page");

    const initDataTable = () => {
      if (window.$ && window.$.fn.DataTable) {
        if (window.$.fn.DataTable.isDataTable(".data-table-export")) {
          window.$(".data-table-export").DataTable().destroy();
        }

        window.$(".data-table-export").DataTable({
          scrollCollapse: true,
          autoWidth: false,
          responsive: true,
          columnDefs: [{ targets: "datatable-nosort", orderable: false }],
          lengthMenu: [
            [5, 10, 25, -1],
            [5, 10, 25, "Todos"],
          ],
          language: {
            info: "_START_-_END_ de _TOTAL_ empleados",
            searchPlaceholder: "Filtrar empleados...",
            paginate: {
              next: '<i class="ion-chevron-right"></i>',
              previous: '<i class="ion-chevron-left"></i>',
            },
          },
        });
      }
    };

    const timeoutId = setTimeout(initDataTable, 150);
    return () => clearTimeout(timeoutId);
  }, [empleados]);

  // Lógica de Salud IA para la tabla
  const getSaludTemplate = (emp) => {
    if (!emp.turno || emp.turno === "") {
      return (
        <span className="weight-700 text-danger">
          <i className="fa fa-circle mr-1"></i> Incompleto
        </span>
      );
    }
    if (!emp.coste || emp.coste === "€0") {
      return (
        <span className="weight-700 text-warning">
          <i className="fa fa-exclamation-circle mr-1"></i> Revisar Coste
        </span>
      );
    }
    return (
      <span className="weight-700 text-success">
        <i className="fa fa-check-circle mr-1"></i> Óptimo
      </span>
    );
  };

  const renderTree = (nodes) => (
    <ul className="pl-3 mt-2 list-unstyled">
      {nodes.map((node) => (
        <li key={node.id} className="mb-2">
          <div
            className="d-flex align-items-center p-2 border-radius-5 bg-light-gray hover-shadow cursor-pointer"
            style={{ marginRight: "8px" }}
          >
            <i
              className={`fa ${node.children ? "fa-folder-open text-warning" : "fa-building text-primary"} mr-2`}
            ></i>
            <span
              className="weight-600 font-14 text-truncate"
              style={{ maxWidth: "75%" }}
            >
              {node.name}
            </span>
            <div className="ml-auto pr-1">
              <button className="btn btn-sm p-0 text-blue">
                <i className="dw dw-edit2"></i>
              </button>
            </div>
          </div>
          {node.children && renderTree(node.children)}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Header onSettingsClick={() => setIsRightSidebarOpen(true)} />
      <RightSidebar
        isOpen={isRightSidebarOpen}
        setIsOpen={setIsRightSidebarOpen}
      />
      <LeftSideBar />

      <div className="main-container">
        <div className="pd-ltr-20">
          <div className="page-header mt-0 mb-30 shadow-sm d-flex justify-content-between align-items-center pd-20 bg-white border-radius-10">
            <div>
              <h4 className="text-blue">
                1.3 Estructura y Asignación Organizativa
              </h4>
              <p className="mb-0 text-muted">
                Vínculo de empleados, turnos y costes para el motor de IA.
              </p>
            </div>
            {/* BOTÓN PARA ABRIR EL MODAL DE AYUDA */}
            <div className="btn-list">
              <button
                className="btn btn-outline-primary btn-sm rounded-pill shadow-sm"
                data-toggle="modal"
                data-target="#help-modal-estructura"
              >
                <i className="fa fa-info-circle mr-2"></i> Ayuda Estructura
              </button>
            </div>
          </div>

          <div className="row">
            {/* PANEL IZQUIERDO: TREE VIEW */}
            <div className="col-xl-4 col-lg-4 mb-30">
              <div
                className="card-box pd-20 height-100-p shadow-sm border-top"
                style={{ borderTop: "4px solid #1b00ff" }}
              >
                <h5 className="h5 text-blue mb-20">Jerarquía de Centros</h5>
                <div
                  className="custom-tree-view customscroll"
                  style={{
                    maxHeight: "500px",
                    overflowY: "auto",
                    paddingRight: "5px",
                  }}
                >
                  {renderTree(treeData)}
                </div>
              </div>
            </div>

            {/* PANEL DERECHO: DATATABLE */}
            <div className="col-xl-8 col-lg-8 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm">
                <div className="pb-20">
                  <h5 className="h5 text-blue">Plantilla Asignada</h5>
                </div>

                <div className="table-responsive">
                  <table className="data-table-export table hover multiple-select-row nowrap">
                    <thead>
                      <tr>
                        <th className="table-plus">Salud IA</th>
                        <th>Empleado</th>
                        <th>Centro Actual</th>
                        <th>Turno</th>
                        <th>Coste Bruto</th>
                        <th className="datatable-nosort">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {empleados.map((emp) => (
                        <tr key={emp.id}>
                          <td className="table-plus">
                            {getSaludTemplate(emp)}
                          </td>
                          <td>
                            <div className="weight-600">{emp.nombre}</div>
                            <span className="badge badge-pill badge-outline-secondary font-10">
                              {emp.tag}
                            </span>
                          </td>
                          <td>{emp.centro}</td>
                          <td>
                            {emp.turno ? (
                              <span
                                className={`badge badge-pill badge-outline-primary`}
                              >
                                {emp.turno}
                              </span>
                            ) : (
                              <span className="text-danger small italic">
                                No asignado
                              </span>
                            )}
                          </td>
                          <td>
                            <div className="weight-700 text-blue">
                              {emp.coste || "€0"}
                            </div>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-link text-blue p-0">
                              <i className="dw dw-edit2"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      {/* COMPONENTE DEL MODAL DE AYUDA */}
      <HelpModalEstructura />
    </>
  );
};

export default Estructura;
