import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from '../Component/nav';
import { Base_Url } from '../Constants/Constants';

function Dashboard() {

  const [data, setdata] = useState(null);
  const [status, setstatus] = useState(null);
  const [isLoading, setisLoading] = useState(null)


  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    fetch(`${Base_Url}/Dashboard`, {
      method: 'get',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((result) => result.json())
      .then(
        (data) => {
          setdata(data.response)
          setstatus(data.status)
          console.log(data)

        })
  }, [])

  const InitStock = () => {
    fetch(`${Base_Url}/Stock`, {
      method: 'get',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(
      (response)=>{

        setisLoading(true)

      })
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1 className='listeRecompense'>Liste des récompenses</h1>
        {data?.length === 0 &&<p>Vous n'avez pas de récompense pour le moment</p>} 
        {data != null && data.length > 0 &&
          data.map((response) => {
            return (
              <div>
                <ul>
                {status != null && status === "client" &&<div className='recompense'>
                 <p>{`Vous avez fait ${takerewards(response.recompense)}, vous avez gagné un(e) :`}</p>

                    {response.recompense.map((data) => {
                      return (
                        <li>{`${data.name}`}&nbsp;</li>
                      )
                    })}
                  </div>}
                {status != null && status === "admin" &&<div className='recompense'>
                 <p>{`${response.firstName} ${response.lastName} as gagné en faisant ${takerewards(response.recompense)}, il(elle) as gagné un(e) :`}</p>
                    {response.recompense.map((data) => {
                      return (
                        <li>{`${data.name}`}&nbsp;</li>
                      )
                    })}
                  </div>}
                </ul>
              </div>
            )
          })
        } 
        {isLoading && status === "admin"&&<p style={{color:"green"}}>Réinitialisation du stock réussie</p>}
        {status === "admin"&&<button className='initStock' onClick={InitStock} >réinitialiser le stock</button>}

      </header>
    </div>

  );
}


function takerewards(tab) {

  switch (tab.length) {
    case 1:
      return ('une paire')
      break;
    case 2:
      return ('un full')
      break;
    case 3:
      return ('un carré')
      break;
    case 4:
      return ('un Yams')
      break;
    default:

  }

}

export default Dashboard;
