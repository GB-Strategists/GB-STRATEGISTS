import os
import re

dir_path = r'c:\Users\GUIDO\Documents\Propuestas Comerciales\GB-Standard\ADN\pwd\next-app\src\app'
css_files = [f for f in os.listdir(dir_path) if f.endswith('.css')]

for filename in css_files:
    path = os.path.join(dir_path, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Handle url(assets/...), url('assets/...'), url("assets/...")
    # It must not start with / if I want to prepend /
    new_content = re.sub(r'url\(([\"\']?)assets\/', r'url(\1/assets/', content)
    
    if content != new_content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated assets paths in {filename}')
    else:
        print(f'No changes needed for {filename}')
