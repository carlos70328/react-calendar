import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import calendarApi from "../api/calendarApi";
import { convertEventToDate } from "../helpers";
import {
   onAddNewEvent,
   onSetActiveEvent,
   onUpdateEvent,
   onDeleteEvent,
   onLoadEvents
} from "../store";

export const useCalendarStore = () => {
   const dispatch = useDispatch();
   const { events, activeEvent } = useSelector((state) => state.calendar);
   const { user } = useSelector((state) => state.auth);

   const setActiveEvent = (calendarEvent) => {
      dispatch(onSetActiveEvent(calendarEvent));
   };

   const startSavingEvent = async (calendarEvent) => {
      try {
         if (calendarEvent.id) {
            // Actualizando Evento
            await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
            dispatch(onUpdateEvent({ ...calendarEvent, user }));
            return;
         }
         // creando nuevo Evento
         const { data } = await calendarApi.post("/events", calendarEvent);

         dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
      } catch (error) {
         Swal.fire("Error al guardar", error.response.data?.msg, "error");
      }
   };

   const startDeleteEvent = async () => {
      try {
         await calendarApi.delete(`/events/${activeEvent.id}`);
         dispatch(onDeleteEvent());
         Swal.fire("Correcto", "Evento Eliminado", "success");
      } catch (error) {
         Swal.fire("Error al eliminar", error.response.data?.msg, "error");
      }
   };

   const startLoadingEvents = async () => {
      try {
         const { data } = await calendarApi.get("/events");
         const events = convertEventToDate(data.eventos);

         dispatch(onLoadEvents(events));
      } catch (error) {
         console.log(error);
      }
   };

   return {
      //propiedades
      events,
      activeEvent,
      hasEventSelected: !!activeEvent,

      //Metodos
      setActiveEvent,
      startSavingEvent,
      startDeleteEvent,
      startLoadingEvents
   };
};
