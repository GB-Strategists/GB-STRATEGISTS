import sys

filepath = "c:/Users/GUIDO/Documents/Propuestas Comerciales/GB-Standard/ADN/pwd/index.html"
with open(filepath, "r", encoding="utf-8") as f:
    html = f.read()

changes = 0

if "0x333333" in html:
    html = html.replace("0x333333", "0x050B16")
    changes += 1

if changes > 0:
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print("Replaced unbranded grays with corporate void.")
else:
    print("No unbranded colors found.")
