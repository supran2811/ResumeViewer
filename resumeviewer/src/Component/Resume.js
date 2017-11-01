import React, { Component } from 'react';


class Resume extends Component {
  render() {
    
    if(this.props.data){
      var educations = this.props.data.education.map(education => {
           return (
            <div key = {education.school} className="row item">
            
                           <div className="twelve columns">
            
                              <h3>{education.school}</h3>
                              <p className="info">{education.degree} <span>&bull;</span> <em className="date">eductaion.graduated</em></p>
            
                              <p>
                              {education.description}
                              </p>
            
                           </div>
            
                        </div>    
               
           );  
      });
      var works = this.props.data.work.map(work => {
          return (
            <div key = {work.company} className="row item">
            
                           <div className="twelve columns">
            
                              <h3>{work.company}</h3>
                              <p className="info">{work.title} <span>&bull;</span> <em className="date">{work.years}</em></p>
            
                              <p>
                              {work.description}
                              </p>
            
                           </div>
            
                        </div>
          );
      });
      var skills = this.props.data.skills.map(skill => {
           let className = "bar-expand "+skill.name.toLowerCase();
           return (
               <li key={skill.name} ><span style = {{ width:skill.level }} className={className}></span><em>{skill.name}</em></li>
           );
      })
    }

    return (
      <section id="resume">

      <div className="row education">

         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            {educations}
         </div>
     </div>
     <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               {works}
            </div>
         </div>
      </div>


      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
            </p>

				<div className="bars">

				   <ul className="skills">
					   {skills}
					</ul>

				</div>

			</div>

      </div>

   </section>

    );
  }
}

export default Resume;