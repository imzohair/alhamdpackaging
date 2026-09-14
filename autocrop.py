from PIL import Image

def crop_transparent(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # Get bounding box of non-zero alpha
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        img.save(output_path, "PNG")
        print("Cropped to", bbox)
    else:
        print("No non-transparent pixels found!")

crop_transparent('assets/logos/white-logo.png', 'assets/logos/white-logo.png')
