import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import emeraude from '../assets/images/gites/emeraude/chambre.jpg'
import opale from '../assets/images/gites/opale/chambre.jpg'
import topaze from '../assets/images/gites/topaze/chambre.jpg'
import turquoise from '../assets/images/gites/turquoise/chambre.jpg'
import view1 from '../assets/images/excursion/image001.jpg'
import view2 from '../assets/images/excursion/image006.jpg'
import plageStLouis from '../assets/images/excursion/plage-saint-louis.jpg'
import planeview from '../assets/images/excursion/plane-view.jpg'

const photos = [
  {
    photo: emeraude,
    caption: "La chambre du gîte 'Éméraude'",
    subcaption: "Le refuge Hulman, Saint-Louis de Marie-Galante",
    thumbnail: emeraude,
  }, 
  {
    photo: opale,
    caption: "La chambre du gîte 'Opale'",
    subcaption: "Le refuge Hulman, Saint-Louis de Marie-Galante",
    thumbnail: opale,
  }, 
  {
    photo: topaze,
    caption: "La chambre du gîte 'Topaze'",
    subcaption: "Le refuge Hulman, Saint-Louis de Marie-Galante",
    thumbnail: topaze,
  },
  {
    photo: turquoise,
    caption: "La chambre du gîte 'Turquoise'",
    subcaption: "Le refuge Hulman, Saint-Louis de Marie-Galante",
    thumbnail: turquoise,
  },
  {
    photo: view1,
    caption: "Domaine le refuge vue de face",
    subcaption: "Le refuge Hulman, Saint-Louis de Marie-Galante",
    thumbnail: view1,
  },
  {
    photo: view2,
    caption: "le refuge vue de la terasse du gite Turquoise avec la piscine",
    subcaption: "Le refuge Hulman, Saint-Louis de Marie-Galante",
    thumbnail: view2,
  },
  {
    photo: plageStLouis,
    caption: "plage de Saint-Louis au couché du soleil",
    subcaption: "Plage du Bourg, Saint-Louis de Marie-Galante",
    thumbnail: plageStLouis,
  },
  {
    photo: planeview,
    caption: "Baie de Saint-Louis vue en plongée",
    subcaption: "Bourg de Saint-Louis, Saint-Louis de Marie-Galante",
    thumbnail: planeview,
  }
];

const GiteGallerie = ()=>{
  return (
    <Carousel>
      {
        photos.map((val, i)=>(
          <div style={{height:'90vh', witdh:'auto', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img src={val.photo} alt={val.caption} />
            <p className="legend">{val.caption} <br/> {val.subcaption}</p>
          </div>
        ))
      }
    </Carousel>
  )
}
export default GiteGallerie