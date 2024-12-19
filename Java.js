const words1 = 'ash drivers article throughout telephone shoppers strings nationwide vintage job lies eden cave hat exist anniversary drawing intimate views state replacing consist existence moments monsters biographies accurately something asian coordinator refer whenever college grill dreams comply ensures festival draft severe make mint periodic dryer fill motion sensors What can a person do to learn proper scheduling? Professionals give seven tips that can help everyone get more control over time. The first one is to set goals. Motivation is an ignition key. Moreover, the goal is to be achievable. If a person is bad at Geometry and the creation of new things, it is better not to dream about becoming a top designer. The next task is to learn prioritizing concepts. People often do tasks that can be done later but delay duties that should be done here and right now. Moreover, they often neglect tasks that are long-perspective. For example, a person needs to master a second language to get the desired occupation. She does other tasks but forgets to memorize new words and practice daily. As a result, she will not get the job because language mastering demands more than one day. The next recommendation is to set time frames for each task and try not to change them. When a person sees the approaching deadline, he speeds up a bit and stops delaying duties. Another essential thing is to have rest. Brains and human bodies, in general, cannot function well when being exhausted. Everybody knows that 20 minutes of noon sleep restores vital energy that helps to handle tasks in the second half of the day. Except for bedtime, one needs to enjoy a hobby or a pleasant activity The above-mentioned facts and tips highlight the importance of good time management. When people are not constantly in a hurry, they cope with many tasks and feel self-confident. They are not afraid of the coming day that brings more responsibilities and duties. Such people know how to turn a minute into a successful life investment. Perfect time managers are not lazy. They are productive and full of energy. Leading organizations and companies desire to get such individuals in their teams to boost overall productivity. Proper scheduling lets people be perfect leaders, team builders, assistants, and performers. As William Shakespear once said, “Better to be three hours to noon, than a minute too late'.split(' ');
const wordsCount = words1.length;

function randomWord() {
    const randomIndex = Math.floor(Math.random() * wordsCount);
    return words1[randomIndex];
}

function addingClass(ele, name) {
    ele.className += ' ' + name;
}
function removingClass(ele, name) {
    ele.className = ele.className.replace(name, '');
}
function formatWord(word) {
    return `<div class="word">
    <span class="letter">${word.split('').join('</span><span class="letter">')}</span>
            </div>`;
}

function game() {
    const wordsContainer = document.getElementById('words1');
    wordsContainer.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        wordsContainer.innerHTML += formatWord(randomWord());
    }
    addingClass(document.querySelector('.word'), 'current');
    addingClass(document.querySelector('.letter'), 'current');
}


game();
document.addEventListener('keydown', (event) => {
    console.log(event);
    const key = event.key;
    const currentLetter = document.querySelector('.letter.current');
    const rightval = currentLetter.innerHTML;

    console.log({ key, rightval });
});