
import { useEffect,useState } from "react"


// const inrUrl='https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.12.26/v1/currencies/inr.json';

const useApiData = (currency) => {
    const [data, setData] = useState({})
    const todayDate=new Date();
    const dateString=todayDate.getFullYear()+'.'+todayDate.getMonth()+'.'+todayDate.getDate();
    


    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${dateString}/v1/currencies/${currency.toLowerCase()}.json`).then((res)=>res.json()).then((dataGot)=>setData(dataGot[currency]));




    },[currency,dateString])
    return data
  
}

export default useApiData