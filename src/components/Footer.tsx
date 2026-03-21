// Footer

import React from 'react'
import { MdEmail } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";

const footerLinks = [
  {
    href: "https://github.com/yjinn0813",
    label: "visit github",
    Icon: ImGithub,
  },
  {
    href: "https://www.linkedin.com/in/yjinn0813",
    label: "visit linkedin",
    Icon: FaLinkedin,
  },
  {
    href: "https://hjinn0813.tistory.com",
    label: "visit tech blog",
    Icon: IoBookmark,
  },
  {
    href: "mailto: hjc3790@gmail.com",
    label: "send email",
    Icon: MdEmail,
  }
]

const Footer: React.FC = () => {
  return (
    <footer id='footer' className='mt-16 bg-gradient-to-b from-sub_color to-emerald-600 p-4'>
      <div id='ft-wrap' className='flex justify-between items-center'>
        <div id='ft-text' className='text-sm'>
          © 2025 Yujin Cho.
          <br />
          All rights reserved.
        </div>
        <div id='ft-icons' className='flex flex-row gap-4'>
          {footerLinks.map(({ href, label, Icon }) => (
            <div className="footer-btn" key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="footer-icon" size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
