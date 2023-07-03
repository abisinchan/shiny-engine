class Logo {
  constructor(text, textColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
  }

  generateLOGO() {
    let svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n`;

    if (this.shape.type === 'circle') {
      svgString += `<circle cx="150" cy="100" r="80" fill="${this.shape.color}" />\n`;
      svgString += `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`;
    } else if (this.shape.type === 'triangle') {
      svgString += `<polygon points="150,20 220,180 80,180" fill="${this.shape.color}" />\n`;
      svgString += `<text x="150" y="145" font-size="35" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`;
    } else if (this.shape.type === 'square') {
      svgString += `<rect x="80" y="60" width="140" height="140" fill="${this.shape.color}" />\n`;
      svgString += `<text x="150" y="145" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`;
    }

    svgString += `</svg>`;
    return svgString;
  }
}

module.exports = Logo;
