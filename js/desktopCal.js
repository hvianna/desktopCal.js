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
var _VERSION = '19.1-dev';


/**
 * Loads an image from user's computer into a calendar panel
 *
 * @param {HTMLInputElement object} obj    handler of the HTML file element
 * @param {string}                  side   'top' or 'bottom' side of the calendar
 */
function loadImage( obj, side ) {

	var reader = new FileReader(),
		layout = document.getElementById('preview').className;

	if ( layout != 'desktop' )
		side = 'top';

	reader.onload = function() {
		document.querySelector(`.${side}-half .cal-image`).style = `background-image: url(${ reader.result })`;
		if ( layout == 'digital' )
			updatePreview();
	}

	reader.readAsDataURL( obj.files[0] );
}

/**
 * Calculates the Easter Day
 * https://stackoverflow.com/a/1284335/2370385
 *
 * @param {number} year
 *
 * @returns {Date object}
 */
function computus( year ) {

	var date, a, b, c, m, d;

	// Instantiate the date object
	date = new Date;
	date.setHours( 0, 0, 0, 0 );
	date.setFullYear( year );

	// Find the golden number
	a = year % 19;

	// Choose which version of the algorithm to use based on the given year
	b = ( 2200 <= year && year <= 2299 ) ? ( ( 11 * a ) + 4 ) % 30 : ( ( 11 * a ) + 5 ) % 30;

	// Determine whether or not to compensate for the previous step
	c = ( ( b === 0 ) || ( b === 1 && a > 10 ) ) ? ( b + 1 ) : b;

	// Use c first to find the month: April or March
	m = ( 1 <= c && c <= 19 ) ? 3 : 2;

	// Then use c to find the full moon after the northward equinox
	d = ( 50 - c ) % 31;

	// Mark the date of that full moon—the "Paschal" full moon
	date.setMonth( m, d );

	// Count forward the number of days until the following Sunday (Easter)
	date.setMonth( m, d + ( 7 - date.getDay() ) );

	// Gregorian Western Easter Sunday
	return date;
}

/**
 * Returns the first occurrence of the specified day of week (for floating holidays)
 *
 * @param {number} dow    day of week: 0 - 6 = Sunday - Saturday
 * @param {number} year
 * @param {number} month
 * @param {number} day    starting day to check
 *
 * @returns {number} day of month that falls in the desired day of week.
 */
function floatingDoW( dow, year, month, day ) {

	while ( ( new Date( year, month - 1, day ) ).getDay() != dow ) {
		day++;
	}

	return day;
}

/**
 * Checks if date is a holiday in the specified country
 *
 * @param {string} country
 * @param {number} year
 * @param {number} month
 * @param {number} day
 *
 * @returns {string} "holiday" if it's a holiday, empty string otherwise.
 */
function checkHoliday( country, year, month, day ) {

	var holidays, date, m, n;

	switch ( country ) {
		case 'br':
			holidays = [ '1-1',	'4-21',	'5-1', '9-7', '10-12', '11-2', '11-15', '12-25' ];

			// calculates floating holidays based on Easter Day
			date = computus( year );

			for ( n of [ -2, -45, 107 ] ) { // Good Friday, Carnival, Corpus Christ
				date.setDate( date.getDate() + n );
				m = date.getMonth() + 1;
				holidays.push( `${m}-${date.getDate()}` );
			}

			break;

		case 'us':
			holidays = [
				'1-1', `1-${ floatingDoW( 1, year, 1, 15 ) }`,
				`2-${ floatingDoW( 1, year, 2, 15 ) }`,
				`5-${ floatingDoW( 1, year, 5, 25 ) }`,
				'7-4',
				`9-${ floatingDoW( 1, year, 9, 1 ) }`,
				`10-${ floatingDoW( 1, year, 10, 8 ) }`,
				'11-11', `11-${ floatingDoW( 4, year, 11, 22 ) }`,
				'12-25'
			];
			break;

		case 'fr':
			holidays = [ '1-1', '5-1', '5-8', '7-14', '8-15', '11-1', '11-11', '12-25', '12-26' ];

			date = computus( year );
			for ( n of [ -2, 3, 38, 11 ] ) { // Good Friday, Easter Monday, Ascension Day, Whit Monday
				date.setDate( date.getDate() + n );
				m = date.getMonth() + 1;
				holidays.push( `${m}-${date.getDate()}` );
			}
			break;
	}

	if ( holidays.includes( `${month}-${day}` ) )
		return 'holiday';
	else
		return '';
}

/**
 * Generates the calendar for the specified month / year
 *
 * @param {number} month
 * @param {number} year
 * @param {string} lang 	desired language
 * @param {string} country  country for national holidays
 * @param {object} [canvas] canvas object where the calendar should be rendered
 *
 * @returns {string|undefined} undefined if calendar rendered on canvas, otherwise returns HTML table for the calendar
 */
