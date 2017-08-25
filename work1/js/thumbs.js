class PraiseButton {
	constructor () {

	}
	addNum (num) {
		num = num+1;
		return num;
	}
}


export class ThumbsUp extends PraiseButton {
	constructor () {
		super();
		this.thumbsNum = 0;
		this.limited = false;
		this.limitNum = 10;
	}

	addThumbsNum () {
		this.thumbsNum = this.addNum(this.thumbsNum);
	}

	get thumbs () {
		this.addThumbsNum();
		if (this.thumbsNum >= this.limitNum) {
			this.limited = true;
		}
		return this.thumbsNum;
	}

}