import { Switch, Route } from 'react-router-dom'
import { React, useState } from 'react'
import Start from './Start'
import Create from './Create'
import Home from './Home'
import Battle from './Battle'


function App() {
  const [char, setChar] = useState([])

  return (
    <div>
      <Switch>
        <Route path='/battle'>
          <Battle setChar={setChar} char={char} />
        </Route>
        <Route path='/home'>
          <Home char={char} />
        </Route>
        <Route path='/create'>
          <Create setChar={setChar} char={char} />
        </Route>
        <Route exact path='/'>
          <Start />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
