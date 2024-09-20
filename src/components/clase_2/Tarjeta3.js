import Boton from "./Boton"

const Tarjeta = () => {
  return (
    <>
    <div className="tarjeta">
       
       <div className="Circulo"> 
        <img src="https://media.istockphoto.com/id/517515788/es/foto/retrato-de-adolescente-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=o25i3MtZZF48JwWn0uidjHlwIqA7LMgTTDPSG4t-PhA=" alt="Calafate"/> 
       </div>
       
       
        <h3>
         David Drown

        </h3>
        <p>
        Graphic Designer
        </p>

        <Boton/>

        
      
    </div>
    <style jsx>{



    `
.Circulo{
  border: 3px solid white; /* Grosor y color del borde */
  border-radius: 50%; /* Hace que sea un círculo */
  padding: .1%; /* Ajusta según sea necesario */
  display: flex;
  justify-content: center;
  align-items: center;

}


.tarjeta{
  margin:50px;
  width:250px;
  border-radius: .5rem;
  flex-direction: column;
  display:flex;
  align-items:center;
  
  
  }
  img {
  width: 150px; /* O cualquier tamaño que prefieras */
  height: 150px;
  padding:2%;
  border-radius: 50%; /* Esto hace que la imagen se redondee */
}

 

  h3 {
  font-size: 1.2rem;
  line-height:2;

  }
  p{
  font-size: .8rem;
  line-height:1.5;

  }

   div {
  background-color: rgba(255, 255, 255, 0.2); /* Blanco translúcido */
  padding: 20px; /* Opcional, para espaciar el contenido dentro del div */
}
  

h3 {
  font-weight: bold; 
  color:white;
}

p {
  font-weight: 800;
  color:white; 
}
    
    `
    
}</style>




    </>
  )
}

export default Tarjeta
