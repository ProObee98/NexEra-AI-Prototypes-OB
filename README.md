# NexEra AI Prototypes

Two AI-powered interactive prototypes built for NexEra's human training platform.

---

## Live Demos

- **Test 1 - 3D Asset Generator:** https://genuine-snickerdoodle-20089a.netlify.app/test1
- **Test 2 - Avatar Controller:** https://chic-biscochitos-3bc652.netlify.app/

---

## Prototype 1 — AI-Generated 3D Asset Pipeline

**URL:** `/test1`

The user types a description (e.g. "hard hat", "fire extinguisher") and the system:
1. Searches Sketchfab for a matching 3D model
2. Displays the model in an interactive 3D viewer
3. Uses Groq AI to generate a 2-sentence educational summary

**Tech Stack:**
- React + Vite
- Sketchfab API (3D model search and embed)
- Groq AI / LLaMA 3.3 (educational summary generation)

---

## Prototype 2 — Natural Language Avatar Animation

**URL:** `/`

The user types a command (e.g. "wave hello", "walk to the table") and the system:
1. Sends the command to Groq AI
2. AI picks the best matching animation
3. Avatar plays the animation with a smooth transition
4. AI explanation is shown on screen

**Tech Stack:**
- React + Vite
- Three.js / React Three Fiber
- Mixamo animations (FBX)
- Groq AI / LLaMA 3.3 (command interpretation)

---

## Project Structure
```
nexera-ai-prototypes/
  public/
    models/
      avatar.fbx        # Mixamo character
    animations/
      idle.fbx
      walk.fbx
      wave.fbx
      point.fbx
      salute.fbx
      safety.fbx
    _redirects          # Netlify routing
  src/
    pages/
      Test1.jsx         # 3D Asset Pipeline
      Test2.jsx         # Avatar Animation Controller
    App.jsx             # Routing
    main.jsx            # Entry point
  .env                  # API keys (not committed)
  README.md
```

---

## Setup Instructions

1. Clone the repo:
```
git clone https://github.com/ProObee98/NexEra-AI-Prototypes-OB.git
```

2. Install dependencies:
```
npm install
```

3. Create a `.env` file in the root folder:
```
VITE_GROQ_API_KEY=your_groq_key_here
VITE_SKETCHFAB_KEY=your_sketchfab_key_here
```

4. Run the dev server:
```
npm run dev
```

---

## APIs Used

| API | Purpose |
|-----|---------|
| Groq (LLaMA 3.3) | AI reasoning — animation selection and educational summaries |
| Sketchfab | 3D model search and embed viewer |
| Mixamo | Character animations (FBX format) |

---

## Limitations & Next Steps

**Current limitations:**
- Sketchfab search returns closest match, not always exact object
- Animation library limited to 6 preset animations
- API keys hardcoded for demo purposes

**Next steps for NexEra platform:**
- Add image upload support for Test 1 (vision AI to identify object)
- Expand animation library with procedural generation
- Store generated assets in cloud storage with caching
- Add backend proxy to secure API keys properly
- Add user authentication and session history

---

## Author

Built by Obakeng Daniel Mahlwana for NexEra AI Engineering Assessment