//  const skills = [
//     {id: 1, name: 'React'},
//     {id: 2, name: 'Next.js'},
//     {id: 3, name: 'JavaScript'},
//     {id: 4, name: 'TypeScript'},
//     {id: 5, name: 'Tailwind'},
//     {id: 6, name: 'Git'},
// ]

// export default skills

// data/skills.js
import { SiReact, SiTypescript, SiHtml5, SiCss, SiNodedotjs, SiPostgresql, SiNextdotjs, SiGit } from 'react-icons/si'

 const skills = [
  { name: 'React',      icon: SiReact,      color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML',       icon: SiHtml5,      color: '#E34F26' },
  { name: 'CSS',        icon: SiCss,        color: '#1572B6' },
  { name: 'Node.js',    icon: SiNodedotjs,  color: '#68A063' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Next.js',    icon: SiNextdotjs,  color: '#EAEAF5' },
  { name: 'Git',        icon: SiGit,        color: '#F05032' },
];

export default skills