import '../Reports/index.css'

const AnnualReport = (props)=>{
    const {details, handleClick} = props
    const {image, description, pdfLink} = details
    let a;
    const knowMoreRedirect = ()=>{
        handleClick(pdfLink)
    }
    return(
            <div className='reportsPosterContainer'>
                <img className='reportsPoster' src = {details.image}/>
                <h1 className='yearNumberReports'>{details.description}</h1>
                <button onClick = {knowMoreRedirect} className='reportsKnowMoreButton'>KNOW MORE</button>
            </div>
    )
}

export default AnnualReport