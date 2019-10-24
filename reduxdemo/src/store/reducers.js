const defaultState = {
    inputValue: "Write Something",
    list: [
         "篮球",
        "足球",
        "乒乓球"
    ]
}

export default (state=defaultState, action) => {
    console.log(state, action)
    //Reducer只能接受state、不能改变state
    if (action.type === "changeInput") {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.inputValue
        return newState
    }
    return state
}