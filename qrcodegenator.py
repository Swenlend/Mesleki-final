import qrcode
img = qrcode.make('http://127.0.0.1:5500/dersi.html#home')
type(img)  # qrcode.image.pil.PilImage
img.save("some_file.png")