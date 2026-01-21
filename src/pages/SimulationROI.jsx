import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HelpModalROI from "../components/HelpModalROI";

const SimulationROI = () => {
  // Estados para los Sliders
  const [reduction, setReduction] = useState(5); // % de reducción de bajas
  const [costPerDay, setCostPerDay] = useState(120); // Coste medio diario (proviene del motor de costes)

  // Cálculos de Simulación "What-if"
  const totalEmployees = 500;
  const currentAbsenceDays = 4500; // Días anuales actuales
  const savedDays = Math.round(currentAbsenceDays * (reduction / 100));
  const grossSavings = savedDays * costPerDay;
  const replacementCostSavings = Math.round(grossSavings * 0.15); // Ahorro extra en sustituciones
  const totalImpact = grossSavings + replacementCostSavings;

  useEffect(() => {
    document.body.classList.remove("login-page");
  }, []);

  // Gráfico Comparativo: Antes vs Después
  const chartOptions = {
    chart: { type: 'column', backgroundColor: 'transparent' },
    title: { text: 'Impacto Económico Proyectado', align: 'left' },
    xAxis: { categories: ['Escenario Actual', 'Escenario Optimizado (IA)'] },
    yAxis: { title: { text: 'Coste Anual (€)' } },
    plotOptions: { column: { borderRadius: 5, dataLabels: { enabled: true, format: '€{y:,.0f}' } } },
    series: [{
      name: 'Coste Total Absentismo',
      data: [
        { y: currentAbsenceDays * costPerDay, color: '#ff5b5b' },
        { y: (currentAbsenceDays - savedDays) * costPerDay, color: '#28a745' }
      ],
      showInLegend: false
    }]
  };

  return (
    <>
      <Header />
      <LeftSideBar />
      <div className="main-container">
        <div className="pd-ltr-20">
<div className="page-header mt-0 mb-30 pd-20 bg-white border-radius-10 shadow-sm d-flex justify-content-between align-items-center">
  <div>
    <h4 className="text-blue">Simulador de ROI & Caso de Negocio</h4>
    <p className="mb-0 text-secondary">
      Modelado "What-if" basado en reducción de factores no médicos.
    </p>
  </div>
  
  <div className="d-flex align-items-center">
    {/* Botón de Ayuda alineado a la izquierda del badge */}
    <button
      className="btn btn-primary btn-sm rounded-pill shadow-sm mr-3"
      data-toggle="modal"
      data-target="#help-modal-roi"
    >
      <i className="fa fa-info-circle mr-2"></i> ¿Cómo se calcula el ROI?
    </button>
    
    <div className="text-right">
      <span className="badge badge-success pd-10 font-14">
        ROI Estimado: {(totalImpact / 15000).toFixed(1)}x inversión
      </span>
    </div>
  </div>
</div>

          <div className="row">
            {/* Panel de Sliders (Control de Variables) */}
            <div className="col-xl-4 mb-30">
              <div className="card-box pd-30 height-100-p">
                <h5 className="h5 mb-30 text-blue">Parámetros de Simulación</h5>
                
                <div className="form-group mb-40">
                  <label className="weight-700">Reducción de Absentismo: <span className="text-blue">{reduction}%</span></label>
                  <input 
                    type="range" 
                    className="custom-range" 
                    min="1" max="20" step="0.5"
                    value={reduction}
                    onChange={(e) => setReduction(e.target.value)}
                  />
                  <small className="form-text text-muted">Impacto estimado por la aplicación de Playbooks de IA.</small>
                </div>

                <div className="form-group">
                  <label className="weight-700">Coste Medio por Jornada: <span className="text-blue">€{costPerDay}</span></label>
                  <input 
                    type="range" 
                    className="custom-range" 
                    min="80" max="300" 
                    value={costPerDay}
                    onChange={(e) => setCostPerDay(e.target.value)}
                  />
                  <small className="form-text text-muted">Ajuste según convenio y complementos de empresa.</small>
                </div>

                <div className="mt-40 p-3 bg-light border-radius-5">
                    <h6 className="font-14 mb-2">Resumen de Eficiencia:</h6>
                    <div className="d-flex justify-content-between mb-1">
                        <span>Días recuperados:</span>
                        <span className="weight-700 text-success">{savedDays} días</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Ahorro Sustitución:</span>
                        <span className="weight-700 text-success">€{replacementCostSavings.toLocaleString()}</span>
                    </div>
                </div>
              </div>
            </div>

            {/* Gráfico de Impacto */}
            <div className="col-xl-8 mb-30">
              <div className="card-box pd-30 height-100-p">
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
              </div>
            </div>
          </div>

          {/* Cards de KPIs Finales */}
          <div className="row">
            <div className="col-md-6 mb-30">
                <div className="card-box pd-30 bg-dark text-white shadow">
                    <h5 className="text-white mb-20 font-16">Ahorro Neto Proyectado (Anual)</h5>
                    <div className="display-4 weight-700 text-success">€{totalImpact.toLocaleString()}</div>
                    <p className="mt-15 opacity-7 font-12">Cálculo basado en la mitigación de bajas de corta duración y optimización de turnicidad.</p>
                </div>
            </div>
            <div className="col-md-6 mb-30">
                <div className="card-box pd-30 border-left shadow-sm" style={{borderLeft: '5px solid #1b00ff'}}>
                    <h5 className="text-blue mb-20 font-16">Impacto en Cuenta de Resultados</h5>
                    <p className="font-14">Al reducir un <strong>{reduction}%</strong> el absentismo, se libera presupuesto equivalente a <strong>{Math.round(totalImpact / 35000)}</strong> contrataciones anuales de perfil medio.</p>
                    <div className="alert alert-info py-2 font-12 border-0">
                        <i className="fa fa-info-circle mr-2"></i> Este ahorro incluye la reducción de penalizaciones por SLAs perdidos en contratos de Logística.
                    </div>
                </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
      <HelpModalROI />
    </>
  );
};

export default SimulationROI;