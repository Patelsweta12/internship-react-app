import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import React from 'react'

// styles
import './TravelPlan.css'

export default function TravelPlans() {
  const { id } = useParams()
  const url = 'http://localhost:3000/travelPlans/' + id
  const { error, isPending, data: travelPlans } = useFetch(url)
  const { mode } = useTheme()

  return (
    <div className={`travelPlan ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {travelPlans && (
        <div>
          <h2 className="page-title">{travelPlans.title}</h2>
          <center><div>{  <div>{<img src={travelPlans.travelImage} alt={travelPlans.title}/>}</div>}</div></center>
          <h4>Travel Duration:</h4>
          <p>{travelPlans.travelTime}</p>
          <h4>Planned stops:</h4>
          <ul className="stopList">
            {travelPlans.travelStops.map((stop) => <li>{stop}</li>)}
          </ul>
          <h4>Travel Description:</h4>
          <p className="travelDescription">{travelPlans.travelDescription}</p>
        </div>
      )}
    </div>
  )
}