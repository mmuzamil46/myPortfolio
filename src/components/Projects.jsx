import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Github, Loader2 } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/mmuzamil46/repos?sort=updated&per_page=10');
        // Filter out forks if needed, or keep them. Let's keep non-forks prioritized or just all.
        // Let's filter to show only those with descriptions or stars maybe?
        const sortedRepos = response.data
          .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
          .slice(0, 6); // Take top 6
        setRepos(sortedRepos);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects from GitHub');
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return (
    <div className="py-20 flex justify-center items-center bg-dark">
      <Loader2 className="animate-spin text-blue-500" size={48} />
    </div>
  );

  return (
    <section id="work" className="py-20 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Work</h2>
          <p className="text-slate-400">
            A selection of my recent projects fetched directly from GitHub.
          </p>
        </motion.div>
        
        {error && <p className="text-center text-red-400">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group flex flex-col h-full"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Github size={24} />
                  </div>
                  <div className="flex gap-4 text-slate-400 text-sm">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                        <Star size={16} /> {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1 hover:text-slate-200 transition-colors">
                        <GitFork size={16} /> {repo.forks_count}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {repo.name.replace(/-/g, ' ')}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {repo.description || "No description available for this project."}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 mb-4">
                  {repo.language && (
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                      {repo.language}
                    </span>
                  )}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-700/50">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-700/50 hover:bg-slate-700 py-2 rounded-lg transition-all"
                  >
                    <Github size={16} /> Code
                  </a>
                  {repo.homepage && (
                    <a 
                      href={repo.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 py-2 rounded-lg transition-all"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="https://github.com/mmuzamil46" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                View more on GitHub <ExternalLink size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
