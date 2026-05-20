import {Mail, MapPin, Phone, ExternalLink} from 'lucide-react';
import DevBanner from './components/DevBanner';
import FeaturedProjects from './components/FeaturedProjects';

type ResumeContentProps = {
  showFeaturedProjects?: boolean;
  showDevBanner?: boolean;
};

export default function ResumeContent({
  showFeaturedProjects = false,
  showDevBanner = false,
}: ResumeContentProps) {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans selection:bg-accent selection:text-white p-4 md:p-6 lg:p-8 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col gap-4">
        {showDevBanner && <DevBanner />}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 bg-[#18181b] border border-[#27272a] rounded-2xl p-6 md:p-8 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-[42px] font-extrabold tracking-tight leading-none uppercase m-0">
                  Cody <span className="text-accent">Choules</span>
                </h1>
                <p className="text-[14px] md:text-[16px] text-[#a1a1aa] mt-3 font-medium">
                  CS Major &amp; ML Specialist &bull; VDC Expert &bull; Security Enthusiast
                </p>
              </div>
              <a
                href="https://codychoules.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-shrink-0 items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-[#fafafa] transition-all border border-[#3f3f46]"
              >
                My Projects
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#18181b] border border-[#27272a] rounded-2xl p-6 md:p-8 flex flex-col justify-center gap-3">
            <div className="flex items-center gap-3 text-[13px] text-[#d4d4d8]">
              <MapPin className="w-4 h-4 text-[#71717a]" />
              <span>Prescott, AZ 86303</span>
            </div>
            <div className="flex items-center gap-3 text-[13px] text-[#d4d4d8]">
              <Mail className="w-4 h-4 text-[#71717a]" />
              <span>codychoules@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-[13px] text-[#d4d4d8]">
              <Phone className="w-4 h-4 text-[#71717a]" />
              <span>+1 (480) 694-6775</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <section className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#71717a] font-bold mb-4 block">
                Professional Summary
              </span>
              <p className="text-[13px] leading-[1.6] text-[#d4d4d8]">
                Career transitioning candidate with a computer science degree path (WGU, ML specialization), hands on
                SQL, Python, Linux, &amp; data integration experience, &amp; a decade of functional delivery in
                technical environments. Ten years at Landmark six of which focused on combined independent IT &amp;
                database ownership with dataset work &amp; stakeholder facing analysis. Currently studying CompTIA
                Security+ &amp; shadowing a SOC analyst to deepen fraud &amp; security fundamentals. Comfortable scoping
                unfamiliar technical territory, learning new frameworks, &amp; translating messy real world inputs into
                structured, documented outputs with a passion for ML, its history, and helping to use it to combat its
                increasing unethical use. My skills can be a valuable asset in reigning in hype &amp; conveying the risks
                of ML to stakeholders while integrating 3rd party ML tools/APIs or designing in house ML tools to meet
                the needs of our team.
              </p>
            </section>

            <section className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#71717a] font-bold block">Technical Stack</span>

              <div>
                <div className="text-[12px] font-semibold text-accent mb-2">Programming &amp; Data</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">Python</span>
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">SQL</span>
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">Scripting</span>
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">Linux</span>
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">SQL Server</span>
                </div>
              </div>

              <div>
                <div className="text-[12px] font-semibold text-accent mb-2">ML Orientation</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">API Integration</span>
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">Symbolic Logic</span>
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">Subsymbolic Paradigms</span>
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">Algorithm Design</span>
                </div>
              </div>

              <div>
                <div className="text-[12px] font-semibold text-accent mb-2">Operations &amp; Delivery</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">Workflow Optimization</span>
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">ITIL</span>
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">Documentation</span>
                  <span className="bg-[#27272a] px-2.5 py-1 rounded text-[11px] text-[#fafafa]">Data Integration</span>
                </div>
              </div>
            </section>

            <section className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#71717a] font-bold mb-4 block">Education</span>
              <div className="space-y-5">
                <div>
                  <div className="text-[14px] font-semibold text-[#efeff1]">Western Governors University</div>
                  <div className="text-[11.5px] leading-[1.4] text-[#a1a1aa] mt-1">B.S. Computer Science (ML Spec)</div>
                  <div className="text-[12px] text-accent mt-1">2022 &mdash; 2026</div>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#efeff1]">Mesa Community College</div>
                  <div className="text-[11.5px] leading-[1.4] text-[#a1a1aa] mt-1">Associate in Science</div>
                  <div className="text-[12px] text-accent mt-1">2011 &mdash; 2012</div>
                </div>
              </div>
            </section>

            <section className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 flex-grow">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#71717a] font-bold mb-4 block">
                Certifications
              </span>
              <div className="space-y-3">
                <div className="flex items-center text-[12px] text-[#d4d4d8]">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2.5 flex-shrink-0"></span>
                  ITIL Foundation (IT Management)
                </div>
                <div className="flex items-center text-[12px] text-[#d4d4d8]">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2.5 flex-shrink-0"></span>
                  LPI Linux Essentials
                </div>
                <div className="flex items-center text-[12px] text-[#d4d4d8] opacity-70">
                  <span className="w-1.5 h-1.5 bg-[#52525b] rounded-full mr-2.5 flex-shrink-0"></span>
                  Security+ (In Progress, Est. 2026)
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {showFeaturedProjects && <FeaturedProjects />}

            <section className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#71717a] font-bold mb-6 block">
                Professional Experience
              </span>

              <div className="space-y-8">
                <div>
                  <div className="text-[15px] font-semibold text-[#efeff1] mb-1">
                    VDC Coordinator &amp; Digital Transformation Lead
                  </div>
                  <div className="flex flex-wrap gap-x-1.5 mb-3 text-[12px] items-center">
                    <span className="text-accent">Landmark Building Consultants</span>
                    <span className="text-[#52525b]">|</span>
                    <span className="text-[#a1a1aa]">Mesa, AZ</span>
                    <span className="text-[#52525b]">|</span>
                    <span className="text-[#a1a1aa]">2017 &mdash; 2023</span>
                  </div>
                  <ul className="list-none space-y-2.5">
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Developed and managed 3D visualizations and geospatial datasets for commercial and residential
                        projects along multi year timespans.
                      </span>
                    </li>
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Led the adoption of new digital workflows, introducing advanced visualization and geospatial
                        tools emergent at the time such as realtime rendering, 3D topology mapping, and BIM 3D drafting
                        &amp; version control.
                      </span>
                    </li>
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Gained experience in enterprise level software including Autodesk, Archicad, and SketchUp.
                      </span>
                    </li>
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Independently ran IT &amp; database needs: hardware/software setup, SQL Server touchpoints,
                        &amp; data integration between modeling tools &amp; internal systems.
                      </span>
                    </li>
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Integrated cloud data management &amp; field capture (including drone workflows) so stakeholders
                        had timely, structured information for decisions.
                      </span>
                    </li>
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Documented logic &amp; hand offs instruction so nontechnical users could independently act. Also
                        acted as the translator between engineering intent &amp; field execution.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="h-px w-full bg-[#27272a]" />

                <div>
                  <div className="text-[15px] font-semibold text-[#efeff1] mb-1">
                    Superintendent, Assistant Superintendent, &amp; General Tech
                  </div>
                  <div className="flex flex-wrap gap-x-1.5 mb-3 text-[12px] items-center">
                    <span className="text-accent">Landmark Building Consultants</span>
                    <span className="text-[#52525b]">|</span>
                    <span className="text-[#a1a1aa]">Mesa, AZ</span>
                    <span className="text-[#52525b]">|</span>
                    <span className="text-[#a1a1aa]">2013 &mdash; 2017</span>
                  </div>
                  <ul className="list-none space-y-2.5">
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Directed multiple projects with strict accuracy &amp; compliance to approved plans; responsible for
                        loss-avoidance at the project level (rework, schedule slip, material waste).
                      </span>
                    </li>
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Coordinated across crews, subcontractors, &amp; clients; balanced risk against delivery pressure
                        day over day terminating contracts with risk introduction, compliance violation, &amp; breach of
                        contract.
                      </span>
                    </li>
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        On planning &amp; site analysis I turned complex inputs into clear instructions for nontechnical
                        teams including high profile stakeholders via detailed walkthroughs and information
                        presentations.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="h-px w-full bg-[#27272a]" />

                <div>
                  <div className="text-[15px] font-semibold text-[#efeff1] mb-1">Electric Bike Rental Manager &amp; IT</div>
                  <div className="flex flex-wrap gap-x-1.5 mb-3 text-[12px] items-center">
                    <span className="text-accent">Go Play Durango</span>
                    <span className="text-[#52525b]">|</span>
                    <span className="text-[#a1a1aa]">Durango, CO</span>
                    <span className="text-[#52525b]">|</span>
                    <span className="text-[#a1a1aa]">2022</span>
                  </div>
                  <ul className="list-none space-y-2.5">
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Ran daily operations, customer service, &amp; logistics for a seasonal rental business with
                        minimal oversight. Here I drove process efficiency end to end.
                      </span>
                    </li>
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Worked independently, reducing the employer&apos;s workload and increasing operational efficiency.
                        First line IT support for on site systems; handled user issues &amp; kept the service running.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
