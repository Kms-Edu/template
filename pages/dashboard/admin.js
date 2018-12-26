import query from '../../components/edu/sche_ages.gql.query'
import Dashboard from '../../components/dashboard/admin'
import '../../style.css';
import withStore from '../../share/with-app-store'
Dashboard.getInitialConfig = async (ctx) => {
  const apollo = {
    edu: process.env.GRAPHQL_HOST,
  }
  return {
    redux: '_REDUX_STORE_DASHBOARD_ADMIN_',
    apollo,
  }
}

Dashboard.getInitialStore = (ctx) => {
  return {}
}

Dashboard.getInitialApolloState = async ({apolloClients, fetchPolicy}) => { 
  return Promise.all([
    apolloClients.edu.query({query, ...fetchPolicy}),
  ])
}

export default withStore(Dashboard)
