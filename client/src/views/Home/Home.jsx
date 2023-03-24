import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import { useSelector } from "react-redux";
// import searchBar from "../../Components/SearchBar/SearchBar";
import Paginate from "../Paginate/Paginate"

const Home = ()=>{

    const dispatch = useDispatch();
    const allCharacters = useSelector ((state) => state.countries)
    const [currentPage, setCurrentPage]= useState(1)
    const [charactersPerPage, setCharactersPerPage]=useState(10)
    const indexOfLastCharacter = currentPage * charactersPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
    const currentCharacters = allCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter)

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getCountries())
        // dispatch(byActivity())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }

    return(
        <>
            {/* <searchBar /> */}
            <Paginate 
            charactersPerPage={charactersPerPage}
            allCharacters={allCharacters.length}
            paginate = {paginate}
            />
        </>
    )
}

export default Home;