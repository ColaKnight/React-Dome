import React, {Component, Fragment} from "react"

class Sister extends Component{
    constructor (props) {
        super(props)
        this.state = {
            inputValue: "ManBa",
            list: []
        }
    }

    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    render () {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button>增加服务</button>
                </div>
                <ul>
                    <li>按摩</li>
                    <li>推背</li>
                </ul>
            </Fragment>
        )
    }
}

export default Sister