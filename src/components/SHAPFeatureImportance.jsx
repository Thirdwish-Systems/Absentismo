import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const SHAPFeatureImportance = ({ features }) => {
  const options = {
    chart: { type: 'bar', backgroundColor: 'transparent' },
    title: { text: 'Importancia de Variables (SHAP Values)', align: 'left' },
    subtitle: { text: 'Impacto en la probabilidad de baja' },
    xAxis: { categories: features.map(f => f.name) },
    yAxis: { title: { text: 'Contribución del Factor' } },
    plotOptions: {
      bar: { colorByPoint: true, borderRadius: 4 }
    },
    series: [{
      name: 'Peso en el Modelo',
      data: features.map(f => ({
        y: f.value,
        color: f.value > 0 ? '#ff5b5b' : '#28a745'
      }))
    }],
    legend: { enabled: false }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default SHAPFeatureImportance;