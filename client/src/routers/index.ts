import Home from '../pages/home/home';
// import { PathRouteProps } from 'react-router';

export interface IRouteBase {
  path: string;
  component?: any;
  main?: any;
  redirect?: string;
  auth?: boolean;
}

export interface IRoute extends IRouteBase {
  children?: IRouteBase[]
}

const routes: IRoute[] = [
  {
    path: '/',
    main: Home,
  },
]

export default routes;
