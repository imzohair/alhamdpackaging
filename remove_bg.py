from PIL import Image

def remove_black_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        r, g, b, a = item
        # Calculate how "bright" the pixel is
        brightness = max(r, g, b)
        
        if brightness == 0:
            newData.append((0, 0, 0, 0))
        else:
            # Un-premultiply alpha from black background
            # If the background was black (0,0,0), then the observed color is:
            # observed = original * alpha + black * (1 - alpha)
            # observed = original * alpha
            # So original = observed / alpha
            new_a = brightness
            new_r = int(min(255, r * 255 / new_a))
            new_g = int(min(255, g * 255 / new_a))
            new_b = int(min(255, b * 255 / new_a))
            newData.append((new_r, new_g, new_b, new_a))
            
    img.putdata(newData)
    img.save(output_path, "PNG")

remove_black_bg('/Users/mirzazohair/.gemini/antigravity-ide/brain/bf2a5829-e054-41f4-9a48-968ce6077a63/.user_uploaded/media_1789399668854.png', 'assets/logos/white-logo.png')
print("Done")
