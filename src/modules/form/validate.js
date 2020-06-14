const validate = values => {
  const errors = {}
  if(!values.ruleName) {
    errors.ruleName = '***'
  }
  if (!values.conditions || !values.conditions.length) {
    errors.conditions = { _error: 'At least one member must be entered' }
  } else {
    const membersArrayErrors = []
    values.conditions.forEach((member, memberIndex) => {
      const memberErrors = {}
      if (!member || !member.field) {
        memberErrors.field = '***'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.operator) {
        debugger;
        memberErrors.operator = '***'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.value) {
        memberErrors.value = '***'
        membersArrayErrors[memberIndex] = memberErrors
      }
     
      return memberErrors
    })
    if(membersArrayErrors.length) {
      errors.conditions = membersArrayErrors
    }
  }
  return errors
}

export default validate