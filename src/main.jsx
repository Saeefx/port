import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const xUrl = 'https://x.com/Saeefx_1';
const email = 'abdulbasitsuleimanbature5@gmail.com';

const services = [
  { number: '01', title: 'Software engineering', body: 'Product-minded interfaces and dependable systems that turn rough ideas into useful, shippable experiences.', tags: ['Frontend', 'Web apps', 'Product thinking'] },
  { number: '02', title: 'Community building', body: 'Programs, conversations, and community rituals that turn passive audiences into active networks.', tags: ['Programs', 'Growth loops', 'Storytelling'] },
  { number: '03', title: 'AI motion + UGC', body: 'Scroll-stopping concepts and AI-assisted motion pieces built for attention, clarity, and conversion.', tags: ['UGC ads', 'Motion systems', 'Creative direction'] },
  { number: '04', title: 'Web3 + Solana', body: 'A curious, ecosystem-native lens for explaining products, rallying contributors, and making technical worlds feel human.', tags: ['Superteam Nigeria', 'Solana', 'Education'] },
];

const proof = [
  { mark: 'ST', title: 'Superteam Nigeria', type: 'Ecosystem member', copy: 'Active in a builder-first Solana ecosystem where community, experimentation, and shipping meet.' },
  { mark: 'AI', title: 'AI motion lab', type: 'Creative practice', copy: 'Exploring generative workflows for short-form storytelling, ad concepts, and motion-led communication.' },
  { mark: 'WEB', title: 'Web3 enthusiast', type: 'Point of view', copy: 'Translating emerging products and internet culture into language people can actually act on.' },
  { mark: 'DEV', title: 'Software builder', type: 'Working style', copy: 'Comfortable at the intersection of code, creative direction, and the details that make a launch land.' },
];

