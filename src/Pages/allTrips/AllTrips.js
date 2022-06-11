import { useFetch } from '../../hooks/useFetch'
import TravelPlanListMaster from '../../components/travelPlanListMaster/TravelPlanListMaster'
import React from 'react'

// styles
import './AllTrips.css'

export default function AllTrips() {
  const { data, isPending, error } = useFetch('http://localhost:3000/travelPlans')

  return (
    <div className="AllTrips">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <TravelPlanListMaster travelPlans={data} />}
    </div>
  )
}
