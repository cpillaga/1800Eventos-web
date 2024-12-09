export default function SlidingText() {
  

  return (
    <>
      {/* Texto Deslizante : Bandera */}
      {/* Sliding Text Start */}
      <section 
        className="sliding-text-one" 
        style={{
            marginTop: 40,
            marginBottom: 40,
            boxShadow: '0px 4px 4px 3px rgba(0, 0, 0, 0.3)', color: '#202226'
        }}
      >
          <div className="sliding-text-one__wrap">
          <ul className="sliding-text__list marquee_mode">
              <li>
              <h2 data-hover="Magic of Events" className="sliding-text__title">
                  Magic of Events
                  <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
              </h2>
              </li>
              <li>
              <h2 data-hover="Celebrate Life" className="sliding-text__title">
                  Celebrate Life
                  <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
              </h2>
              </li>
              <li>
              <h2 data-hover="Magic of Events" className="sliding-text__title">
                  Magic of Events
                  <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
              </h2>
              </li>
              <li>
              <h2 data-hover="Celebrate Life" className="sliding-text__title">
                  Celebrate Life
                  <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
              </h2>
              </li>
              <li>
              <h2 data-hover="Magic of Events" className="sliding-text__title">
                  Magic of Events
                  <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
              </h2>
              </li>
              <li>
              <h2 data-hover="Celebrate Life" className="sliding-text__title">
                  Celebrate Life
                  <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
              </h2>
              </li>
          </ul>
          </div>
      </section>
      {/* Sliding Text End */}
    </>
  );
}
