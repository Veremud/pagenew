function toggleAnswer(answerId) {
    const answer = document.getElementById(`answer${answerId}`);
    const icon = answer.previousElementSibling.querySelector('.fas.fa-chevron-down');

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    } else {
        answer.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    }
}

function searchFAQs() {
    let input = document.getElementById('faqSearch').value.toLowerCase();
    let faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        let question = item.dataset.question.toLowerCase();
        if (question.includes(input)) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease';
        } else {
            item.style.display = 'none';
        }
    });
}
