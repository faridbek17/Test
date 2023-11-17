import Male from "../pages/Male";
import Womens from "../pages/Womens";
import Kids from "../pages/Kids";
import Safe from "../pages/Safe";
import Rule from "../pages/Rule";
import Print from "../pages/Print";

export const routes = [
  {
    id: 1,
    path: "/male",
    element: <Male />,
  },
  {
    id: 2,
    path: "/womens",
    element: <Womens />,
  },
  {
    id: 3,
    path: "/kids",
    element: <Kids />,
  },
  {
    id: 4,
    path: "/safe",
    element: <Safe />,
  },
  {
    id: 5,
    path: "/rule",
    element: <Rule />,
  },
  {
    id: 6,
    path: "/print",
    element: <Print />,
  },
];
