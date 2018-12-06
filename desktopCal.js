/**
 * desktopCal.js
 * A printable desktop calendar generator built with HTML, CSS & JavaScript.
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


function loadImage( obj, side ) {

	var reader = new FileReader();

	reader.onload = function() {
		var dataURL = reader.result;
		var imageObj = new Image();
		document.querySelector(`.${side}-half .cal-image`).style = `background-image: url(${dataURL})`;
	}

	reader.readAsDataURL( obj.files[0] );
}


function generateCalendar( month, year ) {

	var ndays = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	var html, dow, prevMon,	i;

	if ( ( year & 3 ) == 0 && ( ( year % 25 ) != 0 || ( year & 15 ) == 0 ) )
		ndays[2]++; // leap year 

	prevMon = month > 1 ? month - 1 : 12;

	dow = ( new Date( year, month - 1, 1 ) ).getDay();
	html = '<table><tr><th>Sun<th>Mon<th>Tue<th>Wed<th>Thu<th>Fri<th>Sat';
	html += '<tr>'

	for ( i = dow; i > 0; i-- )
		html += '<td class="disabled">' + ( ndays[ prevMon ] - i + 1 );

	for ( i = 1; i <= ndays[ month ]; i++ ) {
		html += '<td>' + i;
		dow++;
		if ( dow == 7 ) {
			html += '<tr>';
			dow = 0;
		}
	}

	i = 1;
	while ( dow > 0 && dow < 7 ) {
		html += '<td class="disabled">' + i;
		i++;
		dow++;
	}

	html += '</table>';

	return html;

}


function updatePreview() {

	var area = [ document.getElementById('top-half'), document.getElementById('bottom-half') ],
		year = [ document.getElementById('top-year').value, document.getElementById('bottom-year').value ],
		month = [ document.getElementById('top-month').value, document.getElementById('bottom-month').value ],
		mName = [ document.getElementById('top-month')[document.getElementById('top-month').selectedIndex].text, document.getElementById('bottom-month')[document.getElementById('bottom-month').selectedIndex].text ];

	var i, j;

	for ( i = 0; i < 2; i++ ) {
		if ( month[ i ] && year[ i ] ) {
			area[ i ].querySelector('.cal-title').innerText = mName[ i ] + ' ' + year[ i ];
			area[ i ].querySelector('.calendar').innerHTML = generateCalendar( month[ i ], year[ i ] );
		}
	}

}


function initialize() {

	var monthName = [ '', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
		images = [ 'xmas.jpg', 'rio.jpg', 'allure.jpg', 'charqueada.jpg', 'st-thomas.jpg', 'peach-flower.jpg' ];

	var area = document.getElementById('cal-header'),
		d = new Date(),
		month = d.getMonth() + 1,
		year = d.getFullYear();

	area.querySelector('.cal-image').style = `background-image: url(img/${ images[ Math.floor( Math.random() * images.length ) ] })`;
	area.querySelector('.cal-title').innerText = monthName[ month ] + ' ' + year;
	area.querySelector('.calendar').innerHTML = generateCalendar( month, year );

}

window.onload = initialize;
