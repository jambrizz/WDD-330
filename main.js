//array of links for each week
const links = [
    {
        label: "Week 1 Notes",
        url: "week01/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "week02/index.html"
    },
    {
        label: "Week 3 Notes",
        url: "week03/index.html"
    },
    {
        label: "Week 3 team activity",
        url: "teamWeek03/index.html"
    },
    {
        label: "Week 4 Notes",
        url: "week04/index.html"
    },
    {
        label: "Week 4 team activity",
        url: "teamWeek04/index.html"
    }
]

//loop through the array above and create a list item for each link
function displayLinks() {
    //variable to hold the list items
    const ol = document.querySelector("#weeks");

    //loop through the array
    links.forEach( link => {
        //create a list item
        const li = document.createElement("li");
        //create an anchor tag
        const href = document.createElement("a");
        //set the href attribute
        href.setAttribute("href", link.url);
        //set the text label
        href.innerText = link.label;

        li.appendChild(href);
        ol.appendChild(li);
    })    
}
