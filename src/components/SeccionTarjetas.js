import React from "react"
import ListaTarjeta from "./clase_2/ListaTarjeta"

const SeccionTarjetas = () => {
  return (
   <>
   <section>
    <header>
  
<h2>Tarea 1 de React </h2>

<p>Creando tarjetas usando el metodo Atomic Designer</p>

    </header>

 <ListaTarjeta/>

   </section>
   <style jsx>{
    `
    section {
    
    display:flex;
    flex-direction:column;
    aling-items:center;
    }
    
    header{
    
    text-align:center;
    }
    
    h2{
    text-size:2rem;
    line-height:2;

    
    }
    p{
     text-size:1.2rem;
     line-height:1.5;
    }
    
    

    `
    
    
    }




   </style>


   
   
   
   
   
   </>
  )
}

export default SeccionTarjetas
