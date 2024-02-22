import React from 'react'
import { ArrowBigLeft,ArrowBigRight } from 'lucide-react'
type ImageSliderProps = {
    imageUrls: string[]
}

function ImageSlider({ imageUrls} : ImageSliderProps) {
    const [imageIndex, setImageIndex] = React.useState(0)

    function shownext() {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })

    }
    function showprev() {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    }
  return (
    <div className='div'>
        <img src={imageUrls[imageIndex]} className='img'  alt='img'/>
        <button className='but' onClick={showprev}><ArrowBigLeft/></button>
        <button className='butt' onClick={shownext}><ArrowBigRight/></button>
    </div>
  )
}

export default ImageSlider