const ugcWork = [
  { id: '01', title: 'The 3-second switch', category: 'Fintech / UGC', format: 'Motion spec · 5 sec', hook: '“I stopped checking three apps just to know where my money went.”', brief: 'A direct-to-camera creator story for a modern finance app that makes the pain point instantly recognizable.', deliverables: ['Featured motion sample', '3 hook variations', '9:16 edit direction'], theme: 'lime', visual: 'SCREEN / SAVING TIME', video: '/saeef-ugc-feature.mp4' },
  { id: '02', title: 'Ship it in public', category: 'Developer tool', format: 'Screen capture · 25 sec', hook: '“This is the part of shipping that usually costs me a whole afternoon.”', brief: 'A fast product walkthrough that turns a technical workflow into a satisfying before/after moment.', deliverables: ['Product demo arc', 'Motion callouts', 'Caption system'], theme: 'blue', visual: 'BUILD / FASTER' },
  { id: '03', title: 'Your community is a product', category: 'Web3 / Community', format: 'Founder POV · 35 sec', hook: '“The best communities don’t feel like an audience.”', brief: 'A founder-led narrative for an ecosystem team that wants to show culture, not just list features.', deliverables: ['Founder talking points', 'B-roll map', 'CTA variations'], theme: 'violet', visual: 'PEOPLE / PROTOCOL' },
  { id: '04', title: 'The AI co-pilot test', category: 'AI / Productivity', format: 'Split-screen · 20 sec', hook: '“I gave the boring part of my work to an AI co-pilot.”', brief: 'A playful side-by-side test built to make an abstract AI feature feel concrete and useful.', deliverables: ['Split-screen storyboard', 'On-screen prompts', 'Sound cue guide'], theme: 'orange', visual: 'PROMPT / OUTPUT' },
  { id: '05', title: 'Texture that travels', category: 'Beauty / Lifestyle', format: 'POV hands · 15 sec', hook: '“The texture test is the only review I trust.”', brief: 'A sensory, close-up product moment that uses tactile visual language to earn the pause.', deliverables: ['Shot list', 'Texture language', 'Creator brief'], theme: 'pink', visual: 'TOUCH / REMEMBER' },
  { id: '06', title: 'One tab, seven moves', category: 'SaaS / Workflow', format: 'Desk POV · 25 sec', hook: '“Watch me turn seven tabs into one clean workflow.”', brief: 'A desk-setup ad that uses pace, labels, and movement to make a workflow product feel lighter.', deliverables: ['Beat sheet', 'Screen overlays', 'End-card copy'], theme: 'teal', visual: 'FOCUS / FLOW' },
  { id: '07', title: 'Culture, with receipts', category: 'Fashion / Culture', format: 'Street vox pop · 30 sec', hook: '“I wore the idea before I wore the product.”', brief: 'A culture-first street format that blends a product reveal with a point of view people want to repeat.', deliverables: ['Interview prompts', 'Street cutdown', 'Comment bait'], theme: 'red', visual: 'SIGNAL / STYLE' },
  { id: '08', title: 'LumaPay — money, minus the maze', category: 'LumaPay · Fintech spec', format: 'UGC direction · 10 sec', hook: '“I used to open four apps. Now I open one.”', brief: 'A fictional fintech brand direction that turns financial admin into a fast, satisfying before-and-after.', deliverables: ['10 sec hero edit ready', 'Creator script', 'CTA variants'], theme: 'lime', visual: 'ONE / DASHBOARD' },
  { id: '09', title: 'Nuru Skin — the texture test', category: 'Nuru Skin · Beauty spec', format: 'Creator POV · 20 sec', hook: '“If the texture is wrong, I know in one second.”', brief: 'A fictional beauty brand direction built around tactile close-ups and a creator’s honest micro-reaction.', deliverables: ['Macro shot list', 'Reaction beats', 'Comment prompt'], theme: 'pink', visual: 'FEEL / FIRST' },
  { id: '10', title: 'RelayOS — one workspace', category: 'RelayOS · SaaS spec', format: 'Desk POV · 20 sec', hook: '“The workflow got lighter before the deadline got closer.”', brief: 'A fictional SaaS brand direction that makes an abstract productivity benefit visible through motion and labels.', deliverables: ['Screen story', 'Overlay kit', 'Founder cutdown'], theme: 'blue', visual: 'FOCUS / FLOW' },
  { id: '11', title: 'Orbit Protocol — learn by doing', category: 'Orbit Protocol · Web3 spec', format: 'Founder POV · 25 sec', hook: '“You don’t need a glossary to start here.”', brief: 'A fictional Web3 brand direction that makes a technical ecosystem feel welcoming, practical, and human.', deliverables: ['Founder script', 'Community proof', 'Trust-first CTA'], theme: 'violet', visual: 'JOIN / BUILD' },
  { id: '12', title: 'Kairo — wear the signal', category: 'Kairo · Fashion spec', format: 'Street vox pop · 15 sec', hook: '“People asked where I got it before they asked what it was.”', brief: 'A fictional fashion brand direction using street energy, visual texture, and a repeatable point of view.', deliverables: ['Street prompt', '3 cutdowns', 'Comment bait'], theme: 'red', visual: 'SIGNAL / STYLE' },
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

function SectionLabel({ index, children }) {
  return <div className="section-label"><span>{index}</span><span>{children}</span></div>;
}

function App() {
  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="SAEEf home"><span className="wordmark-dot" />SAEEf<span className="wordmark-period">.</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#proof">Proof</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Let's talk <ArrowUpRight /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-pulse" /> Available for sharp collaborations · Lagos / Internet</div>
            <h1>I build systems<br /><em>and stories</em><br />that move ideas.</h1>
            <p className="hero-intro">I'm <strong>Abdulbasit Suleiman Bature</strong> — SAEEf for short. A software engineer, community builder, and AI motion creator working where product, culture, and the next internet overlap.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See the work <ArrowUpRight /></a>
              <a className="button button-ghost" href={`mailto:${email}`}>Start a conversation <ArrowUpRight /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract SAEEf identity graphic">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="hero-cross cross-one" /><div className="hero-cross cross-two" />
            <div className="hero-monogram">S<span>Æ</span></div>
            <div className="hero-art-note note-top">BUILD / MOVE / REPEAT</div>
            <div className="hero-art-note note-bottom">001 — SAEEf system</div>
          </div>
        </section>

        <section className="signal-strip" aria-label="SAEEf disciplines">
          <div className="signal-inner">
            <span>01 / software</span><span>02 / community</span><span>03 / web3</span><span>04 / ai motion</span><span>05 / ugc</span>
          </div>
        </section>

        <section className="section-wrap work-section" id="work">
          <SectionLabel index="01" children="The work, in motion" />
          <div className="section-heading-row">
            <h2>Different tools.<br /><em>Same instinct:</em> make it land.</h2>
            <p className="section-note">I like the messy middle — where a product needs a clearer story, a community needs a reason to gather, or an idea needs a visual language people remember.</p>
          </div>
          <div className="service-stack">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <div className="service-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ArrowUpRight />
              </article>
            ))}
          </div>
        </section>

        <section className="proof-section" id="proof">
          <div className="section-wrap">
            <SectionLabel index="02" children="Evidence, not adjectives" />
            <div className="section-heading-row proof-heading">
              <h2>Curiosity is nice.<br /><em>Receipts are better.</em></h2>
              <p className="section-note">A few signals from the worlds I build in. Some are affiliations, some are practices, and all of them shape how I work.</p>
            </div>
            <div className="proof-grid">
              {proof.map((item) => (
                <article className="proof-card" key={item.title}>
                  <div className="proof-mark">{item.mark}</div>
                  <div className="proof-type">{item.type}</div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <span className="card-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ugc-section section-wrap" id="ugc">
          <SectionLabel index="03" children="UGC / motion lab" />
          <div className="section-heading-row">
            <h2>Seven ways to<br /><em>stop the scroll.</em></h2>
            <p className="section-note">A concept shelf for clients who want to see range. Each board is a labeled spec direction — ready to turn into a brief, shoot, and edit.</p>
          </div>
          <div className="ugc-grid">
            {ugcWork.map((item) => (
              <article className={`ugc-card theme-${item.theme}`} key={item.id}>
                {item.video ? <div className="ugc-video-wrap"><video src={item.video} controls muted loop playsInline preload="metadata" aria-label={`${item.title} featured motion sample`} /><span className="video-badge">FEATURED MOTION / PLAY</span></div> : <div className="ugc-visual">
                  <div className="visual-noise" />
                  <div className="visual-top"><span>SAEEf / SPEC 0{item.id}</span><span>9:16</span></div>
                  <div className="visual-center"><span className="visual-pill">{item.visual}</span><strong>{item.id}</strong></div>
                  <div className="visual-bottom"><span>PLAY / PAUSE</span><span>00:{item.id === '01' ? '30' : item.id === '05' ? '15' : '25'}</span></div>
                </div>}
                <div className="ugc-meta"><span>{item.category}</span><span>{item.format}</span></div>
                <h3>{item.title}</h3>
                <p className="ugc-hook">{item.hook}</p>
                <p className="ugc-brief">{item.brief}</p>
                <div className="deliverables">{item.deliverables.map((deliverable) => <span key={deliverable}>{deliverable}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="spec-note"><span className="spec-note-mark">i</span><span>These examples are concept/spec directions created to show creative range. The five named brands above are fictional portfolio brands, not client claims. Swap them for live client work as your case studies grow.</span></div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-layout">
            <div>
              <SectionLabel index="04" children="The operating system" />
              <h2>Part engineer.<br /><em>Part translator.</em><br />Always learning.</h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">I’m interested in the spaces between disciplines — the place where a clean interface meets a sharp narrative, where a community becomes a product advantage, and where AI becomes a creative multiplier instead of a gimmick.</p>
              <p>That usually means I’m switching between code, a storyboard, a community call, and a new model in the same week. The through-line is simple: understand the people, clarify the signal, then make something useful enough to move.</p>
              <div className="about-list"><div><span>Based in</span><strong>Nigeria / online</strong></div><div><span>Currently exploring</span><strong>AI-native creative systems</strong></div><div><span>Best fit</span><strong>Builders with something to prove</strong></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-orb" />
            <SectionLabel index="05" children="Open channel" />
            <h2>Have a sharp idea?<br /><em>Let's give it a shape.</em></h2>
            <p>For product work, community experiments, Web3 storytelling, or a UGC concept that needs a little more signal — I’m listening.</p>
            <div className="contact-actions"><a className="button button-primary" href={`mailto:${email}`}>Email SAEEf <ArrowUpRight /></a><a className="button button-light" href={xUrl} target="_blank" rel="noreferrer">Find me on X <ArrowUpRight /></a></div>
            <div className="contact-details"><a href={`mailto:${email}`}>{email}</a><a href={xUrl} target="_blank" rel="noreferrer">x.com/Saeefx_1</a></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="wordmark" href="#top"><span className="wordmark-dot" />SAEEf<span className="wordmark-period">.</span></a><span>Build systems. Move culture.</span><span>© {new Date().getFullYear()} Abdulbasit Suleiman Bature</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
