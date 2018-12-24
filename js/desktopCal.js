/**
 * desktopCal.js
 * Calendar generator built with HTML, CSS & JavaScript.
 *
 * https://github.com/hvianna/desktopCal.js
 *
 * Copyright (C) 2018 Henrique Vianna <hvianna@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
var _VERSION = '19.1-dev.3';


/**
 * Loads an image from user's computer into a calendar panel
 *
 * @param {HTMLInputElement object} obj    handler of the HTML file element
 * @param {string}                  side   'top' or 'bottom' side of the calendar
 */
function loadImage( obj, side ) {

	var reader = new FileReader(),
		layout = document.getElementById('preview').className;

	reader.onload = function() {
		document.querySelector(`.${side}-half .cal-image`).style = `background-image: url(${ reader.result })`;
		if ( layout == 'digital' )
			updatePreview();
	}

	reader.readAsDataURL( obj.files[0] );
}

/**
 * Generates the calendar for the specified month / year
 *
 * @param {number} month
 * @param {number} year
 * @param {object} [canvas] canvas object where the calendar should be rendered
 *
 * @returns {string|undefined} undefined if calendar rendered on canvas, otherwise returns HTML table for the calendar
 */
function generateCalendar( month, year, canvas = null ) {

	var ndays = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	var html, dow, prevMon,	i, d,
		ctx, calSize, cellSize, initialX, initialY, currLine; // auxiliary variables for canvas

	if ( ( year & 3 ) == 0 && ( ( year % 25 ) != 0 || ( year & 15 ) == 0 ) )
		ndays[2]++; // leap year

	prevMon = month > 1 ? month - 1 : 12;

	dow = ( new Date( year, month - 1, 1 ) ).getDay();

	if ( canvas ) {
		ctx = canvas.getContext('2d');
		calSize = document.getElementById('cal-size').value;

		// calculate cell size based on calendar style and canvas dimensions
		if ( calSize == 'row' ) {
			cellSize = canvas.width / 40;
			initialX = 0;
		}
		else if ( calSize == 'col' ) {
			cellSize = canvas.height / 36;
			initialY = 0;
		}
		else
			cellSize = Math.min( canvas.width, canvas.height ) * calSize;

		// calculate horizontal position
		if ( calSize != 'row' ) {
			switch ( document.getElementById('h-align').value ) {
				case 'left':
					if ( calSize == 'col' )
						initialX = 0;
					else
						initialX = 2 * cellSize;
					break;
				case 'center':
					if ( calSize == 'col' )
						initialX = ( canvas.width - 3 * cellSize ) / 2;
					else
						initialX = ( canvas.width - 10 * cellSize ) / 2;
					break;
				default:
					if ( calSize == 'col' )
						initialX = canvas.width - 3 * cellSize;
					else
						initialX = canvas.width - 12 * cellSize;
			}
		}

		// calculate vertical position
		if ( calSize != 'col' ) {
			switch ( document.getElementById('v-align').value ) {
				case 'top':
					if ( calSize == 'row' )
						initialY = 0;
					else
						initialY = 2 * cellSize;
					break;
				case 'center':
					if ( calSize == 'row' )
						initialY = ( canvas.height - 3 * cellSize ) / 2;
					else
						initialY = ( canvas.height - 10 * cellSize ) / 2;
					break;
				default:
					if ( calSize == 'row' )
						initialY = canvas.height - 3 * cellSize;
					else
						initialY = canvas.height - 12 * cellSize;
			}
		}

		// create a semi-transparent background for the calendar
		ctx.fillStyle = 'rgba( 255, 255, 255, .6 )';
		if ( calSize == 'col' )
			ctx.fillRect( initialX, 0, cellSize * 3, canvas.height );
		else if ( calSize == 'row' )
			ctx.fillRect( 0, initialY, canvas.width, cellSize * 3 );
		else {
			ctx.roundRect( initialX, initialY, cellSize * 10, cellSize * 10, cellSize / 2 ).fill();
			ctx.translate( initialX + cellSize, initialY + cellSize );
		}

		// display month name and year
		ctx.fillStyle = '#000';
		ctx.font = 'bold ' + cellSize / 1.5 + 'px sans-serif';
		if ( calSize == 'col' ) {
			ctx.textAlign = 'center';
			ctx.fillText( year, initialX + cellSize * 1.5, cellSize );
			ctx.font = 'bold ' + cellSize + 'px sans-serif';
			ctx.fillText( msg[ lang ].monthNames[ month ].substring(0,3).toUpperCase(), initialX + cellSize * 1.5, cellSize * 2 );
			ctx.textAlign = 'right';
			ctx.translate( initialX, initialY + cellSize * 3 );
		}
		else if ( calSize == 'row' ) {
			ctx.fillText( year, cellSize, initialY + cellSize * 1.2 );
			ctx.fillText( msg[ lang ].monthNames[ month ], cellSize, initialY + cellSize * 2 );
			ctx.textAlign = 'center';
			ctx.translate( initialX + cellSize * 4.5, initialY );
		}
		else {
			ctx.textAlign = 'center';
			ctx.fillText( msg[ lang ].monthNames[ month ] + ' ' + year, cellSize * 4, cellSize / 2 ); // calendar center is 4*cellsize
		}

		ctx.font = cellSize / 2 + 'px sans-serif';
		currLine = cellSize * 2; // current line, for the block calendar
	}
	else
		html = '<table><tr>';

	// display week days initials
	for ( i = 0; i < 7; i++ ) {
		if ( canvas && ! isNaN( calSize ) ) {
			ctx.fillStyle = i == 0 ? '#c00' : '#000';
			ctx.fillText( msg[ lang ].weekDays[ i ].charAt(0), i * cellSize * 1.3, currLine );
		}
		else
			html += '<th>' + msg[ lang ].weekDays[ i ];
	}

	// if there are empty cells at the beginning, these are previous month's days
	if ( canvas )
		currLine += cellSize;
	else {
		html += '<tr>'
		for ( i = dow, d = ndays[ prevMon ] - i + 1; i > 0; i--, d++ )
			html += '<td class="prev-month ' + checkHoliday( month == 1 ? year - 1 : year, prevMon, d ) + '">' + d;
	}

	// loop for the current month
	for ( i = 1; i <= ndays[ month ]; i++ ) {
		if ( canvas ) {
			ctx.fillStyle = ( dow == 0 || checkHoliday( year, month, i ) ) ? '#c00' : '#000';
			if ( calSize == 'col' ) {
				ctx.font = cellSize * .3 + 'px sans-serif';
				ctx.fillText( msg[ lang ].weekDays[ dow ].toUpperCase(), cellSize * 1.2, i * cellSize - cellSize * .1 );
				ctx.font = cellSize * .6 + 'px sans-serif';
				ctx.fillText( i, cellSize * 2.5, i * cellSize );
			}
			else if ( calSize == 'row' ) {
				ctx.font = cellSize * .3 + 'px sans-serif';
				ctx.fillText( msg[ lang ].weekDays[ dow ].toUpperCase(), i * cellSize * 1.1, cellSize );
				ctx.font = cellSize * .6 + 'px sans-serif';
				ctx.fillText( i, i * cellSize * 1.1, cellSize * 2 );
			}
			else
				ctx.fillText( i, dow * cellSize * 1.3, currLine );
		}
		else
			html += '<td class="' + checkHoliday( year, month, i ) + '">' + i;

		dow++;
		if ( dow == 7 ) {
			dow = 0;
			if ( canvas )
				currLine += cellSize;
			else
				html += '<tr>';
		}
	}

	if ( ! canvas ) { // fill remaining cells with next month's days
		d = 1;
		if ( month < 12 )
			month++;
		else {
			month = 1;
			year++;
		}
		while ( dow > 0 && dow < 7 ) {
			html += '<td class="next-month ' + checkHoliday( year, month, d ) + '">' + d;
			d++;
			dow++;
		}

		html += '</table>';

		return html;
	}

}

