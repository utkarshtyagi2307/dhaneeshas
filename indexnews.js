
let apiKey = ' PK1DSZVUQTDAHGSQ';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/everything?domains=livemint.com,moneycontrol.com,economictimes.com,dnaindia.com&q=%22stocks%22%20OR%20%22shares%22%20OR%20%22stock%20recommendation%22%20OR%20%22IPO%22%20OR%20%22financing%20basics%22%20OR%20%22finance%20tips%22%20OR%20%22investing%22%20OR%20%22business%22%20OR%20%22money%20market%22%20OR%20%22NSE%22%20OR%20%22BSE%22%20OR%20%22net%20profit%22%20OR%20%22quarter%20results%22%20OR%20%22upcoming%20IPOs%22%20OR%20%22net%20loss%22%20OR%20%22losses%22%20OR%20%22Indian%20sectors%22%20OR%20%22brokers%22%20OR%20%22SEBI%22%20OR%20%22raised%20funding%22%20OR%20%22funding%22%20OR%20%22startup%22%20OR%20%22money%20tips%22%20OR%20%22quarter-on-quarter%22%20OR%20%22qoq%22%20OR%20%22yoy%22%20OR%20%22nifty%22%20OR%20%22sensex%22%20OR%20%22investment%22%20OR%20%22annual%20income%22&sortBy=publishedAt&apiKey=fa0cc7c07c5b403e8e0cf04cd2909da1', true);
// What to do when response is ready



// const data = null;





// xhr.open("GET", "https://google-search3.p.rapidapi.com/api/v1/news/q=shares+india");
// xhr.setRequestHeader("x-rapidapi-key", "ce205a8155msh0e339350414d06cp1ea54ajsn23fb6abd156d");
// xhr.setRequestHeader("x-rapidapi-host", "google-search3.p.rapidapi.com");

// xhr.send(data);



xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let feed = json.articles;
        console.log(feed);
        let newsHtml = "";


        feed.forEach(function (element) {
            let news = `<div class="col-md-7 mb-3">
              <h2 class="featurette-heading color-violet">${element.title}</h2>
              <p class="lead">${element.description}</p>
              <div><a class="read-article" href="${element.link}">Click here to read the full article</a></div>
            </div>
            <div class="col-md-5">
              <img src="${element.urlToImage}" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#eee">     
            </div>
            <div>
            <p><b>Source: ${element.source.name}</b></p>
            </div>
            <br><br><hr>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();
