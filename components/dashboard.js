import Header from './index-header'
import Footer from './footer'
import AgesList from './edu/sche_ages'
import Link from 'next/link'
import { Trans } from '@lingui/macro';
import {withRouter} from 'next/router'
import { connect } from 'react-redux'; // 👈 import the connect
import { Row, Col } from 'antd';
import Sider from './sider'

const isActive = (path, router) => {
  const {pathname} = router
  return pathname === path ? 'border-b-2 border-black' : ''
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.onSubmit(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const Dashboard = ({router, todos, addTodo, apolloClients}) => {
  return (
    <div>
      <Header />
      <div className="flex mb-4">
        <div className="w-3/4 h-12"></div>
        <div className="w-1/4 h-12 float-right">
          <ul className="text-sm text-grey-dark list-reset flex items-center">
            <li><Link href="/dashboard/admin" passHref><a href="/messages" className={`inline-block py-2 px-3 text-grey-darkest no-underline ${isActive('/dashboard/admin', router)}`}>Admin</a></Link></li>
            <li><Link href="/dashboard/staff" passHref><a href="/messages" className={`inline-block py-2 px-3 text-grey-darkest no-underline ${isActive('/dashboard/staff', router)}`}>Staff</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto">
      <NameForm onSubmit={(val) => {addTodo(val)}} />
      <div>
        {todos.map((todo, idx) => <div key={idx}>{todo}</div>)}
      </div>
      <Row>
        <Col span={8}><Sider /></Col>
        <Col span={16}>
          <h1><Trans>Ages</Trans></h1>
          <AgesList apolloClients={apolloClients} />
        </Col>
        <Col span={8}>col-8</Col>
      </Row>
      
      </div>
      <Footer />
    </div>
  )
}

export default connect(
  // 👇 Map to your required state
  state => ({ todos: state.todos.items }),
  dispatch => ({ addTodo: dispatch.todos.addTodo })
  // 👇 Map your required actions
)(withRouter(Dashboard))