/**
 * Updates the calendar preview according to the options selected by the user
 */
function updatePreview() {

	var area = [ document.getElementById('top-half'), document.getElementById('bottom-half') ],
		year = [ document.getElementById('top-year').value, document.getElementById('bottom-year').value ],
		month = [ document.getElementById('top-month').value, document.getElementById('bottom-month').value ],
		country = document.getElementById('country').value,
		layout = document.querySelector('input[name="layout"]:checked').value;

	var i, j, canvas, ctx, img, w, h, initialX, initialY;

	// set layout
	document.getElementById('config').className = layout;
	document.getElementById('preview').className = layout;

	if ( layout != 'digital' ) {
		for ( i = 0; i < 2; i++ ) {
			if ( month[ i ] > 0 && year[ i ] > 0 ) {
				area[ i ].querySelector('.cal-title').innerText = msg[ lang ].monthNames[ month[ i ] ] + ' ' + year[ i ];
				area[ i ].querySelector('.calendar').innerHTML = generateCalendar( month[ i ], year[ i ] );
			}
		}
	}
	else {
		canvas = document.getElementById('canvas');
		canvas.width = document.getElementById('canvas-width').value;
		canvas.height = document.getElementById('canvas-height').value;
		ctx = canvas.getContext('2d');

		img = new Image();
		img.crossOrigin = 'anonymous';
		img.src = document.getElementById('bottom-half').querySelector('.cal-image').style.backgroundImage.match(/url\("([^"]*)"\)/)[1];
		img.onload = function() {
			w = canvas.width;
			h = canvas.height;
			// scale and center original image as needed
			if ( ( w > h && img.width / img.height <= w / h ) ||
				 ( h > w && img.height / img.width > h / w ) ) {
				h = w / img.width * img.height;
				initialX = 0;
				initialY = ( h - canvas.height ) * img.height / h / 2;
			}
			else {
				w = h / img.height * img.width;
				initialX = ( w - canvas.width ) * img.width / w / 2;
				initialY = 0;
			}
			ctx.drawImage( img, initialX, initialY, img.width, img.height, 0, 0, w, h );
			generateCalendar( month[ 1 ], year[ 1 ], canvas );
		}
	}
}

