import React,{useState} from 'react'
import {Box} from "@mui/material"
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setexercises] = useState([])
  const [bodyPart, setbodyPart] = useState('all')
  return (
      <Box>
        <HeroBanner />
        <SearchExercises bodyPart={bodyPart} setBodyPart={setbodyPart} setexercises={setexercises} />
        <Exercises bodyPart={bodyPart} setBodyPart={setbodyPart} setexercises={setexercises} />
      </Box>
    )
}

export default Home