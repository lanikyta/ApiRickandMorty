import { Flex, Heading } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return(
        <Flex direction='row' justify='space-between' w='60%' p='2'>
            <NavLink to='/'>
                <Heading>Home</Heading>
            </NavLink>
            <NavLink to='/about'>
                <Heading>About</Heading>
            </NavLink>
            <NavLink to='/characters'>
                <Heading>Character</Heading>
            </NavLink>
        </Flex>
    )
}

export { Navbar }