import App from './components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import { createStore,applyMiddleware } from 'redux';
import { promiseMiddleware } from './middleware';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router';
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
const defaultState = {
	checked: false,
	appName: 'THE PRESENT',
 	articles: null
};

const reducer = function(state = defaultState, action) {
   switch(action.type) {
  case 'HOME_PAGE_LOADED':
   return { ...state, articles: action.payload.articles };
 }
  return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
 <Provider store={store}>
   <BrowserRouter>
   <Switch>
       <Route exact path="/" component={App}>
       <Route exact path='/home' component={Home} />
       <Route exact path="/login" component={Login} />
       </Route>
   </Switch>
  </BrowserRouter>
 </Provider>
), document.getElementById('root'));

