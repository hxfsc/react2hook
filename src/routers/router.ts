import Loadable from "react-loadable"
import Loading from "@/pages/Loading"

const UseState = Loadable({
  loading: Loading,
  loader: () => import("@/pages/UseState")
})

const UseRef = Loadable({
  loading: Loading,
  loader: () => import("@/pages/UseRef")
})

const UseReducer = Loadable({
  loading: Loading,
  loader: () => import("@/pages/UseReducer")
})

const UseMemo = Loadable({
  loading: Loading,
  loader: () => import("@/pages/UseMemo")
})

const UseLayoutEffect = Loadable({
  loading: Loading,
  loader: () => import("@/pages/UseLayoutEffect")
})

const UseImperativeHandle = Loadable({
  loading: Loading,
  loader: () => import("@/pages/UseImperativeHandle")
})

const UseEeffect = Loadable({
  loading: Loading,
  loader: () => import("@/pages/UseEeffect")
})

const UseDebugValue = Loadable({
  loading: Loading,
  loader: () => import("@/pages/UseDebugValue")
})

const UseContext = Loadable({
  loading: Loading,
  loader: () => import("@/pages/UseContext")
})

const UseCallback = Loadable({
  loading: Loading,
  loader: () => import("@/pages/UseCallback")
})

const routers: IRouter[] = [
  {
    name: "base",
    title: "基础",
    children: [
      {
        name: "useState",
        component: UseState,
        path: "/usestate"
      },
      {
        name: "useEeffect",
        component: UseEeffect,
        path: "/useeffect"
      },
      {
        name: "useContext",
        component: UseContext,
        path: "/usecontext"
      }
    ]
  },
  {
    name: "other",
    title: "额外",
    children: [
      {
        name: "useRef",
        component: UseRef,
        path: "/useref"
      },
      {
        name: "useReducer",
        component: UseReducer,
        path: "/usereducer"
      },
      {
        name: "useMemo",
        component: UseMemo,
        path: "/usememo"
      },
      {
        name: "useLayoutEffect",
        component: UseLayoutEffect,
        path: "/uselayouteffect"
      },
      {
        name: "useImperativeHandle",
        component: UseImperativeHandle,
        path: "/useimperativehandle"
      },
      {
        name: "useDebugValue",
        component: UseDebugValue,
        path: "/usedebugvalue"
      },
      {
        name: "useCallback",
        component: UseCallback,
        path: "/usecallback"
      }
    ]
  }
]


interface IChildren {
  name: string
  component: any
  path: string
}

interface IRouter {
  name: string
  component?: any
  path?: string
  title?: string
  children?: IChildren[]
}

export { routers, IRouter }
