import React, {Component} from 'react';
import ReportsImage from '../ReportsImage';
import './index.css'

class Reports extends Component{
    openPdf = (e)=>{
        e.preventDefault();
        window.open('/public/Images/annualReport2021-22.pdf', '_blank');
    }

    render(){
        return(
            <div className='reportsContainerBg'>
                <img src = "/Images/AnnualReportsImage.png"/>
                <div className='reportsButtonContainer'>
                    <div className='buttonReportsContainer'>
                        <button className='buttonReports'>Annual reports</button>
                    </div>
                    <div className='buttonReportsContainer'>
                        <button className='buttonReports'>Financial reports</button>
                    </div>
                    <div className='buttonReportsContainer'>
                        <button className='buttonReports'>Statutory document</button>
                    </div>
                    <div className='buttonReportsContainer'>
                        <button className='buttonReports'>Carrier guidance</button>
                    </div>
                </div>
                <div className='reportsPosterArrange'>
                    <div className='reportsPosterContainer'>
                        <img className='reportsPoster' src = "/Images/annualReportPoster.jpg"/>
                        <h1 className='yearNumberReports'>2023 Annual Reports</h1>
                        <button onClick = {this.openPdf} className='reportsKnowMoreButton'>KNOW MORE</button>
                    </div>
                    <div className='reportsPosterContainer'>
                        <img className='reportsPoster' src = "/Images/annualReportPoster.jpg"/>
                        <h1 className='yearNumberReports'>2023 Annual Reports</h1>
                        <button className='reportsKnowMoreButton'>KNOW MORE</button>
                    </div>
                    <div className='reportsPosterContainer'>
                        <img className='reportsPoster' src = "/Images/annualReportPoster.jpg"/>
                        <h1 className='yearNumberReports'>2023 Annual Reports</h1>
                        <button className='reportsKnowMoreButton'>KNOW MORE</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Reports