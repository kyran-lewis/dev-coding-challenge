import {useEffect, useState} from "react"
import axios from "axios";
const App = () => {
  const [jokes,setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // get jokes from backend and store as variable
  const getJokes = async() =>{
    try {
      setIsLoading(true)
      const response = await axios.get("http://localhost:3000/jokes")
      console.log(response.data)
      setJokes(response.data)
      // set loading to false once joke has been retrieved
      setIsLoading(false)
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() =>{
    getJokes();
  }, [])

  return(
    <div>
      <div class="container">
        <h1 class="header">Tell Me A Joke</h1>
        <div>
          {isLoading ? (
            ""
          ) : (
            <>
              {jokes.length > 0 ? (
                <>
                {
                  jokes.map((joke, index) =>{
                    return (
                      <div key={index} id="setup">
                          {joke.setup}
                      </div>
                      
                    )
                  })
                }
                              {
                  jokes.map((joke, index) =>{
                    return (
                      <div key={index} id="punchline">
                          {joke.punchline}
                      </div>
                      
                    )
                  })
                }
                </>
              ) : (
                <div>
                    No jokes found.
                </div>
                )}
            </>
          )}
        </div>
        <div class="buttons">
          <button onClick={() => {
            let punchline = document.getElementById("punchline");
              punchline.style.display = "block";
          }}>
            Reveal Punchline
          </button>
          <button onClick={() => {location.reload()}}>
            Next Joke
          </button>
        </div>
      </div>
    </div>
    
  );
  
}

export default App;