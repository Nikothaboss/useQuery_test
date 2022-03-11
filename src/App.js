import './App.css';
import { apiClient } from './utils/http-common';
import { useQuery } from 'react-query';
import { useState, useContext } from 'react';
// import {ThemeProvider} from "./contexts/ThemeContext"
import ThemeContext from './contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useContext(ThemeContext)
  
  // const [getId, setGetId] = useState("");
  // const [getTitle, setGetTitle] = useState("");
  const [getResult, setGetResult] = useState(null);
  const handleToggle = () => {setTheme(!theme)}

  
  const formatResponse = (res) => {
    return JSON.stringify(res);
  };

  // const {data} = useQuery("rooms", (async () => {
  //   return await apiClient.get("/rooms")
  // }))

  const {isLoading: isLoadingRooms} = useQuery(
    "query-rooms" ,
    async () => {
      return await apiClient.get("/rooms")
    },
    {
      
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data
        }
        setGetResult(result)
        console.log(getResult)
      }
    }
  )


  // console.log(data)

  return (
    
      <div className="App">
        <button onClick={handleToggle}>Toggle</button>
        {theme ? "light" : "dark"}
      </div>
    
  );
}

export default App;
