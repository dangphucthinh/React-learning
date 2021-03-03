var redux = require('redux')

var oldState = {
    num: ['a', 'b', 'c'],
    editStatus: true
}

var reducer1 = (state = oldState, action) => {
    switch (action.type) {
        case "Change_edit_status":
            return { ...state, editStatus: !state.editStatus }
        case "Change_add_status":
            return {
                ...state,
                num: [...state.num, action.newItem]
            }
        case "Change_delete_status":
            return {
                ...state,
                num: state.num.filter((value, i) => i !== action.index)
            }
        default:
            return state
    }
}

var store1 = redux.createStore(reducer1)
store1.subscribe(() => {
    console.log("state change after dispatch: " + JSON.stringify(store1.getState()));
})

store1.dispatch({
    type: "Change_edit_status",
})

store1.dispatch({
    type: "Change_add_status",
    newItem: "d"
})

store1.dispatch({
    type: "Change_delete_status",
    index: 1
})

export default store1; //store is created by STORE FUNCTION