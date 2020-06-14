import { ADD_RULE, ADD_RULE_SUCCESS, ADD_RULE_FAILURE } from './ruleTypes';
import { addRuleSuccess } from './ruleAction';
import axios from 'axios';
import store from '../../redux/store';


const initialState = {
  rules: [],
  error: null,
}

const ruleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RULE:  {
      const { conditions, ruleName } = action.item;
        return {
          rules: [
          { conditions, ruleName },
          ...state.rules
          ]  
      }
    }
    case ADD_RULE_SUCCESS: {
      return {
        rules: action.rules
      }
    }

    case ADD_RULE_FAILURE: {
      return {
        rules: [],
        error: 'Something bad happened'
      }
    }
    default: return state
  }
}

export default ruleReducer