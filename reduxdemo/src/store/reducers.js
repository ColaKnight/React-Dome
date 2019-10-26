import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from "./actionTypes"

const defaultState = {
    inputValue: "Write Something",
    list: [
         "篮球",
        "足球",
        "乒乓球"
    ]
}

export default (state=defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ""
        return newState
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
}
