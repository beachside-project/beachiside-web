import BlogLink from './components/BlogLink';
import SocialLink from './components/SocialLink';
import CredentialLine from './components/CredentialLine'
import Description from './components/Description'
import CredentialItem from './types/CredentialItem';
import React from 'react';

import tpeLogo from './assets/tpe-2024.png';
import ai102Logo from './assets/ai102.png';
import az104Logo from './assets/az104.png';
import az204Logo from './assets/az204.png';
import az305Logo from './assets/az305.png';
import az400Logo from './assets/az400.png';
import ghActionsLogo from './assets/github-actions.png';
import ghAdminLogo from './assets/github-administration.png';
import ghAdvancedSecurityLogo from './assets/github-advanced-security.png';

import './App.css'


function App() {
  const tpe: CredentialItem[] = [
    { url: "https://www.microsoft.com/ja-jp/partner/jp-tpeaward2024?activetab=pivot:aitab", imageSource: tpeLogo },
  ]
  const microsoftProps: CredentialItem[] = [
    { url: "https://learn.microsoft.com/ja-jp/users/beachside/credentials/80B6D9E07FCE4753", imageSource: ai102Logo },
    { url: "https://learn.microsoft.com/ja-jp/users/beachside/credentials/DE3911608B9838A", imageSource: az305Logo },
    { url: "https://learn.microsoft.com/ja-jp/users/beachside/credentials/3db9a677884c5902", imageSource: az400Logo },
    { url: "https://learn.microsoft.com/ja-jp/users/beachside/credentials/445741fd4686bd60", imageSource: az204Logo },
    { url: "https://learn.microsoft.com/ja-jp/users/beachside/credentials/8f0ac148832a223f", imageSource: az104Logo },
  ]

  const githubProps: CredentialItem[] = [
    { url: "https://www.credly.com/badges/6d27a3fc-8fcc-4f16-8139-c873732a0b12", imageSource: ghActionsLogo },
    { url: "https://www.credly.com/badges/31ab2d8f-5f4b-4406-a75c-2bb7e4740cb9", imageSource: ghAdminLogo },
    { url: "https://www.credly.com/badges/015a82df-b555-4a83-880f-36d3d2da3d65", imageSource: ghAdvancedSecurityLogo },
  ]

  return (
    <div>
      <Description />
      <CredentialLine items={tpe} />
      <CredentialLine items={microsoftProps} />
      <CredentialLine items={githubProps} />
      <SocialLink />
      <BlogLink />

    </div>
  )
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )


}

export default App
