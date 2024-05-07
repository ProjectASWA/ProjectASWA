import './index.css'

const mediaCoveragesImagesObj = [
    {
        id: 1,
        imageUrl: "/Images/mediaCoverage1.jpg"
    },
    {
        id: 2,
        imageUrl: "/Images/mediaCoverage2.png"
    },
    {
        id: 3,
        imageUrl: "/Images/mediaCoverage3.jpg"
    },
    {
        id: 4,
        imageUrl: "/Images/mediaCoverage4.jpg"
    },
    {
        id: 5,
        imageUrl: "/Images/mediaCoverage5.jpg"
    },
    {
        id: 6,
        imageUrl: "/Images/mediaCoverage6.png"
    },
    {
        id: 7,
        imageUrl: "/Images/mediaCoverage7.jpg"
    },
    {
        id: 8,
        imageUrl: "/Images/mediaCoverage8.jpg"
    },
    {
        id: 9,
        imageUrl: "/Images/mediaCoverage9.jpg"
    }
]

const MediaCoverage = ()=>{
    let a;
    return(
        <div>
            <img src = "/Images/mediaCoverageBanner.png" className='mediaCoverageImageBanner'/>
            <div className='mediaCoverageImageContainer'>
                {mediaCoveragesImagesObj.map((eachImage)=>{
                    return(
                        <div>
                            <img src = {eachImage.imageUrl} className='mediaCoverageImageStyling'/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MediaCoverage
