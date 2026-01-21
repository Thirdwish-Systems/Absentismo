import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Alarmas from "./pages/Alarmas";
import DataHub from "./pages/DataHub";
import ReglasLegales from "./pages/ReglasLegales";
import Estructura from "./pages/Estructura";
import CommandCenter from "./pages/CommandCenter";
import Benchmark from "./pages/Benchmark";

import AIChat from "./pages/AIChat";
import ForecastDrivers from "./pages/ForecastDrivers";
import SimulationROI from "./pages/SimulationROI";

import KanbanPlaybooks from "./pages/KanbanPlaybooks";
import CoveragePRL from "./pages/CoveragePRL";
import ReportingStudio from "./pages/ReportingStudio";

import RolesPermisos from "./pages/RolesPermisos";
import ConfigAlertas from "./pages/ConfigAlertas";
import LogsAuditoria from "./pages/LogsAuditoria";

import Sitemap from "./pages/Sitemap";

import PlantillaVacia from "./pages/PlantillaVacia";

function App() {
  return (
    <Router basename="/Absentismo">
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/setup/data-hub" element={<DataHub />} />
          <Route path="/setup/reglas-legales" element={<ReglasLegales />} />
          <Route path="/setup/estructura" element={<Estructura />} />

          <Route path="/control-tower/commandCenter" element={<CommandCenter />} />
          <Route path="/control-tower/alarmas" element={<Alarmas />} />
          <Route path="/control-tower/benchmark" element={<Benchmark />} />

          <Route path="/ia/aichat" element={<AIChat />} />
          <Route path="/ia/forecastdrivers" element={<ForecastDrivers />} />
          <Route path="/ia/simulador" element={<SimulationROI />} />

          <Route path="/ejecucion/kanban" element={<KanbanPlaybooks />} />
          <Route path="/ejecucion/coberturas" element={<CoveragePRL />} />
          <Route path="/ejecucion/reporting" element={<ReportingStudio />} />

          <Route path="/admin/roles" element={<RolesPermisos />} />
          <Route path="/admin/config-alertas" element={<ConfigAlertas />} />
          <Route path="/admin/roles" element={<RolesPermisos />} />
          <Route path="/admin/auditoria" element={<LogsAuditoria />} />

          <Route path="/sitemap" element={<Sitemap />} />

          <Route path="/plantilla-vacia" element={<PlantillaVacia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
