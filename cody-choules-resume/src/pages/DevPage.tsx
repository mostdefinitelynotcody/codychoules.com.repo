import {useEffect} from 'react';
import ResumeContent from '../ResumeContent';

export default function DevPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Dev — codychoules.com';

    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const created = !robots;
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    const previousRobots = robots.content;
    robots.content = 'noindex, nofollow';

    return () => {
      document.title = previousTitle;
      if (created && robots?.parentNode) {
        robots.parentNode.removeChild(robots);
      } else if (robots) {
        robots.content = previousRobots;
      }
    };
  }, []);

  return <ResumeContent showDevBanner showFeaturedProjects />;
}
