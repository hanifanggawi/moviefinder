import {FaSearch} from 'react-icons/fa'
import {useState} from 'react'

const SearchBar = ({onSearch}) => {
    const [keyword, setKeyword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        onSearch(keyword)
    }

    return (
        <form className="searchbar" onSubmit={onSubmit}>
            <input className="searchbox" type="text" placeholder="search movies" onChange={(e) => {setKeyword(e.target.value)}}/>
            <button className="search-button" type="submit"> <FaSearch size={18}/></button>
        </form>
    )
}

export default SearchBar
