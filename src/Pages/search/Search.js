import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import TravelPlanList from '../../components/TravelPlanList'
import Searchbar from '../../components/Searchbar'
import { useTheme } from '../../hooks/useTheme'
import React from 'react'

// styles
import './Search.css'

export default function Search() {
  const { mode } = useTheme()
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/travelPlans?q=' + query
  const { error, isPending, data } = useFetch(url)

  return (
    <div className={`Search-theme ${mode}`}>
        <Searchbar />
        <h4 className="page-title">Following are search results for Travel Plans that includes "{query}":</h4>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <TravelPlanList travelPlans={data} />}
      </div>
  )
}