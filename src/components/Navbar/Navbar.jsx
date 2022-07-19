import { Button, Flex, Heading, Spacer } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = ({setUser, user}) => {
    return(
        <Flex direction='row' justify='space-around'  p='2' gap='5'>
            <NavLink to='/'>
                <Heading>Home</Heading>
            </NavLink>
            <NavLink to='/about'>
                <Heading>About</Heading>
            </NavLink>
            <NavLink to='/characters'>
                <Heading>Character</Heading>
            </NavLink>
            <Spacer/>
            <Link to='/profile'>
                <Button>Profile</Button>
            </Link>

            
            {!!user ? <Link to='/'><Button onClick={()=>setUser(false)}>Log Out</Button></Link> : 
            <Link to='/login'><Button>Log In</Button></Link>}
            
        </Flex>
    )
}

export { Navbar }