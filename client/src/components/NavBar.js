import React, { useContext } from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink} from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { useNavigate  } from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(SHOP_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Home</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button 
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >Admin</Button>
                        <Button 
                            variant={"outline-light"} 
                            className="mx-2" 
                            onClick={logOut}
                        >Log out</Button>
                    </Nav>
                :
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button 
                            variant={"outline-light"} 
                            className="mx-2" 
                            onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>      
    )
})

export default NavBar