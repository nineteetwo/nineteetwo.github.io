const homeContent = {
    en: {
        whoami: `> whoami`,
        intro1: `Faruk Işın — computer engineering student at Adana Alparslan Türkeş Science and Technology University. Currently in my third year. I go by <strong>nineteetwo</strong> online.`,
        intro2: `I don't fit cleanly into one box. I've written assembly games, built AI inference pipelines, experimented with energy optimization models, and shipped web applications — sometimes all in the same semester. I care more about understanding systems deeply than staying in a single lane.`,
        expTitle: `> experience`,
        exp: `
            <div class="home-item">
                <span class="home-item-title">Software Engineer Intern &mdash; DropGPT</span>
                <span class="home-item-meta">Mar – Apr 2026 &nbsp;·&nbsp; Remote</span>
                <p>Developed a Retrieval-Augmented Generation (RAG) system for the dropshipping domain using LangChain and FAISS.</p>
            </div>`,
        stackTitle: `> tech stack`,
        stack: `
            <div class="home-stack-row"><span class="home-stack-label">languages</span><span>Python &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp; HTML / CSS &nbsp;·&nbsp; Shell &nbsp;·&nbsp; MIPS Assembly</span></div>
            <div class="home-stack-row"><span class="home-stack-label">ml / data</span><span>scikit-learn &nbsp;·&nbsp; pandas &nbsp;·&nbsp; NumPy &nbsp;·&nbsp; Matplotlib &nbsp;·&nbsp; YOLOv5 &nbsp;·&nbsp; LangChain &nbsp;·&nbsp; FAISS &nbsp;·&nbsp; Pyomo</span></div>
            <div class="home-stack-row"><span class="home-stack-label">tools</span><span>Git &nbsp;·&nbsp; GitHub Actions &nbsp;·&nbsp; Google Cloud Platform &nbsp;·&nbsp; VS Code &nbsp;·&nbsp; PyCharm &nbsp;·&nbsp; IntelliJ</span></div>`,
        eduTitle: `> education`,
        edu: `<strong>B.Sc. Computer Engineering</strong><br>Adana Alparslan Türkeş Science and Technology University<br><em>Sep 2024 – Jun 2028 (expected)</em>`
    },
    tr: {
        whoami: `> ben kimim`,
        intro1: `Faruk Işın — Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi'nde bilgisayar mühendisliği öğrencisiyim. Şu an üçüncü sınıftayım. <strong>nineteetwo</strong> olarak biliniyorum.`,
        intro2: `Kendimi tek bir kategoriye sığdırmıyorum. Assembly ile oyun yazdım, yapay zeka çıkarım hatları kurdum, enerji optimizasyon modelleri üzerinde deneyler yaptım ve web uygulamaları geliştirdim — bazen hepsini aynı dönemde. Tek bir alanda kalmak yerine sistemleri derinlemesine anlamayı önemsiyorum.`,

        expTitle: `> deneyim`,
        exp: `
            <div class="home-item">
                <span class="home-item-title">Yazılım Mühendisi Stajyeri &mdash; DropGPT</span>
                <span class="home-item-meta">Mar – Nis 2026 &nbsp;·&nbsp; Uzaktan</span>
                <p>LangChain ve FAISS kullanarak dropshipping alanı için Retrieval-Augmented Generation (RAG) sistemi geliştirdim.</p>
            </div>`,
        stackTitle: `> teknoloji yığını`,
        stack: `
            <div class="home-stack-row"><span class="home-stack-label">diller</span><span>Python &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp; HTML / CSS &nbsp;·&nbsp; Shell &nbsp;·&nbsp; MIPS Assembly</span></div>
            <div class="home-stack-row"><span class="home-stack-label">ml / veri</span><span>scikit-learn &nbsp;·&nbsp; pandas &nbsp;·&nbsp; NumPy &nbsp;·&nbsp; Matplotlib &nbsp;·&nbsp; YOLOv5 &nbsp;·&nbsp; LangChain &nbsp;·&nbsp; FAISS &nbsp;·&nbsp; Pyomo</span></div>
            <div class="home-stack-row"><span class="home-stack-label">araçlar</span><span>Git &nbsp;·&nbsp; GitHub Actions &nbsp;·&nbsp; Google Cloud Platform &nbsp;·&nbsp; VS Code &nbsp;·&nbsp; PyCharm &nbsp;·&nbsp; IntelliJ</span></div>`,
        eduTitle: `> eğitim`,
        edu: `<strong>Bilgisayar Mühendisliği Lisans</strong><br>Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi<br><em>Eyl 2024 – Haz 2028 (beklenen)</em>`
    },
    de: {
        whoami: `> wer bin ich`,
        intro1: `Faruk Işın — Informatikstudent an der Adana Alparslan Türkeş Wissenschafts- und Technologieuniversität. Ich bin im dritten Jahr. Online bin ich als <strong>nineteetwo</strong> bekannt.`,
        intro2: `Ich lasse mich nicht in eine Schublade stecken. Ich habe Assembly-Spiele geschrieben, KI-Inferenzpipelines entwickelt, mit Energieoptimierungsmodellen experimentiert und Webanwendungen veröffentlicht — manchmal alles im selben Semester. Mir liegt mehr daran, Systeme tiefgreifend zu verstehen, als in einer einzigen Richtung zu bleiben.`,
        expTitle: `> erfahrung`,
        exp: `
            <div class="home-item">
                <span class="home-item-title">Softwareentwickler-Praktikant &mdash; DropGPT</span>
                <span class="home-item-meta">März – Apr. 2026 &nbsp;·&nbsp; Remote</span>
                <p>Entwicklung eines Retrieval-Augmented Generation (RAG)-Systems für die Dropshipping-Domäne mit LangChain und FAISS.</p>
            </div>`,
        stackTitle: `> tech-stack`,
        stack: `
            <div class="home-stack-row"><span class="home-stack-label">sprachen</span><span>Python &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp; HTML / CSS &nbsp;·&nbsp; Shell &nbsp;·&nbsp; MIPS Assembly</span></div>
            <div class="home-stack-row"><span class="home-stack-label">ml / daten</span><span>scikit-learn &nbsp;·&nbsp; pandas &nbsp;·&nbsp; NumPy &nbsp;·&nbsp; Matplotlib &nbsp;·&nbsp; YOLOv5 &nbsp;·&nbsp; LangChain &nbsp;·&nbsp; FAISS &nbsp;·&nbsp; Pyomo</span></div>
            <div class="home-stack-row"><span class="home-stack-label">werkzeuge</span><span>Git &nbsp;·&nbsp; GitHub Actions &nbsp;·&nbsp; Google Cloud Platform &nbsp;·&nbsp; VS Code &nbsp;·&nbsp; PyCharm &nbsp;·&nbsp; IntelliJ</span></div>`,
        eduTitle: `> ausbildung`,
        edu: `<strong>B.Sc. Informatik</strong><br>Adana Alparslan Türkeş Wissenschafts- und Technologieuniversität<br><em>Sep. 2024 – Jun. 2028 (voraussichtlich)</em>`
    },
    jp: {
        whoami: `> 自己紹介`,
        intro1: `Faruk Işın — アダナ・アルパスラン・テュルケシュ科学技術大学のコンピューターエンジニアリング学生。現在3年次です。オンラインでは <strong>nineteetwo</strong> として活動しています。`,
        intro2: `一つの分野に収まることはありません。アセンブリゲームを作り、AIパイプラインを構築し、エネルギー最適化モデルを研究し、Webアプリケーションを開発してきました — 同じ学期中にこれらを並行して行うこともあります。一つの専門に留まるより、システムを深く理解することを大切にしています。`,

        expTitle: `> 経歴`,
        exp: `
            <div class="home-item">
                <span class="home-item-title">ソフトウェアエンジニアインターン &mdash; DropGPT</span>
                <span class="home-item-meta">2026年3月 – 4月 &nbsp;·&nbsp; リモート</span>
                <p>LangChainとFAISSを使用したドロップシッピング領域向けRetrieval-Augmented Generation（RAG）システムを開発。</p>
            </div>`,
        stackTitle: `> 技術スタック`,
        stack: `
            <div class="home-stack-row"><span class="home-stack-label">言語</span><span>Python &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp; HTML / CSS &nbsp;·&nbsp; Shell &nbsp;·&nbsp; MIPS Assembly</span></div>
            <div class="home-stack-row"><span class="home-stack-label">ML / データ</span><span>scikit-learn &nbsp;·&nbsp; pandas &nbsp;·&nbsp; NumPy &nbsp;·&nbsp; Matplotlib &nbsp;·&nbsp; YOLOv5 &nbsp;·&nbsp; LangChain &nbsp;·&nbsp; FAISS &nbsp;·&nbsp; Pyomo</span></div>
            <div class="home-stack-row"><span class="home-stack-label">ツール</span><span>Git &nbsp;·&nbsp; GitHub Actions &nbsp;·&nbsp; Google Cloud Platform &nbsp;·&nbsp; VS Code &nbsp;·&nbsp; PyCharm &nbsp;·&nbsp; IntelliJ</span></div>`,
        eduTitle: `> 学歴`,
        edu: `<strong>コンピューターエンジニアリング学士</strong><br>アダナ・アルパスラン・テュルケシュ科学技術大学<br><em>2024年9月 – 2028年6月（予定）</em>`
    }
};

function applyHomeContent(lang) {
    const t = homeContent[lang] || homeContent.en;
    const set = (id, html) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    };
    set('home-whoami',          t.whoami);
    set('home-intro1',          t.intro1);
    set('home-intro2',          t.intro2);
    set('home-currently-title', t.currentlyTitle);
    set('home-currently',       t.currently);
    set('home-exp-title',       t.expTitle);
    set('home-exp',             t.exp);
    set('home-stack-title',     t.stackTitle);
    set('home-stack',           t.stack);
    set('home-edu-title',       t.eduTitle);
    set('home-edu',             t.edu);
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('selectedLanguage') || 'en';
    applyHomeContent(lang);
});

const _origChangeLang = window.changeLanguage;
window.changeLanguage = function(event, lang) {
    if (_origChangeLang) _origChangeLang(event, lang);
    applyHomeContent(lang);
};