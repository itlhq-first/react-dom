import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import SandLayout from '../pages/sand-layout/index'
export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" render={() => <SandLayout></SandLayout>} />
      </Switch>
    </HashRouter>
  )
}
