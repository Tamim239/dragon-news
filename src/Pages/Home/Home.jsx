import { useLoaderData } from 'react-router-dom'
import { Header } from "../../shared/Header/Header"
import { LeftSideNav } from "../../shared/LeftSideNav/LeftSideNav"
import { Navbar } from "../../shared/Navbar/Navbar"
import { RightSideNav } from "../../shared/RightSideNav/RightSideNav"
import { BreakingNews } from "./BreakingNews"
import { NewsCard } from './NewsCard'

export const Home = () => {
  const news = useLoaderData()
  console.log(news)

  return (
    <div>
       <Header></Header>
       <BreakingNews></BreakingNews>
       <Navbar></Navbar>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
            <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
           {
            news.map(anew => <NewsCard key={anew._id} news={anew}></NewsCard>)
           }
        </div>
        <div>
        <RightSideNav></RightSideNav>
        </div>
       </div>
    </div>
  )
}
