import '../Reports/index.css'
import './index.css'

const FinancialSection = (props)=>{
    const {details} = props
    return(
        <div className='reportsPosterArrange'>
            <div className='financialReportsContainer'>
                <img className='reportsPoster' src = {details.image}/>
                <h1 className='yearNumberReports'>{details.year} Annual Reports</h1>
                <button className='reportsKnowMoreButton'>KNOW MORE</button>
            </div>
        </div>
    )
}

export default FinancialSection