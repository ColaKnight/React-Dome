import React, {Component, Fragment} from "react"
import axios from "axios"
import "./style.css"
import SisterItem from "./SisterItem"
import { thisExpression } from "@babel/types"

class Sister extends Component{
    //生命周期函数  在某一时刻 可以自动执行的函数
    //初始化阶段  set props and state
    constructor (props) {
        super(props)
        this.state = {
            inputValue: "",
            list: []
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

    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5dac472de8df8e174237d974/ReactDemo01/sister')
            .then((res)=>{
                console.log("获取数据成功:" + JSON.stringify(res))
                this.setState({
                    list: res.data.data
                })
            })
            .catch((error)=>{
                console.log("获取数据失败:"+error)
            })
    }
    
    //虚拟DOM挂载 渲染
    render () {
        console.log("3_render----组件挂载中")
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
