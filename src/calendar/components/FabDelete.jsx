import React from "react";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {
   const { startDeleteEvent, hasEventSelected } = useCalendarStore();
   const { isDateModalOpen } = useUiStore();

   const handleDelete = () => {
      startDeleteEvent();
   };
   return (
      <button
         className="btn btn-danger fab-danger"
         style={{
            display: hasEventSelected && !isDateModalOpen ? "" : "none"
         }}
         onClick={handleDelete}
      >
         {" "}
         <i className="fas fa-trash-alt"></i>
      </button>
   );
};
