import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Cards'

function App() {
  const [themeMode, setThemeMode] = useState("light")
   const lightTheme = ()=>{
    setThemeMode("light")
   }

   const darkTheme = ()=>{
    setThemeMode("dark")
   }

   // Actual change in theme

   useEffect(()=>{
     const Th = document.querySelector('html')
     Th.classList.remove("dark" , "light")
     Th.classList.add(themeMode)
    }, [themeMode])
  
  return (

    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className='flex flex-wrap min-h-screen items-center'>
      <div className='w-full'>
        <div className='w-full  max-w-sm mx-auto flex justify-end mb-4'>
             <ThemeBtn/>
        </div>
        <div className='w-full  max-w-sm mx-auto '>
          <Card/>
        </div>

      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
