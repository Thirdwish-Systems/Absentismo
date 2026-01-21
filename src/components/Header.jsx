import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = ({ onSettingsClick }) => {
  const { i18n } = useTranslation();
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  // Función para ejecutar el cambio de idioma global
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Función para obtener las iniciales del idioma actual (ES, EN, FR, DE)
  const getLangCode = () => {
    return (i18n.language || "es").substring(0, 2).toUpperCase();
  };

  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-icon dw dw-menu"></div>
        <div
          className="search-toggle-icon dw dw-search2"
          data-toggle="header_search"
        ></div>
        <div className="header-search">
          <form>
            <div className="form-group mb-0">
              <i className="dw dw-search2 search-icon"></i>
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search Here"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="header-right">
        {/* SELECTOR DE IDIOMA - Estilo uniforme con los otros botones */}
        <div className="user-notification">
          <div className="dropdown">
            <a
              className="dropdown-toggle no-arrow d-flex align-items-center"
              href="#"
              role="button"
              data-toggle="dropdown"
              style={{ textDecoration: "none" }}
            >
              <span 
                className="ml-1 font-weight-bold" 
                style={{ fontSize: "12px", color: "#101011", lineHeight: "1" }}
              >
                {getLangCode()}
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow border-0">
              <h6 className="dropdown-header">Seleccionar Idioma</h6>
              <button className="dropdown-item" onClick={() => changeLanguage("es")}>
                <span className="mr-2">🇪🇸</span> Español
              </button>
              <button className="dropdown-item" onClick={() => changeLanguage("en")}>
                <span className="mr-2">🇺🇸</span> English
              </button>
              <button className="dropdown-item" onClick={() => changeLanguage("fr")}>
                <span className="mr-2">🇫🇷</span> Français
              </button>
              <button className="dropdown-item" onClick={() => changeLanguage("de")}>
                <span className="mr-2">🇩🇪</span> Deutsch
              </button>
            </div>
          </div>
        </div>

        {/* Rueda dentada (Settings) */}
        <div className="dashboard-setting user-notification">
          <div className="dropdown">
            <a
              className="dropdown-toggle no-arrow"
              href="javascript:;"
              onClick={onSettingsClick}
            >
              <i className="dw dw-settings2"></i>
            </a>
          </div>
        </div>

        {/* Campana de Notificaciones (Link Directo, sin badge) */}
        <div className="user-notification">
          <div className="dropdown">
            <Link className="dropdown-toggle no-arrow" to="/control-tower/alarmas">
              <i className="icon-copy dw dw-notification"></i>
            </Link>
          </div>
        </div>

        {/* Perfil de Usuario */}
        <div className="user-info-dropdown">
          <div className={`dropdown ${showUserDropdown ? "show" : ""}`}>
            <a
              className="dropdown-toggle"
              href="javascript:;"
              onClick={() => setShowUserDropdown(!showUserDropdown)}
            >
              <span className="user-icon">
                <img src="/Absentismo/images/ana_delgado.jpg" alt="User" />
              </span>
              <span className="user-name">Ana Delgado</span>
            </a>
            <div
              className={`dropdown-menu dropdown-menu-right dropdown-menu-icon-list ${
                showUserDropdown ? "show" : ""
              }`}
            >
              <a className="dropdown-item" href="#">
                <i className="dw dw-user1"></i> Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="dw dw-settings2"></i> Setting
              </a>
              <Link className="dropdown-item" to="/">
                <i className="dw dw-logout"></i> Log Out
              </Link>
            </div>
          </div>
        </div>

        {/* Link a GitHub */}
        <div className="github-link">
          <a
            href="https://franciscoalanzavesromero.github.io/CV/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Absentismo/images/github.svg" alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;