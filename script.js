body {
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #222;
  overflow-x: hidden;
  min-height: 100vh;
}

/* Fundo animado */
.bg-animation {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(-45deg, #00c3ff, #ffff1c, #ff00da, #00ffad, #ff3c00);
  background-size: 400% 400%;
  animation: gradientMove 12s ease-in-out infinite;
}

@keyframes gradientMove {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}

header {
  text-align: center;
  padding: 2rem 1rem 1rem 1rem;
}

nav {
  margin-top: 0.8rem;
}
nav a {
  margin: 0 0.5rem;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  transition: background 0.3s;
}
nav .discord { background: #5865f2; }
nav .discord:hover { background: #404eed; }
nav .youtube { background: #ff0000; }
nav .youtube:hover { background: #cc0000; }

.sobre {
  max-width: 800px;
  margin: 2rem auto;
  background: rgba(255,255,255,0.82);
  border-radius: 14px;
  box-shadow: 0 5px 28px rgba(0,0,0,0.17);
  padding: 2rem;
}

.galeria {
  max-width: 900px;
  margin: 3rem auto;
  text-align: center;
  background: rgba(255,255,255,0.85);
  border-radius: 14px;
  box-shadow: 0 5px 28px rgba(0,0,0,0.16);
  padding: 2rem;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 1.5rem;
}

.image-card {
  opacity: 0;
  transform: scale(0.7) translateY(30px);
  transition: all 0.7s cubic-bezier(.68,-0.55,.27,1.55);
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 12px rgba(0,0,0,0.12);
  padding: 1rem;
}
.image-card.active {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.image-card img {
  max-width: 180px;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  background: #eee;
}

.image-card .caption {
  font-size: 1rem;
  color: #2c2c2c;
}

#verMais {
  margin-top: 2rem;
  padding: 0.8rem 2.2rem;
  font-size: 1.1rem;
  background: #00c3ff;
  color: #fff;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  transition: background 0.2s;
}
#verMais:hover {
  background: #0090d0;
}

footer {
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 0;
  background: rgba(255,255,255,0.65);
  border-top: 2px solid #eee;
}
