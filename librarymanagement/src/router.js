import React, { Component } from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import LibraryManager from './components/LibraryManager'


class Routes extends Component {
    constructor(props) {
      super(props);
      };

 render() {
        return(
            <Router>
                <Switch>
                    <Route path= "/" component = {LibraryManager}/>
                    <Route path= "/Library" component = {LibraryManager}/>
                </Switch>
            </Router>
        )

      }

}
export default Routes;