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
export {
  AgileManagement,
  APIManagement,
  Dashboard,
  WikiMangement,
  NotFound
}