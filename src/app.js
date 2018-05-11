import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';

var counter = 0;

document.getElementById('button').addEventListener('click', function() {
    switch (++counter) {
        case 1:
            module1('label');
            break;
        case 2:
            module2('label');
            break;
        case 3:
            module3('label');
            break;
        default:
            counter = 0;
            break;
    }
});