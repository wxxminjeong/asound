function showPage(pageId) {
    // 1. 모든 섹션 숨기기
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. 선택한 페이지만 보이기
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}