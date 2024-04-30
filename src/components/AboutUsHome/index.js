import ReactPlayer from 'react-player';
import "./index.css"

const AboutUsHomeSection = ()=>{
    let a;
    return(
        <div class = "arrange-about-us">
            <div className='arrange-video-large-screen'>
            <div>
                <h1 className='about-main-heading'>ASWA Organisation</h1>
            </div>
            <div className="video-container">
                <ReactPlayer width="80%" height= "225px" style={{borderRadius:"8px", border: "3px solid black", borderWidth: "10px", minWidth : "202px"}} 
                    url="https://youtu.be/aSSbjNIl1HA?si=ps0i2THZu_qEAwrC"
                    controls={true}
                />
            </div>
            <div className='about-contents-container'>
                <p className='about-heading'>Love all serve all</p>
                <p className='about-para'>ASWA, the Amma Social Welfare Association, is a beacon of compassion and
                change, dedicated to uplifting the lives of the marginalized and under-served
                across various facets of society. Founded with a vision of holistic development,
                ASWA has embarked on a transformative journey spanning over a decade,
                leaving an indelible mark through its multifaceted initiatives. From educational
                empowerment and environmental sustainability to healthcare accessibility and
                emotional support, ASWAs diverse projects address pressing societal needs
                with unwavering dedication and innovation.</p>
            </div>
            <div className='button-container'>
                <button className='button-about'>KNOW MORE</button>
                <button className='button-about'>DONATE</button>
            </div>
            </div>
            <div className="video-container large-screen-video">
                <ReactPlayer width="100%" height= "300px" style={{borderRadius:"8px", border: "3px solid black", borderWidth: "10px", maxWidth: "572px"}} 
                    url="https://youtu.be/aSSbjNIl1HA?si=ps0i2THZu_qEAwrC"
                    controls={true}
                />
            </div>
            
        </div>

    )
}

export default AboutUsHomeSection