const defaultState = {
    inputValue: "Write Something",
    list: [
         "篮球",
        "足球",
        "乒乓球"
    ]
}

export default (state=defaultState, action) => {
    console.log("reducer",state, action)
    if (action.type === "changeInput") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }

    if (action.type === "addItem") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ""
        return newState
    }

    if (action.type === "deleteItem") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
}