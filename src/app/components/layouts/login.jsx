import React, { useState, useEffect } from 'react';
import TextField from '../textField';
import { validator } from '../../utils/validator';

function Login() {
  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  useEffect(() => {
    validate();
  }, [data]);

  const validatorConfig = {
    email: {
      isRequared: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Email введен не корректно' }
    },

    password: {
      isRequared: { message: 'Пароль обязательна для заполнения' },
      isCapitalSymbol: {
        message: 'Пароль должен содердать хотябы одну заглавную букву'
      },
      isContainDigit: { message: 'Пароль должен содердать хотябы одну цифру' }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length !== 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) return;
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        onChange={handleChange}
        name="email"
        value={data.email}
        errors={errors.email}
      />
      <TextField
        label="Пароль"
        type="password"
        onChange={handleChange}
        name="password"
        value={data.password}
        errors={errors.password}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default Login;
