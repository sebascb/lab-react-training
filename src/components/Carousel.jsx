import { useState } from "react"

const Carousel = ( {images} ) => {
    const [index, setIndex] = useState(0);

    const handleLeftClick = () => {
        if (index !== 0) {
            setIndex(index - 1);
        } else {
            setIndex(3);
        }
        return(
            <button onClick={handleLeftClick}>Left</button>
        )
    };

    const handleRightClick = () => {
        if (index !== 3) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
        return(
            <button onClick={handleRightClick}>Right</button>
        )
    };

    return (
        <div className="carousel">
            <img className="carousel" src={images[index]}  alt="carouselImages" />
            <div className="carouselBtn">
                <button onClick={handleLeftClick}>Left</button>
                <button onClick={handleRightClick}>Right</button>
            </div>  
        </div>
    )
}
export default Carousel;