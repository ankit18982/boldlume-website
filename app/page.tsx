import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Boxes, Braces,
  CloudCog, Code2, Mail, MessageCircle, MonitorSmartphone, Sparkles,
} from 'lucide-react';

const services = [
  { n: '01', icon: MonitorSmartphone, image: './capabilities/web-mobile.png', title: 'Web & mobile products', text: 'Responsive web platforms and high-quality native or cross-platform mobile applications.' },
  { n: '02', icon: CloudCog, image: './capabilities/saas-cloud.png', title: 'SaaS & cloud platforms', text: 'Scalable subscription products, business dashboards, APIs and cloud-based systems.' },
  { n: '03', icon: Boxes, image: './capabilities/custom-software.png', title: 'Custom software', text: 'Purpose-built tools, internal systems and automation designed around your exact workflow.' },
  { n: '04', icon: Bot, image: './capabilities/ai-integrations.png', title: 'AI & smart integrations', text: 'Practical AI capabilities, intelligent workflows and third-party services integrated responsibly.' },
  { n: '05', icon: Braces, image: './capabilities/realtime.png', title: 'Real-time experiences', text: 'Chat, video conferencing, notifications, WebSockets, VoIP and communication products.' },
  { n: '06', icon: Code2, image: './capabilities/modernization.png', title: 'Modernization & support', text: 'Performance improvement, feature expansion, codebase modernization and ongoing engineering.' },
];

const work = [
  { name: 'Mimoda', type: 'Social discovery platform', href: 'https://mimoda.app/', tags: ['Mobile', 'Product', 'Real-time'] },
  { name: 'MeetN', type: 'Communication experience', href: 'https://meetn.com/', tags: ['Mobile', 'Video', 'Messaging'] },
  { name: 'NXA', type: 'Cloud communication platform', href: 'https://www.nxa.tel/', tags: ['VoIP', 'SaaS', 'Telecom'] },
  { name: 'GPU Global AI', type: 'AI infrastructure platform', href: 'https://gpuglobalai.com/', tags: ['AI', 'Cloud', 'Web'] },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="identity" href="#top" aria-label="Boldlume home"><img className="brand-logo" src="./boldlume-logo.png" alt="Boldlume — Bright ideas. Boldly built." /></a>
        <div className="nav-links"><a href="#expertise">Expertise</a><a href="#work">Work</a><a href="#approach">Approach</a></div>
        <a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={17} /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Software development partner · Available worldwide</div>
        <p className="kicker">Strategy. Engineering. Delivery.</p>
        <h1>Software solutions built around <em>real business needs.</em></h1>
        <div className="hero-bottom">
          <p>We help companies turn complex ideas into dependable digital products—from web and mobile applications to SaaS platforms, custom software and AI integrations.</p>
          <a className="circle-link" href="#expertise" aria-label="Explore expertise"><ArrowDownRight size={28} /></a>
        </div>
        <div className="hero-line"><span /></div>
      </section>

      <section className="statement dark-section">
        <div className="shell statement-grid">
          <p className="section-label">What we bring</p>
          <div>
            <h2>One partner for the entire <span>product journey.</span></h2>
            <p className="lead">From early product thinking and interface development to complex integrations and long-term improvement, Boldlume brings a practical engineering perspective to every stage.</p>
            <div className="metrics">
              <div><strong>5+</strong><span>Years building software</span></div>
              <div><strong>Full-cycle</strong><span>Strategy to delivery</span></div>
              <div><strong>Global</strong><span>Remote collaboration</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services shell section" id="expertise">
        <div className="section-head"><div><p className="section-label">Capabilities</p><h2>How we can help.</h2></div><p>Flexible software expertise for new products, growing platforms and established digital businesses.</p></div>
        <div className="service-grid">
          {services.map(({ n, icon: Icon, image, title, text }) => <article className="service-card" key={title}><div className="card-top"><span>{n}</span><Icon size={25} strokeWidth={1.6} /></div><div className="service-visual"><img src={image} alt="" loading="lazy" /></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="work-section section" id="work">
        <div className="shell">
          <div className="section-head"><div><p className="section-label">Selected experience</p><h2>Products in the real world.</h2></div><p>A selection of live platforms representing experience across communication, mobile products, SaaS and AI infrastructure.</p></div>
          <div className="work-list">
            {work.map((item, i) => <a href={item.href} target="_blank" rel="noreferrer" className="work-row" key={item.name}><span className="work-no">0{i + 1}</span><div><h3>{item.name}</h3><p>{item.type}</p></div><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><ArrowUpRight className="work-arrow" size={28} /></a>)}
          </div>
          <p className="disclosure">Selected product experience is presented to demonstrate relevant technical capabilities. It does not imply ownership of or an ongoing commercial relationship with the listed companies.</p>
        </div>
      </section>

      <section className="approach dark-section section" id="approach">
        <div className="shell">
          <div className="section-head light"><div><p className="section-label">Working together</p><h2>Clear process.<br />No unnecessary complexity.</h2></div><p>Direct communication, thoughtful decisions and visible progress from the first conversation through delivery.</p></div>
          <div className="steps">
            <div><span>01</span><h3>Understand</h3><p>Clarify the business problem, users, priorities and definition of success.</p></div>
            <div><span>02</span><h3>Shape</h3><p>Turn the goal into a realistic product direction, scope and technical plan.</p></div>
            <div><span>03</span><h3>Build</h3><p>Develop in clear stages with regular communication and practical feedback.</p></div>
            <div><span>04</span><h3>Improve</h3><p>Launch confidently, learn from real use and keep the product moving forward.</p></div>
          </div>
        </div>
      </section>

      <section className="fit shell section">
        <p className="section-label">A good fit for</p>
        <div className="fit-lines"><p><Sparkles /> Founders turning an idea into a focused MVP</p><p><Sparkles /> Companies modernizing an existing platform</p><p><Sparkles /> Teams needing specialized product engineering</p><p><Sparkles /> Agencies looking for a dependable delivery partner</p></div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <p className="section-label">Have a project in mind?</p>
          <h2>Let’s turn it into something <em>useful.</em></h2>
          <p className="contact-copy">Share what you are building, improving or trying to solve. We’ll respond with practical questions and a clear next step.</p>
          <div className="contact-links">
            <a href="mailto:business@boldlume.com"><Mail size={20} /> Email Boldlume <ArrowRight size={18} /></a>
            <a href="https://wa.me/919588220190" target="_blank" rel="noreferrer"><MessageCircle size={20} /> WhatsApp <ArrowRight size={18} /></a>
            <a href="https://www.instagram.com/boldlume/" target="_blank" rel="noreferrer"><span className="social-mark">B</span> Instagram <ArrowRight size={18} /></a>
          </div>
          <footer><span>© {new Date().getFullYear()} Boldlume</span><span>Bright ideas. Boldly built.</span><a href="#top">Back to top ↑</a></footer>
        </div>
      </section>
    </main>
  );
}
