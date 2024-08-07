let defaultMode = "dark";
let text = document.querySelector('.text-block p');
let color = document.querySelector(':root');
let orderBtn = document.querySelector('.btn-1');
let icons = document.querySelectorAll('.facebook, .insta, .twitter');
let grid = document.querySelector('.grid-container');
let nav = document.querySelector('.navbar');
let write = document.querySelector('.writting-section-1');
let write2 = document.querySelector('#heading');
let phone = document.querySelector('.call');
let parah1 = document.querySelector('#random-text');
let imgtext1 = document.querySelector('.image-text1');
let imgtext2 = document.querySelector('.image-text2');
let imgtext3 = document.querySelector('.image-text3');
let amt1 = document.querySelector('.amount1');
let amt2 = document.querySelector('.amount2')
let amt3 = document.querySelector('.amount3')
let foodlover=document.querySelector('#head');
let para1 =document.querySelector('.p1');
let para2=document.querySelector('.p2');
let para3=document.querySelector('.p3');
let name1=document.querySelector('.spn1');
let name2=document.querySelector('.spn2');
let name3=document.querySelector('.spn3');
let blog = document.querySelector('.blogs1');
let recipepara = document.querySelector('.recipe1-flex p');
let recipepara2 = document.querySelector('.recipe2-flex p');
let followus = document.querySelector ('.h2');
let cake = document.querySelector('.h4');
let home = document.querySelector('.home');
let item = document.querySelector('.item');
let about = document.querySelector('.ab');
let blog2 = document.querySelector('.bg');
let contact = document.querySelector('.con');
let locationpara = document.querySelector('.lo-co-para');
let line = document.querySelector('.line');
let loc = document.querySelector('.loc-img h3');
let address = document.querySelector('.loc-address-no');
let contactaddress = document.querySelector('.co-imag h3');
let contact2 = document.querySelector('.co-imag p');
let btnfooter1 = document.querySelector('.btn-footer1');
let btnfooter2 = document.querySelector('.btn-footer2');
let btnfooter3 = document.querySelector('.btn-footer3');
let line2 = document.querySelector('.line2'); 
let lastline = document.querySelector('.copyright');
let myname = document.querySelector('small');
function toggleMode() {
    let btn = document.querySelector('#toggle-mode');
    if (defaultMode === "dark") {
        btn.innerHTML = "<i class=\"fa-solid fa-moon\"></i>";
        defaultMode = "light";
        color.style.setProperty('--dark', '#f7f7f7');
        color.style.setProperty('--light', '#e5bf4a');
        color.style.setProperty('--golden', '#070707');
        text.style.color = "white";
        orderBtn.style.border = "1px solid var(--dark)";
        icons.forEach(icon => icon.style.color = "#070707");
        grid.style.backgroundColor = 'white';
        nav.style.backgroundColor = 'white';
        nav.style.color='black';
        write.style.color = 'black';
        write2.style.fontWeight = '700';
        phone.style.backgroundColor='white';
        phone.style.color = 'golden';
       parah1.style.color='black';
       imgtext1.style.color = 'black';
       imgtext2.style.color = 'black';
       imgtext3.style.color = 'black';
       amt1.style.fontWeight = '600';        
       amt2.style.fontWeight = '600';
       amt3.style.fontWeight = '600';
       foodlover.style.color='black';
       para1.style.color = 'black';
       para2.style.color='black'; 
       para3.style.color='black';
       name1.style.color='black'; 
       name2.style.color='black';     
       name3.style.color='black';  
       blog.style.color='black'; 
       recipepara.style.color='black';
       recipepara2.style.color='black'; 
       followus.style.color = 'black';  
       cake.style.fontWeight='700';
       cake.style.border='5px solid golden';  
       home.style.color='black';
       about.style.color='black'; 
       blog2.style.color='black';
       contact.style.color='black';
       item.style.color= 'black';
       locationpara.style.color = 'black';
       line.style.backgroundColor='grey';
       loc.style.color='golden';
       loc.style.fontWeight = '600';
       address.style.color='black';
       contactaddress.style.color='golden'; 
       contactaddress.style.fontWeight = '600';
       contact2.style.color = 'black';
       btnfooter1.style.color = 'black';
       btnfooter1.style.backgroundColor='white';
       btnfooter1.style.borderColor='grey';
       btnfooter2.style.color='black';
       btnfooter2.style.backgroundColor='white';
       btnfooter2.style.borderColor='grey';
       btnfooter3.style.color='black';
       btnfooter3.style.backgroundColor='white';
       btnfooter3.style.borderColor='grey';
       line2.style.backgroundColor='grey';
       lastline.style.color = 'black';
       myname.style.color = 'goldenrod';    
    } else {
        btn.innerHTML = "<i class=\"fa-solid fa-sun\"></i>";
        defaultMode = "dark";
        color.style.setProperty('--dark', '#070707');
        color.style.setProperty('--light', '#f7f7f7');
        color.style.setProperty('--golden', '#e5bf4a');
        text.style.color = "var(--light)";
        orderBtn.style.border = "1px solid var(--golden)";
        icons.forEach(icon => icon.style.color = "aliceblue");
        grid.style.backgroundColor = 'black';
        nav.style.backgroundColor = 'black';
        nav.style.color='white';
        write.style.color = 'white';
        write2.style.fontWeight = 'normal';
        phone.style.backgroundColor='black';
        phone.style.color= 'golden'
        parah1.style.color='white';
        imgtext1.style.color = 'white';
        imgtext2.style.color = 'white';
        imgtext3.style.color = 'white';
        foodlover.style.color='white';
        para1.style.color = 'white';
        para2.style.color='white';
        para3.style.color ='white';
        name1.style.color='white'; 
        name2.style.color='white';     
        name3.style.color='white';   
        blog.style.color='white';           
        followus.style.color = 'white';   
        locationpara.style.color = 'white';   
        address.style.color='white';
        btnfooter1.style.color = 'white';
        btnfooter1.style.backgroundColor='black';
        btnfooter1.style.borderColor='grey';
        btnfooter2.style.color = 'white';
        btnfooter2.style.backgroundColor='black';
        btnfooter2.style.borderColor='grey';
        btnfooter3.style.color = 'white';
        btnfooter3.style.backgroundColor='black';
        btnfooter3.style.borderColor='grey';
        recipepara.style.color='white';
        recipepara2.style.color='white'; 
        contact2.style.color = 'white';
        lastline.style.color = 'white';
        myname.style.color = 'goldenrod';
        home.style.color='white';
        about.style.color='white'; 
        blog2.style.color='white';
        contact.style.color='white';
        item.style.color= 'white';
    }
}
document.querySelector('#toggle-mode').addEventListener('click', toggleMode);
