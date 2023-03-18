import "./App.css";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import hulu from "./images/hulu.png";
import {requests} from "./request"
import {
	HomeIcon,
	CollectionIcon,
	BadgeCheckIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./components/HeaderItem";

const API_URL="https://api.themoviedb.org/3/movie/popular?"
const api_key= "api_key=5542202722d37080cc3fa73e17c82a61"

const headerItems = [
	{ title: "HOME", icon: HomeIcon },
	{ title: "TRENDING", icon: LightningBoltIcon },
	{ title: "VERIFIED", icon: BadgeCheckIcon },
	{ title: "COLLECTION", icon: CollectionIcon },
	{ title: "SEARCH", icon: SearchIcon },
	{ title: "ACCOUNT", icon: UserIcon },
];
function App() {
	
	const [movies, setMovies]=useState([]);

	const [ query, setQuery]=useState('');
	useEffect(()=>{
		fetch(API_URL+api_key)
		.then((res)=>res.json())
		.then(data=>{
			console.log(data)
			setMovies(data.results)
		})
	},[]);
const changeSelect= async(e)=>{
	e.preventDefault();
	console.log("search")
	try{
		const url=`https://api.themoviedb.org/3/`+ e.target.value;
		const res= await fetch(url)
		const data= await res.json();
		console.log(data)
		setMovies(data.results)
	}catch(e){
		console.log(e)
	}
}

  const SearchMovie = async(e)=>{
        e.preventDefault();
        console.log("search")
        try{
            const url=`https://api.themoviedb.org/3/search/movie?api_key=5542202722d37080cc3fa73e17c82a61&query=${query}`
            const res= await fetch(url)
            const data= await res.json();
            console.log(data)
            setMovies(data.results)
        }catch(e){
            console.log(e)
        }
    }
    const changeHandler=(e)=>{
        setQuery(e.target.value)
     }

	return (
		<>
			
		<div className="flex flex-col items-center sm:flex-row sm:justify-between m-3 h-auto">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				{headerItems.map((item) => (
					<HeaderItem key={item.title} title={item.title} Icon={item.icon} />
				))}
			</div>
			 <form onSubmit = {SearchMovie} className="flex border-2 px-3 w-full max-w-md sm:w-48 rounded-lg sm:-mt-3 mb-4 mx-8 ">
				<input
					onChange={changeHandler }
					value={query}
					placeholder = "Search a movie"
					type="text"
					className=" bg-transparent appearance-none rounded w-full leading-tight focus:outline-none focus:shadow-outline"
				/>
				<SearchIcon
					onClick={SearchMovie}
					// className="ml-2 h-10 cursor-pointer hover:text-white hover:shadow-md"
				/>
			</form> 

			<img className="h-6  sm:mb-6" width={120} height={100} src={hulu} alt="logo" />
			
		</div>
      <div className="relative">
      <section className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {requests.map((todo) =>{
          return(
            <h3 className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500" key={todo.url} value={todo.url} onClick={changeSelect}>{todo.title}</h3>
          )
        })}
      </section>
      <div className="absolute top-0 right-0 bg-gradient-to-l from[#06202A] h-10 w-1/12" />
      </div>
      				
			<div className="cont">
      
				{movies.length > 0 ?(
					
					<div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
					{movies.map((movieReq)=>
				<Main  key={movieReq.id} {...movieReq}/>)}
					</div>
				):(
					<h2> Sorry no movies Found</h2>
				)}
			
			</div>
			 
			

			
			
			
		
		</>
		
	);
}

export default App;