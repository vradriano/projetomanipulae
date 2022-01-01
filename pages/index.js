import { Container, CardContainer, CardWrapper, Form } from './styles'
import { useEffect, useState } from 'react';

import axios from 'axios'


export default function Home() {
  const CLIENT_ID = "5a51aad35e2c48e787a5580a99b465f3"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)
  }, [])

  const searchArtists = async (e) => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}` 
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    })

    console.log(data)
  }

  return (
    <Container>
      <Form onSubmit={searchArtists}>
        <input type="text" onChange={e => setSearchKey(e.target.value)} />
        <button type={"submit"}>Submit</button>
      </Form>

      <CardWrapper>
        <CardContainer>
          Hello
        </CardContainer>
        <CardContainer>
          
        </CardContainer>
        <CardContainer>
          
        </CardContainer>
        <CardContainer>
          
        </CardContainer>
        <CardContainer>
          
        </CardContainer>
        <CardContainer>
          
        </CardContainer>
        <CardContainer>
          
        </CardContainer>
        <CardContainer>
          
        </CardContainer>
        <CardContainer>
          
        </CardContainer>
      </CardWrapper>

      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Spotify</a>
    </Container>
  )
}
