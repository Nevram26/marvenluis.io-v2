import {links} from "../content/site";
export default function Closing(){return <footer className="space-footer" id="contact"><p>Thanks for stopping by.</p><div><a href={links.email}>Email me</a><a href={links.github}>GitHub</a><a href={links.linkedin}>LinkedIn</a><a href={links.resume}>Read my resume</a></div><small>Marven Luis / {new Date().getFullYear()}</small></footer>}
