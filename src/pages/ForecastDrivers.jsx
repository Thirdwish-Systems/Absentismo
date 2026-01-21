import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import MLForecastChart from "../components/MLForecastChart";
import SHAPFeatureImportance from "../components/SHAPFeatureImportance";
import HelpModalForecast from "../components/HelpModalForecast";


const ForecastDrivers = () => {
  useEffect(() => {
    document.body.classList.remove("login-page");
  }, []);

  // Simulación de datos que vendrían de /src/data
  const forecastData = {
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"],
    real: [30, 35, 32, 38, null, null, null, null],
    pred: [null, null, null, 38, 45, 52, 48, 42],
    range: [
      [null, null], [null, null], [null, null],
      [36, 40], [40, 50], [45, 60], [40, 56], [35, 49]
    ]
  };

  const shapFeatures = [
    { name: "Fatiga (Horas Extra)", value: 0.75 },
    { name: "Antigüedad < 1 año", value: 0.52 },
    { name: "Turnicidad Rotativa", value: 0.30 },
    { name: "Teletrabajo (Días)", value: -0.20 },
    { name: "Clima Laboral", value: -0.45 }
  ];

  return (
    <>
      <Header />
      <LeftSideBar />
      <div className="main-container">
        <div className="pd-ltr-20">
          
          {/* Header Técnico */}
            <div className="page-header mt-0 mb-30 pd-20 bg-white border-radius-10 shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                <h4 className="text-blue">Análisis predictivo Causalidad & Forecast</h4>
                <p className="mb-0 text-secondary">Interpretación de factores "No Médicos" y proyección a 60 días.</p>
                </div>

                <div className="d-flex align-items-center">
                <button
                    className="btn btn-primary btn-sm rounded-pill mr-3"
                    data-toggle="modal"
                    data-target="#help-modal-forecast"
                >
                    <i className="fa fa-info-circle mr-2"></i> Guía Técnica ML
                </button>
                <span className="badge badge-info pd-10">Modelo Machine Learning: XGBoost v1.4</span>
                </div>
            </div>
            </div>

          <div className="row mb-30">
            <div className="col-12">
              <div className="card-box pd-30">
                <MLForecastChart data={forecastData} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mb-30">
              <div className="card-box pd-30">
                <SHAPFeatureImportance features={shapFeatures} />
              </div>
            </div>
            
            <div className="col-lg-4 mb-30">
              <div className="card-box pd-30 bg-dark text-white height-100-p">
                <h5 className="text-white mb-20">Lógica del Algoritmo</h5>
                <div className="font-14">
                  <p>El sistema identifica que la <strong>fatiga acumulada</strong> por horas extra explica el 45% del incremento proyectado.</p>
                  <ul className="pl-3 mt-3">
                    <li className="mb-2">Intervalo de Confianza: 95%.</li>
                    <li className="mb-2">Factores No Médicos detectados: Antigüedad y Turnicidad.</li>
                    <li className="mb-2">Ajuste de estacionalidad aplicado.</li>
                  </ul>
                  <div className="alert alert-warning mt-4 py-2 border-0">
                    <i className="fa fa-exclamation-triangle mr-2"></i>
                    Riesgo de pico en la Semana 6.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      <HelpModalForecast />
    </>
  );
};

export default ForecastDrivers;