import { useState } from 'react'
import './App.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

// Array
const images = [
  "https://img.freepik.com/free-photo/front-view-young-woman-sitting-around-presents-holding-gold-heart-figure-white-wall_140725-48308.jpg?size=626&ext=jpg&ga=GA1.1.241351099.1705135144&semt=sph",
  "https://img.freepik.com/free-photo/cozy-composition-with-christmas-gift-box-blurred-background_169016-46589.jpg?size=626&ext=jpg&ga=GA1.1.241351099.1705135144&semt=sph",
  "https://img.freepik.com/free-photo/beautiful-snowy-landscape-with-mountains_181624-26450.jpg?size=626&ext=jpg&ga=GA1.1.241351099.1705135144&semt=sph",
  "https://img.freepik.com/free-photo/vibrant-dahlia-blossoms-stand-out-meadow-generated-by-ai_188544-27560.jpg?size=626&ext=jpg&ga=GA1.1.241351099.1705135144&semt=sph",
  "https://img.freepik.com/free-vector/christmas-santa-claus-holding-blank-banner_23-2148355819.jpg?size=626&ext=jpg&ga=GA1.1.241351099.1705135144&semt=sph",
  "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?size=626&ext=jpg&ga=GA1.1.241351099.1705135144&semt=sph",
]

function App() {
const [current, setCurrent] = useState(0);

const nextSlide = ()=> {
  setCurrent(current === images.length - 1 ? 0 : current + 1);
}

const prevSlide = ()=> {
  setCurrent(current === 0 ? images.length - 1 : current - 1);
}

  return (
    <>
     <h3 className='text-2xl mb-10 mt-5 text-center'>Custom Carousel Using React</h3>
     {/* Carousel */}
     <div className='container mx-auto px-5'>
      <div className='relative'>
        {
          images.map((image, index)=> 
          current === index && (
            <div key={index}>
              <img className='w-full md:h-[60vh] object-center object-cover scale-up-center' src={image} alt="Protamim" />
            </div>
          ))
        }
        {/* Next - Prev Buttons */}
        <button onClick={prevSlide} className='absolute left-7 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-950 py-2 px-3 text-white rounded-l-full'>
          <FaArrowLeftLong />
        </button>
        <button onClick={nextSlide} className='absolute -right-[14px] top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-950 py-2 px-3 text-white rounded-r-full'>
          <FaArrowRightLong />
        </button>
      </div>
     </div>
    </>
  )
}

export default App
