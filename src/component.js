import logo from './assets/images/logo.svg';
import sun_image from './assets/images/sun.jpg';

function component(){
    let m = document.createElement('main');
    let p = document.createElement('p');
    let img = document.createElement('img');
    img.style.height = '100px';
    m.append(p);
    p.append(img);
    img.src = logo;
    img.alt = 'sample logo';
    return m;
}

export default component;