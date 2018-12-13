function pageTemplate() {
	return `
		<div id="config">
			<header>
				<h1>desktopCal.js</h1>
			</header>
			<ul class="lang-selection">
				${langOptions()}
			</ul>

			<h2>${msg[lang].design}</h2>

			<div class="config-blocks bottom20">
				<div>
					<strong>${msg[lang].holidays}:</strong>
					<select id="country" onchange="updatePreview();">
						${countryOptions()}
					</select>
				</div>
			</div>

			<div class="flex-blocks center">
				<label class="label-layout">
					<input type="radio" name="layout" value="desktop" checked="checked" onclick="updatePreview();"><br>
					<img src="img/layout-desktop.png">
					${msg[lang].desktopCal}
				</label>
				<label class="label-layout">
					<input type="radio" name="layout" value="wall-single" onclick="updatePreview();"><br>
					<img src="img/layout-wall-single.png">
					${msg[lang].wallSingle}
				</label>
				<label class="label-layout">
					<input type="radio" name="layout" value="digital" onclick="updatePreview();"><br>
					<img src="img/layout-wallpaper.png">
					${msg[lang].digitalBg}
				</label>
			</div>

			<div class="config-blocks">
				<div id="front-config">
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

				<div id="back-config">
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

				<div id="canvas-config">
					<h3>${msg[lang].sizeOrient}:</h3>
					<button type="button" class="rotate-button" onclick="rotateCanvas();"></button>
					<input id="canvas-width" type="text" maxlength="4" placeholder="width" onchange="updatePreview();">
					x
					<input id="canvas-height" type="text" maxlength="4" placeholder="width" onchange="updatePreview();">
					${msg[lang].pixels}
				</div>
			</div>

			<div class="note">${msg[lang].imgNotice}</div>

			<div id="print-config">
				<h2>${msg[lang].printIt}</h2>

				<ul>
					<li>${msg[lang].tipBgImg}</li>
					<li>${msg[lang].tipMargins}</li>
					<li>${msg[lang].tipHeaders}</li>
				</ul>

				<button type="button" class="print-button" onclick="window.print();">${msg[lang].print}</button>
			</div>

			<div id="download-config">
				<h2>${msg[lang].downloadIt}</h2>

					<a href="#" class="button download-button" download="desktopCal.png" onclick="downloadCalendar(this);">${msg[lang].download}</a>
			</div>

		</div> <!-- .config -->

		<div id="preview">
			<div class="preview-header">
				${msg[lang].preview}:
			</div>
			<canvas id="canvas"></canvas>
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
				Icons by <a href="https://icons8.com/">icons8</a>. Photos by <a href="https://source.unsplash.com/">Unsplash</a> and <a href="https://picsum.photos/">Lorem Picsum</a>.<br>
				Devices mockup template by <a href="https://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd-vol2">Pixeden</a>.
			</div>
		</div> <!-- .preview -->
	`;
}
