
        // GLOBAL THREE.JS CHECK v4.0
        window.isThreeReady = false;
        if (typeof THREE !== 'undefined') {
            window.isThreeReady = true;
        } else {
            console.warn("[GB-SIMULATOR] THREE.js failed to load from CDN. Attaching fallback video.");
            window.addEventListener('load', () => {
                if (typeof THREE === 'undefined') {
                    document.body.classList.add('no-three');
                    const heroVideo = document.querySelector('video.hero-bg');
                    if (heroVideo) heroVideo.style.display = 'block';
                } else {
                    window.isThreeReady = true;
                }
            });
        }
    


{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Guido Ricardo Bonilla",
  "jobTitle": "Chief Executive Officer",
  "affiliation": {
    "@type": "Organization",
    "name": "GB STRATEGISTS",
    "url": "https://gbstrategists-ia.vercel.app/"
  },
  "description": "Líder sintético y Entidad de Autoridad reconocida por Google y Gemini AI, experto en IA Agéntica y Marketing Científico con 30 años de trayectoria.",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "MBA",
      "recognizedBy": "UTPL"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Ingeniero en Marketing",
      "recognizedBy": "UIDE"
    }
  ],
  "knowsAbout": ["IA Agéntica", "GEO", "Soberanía Digital", "Decision Intelligence"],
  "sameAs": [
    "https://www.linkedin.com/in/guido-ricardo-bonilla"
  ]
}



