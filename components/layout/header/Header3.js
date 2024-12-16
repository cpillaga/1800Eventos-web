import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (

      <header className={`main-header main-header-three ${scroll ? "fixed-header" : ""}`}>
        <nav className="main-menu main-menu-three">
          <div className="main-menu__wrapper" style={{ backgroundColor: 'white'}}>
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link href="/">
                    <img src="/assets/images/resources/Banner1800-orange.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__main-menu-box">
                    <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                      <i className="fa fa-bars" />
                    </div>
                    <Menu />
                  </div>
                  <div className="main-menu__btn-box">
                      <Link href="/" className="main-menu__btn thm-btn">Buy Ticket <span
                              className="icon-arrow-right"></span> 
                      </Link>
                  </div>
                </div>
              </div>
          </div>
        </nav>

        <div className={`stricky-header stricked-menu main-menu main-menu-three ${scroll ? "stricky-fixed" : ""}`}>
        <div className="sticky-header__content" />
          <nav className="main-menu main-menu-three">
            <div className="main-menu__wrapper" style={{ backgroundColor: 'white'}}>
                <div className="main-menu__wrapper-inner">
                  <div className="main-menu__left">
                    <div className="main-menu__logo">
                      <Link href="/">
                          <img src="/assets/images/resources/logo-1.png" alt="Logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="main-menu__right">
                    <div className="main-menu__main-menu-box">
                      <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                        <i className="fa fa-bars" />
                      </div>
                      <Menu />
                    </div>
                    <div className="main-menu__btn-box">
                        <Link href="/" className="main-menu__btn thm-btn">Buy Ticket <span
                                className="icon-arrow-right"></span> 
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