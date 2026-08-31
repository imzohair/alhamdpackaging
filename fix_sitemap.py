import os
import xml.etree.ElementTree as ET

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
exclude = ['404.html', 'admin.html', 'product-detail.html'] 
# Wait, should product-detail.html be included? User says: "product-detail.html ... The sitemap must contain ONLY pages that actually exist and are intended to be indexed."
# product-detail.html is a placeholder in this static site context unless they have real product detail pages. The user listed it in the routes:
# "The website currently uses pages such as: ... product-detail.html"
# But they also say "The sitemap must contain ONLY pages that actually exist and are intended to be indexed."
# Since it exists, I'll include it. Let's include it.

exclude = ['404.html', 'admin.html']
valid_urls = []

for f in html_files:
    if f not in exclude:
        if f == 'index.html':
            valid_urls.append('https://alhamdpackaging.com/')
        else:
            # Does Hostinger use .html extensions in the URL? 
            # Usually static hosting keeps the .html unless there's rewrite rules. 
            # The canonical URLs in my previous step used the path without .html (e.g. https://alhamdpackaging.com/about)
            # Wait, did they? Let me check update_seo.py logic.
            pass

