import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import { AppAPI } from "../../API/axiosAPI";
import PopularBooks from './PopularBooks';

export default function PopularCategories() {

  const [Populars, setPopulars]=useState([])
  const [error, setError]=useState("")

  const getPopulars = async()=>{
    const response = await AppAPI.getPopular();
    setPopulars(response.data.data);
  }
  useEffect(()=>{ getPopulars()},[]);
  return (
    <div>
     <Card className="text-center m-1" style={{ width: '24rem', border:"4px solid lightblue", borderRadius:"15px", backgroundColor:"azure" }} >
        <Card.Title>Most Popular Categories</Card.Title>
        <div className="d-flex flex-wrap justify-content-around p-1">
            {!Populars? <p className="alert alert-success text-center my-2" style={{margin:"auto", width:"95%"}} >There aren't Popular categories Yet</p>: ''}
            {
              Populars.map((item, index)=>(
                <h1>{item.bookName}</h1>

                // <Card.Img style={{ width: '7rem' ,margin:"5px" }}  src= { AppAPI.back_Url + '/' + item?.category.categoryName}  alt={"category image"}/>
              ))
            }
          </div>
    </Card>
    </div>
  )
}
