import React from 'react';
import axios from 'axios';

function MocServer() {
  const [clicked, setClicked] = React.useState(false);
  const [username, setUserName] = React.useState("")
  const [error, setError] = React.useState("")

  const fetchUser = async () => {
    const fetchUrl = "https://jsonplaceholder.typicode.com/users/1"
    axios.get(fetchUrl)
    .then((res)=> {
      const {username} = res.data
      setUserName(username)
      setClicked(true)
    }).catch(() => {
      setError("Fetching Failed !")
    });
  }
  const buttonText = clicked ? "loading" : "staet fetch"

  return (
    <div>
      <button onClick={fetchUser} disabled={clicked}>
        {buttonText}
      </button>

      {username && <h2>{username}</h2>}
      {error && <p data-testid="error">{error}</p>}
    </div>
  )
}

export default MocServer
