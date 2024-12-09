import Layout from "@/components/layout/Layout";
import Link from "next/link";

const teamMembers = [
  {
    name: "David Beckham",
    role: "Speaker",
    img: "/assets/images/team/team-1-1.jpg",
    description:
      "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
  {
    name: "David Betman",
    role: "Singer",
    img: "/assets/images/team/team-1-2.jpg",
    description:
      "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
  {
    name: "Jessica Brown",
    role: "Content Creator",
    img: "/assets/images/team/team-1-3.jpg",
    description:
      "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
  {
    name: "David Beckham",
    role: "Speaker",
    img: "/assets/images/team/team-1-4.jpg",
    description:
      "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
  {
    name: "Alisha Martin",
    role: "Singer",
    img: "/assets/images/team/team-1-5.jpg",
    description:
      "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
  {
    name: "Herbert Spin",
    role: "Content Creator",
    img: "/assets/images/team/team-1-6.jpg",
    description:
      "Events bring people together for shared experience and celebration. Weddings and birthdays to conferences, festivals, events create memories.",
  },
];
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Team">
        <>
          <section className="team-page">
            <div className="container">
              <div className="row">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`col-xl-4 col-lg-6 col-md-6 wow fadeIn${
                      index % 2 === 0 ? "Left" : "Right"
                    }`}
                    data-wow-delay={`${(index + 1) * 100}ms`}
                  >
                    <div className="team-one__single">
                      <div className="team-one__img-box">
                        <div className="team-one__img">
                          <img src={member.img} alt={member.name} />
                          <div className="team-one__content">
                            <h4 className="team-one__name">
                              <a href="team-details">{member.name}</a>
                            </h4>
                            <p className="team-one__sub-title">{member.role}</p>
                          </div>
                          <div className="team-one__content-hover">
                            <h4 className="team-one__name-hover">
                              <a href="team-details">{member.name}</a>
                            </h4>
                            <p className="team-one__sub-title-hover">
                              {member.role}
                            </p>
                            <p className="team-one__text-hover">
                              {member.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA One Start */}
          <section className="cta-one">
            <div className="container">
              <div className="cta-one__inner">
                <h3 className="cta-one__title">
                  Get Latest Updates Subscribe <br /> to Our Newsletter
                </h3>
                <form
                  className="cta-one__form mc-form"
                  data-url="MC_FORM_URL"
                  noValidate
                >
                  <div className="cta-one__form-input-box">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="EMAIL"
                    />
                    <button type="submit" className="cta-one__btn">
                      <span className="icon-paper-plan"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* CTA One End */}
        </>
      </Layout>
    </>
  );
}
