import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import Input from '../../components/Input';
import conditions from './conditions';
import { addRule, addRuleSuccess, addRuleFailure } from '../../redux/rules/ruleAction';
import { Row, Col } from 'react-flexbox-grid/lib';
import { compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

const Rule = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const postRule = (rules) => {
      axios
        .post('https://jsonplaceholder.typicode.com/mahipatsingh1990/casa/posts', {
          rules: [
            rules,
            ...props.rules
          ]
        })
        .then(response => {
          const responseData = response.data.rules;
          props.addRuleSuccess(responseData)
        })
        .catch(error => {
          props.addRuleFailure()
        })   
  }

  const conditionsObj = (condition, ind) => {
    return <span key={`condition ${ind + 1}`}><span className="condition"> {condition.field} </span> <span className="condition"> {condition.operator}</span> <span className="condition">{condition.value} </span> </span>
  }

  return (
    <div className="rules-body">
      <h3> RuleEngine for Orders </h3>
      <p className="error"> Submit with XHR is quite slow due to jsonplaceholder Dummy API....</p>
      <p className="error"> {props.error } </p>
      <div className={props.rules.length > 0 ?"rules-wrapper": ""}>
        {
          props.rules.map((rule, index) => {
            return (
              <Row key={index}>
                <Col xs={3}>
                  <p> {rule.ruleName} </p>
                </Col>
                <Col xs={9}>
                  <p> If { 
                    rule.conditions && rule.conditions.map((c, ind) => {
                      return conditionsObj(c, ind) 
                    })
                  } 
                  </p>
                </Col>
              </Row>
            )
          })
        }
      </div>
      <Col xs={12}>
        <form onSubmit={handleSubmit((values) => {
          postRule(values);  
          return reset();      
        })}>
          <Field className="mt20" name="ruleName" type="text" component={Input} label="Rule Name"/>
          <FieldArray name="conditions" component={conditions}/>
          <div className="mt30">
            <button type="type" disabled={submitting} onClick={handleSubmit((values) => {
              props.addRule(values);  
              return reset();      
            })}>Submit</button>
            <button type="submit" disabled={submitting}>Submit With XHR</button>
          </div>
        </form>
      </Col>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    rules: state.rules.rules,
    error: state.rules.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRule: (item) => dispatch(addRule(item)),
    addRuleSuccess: (rules) => dispatch(addRuleSuccess(rules)),
    addRuleFailure: () => dispatch(addRuleFailure())

  }
}

export default compose(
  reduxForm({ form: 'fieldArrays', validate }),
  connect(mapStateToProps,mapDispatchToProps),
)(Rule)