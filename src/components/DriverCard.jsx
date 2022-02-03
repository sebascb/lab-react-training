import Rating from './Rating';

const DriverCard = ({name, rating, img, car}) => {
    const model = car.model;
    const licensePlate = car.licensePlate;

    return(
        <div className='driverCard'>
            <img className='photo' src={img} alt='Driver' />
        
            <div className='infoDriver'>
                <h2>{name}</h2>
                
                <Rating>{rating}</Rating>
                
                <p>{model} {licensePlate}</p>
            </div>


        </div>
    )


}


export default DriverCard;