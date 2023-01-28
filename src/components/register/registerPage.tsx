import style from '../register/register.module.css'
import { Typography, TextField, Button } from '@mui/material'
import { IRegister } from '../../common/RegisterInterface/IRegister'

const RegisterPage = (props: IRegister) => {
  const {setName, setEmail, setPassword} = props
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Регистрация
      </Typography>

      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
      >
        Введите данные для регистрации
      </Typography>

      <TextField
        onChange={(e) => setName(e.target.value)}
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
        onChange={(e)=> setEmail(e.target.value)}
      />
      <TextField
      type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        placeholder="Введите ваше пароль"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
      type='submit'
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          marginBottom: 2,
          width: '60%',
        }}
        variant="contained"
      >
        Зарегистрироваться
      </Button>

      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас уже есть аккаунт?
        <span className={style.incitingText}>Авторизация</span>{' '}
      </Typography>
    </>
  )
}
export default RegisterPage
