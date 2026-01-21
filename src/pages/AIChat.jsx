import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";
import RightSidebar from "../components/RightSidebar";

// Importación corregida con el nuevo nombre del componente
import AIModal from "../components/IAModal";

import "../../public/vendors/styles/AIChat.css";

const AIChat = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const [activeChatId, setActiveChatId] = useState(1);

  const [allMessages, setAllMessages] = useState({
    1: [
      {
        id: 101,
        type: "admin",
        text: "Hola Ana. ¿En que te puedo ayudar hoy?",
        time: "09:40 PM",
      },
    ],
    2: [
      {
        id: 201,
        type: "admin",
        text: "Iniciando validación de ERP... Se detectaron 5 duplicados.",
        time: "Yesterday",
      },
      { id: 202, type: "user", text: "¿En qué tablas?", time: "Yesterday" },
    ],
    3: [
      {
        id: 301,
        type: "admin",
        text: "Error de mapeo en Variable X solucionado.",
        time: "Monday",
      },
    ],
  });

  const [conversations] = useState([
    { id: 1, title: "Análisis Predictivo Q1", status: "online" },
    { id: 2, title: "Validación de Datos ERP", status: "active 5 min" },
    { id: 3, title: "Error en Mapeo Variable X", status: "offline" },
  ]);

  const currentChatHistory = allMessages[activeChatId] || [];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allMessages, isTyping]);

  const getAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    if (input.includes("hola"))
      return "¡Hola! ¿En qué puedo ayudarte con este hilo de conversación?";
    return "He registrado tu consulta en el historial de este análisis. ¿Deseas proceder?";
  };

  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (!message.trim() || isTyping) return;

    const userTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newUserMsg = {
      id: Date.now(),
      type: "user",
      text: message,
      time: userTime,
    };

    setAllMessages((prev) => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newUserMsg],
    }));

    const currentInput = message;
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        type: "admin",
        text: getAIResponse(currentInput),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setAllMessages((prev) => ({
        ...prev,
        [activeChatId]: [...(prev[activeChatId] || []), aiMsg],
      }));
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <Header onSettingsClick={() => setIsRightSidebarOpen(true)} />
      <RightSidebar
        isOpen={isRightSidebarOpen}
        setIsOpen={setIsRightSidebarOpen}
      />
      <LeftSideBar />

      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="page-header">
            <div className="row align-items-center">
              {/* Columna del Título */}
              <div className="col">
                <div className="title">
                  <h4 className="mb-0">AI Copiloto LLM</h4>
                </div>
              </div>

              {/* Columna del Botón (Alineada a la derecha) */}
              <div className="col-auto">
                <button
                  className="btn btn-sm btn-primary border-radius-10"
                  data-toggle="modal"
                  data-target="#benchmark-ia-modal"
                >
                  <i className="fa fa-info-circle mr-1"></i> Guía Copiloto LLM
                </button>
              </div>
            </div>
          </div>

          <div className="ai-chat-layout">
            <aside className="ai-chat-sidebar d-none d-md-flex">
              <div className="ai-history-header">Historial de Consultas</div>
              <div className="customscroll" style={{ flex: 1, width: "100%" }}>
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`ai-conv-item ${activeChatId === conv.id ? "active" : ""}`}
                    onClick={() => setActiveChatId(conv.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="ai-conv-title">{conv.title}</div>
                    <div className="ai-conv-status">● {conv.status}</div>
                  </div>
                ))}
              </div>
            </aside>

            <main className="ai-chat-main">
              <div className="ai-scroll-area customscroll">
                {currentChatHistory.map((msg) => (
                  <div
                    key={msg.id}
                    className={`ai-message ${msg.type === "admin" ? "ai-message-admin" : "ai-message-user"}`}
                  >
                    <div className="ai-msg-label">
                      {msg.type === "admin" ? "SYSTEM AI" : "ANALISTA"}
                    </div>
                    <div className="ai-msg-text">{msg.text}</div>
                    <div className="ai-msg-time">{msg.time}</div>
                  </div>
                ))}

                {isTyping && (
                  <div className="ai-message ai-message-admin">
                    <div className="ai-msg-label">SYSTEM AI</div>
                    <div className="ai-typing-indicator">Analizando...</div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="ai-chat-input-area">
                <form className="ai-input-wrapper" onSubmit={handleSendMessage}>
                  <textarea
                    className="ai-textarea"
                    placeholder={`Mensaje en "${conversations.find((c) => c.id === activeChatId)?.title}"...`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <button
                    type="submit"
                    className="ai-send-btn"
                    disabled={isTyping}
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </div>

      {/* Renderizado del modal con su nuevo nombre */}
      <AIModal />
    </>
  );
};

export default AIChat;
