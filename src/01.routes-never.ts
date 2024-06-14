export default {};

type TComponent = () => string;

type TRouteRecordBase = {
  path: string;
};

type TRouteRecordComponent = TRouteRecordBase & {
  component: TComponent;
  children?: RouteRecord[];
  redirect?: never;
};

type TRouteRecordRedirect = TRouteRecordBase & {
  redirect: string;
  component?: never;
  children?: never;
};

type RouteRecord = TRouteRecordComponent | TRouteRecordRedirect;

function createRouter(routes: RouteRecord[]) {
  return {
    routes,
  };
}

createRouter([
  {
    path: "/",
    redirect: "/",
    component: () => "Home",
  },
]);
