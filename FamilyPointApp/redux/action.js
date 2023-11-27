const increment = (data)=>(
    {
    type:'Set_User',
    payload: data,
    }
)
const setDataQTCH=(data)=>({
    type:'Set_DataQTCH',
    payload: data,
})
const setDataQTHH=(data)=>({
    type:'Set_DataQTHH',
    payload: data,
})
const setUserR=(data)=>({
    type:'Set_UserR',
    payload:data,
})
const setDataTTCH=(data)=>({
    type:'Set_DataTTCH',
    payload:data,
})
const setDataTTHH=(data)=>({
    type:'Set_DataTTHH',
    payload:data,
})

export {increment, setDataQTCH, setDataQTHH, setUserR, setDataTTCH, setDataTTHH};