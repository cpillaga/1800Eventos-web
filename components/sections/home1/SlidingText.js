export default function SlidingText({
    eventos
}) {


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

                        {eventos.length > 0 && (

                            <>

                                <li>
                                    <h2 data-hover="Evento de la Semana:" className="sliding-text__title">
                                        Evento de la Semana:
                                        <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
                                    </h2>
                                </li>
                                <li>
                                    <h2 data-hover={eventos[1]?.title} className="sliding-text__title">
                                        {eventos[1]?.title}
                                        <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
                                    </h2>
                                </li>
                                <li>
                                    <h2 data-hover="Evento de la Semana:" className="sliding-text__title">
                                        Evento de la Semana:
                                        <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
                                    </h2>
                                </li>
                                <li>
                                    <h2 data-hover={eventos[1]?.title} className="sliding-text__title">
                                        {eventos[1]?.title}
                                        <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
                                    </h2>
                                </li>
                                <li>
                                    <h2 data-hover="Evento de la Semana:" className="sliding-text__title">
                                        Evento de la Semana:
                                        <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
                                    </h2>
                                </li>
                                <li>
                                    <h2 data-hover={eventos[1]?.title} className="sliding-text__title">
                                        {eventos[1]?.title}
                                        <img src="/assets/images/icon/star-icon-orange.png" alt="Star Icon" />
                                    </h2>
                                </li>

                            </>

                        )}

                    </ul>
                </div>
            </section>
            {/* Sliding Text End */}
        </>
    );
}
