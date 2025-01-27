'use client'

export default function Footer() {
  return (
    <footer className="bg-[#002033] text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Northeastern University Investment Banking Group. All rights reserved.</p>
      </div>
    </footer>
  )
} 