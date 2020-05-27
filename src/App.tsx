import * as React from "react"
import { Route, Switch, Link, RouteComponentProps, withRouter } from "react-router-dom"
import { routers, flatRouters, IRouter } from "@/routers/index"

import classNames from "classnames"

import "./style.scss"

const renderMenu = (routers: IRouter[] = [], pathname: string = ""): React.ReactNode => {
  return routers.map(router => {
    if (router.children) {
      return (
        <React.Fragment key={router.name}>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>{router.title || router.name}</span>
          </h6>
          <ul className="nav flex-column mb-2">
            {renderMenu(router.children, pathname)}
          </ul>
        </React.Fragment>
      )
    }

    console.log(router.path && router.path === pathname)

    const classStyles = classNames("nav-link", {
      "active": router.path && router.path === pathname
    })

    return (
      <li className="nav-item" key={router.title || router.name}>
        <Link className={classStyles} to={router.path}>{router.title || router.name}</Link>
      </li>
    )
  })
}

const renderRouter = (flatRouters: IRouter[] = []): React.ReactNode => {
  const routers = flatRouters.filter((router: IRouter) => router.component && router.path)
  return routers.map((router: IRouter) => <Route path={router.path} component={router.component} key={router.title || router.name} />)
}


interface IProps extends RouteComponentProps { }

const App: React.FC<IProps> = (props) => {
  const { location: { pathname = "" } } = props
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
          React Hook
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">
              Hook
            </a>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              {renderMenu(routers, pathname)}
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <Switch>
              {renderRouter(flatRouters)}
            </Switch>
          </main>
        </div>
      </div>
    </div>
  )
}

export default withRouter(App)
