import Link from "next/link"
import { useRouter } from 'next/navigation';
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { crear_tickets } from "@/components/api/TicketsApi";
export default function Header1({ 
  scroll, isMobileMenu, handleMobileMenu, isSidebar, 
  handlePopup, handleSidebar, estadoCompra, 
  ticket = {}, handleCreateTickets, dataArray, 
  isSidebarProfile, handleSidebarProfile
}) {

  const router = useRouter();
  const handleSendTickets = () => {

    crear_tickets(dataArray)
      .then((res) => {
        
        console.log("Crear: ", res)
        router.push('/main')

      })
      .catch((err) => {

        console.log("Err: ", err)

      })

  }

  {/* Header Principal - Bandera */ }
  return (
    <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
      <nav className="main-menu">
        <div className="main-menu__wrapper" style={{ backgroundColor: 'white' }}>
          <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
              <div className="main-menu__logo">
                <Link href="/">
                  <img src="/assets/images/resources/Banner1800-orange.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div
              // className="main-menu__main-menu-box"
              style={{
                marginLeft: 30
              }}
            >
              <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                <i className="fa fa-bars" />
              </div>
              <Menu />
            </div>
            <div className="main-menu__right">
              <div className="main-menu__cart-search-nav-sidebar-icon-and-btn-box">

              <Link href="/main"><p style={{ color: 'gray', fontSize: 18, fontWeight: 600}}>Menu</p></Link>

              <Link href="/tickets"><p style={{ color: 'gray', fontSize: 18, fontWeight: 600}}> Mis Tickets</p></Link>
                
              <Link href="#" onClick={handleSidebarProfile}> <p style={{ color: 'gray', fontSize: 18, fontWeight: 600}}>Perfil</p></Link>

             

                {/* <a href="#" className="main-menu__cart icon-cart"></a> */}

                {/* <a href="#" className="main-menu__search search-toggler" onClick={handlePopup}>
                  <span className="icon-loupe"></span>
                </a> */}
                
                {/* <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                  <div className="navSidebar-button">
                    <span className="icon-menu1"></span>
                  </div>
                </div> */}

              </div>

              {
                estadoCompra ?
                  <>
                    <div className="main-menu__btn-box">
                      <button 
                        className="main-menu__btn thm-btn"
                        style={{ border: 'none' }}
                        onClick={() => {
                          handleSendTickets()
                        }}
                      >

                        {estadoCompra}
                        <span className="icon-arrow-right"></span>

                      </button>
                      {/* <Link href="/tickets" className="main-menu__btn thm-btn" onClick={() => {

                        console.log("Data Send: ", ticket)
                        handleCreateTickets(ticket)

                      }}>
                          {estadoCompra}
                        <span className="icon-arrow-right"></span>
                      </Link> */}
                    </div>
                  </>
                  :
                  <>
                    <div className="main-menu__btn-box">
                      <Link href="/" className="main-menu__btn thm-btn">
                        Call Center
                        <span className="icon-call"></span>
                      </Link>
                    </div>
                  </>
              }




            </div>
          </div>
        </div>
      </nav>

      <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
        <div className="sticky-header__content" />
        <nav className="main-menu">
          <div className="main-menu__wrapper" style={{ backgroundColor: 'white' }}>
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/">
                    <img src="/assets/images/resources/Banner1800-orange.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div
                className="main-menu__main-menu-box"
                style={{
                  marginLeft: 30
                }}
              >
                <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                  <i className="fa fa-bars" />
                </div>
                {/* <Menu /> */}
              </div>
              <div className="main-menu__right">
                <div className="main-menu__cart-search-nav-sidebar-icon-and-btn-box">
                  <a href="#" className="main-menu__cart icon-cart"></a>
                  <div className="main-menu__search search-toggler" onClick={handlePopup}>
                    <span className="icon-loupe"></span>
                  </div>
                  <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                    <div className="navSidebar-button">
                      <span className="icon-menu1"></span>
                    </div>
                  </div>
                </div>
                <div className="main-menu__btn-box">
                  <Link href="/" className="main-menu__btn thm-btn">
                    Buy Ticket <span className="icon-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
    </header>

  )
}