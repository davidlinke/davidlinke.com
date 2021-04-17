import React from 'react';
import { scroller } from 'react-scroll';

const Navigation = () => {
	const scrollTo = id => {
		scroller.scrollTo(id, {
			duration: 2000,
			smooth: 'easeOutQuad'
		});
	};

	return (
		<div className='outerContainer navContainer'>
			<a className='navLogo' href='/'>
				<div className='logoLetter D'>D</div>
				<span className='logoSubLetter letter1'>a</span>
				<span className='logoSubLetter letter2'>v</span>
				<span className='logoSubLetter letter3'>i</span>
				<span className='logoSubLetter letter4'>d</span>
				<div className='logoLetter L'>L</div>
				<span className='logoSubLetter letter5'>i</span>
				<span className='logoSubLetter letter6'>n</span>
				<span className='logoSubLetter letter7'>k</span>
				<span className='logoSubLetter letter8'>e</span>
			</a>
			<div className='links'>
				<button className='noOutline' onClick={() => scrollTo('contact')}>
					Contact
				</button>
				{/* <form
					className='buttonForm'
					action='davidlinke_resume.pdf'
					method='get'
				>
					<button>Resume</button>
				</form> */}
			</div>
		</div>
	);
};

export default Navigation;
