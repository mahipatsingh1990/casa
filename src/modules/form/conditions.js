import React from 'react';
import { Field } from 'redux-form';
import Condition from '../../model/condition';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import { Row, Col } from 'react-flexbox-grid/lib';


const conditions = ({ fields }) => {

  const addCondition = () => {
    const conditionObj = new Condition();
    fields.push(conditionObj)
  }
  const removeCondition = (index) => {
    if(index >= 1) {
      fields.remove(index)
    }
  }
  if(fields.length < 1) {
    addCondition();
  }
  return (
 
    <Col xs={12}>
      {
        fields.map((member, index) =>
        <Row className="mt20" key={index}>
          <Field
            name={`${member}.field`}
            type="text"
            component={Input}
            label="Field"/>
          <Field label="dropDownSelect" name={`${member}.operator`} component={Select} />
          <Field
            name={`${member}.value`}
            type="ext"
            component={Input}
            label="Value"/>  
          <Button
            type="button"
            title="Remove"
            onClick={() => removeCondition(index)}/>
          { (index == fields.length -1) && <Button type="button" title="Add More Condition" onClick={addCondition}/> }
        </Row>
      )}
      
    </Col>
)
}


export default conditions;