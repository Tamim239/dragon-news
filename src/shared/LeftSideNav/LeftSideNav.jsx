import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export const LeftSideNav = () => {
const [categories, setCategories] = useState([])

useEffect(()=>{
fetch('categories.json')
.then(res => res.json())
.then(data => setCategories(data))
},[])



  return (
    <div className="space-y-6">
        <h1 className="3xl font-semibold">All Categories</h1>
        {
            categories.map(category => <NavLink
                className="block ml-4"
                key={category.id}
                to={`/Category/${category.id}`}
                >{category.name}</NavLink>)
        }
        
    </div>
  )
}
