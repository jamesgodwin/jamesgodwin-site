const paintingsOutput = `
<p><strong>My creative outlet</strong></p>
<p>These digital paintings are made by hand on an iPad using Procreate. They are a visual practice of attention, play, and stillness.</p>
<p><a href="https://www.deviantart.com/jamesgodwin" target="_blank" rel="noopener noreferrer">View the full painting collection →</a></p>
<div class="paintings-grid">${Array.from({ length: 25 }, (_, index) => `<img src="image${index + 1}.webp" alt="Digital painting ${index + 1} by James Godwin">`).join('')}</div>
<hr><p class="commands-text"><span class="commands">Available commands:</span> help, about, workshops, apps, books, sanctuary, contact, taoism, now, paintings, philosophy, uxui, legal, themes (default, dark, stillness, mountains, essence, tao, zen, snow, void)</p>`;

export default paintingsOutput;
