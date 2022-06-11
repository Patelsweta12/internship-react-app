import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import Compress from "react-image-file-resizer"
import React from 'react'

// styles
import './Create.css'

export default function Create() {  
  const { mode } = useTheme()
  const [title, setTitle] = useState('')
  const [travelDescription, setTravelDescription] = useState('')
  const [travelTime, settravelTime] = useState('')
  const [newTravelStops, setNewTravelStops] = useState('')
  const [travelStops, setTravelStops] = useState([])
  const [travelImage, setTravelImage] = useState('')
  const [newTravelImage, setNewTravelImage] = useState('')
  const travelStopInput = useRef(null)

  const { postData, data } = useFetch('http://localhost:3000/travelPlans', 'POST')
  const history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, travelStops, travelDescription, travelImage: travelImage, travelTime: travelTime + ' Days' })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newTravelStops.trim()

    if (ing && !travelStops.includes(ing)) {
      setTravelStops(prevTravelStops => [...prevTravelStops, newTravelStops])
    }
    setNewTravelStops('')
    travelStopInput.current.focus()
  }

  const uploadImage = async (e) => {
    const file = e.target.files[0]
    const smallImage = await resizeFile(file)
    setTravelImage(smallImage)
    console.log(smallImage)
  }

const resizeFile = (file) =>{
  console.log(file)
  return new Promise((resolve) => {
    Compress.imageFileResizer(
      file,
      300,
      400,
      "JPEG",
      70,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    )
  }
  )
}
  
  // redirect the user when we get data response
  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data, history])

  return (
    <div className={`Create ${mode}`}>
      <h2 className="page-title">Add a New Trip Plan</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Trip title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Places to visit:</span>
          <div className="travelStops">
            <input 
              type="text" 
              onChange={(e) => setNewTravelStops(e.target.value)}
              value={newTravelStops}
              ref={travelStopInput}
            />
            <button onClick={handleAdd} className="btn">add</button>
          </div>
        </label>
        <p>Planned Location: {travelStops.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Travel Description:</span>
          <textarea 
            onChange={(e) => setTravelDescription(e.target.value)}
            value={travelDescription}
            required
          />
        </label>

        <label>
          <span>Number of Days:</span>
          <input 
            type="number" 
            onChange={(e) => settravelTime(e.target.value)}
            value={travelTime}
            required 
          />
        </label>

        <label>
          <span>Picture to upload:</span>
          <div className="travelStops">
            <input 
              type="file" 
              onChange={(e) => {
                uploadImage(e)
                setNewTravelImage(e.target.value)
                }
              }
              value = {newTravelImage}
            />
          </div>
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}