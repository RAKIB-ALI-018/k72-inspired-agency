# K72 Inspired Agency Website

A fully animated creative agency website built with **React, Vite, Tailwind CSS, and GSAP**, inspired by the design and motion language of [K72](https://k72.ca/) — an award-winning Canadian creative agency.

This project was built as a learning exercise to explore advanced scroll-based animations, custom page transitions, and interactive navigation patterns in React.

---

## 🔗 Live Demo

https://k72-website-dwza.onrender.com



---

## ✨ Features

- **Fullscreen animated navigation** with staggered link reveal and infinite marquee hover effects
- **Custom page transitions** using a `Stair` component for smooth route changes
- **Scroll-triggered animations** powered by GSAP ScrollTrigger (sticky-based image cycling, scroll-linked reveals)
- **Multi-page routing** — Home, Agence, and Projects pages using React Router
- **Responsive scroll-card reveal animations** on the Projects page
- **Context API** for global navigation state management

---

## 🛠️ Tech Stack

- **React** — component-based UI
- **Vite** — fast build tooling and dev server
- **Tailwind CSS** — utility-first styling
- **GSAP** (GreenSock Animation Platform) — animations
- **@gsap/react** (`useGSAP` hook) — GSAP + React integration
- **ScrollTrigger** — scroll-based animation control
- **React Router DOM** — client-side routing

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── Common/
│   │   └── Stair.jsx           # Page transition component
│   ├── Context/
│   │   └── NavContext.jsx      # Navbar open/close state
│   ├── Navigation/
│   │   ├── Navbar.jsx
│   │   ├── Navbar2.jsx
│   │   └── FullScreenNav.jsx   # Fullscreen animated menu
│   └── Cards.jsx/
│       └── CardsStructure.jsx
├── Pages/
│   ├── Home.jsx
│   ├── Agence.jsx              # Scroll-pinned/sticky image + team section
│   └── Projects.jsx            # Scroll-triggered card reveal animations
├── App.jsx
└── main.jsx
```

---



## 🎯 What I Learned

- Debugging GSAP ScrollTrigger `pin` conflicts with absolutely positioned elements, and switching to sticky-based scroll animations for more reliable behavior
- Managing GSAP timelines with `useRef` for reversible open/close animations
- Handling React Router navigation alongside GSAP exit/enter transitions
- Structuring global state with React Context for cross-component UI control (e.g., nav open/close)
- Fixing common `z-index`, `pointer-events`, and event bubbling issues in interactive hover-based UI components

---

## 🙏 Acknowledgements

- Design and animation direction inspired by [K72](https://k72.ca/)
- GSAP concepts learned with help from [this tutorial](https://www.youtube.com/watch?v=NjqjakgPL84) by [Sarthak Sharma](https://www.linkedin.com/in/sarthack-sharma/)

---

## 📄 License

This project is for educational and portfolio purposes only. All design inspiration credit goes to K72 (k72.ca). Not intended for commercial use.

---

## 👤 Author

**Rakib Ali**
- GitHub: [@RAKIB-ALI-018](https://github.com/RAKIB-ALI-018)
- LinkedIn: [Rakib Ali](https://www.linkedin.com/in/rakib-ali-a3366032a/)
