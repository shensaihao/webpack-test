import {
    APIManagement,
    AgileManagement,
    WikiMangement,
    Dashboard,
    RegistrationTestIndex,
    InternshipGroupIndex
  } from './pages'
  
  const routes = [ {
    path: '/home',
    component: Dashboard,
    title: '首页',
  }, {
    path: '/registrationtest/agilemanagement',
    component: AgileManagement,
    title: '敏捷管理',
  },{
    path: '/registrationtest/apimanagement',
    component: APIManagement,
    title: 'api管理',
  },{
    path: '/registrationtest/wikimangement',
    component: WikiMangement,
    title: 'WiKi管理',
  }, {
    path: '/registrationtest/index',
      component: RegistrationTestIndex,
      title: '注册测试组织首页',
  }, {
    path: '/internshipgroup/index',
      component: InternshipGroupIndex,
      title: '注册测试组织首页',
  }, {
    path: '/internshipgroup/agilemanagement',
    component: AgileManagement,
    title: '敏捷管理',
  },{
    path: '/internshipgroup/apimanagement',
    component: APIManagement,
    title: 'api管理',
  },{
    path: '/internshipgroup/wikimangement',
    component: WikiMangement,
    title: 'WiKi管理',
  }]
  
  export default routes