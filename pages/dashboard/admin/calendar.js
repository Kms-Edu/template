import {query} from '../../../components/edu/sche_ages.gql'
import Admin from '../../../components/dashboard/admin/calendar'
import '../../../style.css';

Admin.getInitialProps = async ({apolloClients, fetchPolicy}) => {  
  await Promise.all([
    apolloClients.edu.query({query, ...fetchPolicy}),
  ])
}

export default Admin
