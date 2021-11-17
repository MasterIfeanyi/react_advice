import { useState, useEffect } from "react"
import axios from "axios";

const App = () => {

  const [adviceItem, setAdviceItem] = useState('');

  const fetchAdvice = async () => {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice")
      const { advice } = res.data.slip;
      setAdviceItem(advice)
    } catch (err) {
        console.log(err)
    }

  }

  useEffect(() => {
    fetchAdvice();
  }, [])


  return (
    <div className="App">
        <div className="card text-center col-md-6">
          <h1 className="card-title leads">Advice</h1>
          <div className="card-body">
            <h2 className="card-text">{adviceItem}</h2>
          </div>
        <button className="btn btn-primary btn-small animate__animated animate__rubberBand" 
          onClick={() => fetchAdvice()}
        >Get Advice</button>
        </div>
    </div>
  )
}

export default App
