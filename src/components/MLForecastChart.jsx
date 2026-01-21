import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";

// Verificación y carga del módulo
if (typeof highchartsMore === 'function') {
    highchartsMore(Highcharts);
} else if (highchartsMore && typeof highchartsMore.default === 'function') {
    highchartsMore.default(Highcharts);
}

const MLForecastChart = ({ data }) => {
  // Verificación de seguridad para los datos
  if (!data || !data.labels) return <div className="pd-20 text-center">Cargando proyecciones de IA...</div>;

  const options = {
    chart: { 
      type: 'areasplinerange', 
      backgroundColor: 'transparent',
      style: { fontFamily: 'inherit' }
    },
    title: { 
      text: 'Análisis Predictivo: Proyección 60 días', 
      align: 'left',
      style: { color: '#1b00ff', fontWeight: 'bold' } 
    },
    xAxis: { 
      categories: data.labels,
      crosshair: true,
      gridLineWidth: 0
    },
    yAxis: { 
      title: { text: 'Volumen de Bajas' },
      gridLineDashStyle: 'Dash'
    },
    tooltip: { shared: true, valueSuffix: ' casos' },
    credits: { enabled: false },
    series: [
      {
        name: 'Histórico Real',
        type: 'spline',
        data: data.real,
        zIndex: 2,
        color: '#1b00ff',
        marker: { enabled: true, radius: 4, fillColor: '#fff', lineWidth: 2, lineColor: '#1b00ff' }
      },
      {
        name: 'Predicción Machine Learning',
        type: 'spline',
        data: data.pred,
        dashStyle: 'Dash',
        zIndex: 2,
        color: '#ff5b5b'
      },
      {
        name: 'Intervalo de Confianza (95%)',
        type: 'arearange', 
        data: data.range,
        lineWidth: 0,
        linkedTo: ':previous',
        color: '#ff5b5b',
        fillOpacity: 0.1,
        zIndex: 0,
        marker: { enabled: false }
      }
    ]
  };

  return (
    <div className="card-box pd-20 height-100-p shadow-sm border-radius-10">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MLForecastChart;