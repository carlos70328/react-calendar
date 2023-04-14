
import React from "react";
import { useAuthStore, } from "../../hooks";
import { Link } from 'react-router-dom'

export const Navbar = () => {
   const { user, startLogout } = useAuthStore();


   return (
      <div className="navbar navbar-dark bg-dark mb-4 px-4">
         <span className="navbar-brand">
            <i className="bi bi-calendar"></i>
            &nbsp; {user.name}
         </span>

         <div>
            <Link className="btn btn-primary mx-3" to={"/"}>
               <i className="bi bi-backspace"></i> &nbsp;
               Pagina Principal
            </Link>

            <button className="btn btn-outline-danger" onClick={startLogout}>
               <i className="bi bi-box-arrow-left"></i> &nbsp;
               <span>Salir</span>
            </button>

         </div>

      </div>
   );
};
