import React from 'react'
import Query from '../query'
import { Table } from 'antd';
import {query, subscription} from './sche_ages.gql'
import withApolloClient from '../../share/with-apollo-client'

const defaultColumns = [{
  title: 'Id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Age Name',
  dataIndex: 'age_name',
  key: 'age_name',
}, {
  title: 'From month',
  dataIndex: 'from_month',
  key: 'from_month',
}, {
  title: 'To Month',
  dataIndex: 'to_month',
  key: 'to_month',
}]

const Page = ({columns = defaultColumns}) => {
  return (
    <div>
      <Query
        query={query}
        subscription={subscription}>
        {
          data => <Table columns={columns} dataSource={data.sche_ages} />
        }
        </Query>
    </div>
  )
}

export default withApolloClient('edu')(Page)
