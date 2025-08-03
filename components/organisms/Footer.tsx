import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FEFBF5] py-16 lg:pb-20  ">
        <div className="max-w-[1440px] px-5 mx-auto">
            <div className="text-[#1A202C] flex justify-between gap-y-10 flex-wrap gap-x-12 pb-10 border-b ">
                <ul className="flex flex-col gap-y-2">
                <li className="font-bold text-lg text-[#232323] mb-4">Company</li>
                <li>FAQ's</li>
                <li>About Us</li>
                <li>Press & Media Kit</li>
                <li>Our Investors</li>
                <li>Partner with us</li>
                <li>Migration</li>
                </ul>

                <ul className="flex flex-col gap-y-2">
                <li className="font-bold text-lg text-[#232323] mb-4">Products</li>
                <li>Stocks</li>
                <li>Fixed Returns</li>
                <li>For Institutions</li>
                <li>Vault</li>
                </ul>

                <ul className="flex flex-col gap-y-2">
                <li className="font-bold text-lg text-[#232323] mb-4">Legal</li>
                <li>Privacy Policy</li>
                <li>Fixed Returns</li>
                <li>Terms of Service</li>
                <li>Agreements and Disclosures</li>
                <li>Third Party Agreements and Disclosures</li>
                </ul>

                <ul className="flex flex-col gap-y-2">
                <li className="font-bold text-lg text-[#232323] mb-4">Contact us</li>
                <li>support@investbamboo.com</li>
                <li className="flex gap-2 items-center">
                    <Image src="/twitter.svg" width={18} height={18} alt="twitter logo" />
                    <Image src="/facebook.svg" width={9} height={16} alt="facebook logo" />
                    <Image src="/insta.svg" width={18} height={18} alt="instagram logo logo" />
                    <Image src="/youtube.svg" width={20} height={14} alt="youtube logo" />
                    <Image src="/tele.svg" width={18} height={15} alt="telegram logo" />
                </li>
                </ul>
                <div className="flex items-center gap-1 border p-2 rounded-md h-fit">
                    <Image src="/nobgflag.png" width={30} height={30} alt="Nigeria flag" />
                    <p>Nigeria</p>
                    <Image src="/blackarrow.svg" width={18} height={18} alt="Nigeria flag" />
                </div>
            </div>
            <div className="flex items-center justify-between mt-10 flex-wrap gap-y-10 lg:pr-36">
                <div>
                    <Image src="/bamboologo.svg" alt="bamboo logo" width={167} height={47}  />
                </div>
                <div className="flex gap-4 ">
                    <ul className="flex flex-col gap-y-2">
                        <li className="font-bold text-[19px] text-[#232323] ">Lagos</li>
                        <li>Plot 1, Block 22, Babatunde Anjous Ave, Lekki</li>
                        <li>Lekki Phase 1, Lagos, Nigeria</li>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                        <li className="font-bold text-[19px] text-[#232323] ">San Francisco</li>
                        <li>490 Post Street, Ste. 526</li>
                        <li>San Francisco, CA 94102</li>
                    </ul>
                </div>
            </div>
            <div className="mt-10">
                <p className="text-[#232323] text-sm">
                    Bamboo Systems Technology Limited (“Bamboo”) is a company duly licensed by the Securities and Exchange Commission, Nigeria. Bamboo does not provide investment advice and individual investors should make their own decisions to seek independent advice. The value of investments can go up as well as down and you may receive back less than your original investment. US-traded securities, including fractional trading are provided to Lambeth Capital Limited (“Lambeth Capital”) by Drivewealth LLC, a regulated member of <span className="font-bold">FINRA/SIPC</span>. DriveWealth, LLC is a registered broker dealer, member of <span className="font-bold">FINRA</span> and <span className="font-700">SIPC</span>. Nigerian account traded securities are facilitated by Lambeth Capital, a broker-dealer registered with the Securities and Exchange Commission, Nigeria and a Trading License Holder of the Nigerian Exchange Group. Lambeth Capital does not make any personal recommendations to buy, sell, or otherwise deal in investments. Investors make their own investment decisions. The services and securities provided by Lambeth Capital may not be suitable for all customers and, if you have any doubts, you should seek advice from an independent financial adviser.
                </p>
            </div>
            <div className="mt-12">
                <p className="text-[#232323] text-sm ">
                    &copy; Copyright 2025 - Bamboo. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
