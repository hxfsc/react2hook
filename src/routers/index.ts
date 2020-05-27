import { routers, IRouter } from "./router"

const routersFlat = (routers: IRouter[]) => {
  return routers.reduce((prev: IRouter[], next: IRouter) => {
    prev.push(next)
    if (next.children) {
      return [...prev, ...routersFlat(next.children)]
    }
    return prev
  }, [])
}

const flatRouters = routersFlat(routers)

export { routers, flatRouters, IRouter }
