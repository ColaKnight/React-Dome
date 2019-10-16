import React, {Component, Fragment} from "react"
import "./style.css"
import SisterItem from "./SisterItem"

class Sister extends Component{
    //生命周期函数  在某一时刻 可以自动执行的函数
    //初始化阶段  set props and state
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

    UNSAFE_componentWillMount (){
        console.log("UNSAFE_componentWillMount ----组件将要挂载")
    }

    componentDidMount(){
        console.log("componentDidMount----组件挂载完成")
    }

    //虚拟DOM挂载 渲染
    render () {
        console.log("render----组件挂载中")
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