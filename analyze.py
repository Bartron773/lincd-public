import json
from bs4 import BeautifulSoup

def analyze_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    analysis = {
        "metadata": {
            "title": soup.title.string if soup.title else None,
            "classes_used": list(set([cls for tag in soup.find_all(True) if tag.get('class') for cls in tag.get('class')]))
        },
        "headings": {
            "h1": [h.get_text(strip=True) for h in soup.find_all('h1')],
            "h2": [h.get_text(strip=True) for h in soup.find_all('h2')],
            "h3": [h.get_text(strip=True) for h in soup.find_all('h3')],
            "h4": [h.get_text(strip=True) for h in soup.find_all('h4')],
            "h5": [h.get_text(strip=True) for h in soup.find_all('h5')],
            "h6": [h.get_text(strip=True) for h in soup.find_all('h6')]
        },
        "links": []
    }

    # Extract standard a tags
    for a in soup.find_all('a'):
        href = a.get('href')
        if href:
            analysis["links"].append({
                "type": "a",
                "text": a.get_text(strip=True),
                "url": href
            })

    # Extract button tags which seem to act like nav links in this app
    for btn in soup.find_all('button'):
        analysis["links"].append({
            "type": "button",
            "text": btn.get_text(strip=True)
        })

    with open('analysis.json', 'w', encoding='utf-8') as f:
        json.dump(analysis, f, indent=4)

if __name__ == "__main__":
    analyze_html('lincd.html')
