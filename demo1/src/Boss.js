import React, { Component } from 'react'
import { CSSTransition } from "react-transition-group"

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true    
        }
        this.toToggole = this.toToggole.bind(this)
    }

    toToggole(){
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }

    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                >
                    <div>BOOS级人物--孙悟空</div>
                </CSSTransition>
              
                <div><button onClick={this.toToggole}>召唤BOSS</button></div>
            </div>
         );
    }
}
 
export default Boss;