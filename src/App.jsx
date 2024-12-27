

import useApiData from "./hooks/useApiData";

import { useState } from "react"
import { InputBox } from "./components"

function App() {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("usd")


  const onCurrencyFromChange=(cur)=>{
    setFromCurrency(cur)
  }


  const onCurrencyToChange=(cur)=>{
    setToCurrency(cur)
  }


  const onAmountChange=(Amt)=>{
    if (Amt>=0) {
      setFromAmount(Amt)
      
    }
  }



  const change=()=>{
    setFromAmount(toAmount);
    setToAmount(fromAmount)
    
  }

  
  const optionsArray=useApiData(fromCurrency)
  console.log(optionsArray)
  const currencyOptions=Object.keys(optionsArray);

  const convert=()=>{
    setToAmount(fromAmount*optionsArray[toCurrency]);
  }

 


  return (
    <>

      <div className=" bg-cover bg-center min-h-screen flex justify-center items-center" style={{ backgroundImage: `url('https://www.shutterstock.com/image-photo/blue-money-business-graph-finance-600nw-2469272775.jpg')` }}>
      
      

        <div className="relative flex justify-center 
      rounded-lg shadow-2xl p-1 flex-col items-center">
        <h1 className="text-rose-600  text-4xl font-bold font-bd">Currency Converter Made Easy</h1>

          <InputBox 
          amount={fromAmount} 
          currency={fromCurrency} onCurrencyChange={onCurrencyFromChange} onAmountChange={onAmountChange}
          currencyOptionsArray={currencyOptions}
           />

          <button onClick={change} className="bg-gray-300 p-2 rounded-md absolute top-32 border-2 border-white hover:text-slate-50 hover:bg-slate-600">Swap</button>

          <InputBox 
          label='To'
          amount={toAmount}
          currency={toCurrency}
          onCurrencyChange={onCurrencyToChange} disableAmount={true} 
          bg='pink'
          currencyOptionsArray={currencyOptions}
           />

          <button 
          onClick={convert} className="bg-rose-500 p-2 m-1 rounded-md font-semibold font-mono hover:bg-red-600">Convert</button>


        </div>


      </div>

    </>
  )
}

export default App
