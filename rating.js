window.addEventListener('load', function (e) {
    const stars = document.getElementsByTagName('img');

    for(let i = 0;i<stars.length;i++)
    {
        stars[i].addEventListener('click', function (e) {

            for(let j = 0;j<=stars.length;j++) {
                if(j <= i) {
                    stars[j].src = "img/star.svg";
                } else {
                    stars[j].src = "img/star-empty.svg";
                }

            }
        });
    }
});