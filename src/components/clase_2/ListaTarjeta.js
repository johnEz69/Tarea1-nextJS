import Tarjeta from "./Tarjeta"
import Tarjeta2 from "./Tarjeta2"
import Tarjeta3 from "./Tarjeta3"




const ListaTarjeta = () => {
  return (
   <>
   <div className="tarjetas">{
   <>
   <Tarjeta/>
   <Tarjeta2/>
   <Tarjeta3/>

   
   </> 
   
     }

   </div>
   <style jsx>{`
        .tarjetas {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap; /* Añadido para permitir que las tarjetas se envuelvan si es necesario */
        }
      `}</style>
   </>
  )
}

export default ListaTarjeta
