import React, {Component, Fragment} from "react"

class Sister extends Component{
    render () {
        return (
            <Fragment>
                <div>
                    <input />
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