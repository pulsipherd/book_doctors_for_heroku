import axios from 'axios';
export const handleRegister = (email, password, passwordConfirmation, history) => {
  return (dispatch) => {
    axios.post('/api/auth', {
      email, password, password_confirmation: passwordConfirmation
    })
      .then(res => {
        dispatch({ type: 'LOGIN', user: res.data.data });
        history.push('/');
      })
      .catch(res => {
        console.log(res);
      });
  }
}
export const handleLogout = (history) => {
  return (dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then(res => {
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
      })
      .catch(res => {
        console.log(res);
      });
  }
}
export const handleLogin = (email, password, history) => {
  return (dispatch) => {
    axios.post('/api/auth/sign_in', { email, password })
      .then(res => {
        dispatch({ type: 'LOGIN', user: res.data.data });
        history.push('/');
      })
      .catch(res => {
        console.log(res);
      })
  }
}