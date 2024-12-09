"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import Layout from "@/components/layout/Layout";
import BrandSlider1 from "@/components/slider/BrandSlider1";
import EventOne from "@/components/common/EventOne";

export default function AboutUs() {
  return (
    <section 
        // className="event-direction event-direction-two" 
        style={{
            paddingTop: 20,
            paddingBottom: 10
        }}
    >
            <div className="container">
              <div className="event-direction__inner">
                <div className="row">
                  <div
                    className="col-xl-7 wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <div className="event-direction__left">
                      <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                          <span className="section-title__tagline">
                            Our Event Direction
                          </span>
                        </div>
                        <h2 className="section-title__title">
                          Creating Memories <br /> One Event Time
                        </h2>
                      </div>
                      <p className="event-direction__text">
                        Events bring people together for a shared experien
                        celebration a <br />
                        From weddings and birthdays to conferences
                      </p>
                      <div className="event-direction__call">
                        <div className="event-direction__call-icon">
                          <img
                            src="/assets/images/icon/event-direction-chat-icon.png"
                            alt=""
                          />
                        </div>
                        <div className="event-direction__call-content">
                          <p>Call Us</p>
                          <h4>
                            <a href="tel:3075550133">(307) 555-0133</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-5 wow fadeInRight"
                    data-wow-delay="300ms"
                  >
                    <div className="event-direction__right">
                      <ul className="event-direction__counter list-unstyled">
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer">
                                <CountUp start={0} end={100} duration={2} />
                              </h3>
                              <span className="event-direction__counter-plus">
                                +
                              </span>
                            </div>
                            <p className="event-direction__counter-text">
                              Our Event Artists
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer">
                                <CountUp start={0} end={101} duration={2} />
                              </h3>
                              <span className="event-direction__counter-plus">
                                +
                              </span>
                            </div>
                            <p className="event-direction__counter-text">
                              Hours Of Music
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer">
                                <CountUp start={0} end={10} duration={2} />
                              </h3>
                              <span className="event-direction__counter-plus">
                                +
                              </span>
                            </div>
                            <p className="event-direction__counter-text">
                              Event Stages
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="event-direction__counter-single">
                            <div className="event-direction__counter-box">
                              <h3 className="odometer">
                                <CountUp start={0} end={20} duration={2} />
                              </h3>
                              <span className="event-direction__counter-plus">
                                +
                              </span>
                            </div>
                            <p className="event-direction__counter-text">
                              Music Brands
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}
