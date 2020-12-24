window.onload = function(){
    const storageKey = 'admina';
    let admin = JSON.parse( localStorage.getItem(storageKey) );

    if( !admin.isActive ){
        location.replace('index.html');
    }

    var navBtn = document.getElementsByClassName('navigation--item');

    Array.prototype.forEach.call(navBtn, function(btn){
        btn.addEventListener('click', createRipple);
    });

    function createRipple(e){
        var circle = document.createElement('div');
        this.appendChild(circle);

        var d = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = d + 'px';

        circle.style.left = e.clientX - this.offsetLeft - d/2 + 'px';
        circle.style.top = e.clientY - this.offestTop - d/2 + 'px';

        circle.classList.add('ripple')
    }
}