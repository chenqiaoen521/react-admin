import Home from '@cpts/home/index';
import UserList from '@cpts/userList/index';
import ProductList from '@cpts/product/list/index';
import UpdateGoods from '@cpts/product/update/index';

export const routes = [
  /*{
    path: '/',
    exact: true,
    redirect: '/home'
  },*/
  {
    path: '/home',
    component: Home
  },
  {
    path: '/product',
    redirect: '/product/index',
    routes: [
      {
        path: '/product/index',
        component:ProductList
      },
      {
        path: '/product/update',
        component: UpdateGoods
      }
    ]
  },
  {
    path: '/user',
    component: UserList
  }
]