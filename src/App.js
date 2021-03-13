import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route /*Link */,
} from "react-router-dom";

// Routes
import Home from "./routes/Home";
import Options from "./routes/Options";
import ButtonExample from "./routes/ButtonExample";
import InputTextExample from "./routes/InputTextExample";
import InputNumberExample from "./routes/InputNumberExample";
import SelectExample from "./routes/SelectExample";
import AutocompleteExample from "./routes/AutocompleteExample";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/options" component={Options} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/inputtext" component={InputTextExample} />
          <Route path="/inputnumber" component={InputNumberExample} />
          <Route path="/select" component={SelectExample} />
          <Route path="/autocomplete" component={AutocompleteExample} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
