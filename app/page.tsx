"use client";
{
  /* eslint-disable @next/next/no-html-link-for-pages */
}

import React from "react";
import { AccountButton } from "@/components/ui/account-button";
import { useScript } from "@/app/hooks/useScript";

export default function Home() {
  useScript();

  return (
    <>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration={600}
        data-easing="ease-out-expo"
        data-easing2="ease-out-expo"
        role="banner"
        className="navbar w-nav"
      >
        <div className="nav-block">
          <div className="nav">
            <a
              href="/"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <img
                src="images/Atelier-ai-logo-w2.svg"
                loading="eager"
                alt=""
                className="logo"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="#Features" className="nav-link w-nav-link">
                Features
                <br />
              </a>
              <a href="#Help" className="nav-link w-nav-link">
                Help
              </a>
            </nav>
          </div>
          <AccountButton />
        </div>
      </div>
      <div className="overflow">
        <div
          data-w-id="7a156164-9dec-ac90-a568-7aabe3bd2ab3"
          className="section-hero"
        >
          <div className="content">
            <div className="w-layout-grid grid-hero">
              <div className="block-hero">
                <h1
                  className="heading-hero large"
                  style={{
                    opacity: 0,
                  }}
                >
                  Design Your Dream Lingerie with AI
                </h1>
                <p
                  style={{
                    opacity: 0,
                  }}
                  className="paragraph-hero max-w"
                >
                  Transform your intimate apparel ideas into stunning
                  visualizations in seconds. No design experience needed - just
                  select your preferences and watch as AI brings your vision to
                  life with professional-quality designs.
                </p>
                <a
                  style={{
                    WebkitTransform:
                      "translate3d(0, 16px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 16px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 16px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 16px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    opacity: 0,
                  }}
                  href="/pricing"
                  className="button w-button"
                >
                  Try our open beta
                </a>
              </div>
              <div
                id="w-node-_3faee776-541d-8a2f-1798-8c606d3a3e51-2976202f"
                className="wrapper-circle"
              >
                <div className="content-wrapper-circle">
                  <img
                    src="images/webpeditor_0253d39ced8d47b082864eb85e783f2e-removebg_wi17n2.webp"
                    loading="lazy"
                    alt=""
                    className="h-full mt-12 sm:mt-0"
                  />
                </div>
                <div style={{ opacity: 0 }} className="blur-hero" />
              </div>
            </div>
          </div>
          <div className="blur-top" />
        </div>
        <div id="Features" className="section">
          <div className="content">
            <div className="block-heading">
              <h2 className="heading">Design Lingerie for Every Moment</h2>
            </div>
            <div className="w-layout-grid grid-features">
              <div
                data-w-id="cf279c53-10d5-47c0-1f6e-84c9b074e328"
                className="wrapper"
              >
                <div style={{ opacity: 0 }} className="blurred-color" />
                <div className="content-wrapper">
                  <div className="feature">
                    <img
                      src="images/76749534481d4a888d45a5de441ed878.png"
                      loading="eager"
                      width="193.5"
                      height="Auto"
                      alt=""
                      data-w-id="fa5d5a88-78b4-779c-a5f3-45286a0afd9b"
                      style={{ opacity: 0 }}
                      className="image-feature"
                    />
                    <div className="block-feature">
                      <h4 className="heading-feature">Seductive Sets</h4>
                      <p className="paragraph-feature">
                        Design matching pieces that make you feel confident and
                        beautiful. From delicate lace coordinates to bold
                        statement sets, create the perfect pairing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-w-id="a9e50413-39fb-6e71-0b9c-f8730cb656a1"
                className="wrapper"
              >
                <div style={{ opacity: 0 }} className="blurred-color" />
                <div className="content-wrapper">
                  <div className="feature">
                    <div className="block-feature top">
                      <h4 className="heading-feature">Dreamy Sleepwear</h4>
                      <p className="paragraph-feature">
                        Combine comfort with elegance in your perfect nighttime
                        ensemble. Design everything from silk pajamas to
                        romantic nightgowns.
                      </p>
                    </div>
                    <img
                      src="images/webpeditor_visualelectric-1734123511528_yxlbfv.webp"
                      loading="eager"
                      width="233.5"
                      style={{ opacity: 0 }}
                      alt=""
                      data-w-id="a9e50413-39fb-6e71-0b9c-f8730cb656a5"
                      className="image-feature"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid grid-features-small">
              <div
                id="w-node-_4f33f29c-2ef1-5436-81c6-a99f21ffcf26-2976202f"
                data-w-id="4f33f29c-2ef1-5436-81c6-a99f21ffcf26"
                className="wrapper"
              >
                <div style={{ opacity: 0 }} className="blurred-color" />
                <div className="content-wrapper">
                  <div className="feature">
                    <div className="block-feature top">
                      <h4 className="heading-feature">Athletic Edge</h4>
                      <p className="paragraph-feature">
                        Performance meets style in sports bras and
                        athletic-inspired pieces. Create supportive designs that
                        keep up with your active lifestyle.
                      </p>
                    </div>
                    <img
                      src="images/webpeditor_fe34d3ff0ace4c47806575c1080ba30a_bhbthx.webp"
                      loading="eager"
                      width={270}
                      style={{ opacity: 0 }}
                      alt=""
                      data-w-id="4f33f29c-2ef1-5436-81c6-a99f21ffcf2a"
                      className="image-feature mt-4 sm:mt-0"
                    />
                  </div>
                </div>
              </div>
              <div
                id="w-node-_955a1bea-0db9-358b-b5e9-1c0fae8cf9da-2976202f"
                data-w-id="955a1bea-0db9-358b-b5e9-1c0fae8cf9da"
                className="wrapper"
              >
                <div style={{ opacity: 0 }} className="blurred-color" />
                <div className="content-wrapper">
                  <div className="feature">
                    <img
                      src="images/webpeditor_6ce647eeba7e4450807183d088a490b1_qwubj3.webp"
                      loading="eager"
                      width="221.5"
                      style={{ opacity: 0 }}
                      alt=""
                      data-w-id="955a1bea-0db9-358b-b5e9-1c0fae8cf9de"
                      className="image-feature mb-4 sm:mb-0"
                    />
                    <div className="block-feature">
                      <h4 className="heading-feature">Timeless Essentials</h4>
                      <p className="paragraph-feature">
                        Design the perfect foundation pieces for everyday
                        confidence. Create classic styles with modern touches
                        that stand the test of time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="content">
            <div className="block-cta">
              <h2 className="heading">Design Without Limits</h2>
              <h2 className="heading opacity">
                No more scrolling through countless stores trying to find that
                perfect piece - create exactly what you&#39;re looking for with
                our AI designer, customizing every detail from fabric to
                finishing touches.
              </h2>
              <a href="/designer" className="button w-button">
                Try now for free
              </a>
              <div className="blur-block" />
            </div>
          </div>
        </div>
        <div id="Help" className="section">
          <div className="content">
            <div className="block-heading">
              <h2 className="heading">Frequently Asked Questions</h2>
            </div>
            <div className="w-layout-grid grid-faq">
              <div
                id="w-node-_55ccc3df-9ebc-e84e-ceda-3c81384483bc-2976202f"
                className="accordion-item"
              >
                <div className="accordion-header">
                  <h5 className="heading-accordion">
                    How many designs can I generate?
                  </h5>
                  <img
                    src="images/icon_accordion.svg"
                    loading="eager"
                    alt=""
                    className="icon-accordion"
                  />
                </div>
                <div
                  className="accordion-content"
                  style={{
                    display: "none",
                    height: 0,
                  }}
                >
                  <p className="paragraph-accordion">
                    You can generate as many designs as your token balance
                    allows. Each design costs one token, and you can purchase
                    additional tokens whenever you need them.
                  </p>
                </div>
              </div>
              <div
                id="w-node-_55ccc3df-9ebc-e84e-ceda-3c81384483c4-2976202f"
                className="accordion-item"
              >
                <div className="accordion-header">
                  <h5 className="heading-accordion">
                    Can I use the designs commercially?
                  </h5>
                  <img
                    src="images/icon_accordion.svg"
                    loading="eager"
                    alt=""
                    className="icon-accordion"
                  />
                </div>
                <div
                  className="accordion-content"
                  style={{
                    display: "none",
                    height: 0,
                  }}
                >
                  <p className="paragraph-accordion">
                    Yes, all designs generated through our platform come with
                    full commercial usage rights. You own the designs you create
                    and can use them for any business or personal purpose.
                  </p>
                </div>
              </div>
              <div
                id="w-node-_55ccc3df-9ebc-e84e-ceda-3c81384483cc-2976202f"
                className="accordion-item"
              >
                <div className="accordion-header">
                  <h5 className="heading-accordion">
                    What happens if I run out of credits?
                  </h5>
                  <img
                    src="images/icon_accordion.svg"
                    loading="eager"
                    alt=""
                    className="icon-accordion"
                  />
                </div>
                <div
                  className="accordion-content"
                  style={{
                    display: "none",
                    height: 0,
                  }}
                >
                  <p className="paragraph-accordion">
                    When your credits run out, you can simply purchase more
                    tokens from your dashboard. There&#39;s no waiting period or
                    limit - buy what you need, when you need it.
                  </p>
                </div>
              </div>
              <div
                id="w-node-_55ccc3df-9ebc-e84e-ceda-3c81384483d4-2976202f"
                className="accordion-item"
              >
                <div className="accordion-header">
                  <h5 className="heading-accordion">Can I cancel anytime?</h5>
                  <img
                    src="images/icon_accordion.svg"
                    loading="eager"
                    alt=""
                    className="icon-accordion"
                  />
                </div>
                <div
                  className="accordion-content"
                  style={{
                    display: "none",
                    height: 0,
                  }}
                >
                  <p className="paragraph-accordion">
                    Our platform operates on a pay-as-you-go model with one-time
                    purchases rather than a subscription. You buy tokens when
                    you need them, with no recurring charges or commitments.
                  </p>
                </div>
              </div>
              <div
                id="w-node-_55ccc3df-9ebc-e84e-ceda-3c81384483dc-2976202f"
                className="accordion-item"
              >
                <div className="accordion-header">
                  <h5 className="heading-accordion">
                    How realistic are the designs?
                  </h5>
                  <img
                    src="images/icon_accordion.svg"
                    loading="eager"
                    alt=""
                    className="icon-accordion"
                  />
                </div>
                <div
                  className="accordion-content"
                  style={{
                    display: "none",
                    height: 0,
                  }}
                >
                  <p className="paragraph-accordion">
                    Our AI generates highly detailed, professional-quality
                    designs that provide a realistic representation of how the
                    final product would look. The designs are detailed enough to
                    serve as clear references for production or visualization
                    purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-footer">
          <div className="content">
            <div className="w-layout-grid grid-footer">
              <div
                id="w-node-_91e6edfb-36c0-e5d4-48fb-589312d14fb3-12d14fb0"
                className="block-footer"
              >
                <img
                  src="images/Atelier-ai-logo-w.svg"
                  loading="eager"
                  alt=""
                  className="logo-footer"
                />
                <p className="paragraph-footer">
                  Your personal lingerie design studio. Powered by AI, designed
                  by you.
                </p>
                <a
                  href="mailto:support@dressy.app"
                  className="link-block w-inline-block"
                >
                  <img
                    src="images/icon_6.svg"
                    loading="eager"
                    alt=""
                    className="icon-link"
                  />
                  <div className="text-link">support@dressy.app</div>
                </a>
              </div>
              <div
                id="w-node-_91e6edfb-36c0-e5d4-48fb-589312d14fbb-12d14fb0"
                className="block-footer"
              >
                <div className="subtitle-footer">quick links</div>
                <a href="terms-and-conditions" className="link-footer">
                  Terms and Conditions
                </a>
                <a href="privacy-policy" className="link-footer">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
