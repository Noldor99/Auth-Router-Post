import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Typography } from '@mui/material';
 

interface ListAccordionProps{
  title:string,
  renderItem: React.ReactNode
}

export default function ListAccordion(props:ListAccordionProps) {
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{props.title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {props.renderItem}
    </AccordionDetails>
  </Accordion>
  )
}
