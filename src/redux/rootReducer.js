import { combineReducers } from 'redux'
import ruleReducer from './rules/ruleReducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  rules: ruleReducer,
  form: formReducer,
})

export default rootReducer