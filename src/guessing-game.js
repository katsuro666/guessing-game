class GuessingGame {
  constructor() {
    this.left = null
    this.right = null
    this.middle = null
  }

  setRange(min, max) {
    this.left = min
    this.right = max
  }

  guess() {
    this.middle = Math.round(this.right - ((this.right - this.left ) / 2))
    return this.middle
  }

  lower() {
    this.right = this.middle
  }

  greater() {
    this.left = this.middle
  }
}

module.exports = GuessingGame;
