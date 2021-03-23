function checkVariableScope() {
    'use strict';

    let i = 'function variable';

    if (true) {
        //Only change code
        let i = 'block variable';
        //Only change code
        console.log('Scope i is: ', i);
    }
    console.log('Scope i is: ', i);
    return i;
}

checkVariableScope();
module.exports = checkVariableScope;