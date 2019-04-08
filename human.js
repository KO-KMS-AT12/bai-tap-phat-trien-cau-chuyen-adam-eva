const LOG = console.log;

function Human(name, gender, weight) {

    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };

    this.isMale = function () {
        if (this.gender) {
            LOG(this.name + ' gender is Male');
        } else {
            LOG(this.name + ' gender is Famale');
        }
    }

    this.setWeight = function (weight) {
        this.weight = weight;
    };
    this.getWeight = function () {
        return this.weight;
    };

    this.setSay = function (str) {
        this.str = str;
    };
    this.getSay = function () {
        return this.str;
    };

    this.eat = function (apple) {
        return this.weight++;
    };

    this.checkApple = function (weight) {
        if (this.weight > 0) {
            this.eat(this.apple);
        }
    }
}

module.exports = Human;