import React from 'react'

const Search = ({search,setSearch}) => {
  return (
      <div className={`${search ? "translate-x-0" : "translate-x-[520px]"}transition absolute z-40`} onClick={()=>setSearch(true)}>Search</div>
  )
}

export default Search