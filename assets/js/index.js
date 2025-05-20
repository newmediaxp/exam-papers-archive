// WBSU UG

const exams = {
    "WBSU UG - West Bengal State University (Under Graduate)": "wbsu-ug",
};

const exams_keys = Object.keys(exams);

const output_exam_pages = (exam_pages_display) => {
    let exam_pages_html =
        `<p id="exam-pages-info">( ${exams_keys.length} examinations available )</p>
        <div class="exam-pages-set">`;
    exams_keys.forEach(key => {
        exam_pages_html +=
            `<div class="item">
            <span>${key}</span>
            <a href="/${exams[key]}">Visit Page</a>
            </div>`;
    });
    exam_pages_display.innerHTML = exam_pages_html;
}

document.addEventListener("DOMContentLoaded", () => {
    const exam_pages = document.getElementById("exam-pages");
    output_exam_pages(exam_pages);
});
