// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <section id='projects'>
           <h5>My Recent Works</h5>
           <h2>Projects</h2>

           <div className="container project_container">
            <article className="project_item">
                <div className="project_item_image">
                    <img src="\images\Screenshot 2024-07-25 132833.png" alt=""/>
                </div>
                <h3>Dashboard</h3>
                <small className='text-light'>React JS</small>
                <div className="project_item_btn">
                    <a href="" className='btn'>GitHub</a>
                </div>
            </article>

            <article className="project_item">
                <div className="project_item_image">
                    <img src="\images\Screenshot 2024-07-25 133204.png" alt=""/>
                </div>
                <h3>Food Munch</h3>
                <small className='text-light'>HTML, CSS, Bootstrap</small>
                <div className="project_item_btn">
                    <a href="" className='btn'>GitHub</a>
                </div>
            </article>

            <article className="project_item">
                <div className="project_item_image">
                    <img src="\images\Screenshot 2024-07-25 133416.png" alt=""/>
                </div>
                <h3>NxtTrendz Application</h3>
                <small className='text-light'>React JS</small>
                <div className="project_item_btn">
                    <a href="" className='btn'>GitHub</a>
                </div>
            </article>
           </div>
        </section>
    )
}

export default Projects
