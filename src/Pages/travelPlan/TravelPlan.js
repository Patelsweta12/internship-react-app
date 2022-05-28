import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

// styles
import './TravelPlan.css'

function travelStopList(stops) {
  const multipleStops = stops.list;
  const listItems = multipleStops.map((stop) =>
    <li>{stop}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

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
        <>
          <h2 className="page-title">{travelPlans.title}</h2>
          <h4>Travel Duration:</h4>
          <p>{travelPlans.travelTime}</p>
          <h4>Planned stops:</h4>
          <ul className="stopList">
            {travelPlans.travelStops.map((stop) => <li>{stop}</li>)}
          </ul>
          <h4>Travel Description:</h4>
          <p className="method">{travelPlans.method}</p>
        </>
      )}
    </div>
  )
}