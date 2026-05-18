const JimpModule = require('jimp')
const Jimp = JimpModule && JimpModule.Jimp ? JimpModule.Jimp : JimpModule
const path = require('path')

const input = path.join(__dirname, '..', 'src', 'assets', 'images', 'logos', 'zeytun.png')
const output = input

// Approximate background blue color (tune if needed)
const bg = { r: 12, g: 45, b: 142 }
const tolerance = 80 // increase to be more aggressive

Jimp.read(input)
  .then((img) => {
    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0]
      const g = this.bitmap.data[idx + 1]
      const b = this.bitmap.data[idx + 2]

      const dist = Math.sqrt((r - bg.r) ** 2 + (g - bg.g) ** 2 + (b - bg.b) ** 2)
      if (dist <= tolerance) {
        // background -> transparent
        this.bitmap.data[idx + 3] = 0
      } else {
        // logo pixels -> force white while keeping alpha
        this.bitmap.data[idx + 0] = 255
        this.bitmap.data[idx + 1] = 255
        this.bitmap.data[idx + 2] = 255
      }
    })

    return img.writeAsync(output)
  })
  .then(() => console.log('Wrote transparent image to', output))
  .catch((err) => {
    console.error('Error processing image:', err)
    process.exit(1)
  })
