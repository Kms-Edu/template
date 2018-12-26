import Header from '../index-header'
import Footer from '../footer'
import AgesList from '../edu/sche_ages'
import {Divider} from 'antd'
import Nav from '../navi'

const columns = [{
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
}
, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}]
const Dashboard = ({apolloClients}) => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="container mx-auto">
        <AgesList columns={columns} apolloClients={apolloClients}  />
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard