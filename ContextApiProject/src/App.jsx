import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card'
import ThemeBtn from './components/themebtn'
import { ThemeProvider } from './context/theme'

function App() {
const [Thememode,setThememode] = useState('light')

const darkTheme = ()=>{
setThememode('dark') 
}
const lightTheme = ()=>{
  setThememode('light') 
}

useEffect(()=>{
document.querySelector('html').classList.remove('dark' , 'light')
document.querySelector('html').classList.add(Thememode)
},[Thememode])


  return (
  <ThemeProvider value={{Thememode , darkTheme , lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
