import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container'
import { Button, Card, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useNavigate  } from 'react-router-dom'

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const btnClick = async () => {
    try {
      let data
      if(isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)

      navigate(SHOP_ROUTE)
    } catch(e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='mx-auto'>{ isLogin ? 'Login' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            type='password'
            className='mt-3'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className='d-flex justify-content-between mt-3'>
            {isLogin ?
              <div style={{width: 'auto'}}>
                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
              </div>
            :
              <div style={{width: 'auto'}}>
                Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </div>
            }
            <Button
              variant='outline-success'
              onClick={btnClick}
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
})

export default Auth;
