import Link from "next/link";

export default function Menu() {

  {/* Bandera: Aqui Menu */}
  return (
    <ul className="main-menu__list">
      <li className="dropdown">
        <Link href="/"><p style={{ color: 'gray'}}>Home</p></Link>
        {/* <ul>
          <li><Link href="/">Home One</Link></li>
          <li><Link href="/index-2">Home Two</Link></li>
          <li><Link href="/index-3">Home Three</Link></li>
          <li className="dropdown">
            <Link href="#">Header Styles</Link>
            <ul>
              <li><Link href="/"> <p style={{ color: 'gray'}}>Header One</p></Link></li>
              <li><Link href="/index-2">Header Two</Link></li>
              <li><Link href="/index-3">Header Three</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#"> <p style={{ color: 'gray'}}>One Page Styles</p></Link>
            <ul>
              <li><Link href="/one-page-style-one">One Page Styles One</Link></li>
              <li><Link href="/one-page-style-two">One Page Styles Two</Link></li>
              <li><Link href="/one-page-style-three">One Page Styles Three</Link></li>
            </ul>
          </li>
        </ul> */}
      </li>
      <li className="dropdown">
        <Link href="#"><p style={{ color: 'gray'}}> Mis Tickets</p></Link>
        {/* <ul>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/team-details">Team Details</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/gallery-details">Gallery Details</Link></li>
          <li><Link href="/faq">Faq</Link></li>
          <li><Link href="/404">404 Error</Link></li>
        </ul> */}
      </li>
      <li className="dropdown">
        <Link href="#"> <p style={{ color: 'gray'}}>Perfil</p></Link>
        {/* <ul>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/event-prodigy">Event Prodigy</Link></li>
          <li><Link href="/stellar-events-co">Stellar Events Co</Link></li>
          <li><Link href="/elite-event-management">Elite Event Management</Link></li>
          <li><Link href="/infinite-occasions">Infinite Occasions</Link></li>
          <li><Link href="/dream-event-planners">Dream Event Planners</Link></li>
        </ul> */}
      </li>
      {/* <li className="dropdown">
        <Link href="#"><p style={{ color: 'gray'}}>Event</p></Link>
        <ul>
          <li><Link href="/event">Event</Link></li>
          <li><Link href="/event-details">Event Details</Link></li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="#"><p style={{ color: 'gray'}}>Blog</p></Link>
        <ul>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/blog-list">Blog List</Link></li>
          <li><Link href="/blog-details">Blog Details</Link></li>
        </ul>
      </li>
      <li>
        <Link href="/contact"> <p style={{ color: 'gray'}}> Contact </p></Link>
      </li> */}
    </ul>
  );
}
