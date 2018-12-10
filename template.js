function pageTemplate() {
	return `
		<div class="config">
			<header>
				<h1>desktopCal.js</h1>
			</header>

			<h2>${msg[lang].design}</h2>

			<div class="bottom20">
				<div class="config-block">
					<strong>Language / Langue / Idioma:</strong>
					<select id="lang" onchange="changeLang( this );">
						${langOptions()}
					</select>
				</div>

				<div class="config-block right">
					<strong>${msg[lang].holidays}:</strong>
					<select id="country" onchange="updatePreview();">
						${countryOptions()}
					</select>
				</div>
			</div>

			<div class="flex-blocks center">
				<label class="label-layout">
					<input type="radio" name="layout" value="desktop" checked="checked" onclick="changeLayout();"><br>
					<img src="img/layout-desktop.png">
					${msg[lang].desktopCal}
				</label>
				<label class="label-layout">
					<input type="radio" name="layout" value="wall-single" onclick="changeLayout();"><br>
					<img src="img/layout-wall-single.png">
					${msg[lang].wallSingle}
				</label>
			</div>

			<div id="front-config" class="config-block">
				<h3>${msg[lang].front}:</h3>
				<label class="custom-file-button">
					<input type="file" accept="image/*" onchange="loadImage( this, 'bottom' );">
					${msg[lang].loadImage}
				</label>
				<br>
				<input type="text" id="bottom-year" placeholder="${msg[lang].year}" maxlength="4" onchange="updatePreview();">
				<select id="bottom-month" onchange="updatePreview();">
					${monthOptions()}
				</select>
			</div>

			<div id="back-config" class="config-block right">
				<h3>${msg[lang].back}:</h3>
				<label class="custom-file-button">
					<input type="file" accept="image/*" onchange="loadImage( this, 'top' );">
					${msg[lang].loadImage}
				</label>
				<br>
				<input type="text" id="top-year" placeholder="${msg[lang].year}" maxlength="4" onchange="updatePreview();">
				<select id="top-month" onchange="updatePreview();">
					${monthOptions()}
				</select>
			</div>

			<div class="note">${msg[lang].imgNotice}</div>

			<h2>${msg[lang].printIt}</h2>

			<ul>
				<li>${msg[lang].tipBgImg}</li>
				<li>${msg[lang].tipMargins}</li>
				<li>${msg[lang].tipHeaders}</li>
			</ul>

			<button type="button" class="print-button" onclick="window.print();">${msg[lang].print}</button>

		</div> <!-- .config -->

		<div id="preview">
			<div class="preview-header">
				${msg[lang].preview}:
			</div>
			<div class="preview-content">
				<div id="top-half" class="top-half">
					<div class="elements">
						<div class="cal-image"></div>
						<div class="cal-content">
							<div class="cal-title"></div>
							<div class="calendar"></div>
						</div>
					</div>
					<div class="fold-line">
						<img src="img/icons8-fold.png">
						${msg[lang].fold}
						<img src="img/icons8-c-fold-leaflet.png">
					</div>
					<div class="note center">Created with <strong>desktopCal.js</strong></div>
				</div>
				<div id="bottom-half" class="bottom-half">
					<div class="elements">
						<div class="cal-image"></div>
						<div class="cal-content">
							<div class="cal-title"></div>
							<div class="calendar"></div>
						</div>
					</div>
					<div class="fold-line">
						<img src="img/icons8-fold.png">
						${msg[lang].fold}
						<img src="img/icons8-c-fold-leaflet.png">
					</div>
					<div class="note center">Created with <strong>desktopCal.js</strong></div>
				</div>
			</div>
			<div class="credits">
				<strong>desktopCal.js</strong> Copyright &copy; 2018 Henrique Vianna<br>
				Source code available on <a href="https://github.com/hvianna/desktopCal.js/">GitHub</a>. Licensed under the <a href="https://www.gnu.org/licenses/agpl.html">GNU AGPL-3.0 license</a>.<br>
				Icons by <a href="https://icons8.com/">icons8</a>. Photos by <a href="https://source.unsplash.com/">Unsplash</a> and <a href="https://picsum.photos/">Lorem Picsum</a>.
			</div>
		</div> <!-- .preview -->
	`;
}
