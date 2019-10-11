import React, {Component, Fragment} from "react"

class Sister extends Component{
    constructor (props) {
        super(props)
        this.state = {
            inputValue: "",
            list: ["按摩", "推背"]
        }
    }

    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    addList(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        })
    }

    render () {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={index + item}>{item}</li>
                    })}
                </ul>
            </Fragment>
        )
    }
}

export default Sister