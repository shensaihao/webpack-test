import Loadable from 'react-loadable'
import Loading from './Loading'

const AgileManagement = Loadable({
  loader: () => import('./AgileManagement/AgileManagement.js'),
  loading: Loading
})
const APIManagement = Loadable({
  loader: () => import('./APIManagement/APIManagement.js'),
  loading: Loading
})
const Dashboard = Loadable({
  loader: () => import('./Dashboard/Dashboard.js'),
  loading: Loading
})
const WikiMangement = Loadable({
  loader: () => import('./WikiMangement/WikiMangement.js'),
  loading: Loading
})
const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound.js'),
  loading: Loading
})
const InternshipGroup = Loadable({
  loader:() => import('./InternshipGroup/InternshipGroup.js'),
  loading: Loading
})
const RegistrationTest = Loadable({
  loader:() => import('./RegistrationTest/RegistrationTest.js'),
  loading: Loading
})
const RegistrationTestIndex = Loadable({
  loader:() => import('./RegistrationTest/RegistrationTestIndex.js'),
  loading: Loading
})
const InternshipGroupIndex = Loadable({
  loader:() => import('./InternshipGroup/InternshipGroupIndex.js'),
  loading: Loading
})
export {
  AgileManagement,
  APIManagement,
  Dashboard,
  WikiMangement,
  NotFound,
  InternshipGroup,
  RegistrationTest,
  RegistrationTestIndex,
  InternshipGroupIndex,
}