function generateCalendar( month, year, lang, country, canvas = null ) {

	var ndays = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	var html, dow, prevMon,	i, d,
		ctx, cellSize, initialX, initialY, currLine; // auxiliary variables for canvas

	if ( ( year & 3 ) == 0 && ( ( year % 25 ) != 0 || ( year & 15 ) == 0 ) )
		ndays[2]++; // leap year

	prevMon = month > 1 ? month - 1 : 12;

	dow = ( new Date( year, month - 1, 1 ) ).getDay();

	if ( canvas ) {
		ctx = canvas.getContext('2d');
		cellSize = Math.min( canvas.width, canvas.height ) * .05 * window.devicePixelRatio;
		if ( canvas.height > canvas.width )
			initialX = ( canvas.width - 10 * cellSize ) / 2;
		else
			initialX = canvas.width - 12 * cellSize;
		initialY = canvas.height - 12 * cellSize;

		ctx.fillStyle = 'rgba( 255, 255, 255, .75 )';
		ctx.roundRect( initialX, initialY, cellSize * 10, cellSize * 10, cellSize / 2 ).fill();
		ctx.translate( initialX + cellSize, initialY + cellSize );

		ctx.fillStyle = '#000';
		ctx.font = 'bold ' + cellSize / 1.5 + 'px sans-serif';
		ctx.textAlign = 'center';
		ctx.fillText( msg[ lang ].monthNames[ month ] + ' ' + year, cellSize * 4, cellSize / 2 ); // calendar center is 4*cellsize
		ctx.font = cellSize / 2 + 'px sans-serif';
		currLine = cellSize * 2;
	}
	else
		html = '<table><tr>';

	// print week days initials
	for ( i = 0; i < 7; i++ ) {
		if ( canvas ) {
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
			html += '<td class="prev-month ' + checkHoliday( country, month == 1 ? year - 1 : year, prevMon, d ) + '">' + d;
	}

	// loop for the current month
	for ( i = 1; i <= ndays[ month ]; i++ ) {
		if ( canvas ) {
			ctx.fillStyle = ( dow == 0 || checkHoliday( country, year, month, i ) ) ? '#c00' : '#000';
			ctx.fillText( i, dow * cellSize * 1.3, currLine );
		}
		else
			html += '<td class="' + checkHoliday( country, year, month, i ) + '">' + i;

		dow++;
		if ( dow == 7 ) {
			dow = 0;
			if ( canvas )
				currLine += cellSize;
			else
				html += '<tr>';
		}
	}

	if ( canvas ) {
		ctx.fillStyle = 'rgba( 128, 128, 128, .5 )';
		ctx.textAlign = 'right';
		ctx.setTransform( 1, 0, 0, 1, 0, 0 );
		ctx.font = cellSize / 4 + 'px sans-serif';
		ctx.fillText( 'created with desktopCal.js', canvas.width - cellSize / 2, canvas.height - cellSize / 2 );
	}
	else { // fill remaining cells with next month's days
		d = 1;
		if ( month < 12 )
			month++;
		else {
			month = 1;
			year++;
		}
		while ( dow > 0 && dow < 7 ) {
			html += '<td class="next-month ' + checkHoliday( country, year, month, d ) + '">' + d;
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
				area[ i ].querySelector('.calendar').innerHTML = generateCalendar( month[ i ], year[ i ], lang, country );
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
		img.src = document.getElementById('top-half').querySelector('.cal-image').style.backgroundImage.match(/url\("([^"]*)"\)/)[1];
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
			generateCalendar( month[ 1 ], year[ 1 ], lang, country, canvas );
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

	obj.href = document.getElementById('canvas').toDataURL('image/png');
}

/**
 * Draws a rounded rectangle on canvas
 * https://stackoverflow.com/a/7838871/2370385
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

	// try to use browser preferred language
	if ( Object.keys( msg ).includes( browserLang[0] ) )
		lang = browserLang[0];
	else
		lang = 'en'; // if language not available, defaults to English

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
	document.getElementById('top-half').querySelector('.cal-image').style.backgroundImage = `url(https://picsum.photos/${w}/${h}/?random)`;
	document.getElementById('bottom-half').querySelector('.cal-image').style.backgroundImage = `url(https://source.unsplash.com/random/${w}x${h})`;

	// init canvas width and height fields with the display's dimensions
	document.getElementById('canvas-width').value = w;
	document.getElementById('canvas-height').value = h;

	// update preview
	updatePreview();
}

document.addEventListener( 'DOMContentLoaded', initialize );
