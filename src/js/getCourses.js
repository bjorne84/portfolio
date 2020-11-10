/* ******************************************
********* GET portfolio ***************
******************************************** */
window.addEventListener('load', getEducation);
window.addEventListener('load', getCourses);
// select element for adding courses data in
const miunEl = document.getElementById('miun');
const hermodsEl = document.getElementById('hermods');
//path to url for image
const urlImageStart2 = "https://www.webb01.se";


function getEducation() {
    fetch('https://www.webb01.se/restapi/?table=education')
        .then(response => response.json()
            .then(data => {
                console.log(data[1]);
                miunEl.innerHTML += `<div class="textEduWrapper">
            <h2>${data[1].Programme}</h2>
            <p>${data[1].School} - start: ${data[1].Startdate}</p>
        </div>`
        hermodsEl.innerHTML += `<div class="textEduWrapper">
        <h2>${data[0].Programme}</h2>
        <p>${data[0].School} - start: ${data[0].Startdate}</p>
    </div>
        `
            })
        )
}

// Hämtar kurser
function getCourses() {
    // Töm element på innehåll
    //portWrapperEl.innerHTML = '';
    // Get data over courses and education from this url
    fetch('https://www.webb01.se/restapi/?table=courses')
        .then(response => response.json()
            .then(data => {
                //sorting the array backward with slice + reverse
                data.slice().reverse().forEach(course => {
                  // console.log(course);
                   
                    if(course.Education_ID == 1){
                        console.log(course);
                        hermodsEl.innerHTML += `
                        <div class="getcourse">
                        <ul class="ul">
                            <li class="li_nth">
                                <div class="lispan"><span class="courseSpan">Kurs:</span><span
                                        class="outputSpanCourse">${course.CourseName}</span></div>
                            </li>
                            <li class="li_nth">
                                <div class="lispan"><span class="courseSpan">Poäng:</span><span
                                        class="outputSpanCourse">${course.Points}</span></div>
                            </li>
                            <li class="li_nth">
                                <div class="lispan"><span class="courseSpan">Betyg:</span><span
                                        class="outputSpanCourse">${course.Grade}</span></div>
                            </li>
                        </ul>
                    </div>
                        `
                    } 
                    else if(course.Education_ID == 2) {
                        miunEl.innerHTML += `
                        <div class="getcourse">
                        <ul class="ul">
                            <li class="li_nth">
                                <div class="lispan"><span class="courseSpan">Kurs:</span><span
                                        class="outputSpanCourse">${course.CourseName}</span></div>
                            </li>
                            <li class="li_nth">
                                <div class="lispan"><span class="courseSpan">Poäng:</span><span
                                        class="outputSpanCourse">${course.Points}</span></div>
                            </li>
                            <li class="li_nth">
                                <div class="lispan"><span class="courseSpan">Betyg:</span><span
                                        class="outputSpanCourse">${course.Grade}</span></div>
                            </li>
                        </ul>
                        <div id="courseLang_${course.Course_ID}" class="langLogos">
                        <div class="logoHold"><p>Språk/tekniker på kursen: </p></div>
                        </div>
                    </div>
                        `
                        course.languages.forEach(lang => {
                            //console.log(lang);
                            let courseLangEl = document.getElementById(`courseLang_${course.Course_ID}`);
                           // console.log(last_li_div);
                           courseLangEl.innerHTML +=
                            `
                            <div class="logoHold">
                                <img class="imgLogos" src="${urlImageStart2+lang.Img_url}" alt="${lang.Langauge}-logo">
                            </div>`
                       // console.log(lang);
                        })
                    }

                })
            })
        )
}