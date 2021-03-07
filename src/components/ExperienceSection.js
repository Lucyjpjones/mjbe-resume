import React from 'react'
import { MDBContainer, MDBRow } from "mdbreact";
import '../App.css'
import './Experience.css'

function ExperienceSection() {

    return (
        <MDBContainer>
            <h3 className='underline--text'>Experience</h3>
            <MDBRow>
                <div id='work'>
                    <div class="timeline-item" data-dates="10/2018 - present">
                        <h4>Crystal Palace Football Club</h4>
                        <p>First Team Rehabilitation Coach</p>
                    </div>
                    <div class="timeline-item" data-dates="07/2018 - 09/2018">
                        <h4>Crystal Palace Football Club</h4>
                        <p>First Team Assistant Strength and Conditioning Coach</p>
                    </div>
                    <div class="timeline-item" data-dates="09/2016 - 06/2018">
                        <h4>Crystal Palace Football Club</h4>
                        <p>First Team Sports Scientist</p>
                    </div>
                    <div class="timeline-item" data-dates="11/2014 - 08/2016">
                        <h4>Virgin Active</h4>
                        <p>Personal Trainer and Fitness Coach</p>
                    </div>
                </div>
            </MDBRow>
        </MDBContainer>
    )
}

export default ExperienceSection
