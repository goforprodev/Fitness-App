import React from 'react'
import {Link} from 'react-router-dom'
import {Button,Stack,Typography} from "@mui/material"

const ExerciseCard = ({exercise}) => {
  return (
    <Link className = "exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>

        <Stack
            direction="row"
        >
            <Button
                sx={{
                    ml:"24px",color:"#fff",background:"#ffa9a9",
                    fontSize:"14px",borderRadius:"20px",textTransform:"capitalize",	
                }}
            >
                {exercise.bodyPart}
            </Button>
            <Button
                sx={{
                    ml:"24px",color:"#fff",background:"#fcc757",
                    fontSize:"14px",borderRadius:"20px",textTransform:"capitalize",	
                }}
            >
                {exercise.target}
            </Button>
        </Stack>
        <Typography fontSize="20px" textTransform="capitalize" ml="21px" mt="11px" pb="10px" 
            fontWeight="bold" color="#000"
         >
             {exercise.name}
          </Typography>
    </Link>
    
  )
}

export default ExerciseCard