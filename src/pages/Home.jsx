import style from './Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={`pageHeaders`}>Hello, My name is Sergei Malyshka</h1>

      <hr></hr>

      <div className={style.infotext}>
        <div>
          <img className={style.image} src=".\assets\facePNG.png"></img>
        </div>
        <p>
          I am a full-stack web developer with a wide knowledge of some of the most commonly used technologies that are used in modern development. I have attended and completed multiple online training programs
          and have a strong base knowledge of both Java and JavaScript, and many of the adjecent technologies. 
        </p>

        <p>
          I have completed a year long program through the Southern New Hampshire University, in partnership with Amazon, and learned Java, focusing strictly on back end technologies and AWS integration. Throughout
          my studies I was exposed to a large amount of Amazon technologies, Code Pipelines, DynamoDB, S3 buckets, Lambdas, and many more. I have completed my studies there with a 4.0 grade average, but more importantly,
          developed a deep love for coding and the challenges that it presented.
        </p>

        <p>
          After leaving SNHU, I realized that even though I was exposed to a large amount of technologies that were related to AWS, I still had many weaknesses as a developer. Primarily, it was evident that I had no clue
          how to be a full stack developer, and that even the idea of making a front end for any of my technologies scared me half to death. The solution was simple, throw myself head first into another class and learn. 
        </p>

        <p>
          This is how I landed on the full stack developer course through University of Pennsylvania and edX. I learned JavaScript, HTML, and CSS. Within the six months I also learned a large variety of tools adjecent to those languages, all of which I will attempt to list in the Skills page.
          Overall, I have developed a strong passion for coding and learning new tools and technologies. I am already looking forward to the next language, tool or technology to learn, and it is my goal to always 
          move forward and make myself a better developer
        </p>
      </div>

      <hr></hr>

      <h2 className={style.moreInfo}>More about me</h2>

      <ul className={`${style.infoList}`}>
        <li>I have worked in 911 emergency medical services since 2016</li>
        <li>I am bilingual, and am able to read, write and speak in Russian, and have good foundational knowledge of other Cyrillic languages - Belarrusian and Ukrainian</li>
        <li>I love soccer and hockey</li>
        <li>I love snowboarding</li>
        <li>Reading books is one of my favorite past times, with Sci-Fi and Fantasy being two of my favorite genres</li>
      </ul>
    </div>
  );
}