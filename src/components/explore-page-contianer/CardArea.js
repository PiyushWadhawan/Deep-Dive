import React from 'react'
import Card from './Card'
import './CardArea.css'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import CARD_DATA from '../../data/Explore/Jobs.json'
import text from '../../data/Explore/Headings.json'

function CardArea() {

    const [searchWord, setSearchWord] = useState("");
    const [filteredData, setFilteredData] = useState(CARD_DATA);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setSearchWord(searchWord);

        const newFilter = CARD_DATA.filter((item) => {
            return item.type.toLowerCase().includes(searchWord.toLowerCase()) || item.heading.toLowerCase().includes(searchWord.toLowerCase());
        })

        setFilteredData(newFilter);
    }

    const clearSearch = () => {
        setSearchWord("")
        setFilteredData(CARD_DATA)
    }

  return (
    <div className="explore_div">
        
        {/* <video src='/videos/video-3.mp4' autoPlay loop muted /> */}
        <div className="explore_intro">
            <h1 className='explore_heading'>{text.heading}</h1>
            <div className="search">
                <div className="searchInputs">
                    <input type="text" placeholder={text.placeholder} value={searchWord} onChange={handleFilter}/>
                    <div className="searchIcon" onClick={clearSearch}>
                        {searchWord === "" ? <BsSearch/> : <AiOutlineClose/> }
                    </div>
                </div>
            </div>

        </div>

        <div className="cardarea_container">
            { filteredData === [] ? <h1>No results</h1> : filteredData.map(item => <Card key={item.id} id={item.id} image={item.image} heading={item.heading} type={item.type} description={item.description} />)
            }
        </div>
    </div>
    
  )
}

export default CardArea
