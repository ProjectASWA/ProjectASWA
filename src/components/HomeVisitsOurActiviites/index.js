import '../HomeVisits/index.css'

const HomeVisitsOurActiviteis = (props) => {
    const {details} = props
    return (
        <div className="listStyleItemHomeVisits">
            <div className="arrowImageContainer">
            <img className = "arrowImageHomeVisits" src="/Images/arrowIndicate.png" />
            </div>
            <p className="subHeadingHomeVisits">
                {details.description}
            </p>
          </div>
    )

}

export default HomeVisitsOurActiviteis