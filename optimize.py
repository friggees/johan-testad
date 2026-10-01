from PIL import Image
from pathlib import Path
for p in Path('public/assets').glob('*.jpg'):
    im=Image.open(p).convert('RGB')
    im.thumbnail((1200,1500))
    im.save(p.with_suffix('.webp'),'WEBP',quality=88)
