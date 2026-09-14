from PIL import Image

def crop_transparent(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        img.save(output_path, "PNG")
        print("Cropped to", bbox)
    else:
        img.save(output_path, "PNG")

crop_transparent('/Users/mirzazohair/.gemini/antigravity-ide/brain/bf2a5829-e054-41f4-9a48-968ce6077a63/.user_uploaded/media_1789399668854.png', 'assets/logos/white-logo.png')
