const links = [
    {
        label: "Week 1 Notes",
        url: "week1/index.html"
    }
]

function displayLinks() {
    const ol = document.createElement("ol");
    for (let i = 0; i < links.length; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", links[i].url);
        a.textContent = links[i].label;
        li.appendChild(a);
        ol.appendChild(li);
    }
    document.getElementById("weeks").innerHTML = ol.innerHTML;

}
