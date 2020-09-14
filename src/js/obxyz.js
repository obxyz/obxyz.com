(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQKXZS6');

function append(obj,text){
    console.log(typeof text)
    if(typeof text === 'object'){
        obj.appendChild(text);
        return;
    }
    let box = document.createElement('div');
    let frag = document.createDocumentFragment();
    box.innerHTML = text;
    while(box.firstElementChild){
        console.log(box.firstElementChild)
        frag.appendChild(box.firstElementChild);
    }
    obj.appendChild(frag);
}

fetch('/src/articles.json') 
.then(function(res){
    return res.json();
})
.then(function(data){
    data.ar.forEach(function(ele){
        var obj=document.getElementsByTagName('main')[0];
        // append(obj, `<h2>${ele.ti}</h2><article>${ele.te.replace(/(。|？|\.\s)/g,'$1<br>')}</article>`);
        obj.appendChild(document.createRange().createContextualFragment(`<h2>${ele.ti}</h2><article>${ele.te.replace(/(。|？|\.\s)/g,'$1<br>')}</article>`));
    });
});