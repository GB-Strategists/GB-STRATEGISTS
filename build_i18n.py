import json
import re
from bs4 import BeautifulSoup
from collections import OrderedDict

# Define translation dictionary template here, we will output this later
# Or we can just build dicts and save.

html_file = 'index.html'

with open(html_file, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

text_nodes = []
counter = 1

# Dictionary to hold the extracted text mappings: 'key' -> {'es': original_text, 'en': ''}
# To replace in HTML, we will add data-i18n="key" to the element.
i18n_dict = OrderedDict()

# A function to generate a safe key
def generate_key(text, element_name):
    clean = re.sub(r'[^a-zA-Z0-9]+', '_', text.lower()).strip('_')
    if len(clean) > 30:
        clean = clean[:30] + '...'
    return f"key_{len(i18n_dict)+1}_{clean}"

def is_valid_text(text):
    text = text.strip()
    if not text: return False
    # skip single characters mostly
    if len(text) <= 1: return False
    # skip numbers
    if re.match(r'^[\s\d_.\-\+*/=!]+$', text): return False
    return True

# We want to traverse elements. Because beautifulsoup string replacement can be tricky, 
# we'll add the attribute data-i18n to the tag that contains the string.
# However, tags can have multiple strings. 
# Simplest is to find leaf elements that contain text.

tags_to_translate = soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'button', 'li', 'strong', 'div'])

for tag in tags_to_translate:
    # only care if the element contains non-empty direct strings 
    # and has no block children modifying the text heavily.
    # Actually, getting tag.contents where it's a NavigableString.
    has_meaningful_text = False
    full_text = []
    
    # Check direct text inside the tag
    direct_texts = [child.strip() for child in tag.contents if isinstance(child, str)]
    combined = " ".join(direct_texts).strip()
    
    # We will simply assign `data-i18n` to this tag and store its innerHTML if it doesn't contain deep complex elements.
    # OR, we simply use innerHTML
    # Let's see if we should just extract inner HTML of elements that contain textual content
if True:
    pass

# Print stats
print("Script successfully created")
