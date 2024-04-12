import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <>
      <div className="w-full h-[432px] shadow-lg">
        <div className="w-full h-[432px] bg-gray-200 pt-[48px] ">
          <div className="flex flex-wrap justify-around ">
            <div className="pb-[48px]">
              <h1 className="text-4xl tex font-bold italic ">QuickEats</h1>
            </div>

            <div>
              <p> 🇮🇳 India</p>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div>
              <h1>
                ABOUT <span className="font-bold italic"> QuicKEats</span>
              </h1>

              <h3>Who We Are</h3>
              <h3>Blog</h3>
              <h3>Work With Us</h3>
              <h3>Investor Relations</h3>
              <h3>Report Fraud</h3>
              <h3>Press Kit</h3>
              <h3>Contact Us</h3>
            </div>
            <div>
              <h1 className="font-bold">FOR RESTAURANTS</h1>
              <h3>Patner with us</h3>
              <h3>App for you</h3>
            </div>
            <div>
              <h1 className="font-bold">LEARN MORE</h1>
              <h3>Privacy</h3>
              <h3>Security</h3>
              <h3>Terms</h3>
              <h3>Sitemap</h3>
            </div>
            <div>
              <h1>SOCIAL LINKS</h1>
              <div className="">
                <SocialIcon
                  className="p-[3px]"
                  network="github"
                  href="https://github.com/kishikishore2863/QuickEats"
                  target="_blank"
                />

                <SocialIcon
                  className="p-[2px] ml-[2px]"
                  network="linkedin"
                  href="https://www.linkedin.com/in/kishikishore2863/"
                  target="_blank"
                />
              </div>
            </div>
          </div>
          <div className="p-4 mt-[50px]">
            <p className="pl-[300px]">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
