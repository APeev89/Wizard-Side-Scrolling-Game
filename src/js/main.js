let state = initState();
let game = initGameObject();

const availableKeys = [
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
]

document.addEventListener('keydown', (e)=>{
    if(availableKeys.includes(e.code)){
        state.keys[e.code] = true;
    }
});

document.addEventListener('keyup',(e)=>{
    if(availableKeys.includes(e.code)){
        state.keys[e.code] = false;
    }
})

game.startScreen.addEventListener('click', (e) => {


    game.gameScreen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    start(state, game)
});