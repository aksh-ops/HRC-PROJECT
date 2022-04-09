import React from 'react'
import axios from 'axios'

 const getData= async() =>
  {
    let response= await axios.get("http://localhost:8787/highradiusapp/Fetch");

return response.data;
  };
  export default getData;