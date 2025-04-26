
// Welcome mesajını gizlətmək
setTimeout(function() {
    document.getElementById('welcomeMessage').style.display = 'none';
}, 3000);

// Alert göstərmək üçün funksiya
function showAlert(message) {
    alert(message);
    console.log("Əlaqə məlumatı klikləndi: " + message);
}

// İşə götürmə mesajı
function hireMe() {
    alert('Mənimlə əlaqə üçün zəhmət olmasa email və ya telefon vasitəsilə əlaqə saxlayın!');
    console.log("Hire me düyməsinə klik edildi.");
}

// Yuxarıya qayıtma funksiyası
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("Yuxarı düyməsinə klik edildi.");
}

// Bacarıqlar listində hover effekti
const skills = document.querySelectorAll('#skillsList li');

skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.color = 'red';
        skill.style.fontWeight = 'bold';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.color = '';
        skill.style.fontWeight = '';
    });
});

// Bacarıqlara yeni bacarıq əlavə edən funksiya
function addSkill() {
    const skillList = document.getElementById('skillsList');
    const newSkill = document.createElement('li');
    newSkill.textContent = "Yeni bacarıq əlavə olundu";
    skillList.appendChild(newSkill);
    console.log("Yeni bacarıq əlavə edildi.");
}

// Fon rəngini dəyişən funksiya
function changeBackground() {
    document.body.style.backgroundColor = "#d6e0f5";
    console.log("Fon rəngi dəyişdirildi.");
}

// Əlaqə bölməsində hover effekti
const contactSection = document.querySelector('.contact');

contactSection.addEventListener('mouseover', () => {
    contactSection.style.backgroundColor = "#e0f7fa";
});

contactSection.addEventListener('mouseout', () => {
    contactSection.style.backgroundColor = "";
});
