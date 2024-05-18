const projects = [
    {
        name: "Sargo National Park catalogue",
        imgSrc: "/Sargo.png",
        description: "A NPS API driven project that allows the user to input a state code and receive a list of all national parks within that state. Clicking a specific park navigates you to that parks specific page with more info",
        skills: ['Google Maps API', 'Bootstrap', 'Bulma', 'NPS API'],
        github: "https://github.com/SergMalyshka/Syntax-Sorcerers",
        live: "https://sergmalyshka.github.io/Syntax-Sorcerers/index.html",
        key: 1
    },
    {
        name: "Pizzateca Romana ",
        imgSrc: "/romana.png",
        description: "A point of sale system designed for a restaurant owner that allows for customers to create and place orders off the menu, and a full manager dashboard hidden behind the login functionality that allows to edit the menu, pricing of items, and full current and past order tracking",
        skills: ['MySQL', 'Sequelize', 'Bootstrap', 'Node.js', 'Express', 'MVC', 'JawsDB', 'Heroku', 'Handlebars'],
        github: "https://github.com/SergMalyshka/Pizzoteca-Romana",
        live: "https://stormy-journey-39722-b2e17c23bcea.herokuapp.com",
        key: 2
    },
    {
        name: "Upcoming Queue managment project ",
        imgSrc: "/placeholder.webp",
        description: "An upcoming project designed to help managing and solving the problem of the ever increasing wait time encountered at medical offices",
        skills: ['GraphQL', 'Apollo Server', 'React', 'MongoDD', 'More to Come...'],
        github: "https://github.com/SergMalyshka/PizzatecaRomanaPlusOne",
        live: "https://github.com/SergMalyshka/PizzatecaRomanaPlusOne",
        key: 3
    },
        {
        name: "Workforce manager",
        imgSrc: "/workforce.png",
        description: "A CLI app that utilizes MySQL queries to manager a hypothetical workplace. Allows full control of adding, deleting, updating of employees, their roles, salaries and departments, all through a CLI interface",
        skills: ['MySQL'],
        github: "https://github.com/SergMalyshka/WorkforceManager",
        live: "https://drive.google.com/file/d/1MS08ozsuh8OnVszWJLLgFsdYSZlhHdRO/view",
        key: 4
    },
    {
        name: "Stock-Mart SQL",
        imgSrc: "/sequelize.png",
        description: "API and SQL application that creates a server to manage multiple models: Categories, Products, CategoryTags and ProductTags. Fully functional API interacting with a relational database",
        skills: ['MySQL', 'Sequelize', 'Node.js', 'Express'],
        github: "https://github.com/SergMalyshka/StockMart",
        live: "https://drive.google.com/file/d/1ZU6UMzXGY81hFmXXA3CfQiLrNYJ6-LsZ/view",
        key: 5
    },
    {
        name: "Social Network NoSQL Database",
        imgSrc: "/mongo.jpeg",
        description: "A NoSQL databse with a server and fully functioning API routes managing Users, their thoughts, and their friends",
        skills: ['MongoDB', 'Express', 'Mongoose'],
        github: "https://github.com/SergMalyshka/SocialNetwork",
        live: "https://drive.google.com/file/d/1MiayzKGp-oH9zPuL93xGEAjQk9uDLA2U/view",
        key: 6
    }
]

export default projects;

