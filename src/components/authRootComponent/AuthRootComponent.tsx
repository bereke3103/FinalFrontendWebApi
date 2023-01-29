import { useLocation, useNavigate } from 'react-router-dom'
import LoginPage from '../login/loginPage'
import RegisterPage from '../register/registerPage'
import { Box } from '@mui/material'
import './style.css'
import { useState } from 'react'
import { instance } from '../../utils/axiosFolder/axios'
import { UseAppDispatch } from '../../utils/cutomHookRedux/CustomHook'
import { login } from '../../store/slice/auth/authReducer'

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = UseAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (location.pathname === '/login') {
      //запрос объекта, который будем отправлять
      try {
        const userData = {
          email,
          password,
        }

        //response объекта, который мы получаем
        const user = await instance.post('/login', userData)
        localStorage.setItem('access_token', user.data.access_token)

        await dispatch(login(user.data))

        navigate('/home')
      } catch (error) {
        throw new Error('Ошибка')
      }
    }
    //////////////////////////////////////////////////////////////////////////////////////!
    //запрос объекта, который будем отправлять
    if (location.pathname === '/register') {
      try {
        const userData = {
          name,
          email,
          password,
        }

        //response объекта, который мы получаем
        const newUser = await instance.post('/register', userData)
        await dispatch(login(newUser.data))
        navigate('/home')
      } catch (error) {
        throw new Error('Ошибка')
      }
    }
  }

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
  )
}

export default AuthRootComponent
