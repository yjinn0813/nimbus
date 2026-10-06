// 검색창 컴포넌트

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RECOMMEND_CITIES } from '../constants/cities';
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  /* 검색 실행 함수 */
  const handleSearch = () => {
    if (!query.trim()) return; // 빈값 무시
    navigate(`/detail/${encodeURIComponent(query)}`);
    setQuery(''); // 검색창 초기화
  }

  /* 엔터키 처리 */
  const onKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className='w-[80%]'>
      <div className='relative w-full flex flex-row items-center'>
        <input type="text"
          placeholder='Please enter the city name in English'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          className='pl-4 pr-10 py-2 w-full border-2 border-main_color rounded-full focus:outline-hidden dark:bg-gray-900'/>
        <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={handleSearch}/>
      </div>

      <div className='mt-3 mx-3 flex flex-wrap gap-2'>
        {RECOMMEND_CITIES.map(city => (
          <button key={city} 
            onClick={()=> navigate(`/detail/${encodeURIComponent(city)}`)}
            className='px-3 py-1 rounded-full text-sm bg-sub_color text-white hover:bg-sub_color/80'>
              {city}
          </button>
        ))}
      </div>
    </div>

  )
}
