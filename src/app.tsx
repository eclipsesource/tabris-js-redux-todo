import {createStore} from 'redux';
import {CheckBox, contentView} from 'tabris';
import {connect, injector, register, StateProvider} from 'tabris-decorators';
import {reduxDevTools} from './redux-dev';
import {reducers} from './redux-reducers';

injector.jsxProcessor.unsafeBindings = 'error';
register(StateProvider, createStore(reducers, reduxDevTools));

const Test = connect<CheckBox>(
  state => ({
    text: state.myString
  }),
  dispatch => ({
    onSelect: ({checked}) => dispatch({type: 'TOGGLE_STRING', checked})
  })
)(CheckBox);

contentView.append(
  <Test/>
);
