import sys

with open("c:/Users/GUIDO/Documents/Propuestas Comerciales/GB-Standard/ADN/pwd/index.html", "r", encoding="utf-8") as f:
    html = f.read()

start_init = "            if (type === 'nexus_agentica') {"
end_init = "            } else if (type === 'brand_dna_visual') {"

init_replacement = """            if (type === 'nexus_agentica' || type === 'nexus_impacto' || type === 'nexus_soberania' || type === 'nexus_gobernanza' || type === 'nexus_gemini_pro' || type === 'nexus_agentico_disruptivo') {
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

            } else if (type === 'brand_dna_visual') {"""

start_anim = "                if (type === 'nexus_agentica') {"
end_anim = "                } else if (type === 'brand_dna_visual') {"

anim_replacement = """                if (type === 'nexus_agentica' || type === 'nexus_impacto' || type === 'nexus_soberania' || type === 'nexus_gobernanza' || type === 'nexus_gemini_pro' || type === 'nexus_agentico_disruptivo') {
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
                } else if (type === 'brand_dna_visual') {"""

idx1 = html.find(start_init)
idx2 = html.find(end_init, idx1)

if idx1 != -1 and idx2 != -1:
    h1 = html[:idx1] + init_replacement + html[idx2 + len(end_init):]
else:
    print("Init block not found!")
    sys.exit(1)

idx3 = h1.find(start_anim)
idx4 = h1.find(end_anim, idx3)

if idx3 != -1 and idx4 != -1:
    h2 = h1[:idx3] + anim_replacement + h1[idx4 + len(end_anim):]
    with open("c:/Users/GUIDO/Documents/Propuestas Comerciales/GB-Standard/ADN/pwd/index.html", "w", encoding="utf-8") as f:
        f.write(h2)
    print("Replacement success modals!")
else:
    print("Anim block not found!")
    sys.exit(1)
