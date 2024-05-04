import '../Volunteer/index.css'

const VolunteerCardItem = (props)=>{
    let a;
    const {details} = props
    const {number, description} = details
    return(
        <div className='arrangeInstructionContainer'>
                <div className='numberContainer'>{number}.</div>
                <div className = "numberParaEleContainer">
                    <p className='numberParaElement'>{description}</p>
                </div>
            </div>
    )
}

export default VolunteerCardItem