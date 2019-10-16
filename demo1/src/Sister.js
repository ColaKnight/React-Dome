import React, {Component, Fragment} from "react"
import "./style.css"
import SisterItem from "./SisterItem"

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

    deleteItem(index){
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    render () {
        return (
            <Fragment>
                {/* 注释 */}
                <div>
                    <label htmlFor="add">增加服务:</label>
                    <input id="add" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <SisterItem 
                                key={index+item}
                                itemData={item}
                                index={index}
                                deleteItem={this.deleteItem.bind(this)}
                            />
                        )
                    })}
                </ul>
            </Fragment>
        )
    }
}

export default Sister