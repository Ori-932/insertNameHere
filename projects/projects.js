import { fetchJSON, renderProjects } from '../global.js';
const projects = await fetchJSON('../lib/projects.json'); 
const projectsContainer = document.querySelector('.projects');
renderProjects(projects, projectsContainer, 'h2');

import { fetchJSON, renderProjects } from '../global.js';

(async function () {
    try {
        const projects = await fetchJSON('../lib/projects.json');

        const projectsContainer = document.querySelector('.projects');

        const projectsTitle = document.querySelector('.projects-title');

        if (projectsTitle) {
            projectsTitle.textContent = `${projects.length} Projects`;
        }

        projects.forEach(project => {
            renderProjects(project, projectsContainer, 'h2');
        });
    } catch (error) {
        console.error('Error rendering projects:', error);
    }
})();
