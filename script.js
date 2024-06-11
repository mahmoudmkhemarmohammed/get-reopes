let input = document.querySelector("input"),
btn = document.querySelector("body .container .inputs button"),
outPuts = document.querySelector(".outputs");
btn.onclick = getRepo;
function getRepo () {
    if( input.value === "") {
        outPuts.innerHTML = "Please Enter User Name";
    }
    else {
        outPuts.innerHTML = '';
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then( rep => rep.json())
        .then( rep => {
            rep.forEach( repo => {
                let mainDiv = document.createElement("div");
                mainDiv.className = 'main-div'
                let repoName = document.createElement("p")
                repoName.className = 'repo-name';
                let textRepoName = document.createTextNode(repo.name);
                repoName.appendChild(textRepoName);
                mainDiv.appendChild(repoName)
                let container = document.createElement("div");
                container.className = 'content';
                let theUrl = document.createElement("a");
                theUrl.href = `https://github.com/${input.value}/${repo.name}`;
                theUrl.setAttribute("target","_blank");
                let theUrlText = document.createTextNode("Visite");
                theUrl.appendChild(theUrlText);
                container.appendChild(theUrl)
                let stars = document.createElement("p");
                let starsText = document.createTextNode(`Stars:${repo.stargazers_count}`);
                stars.appendChild(starsText);
                container.appendChild(stars)
                mainDiv.appendChild(container)
                outPuts.appendChild(mainDiv)
            })
        })
    }
}