import {useEffect} from 'react';
import ResumeContent from '../ResumeContent';

export default function ResumePage() {
  useEffect(() => {
    document.title = 'codychoules.com';
  }, []);

  return <ResumeContent />;
}
