import React from 'react'; 
import { StarIcon } from '@heroicons/react/solid';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faInstagram,faGithub,faFacebook} from '@fortawesome/free-brands-svg-icons';
const About = () => {
    return (
		<div>
			<section id='about'>
				<div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-3xl text-3xl mb-4 font-medium text-white'>
							Hi, I'm Shreyash.
							<br className='hidden lg:inline-block' />I love to build amazing web apps and made my hands
							dirty on Competitive Programming.
						</h1>
						<b>
							<p className='mb-8 leading-relaxed'>
								2
								<StarIcon className='w-6 inline-block' />
								Codechef| 5
								<StarIcon className='w-6 inline-block' />
								Hackerrank| Web Developer| Competitive Programmer
							</p>
						</b>
						<div className='social-container mb-4'>
							<a
								href='https://www.linkedin.com/in/shreyash-yewale-11a341166/'
								className='lindedin social ml-4'>
								<FontAwesomeIcon icon={faLinkedin} size='2x' />
							</a>
							<a href='https://github.com/ShreyashYewale' className='github social ml-4'>
								<FontAwesomeIcon icon={faGithub} size='2x' />
							</a>
							<a href='https://www.instagram.com/yewaleshreyash/' className='lindedin social ml-4'>
								<FontAwesomeIcon icon={faInstagram} size='2x' />
							</a>
							<a href='https://www.facebook.com/shreyas.yewale.5' className='lindedin social ml-4'>
								<FontAwesomeIcon icon={faFacebook} size='2x' />
							</a>
						</div>
						<div className='flex justify-center'>
							<a
								href='#contact'
								className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>
								Work With Me
							</a>
							<a
								href='#projects'
								className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
								See My Past Work
							</a>
						</div>
					</div>
					<div className='sm:max-w-sm sm:w-full md:w-5/2 w-5/2'>
						<img className='object-cover object-center rounded' alt='hero' src='./profile.png' />
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
