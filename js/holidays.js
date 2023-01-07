/**
 * Checks if a date is a holiday in the currently selected country
 *
 * @param {number} year
 * @param {number} month
 * @param {number} day
 *
 * @returns {string} "holiday" if date is a holiday, empty string otherwise.
 */
function checkHoliday( year, month, day ) {

	let	holidays = [],
		easterHolidays = [];

	switch ( country ) {
		case 'ar':
			holidays = [
				{ date: '1-1', name: 'Año Nuevo' },
				{ date: '3-24', name: 'Memoria por la Verdad y la Justicia' },
				{ date: '4-2', name: 'Día del Veterano' },
				{ date: '5-1', name: 'Día del Trabajador' },
				{ date: '5-25', name: 'Revolución de Mayo' },
				{ date: calcObservation( year, 6, 17, country ), name: 'General Martín Miguel de Güemes' },
				{ date: '6-20', name: 'General Manuel Belgrano' },
				{ date: '7-9', name: 'Día de la Independencia' },
				{ date: calcObservation( year, 8, 17, country ), name: 'General José de San Martín' },
				{ date: calcObservation( year, 10, 12, country ), name: 'Respeto a la Diversidad Cultural' },
				{ date: calcObservation( year, 11, 20, country ), name: 'Soberanía Nacional' },
				{ date: '12-8', name: 'Inmaculada Concepción de María' },
				{ date: '12-25', name: 'Navidad' }
			];
			easterHolidays = [
				{ days: -48, name: 'Carnaval' },
				{ days: -47, name: 'Carnaval' },
				{ days: -2, name: 'Viernes Santo' }
			];
			break;

		case 'br':
			holidays = [
				{ date: '1-1', name: 'Confraternização Universal' },
				{ date: '4-21', name: 'Tiradentes' },
				{ date: '5-1', name: 'Dia do Trabalhador' },
				{ date: '9-7', name: 'Proclamação da Independência' },
				{ date: '10-12', name: 'Nossa Senhora Aparecida' },
				{ date: '11-2', name: 'Finados' },
				{ date: '11-15', name: 'Proclamação da República' },
				{ date: '12-25', name: 'Natal' }
			];
			easterHolidays = [
				{ days: -47, name: 'Carnaval' },
				{ days: -2, name: 'Sexta-feira Santa' },
				{ days: 60, name: 'Corpus Christi' }
			];
			break;

		case 'ca':
			holidays = [
				{ date: '1-1', name: 'New Year\'s Day' },
				{ date: floatingDoW( 1, year, 5, 18 ), name: 'Victoria Day' },
				{ date: '7-1', name: 'Canada Day' },
				{ date: floatingDoW( 1, year, 8, 1 ), name: 'August Civic Holiday' },
				{ date: floatingDoW( 1, year, 9, 1 ), name: 'Labour Day' },
				{ date: floatingDoW( 1, year, 10, 8 ), name: 'Thanksgiving' },
				{ date: '11-11', name: 'Remembrance Day' },
				{ date: '12-25', name: 'Christmas Day' },
				{ date: '12-26', name: 'Boxing Day' }
			];
			easterHolidays = [
				{ days: -2, name: 'Good Friday' },
				{ days: 1, name: 'Easter Monday' }
			];
			break;

		case 'de':
			holidays = [
				{ date: '1-1', name: 'Neujahr' },
				{ date: '1-6', name: 'Heilige Drei Könige' },
				{ date: '3-8', name: 'Internationaler Frauentag' },
				{ date: '5-1', name: 'Tag der Arbeit' },
				{ date: '8-15', name: 'Mariä Himmelfahrt' },
				{ date: '9-20', name: 'Weltkindertag' },
				{ date: '10-3', name: 'Tag der Deutschen Einheit' },
				{ date: '10-31', name: 'Reformationstag' },
				{ date: '11-1', name: 'Allerheiligen' },
				{ date: floatingDoW( 3, year, 11, 16 ), name: 'Buß- und Bettag' }, // Wednesday between November 16-22
				{ date: '12-25', name: '1. Weihnachtsfeiertag' },
				{ date: '12-26', name: '2. Weihnachtsfeiertag' }
			];
			easterHolidays = [
				{ days: -2, name: 'Karfreitag' },
				{ days: 0, name: 'Ostersonntag' },
				{ days: 1, name: 'Ostermontag' },
				{ days: 39, name: 'Christi Himmelfahrt' },
				{ days: 49, name: 'Pfingstsonntag' },
				{ days: 50, name: 'Pfingstmontag' },
				{ days: 60, name: 'Fronleichnam' },
			];
			break;

		case 'es':
			holidays = [
				{ date: '1-1', name: 'Año Nuevo' },
				{ date: '1-6', name: 'Día de Reyes' },
				{ date: '5-1', name: 'Día del Trabajador' },
				{ date: '8-15', name: 'Asunción' },
				{ date: '10-12', name: 'Fiesta Nacional de España' },
				{ date: '11-1', name: 'Día de todos los Santos' },
				{ date: '12-6', name: 'Día de la Constitución' },
				{ date: '12-8', name: 'Inmaculada Concepción' },
				{ date: '12-25', name: 'Navidad' }
			];
			easterHolidays = [
				{ days: -3, name: 'Jueves Santo' },
				{ days: -2, name: 'Viernes Santo' }
			];
			break;

		case 'fr':
			holidays = [
				{ date: '1-1', name: 'Nouvel an' },
				{ date: '5-1', name: 'Fête des Travailleurs' },
				{ date: '5-8', name: 'Fête de la Victoire' },
				{ date: '7-14', name: 'Fête Nationale' },
				{ date: '8-15', name: 'Assomption' },
				{ date: '11-1', name: 'Toussaint' },
				{ date: '11-11', name: 'Armistice de 1918' },
				{ date: '12-25', name: 'Noël' },
				{ date: '12-26', name: 'Deuxième jour de Noël' }
			];
			easterHolidays = [
				{ days: -2, name: 'Vendredi saint' },
				{ days: 1, name: 'Lundi de Pâques' },
				{ days: 39, name: 'Ascension' },
				{ days: 50, name: 'Lundi de Pentecôte' }
			];
			break;

		case 'mx':
			holidays = [
				{ date: calcObservation( year, 1, 1, country ), name: 'Año Nuevo' },
				{ date: floatingDoW( 1, year, 2, 1 ), name: 'Día de la Constitución' },
				{ date: floatingDoW( 1, year, 3, 15 ), name: 'Natalicio de Benito Juárez' },
				{ date: calcObservation( year, 5, 1, country ), name: 'Día del Trabajo' },
				{ date: calcObservation( year, 9, 16, country ), name: 'Día de la Independencia' },
				{ date: floatingDoW( 1, year, 11, 15 ), name: 'Día de la Revolución' },
				{ date: calcObservation( year, 12, 25, country ), name: 'Navidad' }
			];
			break;

		case 'pt':
			holidays = [
				{ date: '1-1', name: 'Ano Novo' },
				{ date: '4-25', name: 'Dia da Liberdade' },
				{ date: '5-1', name: 'Dia do Trabalhador' },
				{ date: '6-10', name: 'Dia de Portugal' },
				{ date: '8-15', name: 'Assunção de Nossa Senhora' },
				{ date: '10-5', name: 'Implantação da República' },
				{ date: '11-1', name: 'Dia de Todos-os-Santos' },
				{ date: '12-1', name: 'Restauração da Independência' },
				{ date: '12-8', name: 'Imaculada Conceição' },
				{ date: '12-25', name: 'Natal' }
			];
			easterHolidays = [
				{ days: -47, name: 'Carnaval' },
				{ days: -2, name: 'Sexta-feira Santa' },
				{ days: 60, name: 'Corpo de Deus' }
			];
			break;

		case 'uk':
			holidays = [
				{ date: calcObservation( year, 1, 1, country ), name: 'New Year\'s Day' },
				{ date: floatingDoW( 1, year, 5, 1 ), name: 'May Day Bank Holiday' },
				{ date: floatingDoW( 1, year, 5, 25 ), name: 'Spring Bank Holiday' },
				{ date: floatingDoW( 1, year, 8, 25 ), name: 'Late Summer Bank Holiday' },
				{ date: calcObservation( year, 12, 25, country ), name: 'Christmas Day' },
				{ date: calcObservation( year, 12, 26, country ), name: 'Boxing Day' }
			];
			easterHolidays = [
				{ days: -2, name: 'Good Friday' },
				{ days: 1, name: 'Easter Monday' }
			];
			break;

		case 'us':
			holidays = [
				{ date: '1-1', name: 'New Year\'s Day' },
				{ date: floatingDoW( 1, year, 1, 15 ), name: 'Birthday of Martin Luther King Jr.' },
				{ date: floatingDoW( 1, year, 2, 15 ), name: 'Washington\'s Birthday' },
				{ date: floatingDoW( 1, year, 5, 25 ), name: 'Memorial Day' },
				{ date: '7-4', name: 'Independence Day' },
				{ date: floatingDoW( 1, year, 9, 1 ), name: 'Labor Day' },
				{ date: floatingDoW( 1, year, 10, 8 ), name: 'Columbus Day' },
				{ date: '11-11', name: 'Veterans Day' },
				{ date: floatingDoW( 4, year, 11, 22 ), name: 'Thanksgiving Day' },
				{ date: '12-25', name: 'Christmas Day' }
			];
			break;

		case 'uy':
			holidays = [
				{ date: '1-1', name: 'Año Nuevo' },
				{ date: '1-6', name: 'Día de Reyes' },
				{ date: calcObservation( year, 4, 19, country ), name: 'Desembarco de los 33 Orientales' },
				{ date: '5-1', name: 'Día de los Trabajadores' },
				{ date: calcObservation( year, 5, 18, country ), name: 'Batalla de las Piedras' },
				{ date: '6-19', name: 'Natalicio de Artigas y Día del Nunca Más' },
				{ date: '7-18', name: 'Jura de la Constitución' },
				{ date: '8-25', name: 'Declaratoria de la Independencia' },
				{ date: calcObservation( year, 10, 12, country ), name: 'Día de la Raza' },
				{ date: '11-2', name: 'Día de los Difuntos' },
				{ date: '12-25', name: 'Navidad' }
			];
			break;
	}

	// calculates floating holidays based on Easter Day
	if ( easterHolidays.length ) {
		let easter = computus( year );
		easterHolidays.forEach( d => {
			let date = dateAdd( easter, d.days );
			holidays.push( { date: `${ date.getMonth() + 1 }-${ date.getDate() }`, name: d.name } );
		});
	}

	holidays = holidays.concat( getCustomHolidays() );

	// https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
	return holidays.filter( i => i.date == `${month}-${day}` ).map( i => i.name );
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
 * @returns {string} date in 'month-day' format that falls on the given day of week.
 */
function floatingDoW( dow, year, month, day ) {

	let ndays = getMonthDays( year );

	while ( ( new Date( year, month - 1, day ) ).getDay() != dow ) {
		day++;
		if ( day > ndays[ month ] ) {
			day = 1;
			month++;
			if ( month > 12 ) {
				month = 1;
				year++;
				ndays = getMonthDays( year );
			}
		}
	}

	return `${month}-${day}`;
}

/**
 * Returns an array with the number of days for each month of the given year
 *
 * @param {number} year
 *
 * @returns {array}
 */
function getMonthDays( year ) {
	let ndays = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	if ( ( year & 3 ) == 0 && ( ( year % 25 ) != 0 || ( year & 15 ) == 0 ) )
		ndays[2]++; // leap year

	return ndays;
}

/**
 * Calculates the observation date for a given holiday according to a country's rules
 *
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {string} country
 *
 * @returns {string} holiday date in 'month-day' format
 */
function calcObservation( year, month, day, country ) {

	var diff = 0,
		date = new Date( year, month - 1, day ),
		dow = date.getDay();

	switch ( country ) {
		case 'mx' :
			if ( dow == 0 )
				diff = 1;
			else if ( dow == 6 )
				diff = -1;
			break;

		case 'au' :
		case 'uk' :
			if ( dow == 0 )
				diff = 1;
			else if ( dow == 6 )
				diff = 2;
			break;

		case 'ar' :
		case 'uy' :
			if ( dow == 2 )
				diff = -1;
			else if ( dow == 3 )
				diff = -2;
			else if ( dow == 4 )
				diff = 4;
			else if ( dow == 5 )
				diff = 3;
			break;
	}

	return dateToMonthDay( dateAdd( date, diff ) );
}

/**
 * Adds (or subtracts) a given number of days to a Date object
 *
 * @param {Date} date
 * @param {number} nDays
 *
 * @returns {Date}
 */
function dateAdd( date, nDays ) {
	return new Date( date.getTime() + nDays * 86400000 );
}

/**
 * Converts a given Date object to a 'month-day' string
 *
 * @param {Date} date
 *
 * @returns {string}
 */
function dateToMonthDay( date ) {
	return `${ date.getMonth() + 1 }-${ date.getDate() }`;
}

/**
 * Reads custom holidays from local storage
 *
 * @returns {array} array of custom holidays
 */
function getCustomHolidays() {

	var holidays;

	try {
		holidays = JSON.parse( localStorage.getItem( 'custom-holidays' ) ) || [];
	}
	catch( err ) {
		holidays = [];
	}

	// convert legacy holidays array (version =< 19.1)
	holidays = holidays.map( d => {
		if ( typeof d != 'object' )
			return { date: d, name: '' }
		else
			return d
	});

	// return holidays in chronological order
	return holidays.sort( ( a, b ) => {
		a = a.date.split('-');
		b = b.date.split('-');
		if ( a[0] == b[0] )
			return a[1] - b[1];
		else
			return a[0] - b[0];
	});
}

/**
 * Populates the table of custom holidays
 */
function listCustomHolidays() {

	var html = '',
		holidays = getCustomHolidays();

	holidays.forEach( ( item, i ) => {
		let d = item.date.split('-');
		html += `<tr><td>${msg[lang].monthNames[ d[0] ]}</td><td>${d[1]}</td><td>${item.name}</td><td><button type="button" onclick="deleteCustomHoliday( ${i} );">${msg[lang].delete}</button></td></tr>`;
	});

	return html;
}

/**
 * Adds a custom holiday and saves it to local storage
 */
function addCustomHoliday() {

	var m, d,
		holidays = getCustomHolidays();

	m = document.getElementById('custom-holiday-month').value;
	d = document.getElementById('custom-holiday-day').value;

	if ( m > 0 && d > 0 ) {
		holidays.push( { date: `${m}-${d}`, name: document.getElementById('custom-holiday-name').value } );
		localStorage.setItem( 'custom-holidays', JSON.stringify( holidays ) );
		document.querySelector('#custom-holidays-table tbody').innerHTML = listCustomHolidays();
		document.getElementById('custom-holiday-day').value = '';
		document.getElementById('custom-holiday-name').value = '';
		updatePreview();
	}
}

/**
 * Deletes a custom holiday
 *
 * @param {number} i index of the item to remove from the holidays array
 */
function deleteCustomHoliday( i ) {

	var holidays = getCustomHolidays();

	if ( i < holidays.length )
		holidays.splice( i, 1 );

	localStorage.setItem( 'custom-holidays', JSON.stringify( holidays ) );
	document.querySelector('#custom-holidays-table tbody').innerHTML = listCustomHolidays();
	updatePreview();
}
