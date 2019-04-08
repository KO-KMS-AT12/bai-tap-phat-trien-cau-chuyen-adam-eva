const LOG = console.log;

function Apple(weight) {
    this.weight = weight;

    this.setWeight = function (weight) {
        this.weight = weight;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    };
    this.isEmpty = function () {
        if (this.weight === 10) {
            LOG("Qua tao chua bi an");
        } else if (this.weight > 0 && this.weight < 10) {
            LOG("Qua tao dang an do va con : " + this.weight+" dv");
        } else if (this.weight == 0) {
            LOG("Qua tao da bi an het");
        } else {
            LOG("Cay tao khong co qua tao nao ca");
        }
    }

}

module.exports = Apple;