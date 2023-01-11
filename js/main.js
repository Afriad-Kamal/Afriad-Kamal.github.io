window.addEventListener('load', (e) => {
    Object.values(document.getElementsByClassName('l')).forEach(l => {
        l.addEventListener('click', (ev) => {
            switch (l.id) {
                case "ag":
                    window.location.assign("https://github.com/Afriad-Kamal")
                    break;

                case "ig":
                    window.location.assign("https://instagram.com/kamal.afriad_official")
                    break;
                
                case "dc":
                    navigator.clipboard.writeText("ᑎᗩᑕᖇᗴᝪᑌᔑᗞᗩᗯᑎ596#5665");
                    alert("ᑎᗩᑕᖇᗴᝪᑌᔑᗞᗩᗯᑎ596#5665 Copied!!")
                    break;
                
                case "gm":
                    document.location.href = "mailto:NacreousDawn596@pm.me?subject=" + encodeURIComponent("Greeting!") + "&body=" + encodeURIComponent("hello my fellow nobleman. I hope you're having a better day than yesterday. I would appreciate your soon answer, however, take all your time! ^^");

                    break;
                    
                case "ng":
                    window.location.assign("https://github.com/NacreousDawn596")
                    break;
            
                default:
                    break;
            }
        })
    })
    document.getElementsByClassName("a")[0].addEventListener('click', (ev) => {
        window.location.replace("https://afriad-kamal.github.io/about-me")
    })
})