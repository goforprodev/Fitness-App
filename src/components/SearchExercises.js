import React,{useState,useEffect} from 'react'
import {Stack,Typography,TextField,Button,Box} from "@mui/material"	
import { fetchData,exerciseOptions } from '../utils/fetchData'

const SearchExercises = () => {
    const [search, setsearch] = useState("")

    const handleSearch = async () => {
        if(search){
            const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
            console.log(data)
        }
    }
  return ( 
    <Stack
        alignItems="center"
        justifyContent="center"
        p="20px"
        mt="37px"
    >
        <Typography 
        fontWeight={"700"}
        textAlign="center"
        mb="50px"
        sx={{
            fontSize:{lg:"44px",xs:"30px"},
        }}
        >
            Awesome Exercise You <br/>
            Should Know
        </Typography>
        <Box>
            <TextField 
                value={search}
                placeholder="Search for an exercise"
                onChange={(e)=> setsearch(e.target.value.toLowerCase())}
                type="text"
                height="76px"
                sx={{
                    input:{
                        fontWeight:"700",
                        border:"none",
                        borderRadius:"4px",
                    },
                    width:{lg:"800px",xs:"350px"},
                    background:"#fff",
                    borderRadius:"40px",
                }}
            />
            <Button
                className="search-btn"
                sx={{
                    backgroundColor:"#ff2625",
                    color:"#fff",
                    textTransform:"capitalize",
                    width:{lg:"175px",xs:"80px"},
                    fontSize:{lg:"20px",xs:"14px"},
                    height:"56px",
                }}
                onClick={handleSearch}
            >
                search
            </Button>
        </Box>
    </Stack>
    )
}

export default SearchExercises