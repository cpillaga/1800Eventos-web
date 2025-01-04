import Link from "next/link"
import { useRouter } from 'next/navigation';
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { crear_tickets } from "@/components/api/TicketsApi";
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar, estadoCompra, ticket = {}, handleCreateTickets }) {

  const router = useRouter();

  const handleSendTickets = (ticket) => {

    const cantidad = ticket.cantidad;
    const array_tickets = [];

    for (let i = 0; i < cantidad; i++) {
      array_tickets.push({
        eventId: ticket.id, 
        userId: ticket.idUser,
        isValid: true, 
        purchaseDate: ticket.cantidad,
        paymentStatus: "PENDING",
        stageId: ticket.etapas[0]._id,
        localidadId: ticket.localidades[0].id,
        isTransferred: false
      });
    }

    crear_tickets(array_tickets)
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
                <a href="#" className="main-menu__cart icon-cart"></a>
                <a href="#" className="main-menu__search search-toggler" onClick={handlePopup}>
                  <span className="icon-loupe"></span>
                </a>
                <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                  <div className="navSidebar-button">
                    <span className="icon-menu1"></span>
                  </div>
                </div>
              </div>

              {
                estadoCompra ?
                  <>
                    <div className="main-menu__btn-box">
                      <button 
                        className="main-menu__btn thm-btn"
                        style={{ border: 'none' }}
                        onClick={() => {
                          // console.log("Enviar Datos: ", ticket.idUser)
                          // console.log("Enviar Datos: ", ticket.id)
                          // console.log("Enviar Datos: ", ticket.cantidad)
                          // console.log("Enviar Datos: ", true)
                          // console.log("Enviar Datos: ", false)
                          // console.log("Enviar Datos: ", "PENDING")
                          // console.log("Enviar Datos: ", ticket.etapas[0]._id)
                          // console.log("Enviar Datos: ", ticket.localidades[0]._id)
                          // console.log("Enviar Datos: ", false)
                          // console.log("Enviar Datos: ", ticket.etapas)
                          handleSendTickets(ticket)
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
                        Ir al Menu
                        <span className="icon-arrow-right"></span>
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
                <Menu />
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