import { useLocation } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import RegisterPage from '../register/RegisterPage';
import { Box } from '@mui/material';
import './style.css';
import { useState } from 'react';
import { instance } from '../../utils/axiosFolder/axios';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (location.pathname === '/login') {
      //запрос объекта, который будем отправлять
      const userData = {
        email,
        password,
      };

      //response объекта, который мы получаем
      const user = await instance.post('/login', userData);
      console.log(user.data);
    }
    //////////////////////////////////////////////////////////////////////////////////////!
    //запрос объекта, который будем отправлять
    if (location.pathname === '/register') {
      const userData = {
        name,
        email,
        password,
      };

      //response объекта, который мы получаем
      const newUser = await instance.post('/register', userData);
      console.log(newUser);
    }
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius="5"
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' ? (
            <LoginPage setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
