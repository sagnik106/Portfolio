import React from 'react';

class Experience extends React.Component{
    render(){
        return(
            <div id="Experience">
                <h1 class="ehead">Experience</h1>
                <div class="ecard">
                    <h2 class='subhead'>roboVITics, Vellore - 2018-Present</h2>
                    <p class='subdesc'>Technial Head - CSE Department</p>
                </div>
                <div class="ecard">
                    <h2 class='subhead'>Deep Polymers (Intern) - Jun 2020-Aug 2020</h2>
                    <p class='subdesc'>Backend and API development involving Image Processing (OpenCV)</p>
                </div>
                <div id='btncenter'><a href="Resume.pdf" download="Sagnik_Sarkar_Resume.pdf"><button class="btn">Resume</button></a></div>
            </div>
        )
    }
}

export default Experience;