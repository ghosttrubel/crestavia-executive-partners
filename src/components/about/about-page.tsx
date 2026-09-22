import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/homepage/site-footer";
import { Icon, type IconName } from "@/components/homepage/icons";
import styles from "./about.module.css";

const values: { title: string; copy: string; icon: IconName }[] = [
  { title: "People First", copy: "We place people, relationships and understanding at the centre of our work. Every search begins with listening and every engagement is built around the people involved.", icon: "people" },
  { title: "Integrity", copy: "Executive search depends on trust. We approach conversations, information and relationships with discretion, professionalism and respect.", icon: "document" },
  { title: "Global Perspective", copy: "Leadership challenges increasingly cross markets, sectors and borders. We bring a broad perspective to identifying talent and understanding leadership environments.", icon: "globe" },
  { title: "Lasting Impact", copy: "Our focus extends beyond filling a position. We seek leadership appointments and advisory outcomes capable of creating sustainable organisational value.", icon: "growth" },
];

const approach = [
  { number: "01", title: "Understand", copy: "We begin by developing a clear view of the organisation, its strategy, leadership environment and the outcomes expected from the appointment." },
  { number: "02", title: "Identify", copy: "We map relevant markets and leadership communities to identify executives whose experience, capabilities and perspective align with the mandate." },
  { number: "03", title: "Engage", copy: "We approach potential candidates thoughtfully and confidentially, exploring motivation, alignment and the value they could bring to the organisation." },
  { number: "04", title: "Deliver", copy: "We support the process through evaluation, engagement and appointment, maintaining clear communication and focus throughout the mandate." },
];

const expertise = [
  ["Executive Search", "A focused, rigorous approach to identifying and securing leaders for pivotal executive roles."],
  ["Board Advisory", "Thoughtful support for boards navigating appointments, succession and leadership priorities."],
  ["Leadership Advisory", "Perspective and guidance that helps organisations assess leadership needs at consequential moments."],
  ["Talent Intelligence", "Market insight that informs decisions about leadership, capability and competitive talent environments."],
] as const;

const sectors = [
  ["Aerospace & Defence", "/images/homepage/aerospace.jpg"],
  ["Industrial & Manufacturing", "/images/homepage/manufacturing.jpg"],
  ["Technology & Digital", "/images/homepage/technology.jpg"],
  ["Healthcare & Life Sciences", "/images/homepage/healthcare.jpg"],
  ["Financial Services", "/images/homepage/financial.jpg"],
  ["Energy & Sustainability", "/images/homepage/energy.jpg"],
] as const;

function Arrow() {
  return <Icon name="arrow" />;
}

function AboutHero() {
  return <section className={styles.hero} aria-labelledby="about-title">
    <div className={styles.container + " " + styles.heroGrid}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>ABOUT CRESTAVIA</p>
        <h1 id="about-title">Leadership Shapes<br />What Comes Next.</h1>
        <p>Crestavia Executive Partners is an independent executive search and leadership advisory firm connecting organisations with exceptional executive and board talent across global markets.</p>
        <p>We work at the intersection of people, opportunity and progress — helping organisations strengthen leadership, navigate change and build for the future.</p>
      </div>
      <div className={styles.heroImage}>
        <Image src="/images/hero/hero-executive-leadership.png" alt="Senior executives in discussion" fill priority sizes="(max-width: 720px) 100vw, 52vw" />
        <span className={styles.imageCaption}>Executive search &amp; leadership advisory</span>
      </div>
    </div>
  </section>;
}

function WhoWeAre() {
  return <section className={styles.whoWeAre} aria-labelledby="who-we-are-title">
    <div className={styles.container + " " + styles.whoGrid}>
      <div className={styles.whoImage}><Image src="/images/hero/hero-board-advisory.png" alt="Executives meeting around a boardroom table" fill sizes="(max-width: 720px) 100vw, 42vw" /></div>
      <div className={styles.whoCopy}>
        <p className={styles.eyebrow}>WHO WE ARE</p>
        <h2 id="who-we-are-title">A Global Partner in Executive Talent.</h2>
        <p>Crestavia Executive Partners works with organisations seeking exceptional leadership for critical moments of growth, transformation and succession.</p>
        <p>Our approach combines executive search expertise, market insight and thoughtful advisory support to identify leaders who bring more than experience alone. We look at leadership capability, strategic alignment, organisational context and the potential to create lasting value.</p>
        <p>We believe successful appointments begin with understanding — understanding the organisation, its ambitions, its challenges and the leadership required to move forward.</p>
      </div>
    </div>
  </section>;
}

