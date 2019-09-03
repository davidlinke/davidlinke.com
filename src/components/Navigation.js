import React from 'react';

const Navigation = () => {
	return (
		<div className='outerContainer navContainer'>
			<div className='navLogo'>
				<div className='logoLetter'>D</div>
				<span className='logoSubLetter 1'>a</span>
				<span className='logoSubLetter 2'>v</span>
				<span className='logoSubLetter 3'>i</span>
				<span className='logoSubLetter 4'>d</span>
				<div className='logoLetter'>
					<span className='logoSubLetter space'> </span>L
					{/* <span className='logoSubLetter 5'>i</span>
					<span className='logoSubLetter 6'>n</span>
					<span className='logoSubLetter 7'>k</span>
					<span className='logoSubLetter 8'>e</span> */}
				</div>
			</div>
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
