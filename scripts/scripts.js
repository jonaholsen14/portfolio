document.getElementById('themeSwitcher').addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.style.setProperty('--bg-color1', '#002913');
            document.documentElement.style.setProperty('--bg-color2', '#085f3b');
            document.documentElement.style.setProperty('--bg-color3', '#01164e');
            document.documentElement.style.setProperty('--text-color', '#ebffad');
        } else {
            document.documentElement.style.setProperty('--bg-color1', '#06f1ba');
            document.documentElement.style.setProperty('--bg-color2', '#23a6d5');
            document.documentElement.style.setProperty('--bg-color3', '#d680f8');
            document.documentElement.style.setProperty('--text-color', '#0a0a45');
        }
    });

