import './App.css';
import React,{useState} from 'react';
import MovieListe from './MovieListe';
import { v4 as uuidv4 } from 'uuid';


function App() {

const [keyword, setkeyword] = useState("")
const [newRate, setNewRate] = useState(1)
const [movies,setMovies] = useState([

    { 
    id:uuidv4(),
    img:"https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
    title:"Bright",
    duration:"117 min",
    date:"2017, David Ayer",
    rate : 5,
    genre:"Action, Crime, Fantasy",
    description:" Set in a world where fantasy creatures live side by side with humans.",
    },
    { 
      id:uuidv4(),
      img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
      title:"Tomb Raider",
      duration:"125 min",
      date:"2018, Roar Uthaug",
      rate : 4,
      genre:"Action, Fantasy",
      description:" Lara Croft, the fiercely independent daughter of a missing adventurer",
    },
    {
      id:uuidv4(),
      img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
      title:"Black Panther",
      duration:"134 min",
      date:"2018, Ryan Coogler",
      rate : 3,
      genre:"Action, Adventure, Sci-Fi",
      description:" T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation"
    }
])
const search=(text)=>{
setkeyword(text)
}
const setRate=(rate)=>{
  setNewRate(rate)
}
const addMovie=(movie)=>{
  setMovies(movies.concat(movie))
}
return (
    <div className="App">
      
      <MovieListe addMovie={addMovie} movies= {movies.filter( el => el.rate >= newRate && el.title.toLowerCase().includes(keyword.toLowerCase().trim()))} />

    </div>
  );
}

export default App;
// filter(el=>el.title.toLowerCase.includes(keyword.toLowerCase().trim()))
// const [keyword, setkeyword] = useState("")