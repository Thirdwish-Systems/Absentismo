import React, { useEffect, useRef } from "react";

const AbsenteeismChart = ({ chartId, title, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // 1. Definimos la función de inicialización
    const initChart = () => {
      const container = document.getElementById(chartId);

      // Verificamos que Highcharts exista y que el contenedor esté en el DOM
      if (window.Highcharts && container) {
        // 2. Si ya existía una gráfica en esta referencia, la destruimos antes de crear la nueva
        if (
          chartRef.current &&
          typeof chartRef.current.destroy === "function"
        ) {
          chartRef.current.destroy();
        }

        // 3. Creamos la gráfica y guardamos la instancia en la referencia
        chartRef.current = window.Highcharts.chart(chartId, {
          title: {
            text: title,
            style: { color: "#1b00ff", fontWeight: "bold", fontSize: "16px" },
          },
          credits: { enabled: false },
          navigation: { buttonOptions: { enabled: true } },
          ...options,
        });
      }
    };

    // Usamos un pequeño delay para asegurar que el DOM se ha estabilizado tras cerrar el sidebar
    const timer = setTimeout(initChart, 100);

    // 4. LIMPIEZA CRÍTICA: Aquí es donde evitamos el error 'forExport'
    return () => {
      clearTimeout(timer);
      if (chartRef.current) {
        // Verificamos que la instancia aún sea válida antes de destruir
        try {
          if (typeof chartRef.current.destroy === "function") {
            chartRef.current.destroy();
          }
        } catch (e) {
          console.warn("Highcharts cleanup warning:", e);
        }
        chartRef.current = null; // Limpiamos la referencia
      }
    };
    // Quitamos 'options' de las dependencias si no quieres que la gráfica parpadee
    // cada vez que el sidebar cambia (porque el objeto options se recrea en Dashboard)
  }, [chartId, title]);

  return (
    <div className="bg-white pd-20 card-box height-100-p">
      <div id={chartId} style={{ width: "100%", minHeight: "300px" }}></div>
    </div>
  );
};

export default AbsenteeismChart;
