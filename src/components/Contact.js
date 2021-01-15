import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div id="Contact">
                <h1 class="conhead">Contact Me !</h1>
                <div class='cdivs'>
                    <table>
                        <tr>
                            <td style={{textAlign: 'right'}} colspan='2' id='github'><a href="https://github.com/sagnik106" target="_blank" rel="noreferrer"><img width="30px" height="30px" alt="github" src="github.png"></img></a></td>
                            <td style={{textAlign: 'center'}}>Destination for cool projects</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>Professional life</td>
                            <td style={{textAlign: 'left'}} colspan='2' id='linkedin'><a href="https://linkedin.com/lesagniksarkar" target="_blank" rel="noreferrer"><img width="30px" height="30px" alt="linkedin" src="linkedin.png"></img></a></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'right'}} colspan='2' id='twitter'><a href="https://twitter.com/lesagniksarkar" target="_blank" rel="noreferrer"><img width="30px" height="30px" alt="twitter" src="twitter.png"></img></a></td>
                            <td style={{textAlign: 'center'}}>Straight out of my head</td>
                        </tr>
                    </table>
                </div>
                <div class='cdivs'>
                    <table style={{margin: '10vh auto'}}>
                        <tr>
                            <td class='td1'>e-Mail</td>
                            <td class='td1'>:</td>
                            <td class='td1'>sagnik106@gmail.com</td>
                        </tr>
                        <tr>
                            <td class='td1'>Phone No.</td>
                            <td class='td1'>:</td>
                            <td class='td1'>+91 789 354 0575</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Contact;