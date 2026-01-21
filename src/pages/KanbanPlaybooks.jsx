import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import Footer from "../components/Footer";

const initialTasks = {
  todo: [
    { id: "1", user: "Juan Pérez", days: 5, cost: 650, action: "Entrevista de Retorno", risk: "Crítico" },
    { id: "2", user: "Ana Gómez", days: 2, cost: 240, action: "Validación Médica", risk: "Medio" },
    { id: "5", user: "Roberto Sanz", days: 8, cost: 980, action: "Ajuste de Turnicidad", risk: "Muy Alto" },
  ],
  inProgress: [
    { id: "3", user: "Carlos Ruiz", days: 12, cost: 1560, action: "Plan de Reincorporación", risk: "Crítico" },
    { id: "6", user: "Elena Nito", days: 4, cost: 410, action: "Entrevista por Fatiga", risk: "Alto" },
  ],
  done: [
    { id: "4", user: "Lucía Martos", days: 1, cost: 120, action: "Check-in Salud", risk: "Bajo" },
  ]
};

const KanbanPlaybooks = () => {
  const [data, setData] = useState(initialTasks);

  useEffect(() => {
    document.body.classList.remove("login-page");
  }, []);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceCol = Array.from(data[source.droppableId]);
    const destCol = Array.from(data[destination.droppableId]);
    const [movedItem] = sourceCol.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceCol.splice(destination.index, 0, movedItem);
      setData({ ...data, [source.droppableId]: sourceCol });
    } else {
      destCol.splice(destination.index, 0, movedItem);
      setData({ ...data, [source.droppableId]: sourceCol, [destination.droppableId]: destCol });
    }
  };

  const getColumnTitle = (key) => {
    if (key === "todo") return "Pendiente";
    if (key === "inProgress") return "En Ejecución";
    return "Finalizado";
  };

  return (
    <>
      <Header />
      <LeftSideBar />
      <div className="main-container">
        <div className="pd-ltr-20">
          <div className="page-header mt-0 mb-30 pd-20 bg-white border-radius-10 shadow-sm d-flex justify-content-between align-items-center">
            <div>
              <h4 className="text-blue">Kanban de Playbooks Preventivos</h4>
              <p className="mb-0 text-secondary">Gestión por excepción: Tareas prioritarias por impacto financiero.</p>
            </div>
            <div className="text-right">
              <span className="d-block font-12 text-muted">Pérdida Activa Total</span>
              <span className="h4 text-danger mb-0">€3.960</span>
            </div>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <div className="row">
              {Object.keys(data).map((columnId) => (
                <div className="col-lg-4 mb-30" key={columnId}>
                  <div className="bg-light pd-20 border-radius-10 height-100-p" style={{ minHeight: "500px" }}>
                    <h5 className="h5 mb-20 d-flex justify-content-between">
                      {getColumnTitle(columnId)}
                      <span className="badge badge-pill badge-secondary">{data[columnId].length}</span>
                    </h5>

                    <Droppable droppableId={columnId}>
                      {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} style={{ minHeight: "100px" }}>
                          {data[columnId].map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="card-box mb-15 pd-20 shadow-sm border-0 bg-white"
                                  style={{
                                    ...provided.draggableProps.style,
                                    borderLeft: task.cost > 1000 ? '5px solid #ff5b5b' : '5px solid #f1b44c'
                                  }}
                                >
                                  <div className="d-flex justify-content-between mb-2">
                                    <span className={`badge ${task.cost > 1000 ? 'badge-danger' : 'badge-warning'}`}>{task.risk}</span>
                                    <span className="font-12 text-muted"><i className="fa fa-clock-o"></i> {task.days}d retraso</span>
                                  </div>
                                  <h6 className="font-14 mb-1">{task.user}</h6>
                                  <p className="font-12 text-blue weight-700 mb-10">{task.action}</p>
                                  <div className="pt-10 border-top d-flex justify-content-between align-items-center">
                                    <div>
                                      <small className="d-block text-muted">Coste Acumulado</small>
                                      <span className="weight-700 text-dark">€{task.cost}</span>
                                    </div>
                                    <i className="fa fa-ellipsis-v text-muted"></i>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                </div>
              ))}
            </div>
          </DragDropContext>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default KanbanPlaybooks;