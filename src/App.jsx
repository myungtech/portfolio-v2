import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
