import { Switch, Route } from 'react-router-dom'
import { React, useState } from 'react'
import Start from './Start'
import Create from './Create'
import Home from './Home'
import Battle from './Battle'
import Shop from './Shop'
import Thanks from './Thanks'

function App() {
  const [char, setChar] = useState([])
  const [currentQuest, setCurrentQuest] = useState(1)
  const [armor, setArmor] = useState(false)

  return (
    <div>
      <Switch>
        <Route path='/thanks'>
          <Thanks char={char} />
        </Route>
        <Route path='/shop'>
          <Shop armor={armor} setArmor={setArmor} char={char} setChar={setChar} setCurrentQuest={setCurrentQuest} currentQuest={currentQuest} />
        </Route>
        <Route path='/battle'>
          <Battle armor={armor} setArmor={setArmor} setChar={setChar} char={char} setCurrentQuest={setCurrentQuest} currentQuest={currentQuest} />
        </Route>
        <Route path='/home'>
          <Home armor={armor} setArmor={setArmor} char={char} setChar={setChar} setCurrentQuest={setCurrentQuest} currentQuest={currentQuest} />
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
