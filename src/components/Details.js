import React from 'react'
import {Stack,Typography,Button} from '@mui/material'

//images
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Details = ({exerciseDetail}) => {
  const {name,bodyPart,gifUrl,target,equipment,} = exerciseDetail

  // extra details
  const extraDetails = [
    {
      icon:BodyPartImage,
      name:bodyPart
    },
    {
      icon:TargetImage,
      name:target
    },
    {
      icon:EquipmentImage,
      name:equipment
    }  
  ]

  return (
    <Stack gap={"60px"} sx={{flexDirection:{lg:"row"}, p:"20px", alignItems:"center"}}>
        <img src={gifUrl} alt={name} className="detail-image" loading="lazy" />
        <Stack sx={{gap:{lg:"35px",xs:"20px"}}}>
          <Typography variant = "h3" textTransform={"capitalize"}>
            {/* {name.charAt(0).toUpperCase() + name.slice(1)} */}
            {name}
          </Typography>
          <Typography variant = "h6">
            Exercises keep you strong. 
            {name} is one of the best exercise to target your {target}.It will
            help you improve your mood and gain energy
          </Typography>
          {
            extraDetails.map(({icon,name},index) =>(
              <Stack key={index} gap="24px" alignItems="center" direction="row">
                <Button sx={{borderRadius:"50%",background:"#fff2db",width:"100px",height:"100px"}}>
                  <img src={icon} alt={bodyPart} style={{width:"50px",height:"50px"}}/>
                </Button>
                <Typography variant = "h6" textTransform="capitalize">{name}</Typography>
              </Stack>
            ))
          }
        </Stack>
    </Stack>
  )
}

export default Details