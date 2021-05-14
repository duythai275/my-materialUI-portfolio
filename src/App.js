import './App.css';

import { Route, Switch } from "react-router-dom";
import Homepage from './views/homepage/homepage.view';
import Contact from './views/contact/contact.view';

function App() {
  return (
    <div className={"App"}>
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contactme" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
