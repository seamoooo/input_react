import {React, useEffect, useState} from 'react'
import axios from 'axios'


function UseEffectRender() {
  const fetchUrl = "https://jsonplaceholder.typicode.com/users/1"
  const [user, setUser] = useState(null);
  const fetchJdon = async() => { 
    const res = await axios.get(fetchUrl)  
    return res.data
  }
  useEffect(() => {
    const fetchUser = async() => {
    const user = await fetchJdon()
    setUser(user)
   };
   fetchUser();
  },[])

  return (
    <div>
      {user ? (
      <p data-testid="api">I am {user.username} : {user.email}
      </p>
      ) : null}
    </div>
  )
}

export default UseEffectRender
