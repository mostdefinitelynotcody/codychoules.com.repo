import fitz
from pathlib import Path

import sys
path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1] / "public" / "cody-choules-resume.pdf"
doc = fitz.open(path)
page = doc[0]
for block in page.get_text("dict", clip=fitz.Rect(0, 230, 612, 320))["blocks"]:
    if block.get("type") != 0:
        continue
    for line in block["lines"]:
        for span in line["spans"]:
            t = span["text"].replace("\u200b", "").strip()
            if t:
                b = span["bbox"]
                safe = t[:75].encode("ascii", "replace").decode()
                print(f"y={b[1]:.1f}-{b[3]:.1f} | {safe}")
doc.close()
