import json
import re

with open('es_strings.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

refined = {}
for text in data.keys():
    # Remove HTML comments logic if they got caught
    if re.search(r'^[A-Z0-9\s:/\-]*$', text) and 'CEO' not in text:
        # mostly uppercase navigational or comments
        refined[text] = text
    else:
        refined[text] = ""

with open('es_strings_refined.json', 'w', encoding='utf-8') as f:
    json.dump(refined, f, ensure_ascii=False, indent=2)

print(f"Refined down to {len(refined)} strings.")
