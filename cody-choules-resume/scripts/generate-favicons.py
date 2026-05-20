"""Generate PNG and ICO favicons from the 10x10 pixel grid (matches public/favicon.svg)."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public"

BG = (39, 39, 42)  # #27272a
FG = (16, 185, 129)  # #10b981

# 10x10: symmetric square C (same layout as favicon.svg rects)
GRID = [[0] * 10 for _ in range(10)]
for y in range(9):
    GRID[y][0] = 1
for x in range(1, 9):
    GRID[0][x] = 1
    GRID[8][x] = 1
for y in range(1, 3):
    GRID[y][9] = 1
for y in range(6, 8):
    GRID[y][9] = 1


def render(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), BG + (255,))
    cell = size // 10
    for y, row in enumerate(GRID):
        for x, on in enumerate(row):
            if on:
                img.paste(FG + (255,), (x * cell, y * cell, (x + 1) * cell, (y + 1) * cell))
    return img


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    render(32).save(OUT / "favicon-32.png")
    img16 = render(16)
    img16.save(OUT / "favicon-16.png")
    img16.save(OUT / "favicon.ico", format="ICO", sizes=[(16, 16)])
    print("Wrote favicon-16.png, favicon-32.png, favicon.ico")


if __name__ == "__main__":
    main()
