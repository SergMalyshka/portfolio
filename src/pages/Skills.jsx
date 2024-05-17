import style from './Skills.module.css'

export default function Skills() {
  return (
    <div>
      <h1 className="pageHeaders">My Skills</h1>
      <hr></hr>
      <div className={style.languages}>
        <div classname={style.imgContainer}>
          <img className={style.java} src=".\assets\java.png"></img>
          <img className={style.java} src=".\assets\js.png"></img>
          <img className={style.java} src='.\assets\html.png'></img>
          <img className={style.java} src='.\assets\css.png'></img>
        </div>

      </div>

      <h2 className='secondaryHeader'> Skills </h2>
      <hr></hr>

      <h2 className='tetriaryHeader'>General</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-11'>
            <ul>
              <li>Full stack Web Development</li>
              <li>RESTful API</li>
              <li>Node.js</li>
              <li>npm</li>
              <li>GitHub</li>
              <li>Agile development</li>
              <li>Express</li>
              <li>Object Oriented programming</li>
              <li>Test-driven development</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className='tetriaryHeader'>AWS</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-11'>
            <ul>
              <li>DynamoDB</li>
              <li>Code Pipeline</li>
              <li>Lambdas</li>
              <li>S3</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className='tetriaryHeader'>Front End Tools</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-11'>
            <ul>
              <li>CSS Frameworks: Bootstrap, Bulma, etc</li>
              <li>React</li>
              <li>Vite</li>
              <li>Handlebars</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className='tetriaryHeader'>Database structures and tools</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-11'>
            <ul>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>Sequelize</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
