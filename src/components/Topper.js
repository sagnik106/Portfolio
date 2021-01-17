import React from 'react'

class Topper extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        is_visible: false
        };
        this.scrollToTop = this.scrollToTop.bind(this);
    }
  
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
        scrollComponent.toggleVisibility();
        }, true);
    }
  
    toggleVisibility() {
        if (document.getElementById("name").getBoundingClientRect().y<0) {
            this.setState({
              is_visible: true
            });
          } else {
            this.setState({
              is_visible: false
            });
          }
    }
  
    scrollToTop() {
        console.log(0);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
  
    render() {
        const {is_visible} = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (<a href="/Portfolio/#start" title="Go to top" id="myBtn">
                    <img src="up-arrow.png" width="30px" alt="up-arrow"></img>
                    Go to the top
                </a>)}
            </div>
        );
    }
}

export default Topper;