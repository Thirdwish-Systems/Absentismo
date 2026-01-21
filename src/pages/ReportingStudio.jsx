import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import RightSidebar from "../components/RightSidebar";
import HelpModalReporting from "../components/HelpModalReporting";

const ReportingStudio = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    document.body.classList.remove("login-page");
  }, []);

  const reports = [
    {
      id: 1,
      name: "Foto del Ahorro - Enero 2026",
      date: "20/01/2026",
      size: "2.4 MB",
      type: "PDF",
    },
    {
      id: 2,
      name: "Impacto Playbooks: Centro Norte vs Sur",
      date: "15/01/2026",
      size: "1.8 MB",
      type: "Excel",
    },
    {
      id: 3,
      name: "Reducción Duración Media - Q4",
      date: "05/01/2026",
      size: "3.1 MB",
      type: "PDF",
    },
  ];

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
          {/* HEADER DE PÁGINA */}
          <div className="page-header mt-0 mb-30 shadow-sm d-flex justify-content-between align-items-center pd-20 bg-white border-radius-10">
            <div>
              <h4 className="text-blue">Reporting Studio</h4>
              <p className="mb-0 text-muted">
                Evidencia de Impacto y Generación de Foto del Ahorro.
              </p>
            </div>
            <div className="btn-list">
              <button className="btn btn-success btn-sm rounded-pill mr-2">
                <i className="fa fa-magic mr-2"></i> Generar Reporte Mensual
              </button>
              <button className="btn btn-outline-primary btn-sm rounded-pill">
                <i className="fa fa-share-alt"></i> Compartir con Comité
              </button>
              <button
                className="btn btn-primary btn-sm rounded-pill mr-2"
                data-toggle="modal"
                data-target="#help-modal-reporting"
              >
                <i className="fa fa-info-circle mr-2"></i> Guía Studio
              </button>
            </div>
          </div>

          {/* KPIs DE IMPACTO (FOTO DEL AHORRO) */}
          <div className="row mb-30">
            {[
              {
                title: "Ahorro Acumulado",
                value: "€42.300",
                icon: "dw-money-2",
                color: "text-success",
                sub: "vs Mes Anterior",
              },
              {
                title: "Reducción Duración",
                value: "-12.4%",
                icon: "dw-fast-forward-1",
                color: "text-blue",
                sub: "Días media/baja",
              },
              {
                title: "Grupo Control (Sin IA)",
                value: "5.8%",
                icon: "dw-edit-1",
                color: "text-danger",
                sub: "Tasa Absentismo",
              },
              {
                title: "Grupo Playbook (IA)",
                value: "3.2%",
                icon: "dw-rocket",
                color: "text-success",
                sub: "Tasa Absentismo",
              },
            ].map((stat, idx) => (
              <div key={idx} className="col-xl-3 col-lg-3 col-md-6 mb-10">
                <div className="card-box pd-20 shadow-sm border-radius-10">
                  <div className="d-flex align-items-center">
                    <div className={`micon font-30 mr-3 ${stat.color}`}>
                      <i className={`dw ${stat.icon}`}></i>
                    </div>
                    <div>
                      <div className="weight-700 font-20">{stat.value}</div>
                      <div className="font-11 text-secondary">{stat.title}</div>
                      <small className="font-10 text-muted">{stat.sub}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            {/* GRID DE ARCHIVOS */}
            <div className="col-xl-4 col-lg-4 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm border-radius-10">
                <h5 className="h5 text-blue mb-20">Histórico de Reportes</h5>
                <div className="list-group list-group-flush">
                  {reports.map((report) => (
                    <button
                      key={report.id}
                      onClick={() => setSelectedReport(report)}
                      className={`list-group-item list-group-item-action border-0 mb-2 border-radius-10 ${selectedReport?.id === report.id ? "bg-light-blue" : "bg-light"}`}
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1 font-14 weight-600">
                          <i className="fa fa-file-pdf-o mr-2 text-danger"></i>{" "}
                          {report.name}
                        </h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <small className="text-muted">{report.date}</small>
                        <span className="badge badge-pill badge-outline-secondary font-10">
                          {report.size}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* PREVISUALIZADOR Y SELECTOR */}
            <div className="col-xl-8 col-lg-8 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm border-radius-10">
                <div className="d-flex justify-content-between align-items-center mb-20">
                  <h5 className="h5 text-blue">Previsualización de Impacto</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-sm btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Periodo: Q1 2026
                    </button>
                  </div>
                </div>

                {/* Área de Gráfico (Placeholder para Chart.js) */}
                <div
                  className="bg-light border-radius-10 pd-40 text-center mb-20"
                  style={{ minHeight: "250px", border: "2px dashed #d1d1d1" }}
                >
                  <div className="mb-20">
                    <i className="dw dw-analytics-11 font-45 text-blue opacity-3"></i>
                  </div>
                  <h6 className="weight-600">
                    Diferencial: Grupo Control vs. Playbooks
                  </h6>
                  <p className="text-muted font-12">
                    Gráfico de barras comparativo mostrando el ahorro de €1.2k
                    por centro activo.
                  </p>
                </div>

                {/* Selector de Destinatarios */}
                <div className="pd-20 border border-radius-10">
                  <h6 className="font-14 weight-700 mb-3">
                    Destinatarios
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {[
                      "Dirección HR",
                      "Gerencia Planta",
                      "Finanzas",
                      "PRL Senior",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="badge badge-pill badge-primary mr-2 mb-2 pd-10"
                      >
                        {tag}{" "}
                        <i
                          className="fa fa-times ml-1 font-10"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </span>
                    ))}
                    <button className="btn btn-sm btn-outline-primary rounded-pill mb-2">
                      + Añadir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <HelpModalReporting />
    </>
  );
};

export default ReportingStudio;
