import React from 'react';

class About extends React.Component{
    render(){
        return(
            <div id="About">
                <h1 id="atitle">About Me</h1>
                <div id="acont">
                    <div class="floater">
                        <img alt="Sagnik Sarkar" src="https://avatars2.githubusercontent.com/u/43110660?s=460&u=ca22e0d405c49e8ffb678c8c4dc67ebd445c6bd2&v=4" id="mpic"></img>
                    </div>
                    <div class="floater">
                        <h1 id="aname">Sagnik Sarkar</h1>
                        <p id="bio">Hi there, I am an undergraduate student at Vellore Institute of Technology, Vellore, India majoring in Computer Science and Engineering. I also am a Full stack developer (Learnt it so that i can deploy the models...shh!).</p>
                        <table id='contact'>
                            <tr>
                                <td>Phone</td>
                                <td>:</td>
                                <td>+91 789 354 0575</td>
                            </tr>
                            <tr>
                                <td>e-Mail</td>
                                <td>:</td>
                                <td>sagnik106@gmail.com</td>
                            </tr>
                        </table>
                        <table id="social">
                            <tr>
                                <a href="https://github.com/sagnik106" target="_blank" rel="noreferrer"><td id="github"><img width="30px" height="30px" alt="github" src="github.png"></img></td></a>
                                <td class="space"></td>
                                <a href="https://linkedin.com/lesagniksarkar" target="_blank" rel="noreferrer"><td id="linkedin"><img width="30px" height="30px" alt="linkedin" src="linkedin.png"></img></td></a>
                                <td class="space"></td>
                                <a href="https://twitter.com/lesagniksarkar" target="_blank" rel="noreferrer"><td id="twitter"><img width="30px" height="30px" alt="twitter" src="twitter.png"></img></td></a>
                            </tr>
                        </table>
                        <a href="Resume.pdf" download="Sagnik_Sarkar_Resume.pdf"><button class="btn">Resume</button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;