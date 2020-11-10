/* ******************************************
********* GET portfolio ***************
******************************************** */
window.addEventListener('load', getPortfolio);
// select element for adding portfolio data in
const articleWrapperEl = document.getElementById('articleWrapper');
//path to url for image
const urlImageStart = "https://www.webb01.se";


// Hämtar kurser
function getPortfolio() {
    // Töm element på innehåll
    //portWrapperEl.innerHTML = '';
    // Get data over courses and education from this url
    fetch('https://www.webb01.se/restapi/?table=portfolio')
        .then(response => response.json()
            .then(data => {
                data.forEach(portfolio => {
                   // console.log(portfolio);
                   // console.log("test getData");
                    articleWrapperEl.innerHTML +=
                        ` <article class="portfolioArticles">
                        <div class="portText">
                            <h2><a class="h2a" href="${portfolio.URL}">${portfolio.Titel}</a></h2>
                            <p>${portfolio.Description}</p>
                            <div class="langLogos" id= "portlang_${portfolio.Portfolio_ID}">
                            </div>
                        </div>
                        <div class="portImages">
                            <a href="${portfolio.URL}"><img class="imgShow" src="${urlImageStart+portfolio.Image_url}"
                                    alt="bild på webbplats"></a>
                        </div>
                    </article>`
                    portfolio.languages.forEach(lang => {
                        //console.log(lang);
                        let langLogoWrap = document.getElementById(`portlang_${portfolio.Portfolio_ID}`);
                       // console.log(last_li_div);
                       langLogoWrap.innerHTML +=
                        `<div class="logoHold">
                        <img class="imgLogos" src="${urlImageStart+lang.Img_url}" alt="${lang.Language}-logo">
                    </div>`
                    console.log(urlImageStart+portfolio.URL);
                    })
                    
                })
            })
        )
}