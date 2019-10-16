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

    inputChange(){
        this.setState({
            inputValue: this.input.value
        })
    }

    addList(){
        //setState异步方法
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        }, () => {
            console.log(this.ul.querySelectorAll("li").length)
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
                    <input 
                        id="add" 
                        className="input" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)} 
                        ref={(input) => {this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
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