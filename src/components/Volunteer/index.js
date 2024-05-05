import React , { useState } from 'react'
import VolunteerCardItem from '../VolunteerCardItem'
import './index.css'



const obj = [
    {
        number: 1,
        description: "Participate in our own initiations like Children's Learning Center (CLC) and Children's Library at Shadnagar either on weekends or on weekdays."
    },{
        number: 2,
        description: "Participate in our Weekly / Fortnight volunteer activities/interventions (in Govt. Schools; Orphanages and Old age homes; Conducting blood donation Camps and Awareness; and Relief activities in Natural Calamities)."
    },{
        number: 3,
        description: "Participate in our own initiations like Children's Learning Center (CLC) and Children's Library at Shadnagar either on weekends or on weekdays."
    },{
        number: 4,
        description: "Help us in Administration"
    },{
        number: 5,
        description: "Prepare Activity Updates - Documentation"
    },{
        number: 6,
        description: "Act as admins for Online Zoom Meetings"
    },{
        number: 7,
        description: "New Volunteers mobilization"
    },{
        number: 8,
        description: "Design Whatsapp Flyers and Social Media Posters"
    },{
        number: 9,
        description: "Manage Whatsapp Groups and Communication among groups"
    },{
        number: 10,
        description: "Website Development"
    },{
        number: 11,
        description: "Video Editing"
    },{
        number: 12,
        description: "Social Media Support - Spreading our activities"
    },{
        number: 13,
        description: "Social Media Management (FB, Insta, Twitter, LinkedIn etc.,)"
    },{
        number: 14,
        description: "Accounting and Bookkeeping"
    },{
        number: 15,
        description: "Donate Money"
    }
]
const Volunteer = ()=>{
    const [clicked, setClicked] = useState(false);

    const handleClickEvent = ()=>{
        setClicked(true)
    }

    return(
        <div className='arrangeBgVolunteer'>
            
            <img className = "volunteerBg" src = "/Images/volunteerImage.jpg"/>
            <div className = "arrangeVolunteerContainer">
                <h1>BE A VOLUNTEER</h1>
                <p className='volunteerPara'>"Unlock the power within you to make a meaningful impact by joining ASWA as a volunteer. Embrace the opportunity to spread positivity and foster development, becoming a beacon of peace in our world. Together, let's weave a tapestry of change, enriching countless lives and leaving a legacy of compassion and progress. Join us in the journey to make a difference that resonates far and wide."</p>
            </div>
            <div className='quoteContainer'>
                <p className='quoteVolunteer'>“A Volunteer can be anybody. There is no age limit to begin a volunteer, no preferred categories, no salary specification, no special degree or work experience. All that is required is a dedication to the cause, sincerity about the work that one in doing and commitment to a regular and sustained efforts with the organisation.” </p>
                <h1 className='nameQuote'>–MAHATMA GANDHI</h1>
            </div>
            <div className='instructionsContainer'>
                <p className='instructionsVolunteer'>Here are some wonderful opportunities to spread love and make a difference through volunteering :</p>
            </div>
            {
                obj.map((eachItem)=>{
                    console.log(eachItem)
                    if(clicked){
                        return(<VolunteerCardItem details = {eachItem} key ={eachItem.key}/>)
                    }else{
                        if(eachItem.number <= 6){
                            return(<VolunteerCardItem details = {eachItem} key ={eachItem.key}/>)
                        }
                    }
                    
                })
            }
            {!clicked ? <button onClick={handleClickEvent} className='knowMoreVolunteer'>Know More</button>: null}
        </div>
    )
}

export default Volunteer