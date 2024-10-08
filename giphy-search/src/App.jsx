import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useState, useEffect } from 'react';

const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`

function App() {
  const [gifs, setGifs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

/*
  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(URL);
      if (error) setErrorMessage(error.message);
      if (data) setGifs(data.data);
    }
    doFetch();
  }, []);
*/

  useEffect(() => {
    const doFetch = async () => {
      const API_URL = `/api/gifs`;
      try {
        const [data, error] = await handleFetch(API_URL);
        if (data) setGifs(data.data);
      } catch (error) {
        console.log(error.message)
      }
    }
    doFetch();
  }, []);

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifContainer gifs={gifs} />
      </div>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
}

export default App;
