import { Switch, Route } from 'react-router-dom'
import Start from './Start'
import Create from './Create'
import Home from './Home'


function App() {
  return (
    <div>

      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route exact path='/'>
          <Start />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
