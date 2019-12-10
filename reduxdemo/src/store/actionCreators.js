import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from "./actionTypes"

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        const data = [
            "早上6点起床跑步",
            "中午1点午休",
            "晚上8点到10点，学习2小时"
        ]
        const action = getListAction(data)
        dispatch(action)
    }
}

export const getMyListAction = () => ({
    type: GET_MY_LIST
})