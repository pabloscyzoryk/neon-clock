const clock = document.querySelector('.clock');
const date = document.querySelector('.date');
const info = document.querySelector('.info');

const tick = () => {

    const months = [
        'Styczeń',
        'Luty',
        'Marzec',
        'Kwiecień',
        'Maj',
        'Czerwiec',
        'Lipiec',
        'Sierpień',
        'Wrzesień',
        'Pażdziernik',
        'Listopad',
        'Grudzień',
    ];

    const days = [
        'Poniedziałek',
        'Wtorek',
        'Środa',
        'Czwartek',
        'Piątek',
        'Sobota',
        'Niedziela',
    ];

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    
    let fs = 0;
    let fm = 0;
    let fh = 0;
    
    fs = s < 10 ? `0${s}` : `${s}`;
    fm = m < 10 ? `0${m}` : `${m}`;
    fh = h < 10 ? `0${h}` : `${h}`;
    
    const d = now.getDay();
    const mh = now.getMonth()+1;
    const y = now.getFullYear();
    const dateDay = now.getDate();

    let fd = 0;
    let fmh = 0;
    let fDateDay = 0;

    fd = d < 10 ? `0${d}` : `${d}`;
    fmh = mh < 10 ? `0${mh}` : `${mh}`;
    fDateDay = dateDay < 10 ? `0${dateDay}` : `${dateDay}`;

    const dateHtml = `
    <span>${fDateDay}</span> :
    <span>${fmh}</span> :
    <span>${y}</span>
    `;

    date.innerHTML = dateHtml;

    const html = `
    <span>${fh}</span> :
    <span>${fm}</span> :
    <span>${fs}</span>
    `;
    
    clock.innerHTML = html;

    const actualDay = days[d-1];
    const actualMonth = months[mh-1];

    const dateInfo = `
        Dzień tygodnia: <span>${actualDay}</span><br><br><br>
        Miesiąc: <span>${actualMonth}</span>
    `

    info.innerHTML = dateInfo; 
}

setInterval(tick, 1000);