import { fetchJSON, renderProjects , fetchGitHubData} from './global.js';

(async function () {
    try {
        const projects = await fetchJSON('./lib/projects.json');
        const latestProjects = projects.slice(0, 3);
        const projectsContainer = document.querySelector('.projects');
        latestProjects.forEach(project => {
            renderProjects(project, projectsContainer, 'h2');
        });
    } catch (error) {
        console.error('Error fetching or rendering projects:', error);
    }
})();
const githubData = await fetchGitHubData('Ori-932'); 
console.log(githubData);

const profileStats = document.querySelector('#profile-stats');

if (profileStats) {
    profileStats.innerHTML = `
        <dl>
            <dt>Public Repos:</dt><dd>${githubData.public_repos}</dd>
            <dt>Public Gists:</dt><dd>${githubData.public_gists}</dd>
            <dt>Followers:</dt><dd>${githubData.followers}</dd>
            <dt>Following:</dt><dd>${githubData.following}</dd>
        </dl>
    `;
}