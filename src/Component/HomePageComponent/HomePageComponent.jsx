import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './HomePageComponent.css'
import DisplayComponent from './DisplayComponent'
import Base_Url from '../../../config'

const HomePageComponent = () => {
  const [blog, setblog] = useState([])

  useEffect(() => {
    axios.get(`${Base_Url}`)
      .then(response => setblog(response.data))
      .catch(error => console.log(error.response.data.message))
  }, [])
  return (
    <React.Fragment>
      {/* <div>GetAllblogsComponent</div> */}
      <div className='books'>
        {blog && blog.map((blog, index) => (
          <DisplayComponent blog={blog} key={index} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default HomePageComponent