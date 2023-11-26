const initialState = {phone:'', dataQTCH:[], dataQTHH:[]}

function reducer(state = initialState, action){
    switch (action.type){
        case 'Set_User':return{
            ...state,
            phone: action.payload,
        };
        case 'Set_DataQTCH':return {
            ...state,
            dataQTCH: action.payload,
        }
        case 'Set_DataQTHH':return {
            ...state,
            dataQTHH: action.payload,
        }
        default: return state;
    }
}

export default reducer;