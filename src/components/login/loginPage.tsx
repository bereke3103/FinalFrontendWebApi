import style from '../login/login.module.css'
import { TextField, Button, Typography } from '@mui/material'
import { IPropsLogin } from '../../common/LoginInterface/ILogin'

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const {setEmail, setPassword} = props
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Авторизация
      </Typography>

      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
      >
        Введите ваш логин и пароль
      </Typography>

      <TextField
        fullWidth={true}
        margin="normal"
        label="Email"
        placeholder="Введите ваше email"
        variant="outlined"
        onChange={(e)=> setEmail(e.target.value) }
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Password"
        placeholder="Введите ваше пароль"
        type="password"
        variant="outlined"
        onChange={(e)=> setPassword(e.target.value)}
      />
      <Button type='submit'
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          marginBottom: 2,
          width: '60%',
        }}
        variant="contained"
      >
        Войти
      </Button>

      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас нет аккаунта?
        <span className={style.incitingText}>Регистрация</span>{' '}
      </Typography>
    </>
  )
}

export default LoginPage
