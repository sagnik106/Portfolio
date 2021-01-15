import React from 'react';

class Education extends React.Component{
    render(){
        return(
            <div id="Education">
                <h1 class="ehead">Education</h1>
                <div class="ecard">
                    <h2 class='subhead'>Vellore Institute of Technology, Vellore, India - 2018-Present</h2>
                    <p class='subdesc'>B. Tech. - Computer Science and Technology, <i>CGPA : 9.03</i></p>
                </div>
                <div class="ecard">
                    <h2 class='subhead'>FIITJEE Junior College, Hyderabad, India - 2016-2018</h2>
                    <p class='subdesc'>Higher Secondary - Telangana State Board, <i>Percentage : 96.2%</i></p>
                </div>
                <div class="ecard">
                    <h2 class='subhead'>St. Joseph's Public School, Hyderabad, India - 2005-2016</h2>
                    <p class='subdesc'>Secondary - I.C.S.E. , <i>Percentage : 96%</i></p>
                </div>
            </div>
        )
    }
}

export default Education;