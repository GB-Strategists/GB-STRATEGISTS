"""
GB STRATEGISTS — Hero Loop Video Generator
Genera un video procedural atmosférico: partículas de luz dorada/cian sobre fondo oscuro.
Output: hero-loop.mp4 y hero-loop.webm (< 1 MB cada uno).
"""

import math
import random
import os

try:
    import imageio
    import numpy as np
    HAS_IMAGEIO = True
except ImportError:
    HAS_IMAGEIO = False

try:
    from PIL import Image, ImageDraw
    HAS_PILLOW = True
except ImportError:
    HAS_PILLOW = False

OUTPUT_DIR = r"c:\Users\GUIDO\Documents\Propuestas Comerciales\GB-Standard\ADN\pwd\next-app\public\assets\video"
W, H    = 1280, 720
FPS     = 24
SECONDS = 5    # Reducido para velocidad
FRAMES  = FPS * SECONDS

# Paleta GB Strategists
BG_COLOR   = (5, 11, 22)          # #050B16
GOLD_COLOR = (228, 168, 55)        # #E4A837
CYAN_COLOR = (36, 168, 225)        # #24A8E1

def ease_in_out(t):
    return t * t * (3 - 2 * t)

class Particle:
    def __init__(self, rng):
        self.reset(rng)
    
    def reset(self, rng):
        self.x   = rng.uniform(0, W)
        self.y   = rng.uniform(0, H)
        self.vx  = rng.uniform(-0.5, 0.5)
        self.vy  = rng.uniform(-1.0, -0.2)
        self.life = 0
        self.max_life = rng.uniform(2.0, 5.0)
        self.size = rng.uniform(1.0, 3.0)
        self.is_gold = rng.random() > 0.5
        self.twinkle = rng.uniform(0, math.pi * 2)
    
    def update(self, dt, rng):
        self.x   += self.vx
        self.y   += self.vy
        self.life += dt
        if self.life > self.max_life or self.x < 0 or self.x > W or self.y < 0:
            self.reset(rng)

def render_frame_pillow(frame_idx: int, particles: list, rng) -> "Image.Image":
    img  = Image.new("RGB", (W, H), BG_COLOR)
    # Usar una capa RGBA para las partículas
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    t_global = frame_idx / FRAMES

    # 1. Subtle background gradients
    # En lugar de pixel-by-pixel, usamos elipses grandes con bajo alpha
    draw.ellipse([W//4, -H//4, 3*W//4, H//4], fill=(228, 168, 55, 15))
    draw.ellipse([3*W//4, 3*H//4, 5*W//4, 5*H//4], fill=(36, 168, 225, 10))

    # 2. Particles
    for p in particles:
        alpha_t = ease_in_out(min(p.life / p.max_life, 1.0))
        twinkle  = 0.5 + 0.5 * math.sin(p.twinkle + frame_idx * 0.2)
        alpha    = int(180 * alpha_t * twinkle)
        color    = GOLD_COLOR if p.is_gold else CYAN_COLOR
        rgba     = (color[0], color[1], color[2], alpha)
        s = int(p.size)
        draw.ellipse([p.x - s, p.y - s, p.x + s, p.y + s], fill=rgba)

    # Combinar
    img.paste(overlay, (0, 0), overlay)
    return img

def main():
    if not HAS_PILLOW:
        print("Pillow not found. Run: pip install pillow")
        return

    rng = random.Random(42)
    particles = [Particle(rng) for _ in range(80)]
    dt = 1.0 / FPS

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    frames = []
    print(f"Generating {FRAMES} frames...")
    for i in range(FRAMES):
        for p in particles:
            p.update(dt, rng)
        frames.append(render_frame_pillow(i, particles, rng))
        if i % (FPS) == 0:
            print(f"Frame {i}/{FRAMES} done")

    # Fallback to GIF as primary output since it's easier to generate without external ffmpeg binary
    # and browsers handle it in <video> if no other source works, or we can use it as a placeholder.
    # However, user asked for webm/mp4.
    
    mp4_path = os.path.join(OUTPUT_DIR, "hero-loop.mp4")
    webm_path = os.path.join(OUTPUT_DIR, "hero-loop.webm")

    if HAS_IMAGEIO:
        print("Saving MP4/WebM using imageio...")
        np_frames = [np.array(f) for f in frames]
        try:
            # We use crf 35 to ensure small file size
            writer = imageio.get_writer(mp4_path, fps=FPS, codec='libx264', quality=5)
            for f in np_frames:
                writer.append_data(f)
            writer.close()
            print(f"Saved: {mp4_path}")

            writer = imageio.get_writer(webm_path, fps=FPS, codec='libvpx', quality=3)
            for f in np_frames:
                writer.append_data(f)
            writer.close()
            print(f"Saved: {webm_path}")
        except Exception as e:
            print(f"Error saving video: {e}")
            # Final fallback: save as high quality gif
            gif_path = os.path.join(OUTPUT_DIR, "hero-loop.gif")
            frames[0].save(gif_path, save_all=True, append_images=frames[1:], loop=0, duration=1000/FPS)
            print(f"Saved as fallback GIF: {gif_path}")
    else:
        gif_path = os.path.join(OUTPUT_DIR, "hero-loop.gif")
        frames[0].save(gif_path, save_all=True, append_images=frames[1:], loop=0, duration=1000/FPS)
        print(f"Saved as fallback GIF: {gif_path}")

if __name__ == "__main__":
    main()
