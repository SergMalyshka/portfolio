import style from "./Projects.module.css"

export default function Blog() {
  return (
    <div>
      <h1 className="pageHeaders">Front-End Projects</h1>
      <hr></hr>
      <div className={style.singleCard}>
        <div className={`${style.cardImage}`}>
          <img src="./assets/Sargo.png" className="card-img-top" alt="..." />
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
  );
}
