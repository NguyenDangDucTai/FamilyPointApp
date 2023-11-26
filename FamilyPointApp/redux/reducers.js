const initialState = {phone:'12345'}

function reducer(state = initialState, action){
    switch (action.type){
        case 'Set_User':return{
            ...state,
            phone: action.payload,
        };
        default: return state;
    }
}

export default reducer;