function PurposeAndValues() {
  return <>
    <section className={styles.purpose} aria-labelledby="purpose-title">
      <div className={styles.container + " " + styles.purposeInner}>
        <p className={styles.eyebrow}>OUR PURPOSE</p>
        <h2 id="purpose-title">Exceptional People.<br />Stronger Organisations.<br />A Brighter Tomorrow.</h2>
        <div><p>Our purpose is to bring exceptional people and meaningful opportunities together in ways that strengthen organisations and create long-term impact.</p><p>Leadership decisions influence culture, performance, innovation and the direction of an organisation. That is why we approach every mandate with care, discretion and a long-term perspective.</p></div>
      </div>
    </section>
    <section className={styles.values} aria-labelledby="values-title">
      <div className={styles.container}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>WHAT GUIDES US</p><h2 id="values-title">Principles that shape every engagement.</h2></div>
        <div className={styles.valueGrid}>{values.map((value) => <article className={styles.valueCard} key={value.title}><Icon name={value.icon} /><h3>{value.title}</h3><p>{value.copy}</p></article>)}</div>
      </div>
    </section>
  </>;
}

function Approach() {
  return <section id="approach" className={styles.approach} aria-labelledby="approach-title">
    <div className={styles.container}>
      <div className={styles.approachIntro}><p className={styles.eyebrow}>OUR APPROACH</p><h2 id="approach-title">Rigorous Search. Human Judgement.</h2></div>
      <ol className={styles.approachList}>{approach.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>)}</ol>
    </div>
  </section>;
}

function GlobalPerspective() {
  return <section className={styles.global} aria-labelledby="global-title">
    <div className={styles.container + " " + styles.globalGrid}>
      <div><p className={styles.eyebrow}>GLOBAL PERSPECTIVE</p><h2 id="global-title">Leadership Without Borders.</h2><p>The strongest leadership solutions are not always found within familiar boundaries.</p><p>Our global perspective allows us to consider talent across markets and sectors, connecting organisations with executives whose experience can bring fresh thinking, specialist expertise and broader perspective.</p></div>
      <div className={styles.globeArt} aria-hidden="true"><Icon name="globe" /><i /><i /><i /><span>Global reach<br />informed by context</span></div>
    </div>
  </section>;
}

function ExpertiseAndSectors() {
  return <>
    <section className={styles.expertise} aria-labelledby="expertise-title"><div className={styles.container}><div className={styles.sectionIntro}><p className={styles.eyebrow}>OUR EXPERTISE</p><h2 id="expertise-title">Leadership insight for pivotal decisions.</h2></div><div className={styles.expertiseGrid}>{expertise.map(([title, copy]) => <Link href="/services" prefetch={false} className={styles.expertiseCard} key={title}><h3>{title}</h3><p>{copy}</p><span>Explore our services <Arrow /></span></Link>)}</div></div></section>
    <section className={styles.sectors} aria-labelledby="sectors-title"><div className={styles.container}><div className={styles.sectionTop}><div><p className={styles.eyebrow}>SECTORS</p><h2 id="sectors-title">Where leadership makes a difference.</h2></div><Link href="/sectors" prefetch={false}>Explore sectors <Arrow /></Link></div><div className={styles.sectorGrid}>{sectors.map(([title, image]) => <Link href="/sectors" prefetch={false} className={styles.sectorCard} key={title}><div><Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><h3>{title}</h3></Link>)}</div></div></section>
  </>;
}

function ClosingCta() {
  return <section className={styles.closing} aria-labelledby="closing-title"><Image src="/images/homepage/mountains.jpg" alt="" fill sizes="100vw" /><div className={styles.container + " " + styles.closingContent}><p className={styles.eyebrow}>LET&apos;S BUILD TOMORROW</p><h2 id="closing-title">The right leadership can change what comes next.</h2><p>Whether you are strengthening an executive team, planning succession or seeking specialist leadership insight, Crestavia Executive Partners is ready to start the conversation.</p><div><Link href="/services" prefetch={false} className={styles.redButton}>Find Executive Talent <Arrow /></Link><Link href="/contact" prefetch={false} className={styles.outlineButton}>Get in Touch <Arrow /></Link></div></div></section>;
}

export function AboutPage() {
  return <div id="top"><SiteHeader /><main><AboutHero /><WhoWeAre /><PurposeAndValues /><Approach /><GlobalPerspective /><ExpertiseAndSectors /><ClosingCta /></main><SiteFooter /></div>;
}
