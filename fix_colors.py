import sys

filepath = "c:/Users/GUIDO/Documents/Propuestas Comerciales/GB-Standard/ADN/pwd/index.html"
with open(filepath, "r", encoding="utf-8") as f:
    html = f.read()

count = html.count("0x0A192F")
if count > 0:
    html = html.replace("0x0A192F", "0x050B16")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Replaced {count} instances of 0x0A192F with 0x050B16.")
else:
    print("No instances found.")
