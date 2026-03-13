from bs4 import BeautifulSoup, NavigableString
import json
import re

html_file = 'index.html'

with open(html_file, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

def should_capture(text, parent):
    if parent.name in ['script', 'style', 'head', 'meta', 'title', 'noscript']:
        return False
    # skip text that is just whitespace or symbols
    if not text.strip():
        return False
    if len(text.strip()) <= 1:
        return False
    # skip if mostly numbers or special characters
    if re.match(r'^[\W\s\d_.+\-=/*&\|%@#~]+$', text.strip()):
        return False
    return True

unique_texts = set()

# iterate all text nodes directly
for element in soup.descendants:
    if isinstance(element, NavigableString):
        parent = element.parent
        text = str(element)
        if should_capture(text, parent):
            # clean the string slightly to ignore leading/trailing whitespace
            clean_text = text.strip()
            # To preserve inner spacing, but removing leading/trailing
            unique_texts.add(clean_text)

# create a map from the original text (for indexing) to the translation slot
dictionary = {}
for idx, text in enumerate(sorted(list(unique_texts))):
    dictionary[text] = "" # empty for English

with open('es_strings.json', 'w', encoding='utf-8') as f:
    json.dump(dictionary, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(dictionary)} unique text nodes.")
