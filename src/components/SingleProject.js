import React from "react";

const ProjectList = {
    hairball: {
        img : "/img/hairball.jpg",
        title:'WordPress theme - Hairball',
        desc: 'Theme created for organizations helping animals. Easy to use. Thanks to robust theme options panel, there is no need to implement presented solutions via code. Based om my own project. Some features: custom header, custom post type, minimalistic, modern design.  ',
        class: 'projects-img flex even',
        bg: 'projects-description-1 projects-description flex',
        url: 'http://milon202.vot.pl/Blog/',
        source: 'https://github.com/milon2000/hairball'
    },
    wp: {
        img : "/img/wp.jpg",
        title:'WordPress website for photographer',
        desc: 'Minimalist, modern design and development based on a commercial WordPress theme. Configuring a plugin for three languages.',
        class: 'projects-img flex',
        bg: 'projects-description-2 projects-description flex',
        url: 'http://www.barnefotografering.com/',
        source: 'http://www.barnefotografering.com/',
        
    },
    psd: {
        img : "/img/psd.jpg",
        title:'PSD to HTML, CSS and jQuery',
        desc: 'Static website based on a provided PSD file.',
        class: 'projects-img flex even',
        bg: 'projects-description-3 projects-description flex',
        url: 'https://milon2000.github.io/WeeklyWebDevChallenge3/',
        source: 'https://github.com/milon2000/WeeklyWebDevChallenge3',
    },
    calculator: {
        img : "/img/calculator.jpg",
        title:'Currency Calculator',
        desc: 'The app is created in vanilla JavaScript. The calculator is fetching data from the Polish National Bank.',
        class: 'projects-img flex',
        bg: 'projects-description-4 projects-description flex',
        url: 'http://designedbymila.com/calculator/',
        source: 'https://github.com/milon2000/Currency_Calculator_API_NBP',
    },
    adjectives: {
        img : "/img/adjectives.jpg",
        title:'Application - Norwegian Adjectives',
        desc: 'If you are learning Norwegian and you are struggling with adjectives, this app is for you. It explains in a funny (I hope) way, how Norwegian adjectives and nouns work. Created in vanilla JavaScript.',
        class: 'projects-img flex even',
        bg: 'projects-description-5 projects-description flex',
        url: 'https://milon2000.github.io/app-adjectives-in-Norwegian/',
        source: 'https://github.com/milon2000/app-adjectives-in-Norwegian',
    },
    personal: {
        img : "/img/personal.jpg",
        title:'Personal website v1.0',
        desc: 'Static website based on my own project.',
        class: 'projects-img flex',
        bg: 'projects-description-6 projects-description flex',
        url: 'http://designedbymila.com/',
        source: 'https://github.com/milon2000/designedbymila',
    },
    doit: {
        img : "/img/doit.jpg",
        title:'Just do it!',
        desc: 'Simple to-do list. I was practicing plain JavaScript; basic DOM manipulation.',
        class: 'projects-img flex even',
        bg: 'projects-description-7 projects-description flex',
        url: 'https://milon2000.github.io/justDoIt/',
        source: 'https://github.com/milon2000/justDoIt',
    },
 
}

class SingleProject extends React.Component{

	_renderObject(){
		return Object.entries(ProjectList).map(([key, value], i) => {
			return (

                <div key={key} className="projects-list">
                        <div className={value.class}>
                            <img src={value.img}></img>
                        </div>
                        <div className={value.bg}>
                            <h2 className="title pro-title">{value.title}</h2>
                            <p>{value.desc}</p>
                            <div className="buttons">
                            <a href={value.url} target="_blank"><button className="button">See the project</button></a>
                            <a href={value.source} target="_blank"><button className="button">Source</button></a>
                            </div>
                        </div>
                        
                    </div>

			)
		})
	}

	render(){
		return(
			<div>
				{this._renderObject()}
			</div>
		)
	}
}


export default SingleProject;