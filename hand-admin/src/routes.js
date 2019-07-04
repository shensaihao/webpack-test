import {
    APIManagement,
    AgileManagement,
    WikiMangement,
    Dashboard
  } from './pages'
  
  const routes = [ {
    path: '/home',
    component: Dashboard,
    title: '首页',
    isNav: true,
    iconType: 'desktop'
  }, {
    path: '/agileManagement',
    component: AgileManagement,
    title: '敏捷管理',
    isNav: true,
    iconType: 'desktop'
  }, {
    path: '/apimanagement',
    component: APIManagement,
    title: 'api管理',
    isNav: true,
    iconType: 'desktop'
  }, {
    path: '/wikiMangement',
    component: WikiMangement,
    title: 'WiKi管理',
    isNav: true,
    iconType: 'desktop'
  }]
  
  export default routes