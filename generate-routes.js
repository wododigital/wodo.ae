const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Fetch blog post links from your API
// async function fetchBlogLinks() {
//   try {
//     const response = await axios.get('https://wodo.digital/insights/wp-json/wp/v2/posts?per_page=60');
//     // Return the list of links
//     return response.data.map(post => post.link);
//   } catch (error) {
//     console.error('Error fetching blog links:', error);
//     return [];
//   }
// }

// Fetch project slugs from your API
async function fetchProjectSlugs() {
  try {
    const response = await axios.get('https://server-demo.wodo.digital/projects/all');
    return response.data.map(project => `/projects/${project.slug}/`);
  } catch (error) {
    console.error('Error fetching project slugs:', error);
    return [];
  }
}

// Write the list of routes to a file
async function generateRoutes() {
  try {
    const projectSlugs = await fetchProjectSlugs();
    const routes = [
      '/',
      '/insights/',
      '/about-us/',
      '/contact-us/',
      '/projects/',
      '/design-and-branding/',
      '/join-wodo/',
      '/privacy-policy/',
      '/terms-and-conditions/',
      '/development/',
      '/growth-and-performance-marketing/',
      '/pr-landing-page/',
      '/website-development/',
      ...projectSlugs
    ];

    fs.writeFileSync(
      path.join(__dirname, 'react-snap.config.js'),
      `module.exports = { routes: ${JSON.stringify(routes)} };`
    );
  } catch (error) {
    console.error('Error generating routes:', error);
  }
}

generateRoutes();
