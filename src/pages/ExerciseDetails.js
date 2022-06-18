import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions,fetchData} from "../utils/fetchData"
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const fetchExerciseDetail = async() => {
      const exercisesUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData =  await fetchData(`${exercisesUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)
    }

    fetchExerciseDetail()
  }, [id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetails