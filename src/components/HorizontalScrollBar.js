import React,{useContext} from 'react'
import { Box, Typography} from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

// icons
import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"

const HorizontalScrollBar = ({data,bodyPart,setBodyPart}) => {
 
    //right arrow component
    function RightArrow() {
        const { scrollNext } = React.useContext(VisibilityContext);
      
        return (
          <Typography onClick={() => scrollNext()} className="right-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
          </Typography>
        );
      }
      
    // left arrow component
    function LeftArrow() {
        const { scrollPrev } = React.useContext(VisibilityContext);
      
        return (
          <Typography onClick={() => scrollPrev()} className="left-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
          </Typography>
        );
      } 
    
    
    
  return (
    <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow} >
        {data.map((item) => (
            <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="40px"
            >
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar