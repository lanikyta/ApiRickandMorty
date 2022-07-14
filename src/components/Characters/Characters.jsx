import { Flex } from '@chakra-ui/react'
import  axios  from 'axios'
import { useEffect, useState  } from 'react'
import { CardCharacter } from '../CardCharacter/CardCharacther'

const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then (res=>setCharacters(res.data.results))
        
    }, [])
    return(
        <Flex wrap='wrap' gap='5' w='80%' mx='auto' my='10' justify='center'>
        {characters.map(item=><CardCharacter key={item.id} item={item}/>)}
        </Flex>
    )
}

export { Characters }