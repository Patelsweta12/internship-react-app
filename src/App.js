import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'

// page components
import Navbar from './components/Navbar'
import Home from './Pages/home/Home'
import Create from './Pages/create/Create'
import Search from './Pages/search/Search'
import TravelPlans from './Pages/travelPlan/TravelPlan'
import ThemeSelector from './components/ThemeSelector'

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
      </BrowserRouter>
    </div>
</div>
  );

}

export default App