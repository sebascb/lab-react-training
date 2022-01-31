const BoxColor = ({r, g, b}) => {
    let backColor = {backgroundColor:`rgb(${r}, ${g}, ${b})`, width: '880px', height: '50px'} 
    return(
        <div className="border" style={backColor}>
            <p className="text">rgb({r}, {g}, {b})</p>  
        </div>
    )
}
export default BoxColor;