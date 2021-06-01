import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.svg" alt="Poletto.dev" width={208} height={45} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/people"><a>People Listing</a></Link>
    </nav>
  )
}

export default Navbar
