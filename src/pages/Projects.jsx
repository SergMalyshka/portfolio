import style from "./Projects.module.css"

export default function Blog() {
  return (
    <div className={style.projects}>
      <h1 className="pageHeaders">Full Stack Projects</h1>
      <hr></hr>

      <div className="container">
        <div className="row">

          <div className="col-4">
            <div className={style.singleCard}>
              <div className={`${style.cardImage}`}>
                <img src="./assets/Sargo.png" className="card-img-top" alt="Sargo search page" />
                <div className="card-body">
                  <h5 className={`${style.cardTitle} card-title`}>Sargo National Park Catalog</h5>
                  <p className={`${style.cardDescription} card-text`}>A NPS API driven project that allows the user to input a state code and receive a list of all national parks within that state. Clicking a specific park navigates you to that parks specific page with more info</p>
                  <hr></hr>
                  <h5 className={`${style.cardTitle} card-title`}>Technologies Used</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className={`list-group-item ${style.listItem}`}>Google Maps API</li>
                  <li className={`list-group-item ${style.listItem}`}>NPS parks API</li>
                  <li className={`list-group-item ${style.listItem}`}>Bootstrap</li>
                  <li className={`list-group-item ${style.listItem}`}>Bulma</li>
                </ul>
                <div className={`card-body ${style.cardBody}`}>
                  <a href="https://github.com/SergMalyshka/Syntax-Sorcerers"><img className={style.github} src=".\assets\github.png"></img></a>
                  <a href="https://sergmalyshka.github.io/Syntax-Sorcerers/index.html"><img className={style.github} src=".\assets\live.png"></img></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={style.singleCard}>
              <div className={`${style.cardImage}`}>
                <img src="./assets/romana.png" className="card-img-top" alt="Romana manager Dashboard" />
                <div className="card-body">
                  <h5 className={`${style.cardTitle} card-title`}>Pizzateca Romana POS system</h5>
                  <p className={`${style.cardDescription} card-text`}>A point of sale system designed for a restaurant owner that allows for customers to create and place orders off the menu, and a full manager dashboard hidden behind the login functionality that allows to edit the menu, pricing of items, and full current and past order tracking</p>
                  <hr></hr>
                  <h5 className={`${style.cardTitle} card-title`}>Technologies Used</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className={`list-group-item ${style.listItem}`}>MySQL database using Sequelize</li>
                  <li className={`list-group-item ${style.listItem}`}>Node.js</li>
                  <li className={`list-group-item ${style.listItem}`}>Bootstrap</li>
                  <li className={`list-group-item ${style.listItem}`}>Express</li>
                  <li className={`list-group-item ${style.listItem}`}>Session management</li>
                  <li className={`list-group-item ${style.listItem}`}>Model View Controller</li>
                  <li className={`list-group-item ${style.listItem}`}>JawsDB</li>
                  <li className={`list-group-item ${style.listItem}`}>Heroku</li>
                  <li className={`list-group-item ${style.listItem}`}>Handlebars</li>
                </ul>
                <div className={`card-body ${style.cardBody}`}>
                  <a href="https://github.com/SergMalyshka/Pizzoteca-Romana"><img className={style.github} src=".\assets\github.png"></img></a>
                  <a href="https://stormy-journey-39722-b2e17c23bcea.herokuapp.com/dashboard"><img className={style.github} src=".\assets\live.png"></img></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={style.singleCard}>
              <div className={`${style.cardImage}`}>
                <img src="./assets/placeholder.webp" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className={`${style.cardTitle} card-title`}>Upcoming Queue management project</h5>
                  <p className={`${style.cardDescription} card-text`}>An upcoming project designed to help managing and solving the problem of the ever increasing wait time encountered at medical offices</p>
                  <hr></hr>
                  <h5 className={`${style.cardTitle} card-title`}>Technologies Used</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className={`list-group-item ${style.listItem}`}>GraphQL</li>
                  <li className={`list-group-item ${style.listItem}`}>Apollo Server</li>
                  <li className={`list-group-item ${style.listItem}`}>React</li>
                  <li className={`list-group-item ${style.listItem}`}>MongoDB</li>
                  <li className={`list-group-item ${style.listItem}`}>More to come....</li>
                </ul>
                <div className={`card-body ${style.cardBody}`}>
                  <a href="https://github.com/SergMalyshka/PizzatecaRomanaPlusOne"><img className={style.github} src=".\assets\github.png"></img></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <h1 className="pageHeaders">Database Architecture and management</h1>
      <hr></hr>

      <div className="container">
        <div className="row">

          <div className="col-4">
            <div className={style.singleCard}>
              <div className={`${style.cardImage}`}>
                <img src="./assets/workforce.png" className="card-img-top" alt="Workforce manager" />
                <div className="card-body">
                  <h5 className={`${style.cardTitle} card-title`}>Workforce manager</h5>
                  <p className={`${style.cardDescription} card-text`}>A CLI app that utilizes MySQL queries to manager a hypothetical workplace. Allows full control of adding, deleting, updating of employees, their roles, salaries and departments, all through a CLI interface</p>
                  <hr></hr>
                  <h5 className={`${style.cardTitle} card-title`}>Technologies Used</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className={`list-group-item ${style.listItem}`}>MySQL</li>
                </ul>
                <div className={`card-body ${style.cardBody}`}>
                  <a href="https://github.com/SergMalyshka/WorkforceManager"><img className={style.github} src=".\assets\github.png"></img></a>
                  <a href="https://drive.google.com/file/d/1MS08ozsuh8OnVszWJLLgFsdYSZlhHdRO/view"><img className={style.github} src=".\assets\video.png"></img></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={style.singleCard}>
              <div className={`${style.cardImage}`}>
                <img src="./assets/sequelize.png" className="card-img-top" alt="Sequelize logo" />
                <div className="card-body">
                  <h5 className={`${style.cardTitle} card-title`}>Stock-Mart SQL </h5>
                  <p className={`${style.cardDescription} card-text`}>API and SQL application that creates a server to manage multiple models: Categories, Products, CategoryTags and ProductTags. Fully functional API interacting with a relational database</p>
                  <hr></hr>
                  <h5 className={`${style.cardTitle} card-title`}>Technologies Used</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className={`list-group-item ${style.listItem}`}>MySQL database using Sequelize</li>
                  <li className={`list-group-item ${style.listItem}`}>Node.js</li>
                  <li className={`list-group-item ${style.listItem}`}>Express server</li>
                </ul>
                <div className={`card-body ${style.cardBody}`}>
                  <a href="https://github.com/SergMalyshka/StockMart"><img className={style.github} src=".\assets\github.png"></img></a>
                  <a href="https://drive.google.com/file/d/1ZU6UMzXGY81hFmXXA3CfQiLrNYJ6-LsZ/view"><img className={style.github} src=".\assets\video.png"></img></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={style.singleCard}>
              <div className={`${style.cardImage}`}>
                <img src="./assets/mongo.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className={`${style.cardTitle} card-title`}>Social Network NoSQL Database</h5>
                  <p className={`${style.cardDescription} card-text`}>A NoSQL databse with a server and fully functioning API routes managing Users, their thoughts, and their friends </p>
                  <hr></hr>
                  <h5 className={`${style.cardTitle} card-title`}>Technologies Used</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className={`list-group-item ${style.listItem}`}>MongoDB</li>
                  <li className={`list-group-item ${style.listItem}`}>Express</li>
                  <li className={`list-group-item ${style.listItem}`}>Mongoose</li>
                </ul>
                <div className={`card-body ${style.cardBody}`}>
                <a href="https://github.com/SergMalyshka/StockMart"><img className={style.github} src=".\assets\github.png"></img></a>
                <a href="https://drive.google.com/file/d/1MiayzKGp-oH9zPuL93xGEAjQk9uDLA2U/view"><img className={style.github} src=".\assets\video.png"></img></a>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>




    </div>
  );
}
