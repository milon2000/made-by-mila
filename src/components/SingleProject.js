import React from "react";

const ProjectList = {
    hairball: {
        img : "/img/hairball.jpg",
        title:'WordPress theme - Hairball',
        desc: 'Some available features: custom header, custom post type, custom social buttons. Created and developed by me. ',
        class: 'projects-img flex even',
        bg: 'projects-description-1 flex'
    },
    wp: {
        img : "/img/wp.jpg",
        title:'WordPress website for photographer',
        desc: 'Minimalistic, modern design and development based on commercial WordPress theme',
        class: 'projects-img flex',
        bg: 'projects-description-2 flex'
    },
    psd: {
        img : "/img/psd.jpg",
        title:'PSD to HTML, CSS and jQuery',
        desc: 'Static website based on a provided PSD file',
        class: 'projects-img flex even',
        bg: 'projects-description-3 flex'
    },
    calculator: {
        img : "/img/calculator.jpg",
        title:'Currency Calculator',
        desc: 'I came up with an idea to write a simple app, while learning how JavaScript APIs work. Check out my currency calculator which fetches data from National Bank of Poland API.',
        class: 'projects-img flex',
        bg: 'projects-description-4 flex'
    },
    adjectives: {
        img : "/img/adjectives.jpg",
        title:'Application - Norwegian Adjectives',
        desc: 'If you are learning Norwegian and you are struggling with adjectives, this app is for you. It explains in a funny (I hope) way, how Norwegian adjectives and nouns work.',
        class: 'projects-img flex even',
        bg: 'projects-description-5 flex'
    },
    personal: {
        img : "/img/personal.jpg",
        title:'Personal website v1.0',
        desc: 'Static website based on my own project.',
        class: 'projects-img flex',
        bg: 'projects-description-6 flex'
    },
    doit: {
        img : "/img/doit.jpg",
        title:'Just do it!',
        desc: 'Simple to-do list. I was practicing plain JavaScript; basic DOM manipulation.',
        class: 'projects-img flex even',
        bg: 'projects-description-7 flex'
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