import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import HelpModalBenchmark from "../components/HelpModalBenchmark";

const Benchmark = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [filterProvincia, setFilterProvincia] = useState("Madrid");
  const [filterCNAE, setFilterCNAE] = useState("Logística");
  const [activeData, setActiveData] = useState({ empresa: [], sector: [] });

  useEffect(() => {
    // Lógica de simulación de datos según filtros
    const fSector = filterProvincia === "Madrid" ? 1.05 : 0.85;
    const fEmpresa = filterCNAE === "Logística" ? 1.3 : 0.95;

    setActiveData({
      empresa: [
        { cat: "Contingencias Comunes", val: (4.1 * fEmpresa).toFixed(1) },
        { cat: "Accidentes de Trabajo", val: (0.8 * fEmpresa).toFixed(1) },
        { cat: "Absentismo Injustificado", val: (1.4 * fEmpresa).toFixed(1) },
        { cat: "Permisos Especiales", val: (2.2 * fEmpresa).toFixed(1) },
      ],
      sector: [
        { cat: "Contingencias Comunes", val: (3.7 * fSector).toFixed(1) },
        { cat: "Accidentes de Trabajo", val: (1.2 * fSector).toFixed(1) },
        { cat: "Absentismo Injustificado", val: (0.7 * fSector).toFixed(1) },
        { cat: "Permisos Especiales", val: (2.5 * fSector).toFixed(1) },
      ],
    });
  }, [filterProvincia, filterCNAE]);

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
          {/* HEADER ESTILO DATAHUB */}
          <div className="page-header mb-30 shadow-sm pd-20 bg-white border-radius-10">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <h4 className="text-blue h4">Benchmark del Sector</h4>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Normalización</li>
                    <li className="breadcrumb-item active text-muted">
                      Tasa por 100 empleados
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-md-6 text-right">
                <div className="d-flex justify-content-end align-items-center">
                  <button
                    className="btn btn-primary btn-sm rounded-pill px-3 shadow-sm mr-3"
                    data-toggle="modal"
                    data-target="#help-modal-benchmark"
                  >
                    <i className="fa fa-info-circle mr-2"></i> Ayuda Técnica
                  </button>
                  <select
                    className="form-control form-control-sm w-auto mr-2 border-radius-5"
                    onChange={(e) => setFilterProvincia(e.target.value)}
                  >
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Valencia">Valencia</option>
                  </select>
                  <select
                    className="form-control form-control-sm w-auto border-radius-5"
                    onChange={(e) => setFilterCNAE(e.target.value)}
                  >
                    <option value="Logística">CNAE: Logística</option>
                    <option value="Retail">CNAE: Retail</option>
                    <option value="Industria">CNAE: Industria</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-30">
            {/* GRÁFICO ESPEJO PRINCIPAL */}
            <div className="col-xl-8 col-lg-8">
              <div className="card-box pd-30 height-100-p shadow-sm border-radius-10">
                <div className="d-flex justify-content-between align-items-center mb-30">
                  <h5 className="h5 text-blue mb-0">
                    Comparativa Espejo Directa
                  </h5>

                  {/* LEYENDA DEL GRÁFICO */}
                  <div className="d-flex font-11 weight-700 uppercase">
                    <div className="d-flex align-items-center mr-3">
                      <span
                        className="border-radius-100 mr-1"
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#1b00ff",
                        }}
                      ></span>
                      <span className="text-dark">Tu Empresa</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span
                        className="border-radius-100 mr-1"
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#abb5bf",
                        }}
                      ></span>
                      <span className="text-muted">Media Sectorial</span>
                    </div>
                  </div>
                </div>

                <div className="mirror-engine">
                  {/* Indicadores de cabecera para las columnas */}
                  <div className="row no-gutters mb-2">
                    <div className="col-5 text-right pr-2">
                      <small className="weight-700 text-muted uppercase font-10">
                        Rendimiento Propio
                      </small>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5 text-left pl-2">
                      <small className="weight-700 text-muted uppercase font-10">
                        Referencia Mercado
                      </small>
                    </div>
                  </div>

                  {activeData.empresa.map((item, idx) => {
                    const sVal = activeData.sector[idx]?.val || 0;
                    const isBad = parseFloat(item.val) > parseFloat(sVal);

                    return (
                      <div key={idx} className="mb-30">
                        <div
                          className="text-center font-12 weight-600 text-dark mb-2 uppercase"
                          style={{ letterSpacing: "0.5px" }}
                        >
                          {item.cat}
                        </div>
                        <div className="row no-gutters align-items-center">
                          {/* Lado Empresa */}
                          <div className="col-5 d-flex align-items-center">
                            <span
                              className={`weight-800 mr-2 font-14 ${isBad ? "text-danger" : "text-primary"}`}
                            >
                              {item.val}%
                            </span>
                            <div
                              className="progress w-100 shadow-inner"
                              style={{
                                height: "18px",
                                direction: "rtl",
                                backgroundColor: "#f0f2f5",
                                borderRadius: "4px",
                              }}
                            >
                              <div
                                className={`progress-bar ${isBad ? "bg-danger" : "bg-primary"}`}
                                style={{
                                  width: `${item.val * 12}%`,
                                  transition:
                                    "width 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                              ></div>
                            </div>
                          </div>

                          {/* Icono Central de Estado */}
                          <div className="col-2 text-center">
                            <i
                              className={`fa ${isBad ? "fa-warning text-danger" : "fa-check-circle text-success"} font-18`}
                            ></i>
                          </div>

                          {/* Lado Sector */}
                          <div className="col-5 d-flex align-items-center">
                            <div
                              className="progress w-100 shadow-inner"
                              style={{
                                height: "18px",
                                backgroundColor: "#f0f2f5",
                                borderRadius: "4px",
                              }}
                            >
                              <div
                                className="progress-bar bg-secondary opacity-4"
                                style={{
                                  width: `${sVal * 12}%`,
                                  transition: "width 0.8s ease",
                                }}
                              ></div>
                            </div>
                            <span className="weight-700 text-muted ml-2 font-14">
                              {sVal}%
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* PANEL LATERAL DE RESUMEN */}
            <div className="col-xl-4 col-lg-4">
              <div className="card-box pd-30 height-100-p shadow-sm bg-white border-radius-10">
                <h5 className="h5 text-blue mb-20">Resumen de Impacto</h5>
                <div className="pd-20 border-radius-10 mb-20 text-center bg-light shadow-inner">
                  <div className="font-12 weight-700 text-muted uppercase">
                    Tasa Global Normalizada
                  </div>
                  <div className="font-40 weight-800 text-dark">
                    {(
                      activeData.empresa.reduce(
                        (a, b) => a + parseFloat(b.val),
                        0,
                      ) / 4
                    ).toFixed(1)}
                    %
                  </div>
                  <span className="badge badge-danger px-3 py-1">
                    Desviación detectada
                  </span>
                </div>

                <ul className="list-group list-group-flush mb-30">
                  <li className="list-group-item px-0 d-flex justify-content-between align-items-center bg-transparent">
                    <span className="font-14 text-secondary text-uppercase weight-600">
                      Ranking {filterProvincia}
                    </span>
                    <span className="weight-700">#42 de 128</span>
                  </li>
                  <li className="list-group-item px-0 d-flex justify-content-between align-items-center bg-transparent">
                    <span className="font-14 text-secondary text-uppercase weight-600">
                      Ahorro Objetivo
                    </span>
                    <span className="weight-700 text-success">€38.500</span>
                  </li>
                </ul>
                <button className="btn btn-outline-primary btn-block rounded-pill weight-700 py-2">
                  <i className="fa fa-file-pdf-o mr-2"></i> EXPORTAR BENCHMARK
                </button>
              </div>
            </div>
          </div>

          {/* SECCIÓN DE STATS INFERIORES (ESTILO DATAHUB) */}
          <div className="row pb-50">
            {/* Card 1: Tendencia */}
            <div className="col-md-4 mb-20">
              <div className="card-box pd-30 height-100-p shadow-sm border-radius-10 d-flex flex-column align-items-center justify-content-center transition-all hover-shadow text-center">
                <div
                  className="border-radius-100 d-flex align-items-center justify-content-center shadow-sm mb-20"
                  style={{
                    width: "70px",
                    height: "70px",
                    background:
                      "linear-gradient(135deg, #e0f0ff 0%, #f0f7ff 100%)",
                    border: "1px solid #b3d7ff",
                  }}
                >
                  <i className="fa fa-line-chart text-blue font-26"></i>
                </div>
                <div>
                  <span
                    className="d-block font-11 text-uppercase weight-700 text-muted mb-2"
                    style={{ letterSpacing: "1px" }}
                  >
                    Mercado
                  </span>
                  <div className="font-18 weight-800 text-dark mb-1">
                    Tendencia Sectorial
                  </div>
                  <div className="font-13 text-blue weight-600">
                    <i className="fa fa-level-up mr-1"></i> Alza en{" "}
                    {filterProvincia}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Muestra */}
            <div className="col-md-4 mb-20">
              <div className="card-box pd-30 height-100-p shadow-sm border-radius-10 d-flex flex-column align-items-center justify-content-center transition-all hover-shadow text-center">
                <div
                  className="border-radius-100 d-flex align-items-center justify-content-center shadow-sm mb-20"
                  style={{
                    width: "70px",
                    height: "70px",
                    background:
                      "linear-gradient(135deg, #e6fffa 0%, #f0fff4 100%)",
                    border: "1px solid #b2f5ea",
                  }}
                >
                  <i className="fa fa-users text-success font-26"></i>
                </div>
                <div>
                  <span
                    className="d-block font-11 text-uppercase weight-700 text-muted mb-2"
                    style={{ letterSpacing: "1px" }}
                  >
                    Volumen
                  </span>
                  <div className="font-18 weight-800 text-dark mb-1">
                    Muestra de Control
                  </div>
                  <div className="font-13 text-muted">
                    14.200 emp.{" "}
                    <span className="weight-800 text-dark font-11">
                      ANALIZADOS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Actualización */}
            <div className="col-md-4 mb-20">
              <div className="card-box pd-30 height-100-p shadow-sm border-radius-10 d-flex flex-column align-items-center justify-content-center transition-all hover-shadow text-center">
                <div
                  className="border-radius-100 d-flex align-items-center justify-content-center shadow-sm mb-20"
                  style={{
                    width: "70px",
                    height: "70px",
                    background:
                      "linear-gradient(135deg, #fffaf0 0%, #fffef0 100%)",
                    border: "1px solid #ffe3b3",
                  }}
                >
                  <i className="fa fa-refresh text-warning font-26"></i>
                </div>
                <div>
                  <span
                    className="d-block font-11 text-uppercase weight-700 text-muted mb-2"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sincronización
                  </span>
                  <div className="font-18 weight-800 text-dark mb-1">
                    Última Actualización
                  </div>
                  <div className="font-13 text-muted">
                    Datos oficiales:{" "}
                    <span className="weight-800 text-dark">Ene 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      {/* Renderizado del Modal */}
      <HelpModalBenchmark />
    </>
  );
};

export default Benchmark;
