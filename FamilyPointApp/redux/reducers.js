const initialState = {phone:'', dataQTCH:[], dataQTHH:[], user:"", dataTTCH:[], dataTTHH:[]}

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
        case 'Set_UserR':return {
            ...state,
            user: action.payload,
        }
        case 'Set_DataTTCH':return{
            ...state,
            dataTTCH: action.payload,
        }
        case 'Set_DataTTHH':return{
            ...state,
            dataTTHH: action.payload,
        }
        default: return state;
    }
}

export default reducer;