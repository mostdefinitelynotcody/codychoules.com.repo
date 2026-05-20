export default function FeaturedProjects() {
  const projects = [
    {title: 'Genetic Algorithm'},
    {title: 'Lamarckian Algorithm'},
    {title: 'LGA Meta Algorithm'},
    {title: 'GA Meta Algorithm'},
    {title: 'Internal world modeling'},
    {title: 'Database'},
    {title: 'Eink cyber deck (self built laptop)'},
  ];

  return (
    <section className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6">
      <span className="text-[10px] uppercase tracking-[0.1em] text-[#71717a] font-bold mb-6 block">
        Featured Projects
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="ambient-tile bg-[#111113] border border-[#27272a] rounded-xl p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[14px] font-semibold text-[#efeff1]">{project.title}</h3>
              <span className="text-[10px] uppercase tracking-wide text-[#a1a1aa] bg-[#27272a] px-2 py-1 rounded">
                Coming Soon
              </span>
            </div>
            <p className="text-[12px] leading-[1.5] text-[#a1a1aa]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
