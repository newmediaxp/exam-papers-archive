// WBSU Question Papers


const question_papers = [

    "CMSA-1-2017",
    "CMSA-1-2018",
    "CMSA-1-2019",
    "CMSA-2A-2017",
    "CMSA-2A-2018",
    "CMSA-2A-2019",
    "CMSA-3-2017",
    "CMSA-3-2018",
    "CMSA-3-2019",
    "CMSA-4A-2017",
    "CMSA-4A-2018",
    "CMSA-4A-2019",
    "CMSA-5-2018",
    "CMSA-5-2019",
    "CMSA-6-2018",
    "CMSA-6-2019",

    "CMSACOR01T-2021",
    "CMSACOR01T-2022",
    "CMSACOR02T-2021",
    "CMSACOR02T-2022",
    "CMSACOR03T-2021",
    "CMSACOR04T-2021",
    "CMSACOR05T-2022",
    "CMSACOR06T-2022",
    "CMSACOR07T-2022",
    "CMSACOR08T-2020",
    "CMSACOR08T-2022",
    "CMSACOR09T-2020",
    "CMSACOR09T-2022",
    "CMSACOR10T-2020",
    "CMSACOR10T-2022",
    "CMSACOR11T-2022",
    "CMSACOR12T-2022",

    "CMSG-1-2017",
    "CMSG-1-2018",
    "CMSG-1-2019",
    "CMSG-3A-2017",
    "CMSG-3A-2018",
    "CMSG-3A-2019",

    "CMSGCOR01T-2022",
    "CMSGCOR03T-2022",
    "CMSGCOR04T-2021",

    "CMSGDSE01T-2022",
    "CMSGDSE02T-2022",
    "CMSGDSE03T-2021",
    "CMSGDSE04T-2021",

]


const search_question_papers = function (year, subject) {
    let results = [];
    for (let name of question_papers) {
        if (name.slice(0, 4) == subject && name.slice(-4) == year) results.push(name);
    }
    return results;
};


const output_search_results = function (search_results, year, subject) {
    const results = search_question_papers(year, subject);
    search_results.innerHTML = `<p class="search-info">( ${results.length} results found for ${year} ${subject} )</p><div class="results-set">`;
    for (let name of results) {
        search_results.innerHTML +=
            `<div class="results-item">
            <span>${name.slice(0, -5)}</span>
            <a href="/download/${name}.pdf" download="download">Download</a>
        </div>`;
    }
    search_results.innerHTML += `</div>`;
};


document.addEventListener("DOMContentLoaded", function () {

    const search_btn = document.getElementById("search-btn");
    const search_options = document.getElementById("search-options");
    const search_results = document.getElementById("search-results");

    search_btn.addEventListener("click", function () {
        const search_option_year = document.getElementById("search-option-year");
        const search_option_subject = document.getElementById("search-option-subject");
        const year = search_option_year.options[search_option_year.selectedIndex].value;
        const subject = search_option_subject.options[search_option_subject.selectedIndex].value;
        output_search_results(search_results, year, subject);
    });

});
