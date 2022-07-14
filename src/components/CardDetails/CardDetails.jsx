import { Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
const CardDetails = () => {
    const [detail, setDetail]= useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res=>setDetail(res.data))
    }, [id])
    
    return(
        <HStack w='50%' mx='auto' my='10'>
            <Image src={detail.image} alt={detail.name}/>
            <VStack p='5'>
                <Heading fontSize='1.5em'>{detail.name}</Heading>
                <Text>Estado: {detail.status}</Text>
                <Text>Especie: {detail.species}</Text>
                <Text>Género: {detail.gender}</Text> 
                <Link to={`/characters`}><Button>Back</Button></Link>
            </VStack>
        </HStack>
    )
}

export { CardDetails }