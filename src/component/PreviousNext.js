import { useState } from "react";

function PreviousNext({indice, setIndice, arrayCard}){

function handlePrevious(){
  if(indice>0) setIndice((indice)=> indice-1)

}
function handleNext(){
   if(indice < (arrayCard.length -1)) setIndice((indice)=> indice+1)
}
function handleBoucle(){
    setIndice((indice)=>(indice+1) % (arrayCard.length))
}

    return(
        <div>
            <button className="button" onClick={handlePrevious}>Prev</button>
            <button className="button" onClick={handleNext}>Nex</button>
            <button className="button" onClick={handleBoucle}>boucle</button>

        </div>
    )

}
export default PreviousNext;