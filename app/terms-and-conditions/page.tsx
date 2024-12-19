"use client";

{
  /* eslint-disable @next/next/no-html-link-for-pages */
}

import { useScript } from "@/app/hooks/useScript";
import { AccountButton } from "@/components/ui/account-button";

const TermsAndConditions = () => {
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
            <a href="/" className="brand w-nav-brand">
              <img
                src="images/Atelier-ai-logo-w2.svg"
                loading="eager"
                alt=""
                className="logo"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="/#Features" className="nav-link w-nav-link">
                Features
                <br />
              </a>
              <a href="/#Help" className="nav-link w-nav-link">
                Help
              </a>
            </nav>
          </div>

          <AccountButton />
        </div>
      </div>
      <div className="section">
        <div className="content">
          <div className="wrapper">
            <div className="blurred-color" />
            <div className="content-wrapper">
              <div className="block-banner">
                <h2 className="heading-banner">Terms and Conditions</h2>
                <p className="paragraph-banner">
                  Please note that your use of and access to our services
                  (defined below) are subject to the following terms; if you do
                  not agree to all of the following, you may not use or access
                  the services in any manner. These Terms of Use (the
                  &#34;Terms&#34;) are a binding contract between you and
                  Dressy.app (&#34;Dressy&#34;, &#34;we&#34; and &#34;us&#34;),
                  operated by A2 Labs LLC. If you have any questions, comments,
                  or concerns regarding these Terms or the Services, please
                  contact us at support@dressy.app. You must agree to and accept
                  all of the Terms, or you don&#39;t have the right to use the
                  Services. Your using the Services in any way means that you
                  agree to all of these Terms, and these Terms will remain in
                  effect while you use the services. These Terms include the
                  provisions in this document, as well as those in the Privacy
                  Policy.
                </p>
                <h3>Will these Terms ever change?</h3>
                <p className="paragraph-banner">
                  We are constantly improving our Services, so these Terms may
                  need to change along with the Services. We reserve the right
                  to change the Terms at any time, but if we do, we will bring
                  it to your attention by placing a notice on the Dressy.app
                  website, and/or by sending you an email, and/or by some other
                  means.If you don’t agree with the new Terms, you are free to
                  reject them; unfortunately, that means you will no longer be
                  able to use the Services. If you use the Services in any way
                  after a change to the Terms is effective, that means you agree
                  to all of the changes.
                </p>
                <h3>General Philosophy</h3>
                <p className="paragraph-banner">
                  We strive to make Dressy.app as easy-to-use as possible and as
                  ethical a business operation as possible. The terms will
                  ensure a good experience for you, our users, and us, the
                  creators of Dressy.app. You must agree to these terms before
                  using Dressy.app.
                </p>
                <h3>Content</h3>
                <p className="paragraph-banner">
                  You understand and agree that the content and information you
                  use on the Dressy.app Services are your responsibility. You
                  represent that you either own or have the necessary rights and
                  permissions to use the content and information you make
                  available through the Services. You agree that you will not
                  use the Services to upload, post, transmit, or otherwise make
                  available any content that:
                  <br />- Infringes any patent, trademark, trade secret,
                  copyright, or other proprietary rights of any party;
                  <br />- Is fraudulent, false, misleading, or deceptive;
                  <br />- Is defamatory, obscene, pornographic, vulgar, or
                  offensive;
                  <br />- Promotes discrimination, bigotry, racism, hatred,
                  harassment, or harm against any individual or group;
                  <br />- Is violent or threatening or promotes violence or
                  actions that are threatening to any other person;
                  <br />- Promotes illegal or harmful activities or substances;
                  <br />
                  Dressy.app reserves the right to remove any content or
                  information you make available through the Services if it
                  believes it violates these Terms.
                </p>
                <h3>Warranties and Disclaimers</h3>
                <p className="paragraph-banner">
                  THE DRESSY.APP SERVICES ARE PROVIDED “AS IS” AND “AS
                  AVAILABLE” AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS
                  OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT. DRESSY.APP DOES NOT WARRANT THAT THE
                  SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, AND DRESSY.APP.
                  DRESSY.APP DOES NOT WARRANT THAT ANY ERRORS WILL BE CORRECTED.
                  DRESSY.APP DISCLAIMS ANY AND ALL LIABILITY FOR THE ACTS,
                  OMISSIONS, AND CONDUCT OF ANY THIRD PARTIES IN CONNECTION WITH
                  OR RELATED TO YOUR USE OF THE SERVICES.YOU ASSUME TOTAL
                  RESPONSIBILITY FOR YOUR USE OF THE SERVICES AND YOUR RELIANCE
                  THEREON. YOUR USE OF THE SERVICES IS AT YOUR OWN RISK.
                </p>
                <h3>Liability Limitation</h3>
                <p className="paragraph-banner">
                  DRESSY.APP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT
                  NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE,
                  DATA OR OTHER INTANGIBLE LOSSES (EVEN IF DRESSY.APP HAS BEEN
                  ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM
                  YOUR USE OF THE SERVICES. THE TOTAL LIABILITY OF DRESSY.APP
                  FOR ALL CLAIMS ARISING FROM OR RELATING TO THE USE OF THE
                  SERVICES IS LIMITED TO THE AMOUNT, IF ANY, ACTUALLY PAID BY
                  YOU FOR USE OF THE SERVICES DURING THE 12 MONTHS IMMEDIATELY
                  PRECEDING THE DATE THE CLAIM AROSE.
                </p>
                <h3>Usage Requirements</h3>
                <p className="paragraph-banner">
                  a) Use of Services. You may access, and we grant you a
                  non-exclusive right to use, the Services in accordance with
                  these Terms. You will comply with these Terms and all
                  applicable laws when using the Services. We and our affiliates
                  own all rights, title, and interest in and to the Services.
                  <br />
                  (b) Feedback. We appreciate feedback, comments, ideas,
                  proposals and suggestions for improvements. If you provide any
                  of these things, we may use it without restriction or
                  compensation to you.
                  <br />
                  (c) Restrictions. The Services are intended for human use
                  only. By using the Services, you agree to the following
                  restrictions: <br />
                  (i) You shall not use the Services in any manner that
                  infringes, misappropriates, or violates the intellectual
                  property rights or other rights of any third party.
                  <br />
                  (ii) You shall not reverse engineer, decompile, disassemble,
                  or otherwise attempt to derive the source code, underlying
                  components, or algorithms of the Services, except to the
                  extent such restrictions are expressly prohibited by
                  applicable law.
                  <br />
                  (iii) You shall not share your account with multiple
                  individuals or entities to circumvent or exceed the
                  limitations set forth by us.
                  <br />
                  (iv) You shall not employ any automated or programmatic
                  methods, including but not limited to scraping, web
                  harvesting, or data extraction, to access the Services,
                  extract data, or bypass the official user interface.
                  <br />
                  (v) You shall not provide us with any personal information of
                  children under the age of 13 or the applicable age of digital
                  consent in your jurisdiction.
                  <br />
                  You agree to adhere to any rate limits and other requirements
                  specified in our documentation. The Services may only be
                  accessed and used in geographies currently supported by us. In
                  the event that you violate these terms of normal usage, we
                  reserve the right, at our sole discretion, to suspend or
                  terminate your account. Furthermore, if your violation results
                  in actual losses or damages, we reserve the right to pursue
                  legal action and seek appropriate compensation to the fullest
                  extent permitted by law.
                </p>
                <h3>Purchasing Credits</h3>
                <p className="paragraph-banner">
                  Billing: You can enjoy our premium features and services by
                  purchasing credits. You&#39;re responsible for all applicable
                  taxes, and we&#39;ll charge tax when required to do so. Some
                  countries have mandatory local laws regarding your
                  cancellation rights, and this paragraph doesn&#39;t override
                  these laws. Please be aware that we practice a no-refund
                  policy.
                </p>
                <h3>Fair Usage Policy</h3>
                <p className="paragraph-banner">
                  Dressy.app is designed for individual human use. To ensure
                  optimal service quality and equitable access for all users, we
                  implement the following Fair Usage Policy:
                  <br />‍<strong>Credit-Based System:</strong>
                  Users purchase credits, which can be redeemed for image
                  queries.
                  <br />‍<strong>Query Limits:</strong> To maintain system
                  performance, usage is monitored to ensure queries align with
                  typical human patterns. Excessive use that exceeds normal
                  consumption may be subject to rate limiting.
                  <br />‍<strong>Content Volume:</strong>
                  Queries involving large amounts of text or sizeable file
                  attachments require significant computational resources. Large
                  or frequent requests may impact overall system performance, so
                  soft limits are implemented to maintain consistent service
                  quality.
                  <strong>Human-Paced Usage:</strong> Our service is optimized
                  for human-paced interactions. Queries submitted at a rate
                  exceeding typical human capacity may be classified as
                  unauthorized programmatic usage.
                  <br />‍<strong>Individual Use:</strong>
                  Dressy.app accounts are for individual use only. Shared
                  accounts or patterns indicating multiple users on a single
                  account are not permitted.
                  <br />‍<strong>Time-Based Monitoring:</strong>
                  Usage is tracked across various time frames to ensure it
                  aligns with expected patterns of individual human use.
                  <br />‍<strong>Prohibited Usage:</strong>
                  Any attempt to access the services through automated means,
                  extract data, or bypass the official user interface is
                  strictly prohibited. All interactions must be initiated
                  directly through the Dressy.app interface by an individual
                  user.
                  <br />‍<strong>Service Adjustments:</strong>
                  Dressy.app reserves the right to adjust service performance or
                  access for accounts that consistently exceed normal human
                  usage patterns or violate this Fair Usage Policy.
                  <br />‍<strong>Compliance:</strong>
                  Violations of this Fair Usage Policy may result in temporary
                  service limitations or, in severe cases, account suspension or
                  termination.
                  <br />
                  We strive to provide high-quality service to all users while
                  managing the intensive computational demands of AI technology.
                  This Fair Usage Policy ensures that no single user negatively
                  impacts the experience of others or overall system
                  performance.If you have specific high-volume needs that may
                  not align with typical individual use, please contact our
                  sales team to discuss custom solutions tailored to your
                  requirements.
                  <br />
                  Dressy.app reserves the right to modify this Fair Usage Policy
                  at any time. Continued use of our services following any
                  changes constitutes acceptance of the updated policy.
                </p>
                <h3>Miscellaneous</h3>
                <p className="paragraph-banner">
                  These Terms and the relationship between you and Dressy.app
                  shall be governed by the laws of the State of California
                  without regard to its conflict of law provisions. You and
                  Dressy.app agree to submit to the personal jurisdiction of a
                  state court located in Santa Clara County, California or the
                  United States District Court for the Northern District of
                  California.
                  <br />
                  If any provision of these Terms is found to be invalid or
                  unenforceable, the remaining provisions shall be enforced to
                  the fullest extent possible, and the remaining Terms shall
                  remain in full force and effect.
                  <br />
                  These Terms constitute the entire agreement between you and
                  Dressy.app with respect to the use of the Services and
                  supersedes all prior or contemporaneous communications,
                  understandings, and agreements, whether written or oral,
                  between you and Dressy.app
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
                Your personal lingerie design studio. Powered by AI, designed by
                you.
              </p>
              <a
                href="mailto:mailto:support@dressy.app"
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
              <a
                href="/terms-and-conditions"
                aria-current="page"
                className="link-footer w--current"
              >
                Terms and Conditions
              </a>
              <a href="/privacy-policy" className="link-footer">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
