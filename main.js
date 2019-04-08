let Apple = require('./apple');
let Human = require('./human');

const LOG = console.log;

let apple = new Apple(10);
let adam = new Human('Adam', true, 70);
let eva = new Human('Eva', false, 45);

adam.setSay('Hello, I am ' + adam.getName());
LOG(adam.getSay());
eva.setSay('Hello, I am ' + eva.getName());
LOG(eva.getSay());
adam.isMale();
eva.isMale();

apple.isEmpty();

while (apple.getWeight() > 0) {
    if (apple.getWeight()%2==0){
        eva.checkApple(apple.getWeight());
    } else {
        adam.checkApple(apple.getWeight());
    }
        apple.decrease();
}

LOG("Qua tao sau khi bi an: "+apple.getWeight());
LOG("Can nang sau khi an tao cua "+adam.getName()+" la : "+ +adam.getWeight());
LOG("Can nang sau khi an tao cua "+eva.getName()+" la : "+ +eva.getWeight());
