import bfsiImage from './assets/bfsi.svg';
import blueCrossImage from './assets/blue-cross.svg';
import revisionPrepImage from './assets/revision-prep.png';
import vdtsImage from './assets/vdts.svg';
import sailYourImage from './assets/sailyour-ai.svg';
import bhoomiboxImage from './assets/bhoomibox.svg';
import fundpitchImage from './assets/fundpitch.svg';

export const portfolioProjects = [
  {
    id: 'bfsi-skill-portal',
    number: '01',
    title: 'BFSI Skill Portal',
    image: bfsiImage,
    summary:
      'A centralized platform for student tracking, evaluation, CSR reporting, and hiring access across the BFSI Minor Degree Program.',
    tags: ['AI Interviews', 'Dashboards', 'CSR Reporting'],
  },
  {
    id: 'blue-cross-hyderabad',
    number: '02',
    title: 'Blue Cross Hyderabad',
    image: blueCrossImage,
    summary:
      'A field operations platform for animal capture, veterinary workflows, vehicle tracking, release management, and reporting.',
    tags: ['Field Ops', 'Mobile App', 'Analytics'],
  },
  {
    id: 'revision-prep',
    number: '03',
    title: 'Revision Prep',
    image: revisionPrepImage,
    summary:
      'A revision platform with curriculum-aligned practice, precision filtering, AI explanations, and guided learning flows.',
    tags: ['Practice Engine', 'AI Tutor', 'Analytics'],
  },
  {
    id: 'vdts',
    number: '04',
    title: 'VDTS',
    image: vdtsImage,
    summary:
      'A structured incident-management and ticket-resolution system with admin assignment, consultant workflows, and client confirmation.',
    tags: ['Tickets', 'Workflow', 'SaaS'],
  },
  {
    id: 'sailyour-ai',
    number: '05',
    title: 'SailYour AI',
    image: sailYourImage,
    summary:
      'An AI mock-interview product for placement readiness, skill scoring, summaries, and admin-level student analytics.',
    tags: ['Computer Vision', 'Scoring', 'Reports'],
  },
  {
    id: 'bhoomibox',
    number: '06',
    title: 'BhoomiBox',
    image: bhoomiboxImage,
    summary:
      'A farm-to-family mobile experience connecting urban families directly with farmers through harvest, story, and member flows.',
    tags: ['Mobile UX', 'D2C', 'Marketplace'],
  },
  {
    id: 'fundpitch',
    number: '07',
    title: 'FundPitch',
    image: fundpitchImage,
    summary:
      'An invite-only platform connecting companies with SEBI-registered financial partners through compliant deal-room workflows.',
    tags: ['Deal Room', 'Compliance', 'Fintech'],
  },
];
