import SceneEffects from "../components/profile/SceneEffects";
import CodingActivity from "../components/profile/CodingActivity";
import TvImage from "../components/profile/TvImage";
import {about,links,profile,projects,work} from "../content/site";
import ProfileCard from "../components/profile/ProfileCard";
const images=["volt-guard.png","bi-lstm.png","cache-game.png","exit-interview.png","lexi-logic.png","stock-pilot.png","sea-water.png","amalzen-dx.png"];
function Panel({id,title,children}){return <section className="space-panel" id={id}><h2>{title}</h2><div className="space-panel__body">{children}</div></section>}
export default function Home(){return <div className="myspace-page"><SceneEffects/>
<div className="profile-masthead"><span>marvenluis.io / profile</span><span>Quezon City, Philippines</span></div>
<div className="space-columns"><aside className="space-sidebar">
<section className="identity"><h1>Marven Luis</h1><p className="identity__quote">Full-stack developer, Quezon City</p><TvImage src="/images/formal-avatar.png" alt="Marven Luis, formal portrait" portrait/><p className="identity__status"><span aria-hidden="true">&#10022;</span> {profile.status}</p><a className="resume-button" href={links.resume} target="_blank" rel="noreferrer">Read my resume</a></section>
<Panel title="Contacting Marven" id="profile-contact"><div className="contact-grid"><a href={links.email}>&#10022; Email me</a><a href={links.github}>&#10022; GitHub</a><a href={links.linkedin}>&#10022; LinkedIn</a></div></Panel>
<Panel title="Marven's details" id="details"><ProfileCard/></Panel>
<Panel title="Marven's interests" id="interests"><dl className="interest-table"><div><dt>General</dt><dd>I work out. Upper/lower split, four days a week.</dd></div><div><dt>Music</dt><dd>Emo, Post-Hardcore, Screamo, Metalcore, OPM, Rap, R&amp;B</dd></div>{profile.bands.length>0&&<div><dt>Now playing</dt><dd>{profile.bands.join(', ')}</dd></div>}<div><dt>Games</dt><dd>Monster Hunter, Warframe, Bloons, LoL, CS2 and AQW</dd></div><div><dt>Books</dt><dd>Reading</dd></div><div><dt>Travel</dt><dd>Travel</dd></div></dl></Panel>
<Panel title="Marven's playlist" id="playlist"><iframe className="playlist-embed" src={links.spotifyEmbed} title="Spotify playlist: Avalon" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowFullScreen loading="lazy"/><a className="playlist-open" href={links.spotify} target="_blank" rel="noreferrer">Open Avalon on Spotify &rarr;</a></Panel>
</aside><div className="space-main">
<div className="scene-banner"><span className="scene-banner__ornament" aria-hidden="true">&#10022;</span><p>build. break. repeat.</p><span>Code, heavy music &amp; everything in between.</span><span className="scene-banner__cross" aria-hidden="true">&#10022;</span></div>
<Panel title="Marven's work" id="work">{work.map(j=><article className="space-job" key={j.id}><div><h3>{j.company}</h3><span>{j.dates}</span></div><b>{j.role}</b><p>{j.context}</p><details><summary>My contributions</summary><ul>{j.points.map(p=><li key={p}>{p}</li>)}</ul></details><p className="job-stack">{j.stack.join(' / ')}</p>{j.website&&<a href={j.website} target="_blank" rel="noreferrer">Visit the Esca teaser site &rarr;</a>}</article>)}</Panel>
<Panel title="Marven's project space (Top 4)" id="top4"><p className="panel-intro">Projects I contributed to as part of a team.</p><div className="friends-grid">{projects.slice(0,4).map((p,i)=><article className="friend" key={p.title}><h3>{p.title}</h3><TvImage src={'/images/'+images[i]} alt={p.title+' project image'} href={p.link} label={`View ${p.title} on GitHub`} channel={i+1}/><p>{p.summary}</p></article>)}</div><a className="all-projects" href={links.github}>View my projects on GitHub &rarr;</a></Panel>
<Panel title="Marven's blurbs" id="about"><h3>About me:</h3>{about.paragraphs.map(p=><p key={p}>{p}</p>)}<h3 id="who">Who I'd like to work with:</h3><p>Teams shipping useful software, with code review, shared ownership and room to grow.</p></Panel>
<Panel title="How consistently I code" id="coding"><CodingActivity/></Panel>
</div></div></div>}
