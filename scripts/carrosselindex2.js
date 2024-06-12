document.getElementById('next2').onclick = function() {
    let lists = document.querySelectorAll('#slide2 .item');
    document.getElementById('slide2').appendChild(lists[0]);
};

document.getElementById('prev2').onclick = function() {
    let lists = document.querySelectorAll('#slide2 .item');
    document.getElementById('slide2').prepend(lists[lists.length - 1]);
};
