import query from '../components/edu/sche_ages.gql.query'
import Dashboard from '../components/dashboard'
import { effect } from 'easy-peasy'; // 👈 import the helper
import withStore from '../share/with-app-store'
import '../style.css';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

Dashboard.getInitialConfig = async (ctx) => {
  const redux = '_REDUX_STORE_DASHBOARD'
  const apollo = {
    edu: process.env.GRAPHQL_HOST,
    hpz: 'hpz-accounts.herokuapp.com/v1alpha1/graphql',
    bds: 'vnbatdongsan.herokuapp.com/v1alpha1/graphql',
  }
  return {
    redux,
    apollo,
  }
}

Dashboard.getInitialStore = (ctx) => {
  return {
    todos: {
      items: ['Hello world'],
      // 👇 our action
      
      addTodo: effect(async (dispatch, payload, getState) => {
        //                      👆
        // Notice that an effect will receive the actions allowing you to dispatch
        // other actions after you have performed your side effect.
        //const saved = await todoService.save(payload);
        await timeout(3000);
        // 👇 Now we dispatch an action to add the saved item to our state
        dispatch.todos.todoSaved(payload);
      }),

      todoSaved: (state, payload) => {
        state.items.push(payload)
      }
    }
  }
}

Dashboard.getInitialApolloState = async ({apolloClients, fetchPolicy}) => {   
  return Promise.all([
    apolloClients.edu.query({query, ...fetchPolicy}),
  ])
}

export default withStore(Dashboard)
