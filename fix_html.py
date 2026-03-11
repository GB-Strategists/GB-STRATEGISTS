#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
GB STRATEGISTS - HTML Fix Script
Applies all requested changes to index.html:
1. Upgrades nav with language toggle
2. Replaces nexus card 1 (SIMBIOSIS) Three.js canvas with cinematic image
3. Replaces nexus card 4 (GOBERNANZA) Three.js canvas with cinematic image
4. Implements full bilingual setLanguage() function
"""

import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

print(f"Original file size: {len(content)} chars")
changes_made = 0

# ============================================================
# CHANGE 1: Update nav links + add language toggle
# ============================================================
old_nav = '''        <div
            style="display: flex; gap: 30px; font-family: var(--font-sub); text-transform: uppercase; font-size: 0.9rem;">
            <a href="#manifesto" class="nav-link-elite" style="color: #fff; text-decoration: none;">Manifesto</a>
            <a href="#hubs" class="nav-link-elite" style="color: #fff; text-decoration: none;">Intelligence Hubs</a>
            <a href="#authority" class="nav-link-elite" style="color: #fff; text-decoration: none;">Leadership</a>
            <a href="#vault" class="nav-link-elite"
                style="color: var(--gold); text-decoration: none; border: 1px solid var(--gold); padding: 5px 15px;">Client
                Vault</a>
        </div>
    </nav>'''

new_nav = '''        <div style="display:flex;gap:20px;align-items:center;font-family:var(--font-sub);text-transform:uppercase;font-size:0.85rem;">
            <a href="#manifesto" id="nav-manifesto-link" class="nav-link-elite" style="color:#fff;text-decoration:none;">Manifiesto</a>
            <a href="#hubs" id="nav-ecosystem-link" class="nav-link-elite" style="color:#fff;text-decoration:none;">Ecosistema</a>
            <a href="#authority" id="nav-leadership-link" class="nav-link-elite" style="color:#fff;text-decoration:none;">Liderazgo</a>
            <a href="#vault" id="nav-vault-link" class="nav-link-elite" style="color:var(--gold);text-decoration:none;border:1px solid var(--gold);padding:5px 15px;">Vault</a>
            <!-- LANGUAGE TOGGLE GB-DNA v4.0 -->
            <div style="display:flex;gap:3px;background:rgba(255,255,255,0.04);border:1px solid rgba(228,168,55,0.3);border-radius:4px;padding:3px 5px;margin-left:6px;">
                <button id="lang-es" class="lang-btn active" onclick="setLanguage(\'es\')" style="background:rgba(228,168,55,0.15);border:none;color:var(--gold);font-family:var(--font-mono);font-size:0.7rem;letter-spacing:1.5px;cursor:pointer;padding:4px 10px;border-radius:3px;font-weight:700;">ES</button>
                <button id="lang-en" class="lang-btn" onclick="setLanguage(\'en\')" style="background:none;border:none;color:rgba(255,255,255,0.4);font-family:var(--font-mono);font-size:0.7rem;letter-spacing:1.5px;cursor:pointer;padding:4px 10px;border-radius:3px;">EN</button>
            </div>
        </div>
    </nav>'''

if old_nav in content:
    content = content.replace(old_nav, new_nav, 1)
    changes_made += 1
    print("CHANGE 1: Nav updated with language toggle ✓")
else:
    print("CHANGE 1: Nav pattern NOT found - skipping")

# ============================================================
# CHANGE 2: Replace SIMBIOSIS nexus card canvas with image
# ============================================================
old_simbiosis = '''            <!-- TARJETA 1: SIMBIOSIS AGÉNTICA -->
            <div class="nexus-card reveal" data-key="nexus_agentica">
                <div id="canvas-agentica" class="icon-neural"></div>
                <span class="gold header-primary">SIMBIOSIS</span>
                <span class="cyan header-secondary">AGÉNTICA</span>
                <p>
                    Orquestamos sistemas que automatizan el <strong>80-90% de la ejecución operativa</strong>, liberando
                    el juicio crítico y la empatía humana para la dirección estratégica.
                </p>
            </div>'''

new_simbiosis = '''            <!-- TARJETA 1: SIMBIOSIS AGÉNTICA — CINEMATIC IMAGE -->
            <div class="nexus-card reveal" data-key="nexus_agentica">
                <div class="icon-neural" style="overflow:hidden;position:relative;display:flex;align-items:center;justify-content:center;">
                    <img src="assets/video/simbiosis-agentica-visual.png"
                         alt="Simbiosis Agéntica — Integración perfecta entre IA avanzada y visión humana"
                         style="width:100%;height:100%;object-fit:cover;filter:saturate(1.3) brightness(0.85);transition:transform 0.6s cubic-bezier(0.34,1.56,0.64,1);"
                         onmouseover="this.style.transform=\'scale(1.05)\'"
                         onmouseout="this.style.transform=\'scale(1)\'">
                    <div style="position:absolute;inset:0;background:radial-gradient(circle at center,transparent 40%,rgba(5,11,22,0.7) 100%);pointer-events:none;"></div>
                </div>
                <span class="gold header-primary" id="nexus-1-title1">SIMBIOSIS</span>
                <span class="cyan header-secondary" id="nexus-1-title2">AGÉNTICA</span>
                <p id="nexus-1-desc">
                    Orquestamos sistemas que automatizan el <strong>80-90% de la ejecución operativa</strong>, liberando
                    el juicio crítico y la empatía humana para la dirección estratégica.
                </p>
            </div>'''

if old_simbiosis in content:
    content = content.replace(old_simbiosis, new_simbiosis, 1)
    changes_made += 1
    print("CHANGE 2: SIMBIOSIS card updated with cinematic image ✓")
else:
    print("CHANGE 2: SIMBIOSIS pattern NOT found - trying alternate...")
    # Try with \r\n line endings
    old_simbiosis_r = old_simbiosis.replace('\n', '\r\n')
    if old_simbiosis_r in content:
        content = content.replace(old_simbiosis_r, new_simbiosis, 1)
        changes_made += 1
        print("CHANGE 2: SIMBIOSIS card updated (CRLF version) ✓")
    else:
        # Check if canvas-agentica exists
        if 'canvas-agentica' in content:
            print("  canvas-agentica exists in file")
        else:
            print("  canvas-agentica NOT in file")

# ============================================================
# CHANGE 3: Replace GOBERNANZA nexus card canvas with image
# ============================================================
old_gobernanza = '''            <!-- TARJETA 4: GOBERNANZA ÉTICA (TRUST VAULT) -->
            <div class="nexus-card reveal" data-key="nexus_gobernanza">
                <div id="canvas-gobernanza" class="icon-neural"></div>
                <span class="gold header-primary">GOBERNANZA</span>
                <span class="cyan header-secondary">ÉTICA (TRUST VAULT)</span>
                <p>
                    Blindamos su capital intelectual con un <strong>Trust Vault</strong> de grado bancario. Garantizamos
                    que la IA trabaje para su legado y privacidad.
                </p>
            </div>'''

new_gobernanza = '''            <!-- TARJETA 4: GOBERNANZA ÉTICA (TRUST VAULT) — CINEMATIC IMAGE -->
            <div class="nexus-card reveal" data-key="nexus_gobernanza">
                <div class="icon-neural" style="overflow:hidden;position:relative;display:flex;align-items:center;justify-content:center;">
                    <img src="assets/video/gobernanza-etica-visual.png"
                         alt="Gobernanza Ética — Trust Vault corporativo de grado bancario"
                         style="width:100%;height:100%;object-fit:cover;filter:saturate(1.1) brightness(0.8);transition:transform 0.6s cubic-bezier(0.34,1.56,0.64,1);"
                         onmouseover="this.style.transform=\'scale(1.05)\'"
                         onmouseout="this.style.transform=\'scale(1)\'">
                    <div style="position:absolute;inset:0;background:radial-gradient(circle at center,transparent 40%,rgba(5,11,22,0.7) 100%);pointer-events:none;"></div>
                </div>
                <span class="gold header-primary" id="nexus-4-title1">GOBERNANZA</span>
                <span class="cyan header-secondary" id="nexus-4-title2">ÉTICA (TRUST VAULT)</span>
                <p id="nexus-4-desc">
                    Blindamos su capital intelectual con un <strong>Trust Vault</strong> de grado bancario. Garantizamos
                    que la IA trabaje para su legado y privacidad.
                </p>
            </div>'''

if old_gobernanza in content:
    content = content.replace(old_gobernanza, new_gobernanza, 1)
    changes_made += 1
    print("CHANGE 3: GOBERNANZA card updated with cinematic image ✓")
else:
    print("CHANGE 3: GOBERNANZA pattern NOT found - trying alternate...")
    old_gobernanza_r = old_gobernanza.replace('\n', '\r\n')
    if old_gobernanza_r in content:
        content = content.replace(old_gobernanza_r, new_gobernanza, 1)
        changes_made += 1
        print("CHANGE 3: GOBERNANZA card updated (CRLF version) ✓")
    else:
        if 'canvas-gobernanza' in content:
            print("  canvas-gobernanza exists in file")

# ============================================================
# CHANGE 4: Replace setLanguage() stub with full bilingual engine
# ============================================================
old_setlang = '''        // BILINGUAL ENGINE
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
        }'''

new_setlang = '''        // ═══════════════════════════════════════════════════
        // BILINGUAL ENGINE v4.0 — GB STRATEGISTS ELITE
        // Full ES/EN content replacement engine
        // ═══════════════════════════════════════════════════
        let currentLang = 'es';

        const translations = {
            es: {
                // NAV
                'nav-manifesto-link': 'Manifiesto',
                'nav-ecosystem-link': 'Ecosistema',
                'nav-leadership-link': 'Liderazgo',
                'nav-vault-link': 'Vault',
                // HERO
                'brand-badge': 'PTRE-2026 // ORQUESTACIÓN AGÉNTICA // AUTORIDAD ALGORÍTMICA VALIDADA',
                'hero-lead': 'TRANSFORMAMOS su autoridad corporativa en un activo inexpugnable. Orquestamos la simbiosis entre IA Agéntica Radical y Decision Intelligence para transmutar la incertidumbre del mercado en una arquitectura de SOBERANÍA ESTRATÉGICA.',
                'hero-btn-explore': 'Explorar Ecosistema',
                'hero-btn-vault': 'Acceso Privado (Vault)',
                // NEXUS TEXT
                'nexus-1-title1': 'SIMBIOSIS',
                'nexus-1-title2': 'AGÉNTICA',
                'nexus-4-title1': 'GOBERNANZA',
                'nexus-4-title2': 'ÉTICA (TRUST VAULT)',
                // CTA
                'rescue-btn-text': 'ORQUESTACIÓN AGÉNTICA: ACTIVAR PROTOCOLO'
            },
            en: {
                // NAV
                'nav-manifesto-link': 'Manifesto',
                'nav-ecosystem-link': 'Ecosystem',
                'nav-leadership-link': 'Leadership',
                'nav-vault-link': 'Vault',
                // HERO
                'brand-badge': 'PTRE-2026 // AGENTIC ORCHESTRATION // VALIDATED ALGORITHMIC AUTHORITY',
                'hero-lead': 'We TRANSFORM your corporate authority into an impregnable strategic asset. We orchestrate the symbiosis between Radical Agentic AI and Decision Intelligence to transmute market uncertainty into a STRATEGIC SOVEREIGNTY architecture.',
                'hero-btn-explore': 'Explore Ecosystem',
                'hero-btn-vault': 'Private Access (Vault)',
                // NEXUS TEXT
                'nexus-1-title1': 'AGENTIC',
                'nexus-1-title2': 'SYMBIOSIS',
                'nexus-4-title1': 'ETHICAL',
                'nexus-4-title2': 'GOVERNANCE (TRUST VAULT)',
                // CTA
                'rescue-btn-text': 'AGENTIC ORCHESTRATION: ACTIVATE PROTOCOL'
            }
        };

        function setLanguage(lang) {
            currentLang = lang;
            const t = translations[lang];

            // Toggle button visual state
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.style.background = 'none';
                btn.style.color = 'rgba(255,255,255,0.4)';
                btn.style.fontWeight = 'normal';
                btn.classList.remove('active');
            });
            const activeBtn = document.getElementById('lang-' + lang);
            if (activeBtn) {
                activeBtn.style.background = 'rgba(228,168,55,0.15)';
                activeBtn.style.color = 'var(--gold)';
                activeBtn.style.fontWeight = '700';
                activeBtn.classList.add('active');
            }
            document.documentElement.lang = lang;

            // Update all elements by ID
            Object.keys(t).forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = t[id];
            });

            // HERO title
            const heroTitle = document.querySelector('.mega-title');
            if (heroTitle) {
                heroTitle.innerHTML = lang === 'es'
                    ? 'ORQUESTACIÓN<br>DE LA SOBERANÍA<br>ALGORÍTMICA'
                    : 'ORCHESTRATING<br>ALGORITHMIC<br>SOVEREIGNTY';
            }

            // MANIFESTO title
            const manifestoTitle = document.querySelector('.gb-title .keyword');
            if (manifestoTitle) {
                manifestoTitle.textContent = lang === 'es'
                    ? 'NOSOTROS NO COMPETIMOS.'
                    : 'WE DO NOT COMPETE.';
            }

            // Scroll band
            const scrollBand = document.querySelector('.scrolling-terms span');
            if (scrollBand) {
                scrollBand.textContent = lang === 'es'
                    ? 'GEO AUTHORITY // WORKFLOWS AGÉNTICOS // JIT MANUFACTURING // GOBERNANZA ÉTICA // SOBERANÍA VISUAL // COMPETIDOR BIG FOUR //'
                    : 'GEO AUTHORITY // AGENTIC WORKFLOWS // JIT MANUFACTURING // ETHICAL GOVERNANCE // VISUAL SOVEREIGNTY // BIG FOUR COMPETITOR //';
            }

            // NEXUS section title
            const nexusTitle = document.querySelector('#nexus .gb-title');
            if (nexusTitle) {
                nexusTitle.innerHTML = lang === 'es'
                    ? '<span class="keyword">GB NEXUS:</span> <span class="context">NÚCLEO ESTRATÉGICO</span>'
                    : '<span class="keyword">GB NEXUS:</span> <span class="context">STRATEGIC CORE</span>';
            }

            // NEXUS descriptions (only 1 & 4 have ids, others unchanged)
            const desc1 = document.getElementById('nexus-1-desc');
            if (desc1) {
                desc1.innerHTML = lang === 'es'
                    ? 'Orquestamos sistemas que automatizan el <strong>80-90% de la ejecución operativa</strong>, liberando el juicio crítico y la empatía humana para la dirección estratégica.'
                    : 'We orchestrate autonomous systems that automate <strong>80–90% of operational execution</strong>, freeing critical human judgment and strategic empathy for high-level decision-making.';
            }
            const desc4 = document.getElementById('nexus-4-desc');
            if (desc4) {
                desc4.innerHTML = lang === 'es'
                    ? 'Blindamos su capital intelectual con un <strong>Trust Vault</strong> de grado bancario. Garantizamos que la IA trabaje para su legado y privacidad.'
                    : 'We armor your intellectual capital with a banking-grade <strong>Trust Vault</strong>. We ensure that AI operates in service of your legacy, data sovereignty, and ethical compliance.';
            }

            // RESCUE button
            const rescueSpan = document.querySelector('.rescue-btn span');
            if (rescueSpan) rescueSpan.textContent = t['rescue-btn-text'];

            console.log('[GB-DNA] ✅ Language set to: ' + lang.toUpperCase());
        }'''

if old_setlang in content:
    content = content.replace(old_setlang, new_setlang, 1)
    changes_made += 1
    print("CHANGE 4: Bilingual setLanguage() engine implemented ✓")
else:
    print("CHANGE 4: setLanguage() pattern NOT found")
    # Check if it exists with \r\n
    old_setlang_r = old_setlang.replace('\n', '\r\n')
    if old_setlang_r in content:
        content = content.replace(old_setlang_r, new_setlang, 1)
        changes_made += 1
        print("CHANGE 4: Bilingual setLanguage() engine implemented (CRLF) ✓")

# ============================================================
# Also add lang-btn CSS styles to the nav style block
# ============================================================
old_nav_style_end = '''        .nav-link-elite:hover::after {
            width: 100%;
        }
    </style>'''

new_nav_style_end = '''        .nav-link-elite:hover::after {
            width: 100%;
        }
        .lang-btn.active {
            background: rgba(228,168,55,0.15) !important;
            color: var(--gold) !important;
            font-weight: 700 !important;
        }
        .lang-btn:hover {
            color: var(--gold) !important;
            background: rgba(228,168,55,0.08);
        }
    </style>'''

if old_nav_style_end in content:
    content = content.replace(old_nav_style_end, new_nav_style_end, 1)
    changes_made += 1
    print("CHANGE 5: lang-btn CSS styles added ✓")
else:
    print("CHANGE 5: nav style end pattern NOT found")

# ============================================================
# Save result
# ============================================================
print(f"\nTotal changes made: {changes_made}")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"File saved: {len(content)} chars")
print("All done!")
