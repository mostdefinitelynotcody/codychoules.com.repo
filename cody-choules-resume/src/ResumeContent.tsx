import {Download, ExternalLink, FileText, Mail, MapPin, Phone} from 'lucide-react';

const resumePdfUrl = `${import.meta.env.BASE_URL}cody-choules-resume.pdf`;
const resumePdfDownloadName = 'Cody-Choules-Resume.pdf';

const headerActionClass =
  'group flex flex-shrink-0 items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-[#fafafa] transition-all border border-[#3f3f46]';
import DevBanner from './components/DevBanner';
import FeaturedProjects from './components/FeaturedProjects';
import SiteVersionFooter from './components/SiteVersionFooter';

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
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 flex-shrink-0">
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={headerActionClass}
                >
                  View PDF
                  <FileText className="w-3.5 h-3.5" />
                </a>
                <a
                  href={resumePdfUrl}
                  download={resumePdfDownloadName}
                  className={headerActionClass}
                >
                  Download
                  <Download className="w-3.5 h-3.5" />
                </a>
                {showDevBanner && (
                  <a
                    href="https://codychoules.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={headerActionClass}
                  >
                    My Projects
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
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
                Technical professional based in Prescott with a computer science degree, practical SQL and SQL Server
                experience, Python and Linux familiarity, and service practices. Six years at Landmark included
                independent database support, data integration, and ownership of geospatial and project datasets used
                for planning, version control, and project execution. Comfortable translating messy real world sources
                into clean data that helps make for reliable data control, documenting logic, and coordinating across
                teams with various skills outside my expertise. Experience with enterprise systems and services along
                with a track record of quickly adapting to new demands and company goals.
              </p>
            </section>

            <section className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#71717a] font-bold block">
                Technical Skills
              </span>

              <div>
                <div className="text-[12px] font-semibold text-accent mb-2">Project Management</div>
                <p className="text-[12px] leading-[1.5] text-[#d4d4d8]">
                  Workflow optimization, team coordination, budgeting.
                </p>
              </div>

              <div>
                <div className="text-[12px] font-semibold text-accent mb-2">Data &amp; Querying</div>
                <p className="text-[12px] leading-[1.5] text-[#d4d4d8]">
                  SQL; SQL Server; data integration; validating and reconciling information across tools and
                  deliverables.
                </p>
              </div>

              <div>
                <div className="text-[12px] font-semibold text-accent mb-2">Programming &amp; Automation</div>
                <p className="text-[12px] leading-[1.5] text-[#d4d4d8]">
                  Python; scripting; Linux essentials and command-line work.
                </p>
              </div>

              <div>
                <div className="text-[12px] font-semibold text-accent mb-2">Service &amp; Security Mindset</div>
                <p className="text-[12px] leading-[1.5] text-[#d4d4d8]">
                  ITIL; system setup; troubleshooting; sensible handling of sensitive organizational data.
                </p>
              </div>

              <div>
                <div className="text-[12px] font-semibold text-accent mb-2">Delivery</div>
                <p className="text-[12px] leading-[1.5] text-[#d4d4d8]">
                  Technical documentation; walking non-technical users through tools and data; working independently on
                  deadlines.
                </p>
              </div>
            </section>

            <section className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#71717a] font-bold mb-4 block">Education</span>
              <div className="space-y-5">
                <div>
                  <div className="text-[14px] font-semibold text-[#efeff1]">Mesa Community College</div>
                  <div className="text-[11.5px] leading-[1.4] text-[#a1a1aa] mt-1">Mesa, AZ</div>
                  <div className="text-[11.5px] leading-[1.4] text-[#a1a1aa] mt-1">Associate in Science</div>
                  <div className="text-[12px] text-accent mt-1">2011 &mdash; 2012</div>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#efeff1]">Western Governors University</div>
                  <div className="text-[11.5px] leading-[1.4] text-[#a1a1aa] mt-1">Millcreek, UT</div>
                  <div className="text-[11.5px] leading-[1.4] text-[#a1a1aa] mt-1">Major in Computer Science</div>
                  <div className="text-[12px] text-accent mt-1">2022 &mdash; 2026</div>
                </div>
              </div>
            </section>

            <section className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 flex-grow">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#71717a] font-bold mb-4 block">
                Certifications
              </span>
              <div className="space-y-4">
                <div>
                  <div className="flex items-start gap-2.5 text-[12px] text-[#d4d4d8]">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-0.5 mt-1.5 flex-shrink-0"></span>
                    <div>
                      <div className="font-medium text-[#efeff1]">ITIL Foundation Certificate in IT Service Management</div>
                      <div className="text-[#a1a1aa] mt-0.5">Axelos Global Best Practices &middot; 2023</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-2.5 text-[12px] text-[#d4d4d8]">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-0.5 mt-1.5 flex-shrink-0"></span>
                    <div>
                      <div className="font-medium text-[#efeff1]">LPI Linux Essentials</div>
                      <div className="text-[#a1a1aa] mt-0.5">Linux Professional Institute &middot; 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#71717a] font-bold mb-4 block">
                Locally Connected
              </span>
              <p className="text-[13px] leading-[1.6] text-[#d4d4d8]">
                Prescott area resident rooted with a family and looking for a life long career. Very comfortable with
                travel to on site or new locations or serving remote roles.
              </p>
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
                  <div className="text-[14px] font-semibold text-accent mb-4">Landmark Building Consultants</div>

                  <div className="mb-6">
                    <div className="text-[15px] font-semibold text-[#efeff1] mb-1">Computer Aided Draftsman</div>
                    <div className="flex flex-wrap gap-x-1.5 mb-3 text-[12px] items-center">
                      <span className="text-[#a1a1aa]">Mesa, AZ 85215</span>
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
                        <span>Independently managed IT needs, hardware/software setup, and database interactions.</span>
                      </li>
                      <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                        <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                        <span>
                          Integrated new technology such as digital modeling tools, drone use, &amp; cloud data
                          management.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-[15px] font-semibold text-[#efeff1] mb-1">
                      Superintendent, Assistant Superintendent, &amp; General Tech
                    </div>
                    <div className="flex flex-wrap gap-x-1.5 mb-3 text-[12px] items-center">
                      <span className="text-[#a1a1aa]">Mesa, AZ 85215</span>
                      <span className="text-[#52525b]">|</span>
                      <span className="text-[#a1a1aa]">2013 &mdash; 2017</span>
                    </div>
                    <ul className="list-none space-y-2.5">
                      <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                        <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                        <span>
                          Managed multiple construction projects, ensuring structural accuracy and project efficiency.
                        </span>
                      </li>
                      <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                        <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                        <span>Worked with CAD software to interpret blueprints and site plans.</span>
                      </li>
                      <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                        <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                        <span>
                          Led teams and coordinated with subcontractors to oversee various phases of construction.
                        </span>
                      </li>
                      <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                        <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                        <span>Developed skills in GIS applications related to construction planning and site analysis.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="h-px w-full bg-[#27272a]" />

                <div>
                  <div className="text-[15px] font-semibold text-[#efeff1] mb-1">
                    Electric Bike Rental Manager &amp; IT
                  </div>
                  <div className="flex flex-wrap gap-x-1.5 mb-3 text-[12px] items-center">
                    <span className="text-accent">Go Play Durango</span>
                    <span className="text-[#52525b]">|</span>
                    <span className="text-[#a1a1aa]">Durango, CO 81301</span>
                    <span className="text-[#52525b]">|</span>
                    <span className="text-[#a1a1aa]">2022</span>
                  </div>
                  <ul className="list-none space-y-2.5">
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Managed daily operations, customer service, IT needs, and logistics for a rental business.
                      </span>
                    </li>
                    <li className="flex gap-3 text-[13px] leading-[1.5] text-[#a1a1aa]">
                      <span className="text-[#3f3f46] mt-0.5">&bull;</span>
                      <span>
                        Worked independently, reducing the employer&apos;s workload and increasing operational
                        efficiency.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        <SiteVersionFooter isDev={showDevBanner} />
      </div>
    </div>
  );
}
