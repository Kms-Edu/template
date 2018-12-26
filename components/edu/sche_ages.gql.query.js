import gql from 'graphql-tag'
import {fragment} from './sche_ages.gql'

export default gql`
query{
  sche_ages{
    ...sche_ages_fragment
  }
}
${fragment}
`


