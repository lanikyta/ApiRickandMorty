import { Button, Heading, Image, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const CardCharacter = ({item}) => {
    const { image, name, id} = item
    return(
        <VStack w='20%'>
            <Image src={image} alt={name}/>
            <Heading fontSize='1.5em'>{name}</Heading>
            <Link to={`/characters/${id}`}><Button>See Details</Button></Link>
        </VStack>
    )
}

export { CardCharacter }