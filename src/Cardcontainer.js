import React from 'react';
import list from './Data.js';
import Cards from './Card.js';

const Cardcontainer = () => {
  return (
   <>
   
    <section>
      
        {
            list.map((item)=>(
                <Cards item={item} />
            ))
        }
    </section>
   </> 
  )
}

export default Cardcontainer;
