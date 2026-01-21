import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import HelpModal from "../components/HelpModal";

const PlantillaVacia = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.classList.remove("login-page");
  }, []);

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
          <div className="page-header mt-0 mb-30 shadow-sm d-flex justify-content-between align-items-center pd-20 bg-white border-radius-10">
            <div>
              <h4 className="text-blue">Laboratorio de Ideas</h4>
              <p className="mb-0 text-muted">Aquí es donde ocurre la magia (cuando añadas código).</p>
            </div>
            <button
              className="btn btn-primary btn-sm rounded-pill shadow-sm"
              data-toggle="modal"
              data-target="#help-modal"
            >
              <i className="fa fa-flask mr-2"></i> Guía de Experimentos
            </button>
          </div>

          <div className="row">
            <div className="col-md-12 mb-30">
              <div className="card-box pd-20 height-100-p shadow-sm hover-card">
                <div className="text-center pd-30">
                  {/* ICONO ANIMADO */}
                  <div className="animation-container mb-30">
                    <i
                      className="dw dw-ghost text-light-blue floating-icon"
                      style={{ fontSize: "60px", display: "inline-block" }}
                    ></i>
                  </div>
                  
                  <h5 className="mt-20 weight-700">¡Vaya! Un lienzo en blanco...</h5>
                  <p className="font-16">
                    Esta plantilla vacia, sirve para avanzar en nuevas pantalla a desarrollar!
                    De nada!
                    
                    Fran
                  </p>
                  
                  <div className="mt-4">
                    <button className="btn btn-outline-primary rounded-pill px-4 btn-pulse">
                      <i className="fa fa-rocket mr-2"></i> Despegar nuevo proyecto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <HelpModal />

      {/* ESTILOS DE ANIMACIÓN */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Animación de flotación para el fantasma */
        .floating-icon {
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        /* Efecto de elevación para la tarjeta */
        .hover-card {
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          border-color: #1b00ff;
          box-shadow: 0 10px 20px rgba(27, 0, 255, 0.1) !important;
        }

        /* Botón con pulso sutil */
        .btn-pulse {
          animation: pulse-blue 2s infinite;
        }

        @keyframes pulse-blue {
          0% { box-shadow: 0 0 0 0 rgba(27, 0, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(27, 0, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(27, 0, 255, 0); }
        }
      `}} />
    </>
  );
};

export default PlantillaVacia;