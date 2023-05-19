import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';


export default function PopularAuthors() {


  return (
    <div>
     <Card className="text-center m-1 " style={{ width: '24rem', border:"4px solid lightblue", borderRadius:"15px", backgroundColor:"azure"  }} >
        <Card.Title>Most Loved Authors</Card.Title>
        <div className="d-flex flex-wrap justify-content-around p-1">
             <Card.Img style={{ width: '7rem' ,margin:"5px" }}  src= "https://media.licdn.com/dms/image/D4D03AQF7MPtZpSGufw/profile-displayphoto-shrink_800_800/0/1664541894707?e=1689206400&v=beta&t=4HiQIxOxoSM-a52BCRSqHMr1TL6bntBPNJ-3_opwlLY" />
             <Card.Img style={{ width: '7rem',margin:"5px" }} src= "https://media.licdn.com/dms/image/D4D03AQF7MPtZpSGufw/profile-displayphoto-shrink_800_800/0/1664541894707?e=1689206400&v=beta&t=4HiQIxOxoSM-a52BCRSqHMr1TL6bntBPNJ-3_opwlLY" />
             <Card.Img style={{ width: '7rem',margin:"5px" }} src= "https://media.licdn.com/dms/image/D4D03AQF7MPtZpSGufw/profile-displayphoto-shrink_800_800/0/1664541894707?e=1689206400&v=beta&t=4HiQIxOxoSM-a52BCRSqHMr1TL6bntBPNJ-3_opwlLY" />
             <Card.Img style={{ width: '7rem',margin:"5px" }} src= "https://media.licdn.com/dms/image/D4D03AQF7MPtZpSGufw/profile-displayphoto-shrink_800_800/0/1664541894707?e=1689206400&v=beta&t=4HiQIxOxoSM-a52BCRSqHMr1TL6bntBPNJ-3_opwlLY" />
             <Card.Img style={{ width: '7rem',margin:"5px" }} src= "https://media.licdn.com/dms/image/D4D03AQF7MPtZpSGufw/profile-displayphoto-shrink_800_800/0/1664541894707?e=1689206400&v=beta&t=4HiQIxOxoSM-a52BCRSqHMr1TL6bntBPNJ-3_opwlLY" />
             <Card.Img style={{ width: '7rem',margin:"5px" }} src= "https://media.licdn.com/dms/image/D4D03AQF7MPtZpSGufw/profile-displayphoto-shrink_800_800/0/1664541894707?e=1689206400&v=beta&t=4HiQIxOxoSM-a52BCRSqHMr1TL6bntBPNJ-3_opwlLY" />
        </div>
    </Card>
    </div>
  )
}