import {
   mdiLanguagePython,
   mdiLanguageJavascript,
   mdiLanguageTypescript,
   mdiLanguageHtml5,
   mdiDotNet,
   mdiLanguagePhp,
   mdiApi, 
   mdiReact, 
   mdiCellphone,
   mdiNodejs,
   mdiElectronFramework, 
   mdiRobot,
   mdiDatabase,
   mdiMicrosoftVisualStudio,
   mdiMicrosoftVisualStudioCode,
   mdiGithub,
   mdiDocker,
   mdiTailwind,
   mdiWeb,
   mdiLightningBolt,
   mdiOwl,
   mdiLanguageGo,
   mdiAbacus,
   mdiFile,
   mdiGamepad,
   mdiLock
} from '@mdi/js';

const languages: Skill[] = [
  {name:"JavaScript",mdi:mdiLanguageJavascript, stars:5},
  {name:"TypeScript",mdi:mdiLanguageTypescript, stars:5},
  {name:"Python",mdi:mdiLanguagePython, stars:4},
  {name:"VB.net 👴",mdi:mdiDotNet, stars:4},
  {name:"HTML & CSS",mdi:mdiLanguageHtml5, stars:3},

  {name:"C#",mdi:mdiDotNet, stars:3},
  {name:"Go",mdi:mdiLanguageGo, stars:3},
  {name:"PHP",mdi:mdiLanguagePhp, stars:2},
]

const frameworks: Skill[] = [
  {name:"React",mdi:mdiReact, stars:4},
  {name:"Svelte",mdi:mdiWeb, stars:5},
  {name:"React Native Expo",mdi:mdiCellphone, stars:4},
  {name:"Node.js",mdi:mdiNodejs, stars:5},
  {name:"BunJS",mdi:mdiLightningBolt, stars:5},
  {name:"Electron",mdi:mdiElectronFramework, stars:2},
  {name:"Hapi",mdi:mdiApi, stars:4},
  {name:"Elysia",mdi:mdiOwl, stars:4},
  {name:"discord.js",mdi:mdiRobot, stars:2},
  {name:"Tailwind CSS",mdi:mdiTailwind, stars:5},
  {name:"Preact",mdi:mdiReact, stars:4},
  {name:"Vite",mdi:mdiLightningBolt, stars:4},
  {name:"Echo (Go)",mdi:mdiWeb, stars:3},
  {name:"Axios", mdi:mdiAbacus, stars: 4},

]

const db: Skill[] = [
  {name:"MySQL", mdi:mdiDatabase, stars:4},
  {name:"MariaDB", mdi:mdiDatabase, stars: 4},
  {name:"Redis", mdi:mdiDatabase, stars:4},
  {name:"MongoDB", mdi:mdiDatabase, stars:5},
  {name:"PocketBase", mdi:mdiDatabase, stars:2},
]

const tools: Skill[] = [
  {name:"Visual Studio 2022", mdi:mdiMicrosoftVisualStudio},
  {name:"Visual Studio Code", mdi:mdiMicrosoftVisualStudioCode},
  {name:"GitHub", mdi:mdiGithub},
  {name:"Docker", mdi:mdiDocker},
  {name:"Pterodactyl", mdi:mdiGamepad},
  {name:"MinIO Object Store", mdi:mdiFile},
  {name:"Caddy", mdi:mdiLock},
  {name:"Nginx", mdi:mdiWeb}
]

const projects: Project[] = [];
 
export {languages, frameworks, db, tools, projects}
