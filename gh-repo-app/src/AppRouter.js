
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import App from "./App"
import Detail from "./components/Detail"

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter