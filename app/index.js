import _ from 'lodash';
import {User} from './User';
var user=new User("haha","123456");
function component () {
    var element = document.createElement('div');
    element.innerHTML = _.join([user.name,user.password], ' ');
    return element;
}
document.body.appendChild(component());