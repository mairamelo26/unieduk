import React from 'react'
import {Bar} from 'react-chartjs-2';


const state = {
  labels: ['😃 Bom', '😐 Regular', '😥 Ruim'],
  datasets: [
    {
      label: 'Aproveitamento',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80]
    }
  ]
}
export default function Desempenho () {
    return (
    <div>
        <nav text-align="center" className="navbar">
            <ul className="navbar-list">
                <h1>Desempenho</h1>
            </ul>
        </nav>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Aproveitamento do curso',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    )
}
  