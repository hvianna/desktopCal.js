/**
 * i18n functions and global variables
 */

// current language and country
var lang, country;

// countries for holiday selection list
var countries = {
	us: { name: 'United States' },
	br: {
		name: 'Brasil',
		regions: [ 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MT', 'MS', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO' ],
	},
	fr: { name: 'France' },
}

// translations of messages
var msg = {
	en: {
		langName:   'English',
		defCountry: 'us',
		monthNames: [ 'Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
		weekDays:   [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
		design:     'Design your calendar',
		language:   'Language',
		layout:     'Layout',
		desktopCal: 'Desktop calendar',
		wallSingle: 'Wall calendar',
		digitalBg:  'Digital wallpaper',
		front:      'Front',
		back:       'Back',
		sizeOrient: 'Size and orientation',
		calSize:    'Calendar size',
		small:      'Small',
		medium:     'Medium',
		large:      'Large',
		horAlign:   'Horizontal alignment',
		verAlign:   'Vertical alignment',
		left:       'Left',
		horCenter:  'Center',
		right:      'Right',
		top:        'Top',
		verCenter:  'Center',
		bottom:     'Bottom',
		width:      'Width',
		height:     'Height',
		pixels:     'pixels',
		loadImage:  'Load Image',
		holidays:   'Holidays',
		year:       'Year',
		imgNotice:  'Images are NOT uploaded anywhere outside your computer. All processing takes place in your browser.',
		printIt:    'Print It!',
		print:      'Print',
		tipBgImg:   'Configure your printer to print <strong>background images;</strong>',
		tipMargins: 'Set the minimum margins allowed;',
		tipHeaders: 'Turn off all headers and footers.',
		downloadIt: 'Download It!',
		download:   'Download',
		preview:    'Preview',
		fold:       'fold on the dashed lines',
	},

	es: {
		langName:   'Español',
		defCountry: 'us',
		monthNames: [ 'Mes', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubure', 'Noviembre', 'Diciembre' ],
		weekDays:   [ 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ],
		design:     'Diseña tu calendario',
		language:   'Idioma',
		layout:     'Layout',
		desktopCal: 'Calendario de escritorio',
		wallSingle: 'Calendario de pared',
		digitalBg:  'Fondo de pantalla',
		front:      'Frente',
		back:       'Verso',
		sizeOrient: 'Tamaño y orientación',
		calSize:    'Calendar size',
		small:      'Small',
		medium:     'Medium',
		large:      'Large',
		horAlign:   'Horizontal alignment',
		verAlign:   'Vertical alignment',
		left:       'Left',
		horCenter:  'Center',
		right:      'Right',
		top:        'Top',
		verCenter:  'Center',
		bottom:     'Bottom',
		width:      'Width',
		height:     'Height',
		pixels:     'píxeles',
		loadImage:  'Cargar Imagen',
		holidays:   'Feriados',
		year:       'Año',
		imgNotice:  'Las imágenes NO se cargan en ningún lugar fuera de su computadora. Todo el procesamiento se lleva a cabo en su navegador.',
		printIt:    '¡Imprímelo!',
		print:      'Imprimir',
		tipBgImg:   'Configure su impresora para imprimir <strong>imágenes de fondo;</strong>',
		tipMargins: 'Ajuste los márgenes para los valores más bajos permitidos;',
		tipHeaders: 'Desactive todos los encabezados y pies de página.',
		downloadIt: '¡Descargalo!',
		download:   'Descargar',
		preview:    'Vista previa',
		fold:       'doblar en las líneas punteadas',
	},

	fr: {
		langName:   'Français',
		defCountry: 'fr',
		monthNames: [ 'Mois', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
		weekDays:   [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
		design:     'Concevez votre calendrier',
		language:   'Langue',
		layout:     'Layout',
		desktopCal: 'Calendrier de bureau',
		wallSingle: 'Calendrier mural',
		digitalBg:  'Fond d\'écran',
		front:      'Face',
		back:       'Verso',
		sizeOrient: 'Taille et orientation',
		calSize:    'Calendar size',
		small:      'Small',
		medium:     'Medium',
		large:      'Large',
		horAlign:   'Horizontal alignment',
		verAlign:   'Vertical alignment',
		left:       'Left',
		horCenter:  'Center',
		right:      'Right',
		top:        'Top',
		verCenter:  'Center',
		bottom:     'Bottom',
		width:      'Width',
		height:     'Height',
		pixels:     'pixels',
		loadImage:  'Charger Image',
		holidays:   'Jours fériés',
		year:       'Année',
		imgNotice:  'Les images ne sont PAS téléchargées ailleurs que sur votre ordinateur. Tous les traitements ont lieu dans votre navigateur.',
		printIt:    'Imprime le!',
		print:      'Imprimer',
		tipBgImg:   'Configurez votre imprimante pour imprimer des <strong>images d’arrière-plan;</strong>',
		tipMargins: 'Ajuster les marges aux valeurs les plus basses autorisées;',
		tipHeaders: 'Désactiver tous les en-têtes et pieds de page.',
		downloadIt: 'Télécharge le!',
		download:   'Télécharger',
		preview:    'Aperçu',
		fold:       'plier sur les lignes pointillées',
	},

	pt: {
		langName:   'Português',
		defCountry: 'br',
		monthNames: [ 'Mês', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
		weekDays:   [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
		design:     'Crie seu calendário',
		language:   'Idioma',
		layout:     'Layout',
		desktopCal: 'Calendário de mesa',
		wallSingle: 'Calendário de parede',
		digitalBg:  'Papel de parede digital',
		front:      'Frente',
		back:       'Verso',
		sizeOrient: 'Tamanho e orientação',
		calSize:    'Tamanho do calendário',
		small:      'Pequeno',
		medium:     'Médio',
		large:      'Grande',
		horAlign:   'Alinhamento horizontal',
		verAlign:   'Alinhamento vertical',
		left:       'Esquerda',
		horCenter:  'Centro',
		right:      'Direita',
		top:        'Topo',
		verCenter:  'Centro',
		bottom:     'Base',
		width:      'Largura',
		height:     'Altura',
		pixels:     'pixels',
		loadImage:  'Carregar Imagem',
		holidays:   'Feriados',
		year:       'Ano',
		imgNotice:  'As imagens NÃO são enviadas para fora de seu computador. Todo o processamento ocorre no seu navegador.',
		printIt:    'Imprimir',
		print:      'Imprimir',
		tipBgImg:   'Configure sua impressora para imprimir <strong>imagens de fundo;</strong>',
		tipMargins: 'Ajuste as margens para os menores valores permitidos;',
		tipHeaders: 'Desative todos os cabeçalhos e rodapés.',
		downloadIt: 'Baixar',
		download:   'Baixar',
		preview:    'Pré-visualização',
		fold:       'dobre nas linhas tracejadas',
	}
}


function langOptions() {

	var html = '',
		keys = Object.keys( msg );

	for ( var i = 0; i < keys.length; i++ )
		html += `<li><a href="javascript:changeLang('${ keys[ i ] }');" title="${ msg[ keys[ i ] ].langName }"><img src="img/icons8-${ keys[ i ] }-flag.png"></a></li>`;

	return html;
}

function monthOptions() {

	var html = '';

	for ( var i = 0; i < 13; i++ )
		html += `<option value="${ i }">${ msg[ lang ].monthNames[ i ] }</option>`;

	return html;
}

function countryOptions() {

	var html = '',
		keys = Object.keys( countries );

	for ( var i = 0; i < keys.length; i++ )
		html += `<option value="${ keys[ i ] }" ${ keys[ i ] == country ? 'selected' : '' }>${ countries[ keys[ i ] ].name }</option>`;

	return html;
}

function regionOptions() {

	var html = '<option></option>',
		regions;

	if ( countries[ country ].hasOwnProperty('regions') ) {
		regions = countries[ country ].regions;
		for ( var i = 0; i < regions.length; i++ )
			html += `<option value="${ regions[ i ] }">${ regions[ i ] }</option>`;
	}

	return html;
}

function changeCountry( newCountry ) {

	country = newCountry;
	document.getElementById('region').innerHTML = regionOptions();
	updatePreview();
}

function changeLang( newLang ) {

	if ( ! Object.keys( msg ).includes( newLang ) ) // invalid language?
		return false;

	lang = newLang;
	country = msg[ lang ].defCountry;

	// save values from input and select elements, so we can restore them after changing the language

	var elems = document.querySelectorAll('input[type="text"], input[type="radio"], select:not(#country)');
	var values = [];

	for ( var i = 0; i < elems.length; i++ ) {
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

	elems = document.querySelectorAll('input[type="text"], input[type="radio"], select:not(#country)');

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
