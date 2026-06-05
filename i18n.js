const translations = {
    en: {
        projects: "projects",
        resume: "resume",
        contact: "contact",
        language: "language &#9662;",
        english: "english",
        turkish: "turkish",
        german: "german",
        japanese: "japanese",
        pinnedRepos: "// pinned repositories \u2014 pulled directly from github",
        fetchingRepos: "> fetching repositories",
        loadingProject: "> loading project",
        contactTitle: "Contact Me",
        contactDesc: "You can reach out to me via the following platforms:",
        contactLinkedIn: "LinkedIn Profile",
        contactGitHub: "GitHub Profile",
        contactEmail: "Email Address"
    },
    tr: {
        projects: "projeler",
        resume: "özgeçmiş",
        contact: "iletişim",
        language: "dil &#9662;",
        english: "ingilizce",
        turkish: "türkçe",
        german: "almanca",
        japanese: "japonca",
        pinnedRepos: "// sabitlenmiş repolar \u2014 doğrudan github'dan çekildi",
        fetchingRepos: "> repolar alınıyor",
        loadingProject: "> proje yükleniyor",
        contactTitle: "İletişim",
        contactDesc: "Bana aşağıdaki platformlardan ulaşabilirsiniz:",
        contactLinkedIn: "LinkedIn Profilim",
        contactGitHub: "GitHub Profilim",
        contactEmail: "E-posta Adresim"
    },
    de: {
        projects: "projekte",
        resume: "lebenslauf",
        contact: "kontakt",
        language: "sprache &#9662;",
        english: "englisch",
        turkish: "türkisch",
        german: "deutsch",
        japanese: "japanisch",
        pinnedRepos: "// angeheftete repositories \u2014 direkt von github geladen",
        fetchingRepos: "> repositories werden abgerufen",
        loadingProject: "> projekt wird geladen",
        contactTitle: "Kontakt",
        contactDesc: "Sie können mich über die folgenden Plattformen erreichen:",
        contactLinkedIn: "LinkedIn-Profil",
        contactGitHub: "GitHub-Profil",
        contactEmail: "E-Mail-Adresse"
    },
    jp: {
        projects: "プロジェクト",
        resume: "履歴書",
        contact: "連絡先",
        language: "言語 &#9662;",
        english: "英語",
        turkish: "トルコ語",
        german: "ドイツ語",
        japanese: "日本語",
        pinnedRepos: "// 固定されたリポジトリ \u2014 githubから直接取得",
        fetchingRepos: "> リポジトリを取得中",
        loadingProject: "> プロジェクトを読み込み中",
        contactTitle: "連絡先",
        contactDesc: "以下のプラットフォームからお問い合わせいただけます：",
        contactLinkedIn: "LinkedIn プロフィール",
        contactGitHub: "GitHub プロフィール",
        contactEmail: "メールアドレス"
    }
};

const cvLinks = {
    en: "cv/CV_GitHub.pdf",
    tr: "cv/CV_TR.pdf",
    de: "cv/CV_DE.pdf",
    jp: "cv/CV_JP.pdf"
};

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n="resume"]').forEach(resumeLink => {
        resumeLink.href = cvLinks[lang] || cvLinks['en'];
        resumeLink.target = "_blank";
    });
}

function changeLanguage(event, targetLang) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    localStorage.setItem('selectedLanguage', targetLang);
    applyTranslations(targetLang);
    
    const dropdown = document.getElementById("langDropdown");
    if (dropdown) {
        dropdown.classList.remove("show");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    applyTranslations(savedLang);
});
