import React,{useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography} from "@mui/material"
import ExerciseCard from './ExerciseCard'

import {fetchData,exerciseOptions} from '../utils/fetchData'

const Exercises = ({exercises,setexercises,bodyPart}) => {
  const [currentPage, setcurrentPage] = useState(1)
  const exercisesPerPage = 9

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if(bodyPart === 'all'){
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
      }
        setexercises(exercisesData)
      }

    fetchExercisesData()
  }, [bodyPart])
  
  // Current Exercise Logic
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)

  //Paginate Function
  function paginate(e,value){
    setcurrentPage(value)

    window.scrollTo({top:1800,behavior:"smooth"})
  }

  return (
    <Box
      id="exercises"
      sx={{
        mt:{lg:"110px"}
      }}
      mt="50px"
      p="20px"      
    >
      <Typography variant="h3" mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}} flexWrap="wrap" justifyContent="center">
       {currentExercises.map((exercise,index) => (
          <ExerciseCard key={index} exercise={exercise}/>
       ))} 
      </Stack>
      <Stack mt="100px" alignItems={"center"}>
          {
            exercises.length > exercisesPerPage ? 
              <Pagination
                color='standard'
                shape='rounded'
                count={Math.ceil(exercises.length/ exercisesPerPage)}
                defaultPage={1}
                size="large"
                page={currentPage}
                onChange={paginate}
               />
            :""
          }
      </Stack>
    </Box>
  )
}

export default Exercises