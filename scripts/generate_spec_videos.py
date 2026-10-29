from pathlib import Path
import subprocess

ROOT = Path('/home/ubuntu/saeefport')
OUT = ROOT / 'public'
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

videos = [
    {
        'file': 'lumapay-ugc-10s.mp4', 'brand': 'LumaPay', 'label': 'FINTECH / ONE VIEW',
        'hook': 'LESS CHECKING. MORE MOVING.', 'cta': 'ONE DASHBOARD. ONE MOVE.',
        'bg': '10110f', 'accent': 'c7ff4d', 'fg': 'f2f0e9', 'freq': '220',
    },
    {
        'file': 'nuru-skin-ugc-10s.mp4', 'brand': 'Nuru Skin', 'label': 'BEAUTY / TEXTURE TEST',
        'hook': 'FEEL IT BEFORE YOU SEE IT.', 'cta': 'TEXTURE THAT TRAVELS.',
        'bg': 'f5d6c8', 'accent': 'a34f5b', 'fg': '351e24', 'freq': '262',
    },
    {
        'file': 'relay-os-ugc-10s.mp4', 'brand': 'RelayOS', 'label': 'SAAS / WORKFLOW',
        'hook': 'SEVEN TABS. ONE CLEAN FLOW.', 'cta': 'MAKE ROOM TO SHIP.',
        'bg': 'b9e6fa', 'accent': '155b83', 'fg': '0b2434', 'freq': '330',
    },
    {
        'file': 'orbit-protocol-ugc-10s.mp4', 'brand': 'Orbit Protocol', 'label': 'WEB3 / COMMUNITY',
        'hook': 'NO GLOSSARY REQUIRED.', 'cta': 'LEARN BY DOING.',
        'bg': 'd7c7ff', 'accent': '542e98', 'fg': '211440', 'freq': '392',
    },
    {
        'file': 'kairo-ugc-10s.mp4', 'brand': 'Kairo', 'label': 'FASHION / CULTURE',
        'hook': 'WEAR THE SIGNAL.', 'cta': 'MAKE THE LOOK TRAVEL.',
        'bg': 'ff877c', 'accent': '5a171a', 'fg': '2a1010', 'freq': '440',
    },
]

def esc(value: str) -> str:
    return value.replace('\\', '\\\\').replace(':', '\\:').replace("'", "\\\\'")

def drawtext(text, color, size, x, y, enable=None, alpha=1.0):
    parts = [
        f"fontfile={FONT}", f"text='{esc(text)}'", f"fontcolor=0x{color}@{alpha}",
        f"fontsize={size}", f"x={x}", f"y={y}", "borderw=0"
    ]
    if enable:
        parts.append(f"enable='{enable}'")
    return 'drawtext=' + ':'.join(parts)

for item in videos:
    accent = item['accent']
    fg = item['fg']
    bg = item['bg']
    filters = [
        f"color=c=0x{bg}:s=768x1344:r=24:d=10",
        f"drawbox=x='-260+55*t':y='210+35*sin(t)':w=1050:h=12:color=0x{accent}@0.38:t=fill",
        f"drawbox=x='110+42*t':y='980-24*sin(t)':w=580:h=3:color=0x{accent}@0.75:t=fill",
        drawtext('SAEEf / SPEC MOTION', accent, 22, 54, 56),
        drawtext(item['label'], fg, 20, 54, 112),
        drawtext(item['brand'], fg, 68, 54, 230),
        drawtext(item['hook'], fg, 36, 54, 570),
        drawtext(item['cta'], accent, 28, 54, 1160),
        drawtext('10 SEC / UGC DIRECTION', fg, 18, 54, 1284),
        f"drawbox=x='48+18*sin(t)':y=1095:w=672:h=1:color=0x{fg}@0.38:t=fill",
    ]
    vf = ','.join(filters)
    output = OUT / item['file']
    cmd = [
        'ffmpeg', '-y', '-f', 'lavfi', '-i', vf,
        '-f', 'lavfi', '-i', f"sine=frequency={item['freq']}:sample_rate=44100:duration=10",
        '-map', '0:v:0', '-map', '1:a:0', '-c:v', 'libx264', '-preset', 'medium',
        '-crf', '21', '-pix_fmt', 'yuv420p', '-r', '24', '-c:a', 'aac', '-b:a', '96k',
        '-shortest', '-movflags', '+faststart', str(output)
    ]
    print('Generating', output.name)
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL)

print('Generated', len(videos), 'videos')
