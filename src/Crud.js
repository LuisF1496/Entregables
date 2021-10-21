import React, { Component } from "react";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./Componentes/Forms";
import TodoList from "./Componentes/TodoList";
import Title from "./Componentes/Title";


const crud = ({handleLogout}) => {

    return(
        <section className="crud">
            <nav>
                <h2>Bienvenido</h2>
                <button  onClick={handleLogout}>Cerrar Sesión</button>
            </nav>  

            <div className="container">
            <div className="app-wrapper">
            <div>
                 <Title />
             </div>
             <div>
                 <Forms />
             </div>
             <div>
             <TodoList />
             </div>
             </div>
            </div>
                
        </section>

        
    )};


  
export default crud;