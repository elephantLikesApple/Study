function createHeader() {
    let header = document.querySelector('Header');

    // 타이틀 로고(중앙) 생성
    let divEl1 = document.createElement('div');
    divEl1.id="title_logo";
    let divText = document.createTextNode('제주맥주');
    divEl1.appendChild(divText);
    header.appendChild(divEl1);

    // user 메뉴 내용
    let url_arr = ['./login.html', './join_agree.html'];
    let text_arr = ['LOGIN', 'JOIN'];

    // user 메뉴 생성
    let divEl2 = document.createElement('div');
    divEl2.id = "user";

    let ulEl = document.createElement('ul');

    for(let i = 0; i < text_arr.length; i++) {
        let liEl = document.createElement('li');
        let aEl = document.createElement('a');
        aEl.href=url_arr[i];
        let aText = document.createTextNode(text_arr[i]);

        aEl.appendChild(aText);
        liEl.appendChild(aEl);
        ulEl.appendChild(liEl);
    }
    divEl2.appendChild(ulEl);
    header.appendChild(divEl2);
}

function createAside() {
    let url_arr = ['#', '#'];
    let img_arr = ['./img/share.png', './img/up.png'];
    let aside = document.querySelector('aside');

    for(let i = 1; i <= img_arr.length; i++) {
        let divEl = document.createElement('div');
        divEl.classList.add("nav_"+i);
        console.log(divEl.classList);
        let aEl = document.createElement('a');
        aEl.href = url_arr[i-1];
        let imgEl = document.createElement('img');
        imgEl.width=50;
        imgEl.src = img_arr[i-1];

        aEl.appendChild(imgEl);
        divEl.appendChild(aEl);
        aside.appendChild(divEl);
    }
    console.log(aside);
}

function createNav() {
    function Menu(name, url) {
        this.name = name;
        this.url = url;
    }
    
    var arr = new Array();
    
    arr[0] = new Menu('EVENT', './index.html');
    arr[1] = new Menu('SHOP', './shop.html');
    arr[2] = new Menu('ABOUT US', './about_us.html');
    arr[3] = new Menu('NEWS', './news.html');
    arr[4] = new Menu('CONTACT', './contact.html');
    
    let nav = document.querySelector('nav');
    let ulEl = document.createElement('ul');
    for(m of arr) {
        let liEl = document.createElement('li');
        let aEl = document.createElement('a');
        aEl.href=m.url;
        let aText = document.createTextNode(m.name);
        aEl.appendChild(aText);
        liEl.appendChild(aEl);
        ulEl.appendChild(liEl);
    }

    nav.appendChild(ulEl);
}
function createFooter() {
    var foot = {
        name: "제주맥주 주식회사",
        CEO: "문혁기",
        address_j: "제주특별자치도 제주시 한림읍 금농농공길 62-11",
        address_s: "서울특별시 종구 동호로 228 동호 38빌딩 6층",
        hosting: "(주)아임웹",
        b_num: "616-86-27415",
        mail_b_num: "제 2020-제주한림-0101 호",
        manage: "이용석",
        tel: "02-2235-5559",
        email: "jejubeer@jejubeer.co.kr"
    }

    let ft = foot.name;
    let space="&nbsp;&nbsp;&nbsp;&nbsp;";
    ft += space + "대표이사 " + foot.CEO;
    ft += "<br>본사) " + foot.address_j;
    ft += space + "서울사무실) " + foot.address_s;
    ft += "<br>호스팅 제공자 " + foot.hosting;
    ft += space + "사업자등록번호 " + foot.b_num;
    ft += space + "통신판매업신고번호 " + foot.mail_b_num;
    ft += "<br>개인정보보호책임자 " + foot.manage;
    ft += space + "고객센터 " + foot.tel + ", " + foot.email;

    let spanEl = document.createElement('span');
    let spanText = document.create

    /*
    
    function footer() {
    
        document.write(ft);
    }

    <span>
        제주맥주 주식회사&nbsp;&nbsp;&nbsp;&nbsp;대표이사 XXX<br>
        본사) 본사 주소&nbsp;&nbsp;&nbsp;&nbsp;서울사무실) 서울 주소<br>
        호스팅 제공자 XXX&nbsp;&nbsp;&nbsp;&nbsp;사업자 등록번호 xxx-xx-xxxxx&nbsp;&nbsp;&nbsp;&nbsp;통신판매업신고번호 제 xxxx-xxxx-xxxx호<br>
        개인정보보호책임자 XXX&nbsp;&nbsp;&nbsp;&nbsp;고객센터 xx-xxxx-xxxx, xxxx@xxxx.co.kr<br><br>
        
        <span>
            COPYRIGHT 2021&commat; JEJU BEER COMPANY
        </span>
    </span>
    */
}

function init() {
    createHeader();
    createAside();
    createNav();
    createFooter();
}