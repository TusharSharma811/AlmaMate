import { useState } from 'react'
import { Link } from 'react-router-dom'

// Mock data for alumni posts
const initialPosts = [
  { id: 1, author: 'John Doe', avatar: '/placeholder.svg?height=40&width=40', content: 'Just got promoted to Senior Developer at TechCorp!', likes: 15, comments: 3 },
  { id: 2, author: 'Jane Smith', avatar: '/placeholder.svg?height=40&width=40', content: 'Excited to announce I\'m starting my own startup!', likes: 22, comments: 7 },
  { id: 3, author: 'Bob Johnson', avatar: '/placeholder.svg?height=40&width=40', content: 'Looking for software engineering interns. DM me if interested!', likes: 8, comments: 12 },
]

// Mock data for upcoming events
const upcomingEvents = [
  { id: 1, title: 'Annual Alumni Mixer', date: '2024-06-15', location: 'Central Park' },
  { id: 2, title: 'Tech Talk: AI in Healthcare', date: '2024-07-02', location: 'Online Webinar' },
  { id: 3, title: 'Career Fair 2024', date: '2024-08-10', location: 'University Campus' },
]

export default function FeedPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [posts, setPosts] = useState(initialPosts)

  const handleSearch = (e) => {
    e.preventDefault()
    // Filter posts based on search term
    const filteredPosts = initialPosts.filter(post => 
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setPosts(filteredPosts)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link href="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">AlumniConnect</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/profile" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Profile</Link>
              <Link href="/logout" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Log Out</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-2/3">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex items-center border-b border-blue-500 py-2">
                <input 
                  className="appearance-none bg-white rounded-l-lg border border-gray-300 w-full text-gray-700 mr-3 py-2 px-4 leading-tight focus:outline-none focus:border-blue-500" 
                  type="text" 
                  placeholder="Search posts..." 
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded-r-lg" 
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Alumni Posts */}
            <div className="space-y-6">
              {posts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <img className="w-10 h-10 rounded-full mr-4" src={post.avatar} alt={`${post.author}'s avatar`} />
                    <div className="font-semibold text-lg">{post.author}</div>
                  </div>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <button className="flex items-center mr-4 hover:text-blue-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                      </svg>
                      {post.likes} Likes
                    </button>
                    <button className="flex items-center hover:text-blue-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                      {post.comments} Comments
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3">
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
              <ul className="space-y-4">
                {upcomingEvents.map(event => (
                  <li key={event.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </li>
                ))}
              </ul>
              <Link href="/events" className="block mt-4 text-blue-500 hover:underline">View all events</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">AlumniConnect</h2>
            </div>
            <div className="flex space-x-4">
              <Link href="/about" className="hover:text-gray-300">About</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
              <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} AlumniConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}