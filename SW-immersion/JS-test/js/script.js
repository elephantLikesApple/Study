/************** menu ****************/

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

function addMenu() {
    var res = "<ul>";
    for(m of arr) {
        res += "<li><a href='"+m.url+"'>"+m.name+"</a></li>";
    }
    res += "</ul>";

    document.write(res);
}

/************** footer ****************/

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

function footer() {
    var ft = foot.name;
    var space="&nbsp;&nbsp;&nbsp;&nbsp;";
    ft += space + "대표이사 " + foot.CEO;
    ft += "<br>본사) " + foot.address_j;
    ft += space + "서울사무실) " + foot.address_s;
    ft += "<br>호스팅 제공자 " + foot.hosting;
    ft += space + "사업자등록번호 " + foot.b_num;
    ft += space + "통신판매업신고번호 " + foot.mail_b_num;
    ft += "<br>개인정보보호책임자 " + foot.manage;
    ft += space + "고객센터 " + foot.tel + ", " + foot.email;

    document.write(ft);
}