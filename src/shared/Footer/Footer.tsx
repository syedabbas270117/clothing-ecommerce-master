import Link from "next/link";
import React from "react";
import { BsLinkedin, BsSpotify, BsTwitter } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";

import { footerData } from "@/data/content";

const Footer: React.FC = () => {
  return (
      <div>
        <div className="container mb-5">
          <div className="rounded-3xl bg-black text-white">

            {/* Footer Main Content */}
            <div className="grid gap-10 px-10 pb-5 pt-16 lg:grid-cols-3 lg:gap-0">

              {/* Left Column: Main Pages */}
              <div className="space-y-5 lg:ml-8">
                <h4 className="whitespace-nowrap text-2xl font-medium">Main Pages</h4>
                {footerData?.footerLinks[0]?.links?.map((link) => (
                    <div key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </div>
                ))}
              </div>

              {/* Center Column: Utility Pages */}
              <div className="space-y-5 lg:text-center">
                <h4 className="whitespace-nowrap text-2xl font-medium">Utility Pages</h4>
                {footerData?.footerLinks[1]?.links?.map((link) => (
                    <div key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </div>
                ))}
              </div>

              {/* Social Media Icons (after Utility Pages on mobile, right-aligned on large screens) */}
              <div className="flex justify-center gap-5 lg:justify-end lg:mr-8 lg:mt-32">
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <BsTwitter className="text-2xl hover:text-blue-500 transition duration-300" />
                </a>
                <a href="https://spotify.com" aria-label="Spotify" target="_blank" rel="noopener noreferrer">
                  <BsSpotify className="text-2xl hover:text-green-500 transition duration-300" />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin className="text-2xl hover:text-blue-700 transition duration-300" />
                </a>
              </div>

            </div>

            {/* Divider Line */}
            <div className="h-px w-full bg-neutral-500" />

            {/* Bottom Section: Copyright and Policies */}
            <div className="flex flex-col items-center justify-between gap-3 px-10 py-5 md:flex-row md:gap-0">
              {/* Left Aligned: Copyright */}
              <div className="flex items-center gap-1 text-sm md:text-base">
                <MdCopyright /> <span>2024 Zavano. All rights reserved</span>
              </div>

              {/* Center Aligned: Terms and Policies */}
              <div className="flex items-center gap-5">
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
