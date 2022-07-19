import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { Navigate } from "react-router-dom"

const Profile = ({user}) => {
    if(!user){
        return <Navigate to='/' />
    }
    return(
        <Box w='70%' mx='auto' my='10'>
            <Image fallbackSrc='https://via.placeholder.com/150'/>
            <Heading>Username: {user}</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci et nisi, ea eveniet accusamus excepturi magnam perspiciatis expedita fugit, ipsam aut mollitia reprehenderit repellendus officia harum tenetur facilis in cum!</Text>
        </Box>
    )
}

export { Profile }