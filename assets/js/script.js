reload();

Array.from(document.querySelectorAll('input[name=rating]')).forEach(function(item){
    item.addEventListener('click', save);
});

function save(){
    const stars = document.querySelector('input[name=rating]:checked').value;
    localStorage.setItem('rating', stars)
};

function reload(){
    const ratings = Array.from(document.getElementsByName('rating'));
    const val1 = localStorage.getItem('rating');
    for(let i = 0; i < ratings.length; i++){
        if(ratings[i].value == val1){
            ratings[i].checked = true;
        }
    };
};