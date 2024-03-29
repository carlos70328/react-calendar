import { addHours } from "date-fns";
import React from "react";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
   const { openDateModal } = useUiStore();
   const { setActiveEvent } = useCalendarStore();

   const handleClickNew = () => {
      openDateModal();
      setActiveEvent({
         title: "",
         notes: "",
         start: new Date(),
         end: addHours(new Date(), 2),
         bgColor: "#fafafa",
         user: {
            uid: "123",
            name: "Carlos"
         }
      });
   };
   return (
      <button className="btn btn-primary fab" onClick={handleClickNew}>
         {" "}
         <i className="bi bi-plus-lg"></i>
      </button>
   );
};
