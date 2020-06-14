import { ADD_RULE, ADD_RULE_SUCCESS, ADD_RULE_FAILURE } from './ruleTypes'

export const addRule = (item = "") => {
  return {
    type: ADD_RULE,
    item: item
  }
}

export const addRuleSuccess = (rules = []) => {
  return {
    type: ADD_RULE_SUCCESS,
    rules: rules
  }
}

export const addRuleFailure = () => {
  debugger;
  return {
    type: ADD_RULE_FAILURE
  }
}

