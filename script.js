function refreshDiscordProfile() {
    const discordProfileImg = document.querySelector('.discord-profile img');
    const timestamp = new Date().getTime();
    discordProfileImg.src = `https://cdn.discordapp.com/attachments/1146197016351866950/1388922273704185957/Screenshot_2025_0629_194101.png?ex=6862be2a&is=68616caa&hm=5a0bf9bf0b3934dff04ff0555144b965d3ad53942e1b32e474ce7da85ce960b2&`;
}


setInterval(refreshDiscordProfile, 5000);

        async function fetchGitHubRepos() {
            try {
                const response = await fetch('https://api.github.com/users/hasbutcu/repos');
                const repos = await response.json();
                
                const reposContainer = document.getElementById('repos-container');
                
                repos.forEach(repo => {
                    const repoCard = document.createElement('div');
                    repoCard.className = 'repo-card';
                    
                    repoCard.innerHTML = `
                        <a href="${repo.html_url}" target="_blank" style="text-decoration: none;">
                            <h3 class="repo-name">
                                <i class="far fa-folder"></i>
                                ${repo.name}
                            </h3>
                        </a>
                        <p class="repo-description">${repo.description || 'No description available'}</p>
                        <div class="repo-stats">
                            <span class="repo-stat">
                                <i class="far fa-star"></i>
                                ${repo.stargazers_count}
                            </span>
                            <span class="repo-stat">
                                <i class="far fa-code-branch"></i>
                                ${repo.forks_count}
                            </span>
                            <span class="repo-stat">
                                <i class="far fa-dot-circle"></i>
                                ${repo.language || 'Not specified'}
                            </span>
                        </div>
                    `;
                    
                    reposContainer.appendChild(repoCard);
                });
                
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
                const reposContainer = document.getElementById('repos-container');
                reposContainer.innerHTML = `
                    <div class="error-message" style="text-align: center; color: var(--neon-pink);">
                        <p>😔 GitHub repolarını yüklerken bir hata oluştu.</p>
                        <p>Lütfen daha sonra tekrar deneyin.</p>
                    </div>
                `;
            }
        }

        // Call the function when the page loads
        document.addEventListener('DOMContentLoaded', fetchGitHubRepos);