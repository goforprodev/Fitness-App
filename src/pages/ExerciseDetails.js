import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions,fetchData,youtubeSearchOptions} from "../utils/fetchData"
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, settargetMuscleExercises] = useState([])
  const [equipmentExercises, setequipmentExercises] = useState([])

  const {id} = useParams()

  useEffect(() => {
    const fetchExerciseDetail = async() => {
      const exercisesUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData =  await fetchData(`${exercisesUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeSearchOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exercisesUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
      settargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData = await fetchData(`${exercisesUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
      setequipmentExercises(equipmentExercisesData)      
    }

    fetchExerciseDetail()
  }, [id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails