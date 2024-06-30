/*function randomChoce(){
    let result = document.getElementById("result_choice");
    const img = document.createElement('img');
    let randomImage = new Array();
    randomImage[0] = './assets/images/srilanka.png';
    randomImage[1] = '/assets/images/china.png';
    randomImage[2] = '/assets/images/turkey.png';
    randomImage[3] = './assets/images/spain.png';
    randomImage[4] = './assets/images/france.png';
    randomImage[5] = './assets/images/italy.png';
    randomImage[6] = './assets/images/baikal.png';
    let number = Math.floor(Math.random()*randomImage.length);
    img.src = randomImage[number];
    result.append(img);
    document.getElementById("button_id").onclick = null;
}**/

function randomChoce(){
    let result = document.getElementById("result_choice");
    let pictures = [
        {
            text: 'Шри-Ланка',
            img: './assets/images/srilanka.png',
        },
        {
            text: 'Китай',
            img: '/assets/images/china.png',
        },
        {
            text: 'Турция',
            img: '/assets/images/turkey.png',
        },
        {
            text: 'Испания',
            img: './assets/images/spain.png',
        },
        {
            text: 'Франция',
            img: './assets/images/france.png',
        },
        {
            text: 'Италия',
            img: './assets/images/italy.png',
        },
        {
            text: 'Байкал',
            img: './assets/images/baikal.png',
        },
        {
            text: 'Кавказ',
            img: './assets/images/kavkaz.png',
        },
        {
            text: 'Камчатка',
            img: './assets/images/kamchatka.png',
        },
    ];
    let picture = pictures[Math.floor(Math.random() * pictures.length)];
    result.innerHTML ='<p>' + picture.text + '</p>' +'<img src="' + picture.img + '">';
    document.getElementById("button_id").onclick = null; //позволяет только один раз использовать рандом за сессию
}