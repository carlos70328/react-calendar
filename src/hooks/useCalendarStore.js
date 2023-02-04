import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent, onDeleteEvent } from "../store";

export const useCalendarStore = () => {
   const dispatch = useDispatch();
   const { events, activeEvent } = useSelector((state) => state.calendar);

   const setActiveEvent = (calendarEvent) => {
      dispatch(onSetActiveEvent(calendarEvent));
   };

   const startSavingEvent = async (calendarEvent) => {
      if (calendarEvent._id) {
         // Actualizando Evento
         dispatch(onUpdateEvent({ ...calendarEvent }));
      } else {
         // creando nuevo Evento
         dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
      }
   };

   const startDeleteEvent = async () => {
      dispatch(onDeleteEvent());
   };

   return {
      //propiedades
      events,
      activeEvent,
      hasEventSelected: !!activeEvent,

      //Metodos
      setActiveEvent,
      startSavingEvent,
      startDeleteEvent
   };
};
