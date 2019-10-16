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

			<div id="layout-selector" class="flex-blocks center">
				<input id="layout0" type="radio" name="layout" value="desktop" checked="checked">
				<label for="layout0" class="label-layout">
					<img src="img/layout-desktop.png">
					${msg[lang].desktopCal}
				</label>

				<input id="layout1" type="radio" name="layout" value="wall-single">
				<label for="layout1" class="label-layout">
					<img src="img/layout-wall-single.png">
					${msg[lang].wallSingle}
				</label>

				<input id="layout2" type="radio" name="layout" value="digital">
				<label for="layout2" class="label-layout">
					<img src="img/layout-wallpaper.png">
					${msg[lang].digitalBg}
				</label>
			</div>

			<h2>${msg[lang].edit}</h2>

			<div id="position-selector" class="tab-container">
				<input type="radio" id="pos0" name="image-position" value="0" checked="checked">
				<label for="pos0" class="tab">${msg[lang].front}</label>
				<input type="radio" id="pos1" name="image-position" value="1">
				<label for="pos1" class="tab">${msg[lang].back}</label>

				<div id="front-config">
					<div class="config-row">
						${msg[lang].year}:
						<input type="text" id="bottom-year" placeholder="${msg[lang].year}" maxlength="4" onchange="updatePreview();">
						${msg[lang].monthNames[0]}:
						<select id="bottom-month" onchange="updatePreview();">
							${monthOptions()}
						</select>
					</div>
					<div class="config-row">
						<div class="note">${msg[lang].imgNotice}</div>
						<label class="custom-file-button">
							<input type="file" accept="image/*" onchange="loadImage( this, 0 );">
							${msg[lang].loadImage}
						</label>
					</div>
					<div class="image-selector">
						<img id="image0" crossorigin="anonymous">
					</div>
					<button data-action="rot" data-obj="0" class="cropper-action">Rotate</button>
					<button data-action="flx" data-obj="0" class="cropper-action">Flip H</button>
					<button data-action="fly" data-obj="0" class="cropper-action">Flip V</button>
				</div>

				<div id="back-config">
					<div class="config-row">
						${msg[lang].year}:
						<input type="text" id="top-year" placeholder="${msg[lang].year}" maxlength="4" onchange="updatePreview();">
						${msg[lang].monthNames[0]}:
						<select id="top-month" onchange="updatePreview();">
							${monthOptions()}
						</select>
					</div>
					<div class="config-row">
						<div class="note">${msg[lang].imgNotice}</div>
						<label class="custom-file-button">
							<input type="file" accept="image/*" onchange="loadImage( this, 1 );">
							${msg[lang].loadImage}
						</label>
					</div>
					<div class="image-selector">
						<img id="image1" crossorigin="anonymous">
					</div>
					<button data-action="rot" data-obj="1" class="cropper-action">Rotate</button>
					<button data-action="flx" data-obj="1" class="cropper-action">Flip H</button>
					<button data-action="fly" data-obj="1" class="cropper-action">Flip V</button>
				</div>
			</div> <!-- .tab-container -->

			<div id="canvas-config">
				<h2>Screen configuration</h2>
				<div class="config-blocks">
					<label>
						<span>${msg[lang].screenRes}</span>
						<input id="canvas-width" type="text" maxlength="4" placeholder="${msg[lang].width}" onchange="updatePreview();">
						x
						<input id="canvas-height" type="text" maxlength="4" placeholder="${msg[lang].height}" onchange="updatePreview();">
						${msg[lang].pixels}
					</label>
					<button type="button" class="rotate-button" onclick="rotateCanvas();" title="${msg[lang].chgOrient}"></button>
				</div>
				<label>
					<span>${msg[lang].calSize}</span>
					<select id="cal-size" onchange="updatePreview();">
						<option value="col">${msg[lang].column}</option>
						<option value="row">${msg[lang].row}</option>
						<option value=".03">${msg[lang].small}</option>
						<option value=".05" selected>${msg[lang].medium}</option>
						<option value=".07">${msg[lang].large}</option>
					</select>
				</label>
				<label>
					<span>${msg[lang].horAlign}</span>
					<select id="h-align" onchange="updatePreview();">
						<option value="left">${msg[lang].left}</option>
						<option value="center">${msg[lang].horCenter}</option>
						<option value="right" selected>${msg[lang].right}</option>
					</select>
				</label>
				<label>
					<span>${msg[lang].verAlign}</span>
					<select id="v-align" onchange="updatePreview();">
						<option value="top">${msg[lang].top}</option>
						<option value="center" selected>${msg[lang].verCenter}</option>
						<option value="bottom">${msg[lang].bottom}</option>
					</select>
				</label>
			</div> <!-- #canvas-config -->

			<h2>Configure your Holidays</h2>

			<div class="config-blocks">
				<div>
					<h3>${msg[lang].holidays}</h3>
					<select id="country" onchange="changeCountry( this.value );">
						${countryOptions()}
					</select>
				</div>

				<div id="custom-holidays">
					<h3>${msg[lang].customHolidays}</h3>
					<table id="custom-holidays-table">
						<tbody>
							${listCustomHolidays()}
						</tbody>
						<tfoot>
							<tr>
								<td>
									<select id="custom-holiday-month">
										${monthOptions()}
									</select>
								</td>
								<td><input type="text" id="custom-holiday-day" maxlength="2" placeholder="${msg[lang].day}"></td>
								<td><button type="button" onclick="addCustomHoliday();">${msg[lang].add}</button></td>
							</tr>
						</tfoot>
					</table>
				</div> <!-- #custom-holidays -->
			</div> <!-- .config-blocks -->

			<div id="print-config">
				<h2>${msg[lang].printIt}</h2>

				<ul>
					<li>${msg[lang].tipBgImg}</li>
					<li>${msg[lang].tipPortrait}</li>
					<li>${msg[lang].tipMargins}</li>
					<li>${msg[lang].tipHeaders}</li>
				</ul>

				<button id="print-button" class="print-button">${msg[lang].print}</button>
			</div>

			<div id="download-config">
				<h2>${msg[lang].downloadIt}</h2>

				<div class="config-blocks">
					<div>
						<strong>${msg[lang].fileFormat}:</strong>
						<input type="radio" name="file-format" value="jpeg" checked> JPG &nbsp;
						<input type="radio" name="file-format" value="png"> PNG
					</div>
					<a href="#" id="download-button" class="button download-button" onclick="downloadCalendar(this);">${msg[lang].download}</a>
				</div>
			</div>

		</div> <!-- .config -->

		<div id="preview">
			<div class="preview-header">
				${msg[lang].preview}:
			</div>
			<canvas id="canvas" onclick="document.getElementById('download-button').click();"></canvas>
			<div class="preview-content">
				<div id="top-half" class="top-half">
					<div class="elements">
						<div id="cal-image1" class="cal-image">
							<div id="preview1"></div>
						</div>
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
						<div id="cal-image0" class="cal-image">
							<div id="preview0"></div>
						</div>
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
		</div> <!-- .preview -->

		<div class="credits">
			<strong>desktopCal.js</strong> Copyright &copy; 2018-2019 Henrique Avila Vianna.
			Source code available on <a href="https://github.com/hvianna/desktopCal.js/">GitHub</a>. Licensed under the <a href="https://www.gnu.org/licenses/agpl.html">GNU AGPL-3.0 license</a>.<br>
			Icons by <a href="https://icons8.com/">icons8</a>. Photos by <a href="https://source.unsplash.com/">Unsplash</a> and <a href="https://picsum.photos/">Lorem Picsum</a>.
			Devices mockup template by <a href="https://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd-vol2">Pixeden</a>.
		</div>
	`;
}
