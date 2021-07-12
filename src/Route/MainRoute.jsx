import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import SalonFeed from '../Screens/SalonFeed'


export default function MainRoute() {
    return (
        <Router>
            <Route path="/">
                <SalonFeed />
            </Route>
        </Router>
    )
}
