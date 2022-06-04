import { useFetch } from '../../hooks/useFetch'
import TravelPlanList from '../../components/TravelPlanList'
import React from 'react'

// styles
import './Home.css'

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/travelPlans')

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <TravelPlanList travelPlans={data} />}
    </div>
  )
}
