const myBtn = document.getElementById('my-btn');
const newContainer = document.createElement('div');
newContainer.classList.add('my-container')
document.body.append(newContainer);

const bombNumber = 16;
const arrayBombs = [];
const arrayNoBombs = [];

// for (let i = 0; i < bombNumber; i++){
//     const bomb = randomBomb(1, 100);

//     arrayBombs.push(bomb);
// }

function randomBomb(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function bombGenerator(max){
   while (arrayBombs.length < bombNumber){
    const bomb = randomBomb(1, max);
    if(!arrayBombs.includes(bomb)){
        arrayBombs.push(bomb);
    }
    }
}
// bombGenerator(100);

// while (arrayNoBombs.length < (100 - arrayBombs.length)){
//     const noBomb = randomBomb(1, 100);
//     if(!arrayNoBombs.includes(noBomb) && !arrayBombs.includes(noBomb)){
//         arrayNoBombs.push(noBomb);
//     }
// }







myBtn.addEventListener('click', 
    function(){
        let userChoice = document.getElementById('userChoice').value;
        newContainer.innerHTML = '';
        if (userChoice == 'easy'){
            bombGenerator(100);
            console.log(arrayBombs);
            
            for (let i = 1; i <= 100; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerText = i;

            cell.addEventListener('click',
                function (){
                    const clickedBomb = document.querySelectorAll('.bomb');
                    if (clickedBomb.length == 0){
                        this.classList.add('active');
                        console.log('Il numero da lei selezionato è:', this.innerHTML);

                        if(arrayBombs.includes(parseInt(cell.innerText))){
                            console.log('hai perso')
                            this.classList.add('bomb');
                        }
                    }
                }
            )
            newContainer.append(cell);
            }
        }
        else if (userChoice == 'medium'){
            bombGenerator(81);
            console.log(arrayBombs);
            for (let i = 1; i <= 81; i++){
                const cell = document.createElement('div');
                cell.classList.add('cell81');
                cell.innerHTML = i;
                cell.addEventListener('click',
                    function (){
                        const clickedBomb = document.querySelectorAll('.bomb');
                        if (clickedBomb.length == 0){
                        this.classList.add('active');
                        console.log('Il numero da lei selezionato è:', this.innerHTML);

                        if(arrayBombs.includes(parseInt(cell.innerText))){
                            console.log('hai perso')
                            this.classList.add('bomb');
                        }
                    }
                    }
                )
                newContainer.append(cell);
                }
        }
        else if (userChoice == 'hard'){
            bombGenerator(49);
            console.log(arrayBombs);
            for (let i = 1; i <= 49; i++){
                const cell = document.createElement('div');
                cell.classList.add('cell49');
                cell.innerHTML = i;
                cell.addEventListener('click',
                    function (){
                        const clickedBomb = document.querySelectorAll('.bomb');
                        if (clickedBomb.length == 0){
                        this.classList.add('active');
                        console.log('Il numero da lei selezionato è:', this.innerHTML);

                        if(arrayBombs.includes(parseInt(cell.innerText))){
                            console.log('hai perso')
                            this.classList.add('bomb');
                        }
                    }
                    }
                )
                newContainer.append(cell);
            }
        }
    }
)

