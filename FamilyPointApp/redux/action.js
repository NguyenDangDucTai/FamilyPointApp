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
export {increment, setDataQTCH, setDataQTHH, setUserR};