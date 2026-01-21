import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import RightSidebar from "../components/RightSidebar";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.classList.remove("login-page");
  }, []);

  const sitemapGroups = [
    {
      modulo: "1. CONFIGURACIÓN",
      color: "#007bff",
      icon: "dw-settings",
      routes: [
        { name: "Data Hub", path: "/setup/data-hub", detail: "Ingesta SAP/Excel" },
        { name: "Reglas Legales", path: "/setup/reglas-legales", detail: "Motor de Costes" },
        { name: "Estructura", path: "/setup/estructura", detail: "Jerarquía Org." }
      ]
    },
    {
      modulo: "2. CONTROL TOWER",
      color: "#e95959",
      icon: "dw-monitor",
      routes: [
        { name: "Command Center", path: "/control-tower/commandCenter", detail: "Dashboard Global" },
        { name: "Alarmas", path: "/control-tower/alarmas", detail: "Gestión de Incidencias" },
        { name: "Benchmark", path: "/control-tower/benchmark", detail: "Comparativa Sectorial" }
      ]
    },
    {
      modulo: "3. ANÁLISIS IA",
      color: "#28a745",
      icon: "dw-rocket",
      routes: [
        { name: "Forecast", path: "/ia/forecastdrivers", detail: "Predicción de Bajas" },
        { name: "Simulador ROI", path: "/ia/simulador", detail: "Modelado What-if" },
        { name: "Copiloto LLM", path: "/ia/aichat", detail: "Asistente Chat" }
      ]
    },
    {
      modulo: "4. OPERACIONES",
      color: "#ffc107",
      icon: "dw-clipboard",
      routes: [
        { name: "Playbooks", path: "/ejecucion/kanban", detail: "Tablero Kanban" },
        { name: "Coberturas", path: "/ejecucion/coberturas", detail: "Skill Matrix" },
        { name: "Reporting", path: "/ejecucion/reporting", detail: "Foto del Ahorro" }
      ]
    },
    {
      modulo: "5. GESTIÓN ADMIN",
      color: "#17a2b8",
      icon: "dw-library",
      routes: [
        { name: "Roles", path: "/admin/roles", detail: "Seguridad Granular" },
        { name: "Config. Alertas", path: "/admin/config-alertas", detail: "Umbrales IA" },
        { name: "Auditoría", path: "/admin/auditoria", detail: "Logs RGPD" }
      ]
    }
  ];

  return (
    <>
      <Header onSettingsClick={() => setIsRightSidebarOpen(true)} />
      <RightSidebar isOpen={isRightSidebarOpen} setIsOpen={setIsRightSidebarOpen} />
      <LeftSideBar />

      <div className="main-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f4f7f6" }}>
        <div className="pd-ltr-20" style={{ flex: 1 }}>
          
          <div className="page-header mb-30 shadow-sm pd-20 bg-white border-radius-10">
            <h4 className="text-blue">Mapa Visual del Ecosistema</h4>
            <p className="mb-0 text-muted">Explora la arquitectura del sistema. Haz clic en cualquier nodo para navegar.</p>
          </div>

          <div className="sitemap-visual-container">
            {/* NODO CENTRAL: DASHBOARD PRINCIPAL */}
            <div className="d-flex justify-content-center mb-50">
              <Link to="/dashboard" className="root-node shadow-lg border-radius-10 bg-white pd-20 text-center border">
                <i className="dw dw-house-1 font-30 text-blue mb-2"></i>
                <h5 className="weight-700">DASHBOARD CENTRAL</h5>
                <code className="font-10 text-muted">/dashboard</code>
              </Link>
            </div>

            <div className="row">
              {sitemapGroups.map((group, idx) => (
                <div key={idx} className="col-xl-4 col-lg-6 mb-40">
                  <div className="module-branch">
                    {/* Cabecera del Módulo */}
                    <div className="module-header d-flex align-items-center mb-3">
                      <div className="icon-circle shadow-sm mr-3" style={{ background: group.color }}>
                        <i className={`${group.icon} text-white font-20`}></i>
                      </div>
                      <h6 className="weight-700 mb-0" style={{ color: group.color }}>{group.modulo}</h6>
                    </div>

                    {/* Lista de Pantallas como "Hojas" */}
                    <div className="module-nodes pl-40" style={{ borderLeft: `2px solid ${group.color}44` }}>
                      {group.routes.map((route, rIdx) => (
                        <Link to={route.path} key={rIdx} className="node-link d-flex align-items-center mb-3 p-2 bg-white border-radius-10 shadow-sm border text-decoration-none">
                          <div className="node-dot mr-3" style={{ background: group.color }}></div>
                          <div>
                            <span className="d-block weight-600 text-dark font-14">{route.name}</span>
                            <small className="text-muted font-10">{route.detail} • <span className="text-blue">{route.path}</span></small>
                          </div>
                          <i className="fa fa-chevron-right ml-auto text-light font-12"></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Footer />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .root-node { width: 220px; transition: 0.3s; position: relative; }
        .root-node:hover { transform: scale(1.05); border-color: #1b00ff; }
        .root-node::after { content: ''; position: absolute; bottom: -50px; left: 50%; width: 2px; height: 50px; background: #d1d1d1; }
        
        .icon-circle { width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .node-link { transition: 0.3s; }
        .node-link:hover { transform: translateX(10px); border-color: #1b00ff !important; background: #f0f4ff !important; }
        
        .node-dot { width: 8px; height: 8px; border-radius: 50%; }
        .module-nodes { position: relative; }
        .module-nodes::before { content: ''; position: absolute; left: -2px; top: 0; width: 15px; height: 2px; background: inherit; }
      `}} />
    </>
  );
};

export default Sitemap;