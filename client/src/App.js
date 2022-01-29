import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PetList from './components/PetList';
import AddPet from './views/AddPet';
import ShowPet from './views/ShowPet';
import EditPet from './views/EditPet';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PetList />
          </Route>
          <Route exact path="/add">
            <AddPet />
          </Route>
          <Route exact path="/api/petshelters/one/:_id">
            <ShowPet />
          </Route>
          <Route exact path="/api/petshelters/edit/:_id">
            <EditPet />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
