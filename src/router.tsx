import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from '@pages/index';
import Grid from '@pages/grid';
import H5Page from '@pages/h5-back';

interface IRoute {
  path: string;
  name: string;
  element?: React.ReactNode | null;
}

export const routes: IRoute[] = [
  {
    path: '/grid',
    element: <Grid />,
    name: 'Grid布局'
  },
  {
    path: '/h5',
    element: <H5Page />,
    name: 'H5返回页面'
  }
];

function Router() {
  // 这里更改下HashRouter即可
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
