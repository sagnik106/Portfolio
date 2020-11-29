import React from 'react'

class Scrollarrow extends React.Component{
    render(){
        return(
            <div id="arrowcontainer">
                <a href={this.props.link}>
                    <div id="arrow">
                        <img height="40px" alt="arrow" src="arrow.png"></img>
                    </div>
                </a>
            </div>
        )
    }
}

export default Scrollarrow;