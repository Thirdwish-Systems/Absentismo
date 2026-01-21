import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import AbsenteeismChart from "../components/AbsenteeismChart";
import HelpModal from "../components/HelpModal";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation(); //
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const handleCloseSidebar = () => {
    setIsRightSidebarOpen(false);
  };

  const toggleSidebar = React.useCallback((val) => {
    setIsRightSidebarOpen(val);
  }, []);

  useEffect(() => {
    document.body.classList.remove("login-page");
  }, []);

  // Módulo 3.1: Motor de Forecast
  const forecastOptions = {
    chart: { type: "line" },
    xAxis: { categories: ["Mar", "Abr", "May", "Jun", "Jul", "Ago"] },
    yAxis: { title: {text: t("Tasa de Absentismo %")} },
    series: [
      {
        name:  t("Dato Real"),
        data: [4.2, 3.8, 4.5, null, null, null],
        color: "#1b00ff",
        marker: { radius: 6 },
      },
      {
        name: t("Predicción IA"),
        data: [null, null, 4.5, 4.8, 5.2, 4.1],
        dashStyle: "Dash",
        color: "#ff5b5b",
      },
    ],
  };

  // Módulo 3.1: Drivers No Médicos
  const driversOptions = {
    chart: { type: "pie" },
    plotOptions: { pie: { innerSize: "50%", dataLabels: { enabled: true } } },
    series: [
      {
        name: "Impacto %",
        data: [
          { name: t("Fatiga Turnos"), y: 45 },
          { name: t("Clima Laboral"), y: 25 },
          { name: t("Conciliación"), y: 20 },
          { name: t("Efecto Lunes/Viernes"), y: 10 },
        ],
      },
    ],
  };

  // Módulo 2.2: Benchmark Sectorial

  const benchmarkOptions = {
    chart: { type: "column" },
    plotOptions: {
      column: {
        borderRadius: 5,
        dataLabels: { enabled: true, format: "{y}%" },
      },
    },
    xAxis: {
      categories: [t("Tu Empresa"), t("Media Sector")],
      labels: { style: { fontWeight: "bold" } },
    },
    yAxis: {
      title: { text: t("Tasa de Absentismo %") },
      plotLines: [
        {
          value: 2.8,
          color: "#28a745",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: t("Objetivo Best in Class (2.8%)"),
            align: "right",
            style: { color: "#28a745", fontWeight: "bold" },
          },
          zIndex: 5,
        },
      ],
    },
    series: [
      {
        name: t("Tasa Actual"),
        colorByPoint: true,
        data: [
          { y: 5.2, color: "#ff5b5b" }, // Rojo para alerta
          { y: 4.1, color: "#f1b44c" }, // Naranja para media
        ],
        showInLegend: false,
      },
    ],
  };

  // NUEVA GRÁFICA 1: Distribución por Departamento
  const departmentOptions = {
    chart: { type: "bar" },
    xAxis: { categories: ["Logística", "Ventas", "IT", "Admin", "Fábrica"] },
    yAxis: { title: { text: t("Días Perdidos (Promedio)") } },
    series: [
      {
        name: t("Días/Mes"),
        data: [12, 8, 4, 3, 15],
        color: "#4b0082",
      },
    ],
  };

  // NUEVA GRÁFICA 2: Heatmap/Scatter de Riesgo (Antigüedad vs Tasa)
  const riskScatterOptions = {
    chart: { type: "scatter", zoomType: "xy" },
    xAxis: { title: { text: t("Antigüedad (Años)") } },
    yAxis: { title: { text: t("Tasa de Absentismo %") } },
    series: [
      {
        name: t("Grupos de Empleados"),
        color: "rgba(223, 83, 83, .5)",
        data: [
          [1, 6.2],
          [2, 5.5],
          [5, 4.1],
          [10, 3.2],
          [15, 2.8],
          [0.5, 7.1],
        ],
      },
    ],
  };

  return (
    <>
      <Header onSettingsClick={() => toggleSidebar(true)} />
      <RightSidebar isOpen={isRightSidebarOpen} setIsOpen={toggleSidebar} />
      <LeftSideBar />

      <div className="main-container">
        <div className="pd-ltr-20">
          {/* ENCABEZADO CON BOTÓN MODAL */}
          <div className="page-header mt-0 mb-30 shadow-sm d-flex justify-content-between align-items-center pd-20 bg-white border-radius-10">
            <h4 className="text-blue">{t("Análisis de Capital Humano")}</h4>
            {/* Usamos data-toggle para que Bootstrap maneje el modal fuera del ciclo de vida de React */}
            <button
              className="btn btn-primary btn-sm rounded-pill"
              data-toggle="modal"
              data-target="#help-modal"
            >
              <i className="fa fa-info-circle mr-2"></i>{t("Guía de Indicadores")}
            </button>
          </div>

          {/* MÓDULO 3.2: SIMULADOR ROI */}
          <div className="row mb-30">
            <div className="col-xl-3 col-md-6 mb-20">
              <div className="card-box pd-20 height-100-p bg-blue text-primary">
                <div className="font-14">{t("Coste Estimado YTD")}</div>
                <div className="h3 text-primary">€245.500</div>
                <div className="font-12"> {t("Impacto Directo en Margen")}</div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-20">
              <div
                className="card-box pd-20 height-100-p border-left"
                style={{ borderLeft: "5px solid #28a745" }}
              >
                <div className="font-14 text-secondary"> {t("Ahorro IA Sugerido")}</div>
                <div className="h3 text-success">€32.100</div>
                <div className="badge badge-success">{t("Eficiencia")} +12%</div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-20">
              <div className="card-box pd-20 height-100-p">
                <div className="font-14 text-secondary">{t("Alertas de Riesgo")}</div>
                <div className="h3 text-danger">20</div>
                <div className="text-danger font-12 weight-700">
                {t("Acción Requerida")}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-20">
              <div className="card-box pd-20 height-100-p">
                <div className="font-14 text-secondary">
                  {t("Confianza del Modelo")}
                </div>
                <div className="h3 text-info">94%</div>
                <div className="progress mt-2" style={{ height: "5px" }}>
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* FILA 1: PREDICCIÓN Y CAUSAS */}
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-30">
              <AbsenteeismChart
                chartId="forecastIA"
                title= {t("Forecast Predictivo (Próximos 60 días)")}
                options={forecastOptions}
              />
            </div>
            <div className="col-xl-4 col-lg-4 mb-30">
              <AbsenteeismChart
                chartId="driversIA"
                title={t("Drivers No Médicos")}
                options={driversOptions}
              />
            </div>
          </div>

          {/* ANÁLISIS DETALLADO */}
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-30">
              <AbsenteeismChart
                chartId="deptChart"
                title={t("Absentismo por Departamento")}
                options={departmentOptions}
              />
            </div>
            <div className="col-xl-6 col-lg-6 mb-30">
              <AbsenteeismChart
                chartId="riskScatter"
                title={t( "Riesgo: Antigüedad vs Tasa %")}
                options={riskScatterOptions}
              />
            </div>
          </div>

          {/* FILA 3: BENCHMARK Y TABLA DE ACCIÓN */}
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-30">
              <AbsenteeismChart
                chartId="benchmarkSector"
                title={t("Control Tower: Benchmark Sector")}
                options={benchmarkOptions}
              />
            </div>
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="card-box pd-20 height-100-p">
                <h4 className="h4 text-blue mb-20">
                  {t("Playbooks de IA sugeridos")}
                </h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>{t("Riesgo")}</th>
                      <th>{t("Acción Preventiva")}</th>
                      <th>{t("ROI")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="badge badge-danger">{t("Crítico")}</span>
                      </td>
                      <td>{t("Rotación Turno Logística")}</td>
                      <td className="text-success">+€4.2k</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="badge badge-warning">{t("Medio")}</span>
                      </td>
                      <td>{t("Entrevistas Clima Ventas")}</td>
                      <td className="text-success">+€1.8k</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <HelpModal />
    </>
  );
};

export default Dashboard;
