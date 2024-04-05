import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export const BreakingNews = () => {
  return (
    <div className="flex items-center">
        <button className="btn btn-secondary">Latest</button>
        <Marquee className="" pauseOnHover={true} speed={100}><Link to="/">
  I can be a React component, multiple React components, or just some text. </Link>
  <Link className="ml-10" to="/">
  I can be a React component, multiple React components, or just some text. </Link>
  <Link className="ml-10" to="/">
  I can be a React component, multiple React components, or just some text. </Link>
  </Marquee>
        
    </div>
  )
}
