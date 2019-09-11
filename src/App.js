import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/_pages/Home/Home'
import Movie from './Components/_pages/Movie/Movie'
import NotFound from './Components/NotFound/NotFound'



const App = () => (
  <Router basename='/'>
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:movieId' component={Movie} />
        <Route path='*' component={NotFound} />
      </Switch>
    </>
  </Router>
)


 export default App
