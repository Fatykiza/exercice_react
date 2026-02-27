import { useState } from "react";
import PreviousNext from "./PreviousNext";
import Description from "./Description";
import SkillsList from "./skills";

const arrayCard = [
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg",
    nom: "Lamborgini",
    description: "Plus elle voiture de tous le temps",
  },
  {
    image: "https://ds-prod.citroen.in/static-assets/ds-static/s3fs-public/2025-08/C3_X_HP_section_640x1120.jpg?gaw_sY7squ.6L52gCTPirZ9kyC9VqYeY",
    nom: "SUV",
    description: "Grosse voiture",
  },
  {
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Jaguar/F-Pace/10644/1755774688332/front-left-side-47.jpg?impolicy=resize&imwidth=480",
    nom: "Jaguar",
    description: "Jaguar est l'une des meilleures marques de voture",
  },
  {
    image: "https://en.drivar.de/wp-content/uploads/2025/05/Rolls-Royce-La-Rose-Noire-Droptail.png",
    nom: "Price list",
    description: "voture la plus chere du monde",
  },
  {
    image: "https://www.rushlane.com/wp-content/uploads/2024/11/mahindra-be-6e-official-photos-18.jpg",
    nom: "Mahindra",
    description: "Prochaine voitue electric de 2025",
  },
]

function Card() {
  const [indice,setIndice] = useState(0)
  const card = arrayCard[indice]
  console.log(card)
  return (
    <>
     <img src= {card.image} alt= {card.nom} />
     <Description  card={card}/>
     <SkillsList/>
     <PreviousNext indice={indice} setIndice={setIndice} arrayCard={arrayCard}/>
    </>
  )
}
export default Card;
