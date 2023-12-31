import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import merake from '../asset/merake.png'
import etherscan from "../asset/etherscan.svg"
import discord from "../asset/discord.svg"
import twitter from "../asset/twitter.svg"



function Footer() {
    
    return(
        
<footer className="p-4 bg-gradient-to-r from-indigo-600 to-pink-300 via-purple-500  shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link to='home' className="flex items-center mb-4 sm:mb-0">
            <img src={merake} alt='merake' className="h-12 mr-3" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Merakee Hive</span>
        </Link>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="https://twitter.com/MerakeeHive" className="mr-4 hover:underline md:mr-6 "><img src={twitter} alt='twi' className='h-5 w-5 mr-6'/></a>
            </li>
            <li>
                <a href='https://discord.gg/zhf3VMxzGY' className="mr-4 hover:underline md:mr-6"><img src={discord} alt='dis' className='h-5 w-5 mr-6' /></a>
            </li>
           
            <li>
                <a href='https://goerli.etherscan.io/address/0x9E57705d4b9927A53D4E87baFcCF40937D844D10' className="hover:underline"><img src={etherscan} alt='ether' className='w-5 h-5 mb-5'/></a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm  sm:text-center ">© 3 <NavLink exact to='home' className="hover:underline text-gray-950 dark:text-gray-400">Hopewell™</NavLink>. All Rights Reserved.
    </span>
</footer>

    )
}

export default Footer;