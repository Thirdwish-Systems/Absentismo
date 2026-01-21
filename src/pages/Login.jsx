import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getLanguageName = () => {
    switch(i18n.language) {
      case 'en': return 'English';
      case 'fr': return 'Français';
      case 'de': return 'Deutsch'; 
      default: return 'Español';
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* NAVBAR SUPERIOR */}
      <div className="login-header box-shadow">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="brand-logo">
            <a href="#">
               {/* INSERTAR LOGOTIPO <img src="/vendors/images/deskapp-logo.svg" alt="Logo" />   */}
            </a>
          </div>
          <div className="login-menu">
            <ul className="d-flex align-items-center" style={{ listStyle: 'none', margin: 0 }}>
              <li className="dropdown">
                <a
                  className="dropdown-toggle text-primary weight-600"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-globe mr-2"></i>
                  {getLanguageName()}
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow border-0">
                  <button className="dropdown-item" onClick={() => changeLanguage('es')}>
                    <span className="mr-2">🇪🇸</span> Español
                  </button>
                  <button className="dropdown-item" onClick={() => changeLanguage('en')}>
                    <span className="mr-2">🇺🇸</span> English
                  </button>
                  <button className="dropdown-item" onClick={() => changeLanguage('fr')}>
                    <span className="mr-2">🇫🇷</span> Français
                  </button>
                  <button className="dropdown-item" onClick={() => changeLanguage('de')}>
                    <span className="mr-2">🇩🇪</span> Deutsch
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CONTENIDO CENTRADO Y MÁS ANCHO */}
      <div className="login-wrap d-flex align-items-center justify-content-center flex-grow-1">
        <div className="container">
          <div className="row align-items-center">
            {/* Columna de imagen (un poco más pequeña) */}
            <div className="col-md-5 col-lg-5 d-none d-md-block">
              <img src="/Absentismo/images/login-page-img.png" alt="login" />
            </div>
            
            {/* Columna de formulario (Más ancha: col-lg-7) */}
            <div className="col-md-7 col-lg-7">
              <div className="login-box bg-white box-shadow border-radius-10 p-4" style={{ maxWidth: '100%', width: '500px', margin: 'auto' }}>
                <div className="login-title">
                  <h2 className="text-center text-primary">
                    {t("Gestión del absentismo")}
                  </h2>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="input-group custom">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder={t("Usuario")}
                    />
                    <div className="input-group-append custom">
                      <span className="input-group-text">
                        <i className="icon-copy dw dw-user1"></i>
                      </span>
                    </div>
                  </div>
                  <div className="input-group custom">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="**********"
                    />
                    <div className="input-group-append custom">
                      <span className="input-group-text">
                        <i className="dw dw-padlock1"></i>
                      </span>
                    </div>
                  </div>
                  <div className="row pb-30">
                    <div className="col-6">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">
                          {t("Recordar")}
                        </label>
                      </div>
                    </div>
                    <div className="col-6 text-right">
                      <div className="forgot-password">
                        <a href="#">{t("¿Olvidaste tu contraseña?")}</a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-group mb-0">
                        <button className="btn btn-primary btn-lg btn-block" type="submit">
                          {t("Ingresar")}
                        </button>
                      </div>
                      <div className="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">
                        {t("O")}
                      </div>
                      <div className="input-group mb-0">
                        <a className="btn btn-outline-primary btn-lg btn-block" href="#">
                          {t("Crear cuenta")}
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;