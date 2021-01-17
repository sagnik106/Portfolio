import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div id="Contact">
                <h1 class="conhead">Contact Me !</h1>
                <div class='cdivs'>
                    <table class="ctable1">
                        <tr>
                            <td style={{textAlign: 'center'}}><a href="https://github.com/sagnik106" target="_blank" rel="noreferrer"><img class='hoverer' alt="github" src="github.png"></img></a></td>
                            <td style={{textAlign: 'center'}} colspan='2'>Destination for cool projects</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}} colspan='2'>Professional life</td>
                            <td style={{textAlign: 'center'}}><a href="https://linkedin.com/in/lesagniksarkar" target="_blank" rel="noreferrer"><img class='hoverer' alt="linkedin" src="linkedin.png"></img></a></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}><a href="https://twitter.com/lesagniksarkar" target="_blank" rel="noreferrer"><img class='hoverer' alt="twitter" src="twitter.png"></img></a></td>
                            <td style={{textAlign: 'center'}} colspan='2'>Straight out of my head</td>
                        </tr>
                    </table>
                </div>
                <div class='cdivs'>
                    <table class="ctable">
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