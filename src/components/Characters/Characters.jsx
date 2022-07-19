import { Box, Button, Flex, Input, Select, Text } from '@chakra-ui/react'
import  axios  from 'axios'
import { useEffect, useState  } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CardCharacter } from '../CardCharacter/CardCharacther'
import { Form } from '../Form/Form'

const Characters = () => {
    const [searchParams, setSearchParams] = useSearchParams({})
    const [characters, setCharacters] = useState([])
    const [filter, setFilter] = useState('')
    const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1)
    useEffect(()=>{
        axios
        .get(`https://rickandmortyapi.com/api/character/?page=${page}${filter}`)
        .then (res=>setCharacters(res.data.results))
       
    }, [page, filter])
    
    return(
        <Box mt='5em'>
            <Form setFilter={setFilter} setPage={setPage} page={page}/>

            <Flex wrap='wrap' gap='5' w='80%' mx='auto' my='10' justify='center'>
            {characters.map(item=><CardCharacter key={item.id} item={item}/>)}
            </Flex>
            <Flex mx='auto' w='34em' mb='2em' direction='row' alignItems='center' gap='3' justify='center'>
                <Button isDisabled={page===1} onClick={()=>setPage(page-1)}>Back</Button>
                <Text>{page}</Text>
                <Button onClick={()=>setPage(page+1)}>Next</Button>
            </Flex>
        </Box>
    )
}

export { Characters }