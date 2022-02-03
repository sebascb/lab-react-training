const Rating = ({children}) => {

    let roundNum = Math.round(children)
    let stars = ' '
    switch (roundNum) {
        case 0:
            stars = '☆☆☆☆☆';
            break;
        case 1:
            stars = '★☆☆☆☆';
            break;
        case 2:
            stars = '★★☆☆☆';
            break;
        case 3:
            stars = '★★★☆☆';
            break;
        case 4:
            stars = '★★★★☆';
            break;
        case 5:
            stars = '★★★★★';
            break;
        default:
            stars = '💫'
            break;
    }
    return (
        <div className="stars">
          {stars}
        </div>
    )
}
export default Rating;