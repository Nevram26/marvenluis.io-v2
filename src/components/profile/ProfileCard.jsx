import {useEffect,useRef} from "react";
import {profile} from "../../content/site";
import {startNowPlaying} from "../../lib/nowPlaying";
export default function ProfileCard({compact=false}) {
 const ref=useRef(null);
 useEffect(()=>{if(!ref.current)return;const panel=ref.current;const ctrl=startNowPlaying(panel);let stopped=false;import(/* @vite-ignore */ new URL("/assets/ui/ui.js",window.location.origin).href).then(ui=>{if(!stopped)ui.pausable(panel,ctrl);}).catch(()=>ctrl.pause());return ()=>{stopped=true;ctrl.pause();panel.querySelector(".loop-pause")?.remove();};},[]);
 return <div className={`ui profile-card ${compact ? "profile-card--compact" : ""}`}><div className="profile-card__header"><span className="mark" data-mark="stack" aria-hidden="true"/><strong>Marven Luis</strong></div><p className="profile-status">{profile.status}</p>{profile.bands.length>0 && <div ref={ref} className="now-playing"><b>Now playing</b><div className="playing-bars" aria-hidden="true">{Array.from({length:5},(_,i)=><i key={i}/>)}</div><ul>{profile.bands.map(b=><li key={b}>{b}</li>)}</ul></div>}<dl className="profile-details">{profile.details.slice(0,compact?0:6).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>;
}