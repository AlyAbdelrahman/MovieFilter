import data from '../data';
import React from 'react'
export  const Slides = (props)=>{

return props.data.map(e=>
   
    <div id="cssSlider">
    <div id="sliderImages">
           
        <img id={e.imdbID} src={e.Poster === 'N/A' ? "https://phadvocates.org/wp-content/themes/cardinal/images/default-thumb.png" : e.Poster} alt='https://phadvocates.org/wp-content/themes/cardinal/images/default-thumb.png' />
            
        </div>
    </div>
    //  <div style="clear:left;"></div>
        
    
    )




}