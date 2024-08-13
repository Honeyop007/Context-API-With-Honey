import './App.css'
import Login from './component/login'
import Profile from './component/Profile'
import User_context_provider from './context/usercontextprovider'

function App() {
 
  return (
    <User_context_provider>
    <h1 style={{ display:'flex' , justifyContent:'center' , alignItems:'center'}}>REACT with HONEY-OP</h1>
    <Login/>
    <Profile/>
    </User_context_provider>
  )
}

export default App
