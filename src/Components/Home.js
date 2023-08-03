import { Link } from "react-router-dom"

function Home() {
  return ( 
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Kitabu App</h1>
      <img
        src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt="Welcome"
        className="w-64 h-64 rounded-full object-cover"
      />
      <Link to="/booklist" className="mt-4 text-blue-600">
        View Book List
      </Link>
    </div>
  )
}

export default Home