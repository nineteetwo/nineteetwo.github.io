// project.js — URL'deki repo parametresine göre proje detayını ve README'yi yükler

async function loadProject() {
    const params = new URLSearchParams(window.location.search);
    const repoName = params.get('repo');
    const headerBand = document.getElementById('projectHeaderBand');
    const readmeContainer = document.getElementById('readmeContainer');

    if (!repoName) {
        // Repo parametresi yoksa doğrudan projects.html'e yönlendir
        window.location.replace('projects.html');
        return;
    }

    // Sayfa başlığını güncelle
    document.title = `nineteetwo | ${repoName}`;

    // Önce pinned-repos.json'dan bu reponun bilgilerini çek
    let repoData = null;
    try {
        const jsonRes = await fetch('pinned-repos.json');
        if (jsonRes.ok) {
            const allRepos = await jsonRes.json();
            repoData = allRepos.find(r => r.name === repoName) || null;
        }
    } catch (e) {
        // Repo verisi yoksa da README'yi yine de göstermeye çalış
    }

    // GitHub kullanıcı adını repo URL'sinden al
    let username = 'nineteetwo'; // Fallback — kendi GitHub kullanıcı adınla değiştir
    if (repoData?.url) {
        const urlParts = repoData.url.split('/');
        username = urlParts[urlParts.length - 2];
    }

    // Başlık bandını oluştur
    headerBand.innerHTML = `
        <a href="projects.html" class="project-back-btn">&larr; projects</a>
        <div class="project-title-area">
            <span class="project-repo-name">> ${repoName}</span>
            ${repoData?.primaryLanguage ? `
                <span class="project-repo-meta">
                    <span class="project-lang-dot" style="background-color: ${repoData.primaryLanguage.color || '#888'}"></span>
                    ${repoData.primaryLanguage.name} &nbsp;·&nbsp; &#9733; ${repoData.stargazerCount} &nbsp;·&nbsp; &#8916; ${repoData.forkCount}
                </span>
            ` : ''}
        </div>
        <div class="project-repo-links">
            <a href="https://github.com/${username}/${repoName}" target="_blank" rel="noopener" class="project-link-btn">github &nearr;</a>
            ${repoData?.homepageUrl ? `<a href="${repoData.homepageUrl}" target="_blank" rel="noopener" class="project-link-btn">live &nearr;</a>` : ''}
        </div>
    `;

    // README'yi GitHub Action tarafından önceden önbelleğe alınan yerel dosyadan yükle
    // Bu sayede her ziyarette API token harcanmaz, sadece günde 1 kez Action çalışır
    let readmeMarkdown = null;
    try {
        const cachedUrl = `readmes/${repoName}.md?t=${Date.now()}`;
        const res = await fetch(cachedUrl);
        if (res.ok) {
            readmeMarkdown = await res.text();
        }
    } catch (e) {}

    if (!readmeMarkdown) {
        readmeContainer.innerHTML = `
            <div class="load-status">
                > no README.md found for this repository.<br><br>
                <span style="font-size:0.75rem; color: rgba(208,216,226,0.3)">
                    make sure the github action has run and readmes/${repoName}.md exists.
                </span>
            </div>`;
        return;
    }

    // marked.js ile markdown → HTML, görseller için relative path düzeltmesi
    marked.use({
        renderer: (() => {
            const renderer = new marked.Renderer();
            const originalImage = renderer.image.bind(renderer);
            renderer.image = function(href, title, text) {
                if (href && !href.startsWith('http') && !href.startsWith('data:')) {
                    href = `https://raw.githubusercontent.com/${username}/${repoName}/main/${href}`;
                }
                return originalImage(href, title, text);
            };
            return renderer;
        })()
    });

    readmeContainer.innerHTML = marked.parse(readmeMarkdown);

    // README içindeki harici linkleri yeni sekmede aç
    readmeContainer.querySelectorAll('a').forEach(a => {
        if (a.href && !a.href.startsWith(window.location.origin)) {
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener');
        }
    });
}

loadProject();
