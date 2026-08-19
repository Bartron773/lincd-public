# Linc(d) — Public Context OS Template

A stateful, evolving intelligence layer that grows with the user. This is the **public-safe** template of Linc(d) — no personal data, no API keys, no location leaks.

Live demo: `https://simplemindsstudios.com/lincd/` (deploy this folder to GitHub Pages)

## What it is

- **Stateful vs Stateless**: Unlike chatbots that forget after session, Linc(d) tracks facts → habits with persistent memory.
- **4-Part Memory**: Working / Episodic / Procedural / Semantic — tracks facts to habits.
- **Continuous Cognitive Loop**: Perception → Integration → Inference → Adaptation
- **Cognitive States**: Exploratory / Execution / Overload detection
- **Cognitive Compiler**: Transforms thoughts & data into Reports, Slide Decks, Podcasts, Scripts.

## Deep Link Layer — App First, Web Fallback

Every gateway tries the native app scheme first, then opens web if not installed.

```js
function openSmartLink(appSchemeUrl, webUrl){
  try{
    const start = Date.now();
    window.location.href = appSchemeUrl;
    setTimeout(()=>{
      if(document.visibilityState==='visible' && Date.now()-start < 2000){
        window.open(webUrl,'_blank','noopener');
      }
    },800);
  }catch{
    window.open(webUrl,'_blank','noopener');
  }
}
```

### Included gateways (10+)

**AI Studio (6)**
- ChatGPT: `chatgpt://` → https://chatgpt.com/
- Claude: `claude://open` → https://claude.ai/
- Gemini: `googlegemini://` → https://gemini.google.com/
- Perplexity: `perplexity://` → https://www.perplexity.ai/
- Meta AI: `metaai://` → https://www.meta.ai/
- Grok: `grok://` → https://grok.com/

**Social / Media / Maps (10) — placeholder content**
Use the search box: type `nasa`, `verge`, `architecture` — all links rebuild live.

- Instagram: `instagram://user?username={q}` → instagram.com/{q}
- X: `twitter://user?screen_name={q}` → x.com/{q}
- Threads: `barcelona://user?username={q}` → threads.net/@{q}
- YouTube: `youtube://` search → youtube.com/results?search_query={q}
- Reddit: `reddit://r/{q}` → reddit.com/r/{q}
- Apple Music: `music://` → music.apple.com/search
- Spotify: `spotify://search/{q}` → open.spotify.com/search/{q}
- TikTok: `tiktok://user?username={q}` → tiktok.com/@{q}
- LinkedIn: `linkedin://in/{q}` → linkedin.com/in/{q}
- Maps: `comgooglemaps://?q={q}` + `maps://?q={q}` → maps.apple.com / google.com/maps

No personal usernames committed. Replace `{q}` with your own handles in your private fork (kept in localStorage, not repo).

## How to fork for your own Linc(d)

1. Fork this repo
2. Edit `index.html` → `PUBLIC_PROFILE` object:
```js
const PUBLIC_PROFILE = {
  primaryNeed: "meaning-preserving structure",
  primaryModes: ["Reflective Strategist", ...],
  operatingNeeds: ["autonomy", "aesthetic coherence", ...],
}
```
3. Edit `SERVICES` config for your gateways:
```js
{ id: "instagram", app: "instagram://user?username=YOUR_HANDLE", web: "https://instagram.com/YOUR_HANDLE" }
```
4. DO NOT commit:
- Personal usernames, emails, locations
- API keys, tokens
- Device IDs, private media URLs
5. Push to `main` → Settings → Pages → Deploy from main / root

Private overlay pattern: Keep a `config.private.js` in `.gitignore` that merges into public config at runtime via localStorage. Never commit it.

## File structure
```
/lincd/
  index.html  — single file, <150KB, no build step
  README.md   — this file
  config.example.js — optional example for private overlay
```

## Privacy
- Kernel: Lincd_Public_v1
- Mode: Guest Safe
- Privacy: User-Owned by Default
- No external API calls in public demo — search bar filters locally.

© Simple Minds Studios — MIT for public template.
