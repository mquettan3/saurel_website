import React from "react"

export default function Footer() {
  return (
      <footer>
        <div className="footer-container container">
          <div>© {new Date().getFullYear()} Saurel Quettan</div>
          <div>Website created by <a href="https://www.marcusquettan.com">Marcus Quettan</a></div>
        </div>
      </footer>
  )
}
