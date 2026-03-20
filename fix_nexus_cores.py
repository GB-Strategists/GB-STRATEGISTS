import re

with open("c:/Users/GUIDO/Documents/Propuestas Comerciales/GB-Standard/ADN/pwd/index.html", "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "        // --- ICONOS NEXUS (TARJETAS SUPERIORES) ---"
end_marker = "        // --- SIMULADORES HUB (VISUALIZACIÓN DE ALTO NIVEL) ---"

replacement = """        // --- MOTOR UNIFICADO DE CORE NEXUS (GEMINI PRO HIGH) ---
        function createUnifiedNexusCore(scene, camera, renderer, geom, primaryColor, secondaryColor) {
            const vaultGroup = new THREE.Group();
            scene.add(vaultGroup);

            const coreMat = new THREE.MeshPhysicalMaterial({
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
                new THREE.MeshBasicMaterial({ color: secondaryColor })
            );
            vaultGroup.add(pureLight);

            const internalLight = new THREE.PointLight(secondaryColor, 2, 5);
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
            createUnifiedNexusCore(scene, camera, renderer, new THREE.CylinderGeometry(0.7, 0.7, 2.0, 6), 0x24A8E1, 0xE4A837);
        });

        createIconEngine('canvas-impacto', (scene, camera, renderer) => {
            const geom = new THREE.OctahedronGeometry(1.0, 0);
            geom.scale(1, 1.5, 1);
            createUnifiedNexusCore(scene, camera, renderer, geom, 0xE4A837, 0x24A8E1);
        });

        createIconEngine('canvas-soberania', (scene, camera, renderer) => {
            createUnifiedNexusCore(scene, camera, renderer, new THREE.DodecahedronGeometry(0.8), 0x24A8E1, 0xE4A837);
        });

        createIconEngine('canvas-gobernanza', (scene, camera, renderer) => {
            createUnifiedNexusCore(scene, camera, renderer, new THREE.IcosahedronGeometry(0.7, 1), 0xE4A837, 0x24A8E1);
        });

        createIconEngine('canvas-gemini-pro', (scene, camera, renderer) => {
            createUnifiedNexusCore(scene, camera, renderer, new THREE.OctahedronGeometry(1.0, 0), 0x24A8E1, 0xE4A837);
        });

        createIconEngine('canvas-agentico-disruptivo', (scene, camera, renderer) => {
            createUnifiedNexusCore(scene, camera, renderer, new THREE.TetrahedronGeometry(1.0, 0), 0xE4A837, 0x24A8E1);
        });

"""

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + replacement + content[end_idx:]
    with open("c:/Users/GUIDO/Documents/Propuestas Comerciales/GB-Standard/ADN/pwd/index.html", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Replacement successful!")
else:
    print("Markers not found!")
    print("start_idx:", start_idx)
    print("end_idx:", end_idx)
