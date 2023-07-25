const initState = []
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "getAllCountries":
            console.log(action.payload)
            return {
                ...state,

            }
        default:
            return state
    }

}

export default rootReducer