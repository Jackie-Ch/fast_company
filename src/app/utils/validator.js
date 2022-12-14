/* eslint-disable indent */
export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case 'isRequared':
        statusValidate = data.trim() === '';
        break;
      case 'isEmail': {
        const emailRegEx = /^\S+@\S+\.\S+$/g;
        statusValidate = !emailRegEx.test(data);
        break;
      }
      case 'isCapitalSymbol': {
        const capitalRegEx = /[A-Z]+/g;
        statusValidate = !capitalRegEx.test(data);
        break;
      }
      case 'isContainDigit': {
        const digitRegEx = /\d+/g;
        statusValidate = !digitRegEx.test(data);
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
