import { Link } from "react-router-dom"

export const ErrorElement = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">404 Not Found</h1>
      <p className="py-6">Service temporarily unavailable. Please try again later.</p>
      <Link to="/"><button className="btn btn-primary">Go Back To Home</button></Link>
    </div>
  </div>
</div>
  )
}
