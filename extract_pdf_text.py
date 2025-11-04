import fitz
import sys

pdf_path = sys.argv[1]
output_txt = sys.argv[2]

doc = fitz.open(pdf_path)
text = ""
for page in doc:
    text += page.get_text()
with open(output_txt, "w", encoding="utf-8") as f:
    f.write(text)
