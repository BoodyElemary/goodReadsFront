import React from 'react'
import PopularCategories from '../layout/PopularCategories'
import PopularAuthors from '../layout/PopularAuthors'
import PopularBooks from '../layout/PopularBooks'
import SignUp from '../layout/SignUp'
import LogIn from '../layout/LogIn'


export default function Home() {
  return (
    <div className="container d-flex">
        <div className="col-8">
            <div className="d-flex flex-wrap pt-2">
                <PopularCategories/>
                <PopularAuthors/>
                <PopularBooks/>
            </div>
        </div>
        <div className="col-4">
            <LogIn />
            <SignUp/>
        </div>
    </div>
  )
}
