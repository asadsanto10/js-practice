function call_back(name, age, task) {
    console.log('hello', name);
    console.log('youre age', age);
    //console.log(task);
    task();
    
}
function washHand() {
    console.log('please wash your hand');
}
function shaower() {
    console.log('tacke shower');
}
call_back('sant0', 22, washHand);
call_back('asad', 20, shaower);