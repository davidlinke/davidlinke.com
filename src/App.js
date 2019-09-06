import React from 'react';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';

function App() {
	return (
		<div>
			<Navigation />
			<Intro />
			<About />
			<Projects />
			<Work />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
