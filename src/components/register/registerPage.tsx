import style from '../register/register.module.css'
import { Typography, TextField, Button } from '@mui/material'

const RegisterPage = () => {
  return (
    <>
      <Typography variant="h2" fontFamily="Popins" textAlign="center">
        Регистрация
      </Typography>

      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Popins"
        textAlign="center"
      >
        Введите данные для регистрации
      </Typography>

      <TextField
        fullWidth={true}
        margin="normal"
        label="Ф.И.О"
        placeholder="Ф.И.О"
        variant="outlined"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Email"
        placeholder="Введите ваше email"
        variant="outlined"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Password"
        placeholder="Введите ваше пароль"
        variant="outlined"
      />
      <Button
        sx={{
          fontFamily: 'Popins',
          marginTop: 2,
          marginBottom: 2,
          width: '60%',
        }}
        variant="contained"
      >
        Зарегистрироваться
      </Button>

      <Typography variant="body1" sx={{ fontFamily: 'Popins' }}>
        У вас уже есть аккаунт?
        <span className={style.incitingText}>Авторизация</span>{' '}
      </Typography>
    </>
  )
}
export default RegisterPage
