/**
 * i18n functions and global variables
 */

var lang; // current language

var msg = {
	en: {
		design:     'Design your calendar',
		language:   'Language',
		desktopCal: 'Desktop calendar',
		wallSingle: 'Wall calendar<br>(single month)',
		front:      'Front',
		back:       'Back',
		loadImage:  'Load Image',
		holidays:   'National Holidays', 
		year:       'Year',
		imgNotice:  'Images are NOT uploaded anywhere outside your computer. All processing takes place in your browser.',
		printIt:    'Print It!',
		print:      'Print',
		tipBgImg:   'Configure your printer to print <strong>background images;</strong>',
		tipMargins: 'Set the minimum margins allowed;',
		tipHeaders: 'Turn off all headers and footers.',
		preview:    'Preview',
		fold:       'fold on the dashed lines',
	},

	es: {
		design:     'Diseña tu calendario',
		language:   'Idioma',
		desktopCal: 'Calendario de escritorio',
		wallSingle: 'Calendario de pared<br>(un mes)',
		front:      'Frente',
		back:       'Verso',
		loadImage:  'Cargar Imagen',
		holidays:   'Fiestas Nacionales', 
		year:       'Año',
		imgNotice:  'Las imágenes NO se cargan en ningún lugar fuera de su computadora. Todo el procesamiento se lleva a cabo en su navegador.',
		printIt:    '¡Imprímelo!',
		print:      'Imprimir',
		tipBgImg:   'Configure su impresora para imprimir <strong>imágenes de fondo;</strong>',
		tipMargins: 'Ajuste los márgenes para los valores más bajos permitidos;',
		tipHeaders: 'Desactive todos los encabezados y pies de página.',
		preview:    'Vista previa',
		fold:       'doblar en las líneas punteadas',
	},

	fr: {
		design:     'Concevez votre calendrier',
		language:   'Langue',
		desktopCal: 'Calendrier de bureau',
		wallSingle: 'Calendrier mural<br>(un mois)',
		front:      'Face',
		back:       'Verso',
		loadImage:  'Charger Image',
		holidays:   'Vacances Nationales', 
		year:       'Année',
		imgNotice:  'Les images ne sont PAS téléchargées ailleurs que sur votre ordinateur. Tous les traitements ont lieu dans votre navigateur.',
		printIt:    'Imprime le!',
		print:      'Imprimer',
		tipBgImg:   'Configurez votre imprimante pour imprimer des <strong>images d’arrière-plan;</strong>',
		tipMargins: 'Ajuster les marges aux valeurs les plus basses autorisées;',
		tipHeaders: 'Désactiver tous les en-têtes et pieds de page.',
		preview:    'Aperçu',
		fold:       'plier sur les lignes pointillées',
	},

	pt: {
		design:     'Crie seu calendário',
		language:   'Idioma',
		desktopCal: 'Calendário de mesa',
		wallSingle: 'Calendário de parede<br>(um mês)',
		front:      'Frente',
		back:       'Verso',
		loadImage:  'Carregar Imagem',
		holidays:   'Feriados Nacionais', 
		year:       'Ano',
		imgNotice:  'As imagens NÃO são enviadas para fora de seu computador. Todo o processamento ocorre no seu navegador.',
		printIt:    'Imprimir',
		print:      'Imprimir',
		tipBgImg:   'Configure sua impressora para imprimir <strong>imagens de fundo;</strong>',
		tipMargins: 'Ajuste as margens para os menores valores permitidos;',
		tipHeaders: 'Desative todos os cabeçalhos e rodapés.',
		preview:    'Pré-visualização',
		fold:       'dobre nas linhas tracejadas',
	}
}

var monthName = {
	es: [ 'Mes', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubure', 'Noviembre', 'Diciembre' ],
	en: [ 'Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
	fr: [ 'Mois', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
	pt: [ 'Mês', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
}

var weekDays = {
	es: [ 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ],
	en: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
	fr: [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
	pt: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ]
}


function langOptions() {

	var languages = [
		{ value: 'en', text: 'English' },
		{ value: 'es', text: 'Español' },
		{ value: 'fr', text: 'Français' },
		{ value: 'pt', text: 'Português' },
	];

	var html = '';

	for ( var i = 0; i < languages.length; i++ )
		html += `<option value="${ languages[ i ].value }" ${ languages[ i ].value == lang ? ' selected' : '' }>${ languages[ i ].text }</option>`;

	return html;
}

function monthOptions() {

	var html = '';

	for ( var i = 0; i < 13; i++ )
		html += `<option value="${ i }">${ monthName[ lang ][ i ] }</option>`;

	return html;
}

function countryOptions() {

	var countries = [
		{ value: 'us', text: 'United States' },
		{ value: 'br', text: 'Brasil' },
	];

	var html = '';

	for ( var i = 0; i < countries.length; i++ )
		html += `<option value="${ countries[ i ].value }">${ countries[ i ].text }</option>`;

	return html;
}

function changeLang( obj ) {

	lang = obj.value;

	// save values from input and select elements, so we can restore them after changing the language

	var elems = document.querySelectorAll('input[type="text"], input[type="radio"], select:not(#lang)');
	var values = [];

	for ( i = 0; i < elems.length; i++ ) {
		if ( elems[ i ].localName == 'select' )
			values[ i ] = elems[ i ].selectedIndex;
		else if ( elems[ i ].attributes.type.nodeValue == 'radio' )
			values[ i ] = elems[ i ].checked;
		else
			values[ i ] = elems[ i ].value;
	}

	// save user selected pictures

	var elems = document.querySelectorAll('.cal-image');
	var pics = [];

	for ( i = 0; i < elems.length; i++ )
		pics[ i ] = elems[ i ].style.backgroundImage;

	// upadte page HTML

	document.getElementById('container').innerHTML = pageTemplate();

	// restore input and select values

	elems = document.querySelectorAll('input[type="text"], input[type="radio"], select:not(#lang)');

	for ( i = 0; i < elems.length; i++ ) {
		if ( elems[ i ].localName == 'select' )
			elems[ i ].selectedIndex = values[ i ];
		else if ( elems[ i ].attributes.type.nodeValue == 'radio' )
			elems[ i ].checked = values[ i ];
		else
			elems[ i ].value = values[ i ];
	}

	// restore calendar pictures

	elems = document.querySelectorAll('.cal-image');
	for ( i = 0; i < elems.length; i++ )
		elems[ i ].style.backgroundImage = pics[ i ];

	// update preview
	updatePreview();
}
