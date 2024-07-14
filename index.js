const buttons = document.querySelectorAll('button')
const comchoice = document.querySelector('.computer-choice')
const userChoice = document.querySelector('.you-choice')
const winner = document.querySelector('.result')

const result = ['Rock', 'Scissor', 'Paper']

const show = (user_input, computer, result) => {
    comchoice.innerText = computer;
    userChoice.innerText = user_input;
    winner.innerText = result
}

const game = (user_input, computer) => {
    let msg;
    if (user_input === computer) {
        msg = 'Draw !'
    } else {
        switch (user_input + computer) {
            // user win = S P, R S, P R
            // com win = S R, R P, P S
            case 'ScissorPaper':
            case 'RockScissor':
            case 'PaperRock':
                msg = 'You Win !'
                break;

            case 'ScissorRock':
            case 'RockPaper':
            case 'PaperScissor':
                msg = 'Computer Win !'
                break;
        }
    }
    show(user_input, computer, msg)
}

const play = (event) => {
    const user_input = event.target.innerText
    const random_index = Math.floor(Math.random() * 3)
    const computer = result[random_index]
    game(user_input, computer)
}

buttons.forEach((button) => {
    button.addEventListener('click', play)
})

