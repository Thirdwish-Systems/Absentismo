import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LeftSideBar = () => {
  const location = useLocation(); // Detecta la URL actual
  const [openMenu, setOpenMenu] = useState(null);

  // Efecto para mantener abierta la pestaña correspondiente a la ruta actual
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/setup/")) setOpenMenu("setup");
    else if (path.includes("/control-tower/")) setOpenMenu("control-tower");
    else if (path.includes("/ia/")) setOpenMenu("ia-predictiva");
    else if (path.includes("/ejecucion/")) setOpenMenu("ejecucion");
    else if (path.includes("/admin/")) setOpenMenu("gestion-admin");
    else if (path.includes("/docs/")) setOpenMenu("docs");
  }, [location]);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  // Función auxiliar mejorada con detección de link activo
  const renderDropdown = (id, icon, text, items) => {
    const isOpen = openMenu === id;
    return (
      <li className={`dropdown ${isOpen ? "show" : ""}`}>
        <a
          href="javascript:;"
          className={`dropdown-toggle ${isOpen ? "" : ""}`}
          onClick={() => toggleMenu(id)}
        >
          <span className={`micon ${icon}`}></span>
          <span className="mtext">{text}</span>
        </a>
        <ul className="submenu" style={{ display: isOpen ? "block" : "none" }}>
          {items.map((item, index) => {
            const isActive = location.pathname === item.link;
            return (
              <li key={index}>
                <Link
                  to={item.link}
                  className={isActive ? "active font-weight-bold" : ""}
                  style={isActive ? { color: "#ffffff" } : {}}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  };

  return (
    <>
      <div className="left-side-bar">
        <div className="brand-logo">
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <span
              style={{
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Gestión Absentismo
            </span>
          </Link>
          <div className="close-sidebar" data-toggle="left-sidebar-close">
            <i className="ion-close-round"></i>
          </div>
        </div>

        {/* Contenedor con scroll habilitado */}
        <div
          className="menu-block customscroll"
          style={{ height: "calc(100vh - 100px)", overflowY: "auto" }}
        >
          <div className="sidebar-menu">
            <ul id="accordion-menu">
              <li>
                <Link
                  to="/dashboard"
                  className={`dropdown-toggle no-arrow ${location.pathname === "/dashboard" ? "active" : ""}`}
                >
                  <span className="micon dw dw-house-1"></span>
                  <span className="mtext">Home</span>
                </Link>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>

              {renderDropdown("setup", "dw dw-settings1", "Configuración", [
                { label: "Data Hub & Health", link: "/setup/data-hub" },
                { label: "Reglas Legales", link: "/setup/reglas-legales" },
                { label: "Estructura", link: "/setup/estructura" },
              ])}

              <li>
                <div className="dropdown-divider"></div>
              </li>

              {renderDropdown(
                "control-tower",
                "dw dw-monitor",
                "Control Tower",
                [
                  {
                    label: "Command Center",
                    link: "/control-tower/commandCenter",
                  },
                  {
                    label: "Centro de Alarmas",
                    link: "/control-tower/alarmas",
                  },
                  { label: "Benchmark", link: "/control-tower/benchmark" },
                ],
              )}

              <li>
                <div className="dropdown-divider"></div>
              </li>

              {renderDropdown(
                "ia-predictiva",
                "dw dw-magic-wand",
                "Análisis Predictivo",
                [
                  {
                    label: "Forecast y Drivers ML",
                    link: "/ia/forecastdrivers",
                  },
                  { label: "Simulador ROI", link: "/ia/simulador" },
                  { label: "Asistente IA", link: "/ia/aichat" },
                ],
              )}

              <li>
                <div className="dropdown-divider"></div>
              </li>

              {renderDropdown("ejecucion", "dw dw-checked", "Operaciones", [
                { label: "Kanban Playbooks", link: "/ejecucion/kanban" },
                { label: "Coberturas/PRL", link: "/ejecucion/coberturas" },
                { label: "Reporting Studio", link: "/ejecucion/reporting" },
              ])}

              <li>
                <div className="dropdown-divider"></div>
              </li>

              {renderDropdown(
                "gestion-admin",
                "dw dw-user1",
                "Administración",
                [
                  { label: "Roles y Permisos", link: "/admin/roles" },
                  { label: "Config. Alertas", link: "/admin/config-alertas" },
                  { label: "Logs y Auditoría", link: "/admin/auditoria" },
                ],
              )}

              <li>
                <div className="dropdown-divider"></div>
              </li>

              <li>
                <Link
                  to="/sitemap"
                  className={`dropdown-toggle no-arrow ${location.pathname === "/sitemap" ? "active" : ""}`}
                >
                  <span className="micon dw dw-diagram"></span>
                  <span className="mtext">Sitemap</span>
                </Link>
              </li>

              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <div className="sidebar-small-cap">Extra</div>
              </li>

              {renderDropdown("docs", "dw dw-edit-2", "Documentación", [
                { label: "Plantilla vacía", link: "/plantilla-vacia" },
              ])}
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile-menu-overlay"></div>

      {/* Estilos locales para asegurar el scroll y visualización */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .customscroll::-webkit-scrollbar {
          width: 5px;
        }
        .customscroll::-webkit-scrollbar-thumb {
          background: #d1d1d1;
          border-radius: 10px;
        }
        .sidebar-menu .active {
          background: rgba(27, 0, 255, 0.05);
          border-right: 3px solid #1b00ff;
        }
      `,
        }}
      />
    </>
  );
};

export default LeftSideBar;
