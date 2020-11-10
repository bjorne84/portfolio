/* ******************************************
********* GET CV ***************
******************************************** */
window.addEventListener('load', getCV);

// select element for adding cv data in
const wrapperCV_El = document.getElementById('wrapperCV');



function getCV() {

    // Get data over courses and education from this url
    fetch('https://www.webb01.se/restapi/?table=work_experience')
        .then(response => response.json()
            .then(data => {
                //sorting the array backward with slice + reverse
                data.forEach(work => {
                  // console.log(course);
                        console.log(work);
                        wrapperCV_El.innerHTML += `
                        <div class="getcourse">
                        <ul class="ul">
                            <li class="li_nth">
                                <div class="lispan"><span class="courseSpan">Arbetsgivare:</span><span
                                        class="outputSpanCourse">${work.Workplace}</span></div>
                            </li>
                            <li class="li_nth">
                                <div class="lispan"><span class="courseSpan">Titel::</span><span
                                        class="outputSpanCourse">${work.Titel}</span></div>
                            </li>
                            <li class="li_nth">
                                <div class="lispan"><span class="courseSpan">Började:</span><span
                                        class="outputSpanCourse">${work.Startdate}</span></div>
                            </li>
                        </ul>
                        <p>${work.Description}</p>
                    </div>
                        `
                })
            })
        )
}