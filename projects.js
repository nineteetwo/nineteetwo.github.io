// projects.js — pinned-repos.json'dan proje kartlarını dinamik olarak yükler

async function loadProjects() {
    const grid = document.getElementById('projectsGrid');

    try {
        // GitHub Actions tarafından güncellenen statik JSON dosyasını çek
        const response = await fetch('pinned-repos.json?t=' + Date.now());

        if (!response.ok) throw new Error('JSON not found');

        const repos = await response.json();

        if (!repos || repos.length === 0) {
            grid.innerHTML = '<div class="projects-status"> > no pinned repositories found.</div>';
            return;
        }

        grid.innerHTML = '';

        repos.forEach(repo => {
            const topics = repo.repositoryTopics?.nodes?.map(n => n.topic.name) || [];
            const lang = repo.primaryLanguage;

            const card = document.createElement('a');
            card.href = `project.html?repo=${repo.name}`;
            card.className = 'project-card';

            card.innerHTML = `
                <div class="project-card-name">${repo.name}</div>
                <div class="project-card-desc">${repo.description || 'no description provided.'}</div>
                ${topics.length > 0 ? `
                    <div class="project-topics">
                        ${topics.map(t => `<span class="project-topic-tag">${t}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="project-card-meta">
                    ${lang ? `
                        <span class="project-lang">
                            <span class="project-lang-dot" style="background-color: ${lang.color || '#888'}"></span>
                            ${lang.name}
                        </span>
                    ` : ''}
                    <div class="project-stats">
                        <span>&#9733; ${repo.stargazerCount}</span>
                        <span>&#8916; ${repo.forkCount}</span>
                    </div>
                </div>
            `;

            grid.appendChild(card);
        });

    } catch (err) {
        grid.innerHTML = `
            <div class="projects-status">
                > error: could not load repositories.<br><br>
                <span style="font-size:0.75rem; color: rgba(208,216,226,0.3)">
                    make sure the github action has run and pinned-repos.json exists.
                </span>
            </div>`;
        console.error('Failed to load projects:', err);
    }
}

loadProjects();
