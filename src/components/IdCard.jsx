const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return(
        <div className="IdCard">
            <img src={picture} className="picture" alt="picture" />
            <div className="text">
                <strong>First Name: </strong> {firstName} <br />
                <strong>Last Name: </strong> {lastName} <br />
                <strong>Gender: </strong> {gender} <br />
                <strong>Height: </strong> {height/100} m <br />
                <strong>Birth: </strong> {birth.toDateString()} <br />
            </div>    
        </div>
    )
}
export default IdCard;