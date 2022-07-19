import { Flex, Input, Select } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const Form = ({setFilter, setPage, page}) => {
    const [searchParams, setSearchParams] = useSearchParams({})
    const [valueName, setValueName] = useState(searchParams.get('name') || '')
    const [valueStatus, setValueStatus] = useState(searchParams.get('status') || '')
    const [valueGender, setValueGender] = useState(searchParams.get('gender') || '')
    
    useEffect(()=>{
        setFilter(`&name=${valueName}&status=${valueStatus}&gender=${valueGender}`)
        setSearchParams({
            page: page,
            name: valueName,
            status: valueStatus,
            gender: valueGender})
    }, [valueName, valueStatus, valueGender, page])
    
    return(
            <Flex direction='row' w='90%' mx='auto' gap='4'>
                <Input placeholder='Name' name='name' value={valueName} onChange={(e)=>setValueName(e.target.value)} />
                <Select placeholder='Status' name='status' onChange={(e)=>setValueStatus(e.target.value)} >
                    <option value='alive'>Alive</option>
                    <option value='dead'>Dead</option>
                    <option value='unknown'>Unknown</option>
                </Select>
                <Select placeholder='Gender' name='gender' onChange={(e)=>setValueGender(e.target.value)}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='genderless'>Genderless</option>
                    <option value='unknown'>Unkonown</option>
                </Select>
            </Flex>
    )
}

export { Form }