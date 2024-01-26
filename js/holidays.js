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

	const easterSunday = computus( year ),
		  holidays = getCustomHolidays();

	switch ( country ) {
		case 'ar':
			holidays.push(
				{ date: '1-1', name: 'Año Nuevo' },
				{ date: '3-24', name: 'Memoria por la Verdad y la Justicia' },
				{ date: '4-2', name: 'Día del Veterano' },
				{ date: '5-1', name: 'Día del Trabajador' },
				{ date: '5-25', name: 'Revolución de Mayo' },
				...observed( year, 6, 17, country, 'General Martín Miguel de Güemes' ),
				{ date: '6-20', name: 'General Manuel Belgrano' },
				{ date: '7-9', name: 'Día de la Independencia' },
				...observed( year, 8, 17, country, 'General José de San Martín' ),
				...observed( year, 10, 12, country, 'Respeto a la Diversidad Cultural' ),
				...observed( year, 11, 20, country, 'Soberanía Nacional' ),
				{ date: '12-8', name: 'Inmaculada Concepción de María' },
				{ date: '12-25', name: 'Navidad' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -48 ) ), name: 'Carnaval' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -47 ) ), name: 'Carnaval' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -2 ) ), name: 'Viernes Santo' }
			);
			break;

		case 'au':
			holidays.push(
				...observed( year, 1, 1, country, 'New Year\'s Day' ),
				...observed( year, 1, 26, country, 'Australia Day' ),
				...inRegions(['tas'], { date: floatingDoW( 1, year, 2, 8 ), name: 'Royal Hobart Regatta' }),
				...inRegions(['wa'], { date: floatingDoW( 1, year, 3, 1 ), name: 'Labour Day' }),
				...inRegions(['vic'], { date: floatingDoW( 1, year, 3, 8 ), name: 'Labour Day' }),
				...inRegions(['act'], { date: floatingDoW( 1, year, 3, 8 ), name: 'Canberra Day' }),
				...inRegions(['sa'], { date: floatingDoW( 1, year, 3, 8 ), name: 'Adelaide Cup Day' }),
				...inRegions(['tas'], { date: floatingDoW( 1, year, 3, 8 ), name: 'Eight Hours Day' }),
				{ date: '4-25', name: 'Anzac Day' },
				...inRegions(['nt'], { date: floatingDoW( 1, year, 5, 1 ), name: 'May Day' }),
				...inRegions(['qld'], { date: floatingDoW( 1, year, 5, 1 ), name: 'Labour Day' }),
				...inRegions(['act'], { date: floatingDoW( 1, year, 5, 27 ), name: 'Reconciliation Day' }),
				...inRegions(['wa'], { date: floatingDoW( 1, year, 6, 1 ), name: 'Western Australia Day' }),
				...inRegions(['vic', 'nsw', 'sa', 'tas'], { date: floatingDoW( 1, year, 6, 8 ), name: 'King\'s Birthday' }),
				...inRegions(['act'], { date: floatingDoW( 1, year, 6, 8 ), name: 'Sovereign\'s Birthday' }),
				...inRegions(['nt'], { date: floatingDoW( 1, year, 6, 8 ), name: 'June public holiday' }),
				...inRegions(['nt'], { date: floatingDoW( 1, year, 8, 1 ), name: 'Picnic Day' }),
				...inRegions(['qld'], { date: floatingDoW( 3, year, 8, 10 ), name: 'Royal Queensland Show (Brisbane)' }),
				...inRegions(['wa'], { date: floatingDoW( 1, year, 9, 22 ), name: 'King\'s Birthday' }),
				...inRegions(['qld'], { date: floatingDoW( 1, year, 10, 1 ), name: 'King\'s Birthday' }),
				...inRegions(['act', 'nsw', 'sa'], { date: floatingDoW( 1, year, 10, 1 ), name: 'Labour Day' }),
				...inRegions(['vic'], { date: floatingDoW( 2, year, 11, 1 ), name: 'Melbourne Cup' }),
				...inRegions(['tas'], { date: floatingDoW( 1, year, 11, 1 ), name: 'Recreation Day' }),
				...observed( year, 12, 25, country, 'Christmas Day', { consecutive: 2 } ),
				...observed( year, 12, 26, country, 'Boxing Day', { consecutive: 2 } ),
				{ date: dateToMonthDay( dateAdd( easterSunday, -2 ) ), name: 'Good Friday' },
				...inRegions( ['act', 'nsw', 'nt', 'sa'], { date: dateToMonthDay( dateAdd( easterSunday, -1 ) ), name: 'Easter Saturday' } ),
				...inRegions( ['qld'], { date: dateToMonthDay( dateAdd( easterSunday, -1 ) ), name: 'The day after Good Friday' } ),
				...inRegions( ['vic'], { date: dateToMonthDay( dateAdd( easterSunday, -1 ) ), name: 'Saturday before Easter Sunday' } ),
				{ date: dateToMonthDay( dateAdd( easterSunday, 0 ) ), name: 'Easter Sunday' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 1 ) ), name: 'Easter Monday' },
				...inRegions( ['tas'], { date: dateToMonthDay( dateAdd( easterSunday, 2 ) ), name: 'Easter Tuesday (Public Service only)' } )
			);
			break;

		case 'br':
			holidays.push(
				{ date: '1-1', name: 'Confraternização Universal' },
				...inRegions( ['ro'], { date: '1-4', name: 'Criação do estado de Rondônia' } ),
				...inRegions( ['ac'], ...observed( year, 1, 20, 'br-ac', 'Dia do Católico' ) ),
				...inRegions( ['ac'], ...observed( year, 1, 23, 'br-ac', 'Dia do Evangélico' ) ),
				...inRegions( ['pe'], { date: '3-6', name: 'Revolução Pernambucana' } ),
				...inRegions( ['ac'], ...observed( year, 3, 8, 'br-ac', 'Dia Internacional da Mulher' ) ),
				...inRegions( ['to'], { date: '3-18', name: 'Criação da Comarca do Norte' } ),
				...inRegions( ['ap','ce'], { date: '3-19', name: 'São José' } ),
				...inRegions( ['ce'], { date: '3-25', name: 'Abolição da escravidão no Ceará' } ),
				{ date: '4-21', name: 'Tiradentes' },
				...inRegions( ['df'], { date: '4-21', name: 'Fundação de Brasília' } ),
				...inRegions( ['mg'], { date: '4-21', name: 'Data Magna do estado de Minas Gerais' } ),
				...inRegions( ['rj'], { date: '4-23', name: 'São Jorge' } ),
				{ date: '5-1', name: 'Dia do Trabalhador' },
				...inRegions( ['ac'], { date: '6-15', name: 'Aniversário do estado do Acre' } ),
				...inRegions( ['ro'], { date: '6-18', name: 'Dia do Evangélico' } ),
				...inRegions( ['al','pe'], { date: '6-24', name: 'São João' } ),
				...inRegions( ['al'], { date: '6-29', name: 'São Pedro' } ),
				...inRegions( ['ba'], { date: '7-2', name: 'Independência da Bahia' } ),
				...inRegions( ['se'], { date: '7-8', name: 'Emancipação política de Sergipe' } ),
				...inRegions( ['sp'], { date: '7-9', name: 'Revolução Constitucionalista' } ),
				...inRegions( ['go'], { date: '7-26', name: 'Fundação da cidade de Goiás' } ),
				...inRegions( ['ma'], { date: '7-28', name: 'Adesão do Maranhão à independência do Brasil' } ),
				...inRegions( ['pb'], { date: '8-5', name: 'Nossa Senhora das Neves' } ),
				...inRegions( ['rn'], { date: '8-7', name: 'Fixação do Marco Colonial de Touros' } ),
				...inRegions( ['sc'], ...observed( year, 8, 11, 'br-sc', 'Data Magna do estado de Santa Catarina' ) ),
				...inRegions( ['ce'], { date: '8-15', name: 'Nossa Senhora da Assunção' } ),
				...inRegions( ['pa'], { date: '8-15', name: 'Adesão do Pará à independência do Brasil' } ),
				...inRegions( ['pr'], { date: '8-29', name: 'Dia do Paraná (ponto facultativo)' } ),
				...inRegions( ['ac'], ...observed( year, 9, 5, 'br-ac', 'Dia da Amazônia' ) ),
				...inRegions( ['am'], { date: '9-5', name: 'Elevação do Amazonas à categoria de província' } ),
				{ date: '9-7', name: 'Proclamação da Independência' },
				...inRegions( ['to'], { date: '9-8', name: 'Nossa Senhora da Natividade' } ),
				...inRegions( ['ap'], { date: '9-13', name: 'Data Magna do estado do Amapá' } ),
				...inRegions( ['al'], { date: '9-16', name: 'Emancipação Política de Alagoas' } ),
				...inRegions( ['rs'], { date: '9-20', name: 'Revolução Farroupilha' } ),
				...inRegions( ['rn'], { date: '10-3', name: 'Mártires de Cunhaú e Uruaçu' } ),
				...inRegions( ['rr'], { date: '10-5', name: 'Criação do estado de Roraima' } ),
				...inRegions( ['to'], { date: '10-5', name: 'Criação do estado de Tocantins' } ),
				...inRegions( ['ms'], { date: '10-11', name: 'Criação do estado do Mato Grosso do Sul' } ),
				{ date: '10-12', name: 'Nossa Senhora Aparecida' },
				...inRegions( ['rj'], { date: floatingDoW( 1, year, 10, 15 ), name: 'Dia do Comércio' } ),
				...inRegions( ['pi'], { date: '10-19', name: 'Dia do Piauí' } ),
				...inRegions( ['go'], { date: '10-24', name: 'Pedra fundamental de Goiânia' } ),
				{ date: '11-2', name: 'Finados' },
				{ date: '11-15', name: 'Proclamação da República' },
				...inRegions( ['ac'], ...observed( year, 11, 17, 'br-ac', 'Tratado de Petrópolis' ) ),
				...inRegions( ['al','am','mt','rj'], { date: '11-20', name: 'Dia da Consciência Negra' } ),
				...inRegions( ['al','df'], { date: '11-30', name: 'Dia do Evangélico' } ),
				...inRegions( ['am'], { date: '12-8', name: 'Nossa Senhora da Conceição' } ),
				{ date: '12-25', name: 'Natal' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -47 ) ), name: 'Carnaval' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -2 ) ), name: 'Paixão de Cristo' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 0 ) ), name: 'Páscoa' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 60 ) ), name: 'Corpus Christi' },
				...inRegions( ['es'], { date: dateToMonthDay( dateAdd( easterSunday, 8 ) ), name: 'Nossa Senhora da Penha' } )
			);
			break;

		case 'ca':
			holidays.push(
				{ date: '1-1', name: 'New Year\'s Day' },
				{ date: floatingDoW( 1, year, 5, 18 ), name: 'Victoria Day' },
				{ date: '7-1', name: 'Canada Day' },
				{ date: floatingDoW( 1, year, 8, 1 ), name: 'August Civic Holiday' },
				{ date: floatingDoW( 1, year, 9, 1 ), name: 'Labour Day' },
				{ date: floatingDoW( 1, year, 10, 8 ), name: 'Thanksgiving' },
				{ date: '11-11', name: 'Remembrance Day' },
				{ date: '12-25', name: 'Christmas Day' },
				{ date: '12-26', name: 'Boxing Day' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -2 ) ), name: 'Good Friday' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 1 ) ), name: 'Easter Monday' }
			);
			break;

		case 'de':
			holidays.push(
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
				{ date: '12-26', name: '2. Weihnachtsfeiertag' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -2 ) ), name: 'Karfreitag' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 0 ) ), name: 'Ostersonntag' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 1 ) ), name: 'Ostermontag' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 39 ) ), name: 'Christi Himmelfahrt' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 49 ) ), name: 'Pfingstsonntag' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 50 ) ), name: 'Pfingstmontag' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 60 ) ), name: 'Fronleichnam' }
			);
			break;

		case 'es':
			holidays.push(
				{ date: '1-1', name: 'Año Nuevo' },
				{ date: '1-6', name: 'Día de Reyes' },
				{ date: '5-1', name: 'Día del Trabajador' },
				{ date: '8-15', name: 'Asunción' },
				{ date: '10-12', name: 'Fiesta Nacional de España' },
				{ date: '11-1', name: 'Día de todos los Santos' },
				{ date: '12-6', name: 'Día de la Constitución' },
				{ date: '12-8', name: 'Inmaculada Concepción' },
				{ date: '12-25', name: 'Navidad' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -3 ) ), name: 'Jueves Santo' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -2 ) ), name: 'Viernes Santo' }
			);
			break;

		case 'hu':
			holidays.push(
				{ date: '1-1', name: 'Újév' },
				{ date: '3-15', name: '1848-as forradalom' },
				{ date: '8-20', name: 'Államalapítás ünnepe' },
				{ date: '5-1', name: 'A munka ünnepe' },
				{ date: '10-23', name: '1956-os forradalom' },
				{ date: '11-1', name: 'Mindenszentek' },
				{ date: '12-25', name: 'Karácsony napja' },
				{ date: '12-26', name: 'Karácsony másnapja' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -2 ) ), name: 'Nagypéntek' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 0 ) ), name: 'Húsvétvasárnap' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 1 ) ), name: 'Húsvéthétfő' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 49 ) ), name: 'Pünkösdvasárnap' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 50 ) ), name: 'Pünkösdhétfő' }
			);
			break;

		case 'fr':
			holidays.push(
				{ date: '1-1', name: 'Nouvel an' },
				{ date: '5-1', name: 'Fête des Travailleurs' },
				{ date: '5-8', name: 'Fête de la Victoire' },
				{ date: '7-14', name: 'Fête Nationale' },
				{ date: '8-15', name: 'Assomption' },
				{ date: '11-1', name: 'Toussaint' },
				{ date: '11-11', name: 'Armistice de 1918' },
				{ date: '12-25', name: 'Noël' },
				{ date: '12-26', name: 'Deuxième jour de Noël' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -2 ) ), name: 'Vendredi saint' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 1 ) ), name: 'Lundi de Pâques' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 39 ) ), name: 'Ascension' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 50 ) ), name: 'Lundi de Pentecôte' }
			);
			break;

		case 'mx':
			holidays.push(
				...observed( year, 1, 1, country, 'Año Nuevo' ),
				{ date: floatingDoW( 1, year, 2, 1 ), name: 'Día de la Constitución' },
				{ date: floatingDoW( 1, year, 3, 15 ), name: 'Natalicio de Benito Juárez' },
				...observed( year, 5, 1, country, 'Día del Trabajo' ),
				...observed( year, 9, 16, country, 'Día de la Independencia' ),
				{ date: floatingDoW( 1, year, 11, 15 ), name: 'Día de la Revolución' },
				...observed( year, 12, 25, country, 'Navidad')
			);
			break;

		case 'pt':
			holidays.push(
				{ date: '1-1', name: 'Ano Novo' },
				{ date: '4-25', name: 'Dia da Liberdade' },
				{ date: '5-1', name: 'Dia do Trabalhador' },
				{ date: '6-10', name: 'Dia de Portugal' },
				{ date: '8-15', name: 'Assunção de Nossa Senhora' },
				{ date: '10-5', name: 'Implantação da República' },
				{ date: '11-1', name: 'Dia de Todos-os-Santos' },
				{ date: '12-1', name: 'Restauração da Independência' },
				{ date: '12-8', name: 'Imaculada Conceição' },
				{ date: '12-25', name: 'Natal' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -47 ) ), name: 'Carnaval' },
				{ date: dateToMonthDay( dateAdd( easterSunday, -2 ) ), name: 'Sexta-feira Santa' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 60 ) ), name: 'Corpo de Deus' }
			);
			break;

		case 'uk':
			holidays.push(
				...observed( year, 1, 1, country, 'New Year\'s Day' ),
				{ date: floatingDoW( 1, year, 5, 1 ), name: 'May Day Bank Holiday' },
				{ date: floatingDoW( 1, year, 5, 25 ), name: 'Spring Bank Holiday' },
				{ date: floatingDoW( 1, year, 8, 25 ), name: 'Late Summer Bank Holiday' },
				...observed( year, 12, 25, country, 'Christmas Day', { consecutive: 2 } ),
				...observed( year, 12, 26, country, 'Boxing Day', { consecutive: 2 } ),
				{ date: dateToMonthDay( dateAdd( easterSunday, -2 ) ), name: 'Good Friday' },
				{ date: dateToMonthDay( dateAdd( easterSunday, 1 ) ), name: 'Easter Monday' }
			);
			break;

		case 'us':
			holidays.push(
				{ date: '1-1', name: 'New Year\'s Day' },
				{ date: floatingDoW( 1, year, 1, 15 ), name: 'Birthday of Martin Luther King Jr.' },
				{ date: floatingDoW( 1, year, 2, 15 ), name: 'Presidents\' Day' },
				{ date: floatingDoW( 1, year, 5, 25 ), name: 'Memorial Day' },
				{ date: '6-19', name: 'Juneteenth' },
				{ date: '7-4', name: 'Independence Day' },
				{ date: floatingDoW( 1, year, 9, 1 ), name: 'Labor Day' },
				{ date: floatingDoW( 1, year, 10, 8 ), name: 'Columbus Day' },
				{ date: '11-11', name: 'Veterans Day' },
				{ date: floatingDoW( 4, year, 11, 22 ), name: 'Thanksgiving Day' },
				{ date: '12-25', name: 'Christmas Day' }
			);
			break;

		case 'uy':
			holidays.push(
				{ date: '1-1', name: 'Año Nuevo' },
				{ date: '1-6', name: 'Día de Reyes' },
				...observed( year, 4, 19, country, 'Desembarco de los 33 Orientales' ),
				{ date: '5-1', name: 'Día de los Trabajadores' },
				...observed( year, 5, 18, country, 'Batalla de las Piedras' ),
				{ date: '6-19', name: 'Natalicio de Artigas y Día del Nunca Más' },
				{ date: '7-18', name: 'Jura de la Constitución' },
				{ date: '8-25', name: 'Declaratoria de la Independencia' },
				...observed( year, 10, 12, country, 'Día de la Raza' ),
				{ date: '11-2', name: 'Día de los Difuntos' },
				{ date: '12-25', name: 'Navidad' }
			);
			break;
	}

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
 * Returns the holiday only if it's applicable in the current region
 *
 * @param {array} holidayRegions Regions the holiday is observed in
 * @param {object} holiday Holiday definition
 * @returns Array (zero or one) of holiday definitions applicable
 */
