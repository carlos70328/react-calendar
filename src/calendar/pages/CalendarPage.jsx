import { useEffect, useState } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEventBox, Navbar, CalendarModal, FabAddNew, FabDelete } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useUiStore, useCalendarStore, useAuthStore } from "../../hooks";

export const CalendarPage = () => {
   const { openDateModal } = useUiStore();
   const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
   const { user } = useAuthStore();
   const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "week");

   const eventStyleGetter = (event, start, end, isSelected) => {
      const isMyEvent = user.uid === event.user._id || user.uid === event.user.uid;

      const style = {
         backgroundColor: isMyEvent ? "#347CF7" : " #424141",
         borderRadius: "0px",
         opacity: 0.8,
         color: "white"
      };
      return { style };
   };

   const onSelect = (event) => {
      setActiveEvent(event);
   };
   const onViewChanged = (event) => {
      localStorage.setItem("lastView", event);
   };

   useEffect(() => {
      startLoadingEvents();
   }, []);
   return (
      <>
         <Navbar />
         <Calendar
            culture="es"
            localizer={localizer}
            events={events}
            defaultView={lastView}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "calc(100vh - 80px)" }}
            messages={getMessagesES()}
            eventPropGetter={eventStyleGetter}
            components={{
               event: CalendarEventBox
            }}
            onDoubleClickEvent={openDateModal}
            onSelectEvent={onSelect}
            onView={onViewChanged}
         />

         <FabAddNew />
         <FabDelete />

         <CalendarModal />
      </>
   );
};
