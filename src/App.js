import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/elements/Header/Header'
import Home from './Components/Home/Home'
import Movie from './Components/Movie/Movie'
import NotFound from './Components/elements/NotFound/NotFound'



const App = () => {
  return (
    <Router basename='/'>
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:movieId' component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </>
    </Router>
  )
}

 export default App
