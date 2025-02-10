const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} AI Engineer Portfolio. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a target="_blank" href="https://www.linkedin.com/in/ashar-javid/" className="hover:text-green-400 transition-colors">
            LinkedIn
          </a>
          <a target="_blank" href="https://github.com/Ashar-Javid" className="hover:text-green-400 transition-colors">
            GitHub
          </a>
          <a target="_blank" href="https://www.instagram.com/javidasher" className="hover:text-green-400 transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

