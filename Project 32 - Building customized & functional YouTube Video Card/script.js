
function createCard(thumbnail, capsule, title, cname, views, monthsOld) {
    let viewString;
    let month;

    views = Number(views);

    if (views < 1000) {
        viewString = views;
    } else if (views >= 1000000) {
        viewString = (views / 1000000).toFixed(1) + "M";
    } else {
        viewString = (views / 1000).toFixed(1) + "K";
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="yt-thumbnail">
                <div class="capsule">${capsule}</div>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>${cname} • ${viewString} views • ${monthsOld} months ago</p>
            </div>
        </div>
    `;

    document.querySelector(".container").innerHTML += html;
}




createCard(
    "https://i.ytimg.com/an_webp/lPWeEX5XEpk/mqdefault_6s.webp?du=3000&sqp=CJaZstYG&rs=AOn4CLDoKtMyFtZ9IY24xE7RgrwqznHOXw",
    "18:13",
    "Become a Dangerously Good Communicator.",
    "Riya Upreti",
    "2,100,000",
    "1"
);
createCard(
    "https://img.youtube.com/vi/YbtJo8nMQRI/maxresdefault.jpg",
    "04:57",
    "GUZARISH (गुज़ारिश) (Lyrical Video) | SATINDER SARTAAJ | BHUSHAN KUMAR",
    "T-Series",
    "7000000",
    "1"
);