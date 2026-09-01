import useInView from '../hooks/useInView.js';

const projects = [
  {
    name: 'NFT Marketplace dApp',
    year: '2026',
    desc: 'A decentralized NFT marketplace supporting minting, listing, and buying/selling NFTs directly on-chain.',
    stack: ['Solidity', 'React', 'Vite', 'Ethers.js', 'Web3.js'],
    image: '../public/projects/nft-marketplace.png',
    color: '#a06bea',
    github: 'https://github.com/silvabolaji08-svg/nft-marketplace',
    demo: 'https://portfolio-flax-xi-16.vercel.app/',
  },
  {
    name: 'E-Commerce Demo',
    year: '2026',
    desc: 'A demo e-commerce platform with product listing, cart system, and checkout flow.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: '../public/projects/ecommerce-demo.png',
    color: '#4a90e2',
    github: '#',
    demo: '#',
  },
  // Add new projects here — they'll show on /projects automatically.
  // Only the first `limit` (see below) show on the Home page.
];

export default function Projects({ limit }) {
  const [gridRef, inView] = useInView();
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="container" style={{ padding: '60px 0' }}>
      <h2 className="section-title">Recent Projects</h2>
      <p className="section-subtitle">
        Real-world projects built across the MERN stack and Web3.
      </p>

      <div
        ref={gridRef}
        className={`masonry-grid stagger-grid ${inView ? 'in-view' : ''}`}
      >
        {visibleProjects.map((p, i) => (
          <div
            key={p.name}
            className={`masonry-card ${i % 2 !== 0 ? 'masonry-offset' : ''}`}
            style={{
              background: `${p.color}18`,
              borderColor: `${p.color}40`,
            }}
          >
            <div className="masonry-mockup">
              <img
                src={p.image}
                alt={`${p.name} screenshot`}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add(
                    'masonry-mockup-empty'
                  );
                }}
              />
            </div>

            <div className="masonry-info">
              <div className="masonry-info-top">
                <h3>{p.name}</h3>
                <span className="masonry-year">{p.year}</span>
              </div>

              <p>{p.desc}</p>

              <div className="tag-row">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="tag"
                    style={{
                      color: p.color,
                      background: `${p.color}1a`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  GitHub ↗
                </a>

                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {limit && projects.length > limit && (
        <div className="skills-cta">
          <a href="/projects" className="btn btn-outline">
            View All Projects →
          </a>
        </div>
      )}
    </section>
  );
}