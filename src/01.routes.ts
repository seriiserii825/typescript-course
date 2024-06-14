export default {};

type TComponent = () => string;

type TRouteRecordBase = {
  path: string;
}

type TRouteRecordComponent = TRouteRecordBase & {
  type: "component";
  component: TComponent;
  children?: RouteRecord[];
}

type TRouteRecordRedirect = TRouteRecordBase & {
  type: "redirect";
  redirect: string;
}

type RouteRecord = TRouteRecordComponent | TRouteRecordRedirect;

function createRouter(routes: RouteRecord[]) {
  return {
    routes
  };
}

createRouter([
  {
    type: "redirect",
    path: "/",
    component: () => "Home"
  }
])
