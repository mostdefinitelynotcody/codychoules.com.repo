"""Replace Landmark job title text in the resume PDF (Spectral-Bold, matching other titles)."""
from __future__ import annotations

import shutil
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
PDF_PATHS = [
    ROOT / "public" / "cody-choules-resume.pdf",
    ROOT.parent / "_Resume Cody Choules_.pdf",
]

OLD_TITLES = (
    "Computer Aided Draftsman",
    "VDC Coordinator & Digital Transformation Lead",
    "VDC Coordinator & Technical Lead",
    "VDC Coordinator & Technical Specialist",
)
NEW_TITLE = "VDC Coordinator & Technical Specialist"
FONT_SIZE = 10.0


def spectral_bold_font(doc: fitz.Document, page: fitz.Page) -> fitz.Font:
    for xref, _ext, _typ, basename, *_rest in doc.get_page_fonts(page.number):
        if "Spectral-Bold" in basename:
            return fitz.Font(fontbuffer=doc.extract_font(xref)[3])
    raise RuntimeError("Spectral-Bold font not found in PDF")


def find_title_rect(page: fitz.Page) -> fitz.Rect:
    for query in (NEW_TITLE, *OLD_TITLES, "VDC Coordinator"):
        hits = page.search_for(query)
        if hits:
            return hits[0]
    raise RuntimeError("Landmark job title not found in PDF")


def replace_title(pdf_path: Path) -> None:
    if not pdf_path.is_file():
        print(f"skip (missing): {pdf_path}")
        return

    doc = fitz.open(pdf_path)
    page = doc[0]
    rect = find_title_rect(page)
    font = spectral_bold_font(doc, page)

    # Redact only the title line — do not extend below rect.y1 (bullet starts there).
    date_hits = page.search_for("2017-2023") or page.search_for("2017")
    x1 = date_hits[0].x0 - 4 if date_hits else rect.x1 + 200
    redact = fitz.Rect(rect.x0, rect.y0, x1, rect.y1)

    page.add_redact_annot(redact, fill=(1, 1, 1))
    page.apply_redactions()

    baseline_y = rect.y1 - 2
    writer = fitz.TextWriter(page.rect, color=(0, 0, 0))
    writer.append((rect.x0, baseline_y), NEW_TITLE, font=font, fontsize=FONT_SIZE)
    writer.write_text(page)

    tmp = pdf_path.with_suffix(".tmp.pdf")
    doc.save(tmp, garbage=4, deflate=True)
    doc.close()
    tmp.replace(pdf_path)
    print(f"updated: {pdf_path}")


def main() -> None:
    import sys

    if "--from-clean" in sys.argv:
        source = ROOT / "public" / "cody-choules-resume-clean.pdf"
        if not source.is_file():
            raise SystemExit(f"Missing clean baseline: {source}")
        for path in PDF_PATHS:
            shutil.copy2(source, path)
            print(f"restored from clean copy: {path}")

    for path in PDF_PATHS:
        replace_title(path)


if __name__ == "__main__":
    main()
