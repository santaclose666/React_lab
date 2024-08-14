import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const widgets = [
  { id: "1", icon: "./images/calendar.png" },
  { id: "2", icon: "./images//news.png" },
  { id: "3", icon: "./images//task.png" },
  { id: "4", icon: "./images//weather.png" },
];

const App = () => {
  const [items, setItems] = useState(() => {
    const listItem = localStorage.getItem("list");
    return listItem ? JSON.parse(listItem) : widgets;
  });

  const storageList = (data) => {
    localStorage.setItem("list", JSON.stringify(data));
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = [...items];
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    storageList(newItems);

    setItems(newItems);
  };

  const handleReset = () => {
    storageList(widgets);
    setItems(widgets);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-blue-500 text-center mb-10 text-4xl font-bold">
          Drag and Drop
        </h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="items" direction="horizontal">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex flex-row"
              >
                {items.map(({ id, icon }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`bg-blue-400 w-44 h-44 text-white flex items-center justify-center rounded-full mx-2`}
                        style={provided.draggableProps.style}
                      >
                        <img
                          src={icon}
                          alt={id}
                          className="w-1/3 h-1/3 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div
          className="w-full flex items-center justify-center my-6"
          onClick={handleReset}
        >
          <img
            src={"./images/reset.png"}
            alt={"reset"}
            className="w-10 h-10 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
