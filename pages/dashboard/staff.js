import {query} from '../../components/edu/sche_ages.gql'
import Staff from '../../components/dashboard'
import '../../style.css';

Staff.getInitialProps = async ({apolloClients, fetchPolicy}) => {  
  await Promise.all([
    apolloClients.edu.query({query, ...fetchPolicy}),
  ])
}

export default Staff
