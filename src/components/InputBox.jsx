/* eslint-disable react/prop-types */
import { useId } from "react"


const InputBox = ({
    label='From',
    currencyOptionsArray=['usd','inr','AED','XMR','SSR','dgfg'],
    disableAmount=false,
    amount,
    currency,
    onAmountChange,
    onCurrencyChange,
    bg='white'
   

}) => {
    const uniqueAmountID=useId();
    const uniqueCurrencyID=useId();
  return (
    <div style={{backgroundColor:bg}} className="flex justify-between items-center rounded-md border-2 border-blue-600 border-dashed border-collapse">
        <div className="p-4 m-6">
            <label className="font-semibold"  htmlFor={uniqueAmountID}>{label}</label>

            <input 
            type="number"
            id={uniqueAmountID} 
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(e.target.value)}
            disabled={disableAmount}
            className="outline-none m-3 bg-gray-300 p-1 rounded-md"/>
        </div>
        <div className="p-4 m-6 relative">
            <label  
            className="font-semibold"
            htmlFor={uniqueCurrencyID}>Currency</label>

            <select 
            id={uniqueCurrencyID}
            value={currency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}

            className="outline-none bg-green-300 p-1 m-3 rounded-md overflow-auto scrollbar-hide relative">
                
                {currencyOptionsArray.map((currency)=>(
                    <option className="
                   bg-red-400"  key={currency} value={currency}>{currency}</option>
                ))}
               
            </select>
        </div>
    </div>
  )
}

export default InputBox