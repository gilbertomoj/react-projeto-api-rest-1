import './App.css';
import api from './services/api'
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([])

  useEffect(() =>{
    api
    .get('https://randomuser.me/api/?results=8')
    .then((response) => { 
      setData(response.data.results)
     })
     .catch((error) =>{
      alert('Erro')
    })
  },[])
  return (
    <div className="container">
      <h1>Pessoas cadastradas</h1>
      <div className="painel">
        {data.map(((info) => {
          return(
          <div className="card">
          <div className="span"></div>
          <img src={`${info.picture.medium}`} alt="asdasda" className="people-image" />
          <h1 className="people-name">{info.name.first}</h1>
          </div>
          )
        }))}
    </div>
    </div>
  );
}

export default App;
