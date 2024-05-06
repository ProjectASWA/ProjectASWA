import '../HomeVisits/index.css'

const VolunteerCardItem = (props)=>{
    const {details} = props

    return(
        <div className="volunteerContainerHomeVisits">
              <img src = "/Images/leaderHomeVisits.jpg" className="volunteerHomeVisitsImage"/>
              <div className="volunteerTextContentsHomeVisits">
                <h1 className="volunteerMainHeadingHomeVisits">{details.name}</h1>
                <p className="volunteerSubHeadingHomeVisits">{details.role}</p>
                <p className="volunteerDescriptionHomeVisits">{details.description}</p>
              </div>
            </div>
    )
}

export default VolunteerCardItem