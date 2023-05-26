position = document.getElementById('position')
speed = document.getElementById('speed')

pos = 0;
sp = 0;

const update = () => {
    position.innerText = pos;
    speed.innerText = sp;
    console.log('updating')
    console.log(pos)
    console.log(sp)
}
update();



const addSpeed = () => {
    sp += 1;
    update();
}
const subSpeed = () => {
    sp -= 1;
    update();
}

document.getElementById('add').addEventListener('click', addSpeed)
document.getElementById('subtract').addEventListener('click', subSpeed)


setInterval(() => {
    pos += sp;
    update();
}, 1000);