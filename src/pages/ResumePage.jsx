import Resume from '../assets/RyanSauterResume.pdf'

function ResumePage() {
    return (
        <>
            <h1>Resume</h1>
            <a href={Resume}>Download my resume here!</a>
            <div className="proficiencies-container">
                <div className="proficiency-block">
                    <h3>Front-End Proficiencies</h3>
                    <p>JavaScript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Foundation</p>
                    <p>Bootstrap</p>
                    <p>ReactJS</p>
                    <p>HandlebarsJS</p>
                    <p>APIs</p>
                </div>
                <div className="proficiency-block">
                    <h3>Back-End Proficiencies</h3>
                    <p>NodeJS</p>
                    <p>ExpressJS</p>
                    <p>SQL</p>
                    <p>MySQL / Sequelize</p>
                    <p>NoSQL</p>
                    <p>MongoDB / Mongoose</p>
                    <p>RESTful CRUD APIs</p>
                </div>
            </div>
        </>
    );
}

export default ResumePage