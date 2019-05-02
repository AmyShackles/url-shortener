import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_ENDPOINT}`,
    {
      originalUrl: originalUrl,
      shortBaseUrl: process.env.REACT_APP_ENDPOINT
    })
    .then(response => {
      setShortUrl(response.data.urlCode)
    })
    .catch(err => console.log(err))
  };
  return (
  <form onSubmit={handleSubmit}>
    <input
    value={originalUrl}
    onChange={e => setOriginalUrl(e.target.value)}
    placeholder="Original Url"
    name="originalUrl"
    type="url"
    required
    />
    <input
    value={shortUrl ? `${process.env.REACT_APP_ENDPOINT}/${shortUrl}` : ''}
    onChange={e => setShortUrl(e.target.value)}
    placeholder="short URL"
    name="shortUrl"
    type="url"
    />
    <button type="submit">Submit</button>
</form>
  );
}

export default App;
