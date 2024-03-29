/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
import { showSuggestion, hideSuggestion } from '../utils/showSuggestionSlice';

const Searchbar = () => {

    const dispatch = useDispatch();
    const searchCache = useSelector(store => store.search);
    const showSuggestions = useSelector(store => store.showSuggestion.showSuggestion);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [highlight, setHighlight] = useState(-1);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResults(
            {
                [searchQuery]: json[1]
            }
        ));
    };

    const handleOnFocusAndBlur = (showOrBlur) => {
        showOrBlur === 'blur' ? setTimeout(() => dispatch(hideSuggestion()), 300) : dispatch(showSuggestion());
    };

    const handleOnKeyDown = keyCode => {
        if(showSuggestions && suggestions.length > 0){
            if(keyCode === 40){
                if(highlight === 9){
                    setHighlight(0);
                }
                else{
                    setHighlight(currCount => currCount + 1);
                }
            }
            else if(keyCode === 38){
                if(highlight === 0){
                    setHighlight(9);
                }
                else{
                    setHighlight(currCount => currCount - 1);
                }
            }
            if(keyCode === 13){
                const suggestVal = document.querySelector('.srch-rslt-wrap li.highlighted').getAttribute('data-sugg');
                setSearchQuery(suggestVal);
                handleOnFocusAndBlur('blur');
                navigate('/results?search_query=' + suggestVal.split(' ').join('+'));
            }
        }
        else{
            setHighlight(-1);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }
            else{
                getSearchSuggestions();
            }
        }, 200)

        return(() => {
            clearTimeout(timer);
        })

    }, [searchQuery]);

    useEffect(() => {
        if(highlight >= 0){
            document.querySelectorAll('.srch-rslt-wrap li').forEach(li => {
                if(li.classList.contains('highlighted')){
                    li.classList.remove('highlighted');
                }
            });
            document.querySelectorAll('.srch-rslt-wrap li')[highlight].classList.add('highlighted');
        }
    }, [highlight]);

    return (
        <div>
            <input type='search' className='bg-[#121212] border border-[#303030] rounded-l-full rounded-r-none px-4 w-[536px] h-[40px]' placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => handleOnFocusAndBlur('focus')} onBlur={() => handleOnFocusAndBlur('blur')} onKeyDown={(e) => handleOnKeyDown(e.keyCode)}></input>
            {showSuggestions && suggestions.length > 0 && (<div className='fixed bg-[#0F0F0F] z-20 text-white py-2 w-[536px] shadow-lg rounded-lg'>
                <ul className='srch-rslt-wrap'>
                    {
                        suggestions.map((suggestion, i) => <li key={suggestion + i} className='px-5 rounded-lg py-2 hover:bg-opacity-10 hover:bg-white' data-sugg={suggestion}><Link to={'/results?search_query=' + suggestion.split(' ').join('+')} className='flex items-center'><img src="data:image/svg+xml;base64, PHN2ZyBmaWxsPSIjZjFmMWYxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy4zOTE3IDE2LjgwODNMMTIuNzMzMyAxMi4xNUMxMy42MjUgMTEuMTI1IDE0LjE2NjcgOS43OTE2NyAxNC4xNjY3IDguMzMzMzNDMTQuMTY2NyA1LjEwODMzIDExLjU1ODMgMi41IDguMzMzMzMgMi41QzUuMTA4MzMgMi41IDIuNSA1LjEwODMzIDIuNSA4LjMzMzMzQzIuNSAxMS41NTgzIDUuMTA4MzMgMTQuMTY2NyA4LjMzMzMzIDE0LjE2NjdDOS43OTE2NyAxNC4xNjY3IDExLjEyNSAxMy42MjUgMTIuMTUgMTIuNzQxN0wxNi44MDgzIDE3LjRMMTcuMzkxNyAxNi44MDgzWk04LjMzMzMzIDEzLjMzMzNDNS41NzUgMTMuMzMzMyAzLjMzMzMzIDExLjA5MTcgMy4zMzMzMyA4LjMzMzMzQzMuMzMzMzMgNS41NzUgNS41NzUgMy4zMzMzMyA4LjMzMzMzIDMuMzMzMzNDMTEuMDkxNyAzLjMzMzMzIDEzLjMzMzMgNS41NzUgMTMuMzMzMyA4LjMzMzMzQzEzLjMzMzMgMTEuMDkxNyAxMS4wOTE3IDEzLjMzMzMgOC4zMzMzMyAxMy4zMzMzWiIvPjwvc3ZnPg==" alt="searrch icon" className='w-5 h-5 mr-[14px]' /><span>{suggestion}</span></Link></li>)
                    }
                </ul>
            </div>)}
        </div>
    )
}

export default Searchbar