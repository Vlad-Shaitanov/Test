"use strict";

class Options {
	constructor(height, width, bg, fontSize, textAlign, borderRadius = 0) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		this.borderRadius = borderRadius;
	}

	createNewDiv() {
		let div = document.createElement("div");
		document.body.appendChild(div);
		div.style.cssText = `
		height: ${this.height}px;
		width: ${this.width}px;
		background-color:${this.bg};
		font-size:${this.fontSize}px;
		text-align:${this.textAlign};
		border-radius: ${this.borderRadius}%;
		`;

	}
}

let square = new Options(200, 200, "red", 30, "center");
square.createNewDiv();

let rectangle = new Options(200, 500, "blue", 50, "right");
rectangle.createNewDiv();

let round = new Options(200, 200, "green", 30, "center", 50);
round.createNewDiv();
