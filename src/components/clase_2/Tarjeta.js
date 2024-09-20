import Boton from "./Boton"

const Tarjeta = () => {
  return (
    <>
    <div className="tarjeta">
      <div className="Circulo">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/032/417/small/chinese-young-guy-student-with-glasses-smiling-generative-ai-photo.jpg" alt="Calafate"/> 
       
        </div>
       
        <h3>
         JAMES WILSON

        </h3>
        <p>
        Software Developer 
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
