import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  // Move blog data directly into the Home component
  const blogData = [
    {
      id: 1,
      imageSrc: "/assets/images/blog/blog-1-1.jpg",
      imageAlt: "Blog Image 1",
      detailsUrl: "/blog-details/1",
      author: "admin",
      date: "October 19, 2022",
      title: "Join the Festivities Celebrate Special Moments",
    },
    {
      id: 2,
      imageSrc: "/assets/images/blog/blog-1-2.jpg",
      imageAlt: "Blog Image 2",
      detailsUrl: "/blog-details/2",
      author: "admin",
      date: "October 19, 2022",
      title: "Embrace the Joyful Spirit Discover a World",
    },
    {
      id: 3,
      imageSrc: "/assets/images/blog/blog-1-3.jpg",
      imageAlt: "Blog Image 3",
      detailsUrl: "/blog-details/3",
      author: "admin",
      date: "October 19, 2022",
      title: "Where Moments Come Alive and Celebrate",
    },
    {
      id: 4,
      imageSrc: "/assets/images/blog/blog-1-4.jpg",
      imageAlt: "Blog Image 3",
      detailsUrl: "/blog-details/3",
      author: "admin",
      date: "October 19, 2022",
      title: "Events That Leave a Impression",
    },
    {
      id: 5,
      imageSrc: "/assets/images/blog/blog-1-5.jpg",
      imageAlt: "Blog Image 3",
      detailsUrl: "/blog-details/3",
      author: "admin",
      date: "October 19, 2022",
      title: "Sparkle & Shine on Celebrations",
    },
    {
      id: 6,
      imageSrc: "/assets/images/blog/blog-1-6.jpg",
      imageAlt: "Blog Image 3",
      detailsUrl: "/blog-details/3",
      author: "admin",
      date: "October 19, 2022",
      title: "A personal portfolio is a curated collection",
    },
    // Add more blogs here...
  ];

  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Blog">
        <div>
          {/* Blog Page Start */}
          <section className="blog-page">
            <div className="container">
              <div className="row">
                {blogData.map((blog, index) => (
                  <div
                    key={blog.id}
                    className={`col-xl-4 col-lg-4 col-md-6 wow fadeIn${
                      index % 3 === 0
                        ? "Left"
                        : index % 3 === 1
                        ? "Up"
                        : "Right"
                    }`}
                    data-wow-delay={`${(index + 1) * 100}ms`}
                  >
                    <div className="blog-one__single">
                      <div className="blog-one__img">
                        <img src={blog.imageSrc} alt={blog.imageAlt} />
                        <div className="blog-one__hover">
                          <Link href={blog.detailsUrl}>
                            <div className="blog-one__hover-icon-1">
                              <span className="blog-one__hover-icon-2"></span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="blog-one__content">
                        <ul className="blog-one__meta list-unstyled">
                          <li>
                            <a href="#">
                              <span className="icon-user"></span> By{" "}
                              {blog.author}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon-calendar"></span>{" "}
                              {blog.date}
                            </a>
                          </li>
                        </ul>
                        <h3 className="blog-one__title">
                          <Link href={blog.detailsUrl}>{blog.title}</Link>
                        </h3>
                        <div className="blog-one__btn-box-two">
                          <Link
                            href={blog.detailsUrl}
                            className="blog-one__btn-2 thm-btn"
                          >
                            Read More
                            <span className="icon-arrow-right"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Blog Page End */}

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
        </div>
      </Layout>
    </>
  );
}
