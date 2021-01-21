import React from 'react'

class Scrollarrow extends React.Component{
    render(){
        return(
            <div id="arrowcontainer">
                {this.props.up && (<a href={this.props.link1}>
                    <div class="arrow">
                        <img height="40px" alt="arrow" src="arrow.png"></img>
                    </div>
                </a>)}
                {this.props.down && (<a href={this.props.link}>
                    <div class="arrow rotator">
                        <img height="40px" alt="arrow" src="arrow.png"></img>
                    </div>
                </a>)}
            </div>
        )
    }
}

export default Scrollarrow;