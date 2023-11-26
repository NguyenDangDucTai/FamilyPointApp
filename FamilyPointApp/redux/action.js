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
export {increment, setDataQTCH, setDataQTHH};