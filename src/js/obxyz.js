/*-++-++++=-++---+-=-++++---=-++++--+=-++++-+-=--+-+++-=-++---++=-++-++++=-++-++-+*/
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQKXZS6');
/*-++-++++=-++---+-=-++++---=-++++--+=-++++-+-=--+-+++-=-++---++=-++-++++=-++-++-+*/
fetch('/src/articles.json') 
.then(function(res){
    return res.json();
})
.then(function(data){
    data.ar.forEach(function(ele){
        var obj=document.getElementsByTagName('main')[0];
        obj.appendChild(document.createRange().createContextualFragment(`<h2>${ele.ti}</h2><article>${ele.te.replace(/(。|？|！|\.\s|\?\s|!\s)/g,'$1<br>')}</article><hr>`));
    });
});
/*-++-++++=-++---+-=-++++---=-++++--+=-++++-+-=--+-+++-=-++---++=-++-++++=-++-++-+*/