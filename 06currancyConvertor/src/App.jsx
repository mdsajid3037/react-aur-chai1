import { useState } from 'react'
import {InputBox} from './components/InputBox'
import useCurrancyInfo from "./hooks/useCurrencyInfo"


function App() {
  const [amount, setAmount] = useState(0);
  const [from , setFrom] = useState("pkr")
  const [to , setTo] = useState("inr")
  const [ConvertedAmount, setConvertedAmount] = useState(0);
 
  const currencyInfo = useCurrancyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap =()=>{
       setFrom(to);
       setTo(from);
     setConvertedAmount(amount)
     setAmount(ConvertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
 
  return (
    <div
        className="w-full h-screen flex justify-end  items-center  bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/68912/pexels-photo-68912.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
      >
        <div className="w-full flex justify-end  items-auto "
          
          >
            <img className="w-400 " src="https://images.pexels.com/photos/5928815/pexels-photo-5928815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <div className="w-full max-w-md   border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                    <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                          
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={ConvertedAmount}
                            currencyOptions={options}
                            onCurrancyChanger={(currency)=>
                              setTo(currency)
                            }
                          selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