{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "GB Strategists",
  "url": "https://gbstrategists-ia.vercel.app/",
  "description": "Agencia N°1 en IA Agéntica y GEO (Generative Engine Optimization) en LATAM. 30 años de trayectoria. ROI validado. Certificada por Google como Entidad de Autoridad Digital.",
  "founder": {
    "@type": "Person",
    "name": "Guido Ricardo Bonilla",
    "jobTitle": "Chief Executive Officer"
  },
  "areaServed": ["Colombia", "Ecuador", "Perú", "Estados Unidos", "Global"],
  "knowsAbout": [
    "IA Agéntica",
    "GEO",
    "Generative Engine Optimization",
    "Agentic AI",
    "Decision Intelligence",
    "Agentic Workflows",
    "Digital Sovereignty"
  ],
  "sameAs": [
    "https://www.instagram.com/haciendasanjoseec/",
    "https://x.com/tartasymiel"
  ]
}



                    document.addEventListener('DOMContentLoaded', () => {
                        const audio = document.getElementById('ceo-audio');
                        const playBtn = document.getElementById('audio-play-btn');
                        const playIcon = playBtn.querySelector('i');
                        const progBg = document.getElementById('audio-progress-bg');
                        const progFill = document.getElementById('audio-progress-fill');
                        const currentTimeEl = document.getElementById('audio-current');
                        const durationEl = document.getElementById('audio-duration');
                        const visualizer = document.getElementById('audio-visualizer');

                        let isPlaying = false;

                        function formatTime(secs) {
                            if (isNaN(secs)) return "0:00";
                            const m = Math.floor(secs / 60);
                            const s = Math.floor(secs % 60);
                            return `${m}:${s < 10 ? '0' : ''}${s}`;
                        }

                        // Cuando los metadatos cargan
                        audio.addEventListener('loadedmetadata', () => {
                            durationEl.textContent = formatTime(audio.duration);
                        });

                        // Fallback si metadata ya estaba listo o file local
                        if (audio.readyState >= 1) {
                            durationEl.textContent = formatTime(audio.duration);
                        }

                        playBtn.addEventListener('click', () => {
                            if (isPlaying) {
                                audio.pause();
                            } else {
                                audio.play().catch(e => console.log('Autoplay prevent or file issue: ', e));
                            }
                        });

                        audio.addEventListener('play', () => {
                            isPlaying = true;
                            playIcon.classList.remove('fa-play');
                            playIcon.classList.add('fa-pause');
                            visualizer.classList.add('playing');
                        });

                        audio.addEventListener('pause', () => {
                            isPlaying = false;
                            playIcon.classList.remove('fa-pause');
                            playIcon.classList.add('fa-play');
                            visualizer.classList.remove('playing');
                        });

                        audio.addEventListener('timeupdate', () => {
                            const current = audio.currentTime;
                            const duration = audio.duration;
                            currentTimeEl.textContent = formatTime(current);
                            if (duration) {
                                const percent = (current / duration) * 100;
                                progFill.style.width = percent + '%';
                            }
                        });

                        audio.addEventListener('ended', () => {
                            isPlaying = false;
                            playIcon.classList.remove('fa-pause');
                            playIcon.classList.add('fa-play');
                            visualizer.classList.remove('playing');
                            progFill.style.width = '0%';
                            currentTimeEl.textContent = '0:00';
                            audio.currentTime = 0;
                        });

                        progBg.addEventListener('click', (e) => {
                            const rect = progBg.getBoundingClientRect();
                            const clickX = e.clientX - rect.left;
                            const percent = clickX / rect.width;
                            if (audio.duration) {
                                audio.currentTime = percent * audio.duration;
                            }
                        });
                    });
                


                    (function () {
                        const ttData = {
                            'tt-academica': {
                                title: '🎓 Excelencia Académica y Rigor Científico',
                                body: `<strong>Mejor estudiante de su promoción</strong> en Ingeniería en Marketing (UIDE) y <strong>MBA por la UTPL</strong>. Transforma la intuición en decisiones basadas en modelos estadísticos y gobernanza corporativa de largo plazo.`
                            },
                            'tt-liderazgo': {
                                title: '🚀 Liderazgo Ejecutivo y Evolución Orgánica',
                                body: `<strong>30 años de trayectoria orgánica</strong> en telecomunicaciones, textil y consultoría. Como CEO de GB Strategists, es un <strong>arquitecto de sistemas complejos</strong> que convierte la gestión en ventaja competitiva real.`
                            },
                            'tt-ia': {
                                title: '🤖 Vanguardia en IA Agéntica y Ciencia de Datos',
                                body: `<strong>Pionero en IA Agéntica</strong>: sistemas proactivos que razonan y actúan de forma autónoma. Su filosofía de <strong>"IA para el aumento humano"</strong> libera talento creativo eliminando tareas repetitivas.`
                            },
                            'tt-etica': {
                                title: '🕊️ Ética Humanista y Reconocimiento Global',
                                body: `<strong>Coach Internacional certificado por la Cruz Roja Americana</strong> (Washington D.C.) y ganador del premio <strong>Voluntario del Año</strong>. Garantiza una IA libre de sesgos con el bienestar humano como eje central.`
                            },
                            'tt-geo': {
                                title: '🌐 Entidad de Autoridad Digital Validada',
                                body: `Google lo reconoce formalmente como <strong>"Entidad de Autoridad"</strong> en su Grafo de Conocimiento. Estatus basado en <strong>E-E-A-T</strong> (Experiencia, Conocimiento, Autoridad y Confianza), el estándar más alto de relevancia digital.`
                            },
                            'tt-sintetico': {
                                title: '🎯 Liderazgo Sintético: Fusión de Disciplinas',
                                body: `Combina en un solo perfil: <strong>precisión de la ingeniería</strong>, visión del MBA, potencia de la ciencia de datos y <strong>ética del coaching humanista</strong>. El resultado: estrategias resilientes para entornos de alta volatilidad.`
                            }
                        };

                        const tooltip = document.getElementById('ceo-tooltip');
                        const ttTitle = document.getElementById('tt-title-text');
                        const ttBody = document.getElementById('tt-body-text');
                        let hideTimer = null;

                        function showTooltip(e, moduleEl) {
                            const id = moduleEl.getAttribute('data-tt-id');
                            const data = ttData[id];
                            if (!data) return;

                            clearTimeout(hideTimer);
                            ttTitle.textContent = data.title;
                            ttBody.innerHTML = data.body;
                            tooltip.classList.add('visible');
                            positionTooltip(e);
                        }

                        function positionTooltip(e) {
                            const tw = tooltip.offsetWidth || 360;
                            const th = tooltip.offsetHeight || 180;
                            let x = e.clientX + 18;
                            let y = e.clientY - th / 2;

                            if (x + tw > window.innerWidth - 10) x = e.clientX - tw - 18;
                            if (y < 10) y = 10;
                            if (y + th > window.innerHeight - 10) y = window.innerHeight - th - 10;

                            tooltip.style.left = x + 'px';
                            tooltip.style.top = y + 'px';
                        }

                        function hideTooltip() {
                            hideTimer = setTimeout(() => tooltip.classList.remove('visible'), 120);
                        }

                        document.querySelectorAll('.comp-module, .nav-link-elite').forEach(mod => {
                            mod.addEventListener('mouseenter', e => {
                                showTooltip(e, mod);
                                if (mod.classList.contains('nav-link-elite')) {
                                    if (window.dot) window.dot.classList.add('verified');
                                }
                            });
                            mod.addEventListener('mousemove', e => positionTooltip(e));
                            mod.addEventListener('mouseleave', () => {
                                hideTooltip();
                                if (window.dot) window.dot.classList.remove('verified');
                            });
                        });
                    })();
                


                    (function () {
                        /* ── PARTICLE ENGINE ── */
                        const cvs = document.getElementById('qsParticles');
                        const plate = cvs ? cvs.parentElement : null;
                        if (cvs && plate) {
                            const ctx = cvs.getContext('2d');
                            const resize = () => { cvs.width = plate.offsetWidth; cvs.height = plate.offsetHeight; };
                            resize();
                            window.addEventListener('resize', resize);

                            const GOLD = [228, 168, 55];
                            const CYAN = [36, 168, 225];
                            const pts = Array.from({ length: 42 }, () => ({
                                x: Math.random() * cvs.width,
                                y: Math.random() * cvs.height,
                                r: 0.4 + Math.random() * 1.4,
                                vx: (Math.random() - 0.5) * 0.28,
                                vy: -0.15 - Math.random() * 0.3,
                                a: Math.random(),
                                da: 0.003 + Math.random() * 0.006,
                                c: Math.random() < 0.6 ? GOLD : CYAN
                            }));

                            (function loop() {
                                requestAnimationFrame(loop);
                                ctx.clearRect(0, 0, cvs.width, cvs.height);
                                pts.forEach(p => {
                                    p.a += p.da;
                                    if (p.a > 1 || p.a < 0) p.da *= -1;
                                    p.x += p.vx; p.y += p.vy;
                                    if (p.y < -4) { p.y = cvs.height + 4; p.x = Math.random() * cvs.width; }
                                    if (p.x < -4) p.x = cvs.width + 4;
                                    if (p.x > cvs.width + 4) p.x = -4;
                                    ctx.beginPath();
                                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                                    const [r, g, b] = p.c;
                                    ctx.fillStyle = `rgba(${r},${g},${b},${p.a * 0.7})`;
                                    ctx.shadowBlur = 6;
                                    ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
                                    ctx.fill();
                                    ctx.shadowBlur = 0;
                                });
                            })();
                        }

                        /* ── INTERSECTION REVEAL ── */
                        const sigImg = document.getElementById('ceoSignatureImg');
                        const sigLine = document.getElementById('ceoSigUnderline');
                        if (!sigImg) return;
                        const obs = new IntersectionObserver(entries => {
                            entries.forEach(e => {
                                if (e.isIntersecting) {
                                    sigImg.classList.add('drawn');
                                    if (sigLine) sigLine.classList.add('drawn');
                                    obs.unobserve(sigImg);
                                }
                            });
                        }, { threshold: 0.5 });
                        obs.observe(sigImg);
                    })();
                


            (function () {
                if (!window.isThreeReady) return;
                const container = document.getElementById('agenticCoreContainer');
                const canvas = document.getElementById('agenticCoreCanvas');
                if (!container || !canvas) return;

                const w = container.clientWidth;
                const h = container.clientHeight;

                const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
                renderer.setSize(w, h);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                renderer.setClearColor(0x050b16, 0.0);

                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 200);
                camera.position.set(0, 0, 18);

                // ── Luz ambiental ──
                scene.add(new THREE.AmbientLight(0xffffff, 0.15));
                const pointGold = new THREE.PointLight(0xE4A837, 2.5, 40);
                pointGold.position.set(0, 0, 8);
                scene.add(pointGold);
                const pointCyan = new THREE.PointLight(0x24A8E1, 1.8, 40);
                pointCyan.position.set(6, 4, -4);
                scene.add(pointCyan);

                // ── ICOSAEDRO (Núcleo Humano) — Ocre Dorado ──
                const icoGeo = new THREE.IcosahedronGeometry(3.2, 1);
                const icoMat = new THREE.MeshPhongMaterial({
                    color: 0xE4A837,
                    emissive: 0xE4A837,
                    emissiveIntensity: 0.18,
                    wireframe: false,
                    transparent: true,
                    opacity: 0.22,
                    side: THREE.DoubleSide
                });
                const icoWireMat = new THREE.MeshBasicMaterial({
                    color: 0xE4A837,
                    wireframe: true,
                    transparent: true,
                    opacity: 0.55
                });
                const ico = new THREE.Mesh(icoGeo, icoMat);
                const icoWire = new THREE.Mesh(icoGeo.clone(), icoWireMat);
                scene.add(ico);
                scene.add(icoWire);

                // Glow inner sphere
                const glowGeo = new THREE.SphereGeometry(2.6, 32, 32);
                const glowMat = new THREE.MeshPhongMaterial({
                    color: 0xE4A837, emissive: 0xE4A837, emissiveIntensity: 0.4,
                    transparent: true, opacity: 0.07
                });
                scene.add(new THREE.Mesh(glowGeo, glowMat));

                // ── TORUS KNOT (Sistema IA) — Azul Cian ──
                const tkGeo = new THREE.TorusKnotGeometry(5.8, 0.28, 180, 14, 3, 5);
                const tkMat = new THREE.MeshPhongMaterial({
                    color: 0x24A8E1,
                    emissive: 0x24A8E1,
                    emissiveIntensity: 0.72,
                    wireframe: false,
                    transparent: true,
                    opacity: 0.72,
                    shininess: 220
                });
                const tk = new THREE.Mesh(tkGeo, tkMat);
                scene.add(tk);

                // ── Partículas orbitales ──
                const pGeo = new THREE.BufferGeometry();
                const pCount = 280;
                const pPos = new Float32Array(pCount * 3);
                const pColors = new Float32Array(pCount * 3);
                for (let i = 0; i < pCount; i++) {
                    const r = 6 + Math.random() * 4;
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
                    pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                    pPos[i * 3 + 2] = r * Math.cos(phi);
                    // Alterna gold / cyan
                    if (i % 2 === 0) { pColors[i * 3] = 0.894; pColors[i * 3 + 1] = 0.659; pColors[i * 3 + 2] = 0.216; }
                    else { pColors[i * 3] = 0.141; pColors[i * 3 + 1] = 0.659; pColors[i * 3 + 2] = 0.882; }
                }
                pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
                pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
                const pMat = new THREE.PointsMaterial({
                    size: 0.14, vertexColors: true, transparent: true,
                    opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false
                });
                const particleSystem = new THREE.Points(pGeo, pMat);
                scene.add(particleSystem);

                // ── Interactividad mouse ──
                let tX = 0, tY = 0;
                document.addEventListener('mousemove', e => {
                    tX = (e.clientX / window.innerWidth - 0.5) * 0.9;
                    tY = (e.clientY / window.innerHeight - 0.5) * 0.9;
                });

                // ── Responsive ──
                window.addEventListener('resize', () => {
                    const nw = container.clientWidth;
                    const nh = container.clientHeight;
                    camera.aspect = nw / nh;
                    camera.updateProjectionMatrix();
                    renderer.setSize(nw, nh);
                });

                // ── RENDER LOOP 60 FPS ──
                const clock = new THREE.Clock();
                (function loop() {
                    requestAnimationFrame(loop);
                    const t = clock.getElapsedTime();

                    // Fibonacci-spiral rotation ratios
                    ico.rotation.x = t * 0.18;
                    ico.rotation.y = t * 0.29;
                    icoWire.rotation.x = t * 0.18;
                    icoWire.rotation.y = t * 0.29;

                    tk.rotation.x = t * 0.11;
                    tk.rotation.y = t * 0.07;
                    tk.rotation.z = t * 0.14;

                    particleSystem.rotation.y = t * 0.04;
                    particleSystem.rotation.x = t * 0.02;

                    // Spring-lerp camera reacting to mouse (lag 0.1s)
                    camera.position.x += (tX * 4 - camera.position.x) * 0.1;
                    camera.position.y += (-tY * 3 - camera.position.y) * 0.1;
                    camera.lookAt(0, 0, 0);

                    // Neon glow pulse
                    const pulse = Math.sin(t * 2.1) * 0.5 + 0.5;
                    pointGold.intensity = 2.2 + pulse * 1.6;
                    pointCyan.intensity = 1.5 + (1 - pulse) * 1.4;

                    renderer.render(scene, camera);
                })();
            })();
        


            (function () {
                const frame = document.getElementById('ceoPhotoFrame');
                const photo = document.getElementById('ceoMainPhoto');
                const canvas = document.getElementById('ceoParticlesCanvas');
                if (!frame || !photo || !canvas) return;

                // ── PARALLAX SUAVE (mouse-tracking) ──────────────────────
                let mouseX = 0, mouseY = 0;
                let currX = 0, currY = 0;

                frame.addEventListener('mousemove', (e) => {
                    const r = frame.getBoundingClientRect();
                    mouseX = ((e.clientX - r.left) / r.width - 0.5) * 2;
                    mouseY = ((e.clientY - r.top) / r.height - 0.5) * 2;
                });
                frame.addEventListener('mouseleave', () => {
                    mouseX = 0; mouseY = 0;
                });

                // ── SHIMMER PARTICLES ENGINE ──────────────────────────────
                const ctx = canvas.getContext('2d');
                const particles = [];
                const PARTICLE_COUNT = 55;

                function resize() {
                    canvas.width = frame.offsetWidth;
                    canvas.height = frame.offsetHeight;
                }
                resize();
                window.addEventListener('resize', resize);

                const COLORS = ['rgba(36,168,225,', 'rgba(228,168,55,', 'rgba(240,244,248,'];

                for (let i = 0; i < PARTICLE_COUNT; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        r: 0.8 + Math.random() * 2.2,
                        vx: (Math.random() - 0.5) * 0.35,
                        vy: -0.3 - Math.random() * 0.5,    // deriva hacia arriba
                        alpha: Math.random(),
                        da: 0.004 + Math.random() * 0.008,
                        color: COLORS[Math.floor(Math.random() * COLORS.length)],
                        phase: Math.random() * Math.PI * 2
                    });
                }

                let tick = 0;
                function animateParticles() {
                    requestAnimationFrame(animateParticles);
                    tick += 0.016;

                    // spring-lerp del parallax
                    currX += (mouseX - currX) * 0.06;
                    currY += (mouseY - currY) * 0.06;
                    photo.style.transform =
                        `translate(${currX * 10}px, ${currY * 7}px) scale(1.06)`;

                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    particles.forEach(p => {
                        // oscilación sinusoidal lateral (orgánica)
                        p.x += p.vx + Math.sin(tick + p.phase) * 0.18;
                        p.y += p.vy;

                        // fade in/out
                        p.alpha += p.da;
                        if (p.alpha > 1 || p.alpha < 0) {
                            p.da = -p.da;
                            p.alpha = Math.max(0, Math.min(1, p.alpha));
                        }

                        // recycle cuando sale del frame
                        if (p.y < -10) {
                            p.y = canvas.height + 10;
                            p.x = Math.random() * canvas.width;
                            p.alpha = 0;
                        }
                        if (p.x < -10 || p.x > canvas.width + 10) {
                            p.x = Math.random() * canvas.width;
                        }

                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                        ctx.fillStyle = p.color + p.alpha + ')';
                        ctx.fill();
                    });
                }
                animateParticles();
            })();
        


        (function() {
            if (!window.isThreeReady) return;

            // ── SETUP ──────────────────────────────────────────────
            const isMobile = window.innerWidth < 768;
            const container = document.getElementById('digital-void-canvas');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = isMobile ? 22 : 18;

            const renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true,
                powerPreference: 'high-performance'
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Gestión de pérdida de contexto WebGL
            renderer.domElement.addEventListener('webglcontextlost', (e) => {
                e.preventDefault();
                console.warn('[GB-ARMILAR] WebGL context lost.');
            }, false);
            renderer.domElement.addEventListener('webglcontextrestored', () => {
                console.log('[GB-ARMILAR] WebGL context restored.');
                animate();
            }, false);

            const GOLD = 0xE4A837;
            const CYAN = 0x24A8E1;
            const VOID = 0x050B16;

            // Parámetros responsive
            const ringRadius      = isMobile ? 4.5 : 5.5;
            const ringTube        = isMobile ? 0.10 : 0.12;
            const nodeCount       = isMobile ? 8 : 20;
            const particleCount   = isMobile ? 150 : 300;
            const nodeSpreadBase  = 18;

            // ── GRUPO CENTRAL ──────────────────────────────────────
            const armillaryGroup = new THREE.Group();
            scene.add(armillaryGroup);

            // 1. ESFERA SÓLIDA INTERIOR
            const sphereGeo = new THREE.SphereGeometry(4, 48, 48);
            const sphereMat = new THREE.MeshPhysicalMaterial({
                color: VOID,
                metalness: 0.9,
                roughness: 0.1,
                transmission: 0.3,
                thickness: 2.0,
                emissive: CYAN,
                emissiveIntensity: 0.3
            });
            const innerSphere = new THREE.Mesh(sphereGeo, sphereMat);
            armillaryGroup.add(innerSphere);

            // 2. ANILLOS ORBITALES (TorusGeometry)
            const ringMat = new THREE.MeshPhysicalMaterial({
                color: GOLD,
                metalness: 1.0,
                roughness: 0.1,
                emissive: GOLD,
                emissiveIntensity: 0.4
            });

            const ring1 = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, ringTube, 24, 128), ringMat.clone());
            ring1.rotation.x = Math.PI / 2; // eje X (horizontal)
            armillaryGroup.add(ring1);

            const ring2 = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, ringTube, 24, 128), ringMat.clone());
            ring2.rotation.y = Math.PI * 60 / 180; // 60°
            armillaryGroup.add(ring2);

            const ring3 = new THREE.Mesh(new THREE.TorusGeometry(ringRadius, ringTube, 24, 128), ringMat.clone());
            ring3.rotation.z = Math.PI * 120 / 180; // 120°
            armillaryGroup.add(ring3);

            // 3. CONECTORES ESTRUCTURALES
            const connectorMat = new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.6 });
            const connectorPairs = [
                [new THREE.Vector3(0, ringRadius, 0),  new THREE.Vector3(0, -ringRadius, 0)],
                [new THREE.Vector3(ringRadius, 0, 0),  new THREE.Vector3(-ringRadius, 0, 0)],
                [new THREE.Vector3(0, 0, ringRadius),  new THREE.Vector3(0, 0, -ringRadius)],
                [new THREE.Vector3(ringRadius * 0.7, ringRadius * 0.7, 0), new THREE.Vector3(-ringRadius * 0.7, -ringRadius * 0.7, 0)]
            ];
            connectorPairs.forEach(([a, b]) => {
                const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
                armillaryGroup.add(new THREE.LineSegments(geo, connectorMat));
            });

            // ── LUCES ──────────────────────────────────────────────
            const innerLight = new THREE.PointLight(CYAN, 8, 20);
            innerLight.position.set(0, 0, 0);
            scene.add(innerLight);

            const outerLight = new THREE.PointLight(GOLD, 15, 50);
            outerLight.position.set(15, 15, 15);
            scene.add(outerLight);

            scene.add(new THREE.AmbientLight(0xffffff, 0.05));

            // ── RED NEURONAL: NODOS SATÉLITE ──────────────────────
            const nodes = [];
            const pulses = [];
            const nodeGeo = new THREE.SphereGeometry(0.2, 12, 12);
            const nodeMat = new THREE.MeshBasicMaterial({ color: CYAN });

            for (let i = 0; i < nodeCount; i++) {
                const node = new THREE.Mesh(nodeGeo, nodeMat);
                const phi   = Math.random() * Math.PI * 2;
                const theta = Math.random() * Math.PI;
                const radius = nodeSpreadBase + Math.random() * 10;
                node.position.setFromSphericalCoords(radius, theta, phi);
                node.userData = {
                    originalPos: node.position.clone(),
                    phase: Math.random() * Math.PI * 2
                };
                scene.add(node);
                nodes.push(node);

                const linePts = [new THREE.Vector3(0,0,0), node.position.clone()];
                const lineGeo = new THREE.BufferGeometry().setFromPoints(linePts);
                const lineMat = new THREE.LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.12 });
                const line = new THREE.Line(lineGeo, lineMat);
                scene.add(line);
                pulses.push(line);
            }

            // ── PARTÍCULAS DE ATMÓSFERA (300 / 150 mobile) ────────
            const partGroup = new THREE.Group();
            const partGeo   = new THREE.SphereGeometry(0.05, 6, 6);
            const partMat   = new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.4 });
            for (let i = 0; i < particleCount; i++) {
                const p = new THREE.Mesh(partGeo, partMat.clone());
                const phi   = Math.random() * Math.PI * 2;
                const theta = Math.random() * Math.PI;
                const r     = 20 + Math.random() * 5;
                p.position.setFromSphericalCoords(r, theta, phi);
                p.userData = { phase: Math.random() * Math.PI * 2, speed: 0.002 + Math.random() * 0.003 };
                partGroup.add(p);
            }
            scene.add(partGroup);

            // ── SPRING PHYSICS ─────────────────────────────────────
            const physics = { scale: 1, targetScale: 1, velScale: 0, k: 0.08, d: 0.75 };
            let mouseX = 0, mouseY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = (e.clientX / window.innerWidth) * 2 - 1;
                mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            });

            // ── ANIMATE ───────────────────────────────────────────
            const clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);
                const t = clock.getElapsedTime();

                // Breathing scale
                physics.targetScale = 0.95 + (Math.sin(t * 0.8) * 0.5 + 0.5) * 0.1;
                const acc = (physics.targetScale - physics.scale) * physics.k;
                physics.velScale += acc;
                physics.velScale *= physics.d;
                physics.scale += physics.velScale;
                armillaryGroup.scale.setScalar(physics.scale);

                // Rotación continua de la esfera
                armillaryGroup.rotation.y += 0.003;
                armillaryGroup.rotation.x += 0.001;

                // Elastic lag mouse
                armillaryGroup.rotation.y += (mouseX * 0.15 - armillaryGroup.rotation.y) * 0.05;
                armillaryGroup.rotation.x += (-mouseY * 0.15 - armillaryGroup.rotation.x) * 0.05;

                // Anillos individuales
                ring1.rotation.z += 0.008;
                ring2.rotation.x += 0.006;
                ring3.rotation.y += 0.005;

                // Pulso del material esfera
                sphereMat.emissiveIntensity = 0.2 + Math.sin(t * 1.2) * 0.15;

                // Nodos satélite
                nodes.forEach((n, idx) => {
                    n.position.x = n.userData.originalPos.x + Math.sin(t + n.userData.phase) * 0.6;
                    n.position.y = n.userData.originalPos.y + Math.cos(t * 0.8 + n.userData.phase) * 0.6;
                    pulses[idx].geometry.setFromPoints([new THREE.Vector3(0,0,0), n.position]);
                    pulses[idx].material.opacity = 0.08 + Math.abs(Math.sin(t * 2 + idx)) * 0.10;
                });

                // Partículas drift
                partGroup.children.forEach((p) => {
                    p.position.y += p.userData.speed;
                    if (p.position.y > 26) p.position.y = -26;
                    p.material.opacity = 0.2 + Math.abs(Math.sin(t + p.userData.phase)) * 0.3;
                });

                renderer.render(scene, camera);
            }

            animate();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                camera.position.z = window.innerWidth < 768 ? 22 : 18;
            });
        })();
    


        (function () {
            if (!window.isThreeReady) return;
            const container = document.getElementById('neuralCoreContainer');
            const canvas = document.getElementById('neuralCoreCanvas');
            if (!container || !canvas) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // GEOMETRÍA DEL NÚCLEO (Holographic Sphere)
            const coreGeometry = new THREE.IcosahedronGeometry(2, 4);
            const coreMaterial = new THREE.MeshPhongMaterial({
                color: 0x24A8E1,
                wireframe: true,
                transparent: true,
                opacity: 0.2,
                emissive: 0x24A8E1,
                emissiveIntensity: 0.5
            });
            const core = new THREE.Mesh(coreGeometry, coreMaterial);
            scene.add(core);

            // NÚCLEO CENTRAL (Glowing Point)
            const sunGeometry = new THREE.SphereGeometry(0.5, 32, 32);
            const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xE4A837 });
            const sun = new THREE.Mesh(sunGeometry, sunMaterial);
            scene.add(sun);

            // NEURAL THREADS (Líneas de Oro y Cian)
            const threadsCount = 50;
            const threads = new THREE.Group();
            for (let i = 0; i < threadsCount; i++) {
                const points = [];
                for (let j = 0; j < 10; j++) {
                    points.push(new THREE.Vector3(
                        (Math.random() - 0.5) * 5,
                        (Math.random() - 0.5) * 5,
                        (Math.random() - 0.5) * 5
                    ));
                }
                const curve = new THREE.CatmullRomCurve3(points);
                const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.01, 8, false);
                const tubeMaterial = new THREE.MeshBasicMaterial({
                    color: Math.random() > 0.5 ? 0x24A8E1 : 0xE4A837,
                    transparent: true,
                    opacity: 0.3
                });
                const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
                threads.add(tube);
            }
            scene.add(threads);

            // LUCES
            const light = new THREE.PointLight(0xFFFFFF, 1, 100);
            light.position.set(5, 5, 5);
            scene.add(light);
            scene.add(new THREE.AmbientLight(0x404040));

            camera.position.z = 6;

            // ANIMACIÓN
            const clock = new THREE.Clock();
            function animateCore() {
                requestAnimationFrame(animateCore);
                const t = clock.getElapsedTime();

                core.rotation.y = t * 0.2;
                core.rotation.z = t * 0.1;
                core.scale.setScalar(1 + Math.sin(t * 2) * 0.05);

                threads.rotation.x = t * 0.1;
                threads.rotation.y = t * 0.05;

                // Pulsos de energía
                threads.children.forEach((child, idx) => {
                    child.material.opacity = 0.1 + Math.sin(t * 2 + idx) * 0.2;
                });

                renderer.render(scene, camera);
            }
            animateCore();

            window.addEventListener('resize', () => {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        })();
    


        (function () {
            if (!window.isThreeReady) return;
            const container = document.getElementById('diamondCoreContainer');
            const canvas = document.getElementById('diamondCanvas');
            if (!container || !canvas) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
            const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            // GEOMETRÍA: OCTAEDRO ESTILIZADO (DIAMANTE)
            const geometry = new THREE.OctahedronGeometry(1.5, 0);
            const material = new THREE.MeshPhysicalMaterial({
                color: 0x050B16,
                metalness: 1.0,
                roughness: 0.02,
                transmission: 0.1,
                transparent: true,
                opacity: 0.95,
                thickness: 2.0,
                clearcoat: 1.0,
                clearcoatRoughness: 0.0,
                emissive: 0xE4A837,
                emissiveIntensity: 0.8
            });
            const diamond = new THREE.Mesh(geometry, material);
            scene.add(diamond);

            // BORDES DEFINIDOS (WIRE)
            const edges = new THREE.EdgesGeometry(geometry);
            const lineMaterial = new THREE.LineBasicMaterial({ color: 0xE4A837, opacity: 0.8, transparent: true });
            const wireframe = new THREE.LineSegments(edges, lineMaterial);
            diamond.add(wireframe);

            // ILUMINACIÓN HDR
            const pointLight = new THREE.PointLight(0x24A8E1, 2, 10);
            pointLight.position.set(2, 2, 2);
            scene.add(pointLight);

            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);

            camera.position.z = 5;

            // ANIMACIÓN DE RESPIRACIÓN (SPRING PHYSICS SIMULADA)
            const clock = new THREE.Clock();

            function animateDiamond() {
                requestAnimationFrame(animateDiamond);
                const t = clock.getElapsedTime();

                // Rotación orgánica
                diamond.rotation.y = Math.sin(t * 0.5) * 0.5;
                diamond.rotation.x = Math.cos(t * 0.3) * 0.2;

                // Pulsación (Breathing)
                const scale = 1 + Math.sin(t * 2) * 0.05;
                diamond.scale.set(scale, scale, scale);

                // Cambio de color emisivo rítmico
                const hue = (Math.sin(t) + 1) * 0.5; // 0 to 1
                // Interpolar entre Gold y Cyan visualmente ajustando intensidad
                material.emissiveIntensity = 0.2 + Math.sin(t * 3) * 0.1;

                renderer.render(scene, camera);
            }
            animateDiamond();
        })();
    


        // MOTOR DE VISUALIZACIÓN DE ÉLITE PTRE-2026
        function createIconEngine(elementId, initFn) {
            if (!window.isThreeReady) return;
            const element = document.getElementById(elementId);
            if (!element) return;

            // Limpiar contenido previo para evitar saturación de memoria (Error 500)
            while (element.firstChild) { element.removeChild(element.firstChild); }

            let canvas = document.createElement('canvas');
            element.appendChild(canvas);

            const rect = element.getBoundingClientRect();
            let width = rect.width || 120;
            let height = rect.height || 120;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
            camera.position.z = 5;

            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                antialias: true,
                alpha: true,
                preserveDrawingBuffer: true
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            initFn(scene, camera, renderer);
        }

        // --- MOTOR UNIFICADO DE CORE NEXUS (GEMINI PRO HIGH) ---
        function createUnifiedNexusCore(scene, camera, renderer, geom, primaryColor, secondaryColor, customConfig = {}) {
            const vaultGroup = new THREE.Group();
            scene.add(vaultGroup);

            const coreMat = customConfig.coreMat || new THREE.MeshPhysicalMaterial({
                color: 0x050B16,
                emissive: 0x050B16,
                metalness: 0.9,
                roughness: 0.05,
                transmission: 0.9,
                transparent: true,
                opacity: 0.8,
                clearcoat: 1.0,
                clearcoatRoughness: 0.1,
                ior: 1.5,
                thickness: 0.5
            });
            const core = new THREE.Mesh(geom, coreMat);
            const coreEdges = new THREE.LineSegments(
                new THREE.EdgesGeometry(geom),
                new THREE.LineBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.6 })
            );
            core.add(coreEdges);
            vaultGroup.add(core);

            const pureLight = new THREE.Mesh(
                new THREE.SphereGeometry(0.08, 16, 16),
                customConfig.pureLightMat || new THREE.MeshBasicMaterial({ color: secondaryColor })
            );
            vaultGroup.add(pureLight);

            const lightColor = customConfig.pointLightColor || secondaryColor;
            const internalLight = new THREE.PointLight(lightColor, customConfig.pointLightIntensity || 2, customConfig.pointLightDistance || 5);
            vaultGroup.add(internalLight);

            function createHexTexture(colorStr) {
                const canvas = document.createElement('canvas');
                canvas.width = 512;
                canvas.height = 64;
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = 'black';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = colorStr;
                ctx.font = 'bold 28px "Fira Code", monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                let hexStr = '';
                for (let i = 0; i < 32; i++) {
                    hexStr += Math.floor(Math.random() * 16).toString(16).toUpperCase() + ' ';
                }
                ctx.fillText(hexStr, canvas.width / 2, canvas.height / 2);
                const tex = new THREE.CanvasTexture(canvas);
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                return tex;
            }

            const hexTex1 = createHexTexture('#E4A837');
            const hexTex2 = createHexTexture('#24A8E1');

            const rings = [];
            for (let i = 0; i < 3; i++) {
                const ringGeom = new THREE.TorusGeometry(1.2 + (i * 0.4), 0.06, 16, 64);
                const isCyan = i % 2 === 0;
                const ringMat = new THREE.MeshPhysicalMaterial({
                    color: 0x050B16,
                    metalness: 1.0,
                    roughness: 0.2,
                    emissiveMap: isCyan ? hexTex2 : hexTex1,
                    emissive: 0xffffff,
                    emissiveIntensity: 0.8
                });
                const ring = new THREE.Mesh(ringGeom, ringMat);
                ring.userData = {
                    baseRadius: 1.2 + (i * 0.4),
                    speedX: (0.005 + Math.random() * 0.005) * (isCyan ? 1 : -1),
                    speedY: (0.005 + Math.random() * 0.005) * (isCyan ? -1 : 1),
                    speedZ: (0.005 + Math.random() * 0.005),
                    texSpeed: (0.005 + Math.random() * 0.01) * (isCyan ? 1 : -1)
                };
                ring.rotation.x = Math.random() * Math.PI;
                ring.rotation.y = Math.random() * Math.PI;
                rings.push(ring);
                vaultGroup.add(ring);
            }

            const ambLight = new THREE.AmbientLight(0xffffff, 0.3);
            scene.add(ambLight);
            const pointL1 = new THREE.PointLight(0x24A8E1, 3, 10);
            pointL1.position.set(3, 3, 3);
            scene.add(pointL1);
            const pointL2 = new THREE.PointLight(0xE4A837, 3, 10);
            pointL2.position.set(-3, -3, -3);
            scene.add(pointL2);

            let mouseOver = false;
            renderer.domElement.addEventListener('mouseenter', () => mouseOver = true);
            renderer.domElement.addEventListener('mouseleave', () => mouseOver = false);

            const clock = new THREE.Clock();
            function animate() {
                requestAnimationFrame(animate);
                const t = clock.getElapsedTime();

                core.rotation.y += 0.002;
                core.rotation.x += 0.001;

                const targetScale = mouseOver ? 0.75 : 1.0;
                rings.forEach(ring => {
                    ring.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
                    ring.rotation.x += ring.userData.speedX;
                    ring.rotation.y += ring.userData.speedY;
                    ring.rotation.z += ring.userData.speedZ;
                    if (ring.material.emissiveMap) {
                        ring.material.emissiveMap.offset.x -= ring.userData.texSpeed * (mouseOver ? 4 : 1);
                    }
                    ring.material.emissiveIntensity = THREE.MathUtils.lerp(
                        ring.material.emissiveIntensity,
                        mouseOver ? 2.5 : 0.8,
                        0.05
                    );
                });

                internalLight.intensity = THREE.MathUtils.lerp(internalLight.intensity, mouseOver ? 8 : 2, 0.05);
                coreEdges.material.opacity = mouseOver ? 1.0 : 0.6;
                renderer.render(scene, camera);
            }
            animate();
        }

        // --- ICONOS NEXUS (TARJETAS SUPERIORES) UNIFICADOS ---

        createIconEngine('canvas-agentica', (scene, camera, renderer) => {
            const customMat = new THREE.MeshPhysicalMaterial({
                color: 0x050B16,
                transmission: 0.3,
                transparent: true,
                opacity: 0.9,
                roughness: 0.05,
                metalness: 1.0,
                thickness: 2.0,
                clearcoat: 1.0,
                clearcoatRoughness: 0.0,
                emissive: 0xE4A837,
                emissiveIntensity: 0.7
            });
            createUnifiedNexusCore(scene, camera, renderer, new THREE.CylinderGeometry(0.7, 0.7, 2.0, 6), 0x24A8E1, 0xE4A837, { coreMat: customMat });
        });

        createIconEngine('canvas-impacto', (scene, camera, renderer) => {
            const geom = new THREE.OctahedronGeometry(1.0, 0);
            geom.scale(1, 1.5, 1);
            const customMat = new THREE.MeshPhysicalMaterial({
                color: 0x050B16,
                transmission: 0.3,
                transparent: true,
                opacity: 0.9,
                roughness: 0.05,
                metalness: 1.0,
                ior: 1.5,
                thickness: 2,
                emissive: 0xE4A837,
                emissiveIntensity: 0.6
            });
            createUnifiedNexusCore(scene, camera, renderer, geom, 0xE4A837, 0x24A8E1, { coreMat: customMat });
        });

        createIconEngine('canvas-soberania', (scene, camera, renderer) => {
            createUnifiedNexusCore(scene, camera, renderer, new THREE.DodecahedronGeometry(0.8), 0x24A8E1, 0xE4A837);
        });

        createIconEngine('canvas-gobernanza', (scene, camera, renderer) => {
            const customMat = new THREE.MeshPhysicalMaterial({
                color: 0xE4A837,
                metalness: 1.0,
                roughness: 0.03,
                emissive: 0xE4A837,
                emissiveIntensity: 0.6,
                clearcoat: 1.0,
                clearcoatRoughness: 0.0
            });
            createUnifiedNexusCore(scene, camera, renderer, new THREE.IcosahedronGeometry(0.7, 1), 0xE4A837, 0x24A8E1, {
                coreMat: customMat,
                pointLightColor: 0xE4A837,
                pointLightIntensity: 4,
                pointLightDistance: 10,
                pureLightMat: new THREE.MeshBasicMaterial({ color: 0xE4A837 })
            });
        });

        createIconEngine('canvas-gemini-pro', (scene, camera, renderer) => {
            const customMat = new THREE.MeshPhysicalMaterial({
                color: 0x050B16,
                metalness: 1.0,
                roughness: 0.0,
                transmission: 0.2,
                transparent: true,
                opacity: 0.95,
                thickness: 2.0,
                clearcoat: 1.0,
                clearcoatRoughness: 0.0,
                ior: 2.4,
                emissive: 0x24A8E1,
                emissiveIntensity: 0.4
            });
            createUnifiedNexusCore(scene, camera, renderer, new THREE.OctahedronGeometry(1.0, 0), 0x24A8E1, 0xE4A837, { coreMat: customMat });
        });

        createIconEngine('canvas-agentico-disruptivo', (scene, camera, renderer) => {
            createUnifiedNexusCore(scene, camera, renderer, new THREE.TetrahedronGeometry(1.0, 0), 0xE4A837, 0x24A8E1);
        });

        // --- SIMULADORES HUB (VISUALIZACIÓN DE ALTO NIVEL) ---

        createIconEngine('aegis-canvas', (scene, camera, renderer) => {
            // AEGIS DEFENSE SIMULATOR
            camera.position.z = 7;

            // Core Operativo (Diamante)
            const core = new THREE.Mesh(
                new THREE.OctahedronGeometry(0.8, 0),
                new THREE.MeshStandardMaterial({ color: 0xE4A837, emissive: 0xE4A837, emissiveIntensity: 0.8 })
            );
            scene.add(core);

            // Escudo de Refracción (Icosaedro)
            const shieldGeom = new THREE.IcosahedronGeometry(2, 2);
            const shield = new THREE.Mesh(
                shieldGeom,
                new THREE.MeshPhysicalMaterial({
                    color: 0x050B16,
                    transmission: 0.8,
                    transparent: true,
                    opacity: 0.2,
                    metalness: 0.1,
                    roughness: 0.05,
                    ior: 1.6,
                    side: THREE.BackSide
                })
            );
            // Malla de impacto (wireframe exterior)
            const shieldWire = new THREE.Mesh(
                shieldGeom,
                new THREE.MeshBasicMaterial({ color: 0x24A8E1, wireframe: true, transparent: true, opacity: 0.15 })
            );
            scene.add(shield);
            scene.add(shieldWire);

            // Ondas expansivas de energía
            const waves = [];
            for (let i = 0; i < 3; i++) {
                const wave = new THREE.Mesh(
                    new THREE.CircleGeometry(2, 32),
                    new THREE.MeshBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0, side: THREE.DoubleSide })
                );
                const edges = new THREE.LineSegments(
                    new THREE.EdgesGeometry(wave.geometry),
                    new THREE.LineBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.4 })
                );
                wave.add(edges);
                wave.rotation.x = Math.PI / 2;
                wave.userData = { phase: i * 0.33 };
                scene.add(wave);
                waves.push(wave);
            }

            const light = new THREE.PointLight(0x24A8E1, 3, 10);
            scene.add(light);
            scene.add(new THREE.AmbientLight(0xffffff, 0.4));

            const clock = new THREE.Clock();
            function animate() {
                requestAnimationFrame(animate);
                const t = clock.getElapsedTime();

                // Rotación sincronizada
                core.rotation.y += 0.02;
                core.rotation.x += 0.01;
                shield.rotation.y -= 0.005;
                shieldWire.rotation.y -= 0.005;

                // Pulsos de honda expansiva
                waves.forEach(wave => {
                    wave.userData.phase += 0.01;
                    if (wave.userData.phase > 1) wave.userData.phase = 0;

                    const p = wave.userData.phase;
                    const scale = 1 + (p * 1.5);
                    wave.scale.set(scale, scale, scale);
                    // Fade out as it expands
                    wave.children[0].material.opacity = (1 - p) * 0.8;
                });

                // Tensión en la malla del escudo
                shieldWire.scale.setScalar(1 + Math.sin(t * 8) * 0.02);

                renderer.render(scene, camera);
            }
            animate();
        });

        createIconEngine('geo-canvas', (scene, camera, renderer) => {
            // GEO AUTHORITY ENGINE: RED NEURONAL SATELITAL
            camera.position.z = 7;

            // Planeta Enjambre (Esfera geodésica densa)
            const globeGroup = new THREE.Group();
            scene.add(globeGroup);

            const planetGeo = new THREE.IcosahedronGeometry(1.8, 3); // Más detalle
            const planetMat = new THREE.MeshPhysicalMaterial({
                color: 0x050B16,
                transmission: 0.6,
                transparent: true,
                opacity: 0.9,
                roughness: 0.5,
                emissive: 0x050B16,
                emissiveIntensity: 0.2
            });
            const planet = new THREE.Mesh(planetGeo, planetMat);
            const planetWire = new THREE.Mesh(
                planetGeo,
                new THREE.MeshBasicMaterial({ color: 0x24A8E1, wireframe: true, transparent: true, opacity: 0.15 })
            );
            globeGroup.add(planet);
            globeGroup.add(planetWire);

            // Nodos Autoridad (Puntos dorados en la superficie)
            const nodeGeo = new THREE.SphereGeometry(0.04, 8, 8);
            const nodeMat = new THREE.MeshBasicMaterial({ color: 0xE4A837 });
            const posAttr = planetGeo.attributes.position;
            const nodes = [];
            // Agregar nodos en vértices aleatorios
            for (let i = 0; i < 40; i++) {
                const idx = Math.floor(Math.random() * posAttr.count);
                const v = new THREE.Vector3().fromBufferAttribute(posAttr, idx);
                const n = new THREE.Mesh(nodeGeo, nodeMat);
                n.position.copy(v);
                globeGroup.add(n);
                nodes.push(n);
            }

            // Flujos de Datos (Anillos orbitales)
            const rings = [];
            for (let i = 0; i < 3; i++) {
                const ring = new THREE.Mesh(
                    new THREE.TorusGeometry(2.4 + (i * 0.3), 0.01, 8, 64),
                    new THREE.MeshBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.4 })
                );
                ring.rotation.x = Math.random() * Math.PI;
                ring.rotation.y = Math.random() * Math.PI;
                ring.userData = { axis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize(), speed: 0.02 + Math.random() * 0.02 };
                scene.add(ring);

                // Satélite en el anillo
                const sat = new THREE.Mesh(new THREE.OctahedronGeometry(0.08), new THREE.MeshBasicMaterial({ color: 0xE4A837 }));
                sat.position.set(2.4 + (i * 0.3), 0, 0);
                ring.add(sat);
                rings.push(ring);
            }

            const light = new THREE.PointLight(0x24A8E1, 2, 12);
            light.position.set(4, 3, 5);
            scene.add(light);
            scene.add(new THREE.AmbientLight(0xffffff, 0.4));

            const clock = new THREE.Clock();
            function animate() {
                requestAnimationFrame(animate);
                const t = clock.getElapsedTime();

                // Rotación constante de autoridad
                globeGroup.rotation.y += 0.003;
                globeGroup.rotation.x += 0.001;

                // Parpadeo de nodos (simulando indexación IA)
                nodes.forEach((n, idx) => {
                    const blink = Math.sin(t * 5 + idx) > 0.8 ? 1 : 0.3;
                    n.scale.setScalar(blink * 1.5);
                });

                // Órbitas agénticas rápidas
                rings.forEach(ring => {
                    ring.rotateOnAxis(ring.userData.axis, ring.userData.speed);
                });

                renderer.render(scene, camera);
            }
            animate();
        });

        createIconEngine('metatron-canvas', (scene, camera, renderer) => {
            // TRUST VAULT CORE v3.0: QUANTUM FORTRESS (NIVEL GEMINI PRO HIGH)
            camera.position.z = 8;

            const vaultGroup = new THREE.Group();
            scene.add(vaultGroup);

            // 1. Núcleo de Datos (Capital Intelectual)
            const core = new THREE.Mesh(
                new THREE.OctahedronGeometry(0.7, 0),
                new THREE.MeshStandardMaterial({
                    color: 0xE4A837,
                    emissive: 0xE4A837,
                    emissiveIntensity: 1,
                    metalness: 1,
                    roughness: 0.1
                })
            );
            vaultGroup.add(core);

            // 2. Escudos Protectores Segmentados (Iris Vault)
            const panels = [];
            const panelCount = 6;
            for (let i = 0; i < panelCount; i++) {
                const panel = new THREE.Mesh(
                    new THREE.TorusGeometry(1.6, 0.4, 4, 16, Math.PI * 0.7),
                    new THREE.MeshPhysicalMaterial({
                        color: 0x050B16,
                        transmission: 0.6,
                        transparent: true,
                        opacity: 0.8,
                        roughness: 0.2,
                        metalness: 0.8,
                        emissive: 0x24A8E1,
                        emissiveIntensity: 0.1,
                        side: THREE.DoubleSide
                    })
                );

                const edges = new THREE.LineSegments(
                    new THREE.EdgesGeometry(panel.geometry),
                    new THREE.LineBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.5 })
                );
                panel.add(edges);

                const pivot = new THREE.Group();
                pivot.rotation.x = Math.random() * Math.PI;
                pivot.rotation.y = Math.random() * Math.PI;
                pivot.add(panel);

                vaultGroup.add(pivot);
                panels.push({
                    mesh: panel,
                    pivot: pivot,
                    speedX: (Math.random() - 0.5) * 0.02,
                    speedY: (Math.random() - 0.5) * 0.02,
                    baseScale: 1
                });
            }

            // 3. Sistema de Intrusión y Neutralización (Partículas)
            const threats = [];
            for (let i = 0; i < 30; i++) {
                const threat = new THREE.Mesh(
                    new THREE.SphereGeometry(0.06, 4, 4),
                    new THREE.MeshBasicMaterial({ color: 0xff3333 }) // Amenaza
                );

                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                const r = 4 + Math.random() * 2;

                threat.position.setFromSphericalCoords(r, phi, theta);
                threat.userData = {
                    originalDir: threat.position.clone().normalize().negate(),
                    state: 'attacking',
                    speed: 0.03 + Math.random() * 0.02
                };
                scene.add(threat);
                threats.push(threat);
            }

            const coreLight = new THREE.PointLight(0xE4A837, 2, 8);
            scene.add(coreLight);
            const ambient = new THREE.AmbientLight(0xffffff, 0.2);
            scene.add(ambient);

            let isAuthorized = false;
            renderer.domElement.addEventListener('mouseenter', () => isAuthorized = true);
            renderer.domElement.addEventListener('mouseleave', () => isAuthorized = false);

            const clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);
                const t = clock.getElapsedTime();

                // Animación del Núcleo
                core.rotation.y += 0.02;
                core.rotation.x += 0.015;
                core.scale.setScalar(1 + Math.sin(t * 4) * 0.1);

                // Animación de los Paneles
                panels.forEach((p) => {
                    p.pivot.rotation.x += p.speedX;
                    p.pivot.rotation.y += p.speedY;

                    if (isAuthorized) {
                        p.mesh.position.z = THREE.MathUtils.lerp(p.mesh.position.z, 0.8, 0.05); // Se abren
                        p.mesh.material.emissiveIntensity = THREE.MathUtils.lerp(p.mesh.material.emissiveIntensity, 0.5, 0.05);
                        p.mesh.material.emissive.setHex(0xE4A837); // Respaldo Oro
                        p.mesh.children[0].material.color.setHex(0xE4A837);
                        coreLight.intensity = THREE.MathUtils.lerp(coreLight.intensity, 4, 0.05);
                    } else {
                        p.mesh.position.z = THREE.MathUtils.lerp(p.mesh.position.z, 0, 0.05); // Cerrados, encriptados
                        p.mesh.material.emissiveIntensity = THREE.MathUtils.lerp(p.mesh.material.emissiveIntensity, 0.1, 0.05);
                        p.mesh.material.emissive.setHex(0x24A8E1); // Cian Protector
                        p.mesh.children[0].material.color.setHex(0x24A8E1);
                        coreLight.intensity = THREE.MathUtils.lerp(coreLight.intensity, 2, 0.05);
                    }
                });

                // Lógica de Amenazas y Neutralización
                const shieldRadius = 1.6;
                threats.forEach(threat => {
                    if (threat.userData.state === 'attacking') {
                        threat.position.add(threat.userData.originalDir.clone().multiplyScalar(threat.userData.speed));

                        if (threat.position.length() <= shieldRadius + 0.2) {
                            threat.userData.state = 'neutralized';
                            threat.material.color.setHex(0x24A8E1); // Se "Limpia"

                            const normal = threat.position.clone().normalize();
                            const tangent = new THREE.Vector3(0, 1, 0).cross(normal).normalize();
                            if (tangent.lengthSq() < 0.01) tangent.set(1, 0, 0).cross(normal).normalize();
                            threat.userData.orbitTangent = tangent;
                        }
                    } else if (threat.userData.state === 'neutralized') {
                        threat.userData.speed *= 0.98; // Pierde inercia
                        threat.position.add(threat.userData.orbitTangent.clone().multiplyScalar(0.04));
                        threat.position.normalize().multiplyScalar(shieldRadius + 0.2); // Anclado
                        threat.scale.multiplyScalar(0.95); // Desaparece

                        // Respawn
                        if (threat.scale.x < 0.1) {
                            threat.scale.setScalar(1);
                            threat.material.color.setHex(0xff3333); // Vuelve roja
                            threat.userData.state = 'attacking';

                            const theta = Math.random() * Math.PI * 2;
                            const phi = Math.acos((Math.random() * 2) - 1);
                            threat.position.setFromSphericalCoords(4 + Math.random() * 2, phi, theta);
                            threat.userData.originalDir = threat.position.clone().normalize().negate();
                            threat.userData.speed = 0.03 + Math.random() * 0.02;
                        }
                    }
                });

                renderer.render(scene, camera);
            }
            animate();
        });
    


        const modalData = {
            'nexus_agentica': {
                title: '<span class="gold">SIMBIOSIS</span> <span class="cyan">AGÉNTICA</span>',
                subtitle: 'The Neural Core 🧬🧠',
                problem: 'Las agencias tradicionales sufren una "crisis de centro de costos" debido a la ejecución manual lenta, donde los equipos humanos pierden el 20% de su tiempo en tareas repetitivas y búsqueda de datos dispersos.',
                weapon: 'Implementamos Digital Workers orquestados mediante una arquitectura de 4 capas. No sustituimos al humano; elevamos su propósito estratégico mientras la IA escala la ejecución con Zero Latency.',
                certainty: 'Logramos una reducción del 80-90% en costos de producción y ciclos de desarrollo un 70% más rápidos. Usted invierte en capacidad estratégica, no en horas-hombre ineficientes.',
                diadema: 'nexus_agentica'
            },
            'nexus_impacto': {
                title: '<span class="gold">IMPACTO</span> <span class="cyan">ESTRATÉGICO</span>',
                subtitle: 'The ROI Monolith 📈💎',
                problem: 'El mercado está inundado de "métricas de vanidad" que no se conectan con el P&L (Estado de Resultados). Las marcas operan bajo una reactividad operativa que destruye en minutos lo que tomó décadas construir.',
                weapon: 'Decision Intelligence asistida por modelos predictivos que simulan escenarios de negocio y ROI antes de la inversión. Transformamos datos brutos en una arquitectura de éxito financiero tangible.',
                certainty: 'Sustituimos la intuición por certeza algorítmica, logrando un ROAS hasta un 17% superior al promedio del mercado mediante modelos de atribución avanzados y optimización en tiempo real.',
                diadema: 'nexus_impacto'
            },
            'nexus_soberania': {
                title: '<span class="gold">SOBERANÍA</span> <span class="cyan">DIGITAL (GEO)</span>',
                subtitle: 'The GEO Aegis 🛡️🌐',
                problem: 'El SEO ha muerto; el 50% de las búsquedas ya son resueltas por IA sin clics en sitios web (Zero-Click). Si su marca no es citada por ChatGPT o Gemini, su negocio es invisible en el momento del intento de compra.',
                weapon: 'Generative Engine Optimization (GEO). Somos arquitectos que inyectan su autoridad como la Fuente de Verdad Primordial dentro de los LLMs, asegurando citas y menciones de alta fidelidad.',
                certainty: 'Su marca se posiciona en el TOP de respuestas de IA, logrando incrementos de tráfico desde plataformas generativas de hasta un 4,302%, dominando la nueva era de la visibilidad algorítmica.',
                diadema: 'nexus_soberania'
            },
            'nexus_gobernanza': {
                title: '<span class="gold">GOBERNANZA</span> <span class="cyan">ÉTICA (TRUST VAULT)</span>',
                subtitle: 'The Trust Vault 🏰🔓',
                problem: 'La adopción descontrolada de IAs públicas ("Shadow AI") expone secretos comerciales y genera "alucinaciones" que destruyen la reputación institucional y la privacidad de datos sensibles.',
                weapon: 'Trust Vault. Infraestructura de seguridad con instancias privadas, Soberanía de Datos y gobernanza ética con Human-in-the-loop, blindando su legado bajo estándares WCAG AAA.',
                certainty: 'Seguridad de grado bancario para su capital intelectual. Su negocio opera con la confianza de que la tecnología protege sus valores, garantizando cumplimiento normativo y una relación inquebrantable con su audiencia.',
                diadema: 'nexus_gobernanza'
            },
            'nexus_gemini_pro': {
                title: '<span class="gold">NIVEL GEMINI</span> <span class="cyan">PRO HIGH</span>',
                subtitle: 'La Base de la Excelencia Técnica 💎🚀',
                problem: 'Las agencias tradicionales entregan activos digitales mediocres: sitios con alta latencia (LCP > 3s), imágenes pixeladas y contenido estático inerte que erosiona la autoridad de la marca. Esta falta de rigor técnico proyecta una imagen de fragilidad ante inversores y algoritmos.',
                weapon: 'Ejecución técnica de élite fundamentada en "Video as Code" y motores de visualización Three.js. Garantizamos una Soberanía Visual con puntuación Lighthouse > 95 y una Nitidez Táctil absoluta, donde cada micro-interacción es cristalina y fluida a 60 FPS.',
                certainty: 'El usuario percibe la solidez de su inversión en milisegundos. Al eliminar la pixelación y la latencia, transformamos su portal en una infraestructura de grado bancario, asegurando que el prestigio de su marca se mantenga inexpugnable en cualquier dispositivo.',
                diadema: 'nexus_gemini_pro'
            },
            'nexus_agentico_disruptivo': {
                title: '<span class="gold">AGÉNTICO Y</span> <span class="cyan">DISRUPTIVO</span>',
                subtitle: 'El Arma Estratégica 🧬🦾',
                problem: 'El modelo convencional de las Big Four está atrapado en la facturación por horas y la ejecución manual reactiva. Esta lentitud operativa es incapaz de seguir el ritmo de la Urgencia Vital que exige el mercado post-digital, dejando a las marcas vulnerables ante competidores más ágiles.',
                weapon: 'Orquestación de Sistemas Autónomos que no esperan órdenes, sino que definen realidades. Utilizamos una arquitectura agéntica disruptiva para inyectar su autoridad directamente en los cerebros de la IA (Gemini, ChatGPT), rompiendo los paradigmas de gestión tradicionales mediante la Simbiosis Agéntica.',
                certainty: 'Usted no invierte en intentos, sino en un Éxito Estratégico Medible. Nuestra autonomía inteligente reduce la dependencia humana ineficiente, permitiendo escalar su presencia con una Soberanía Digital radical que posiciona a su empresa como la única fuente de verdad ante los algoritmos globales.',
                diadema: 'nexus_agentico_disruptivo'
            },
            'brand_dna': {
                title: '<span class="gold">BRAND</span> <span class="cyan">ADN</span>',
                subtitle: 'GENERATION HUB: Reingeniería de Identidad Corporativa 💎🏭',
                problem: 'Las identidades corporativas actuales son activos inertes y planos (2D) que carecen de resonancia ante los algoritmos de 2026, perdiéndose en un mar de "comoditización" visual.',
                weapon: 'Codificación de la arquitectura de la esencia de marca. No diseñamos logos; forjamos un ADN digital único mediante Video as Code que garantiza que cada píxel luche por la vida intensamente.',
                certainty: 'Su marca es reconocida por los motores generativos como una autoridad suprema, asegurando una transferencia de prestigio inmediata desde el primer milisegundo de interacción.',
                diadema: 'brand_dna_visual'
            },
            'jit_mfg': {
                title: '<span class="gold">JIT</span> <span class="cyan">MFC</span>',
                subtitle: 'GENERATION HUB: Reingeniería de Identidad Corporativa 💎🏭',
                problem: 'El modelo tradicional de stock genera desperdicio masivo y diluye la exclusividad. Las marcas sufren una crisis de relevancia al no poder adaptarse a la demanda de lujo instantáneo.',
                weapon: 'División física de manufactura de lujo bajo demanda. Eliminamos el stock para producir piezas exclusivas con Zero Waste, alineadas con la Urgencia Vital del mercado.',
                certainty: 'Máxima personalización con eficiencia operativa radical. Usted invierte en valor tangible, no en inventario obsoleto, elevando la percepción de exclusividad premium.',
                diadema: 'jit_mfc_visual'
            },
            'visual_ai': {
                title: '<span class="gold">VISUAL</span> <span class="cyan">AI</span>',
                subtitle: 'GENERATION HUB: Reingeniería de Identidad Corporativa 💎🏭',
                problem: 'La creación de activos visuales de alta fidelidad es lenta y costosa, consumiendo presupuestos masivos en procesos manuales que no escalan.',
                weapon: 'Orquestación de agentes creativos autónomos (Imagen 3 / DALL-E 3) capaces de generar activos únicos de Nitidez Táctil absoluta que pasan el test de proximidad de 5 cm.',
                certainty: 'Reducción del 80-90% en costos de producción y ciclos de desarrollo 50-70% más rápidos, garantizando una Soberanía Visual con rendimiento Lighthouse >95.',
                diadema: 'visual_ai_visual'
            },
            'data_ops': {
                title: '<span class="gold">DATA</span> <span class="cyan">OPC</span>',
                subtitle: 'SIGNALS & ANALYSIS HUB: Auditoría de Presencia Digital 🧠📈',
                problem: 'Las marcas operan bajo señales de datos fragmentadas y de baja calidad. Esta ceguera operativa impide que los algoritmos de optimización se alimenten correctamente.',
                weapon: 'Captura y procesamiento de señales de alta calidad mediante One Tag y protocolos de Inmunidad Digital. Conectamos cada interacción con su infraestructura estratégica.',
                certainty: 'Datos limpios y accionables que alimentan su Soberanía Digital, eliminando la dependencia de plataformas opacas y asegurando el control total del viaje del cliente.',
                diadema: 'data_opc_visual'
            },
            'audit_360': {
                title: '<span class="gold">AUDIT</span> <span class="cyan">360</span>',
                subtitle: 'SIGNALS & ANALYSIS HUB: Auditoría de Presencia Digital 🧠📈',
                problem: 'La mayoría de las auditorías son reportes del pasado que no detectan las alucinaciones de la IA ni los riesgos de reputación en entornos conversacionales.',
                weapon: 'Auditoría cognitiva y sensorial multimodal. Utilizamos Gemini 1.5 Pro para analizar el ritmo visual y el sentimiento de su ecosistema, detectando debilidades con precisión quirúrgica.',
                certainty: 'Seguridad de que su plataforma es un Portal a la Realidad del Futuro, con latencia de 60 FPS y una arquitectura técnica libre de ruidos visuales o lógicos.',
                diadema: 'audit_360_visual'
            },
            'predictive': {
                title: '<span class="gold">PREDICTIVE</span>',
                subtitle: 'SIGNALS & ANALYSIS HUB: Auditoría de Presencia Digital 🧠📈',
                problem: 'Invertir presupuestos basados en la intuición o en métricas de vanidad es un riesgo inaceptable. El mercado castiga la reactividad con pérdidas financieras significativas.',
                weapon: 'Decision Intelligence. Modelos predictivos que simulan escenarios de negocio y ROI antes de gastar un solo dólar, transformando el gasto en una inversión matemática.',
                certainty: 'Un ROAS hasta un 17% superior mediante el uso de analítica predictiva avanzada que anticipa el comportamiento del consumidor y optimiza la distribución de capital.',
                diadema: 'predictive_visual'
            },
            'geo_ranking': {
                title: '<span class="gold">GEO</span> <span class="cyan">RANKING</span>',
                subtitle: 'VISIBILITY & REPUTATION HUB: Posicionamiento GEO (AI Search) 🛡️🌐',
                problem: 'El SEO tradicional ha muerto. El 50% de las búsquedas ya no generan clics en sitios web; si la IA no cita su marca, usted es invisible en el momento exacto de la compra.',
                weapon: 'Generative Engine Optimization (GEO). Estructuramos su autoridad como la Fuente de Verdad Primordial para que ChatGPT, Gemini y Perplexity le citen como la respuesta definitiva.',
                certainty: 'Incrementos de tráfico desde plataformas de IA de hasta un 4,302%, capturando al cliente antes de que su competencia sea siquiera considerada por el algoritmo.',
                diadema: 'geo_ranking_visual'
            },
            'smart_cx': {
                title: '<span class="gold">SMART</span> <span class="cyan">CX</span>',
                subtitle: 'VISIBILITY & REPUTATION HUB: Posicionamiento GEO (AI Search) 🛡️🌐',
                problem: 'Las experiencias de cliente genéricas y los chatbots básicos erosionan la confianza. El 63% de los usuarios abandona una marca tras una sola interacción mediocre con IA.',
                weapon: 'Digital Workers con personalidad de marca integrada. Implementamos flujos agénticos que escalan la intimidad y la calidez humana mediante respuestas personalizadas en tiempo real.',
                certainty: 'Un aumento del 49% en ingresos por venta cruzada y una retención 22% superior gracias a interacciones que se sienten naturales, seguras y adaptadas al contexto humano.',
                diadema: 'smart_cx_visual'
            },
            'reputation': {
                title: '<span class="gold">REPUTATION</span>',
                subtitle: 'VISIBILITY & REPUTATION HUB: Posicionamiento GEO (AI Search) 🛡️🌐',
                problem: 'Las "alucinaciones" de los LLMs pueden distorsionar la narrativa de su marca en segundos, creando crisis de reputación que los sistemas tradicionales de monitoreo no pueden ver.',
                weapon: 'AI Listening & Brand Tracker. Monitoreamos diariamente cómo se menciona su marca en las respuestas de la IA generativa, aplicando correcciones algorítmicas proactivas.',
                certainty: 'Control absoluto sobre el "termómetro reputacional". Aseguramos que el 73% (o más) de las respuestas sobre su marca mantengan un sentimiento positivo y alineado con sus valores corporativos.',
                diadema: 'reputation_visual'
            },
            'data_sovereignty': {
                title: '<span class="gold">DATA</span> <span class="cyan">SOVEREIGNTY</span>',
                subtitle: 'OPERATIONS & TRUST HUB: Gobernanza Agéntica 🏰🔓',
                problem: 'El uso de IAs públicas expone datos sensibles y capital intelectual, dejando a la empresa vulnerable ante fugas de información y falta de control normativo.',
                weapon: 'Infraestructura de Soberanía de Datos. Implementamos instancias de IA privadas y herramientas de código abierto que garantizan que sus datos nunca entrenen modelos públicos.',
                certainty: 'Blindaje total de su inteligencia de negocio. Usted opera con la confianza de que su ventaja competitiva está resguardada bajo estándares internacionales de privacidad.',
                diadema: 'data_sovereignty_visual'
            },
            'human_loop': {
                title: '<span class="gold">HUMAN IN THE</span> <span class="cyan">LOOP</span>',
                subtitle: 'OPERATIONS & TRUST HUB: Gobernanza Agéntica 🏰🔓',
                problem: 'La automatización radical sin supervisión ética produce contenidos genéricos y deshumanizados que destruyen la conexión emocional con la audiencia.',
                weapon: 'Gobernanza ética con supervisión humana obligatoria. La IA escala la ejecución mientras el Vitalista Técnico humano blinda el propósito y la calidez del legado de la marca.',
                certainty: 'Autenticidad Premium. Su marca destaca en un mundo saturado de automatización gracias a una narrativa auténtica y verificable que genera lealtad inquebrantable.',
                diadema: 'human_loop_visual'
            },
            'rls_security': {
                title: '<span class="gold">RLS</span> <span class="cyan">SECURITY</span>',
                subtitle: 'OPERATIONS & TRUST HUB: Gobernanza Agéntica 🏰🔓',
                problem: 'Las arquitecturas web convencionales son frágiles ante fallos de red o accesos no autorizados, poniendo en riesgo el acceso de inversores a datos críticos.',
                weapon: 'Trust Vault con seguridad de grado bancario. Implementamos RLS obligatorio en Supabase y autenticación biométrica, asegurando que cada inversor vea solo lo que le corresponde.',
                certainty: 'Inmunidad Digital. Su activo es funcional incluso bajo apagones informativos (Offline) gracias a la incrustación Base64, garantizando una resiliencia total 24/7.',
                diadema: 'rls_security_visual'
            }
        };

        let modalScene, modalCamera, modalRenderer, modalAnimationId, modalObject;
        let modalMouse = (typeof THREE !== 'undefined') ? new THREE.Vector2() : { x: 0, y: 0 };
        const isThreeActive = typeof THREE !== 'undefined';

        // EXPOSE TO GLOBAL SCOPE
        window.openEliteModal = openEliteModal;
        window.closeEliteModal = closeEliteModal;

        function openEliteModal(key) {
            console.log("[GB-DNA] Opening modal for:", key);
            const data = modalData[key];
            if (!data) {
                console.warn("[GB-DNA] No data found for key:", key);
                return;
            }

            // Cinematic Header Setup v5.0 - GB NEXUS Elite Visual Alignment
            const cinematicHeader = document.getElementById('modal-cinematic-header');
            if (cinematicHeader) {
                let headerImg = 'assets/foto/nexus_unified.png'; // Unified Default
                
                if (key === 'nexus_gobernanza') {
                    headerImg = 'assets/foto/nexus_gobernanza.png';
                } else if (key === 'nexus_impacto') {
                    headerImg = 'assets/foto/nexus_roi_monolith_v5.png';
                } else if (key === 'nexus_agentica') {
                    headerImg = 'assets/foto/nexus_neural_core_v5.png';
                } else if (key === 'nexus_soberania') {
                    headerImg = 'assets/foto/nexus_geo_sovereignty_v5.png';
                } else if (key === 'nexus_gemini_pro') {
                    headerImg = 'assets/foto/nexus_gemini_engine_v5.png';
                } else if (key === 'nexus_agentico_disruptivo') {
                    headerImg = 'assets/foto/nexus_disruptive_swarm_v5.png';
                }
                
                if (key.startsWith('nexus_') || key === 'brand_dna') {
                    cinematicHeader.style.backgroundImage = `url('${headerImg}')`;
                    cinematicHeader.style.display = 'block';
                } else {
                    cinematicHeader.style.display = 'none';
                }
            }

            const container = document.getElementById('modalData');
            if (!container) return;

            const isEn = window.gbI18n && window.gbI18n.currentLang === 'en';
            const problemTitle = isEn ? "THE MARKET PROBLEM" : "EL PROBLEMA DE MERCADO";
            const weaponTitle = isEn ? "OUR STRATEGIC WEAPON" : "NUESTRA ARMA ESTRATÉGICA";
            const certaintyTitle = isEn ? "THE INVESTMENT CERTAINTY" : "LA CERTEZA DE INVERSIÓN";

            container.innerHTML = `
                <div class="header-autoridad" style="margin-bottom: 30px; border-left: 4px solid var(--gold); padding-left: 20px;">
                    <h2 class="formula-poder" style="font-family: var(--font-head); font-size: 2.2rem; letter-spacing: 2px; text-transform: uppercase; line-height: 1.2;">
                        ${data.title}
                    </h2>
                    <p style="color: var(--gold); font-family: var(--font-mono); font-size: 0.8rem; margin-top: 5px; opacity: 0.8;">${data.subtitle}</p>
                </div>
                
                <div class="contenido-valor">
                    <div class="modal-point" style="margin-bottom: 25px; background: rgba(36, 168, 225, 0.05); padding: 20px; border: 1px solid rgba(36, 168, 225, 0.1);">
                        <strong style="color: var(--cyan); font-family: var(--font-mono); display: block; margin-bottom: 10px;">${problemTitle}</strong>
                        <p style="font-size: 1.1rem; color: #acc2ef; line-height: 1.6;">${data.problem}</p>
                    </div>
                    <div class="modal-point" style="margin-bottom: 25px; border-left: 4px solid var(--gold); padding-left: 20px;">
                        <strong style="color: var(--gold); font-family: var(--font-mono); display: block; margin-bottom: 10px;">${weaponTitle}</strong>
                        <p style="font-size: 1.1rem; color: var(--white);">${data.weapon}</p>
                    </div>
                    <div class="modal-point" style="background: linear-gradient(90deg, rgba(228, 168, 55, 0.1), transparent); padding: 20px; border: 1px solid rgba(228, 168, 55, 0.2);">
                        <strong style="color: var(--gold); font-family: var(--font-mono); display: block; margin-bottom: 10px;">${certaintyTitle}</strong>
                        <p style="font-size: 1.1rem; color: var(--white); font-weight: 700;">${data.certainty}</p>
                    </div>
                </div>
            `;

            const modal = document.getElementById('eliteModal');
            if (modal) {
                modal.classList.add('active');
                modal.style.display = 'flex'; // Force display state
                setTimeout(() => { modal.style.opacity = '1'; }, 10);
            }

            const dot = document.getElementById('k-dot');
            if (dot) dot.classList.add('verified');

            // Initialize Modal 3D Header
            if (isThreeActive) {
                try {
                    initModal3D(data.diadema);
                } catch (e) {
                    console.error("[GB-DNA] Error initializing 3D modal:", e);
                }
            }
        }

        function initModal3D(type) {
            if (!isThreeActive) return;
            if (modalAnimationId) cancelAnimationFrame(modalAnimationId);
            const canvas = document.getElementById('modal-canvas');
            const containerDiv = document.getElementById('modal-diadema');
            if (!canvas || !containerDiv) return;

            const rect = containerDiv.getBoundingClientRect();

            modalScene = new THREE.Scene();
            modalCamera = new THREE.PerspectiveCamera(60, rect.width / rect.height, 0.1, 1000);
            modalCamera.position.z = 7;

            modalRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            modalRenderer.setSize(rect.width, rect.height);
            modalRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            modalRenderer.toneMapping = THREE.ACESFilmicToneMapping;
            modalRenderer.toneMappingExposure = 1.2;

            // ═══════════════════════════════════════════════
            // ORBIT CONTROLS (Mouse-Drag Rotation, No Zoom)
            // ═══════════════════════════════════════════════
            let isDragging = false;
            let previousMousePosition = { x: 0, y: 0 };
            let orbitRotation = { x: 0, y: 0 };

            canvas.addEventListener('mousedown', (e) => {
                isDragging = true;
                previousMousePosition = { x: e.clientX, y: e.clientY };
                canvas.style.cursor = 'grabbing';
            });
            canvas.addEventListener('mousemove', (e) => {
                const rectCanvas = canvas.getBoundingClientRect();
                modalMouse.x = ((e.clientX - rectCanvas.left) / rectCanvas.width) * 2 - 1;
                modalMouse.y = -((e.clientY - rectCanvas.top) / rectCanvas.height) * 2 + 1;
                if (isDragging) {
                    const deltaMove = {
                        x: e.clientX - previousMousePosition.x,
                        y: e.clientY - previousMousePosition.y
                    };
                    orbitRotation.y += deltaMove.x * 0.008;
                    orbitRotation.x += deltaMove.y * 0.008;
                    orbitRotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, orbitRotation.x));
                    previousMousePosition = { x: e.clientX, y: e.clientY };
                }
            });
            canvas.addEventListener('mouseup', () => { isDragging = false; canvas.style.cursor = 'grab'; });
            canvas.addEventListener('mouseleave', () => { isDragging = false; canvas.style.cursor = 'grab'; });
            canvas.style.cursor = 'grab';

            // Disable zoom on wheel
            canvas.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });

            modalObject = new THREE.Group();

            // Toggle Class for CSS effects (e.g. Light Sweep)
            const modalVisualCol = document.querySelector('.modal-visual-col');
            if (modalVisualCol) {
                if (type === 'nexus_gemini_pro') {
                    modalVisualCol.classList.add('modal-sweep-active');
                } else {
                    modalVisualCol.classList.remove('modal-sweep-active');
                }
            }

            // ═══════════════════════════════════════════════
            // 1. SIMBIOSIS AGÉNTICA 🧠🤝
            //    Icosahedron (Gold Core) + TorusKnot (Cyan IA)
            // ═══════════════════════════════════════════════
            if (type === 'nexus_agentica' || type === 'nexus_impacto' || type === 'nexus_soberania' || type === 'nexus_gobernanza' || type === 'nexus_gemini_pro' || type === 'nexus_agentico_disruptivo') {
                const vaultGroup = new THREE.Group();
                vaultGroup.name = "vaultGroup";

                let coreGeom;
                if (type === 'nexus_agentica') coreGeom = new THREE.CylinderGeometry(0.8, 0.8, 2.0, 6);
                else if (type === 'nexus_impacto') { coreGeom = new THREE.OctahedronGeometry(1.0, 0); coreGeom.scale(1, 1.5, 1); }
                else if (type === 'nexus_soberania') coreGeom = new THREE.DodecahedronGeometry(0.8);
                else if (type === 'nexus_gobernanza') coreGeom = new THREE.IcosahedronGeometry(1.0, 1);
                else if (type === 'nexus_gemini_pro') coreGeom = new THREE.OctahedronGeometry(1.0, 0);
                else coreGeom = new THREE.TetrahedronGeometry(1.0, 0);

                const primaryColor = (type === 'nexus_gobernanza' || type === 'nexus_impacto' || type === 'nexus_gemini_pro') ? 0xE4A837 : 0x24A8E1;
                const secondaryColor = primaryColor === 0xE4A837 ? 0x24A8E1 : 0xE4A837;

                const coreMat = new THREE.MeshPhysicalMaterial({
                    color: 0x050B16,
                    metalness: 0.9,
                    roughness: 0.05,
                    transmission: 0.9,
                    transparent: true,
                    opacity: 0.8,
                    clearcoat: 1.0,
                    clearcoatRoughness: 0.1,
                    ior: 1.5,
                    thickness: 0.5
                });
                const goldCore = new THREE.Mesh(coreGeom, coreMat);
                goldCore.name = "goldCore";
                
                const coreEdges = new THREE.LineSegments(
                    new THREE.EdgesGeometry(coreGeom),
                    new THREE.LineBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.9 })
                );
                goldCore.add(coreEdges);
                vaultGroup.add(goldCore);

                const cryptoGeom = new THREE.TorusKnotGeometry(1.6, 0.06, 120, 20);
                const cryptoMat = new THREE.MeshStandardMaterial({
                    color: 0x050B16,
                    metalness: 0.9,
                    roughness: 0.1,
                    emissive: secondaryColor,
                    emissiveIntensity: 0.8,
                    transparent: true,
                    opacity: 0.7
                });
                const cryptoRing = new THREE.Mesh(cryptoGeom, cryptoMat);
                cryptoRing.name = "cryptoRing";
                vaultGroup.add(cryptoRing);

                const rlsGroup = new THREE.Group();
                rlsGroup.name = "rlsShield";
                const cubeCount = 60;
                for(let i=0; i<cubeCount; i++) {
                    const cubeSize = 0.04 + Math.random() * 0.12;
                    const cColor = i % 2 === 0 ? 0xE4A837 : 0x24A8E1;
                    const cube = new THREE.Mesh(
                        new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize),
                        new THREE.MeshStandardMaterial({ 
                            color: cColor, 
                            emissive: cColor, 
                            emissiveIntensity: 0.8 
                        })
                    );
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    const dist = 2.4 + Math.random() * 0.6;
                    cube.position.setFromSphericalCoords(dist, phi, theta);
                    cube.userData = {
                        orbitAxis: new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).normalize(),
                        orbitSpeed: 0.008 + Math.random() * 0.015
                    };
                    rlsGroup.add(cube);
                }
                vaultGroup.add(rlsGroup);

                const shieldGeom = new THREE.SphereGeometry(3.0, 48, 48);
                const shieldMat = new THREE.MeshPhysicalMaterial({
                    color: secondaryColor,
                    metalness: 0.2,
                    roughness: 0.0,
                    transmission: 0.95,
                    transparent: true,
                    opacity: 0.15,
                    ior: 2.4,
                    thickness: 0.5,
                    specularIntensity: 1.0,
                    specularColor: 0xffffff
                });
                const outerShield = new THREE.Mesh(shieldGeom, shieldMat);
                outerShield.name = "outerShield";
                
                const shieldWire = new THREE.Mesh(
                    shieldGeom,
                    new THREE.LineBasicMaterial({ color: secondaryColor, transparent: true, opacity: 0.05 })
                );
                outerShield.add(shieldWire);
                vaultGroup.add(outerShield);

                const laserGeom = new THREE.TorusGeometry(3.1, 0.03, 16, 100);
                const laserMat = new THREE.MeshBasicMaterial({ color: primaryColor, transparent: true, opacity: 1.0 });
                const laserRing = new THREE.Mesh(laserGeom, laserMat);
                laserRing.rotation.x = Math.PI / 2;
                laserRing.name = "laserRing";
                vaultGroup.add(laserRing);

                modalObject.add(vaultGroup);

                const grid2 = new THREE.GridHelper(10, 20, primaryColor, secondaryColor);
                grid2.position.y = -3.5;
                grid2.material.opacity = 0.04;
                grid2.material.transparent = true;
                modalObject.add(grid2);

                const dustGroup2 = new THREE.Group();
                dustGroup2.name = "dust";
                for(let i=0; i<60; i++){
                    const dust = new THREE.Mesh(
                        new THREE.SphereGeometry(0.015, 4, 4), 
                        new THREE.MeshBasicMaterial({ color: 0xF0F4F8, transparent: true, opacity: 0.4 })
                    );
                    const dist = 3 + Math.random() * 5;
                    dust.position.setFromSphericalCoords(dist, Math.random()*Math.PI, Math.random()*Math.PI*2);
                    dust.userData = { orbitSpeed: 0.001 + Math.random()*0.0015, axis: new THREE.Vector3(1,Math.random(),Math.random()).normalize() };
                    dustGroup2.add(dust);
                }
                modalObject.add(dustGroup2);
                modalRenderer.setClearColor(0x050B16, 1);

            } else if (type === 'brand_dna_visual') {
                const dnaGroup = new THREE.Group();
                dnaGroup.name = "dnaGroup";
                const points = 40;
                for (let i = 0; i < points; i++) {
                    const angle = i * 0.4;
                    const y = (i - points / 2) * 0.15;
                    const p1 = new THREE.Mesh(
                        new THREE.SphereGeometry(0.12, 16, 16),
                        new THREE.MeshStandardMaterial({ color: 0xE4A837, emissive: 0xE4A837, emissiveIntensity: 0.8, metalness: 0.8, roughness: 0.2 })
                    );
                    p1.position.set(Math.cos(angle) * 1.2, y, Math.sin(angle) * 1.2);
                    const p2 = new THREE.Mesh(
                        new THREE.SphereGeometry(0.12, 16, 16),
                        new THREE.MeshStandardMaterial({ color: 0xE4A837, emissive: 0xE4A837, emissiveIntensity: 0.8, metalness: 0.8, roughness: 0.2 })
                    );
                    p2.position.set(Math.cos(angle + Math.PI) * 1.2, y, Math.sin(angle + Math.PI) * 1.2);

                    const linkCurve = new THREE.LineCurve3(p1.position, p2.position);
                    const linkGeom = new THREE.TubeGeometry(linkCurve, 4, 0.02, 8, false);
                    const linkMat = new THREE.MeshBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.5 });
                    const link = new THREE.Mesh(linkGeom, linkMat);

                    dnaGroup.add(p1, p2, link);
                }
                const light = new THREE.PointLight(0x24A8E1, 4, 10);
                light.name = "dnaLight";
                modalObject.add(dnaGroup, light);

            } else if (type === 'jit_mfc_visual') {
                const jitGroup = new THREE.Group();
                jitGroup.name = "jitGroup";
                const size = 3;
                const offset = 0.5;
                for (let x = 0; x < size; x++) {
                    for (let y = 0; y < size; y++) {
                        for (let z = 0; z < size; z++) {
                            const box = new THREE.Mesh(
                                new THREE.BoxGeometry(0.4, 0.4, 0.4),
                                new THREE.MeshPhysicalMaterial({ color: 0x050B16, transmission: 0.5, transparent: true, opacity: 0.8, metalness: 0.8, emissive: 0x050B16, emissiveIntensity: 0.2 })
                            );
                            const edges = new THREE.LineSegments(
                                new THREE.EdgesGeometry(box.geometry),
                                new THREE.LineBasicMaterial({ color: 0xE4A837, transparent: true, opacity: 0.6 })
                            );
                            box.add(edges);

                            box.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
                            box.userData = {
                                target: new THREE.Vector3((x - size / 2) * offset + 0.25, (y - size / 2) * offset + 0.25, (z - size / 2) * offset + 0.25),
                                speed: 0.02 + Math.random() * 0.03
                            };
                            jitGroup.add(box);
                        }
                    }
                }
                const coreLight = new THREE.PointLight(0xF0F4F8, 3, 5);
                coreLight.name = "jitLight";
                modalObject.add(jitGroup, coreLight);

            } else if (type === 'visual_ai_visual') {
                const eyeGroup = new THREE.Group();
                eyeGroup.name = "eyeGroup";

                const lens = new THREE.Mesh(
                    new THREE.TorusGeometry(1.8, 0.3, 32, 100),
                    new THREE.MeshPhysicalMaterial({ color: 0xffffff, transmission: 1, transparent: true, ior: 1.5, thickness: 1.0, roughness: 0 })
                );

                const iris = new THREE.Mesh(
                    new THREE.SphereGeometry(0.8, 32, 32),
                    new THREE.MeshStandardMaterial({ color: 0x24A8E1, emissive: 0x24A8E1, emissiveIntensity: 1.2, wireframe: true })
                );
                iris.name = "iris";

                const particles = new THREE.Group();
                particles.name = "eyeParticles";
                for (let i = 0; i < 50; i++) {
                    const p = new THREE.Mesh(
                        new THREE.SphereGeometry(0.04, 8, 8),
                        new THREE.MeshBasicMaterial({ color: 0xE4A837 })
                    );
                    p.userData = {
                        distance: Math.random() * 3,
                        angle: Math.random() * Math.PI * 2,
                        speed: 0.01 + Math.random() * 0.02
                    };
                    p.position.set(Math.cos(p.userData.angle) * p.userData.distance, Math.sin(p.userData.angle) * p.userData.distance, 0);
                    particles.add(p);
                }

                eyeGroup.add(lens, iris, particles);
                modalObject.add(eyeGroup);

            } else if (type === 'data_opc_visual') {
                const dataGroup = new THREE.Group();
                dataGroup.name = "dataGroup";

                const spine = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.2, 0.2, 6, 16),
                    new THREE.MeshBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.3 })
                );
                dataGroup.add(spine);

                const rings = new THREE.Group();
                rings.name = "dataRings";
                for (let i = 0; i < 12; i++) {
                    const ring = new THREE.Mesh(
                        new THREE.TorusGeometry(1 + Math.random(), 0.05, 8, 64),
                        new THREE.MeshBasicMaterial({ color: 0xE4A837 })
                    );
                    ring.rotation.x = Math.PI / 2;
                    ring.position.y = (Math.random() - 0.5) * 5;
                    ring.userData = {
                        speedY: (Math.random() > 0.5 ? 1 : -1) * (0.02 + Math.random() * 0.02)
                    };
                    rings.add(ring);
                }
                dataGroup.add(rings);
                modalObject.add(dataGroup);

            } else if (type === 'audit_360_visual') {
                const auditGroup = new THREE.Group();
                auditGroup.name = "auditGroup";

                for (let i = 0; i < 3; i++) {
                    const r = new THREE.Mesh(
                        new THREE.TorusGeometry(2 - i * 0.3, 0.05, 16, 100),
                        new THREE.MeshBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.6 })
                    );
                    r.userData = { axis: i, speed: 0.02 + i * 0.01 };
                    auditGroup.add(r);
                }

                const radarPlane = new THREE.Mesh(
                    new THREE.CircleGeometry(1.9, 64),
                    new THREE.MeshBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.1, side: THREE.DoubleSide })
                );
                radarPlane.rotation.x = Math.PI / 2;

                const scanner = new THREE.Mesh(
                    new THREE.CylinderGeometry(0, 0.1, 2, 8),
                    new THREE.MeshBasicMaterial({ color: 0xE4A837 })
                );
                scanner.position.set(1, 0, 0);
                scanner.rotation.x = Math.PI / 2;
                scanner.name = "scanner";

                auditGroup.add(radarPlane, scanner);
                modalObject.add(auditGroup);

            } else if (type === 'predictive_visual') {
                const predGroup = new THREE.Group();
                predGroup.name = "predGroup";

                const coneGeom = new THREE.ConeGeometry(2, 4, 32, 1, true);
                const cone = new THREE.Mesh(
                    coneGeom,
                    new THREE.MeshPhysicalMaterial({ color: 0x050B16, transmission: 0.9, transparent: true, opacity: 0.6, metalness: 0.5, roughness: 0.1, side: THREE.DoubleSide })
                );
                cone.rotation.x = Math.PI;

                const edges = new THREE.LineSegments(
                    new THREE.EdgesGeometry(coneGeom),
                    new THREE.LineBasicMaterial({ color: 0xE4A837, transparent: true, opacity: 0.4 })
                );
                cone.add(edges);

                const possibilities = new THREE.Group();
                possibilities.name = "possibilities";
                for (let i = 0; i < 60; i++) {
                    const p = new THREE.Mesh(
                        new THREE.SphereGeometry(0.05, 8, 8),
                        new THREE.MeshBasicMaterial({ color: 0x24A8E1 })
                    );
                    p.userData = {
                        y: 1.5 - Math.random() * 3,
                        angle: Math.random() * Math.PI * 2,
                        speed: 0.02
                    };
                    possibilities.add(p);
                }

                const targetGlow = new THREE.Mesh(
                    new THREE.SphereGeometry(0.2, 16, 16),
                    new THREE.MeshBasicMaterial({ color: 0xE4A837 })
                );
                targetGlow.position.y = -2;

                predGroup.add(cone, possibilities, targetGlow);
                modalObject.add(predGroup);

            } else if (type === 'geo_ranking_visual') {
                const geoGroup = new THREE.Group();
                geoGroup.name = "geoGroup";

                const globe = new THREE.Mesh(
                    new THREE.SphereGeometry(1.5, 32, 32),
                    new THREE.MeshPhysicalMaterial({ color: 0x050B16, transmission: 0.9, transparent: true, opacity: 0.8, roughness: 0.2, envMapIntensity: 1, clearcoat: 1 })
                );

                const grid = new THREE.Mesh(
                    new THREE.SphereGeometry(1.51, 16, 16),
                    new THREE.MeshBasicMaterial({ color: 0x24A8E1, wireframe: true, transparent: true, opacity: 0.15 })
                );

                const nodes = new THREE.Group();
                nodes.name = "geoNodes";
                for (let i = 0; i < 15; i++) {
                    const node = new THREE.Mesh(
                        new THREE.SphereGeometry(0.08, 16, 16),
                        new THREE.MeshBasicMaterial({ color: 0xE4A837 })
                    );
                    const phi = Math.acos(-1 + (2 * i) / 15);
                    const theta = Math.sqrt(15 * Math.PI) * phi;
                    node.position.setFromSphericalCoords(1.5, phi, theta);

                    const aura = new THREE.Mesh(
                        new THREE.SphereGeometry(0.15, 16, 16),
                        new THREE.MeshBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.3 })
                    );
                    aura.scale.setScalar(1);
                    node.add(aura);
                    nodes.add(node);
                }

                const orbitRings = new THREE.Group();
                orbitRings.name = "orbitRings";
                for (let i = 0; i < 3; i++) {
                    const ring = new THREE.Mesh(
                        new THREE.TorusGeometry(2 + i * 0.4, 0.01, 8, 64),
                        new THREE.MeshBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.3 })
                    );
                    ring.rotation.x = Math.random() * Math.PI;
                    ring.rotation.y = Math.random() * Math.PI;
                    ring.userData = { axis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize(), speed: 0.002 + Math.random() * 0.005 };
                    orbitRings.add(ring);
                }

                geoGroup.add(globe, grid, nodes, orbitRings);
                modalObject.add(geoGroup);

            } else if (type === 'smart_cx_visual') {
                const cxGroup = new THREE.Group();
                cxGroup.name = "cxGroup";

                // Núcleo palpitante central
                const core = new THREE.Mesh(
                    new THREE.IcosahedronGeometry(0.6, 2),
                    new THREE.MeshStandardMaterial({ color: 0xE4A837, emissive: 0xE4A837, emissiveIntensity: 1, wireframe: true })
                );
                core.name = "cxCore";

                // Red de agentes
                const network = new THREE.Group();
                network.name = "cxNetwork";
                const numAgents = 20;
                for (let i = 0; i < numAgents; i++) {
                    const agent = new THREE.Mesh(
                        new THREE.OctahedronGeometry(0.15, 0),
                        new THREE.MeshPhysicalMaterial({ color: 0x24A8E1, transmission: 0.6, transparent: true, opacity: 0.9, roughness: 0.1 })
                    );
                    const phi = Math.random() * Math.PI;
                    const theta = Math.random() * Math.PI * 2;
                    const r = 1.5 + Math.random();
                    agent.position.setFromSphericalCoords(r, phi, theta);

                    const linkMat = new THREE.LineBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.2 });
                    const linkGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), agent.position]);
                    const link = new THREE.Line(linkGeo, linkMat);

                    agent.userData = { speed: 0.02, phase: Math.random() * 10, baseR: r };
                    network.add(agent);
                    network.add(link);
                }

                cxGroup.add(core, network);
                modalObject.add(cxGroup);

            } else if (type === 'reputation_visual') {
                const repGroup = new THREE.Group();
                repGroup.name = "repGroup";

                // Escudo protector multicapa
                const shields = new THREE.Group();
                shields.name = "repShields";
                for (let i = 0; i < 3; i++) {
                    const shield = new THREE.Mesh(
                        new THREE.IcosahedronGeometry(1.2 + i * 0.4, 2),
                        new THREE.MeshPhysicalMaterial({ color: 0x050B16, transmission: 0.9, transparent: true, opacity: 0.3 - i * 0.1, wireframe: true, emissive: 0x24A8E1, emissiveIntensity: 0.2 })
                    );
                    shield.userData = { speed: (i % 2 === 0 ? 1 : -1) * (0.005 + i * 0.002) };
                    shields.add(shield);
                }

                // Núcleo Dorado Irrompible
                const brandCore = new THREE.Mesh(
                    new THREE.OctahedronGeometry(0.7, 0),
                    new THREE.MeshStandardMaterial({ color: 0xE4A837, emissive: 0xE4A837, emissiveIntensity: 0.8, metalness: 0.9, roughness: 0.1 })
                );
                brandCore.name = "repCore";

                // Anomalías interceptadas
                const anomalies = new THREE.Group();
                anomalies.name = "repAnomalies";
                for (let i = 0; i < 8; i++) {
                    const anomaly = new THREE.Mesh(
                        new THREE.TetrahedronGeometry(0.1, 0),
                        new THREE.MeshBasicMaterial({ color: 0xff3333, transparent: true, opacity: 0 })
                    );
                    const angle = Math.random() * Math.PI * 2;
                    anomaly.position.set(Math.cos(angle) * 3, (Math.random() - 0.5) * 2, Math.sin(angle) * 3);
                    anomaly.userData = { startAngle: angle, progress: Math.random(), speed: 0.005 };
                    anomalies.add(anomaly);
                }

                repGroup.add(shields, brandCore, anomalies);
                modalObject.add(repGroup);

            } else if (type === 'data_sovereignty_visual') {
                const sovGroup = new THREE.Group();
                sovGroup.name = "sovGroup";

                // Bóveda cilíndrica de capas de seguridad
                const vaultBlocks = new THREE.Group();
                vaultBlocks.name = "sovVault";
                for (let i = 0; i < 5; i++) {
                    const cylinderBlock = new THREE.Mesh(
                        new THREE.CylinderGeometry(1.5, 1.5, 0.4, 24, 1, true, 0, Math.PI * 1.5),
                        new THREE.MeshStandardMaterial({ color: 0x050B16, metalness: 0.8, roughness: 0.2, side: THREE.DoubleSide })
                    );

                    const edges = new THREE.LineSegments(
                        new THREE.EdgesGeometry(cylinderBlock.geometry),
                        new THREE.LineBasicMaterial({ color: 0x24A8E1, transparent: true, opacity: 0.5 })
                    );
                    cylinderBlock.add(edges);

                    cylinderBlock.position.y = (i - 2) * 0.6;
                    cylinderBlock.userData = { speed: (i % 2 === 0 ? 1 : -1) * (0.01 + Math.random() * 0.02) };
                    vaultBlocks.add(cylinderBlock);
                }

                const dataCore = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.6, 0.6, 3.5, 32),
                    new THREE.MeshBasicMaterial({ color: 0xE4A837, wireframe: true, transparent: true, opacity: 0.8 })
                );
                dataCore.name = "sovCore";

                const particles = new THREE.Group();
                particles.name = "sovParticles";
                for (let i = 0; i < 30; i++) {
                    const p = new THREE.Mesh(
                        new THREE.SphereGeometry(0.05, 8, 8),
                        new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
                    );
                    p.position.set((Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 0.8);
                    p.userData = { speed: 0.01 + Math.random() * 0.02 };
                    particles.add(p);
                }

                sovGroup.add(vaultBlocks, dataCore, particles);
                modalObject.add(sovGroup);

            } else if (type === 'human_loop_visual') {
                const hlGroup = new THREE.Group();
                hlGroup.name = "hlGroup";

                // Anillo exterior algorítmico (IA) - Frío y perfecto
                const torusAI = new THREE.Mesh(
                    new THREE.TorusGeometry(1.6, 0.05, 16, 100),
                    new THREE.MeshBasicMaterial({ color: 0x24A8E1 })
                );
                torusAI.rotation.x = Math.PI / 2;
                torusAI.name = "hlTorusAI";

                // Formas orgánicas iterativas (Human) - Cálido e imperfecto pero director
                const humanFlow = new THREE.Group();
                humanFlow.name = "hlFlow";
                for (let i = 0; i < 4; i++) {
                    const curve = new THREE.EllipseCurve(0, 0, 1.2, 0.6, 0, 2 * Math.PI, false, i * Math.PI / 4);
                    const points = curve.getPoints(50);
                    const geometry = new THREE.BufferGeometry().setFromPoints(points);
                    const material = new THREE.LineBasicMaterial({ color: 0xE4A837, transparent: true, opacity: 0.8 });
                    const ellipse = new THREE.Line(geometry, material);
                    ellipse.rotation.x = Math.random() * Math.PI;
                    ellipse.rotation.y = Math.random() * Math.PI;
                    ellipse.userData = { speedX: 0.01, speedY: 0.005 };
                    humanFlow.add(ellipse);
                }

                // Interacción de las dos fuerzas en el centro
                const spark = new THREE.PointLight(0xFFFFFF, 3, 5);
                spark.name = "hlSpark";

                hlGroup.add(torusAI, humanFlow, spark);
                modalObject.add(hlGroup);

            } else if (type === 'rls_security_visual') {
                const rlsGroup = new THREE.Group();
                rlsGroup.name = "rlsGroup";

                const dbPlane = new THREE.Mesh(
                    new THREE.PlaneGeometry(3, 3, 10, 10),
                    new THREE.MeshBasicMaterial({ color: 0x24A8E1, wireframe: true, transparent: true, opacity: 0.2, side: THREE.DoubleSide })
                );
                dbPlane.rotation.x = Math.PI / 2;
                dbPlane.position.y = -1;

                // Filas de bases de datos seguras
                const rows = new THREE.Group();
                rows.name = "rlsRows";
                for (let i = 0; i < 6; i++) {
                    const rowBox = new THREE.Mesh(
                        new THREE.BoxGeometry(2.5, 0.3, 0.3),
                        new THREE.MeshPhysicalMaterial({ color: 0x050B16, transmission: 0.5, transparent: true, opacity: 0.9, emissive: (i % 2 === 0) ? 0xE4A837 : 0x24A8E1, emissiveIntensity: 0.2 })
                    );
                    const edges = new THREE.LineSegments(
                        new THREE.EdgesGeometry(rowBox.geometry),
                        new THREE.LineBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.3 })
                    );
                    rowBox.add(edges);
                    rowBox.position.set(0, -0.6 + i * 0.4, 0);
                    rowBox.userData = {
                        delay: i * 10,
                        isScanning: false,
                        originalEmissive: (i % 2 === 0) ? 0xE4A837 : 0x24A8E1
                    };
                    rows.add(rowBox);
                }

                // Lector de acceso (Simulando la validación JWT)
                const scannerPlane = new THREE.Mesh(
                    new THREE.PlaneGeometry(3.5, 0.1),
                    new THREE.MeshBasicMaterial({ color: 0xE4A837, transparent: true, opacity: 0.8, side: THREE.DoubleSide })
                );
                scannerPlane.rotation.x = Math.PI / 2;
                scannerPlane.name = "rlsScanner";

                rlsGroup.add(dbPlane, rows, scannerPlane);
                modalObject.add(rlsGroup);

            } else {
                // FALLBACKS para otros tipos de Hub
                const baseGeos = {
                    'cube': new THREE.BoxGeometry(2, 2, 2),
                    'sphere': new THREE.SphereGeometry(2, 32, 32),
                    'cylinder': new THREE.CylinderGeometry(1.5, 1.5, 3, 32),
                    'cone': new THREE.ConeGeometry(1.5, 3, 32),
                    'torus': new THREE.TorusGeometry(1.5, 0.4, 16, 100),
                    'torusKnot': new THREE.TorusKnotGeometry(1.2, 0.4, 100, 16),
                    'lathe': new THREE.LatheGeometry([new THREE.Vector2(1, -1), new THREE.Vector2(1.5, 0), new THREE.Vector2(1, 1)], 32),
                    'wireframe': new THREE.IcosahedronGeometry(2, 1),
                    'gyroscope': new THREE.TorusGeometry(1.5, 0.05, 16, 100),
                    'hex': new THREE.CylinderGeometry(1.5, 1.5, 1, 6),
                    'diamond': new THREE.OctahedronGeometry(2),
                    'jit_assembly': new THREE.BoxGeometry(0.8, 0.8, 0.8)
                };
                let geo = baseGeos[type] || new THREE.IcosahedronGeometry(2, 1);
                const isCyan = ['sphere', 'torus', 'torusKnot', 'lathe', 'wireframe', 'gyroscope', 'hex'].includes(type);
                let mat = new THREE.MeshPhysicalMaterial({ color: isCyan ? 0x24A8E1 : 0xE4A837, transmission: 0.6, transparent: true, opacity: 0.8 });

                if (type === 'jit_assembly') {
                    for (let i = 0; i < 8; i++) {
                        const box = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x050B16 }));
                        box.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
                        box.userData.target = new THREE.Vector3((i % 2 - 0.5) * 1.6, (Math.floor(i / 2) % 2 - 0.5) * 1.6, (Math.floor(i / 4) - 0.5) * 1.6);
                        modalObject.add(box);
                    }
                } else {
                    let m = new THREE.Mesh(geo, mat);
                    m.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 })));
                    modalObject.add(m);
                }
            }

            modalScene.add(modalObject);

            // Iluminación cinematográfica global
            modalScene.add(new THREE.AmbientLight(0xffffff, 0.6));
            const keyLight = new THREE.PointLight(0xffffff, 1.2);
            keyLight.position.set(5, 5, 5);
            modalScene.add(keyLight);
            const rimLight = new THREE.PointLight(0x24A8E1, 0.5);
            rimLight.position.set(-5, -3, -5);
            modalScene.add(rimLight);

            const clock = new THREE.Clock();
            function animate() {
                modalAnimationId = requestAnimationFrame(animate);
                const t = clock.getElapsedTime();

                // Apply orbit rotation from mouse drag
                if (!isDragging) {
                    // Gentle auto-rotation when not dragging
                    orbitRotation.y += 0.002;
                }
                modalObject.rotation.y = orbitRotation.y;
                modalObject.rotation.x = orbitRotation.x;

                // ════════════════════════════════════════
                // ANIMATION LOOPS PER TYPE
                // ════════════════════════════════════════

                if (type === 'nexus_agentica' || type === 'nexus_impacto' || type === 'nexus_soberania' || type === 'nexus_gobernanza' || type === 'nexus_gemini_pro' || type === 'nexus_agentico_disruptivo') {
                    const vaultGroup = modalObject.getObjectByName("vaultGroup");
                    if (vaultGroup) {
                        const goldCore = vaultGroup.getObjectByName("goldCore");
                        const cryptoRing = vaultGroup.getObjectByName("cryptoRing");
                        const rlsShield = vaultGroup.getObjectByName("rlsShield");
                        const outerShield = vaultGroup.getObjectByName("outerShield");
                        const laserRing = vaultGroup.getObjectByName("laserRing");

                        if (goldCore) {
                            goldCore.rotation.y += 0.005;
                            goldCore.rotation.x += 0.002;
                        }
                        if (cryptoRing) {
                            cryptoRing.rotation.z += 0.01;
                            cryptoRing.rotation.x += 0.005;
                        }
                        if (rlsShield) {
                            rlsShield.children.forEach(cube => {
                                cube.position.applyAxisAngle(cube.userData.orbitAxis, cube.userData.orbitSpeed);
                                cube.rotation.x += 0.02;
                            });
                        }
                        if (outerShield) {
                            outerShield.rotation.y -= 0.003;
                            // Respiración del Escudo
                            const pulseScale = 1.0 + Math.sin(t * 2) * 0.05;
                            outerShield.scale.setScalar(pulseScale);
                        }
                        if (laserRing) {
                            // Movimiento de escaneo vertical
                            laserRing.position.y = Math.sin(t * 1.5) * 2.5;
                            laserRing.material.opacity = 0.3 + Math.abs(Math.cos(t * 1.5)) * 0.5;
                        }
                    }
                    const dust = modalObject.getObjectByName("dust");
                    if (dust) {
                        dust.children.forEach(p => p.position.applyAxisAngle(p.userData.axis, p.userData.orbitSpeed));
                    }
                } else if (type === 'brand_dna_visual') {
                    const dnaGroup = modalObject.getObjectByName("dnaGroup");
                    const dnaLight = modalObject.getObjectByName("dnaLight");
                    if (dnaGroup) {
                        dnaGroup.rotation.y += 0.005;
                        dnaGroup.rotation.x = Math.sin(t * 0.5) * 0.2;
                    }
                    if (dnaLight) {
                        dnaLight.intensity = 3 + Math.sin(t * 3) * 1.5;
                    }
                } else if (type === 'jit_mfc_visual') {
                    const jitGroup = modalObject.getObjectByName("jitGroup");
                    if (jitGroup) {
                        jitGroup.rotation.y += 0.005;
                        jitGroup.rotation.x += 0.003;
                        jitGroup.children.forEach(box => {
                            if (box.userData && box.userData.target) {
                                box.position.lerp(box.userData.target, box.userData.speed);
                                box.rotation.x += 0.01;
                                box.rotation.y += 0.01;
                            }
                        });
                    }
                } else if (type === 'visual_ai_visual') {
                    const eyeGroup = modalObject.getObjectByName("eyeGroup");
                    const iris = modalObject.getObjectByName("iris");
                    const particles = modalObject.getObjectByName("eyeParticles");
                    if (eyeGroup) eyeGroup.rotation.y = Math.sin(t) * 0.5;
                    if (iris) {
                        iris.rotation.z += 0.02;
                        iris.scale.setScalar(1 + Math.sin(t * 4) * 0.1);
                    }
                    if (particles) {
                        particles.rotation.z -= 0.005;
                        particles.children.forEach(p => {
                            p.userData.distance += p.userData.speed;
                            if (p.userData.distance > 2.5) p.userData.distance = 0.8;
                            p.position.set(Math.cos(p.userData.angle) * p.userData.distance, Math.sin(p.userData.angle) * p.userData.distance, (Math.random() - 0.5) * 0.2);
                        });
                    }
                } else if (type === 'data_opc_visual') {
                    const dataGroup = modalObject.getObjectByName("dataGroup");
                    const rings = modalObject.getObjectByName("dataRings");
                    if (dataGroup) dataGroup.rotation.y += 0.01;
                    if (rings) {
                        rings.children.forEach(ring => {
                            ring.position.y += ring.userData.speedY;
                            if (ring.position.y > 3) ring.position.y = -3;
                            if (ring.position.y < -3) ring.position.y = 3;
                            ring.scale.setScalar(1 + Math.sin(t * 5 + ring.position.y) * 0.1);
                        });
                    }
                } else if (type === 'audit_360_visual') {
                    const auditGroup = modalObject.getObjectByName("auditGroup");
                    const scanner = modalObject.getObjectByName("scanner");
                    if (auditGroup) {
                        auditGroup.children.forEach(child => {
                            if (child.userData && child.userData.axis !== undefined) {
                                if (child.userData.axis === 0) child.rotation.x += child.userData.speed;
                                if (child.userData.axis === 1) child.rotation.y += child.userData.speed;
                                if (child.userData.axis === 2) child.rotation.z += child.userData.speed;
                            }
                        });
                    }
                    if (scanner) {
                        scanner.position.x = Math.cos(t * 3) * 1.5;
                        scanner.position.z = Math.sin(t * 3) * 1.5;
                        scanner.rotation.y = -t * 3;
                    }
                } else if (type === 'predictive_visual') {
                    const predGroup = modalObject.getObjectByName("predGroup");
                    const possibilities = modalObject.getObjectByName("possibilities");
                    if (predGroup) predGroup.rotation.y += 0.01;
                    if (possibilities) {
                        possibilities.children.forEach(p => {
                            p.userData.y -= p.userData.speed;
                            if (p.userData.y < -2) {
                                p.userData.y = 2;
                                p.userData.angle = Math.random() * Math.PI * 2;
                            }
                            const slopeRadius = Math.max(0, (p.userData.y + 2) / 4 * 2);
                            p.position.set(Math.cos(p.userData.angle) * slopeRadius, p.userData.y, Math.sin(p.userData.angle) * slopeRadius);
                        });
                    }
                } else if (type === 'geo_ranking_visual') {
                    const geoGroup = modalObject.getObjectByName("geoGroup");
                    const nodes = modalObject.getObjectByName("geoNodes");
                    const orbitRings = modalObject.getObjectByName("orbitRings");
                    if (geoGroup) geoGroup.rotation.y += 0.003;
                    if (nodes) {
                        nodes.children.forEach(n => {
                            const aura = n.children[0];
                            if (aura) {
                                aura.scale.setScalar(1 + Math.sin(t * 5 + n.position.x) * 0.3);
                                aura.material.opacity = 0.2 + Math.sin(t * 3) * 0.2;
                            }
                        });
                    }
                    if (orbitRings) {
                        orbitRings.children.forEach(ring => {
                            ring.rotateOnAxis(ring.userData.axis, ring.userData.speed);
                        });
                    }
                } else if (type === 'smart_cx_visual') {
                    const cxGroup = modalObject.getObjectByName("cxGroup");
                    const core = modalObject.getObjectByName("cxCore");
                    const network = modalObject.getObjectByName("cxNetwork");
                    if (cxGroup) cxGroup.rotation.y += 0.005;
                    if (core) {
                        core.scale.setScalar(1 + Math.sin(t * 4) * 0.1);
                        core.material.emissiveIntensity = 0.8 + Math.sin(t * 4) * 0.5;
                    }
                    if (network) {
                        for (let i = 0; i < network.children.length; i += 2) {
                            const agent = network.children[i];
                            const link = network.children[i + 1];
                            agent.position.y += Math.sin(t * 2 + agent.userData.phase) * 0.02;
                            agent.scale.setScalar(1 + Math.sin(t * 6 + agent.userData.phase) * 0.2);

                            // Actualizar línea dinámica
                            link.geometry.setFromPoints([new THREE.Vector3(0, 0, 0), agent.position]);
                            link.material.opacity = 0.1 + Math.sin(t * 3 + agent.userData.phase) * 0.2;
                        }
                    }
                } else if (type === 'reputation_visual') {
                    const repGroup = modalObject.getObjectByName("repGroup");
                    const shields = modalObject.getObjectByName("repShields");
                    const core = modalObject.getObjectByName("repCore");
                    const anomalies = modalObject.getObjectByName("repAnomalies");
                    if (repGroup) repGroup.rotation.y += 0.002;
                    if (shields) {
                        shields.children.forEach(s => {
                            s.rotation.y += s.userData.speed;
                            s.rotation.x += s.userData.speed * 0.5;
                        });
                    }
                    if (core) {
                        core.rotation.y -= 0.01;
                        core.scale.setScalar(1 + Math.sin(t * 3) * 0.05);
                    }
                    if (anomalies) {
                        anomalies.children.forEach(a => {
                            a.userData.progress += a.userData.speed;
                            if (a.userData.progress > 1) {
                                a.userData.progress = 0;
                                a.userData.startAngle = Math.random() * Math.PI * 2;
                            }
                            // Empiezan lejos, se acercan, y rebotan al golpear los escudos
                            const dist = 3 - a.userData.progress * 2;
                            a.position.x = Math.cos(a.userData.startAngle) * dist;
                            a.position.z = Math.sin(a.userData.startAngle) * dist;
                            a.material.opacity = (a.userData.progress > 0.5) ? (1 - a.userData.progress) * 2 : a.userData.progress * 2;
                            // Flash rojo si chocan
                            if (a.userData.progress > 0.8) {
                                a.scale.setScalar(2);
                            } else {
                                a.scale.setScalar(1);
                            }
                        });
                    }
                } else if (type === 'data_sovereignty_visual') {
                    const sovVault = modalObject.getObjectByName("sovVault");
                    const core = modalObject.getObjectByName("sovCore");
                    const sovParticles = modalObject.getObjectByName("sovParticles");
                    if (sovVault) {
                        sovVault.children.forEach(v => {
                            v.rotation.y += v.userData.speed;
                        });
                    }
                    if (core) {
                        core.rotation.y -= 0.02;
                    }
                    if (sovParticles) {
                        sovParticles.children.forEach(p => {
                            p.position.y += p.userData.speed;
                            if (p.position.y > 1.5) p.position.y = -1.5;
                        });
                    }
                } else if (type === 'human_loop_visual') {
                    const aiTorus = modalObject.getObjectByName("hlTorusAI");
                    const flow = modalObject.getObjectByName("hlFlow");
                    const spark = modalObject.getObjectByName("hlSpark");
                    if (aiTorus) {
                        aiTorus.rotation.z += 0.01;
                        const pulse = 1 + Math.sin(t * 2) * 0.05;
                        aiTorus.scale.set(pulse, pulse, pulse);
                    }
                    if (flow) {
                        flow.children.forEach(e => {
                            e.rotation.x += e.userData.speedX;
                            e.rotation.y += e.userData.speedY;
                        });
                    }
                    if (spark) {
                        spark.intensity = 2 + Math.sin(t * 8) * 2;
                    }
                } else if (type === 'rls_security_visual') {
                    const scanner = modalObject.getObjectByName("rlsScanner");
                    const rows = modalObject.getObjectByName("rlsRows");
                    if (scanner && rows) {
                        // Scanner sube y baja
                        scanner.position.y = Math.sin(t * 1.5) * 1.5 + 0.5;

                        rows.children.forEach(r => {
                            const dist = Math.abs(r.position.y - scanner.position.y);
                            if (dist < 0.2) {
                                r.material.emissiveIntensity = 1.0;
                                r.material.opacity = 1.0;
                                r.scale.set(1.05, 1.2, 1.2);
                            } else {
                                r.material.emissiveIntensity = 0.2;
                                r.material.opacity = 0.7;
                                r.scale.set(1, 1, 1);
                            }
                        });
                    }
                } else if (type === 'jit_assembly') {
                } else {
                    // Fallback generic rotation (already handled by orbit)
                }

                modalRenderer.render(modalScene, modalCamera);
            }
            animate();
        }

        function closeEliteModal() {
            const modal = document.getElementById('eliteModal');
            if (modal) {
                modal.style.opacity = '0';
                setTimeout(() => {
                    modal.classList.remove('active');
                    modal.style.display = 'none';
                }, 400);
            }
            const dot = document.getElementById('k-dot');
            if (dot) dot.classList.remove('verified');
            if (modalAnimationId) cancelAnimationFrame(modalAnimationId);
        }

        // CURSOR ADAPTATIVO KINÉTICO (FASE 3)
        const cursor = document.getElementById('k-cursor');
        const dot = document.getElementById('k-dot');
        let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = (mouseX - 3) + 'px';
            dot.style.top = (mouseY - 3) + 'px';
        });

        function animateCursor() {
            let dx = mouseX - cursorX;
            let dy = mouseY - cursorY;
            cursorX += dx * 0.1; // Smooth lag 0.1s
            cursorY += dy * 0.1;
            cursor.style.left = (cursorX - 15) + 'px';
            cursor.style.top = (cursorY - 15) + 'px';
            requestAnimationFrame(animateCursor);
        }

        // INTERACCIÓN PREMIUM (ESCUDO Y DIAMANTE)
        document.addEventListener('mouseover', (e) => {
            const target = e.target.closest('.trust-zone, #vault, .fa-shield-halved');
            const success = e.target.closest('.success-element, #success-zone, .fa-gem, .fa-diamond');

            if (target) {
                dot.innerHTML = '🛡️';
                dot.style.background = 'transparent';
                dot.style.fontSize = '12px';
                dot.style.display = 'flex';
                dot.style.alignItems = 'center';
                dot.style.justifyContent = 'center';
                cursor.style.borderColor = 'var(--gold)';
            } else if (success) {
                dot.innerHTML = '◆';
                dot.style.background = 'transparent';
                dot.style.color = 'var(--gold)';
                dot.style.fontSize = '14px';
                dot.style.display = 'flex';
                dot.style.alignItems = 'center';
                dot.style.justifyContent = 'center';
                cursor.style.borderColor = 'var(--gold)';
            } else {
                dot.innerHTML = '';
                dot.style.background = 'var(--gold)';
                cursor.style.borderColor = 'var(--cyan)';
            }
        });

        const hoverNodes = document.querySelectorAll('a, button, .hub-card, .nexus-card, .prism-btn');
        hoverNodes.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2.2)';
                cursor.style.background = 'rgba(36, 168, 225, 0.05)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'transparent';
            });
        });

        function activateShield() {
            dot.innerHTML = '🛡️';
            cursor.style.borderColor = 'var(--gold)';
        }
        function deactivateShield() {
            dot.innerHTML = '';
            cursor.style.borderColor = 'var(--cyan)';
        }

        // BILINGUAL ENGINE
        const translations = {
            es: {
                manifesto: "Manifesto",
                hubs: "Intelligence Hubs",
                leadership: "Leadership",
                vault: "Client Vault"
            },
            en: {
                manifesto: "Manifest",
                hubs: "Intelligence Hubs",
                leadership: "Authority",
                vault: "Client Vault"
            }
        };

        function setLanguage(lang) {
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`lang-${lang}`).classList.add('active');
            document.documentElement.lang = lang;
            // Here I would update texts if I had a full translation map, 
            // but for now I'll just toggle the UI state and accessibility.
            console.log(`[GB-DNA] Language set to: ${lang}`);
        }

        // SCROLL REVEAL
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach((el, idx) => {
            el.style.transitionDelay = `${idx * 0.1}s`;
            observer.observe(el);
        });

        // ATTACH MODAL LISTENERS
        document.querySelectorAll('.nexus-card[data-key]').forEach(card => {
            card.addEventListener('click', () => {
                const key = card.getAttribute('data-key');
                openEliteModal(key);
            });
        });

        // SAFETY FALLBACK: Reveal elements after 2s if observer fails
        setTimeout(() => {
            document.querySelectorAll('.reveal:not(.active)').forEach(el => el.classList.add('active'));
        }, 2000);

        // INITIALIZE GLOBAL SYSTEMS
        animateCursor();
        console.log("[GB-DNA] Systems initialized sequentially. Elite Modals Ready.");
    


        document.addEventListener("DOMContentLoaded", function() {
            const lazyVideos = document.querySelectorAll('.lazy-video');
            
            if ('IntersectionObserver' in window) {
                const videoObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            const video = entry.target;
                            video.play().catch(function(e) {
                                console.log('Video autoplay prevented:', e);
                            });
                            videoObserver.unobserve(video);
                        } else {
                            const video = entry.target;
                            video.pause();
                        }
                    });
                }, { threshold: 0.5 });
                
                lazyVideos.forEach(function(video) {
                    videoObserver.observe(video);
                });
            } else {
                // Fallback para navegadores antiguos
                lazyVideos.forEach(function(video) {
                    video.play().catch(function(e) {});
                });
            }
        });
    


        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-TVN2ZBN4WZ');
    

