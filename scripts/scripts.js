// --bg-color1: #06f1ba;
//     --bg-color2: #23a6d5;
//     --bg-color3: #d680f8;
//     --text-color: #0a0a45;


document.addEventListener('DOMContentLoaded', function() {
    const colorSlider = document.getElementById('color-slider');
  
    const colorSchemes = {
      1: { '--bg-color1': '#06f1ba', '--bg-color2': '#23a6d5', '--bg-color3': '#d680f8', '--text-color': '#0a0a45'},
      2: { '--bg-color1': '#ff6347', '--bg-color2': '#ff4500', '--bg-color3': '#ff8c00', '--text-color': '#8b0000'},
      3: { '--bg-color': '#ffe4e1', '--text-color': '#8b0000' },
      4: { '--bg-color': '#e0ffff', '--text-color': '#4682b4' },
      5: { '--bg-color': '#fafad2', '--text-color': '#808000' },
      6: { '--bg-color': '#f5f5dc', '--text-color': '#2f4f4f' },
      7: { '--bg-color': '#fffacd', '--text-color': '#8a2be2' }
    };
  
    function updateColorScheme(value) {
      const scheme = colorSchemes[value];
      for (const [key, val] of Object.entries(scheme)) {
        document.documentElement.style.setProperty(key, val);
      }
    }
  
    // Initial color scheme
    updateColorScheme(colorSlider.value);
  
    // Update color scheme on slider input
    colorSlider.addEventListener('input', function() {
      updateColorScheme(this.value);
    });
});
  