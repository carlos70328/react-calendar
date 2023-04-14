import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";
import HomePage from "../medical/page/HomePage";

export const AppRouter = () => {
   const { status, checkAuthToken } = useAuthStore();

   useEffect(() => {
      checkAuthToken();
   }, []);

   if (status === "checking") {
      return <h3>Cargando...</h3>;
   }


   return (
      <Routes>
         {status !== "authenticated" ? (
            <>
               <Route path="/" element={<HomePage />} />
               <Route path="/auth/login" element={<LoginPage />} />
               <Route path="/*" element={<Navigate to="/" />} />

            </>
         ) : (
            <>
               <Route path="/" element={<HomePage />} />
               <Route path="/calendar" element={<CalendarPage />} />
               <Route path="/*" element={<Navigate to="/" />} />
            </>
         )}
      </Routes>
   );
};
