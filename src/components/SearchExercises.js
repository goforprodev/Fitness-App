import React,{useState,useEffect} from 'react'
import {Stack,Typography,TextField,Button,Box} from "@mui/material"	

const SearchExercises = () => {
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
                value={""}
                placeholder="Search for an exercise"
                onChange={(e)=>{}}
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
            >
                search
            </Button>
        </Box>
    </Stack>
    )
}

export default SearchExercises