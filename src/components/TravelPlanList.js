import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// styles
import './TravelPlanList.css'

export default function TravelPlanList({ travelPlans }) {
  const { mode } = useTheme()

  if (travelPlans.length === 0) {
    return <div className="error">No Travel Plan to load...</div>
  }

  return (
    <div className="travelPlan-list">
      {travelPlans.map(travelPlan => (
        <div key={travelPlan.id} className={`card ${mode}`}>
          <h3>{travelPlan.title}</h3>
          <h4>Planned stops:</h4>
          <ul>
            {travelPlan.travelStops.map((stop) => <li>{stop}</li>)}
          </ul>
          <h4>Duration:</h4>
          <p>{travelPlan.travelTime}</p>
          <Link to={`/travelPlans/${travelPlan.id}`}>Visit This</Link>
        </div>
      ))}
    </div>
  )
}