function inRegions ( holidayRegions, holiday ) {
	if ( holidayRegions.includes( region ) ) {
		return [ holiday ];
	}
	else {
		return [];
	}
}

/**
 * Returns an array of actual and/or observed holiday dates according to a country's rules
 *
 * @param {number} year Holiday year
 * @param {number} month Holiday month
 * @param {number} day Holiday day
 * @param {string} country Country (or Country-Region) code
 * @param {string} name Holiday name
 * @param {Object} options Additional options
 * @param {number} options.consecutive How many consecutive holidays is this one a part of (to avoid shifting observed date onto them)
 * @returns {array} array of event objects
 */
function observed( year, month, day, country, name, options ) {
	options = options || {};

	let diffs = [0],
		date = new Date( year, month - 1, day ),
		dow = date.getDay(),
		observedName = name;

	switch ( country ) {
		case 'mx' :
			if ( dow == 0 )
				diffs = [1];
			else if ( dow == 6 )
				diffs = [-1];
			break;

		case 'au' :
		case 'uk' :
			// if a holiday falls on a Sunday and Monday becomes a public holiday instead, both Sunday and Monday dates will be returned
			var consecutive = options.consecutive || 1;
			if ( dow == 0 )
				diffs.push( consecutive );
			else if ( dow == 6 )
				diffs.push( 2 );
			observedName = `${name} (in lieu)`;
			break;

		case 'ar' :
		case 'uy' :
			if ( dow == 2 )
				diffs = [-1];
			else if ( dow == 3 )
				diffs = [-2];
			else if ( dow == 4 )
				diffs = [4];
			else if ( dow == 5 )
				diffs = [3];
			break;

		case 'br-ac' :
			// holidays between Tuesday and Thursday are postponed to Friday
			if ( dow >= 2 && dow <= 4 )
				diffs = [ 5 - dow ];
			break;

		case 'br-sc' :
			// holidays on working days are postponed to Sunday
			if ( dow > 0 )
				diffs = [ 7 - dow ];
			break;
	}

	return diffs.map(diff => {
		var newDate = dateToMonthDay( dateAdd( date, diff ) );
		return {
			date: newDate,
			name: diff == 0 ? name : observedName
		}
	});
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

	console.table(holidays);

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
