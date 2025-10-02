import React from 'react'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Matteo Tani — <a href="/resume.pdf" target="_blank">Télécharger CV</a></p>
      </div>
    </footer>
  )
}
