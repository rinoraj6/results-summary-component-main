


const data = JSON.parse('[{"category":"Reaction","score":80,"icon":"./assets/images/icon-reaction.svg"},{"category":"Memory","score":92,"icon":"./assets/images/icon-memory.svg"},{"category":"Verbal","score":61,"icon":"./assets/images/icon-verbal.svg"},{"category":"Visual","score":72,"icon":"./assets/images/icon-visual.svg"}]');
const dyna = document.querySelector('.dyna');
dyna.className = 'dyna';




// console.log(data.length);
for (let i=0; i<data.length;i++){

    // create container box
    const item = document.createElement('div');
    item.className = 'container-box';

    // create boxes inside container box 
    const insideBox1 = document.createElement('div');
    insideBox1.className = 'ib1';
    const insideBox2 = document.createElement('div');
    insideBox2.className = 'ib2';

    // create elements for ib1
    let icon = document.createElement('img');
    let category = document.createElement('span');

    // create element for ib2
    let score = document.createElement('span');
    let hundid = document.createElement('span');

    hundid.className = 'gray';

    // add items to elements
    icon.src = data[i].icon;
    category.textContent = data[i].category;
    
    score.textContent = data[i].score;
    hundid.textContent = ' / 100';

    insideBox1.appendChild(icon);
    insideBox1.appendChild(category);

    insideBox2.appendChild(score);
    insideBox2.appendChild(hundid);
    
    item.appendChild(insideBox1);    
    item.appendChild(insideBox2);

    dyna.appendChild(item)
    
}









const n = ['reaction-box','memory-box','verbal-box','visual-box'];
const m = document.querySelectorAll('.container-box');
n.forEach((num1, index) => {
    const num2 = m[index];
    num2.classList.add(num1);
    console.log(num2.classList);
});


