/**
 * Rotate canvas
 */
function rotateCanvas() {

	var tmp = document.getElementById('canvas-width').value;

	document.getElementById('canvas-width').value = document.getElementById('canvas-height').value;
	document.getElementById('canvas-height').value = tmp;

	updatePreview();
}

/**
 * Download canvas as a PNG image
 */
function downloadCalendar( obj ) {

	var format = document.querySelector('input[name="file-format"]:checked').value;
	obj.download = 'desktopCal-' + document.getElementById('bottom-year').value + '-' + document.getElementById('bottom-month').value + '.' + format;
	obj.href = document.getElementById('canvas').toDataURL(`image/${format}`);
}

/**
 * Adds method for drawing a rounded rectangle on canvas 2D context
 * https://stackoverflow.com/a/7838871/2370385
 *
 * @param {number} x x-coordinate of the top left corner
 * @param {number} y y-coordinate of the top left corner
 * @param {number} w rectangle width
 * @param {number} h rectangle height
 * @param {number} r round corner radius (in pixels)
 */
CanvasRenderingContext2D.prototype.roundRect = function ( x, y, w, h, r ) {
	this.beginPath();
	this.moveTo(x+r, y);
	this.arcTo(x+w, y,   x+w, y+h, r);
	this.arcTo(x+w, y+h, x,   y+h, r);
	this.arcTo(x,   y+h, x,   y,   r);
	this.arcTo(x,   y,   x+w, y,   r);
	this.closePath();
	return this;
}

/**
 * Initialize user interface on page load
 */
function initialize() {

	var d = new Date(),
		month = d.getMonth() + 1,
		year = d.getFullYear(),
		browserLang = navigator.language.split('-'),
		w = window.screen.width * window.devicePixelRatio,
		h = window.screen.height * window.devicePixelRatio;

	// try to use browser preferred language and country
	if ( Object.keys( msg ).includes( browserLang[0] ) )
		lang = browserLang[0];
	else
		lang = 'en'; // if language not available, defaults to English

	if ( Object.keys( countries ).includes( browserLang[1].toLowerCase() ) )
		country = browserLang[1].toLowerCase();
	else
		country = msg[ lang ].defCountry;

	// generate page HTML
	document.getElementById('container').innerHTML = pageTemplate();

	// suggest current month for calendar front...
	document.getElementById('bottom-year').value = year;
	document.getElementById('bottom-month').selectedIndex = month;

	if ( month == 12 ) {
		month = 1;
		year++;
	}
	else
		month++;

	// ...and next month for calendar back
	document.getElementById('top-year').value = year;
	document.getElementById('top-month').selectedIndex = month;

	// pick two random images
	document.getElementById('top-half').querySelector('.cal-image').style.backgroundImage = `url(https://picsum.photos/${w}/${w*.75}/?random)`;
	document.getElementById('bottom-half').querySelector('.cal-image').style.backgroundImage = `url(https://source.unsplash.com/random/${w}x${w*.75})`;

	// init canvas width and height fields with the display's dimensions
	document.getElementById('canvas-width').value = w;
	document.getElementById('canvas-height').value = h;

	// update preview
	updatePreview();
}

document.addEventListener( 'DOMContentLoaded', initialize );
