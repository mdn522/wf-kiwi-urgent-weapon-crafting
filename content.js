document.head.innerHTML = `
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=760,initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Warface - K.I.W.I.</title>
<link rel="shortcut icon" type=image/x-icon href=/static/wf.mail.ru/img/main/favicon.ico>
<link href=https://wf.my.com/minigames_static/modules/battlepass_v4/wf/dist/css/app.dda48c9ee60a7acef6d80901472461d3.css rel=stylesheet>
`

document.body.innerHTML = `
<div id=app></div><div id=loader></div>
<script>
    (function() {
        let domain_zone = window.location.host.split('.').reverse()[0],
            date = new Date(new Date().getTime() + 864000 * 1000);

        if (domain_zone === 'com') {
            document.cookie = "cur_language=en; path=/; expires=" + date.toUTCString();
        };
    })();
</script>
`

var scripts = [
    "https://wf.cdn.gmru.net/minigames_static/public/loader/wf/main_loader.js",
    "https://wf.cdn.gmru.net/static/wf.mail.ru/js/promo/md5-min.js",
    "https://wf.my.com/minigames_static/modules/battlepass_v4/wf/dist/js/manifest.1ea1d447a549fe1fa930.js",
    "https://wf.my.com/minigames_static/modules/battlepass_v4/wf/dist/js/vendor.c743539a72c7bfaa13b9.js",
    "https://wf.my.com/minigames_static/modules/battlepass_v4/wf/dist/js/app.a8fd6c5a79dd5b956629.js",
];

for (let i = 0; i < scripts.length; i++) { 
    var script = document.createElement("script");
    script.src = scripts[i];
    document.head.appendChild(script);
}