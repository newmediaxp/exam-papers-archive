// WBSU UG

const exam_pages = {
    "WBSU UG - West Bengal State University (Under Graduate)" : "wbsu-ug.html",
};

const output_exam_pages = (exam_pages_display) => {
    const exams = Object.keys(exam_pages);
    exam_pages_display.innerHTML =
        `<p id="exam-pages-info">( ${exams.length} examinations available )</p>
        <div class="exam-pages-set">`;
    exams.forEach(exam => {
        exam_pages_display.innerHTML +=
        `<div class="item">
        <span>${exam}</span>
        <a href="${base_url}${exam_pages[exam]}">Visit Page</a>
        </div>`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const exam_pages = document.getElementById("exam-pages");
    output_exam_pages(exam_pages);
});
