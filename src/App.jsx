import { useState } from "react"
import Navbar from "./Conponents/Navbar"
import NewsBoard from "./Conponents/NewsBoard"


const App = ()=> {
const [category,setCategory] =useState("general");  

  return (
    <div>
    <Navbar setCategory = {setCategory}/>
    <NewsBoard category = { category} />
</div>
  )
}

export default App
