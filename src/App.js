import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import React from 'react'

// page components
import Navbar from './components/navigationbar/Navbar'
import Home from './Pages/home/Home'
import Create from './Pages/create/Create'
import Search from './Pages/search/Search'
import TravelPlans from './Pages/travelPlan/TravelPlan'
import AllTrips from './Pages/allTrips/AllTrips'
import ThemeSelector from './components/themeSelector/ThemeSelector'
import Footer from './components/footer/Footer';

// styles
import './App.css'

function App() {
  const { mode } = useTheme()

return (
<div className={`App ${mode}`}>
  <div style={{ backgroundImage: "url(https://wallpaperaccess.com/full/2592094.jpg)" }}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/allTrips">
            <AllTrips />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/travelPlans/:id">
            <TravelPlans />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
</div>
  );

}

export default App