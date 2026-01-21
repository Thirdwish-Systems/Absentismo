import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import HelpModal from "../components/HelpModal";

// Importamos los datos externos
import { alarmasData } from "../data/alarmasData";

const Alarmas = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  // 1. Ordenamos los datos: las fechas más recientes primero
  const alarmasOrdenadas = [...alarmasData].sort((a, b) => {
    return (
      new Date(b.fecha.split("/").reverse().join("-")) -
      new Date(a.fecha.split("/").reverse().join("-"))
    );
  });

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
          // 2. Configuración de orden por defecto en DataTable (Columna 4 es "Fecha", índice 4)
          // "desc" para que las fechas más recientes (mayores) salgan primero
          order: [[4, "desc"]],
          columnDefs: [
            {
              targets: "datatable-nosort",
              orderable: false,
            },
          ],
          lengthMenu: [
            [5, 10, 15, 20, -1],
            [5, 10, 15, 20, "Todos"],
          ],
          language: {
            info: "_START_-_END_ de _TOTAL_ registros",
            searchPlaceholder: "Buscar...",
            lengthMenu: "Mostrar _MENU_ entradas",
            paginate: {
              next: '<i class="ion-chevron-right"></i>',
              previous: '<i class="ion-chevron-left"></i>',
            },
          },
          dom: "lBfrtip",
          buttons: ["copy", "csv", "pdf", "print"],
        });
      }
    };

    const timeoutId = setTimeout(initDataTable, 200);

    return () => {
      clearTimeout(timeoutId);
      if (
        window.$ &&
        window.$.fn.DataTable &&
        window.$.fn.DataTable.isDataTable(".data-table-export")
      ) {
        window.$(".data-table-export").DataTable().destroy(true);
      }
    };
  }, []);

  const getBadgeClass = (prioridad) => {
    switch (prioridad) {
      case "Crítica":
        return "badge-danger";
      case "Alta":
        return "badge-warning";
      case "Media":
        return "badge-info";
      default:
        return "badge-secondary";
    }
  };

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
              <h4 className="text-blue">Gestión de Alarmas</h4>
              <p className="mb-0">
                Panel de control de incidencias con exportación completa.
              </p>
            </div>
          </div>

          <div className="card-box mb-30">
            <div className="pd-20"></div>
            <div className="pb-20">
              <table className="table stripe hover data-table-export nowrap">
                <thead>
                  <tr>
                    <th className="table-plus datatable-nosort">Tipo</th>
                    <th>Descripción</th>
                    <th>Empleado</th>
                    <th>Prioridad</th>
                    <th>Fecha</th> {/* Índice 4 */}
                    <th className="datatable-nosort">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 3. Usamos la lista ordenada */}
                  {alarmasOrdenadas.map((alarma) => (
                    <tr key={alarma.id}>
                      <td className="table-plus">
                        <div className="weight-600">{alarma.tipo}</div>
                      </td>
                      <td style={{ whiteSpace: "normal", maxWidth: "300px" }}>
                        {alarma.descripcion}
                      </td>
                      <td>{alarma.empleado}</td>
                      <td>
                        <span
                          className={`badge badge-pill ${getBadgeClass(alarma.prioridad)}`}
                        >
                          {alarma.prioridad}
                        </span>
                      </td>
                      <td>{alarma.fecha}</td>
                      <td>
                        <div className="dropdown">
                          <a
                            className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                          >
                            <i className="dw dw-more"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                            <a className="dropdown-item" href="#">
                              <i className="dw dw-eye"></i> Ver
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="dw dw-edit2"></i> Editar
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <HelpModal />
    </>
  );
};

export default Alarmas;
