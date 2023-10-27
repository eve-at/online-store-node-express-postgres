import React, { useContext } from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink} from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Home</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"}>Admin</Button>
                        <Button variant={"outline-light"} className="mx-2" onClick={() => user.setIsAuth(false)}>Log out</Button>
                    </Nav>
                :
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} className="mx-2" onClick={() => user.setIsAuth(true)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>      
    )
})

export default NavBar