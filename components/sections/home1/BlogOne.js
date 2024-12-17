"use client"
// import { useParams } from '@/components/context/ParamsContext';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'; 


// Mock data for demonstration purposes
const blogPosts = [
  {
    id: 1,
    title: 'Join the Festivi Celebrate Special Moments',
    image: '/assets/images/blog/item1.png',
    date: 'October 19, 2022',
    author: 'admin',
    link: '/blog-details',
    animationDelay: '100ms',
    animationClass: 'fadeInLeft',
    location: 'Hacienda La Quinta, Cuenca - Ecuador'
  },
  {
    id: 2,
    title: 'Embrace the Joyful Spirit Discover a World',
    image: '/assets/images/blog/item2.png',
    date: 'October 19, 2022',
    author: 'admin',
    link: '/blog-details',
    animationDelay: '200ms',
    animationClass: 'fadeInUp'
  },
  {
    id: 3,
    title: 'Where Moments Come Alive an Celebrate',
    image: '/assets/images/blog/item3.png',
    date: 'October 19, 2022',
    author: 'admin',
    link: '/blog-details',
    animationDelay: '300ms',
    animationClass: 'fadeInRight'
  },
  {
    id: 4,
    title: 'Join the Festivi Celebrate Special Moments',
    image: '/assets/images/blog/item4.png',
    date: 'October 19, 2022',
    author: 'admin',
    link: '/blog-details',
    animationDelay: '100ms',
    animationClass: 'fadeInLeft'
  },
  {
    id: 5,
    title: 'Embrace the Joyful Spirit Discover a World',
    image: '/assets/images/blog/item5.png',
    date: 'October 19, 2022',
    author: 'admin',
    link: '/blog-details',
    animationDelay: '200ms',
    animationClass: 'fadeInUp'
  },
  {
    id: 6,
    title: 'Where Moments Come Alive an Celebrate',
    image: '/assets/images/blog/item6.png',
    date: 'October 19, 2022',
    author: 'admin',
    link: '/blog-details',
    animationDelay: '300ms',
    animationClass: 'fadeInRight'
  },
  {
    id: 7,
    title: 'Join the Festivi Celebrate Special Moments',
    image: '/assets/images/blog/item7.png',
    date: 'October 19, 2022',
    author: 'admin',
    link: '/blog-details',
    animationDelay: '100ms',
    animationClass: 'fadeInLeft'
  },
  {
    id: 8,
    title: 'Embrace the Joyful Spirit Discover a World',
    image: '/assets/images/blog/item8.png',
    date: 'October 19, 2022',
    author: 'admin',
    link: '/blog-details',
    animationDelay: '200ms',
    animationClass: 'fadeInUp'
  },
  {
    id: 9,
    title: 'Where Moments Come Alive an Celebrate',
    image: '/assets/images/blog/item9.png',
    date: 'October 19, 2022',
    author: 'admin',
    link: '/blog-details',
    animationDelay: '300ms',
    animationClass: 'fadeInRight'
  }
];

export default function BlogOne() {

  const router = useRouter();

  const handleDetalles = (data) => {
    router.push('/blog-details');
  };

  return (
    <section
      className="blog-one"
      style={{
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        padding: 40,
        boxShadow: '0px 4px 4px 3px rgba(0, 0, 0, 0.3)', color: '#202226'
      }}
    >
      <div
      // className="container" 
      // style={{ 
      //   backgroundColor: 'green' 
      // }}
      >
        <div className="blog-one__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline" style={{ color: '#838383' }}>Latest Blog And news</span>
            </div>
            <h2 className="section-title__title">Whats happening near</h2>
          </div>
          {/* <div className="blog-one__btn-box">
            <Link href="/blog" className="blog-one__btn thm-btn-view-blog">
              View More Blog<span className="icon-arrow-right"></span>
            </Link>
          </div> */}
        </div>
        <div className="blog-one__bottom">
          <div className="row" >
            {blogPosts.map(post => (
              <div
                key={post.id}
                className={`col-xl-4 col-lg-4 col-md-6 wow ${post.animationClass}`}
                data-wow-delay={post.animationDelay}
              >
                <div className="blog-one__single">
                  <div className="blog-one__img" style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)', color: '#202226' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                    />
                    {/* Bandera: Hover de Card*/}
                    <div className="blog-one__hover">

                      <button
                        type="button"
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: 'white',
                          fontSize: 20,
                          fontWeight: 600
                        }}
                        onClick={() => {

                          const data = {
                            id: post.id,
                            title: post.link,
                            image: post.image,
                            date: post.date,
                            author: post.author,
                            link: post.link,
                            animationDelay: post.animationDelay,
                            animationClass: post.animationClass
                          }

                          handleDetalles(data)
                        }}
                      >
                        Buy Now
                      </button>

                      {/* <button 
                        type="button"
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: 'white',
                          fontSize: 20,
                          fontWeight: 600
                        }} 
                        onClick={() => router.push(post.link)}
                      >
                          Buy Now
                      </button> */}

                      {/* <Link
                        href={{
                          pathname: post.link,
                          query: {
                            'id': posst.id,
                            'title': post.title,
                            'image': post.image,
                            'date': post.date,
                            'author': post.author,
                            'link': post.link,
                            'animationDelay': post.animationDelay,
                            'animationClass': post.animationClass
                          },
                        }}
                      >
                        <p style={{ color: 'white', fontSize: 30, fontWeight: 600 }}> Buy Now </p>
                      </Link> */}
                    </div>
                  </div>
                  <div className="blog-one__content" style={{ backgroundColor: 'white', boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.3)', color: '#202226' }}>
                    <ul className="blog-one__meta list-unstyled" style={{ color: '#838383' }}>
                      <li>
                        <span className="icon-user"></span> &nbsp; By {post.author}
                      </li>
                      <li>
                        <span className="icon-calendar"></span> &nbsp; {post.date}
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <Link
                        href={{
                          pathname: post.link,
                          query: {
                            'id': post.id,
                            'title': post.title,
                            'image': post.image,
                            'date': post.date,
                            'author': post.author,
                            'link': post.link,
                            'animationDelay': post.animationDelay,
                            'animationClass': post.animationClass
                          },
                        }}
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <div className="blog-one__btn-box-two">
                      <Link href={post.link} className="blog-one__btn thm-btn-read-blog">
                        Read More<span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
