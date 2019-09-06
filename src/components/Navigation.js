import React from 'react';

const Navigation = () => {
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
				<button className='noOutline'>Contact</button>
				<form
					className='buttonForm'
					action='other/davidlinke_resume.pdf'
					method='get'
				>
					<button>Resume</button>
				</form>
			</div>
		</div>
	);
};

export default Navigation;
