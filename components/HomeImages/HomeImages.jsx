import React from 'react'
import "./HomeImages.scss";

const heroImages = [
    { imgUrl: "../../src/assets/images/umbreon.svg", alt: "umbreon vmax card"},
    { imgUrl: "../../src/assets/images/giratina.svg", alt: "giratina v card"},
    { imgUrl: "../../src/assets/images/mew.svg", alt: "mew ex card"},
    { imgUrl: "../../src/assets/images/machamp.svg", alt: "machamp v card"},
    { imgUrl: "../../src/assets/images/glaceon.svg", alt: "glaceon vmax card"},
]

const HomeImages = () => {
  return (
    <div className="homeimages">
{heroImages.map((image, index) => (
            <img key={index} src={image.imgUrl} alt={image.alt} className={`homeimages__card index-${index}`}/>
        ))}
        
    </div>
  )
}

export default HomeImages