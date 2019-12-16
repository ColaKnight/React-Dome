import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'

//generator
function* mySaga() {
    yield takeEvery(GET_MY_LIST)
}

function* getList() {
    const data = [
        "早上6点起床跑步", 
        "中午1点午休",
        "晚上8点到10点，学习2小时"
    ]
    const action = getListAction(data)
    put(action)
}

export default mySaga;