import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

function Footer() {
  return (
    <div className="bg-[#F9FAFC] border-t border-[#eee] mt-[50px]">
      <div className="hidden md:block">
        <FooterDesktop />
      </div>

      <div className="block md:hidden">
        <FooterMobile />
      </div>
    </div>
  )
}

export default Footer;
