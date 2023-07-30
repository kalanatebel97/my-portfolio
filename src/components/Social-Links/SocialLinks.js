import React from 'react';
import { FaGithub, FaLinkedin,FaMedium, FaStackOverflow} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const socialLinks = [
        {
            id: 1,
            child: (
                <> 
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/kalana-tebel/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <> 
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/kalanatebel97',
        },
        {
            id: 3,
            child: (
                <> 
                Medium <FaMedium size={30} />
                </>
            ),
            href: 'https://kalanamtebel97.medium.com/',
        },
        {
            id: 4,
            child: (
                <> 
                Stack OverFlow <FaStackOverflow size={30} />
                </>
            ),
            href: 'https://stackoverflow.com/users/17500186/kalana-tebel',
        },
        {
            id: 5,
            child: (
                <> 
                Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:kmadushankat@gmail.com',
        },

        {
            id: 6,
            child: (
                <> 
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]

  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {socialLinks.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default SocialLinks