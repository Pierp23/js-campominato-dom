const myBtn = document.getElementById('my-btn');
const newContainer = document.createElement('div');
newContainer.classList.add('my-container')
document.body.append(newContainer);


myBtn.addEventListener('click', 
    function(){
        let userChoice = document.getElementById('userChoice').value;
        newContainer.innerHTML = '';
        if (userChoice == 'easy'){
            for (let i = 1; i <= 100; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerHTML = i;
            cell.addEventListener('click',
                function (){
                    this.classList.toggle('active');
                    console.log('Il numero da lei selezionato è:', this.innerHTML)
                }
            )
            newContainer.append(cell);
            }
        }
        else if (userChoice == 'medium'){
            for (let i = 1; i <= 81; i++){
                const cell = document.createElement('div');
                cell.classList.add('cell81');
                cell.innerHTML = i;
                cell.addEventListener('click',
                    function (){
                        this.classList.toggle('active');
                        console.log('Il numero da lei selezionato è:', this.innerHTML)
                    }
                )
                newContainer.append(cell);
                }
        }
        else if (userChoice == 'hard'){
            for (let i = 1; i <= 49; i++){
                const cell = document.createElement('div');
                cell.classList.add('cell49');
                cell.innerHTML = i;
                cell.addEventListener('click',
                    function (){
                        this.classList.toggle('active');
                        console.log('Il numero da lei selezionato è:', this.innerHTML)
                    }
                )
                newContainer.append(cell);
            }
        }
    }
)

