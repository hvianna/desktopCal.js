/**
 * i18n functions and global variables
 */

// current language and country
var lang, country;

// countries for holiday selection list
var countries = {
	ar: { name: 'Argentina' },
	br: { name: 'Brasil' },
	ca: { name: 'Canada' },
	es: { name: 'España' },
	fr: { name: 'France' },
	mx: { name: 'Mexico' },
	pt: { name: 'Portugal' },
	uk: { name: 'United Kingdom' },
	us: { name: 'United States' },
	uy: { name: 'Uruguay' }
}

// translations of messages
var msg = {
	en: {
		langName:   'English',
		defCountry: 'us',
		monthNames: [ 'Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
		weekDays:   [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
		weekStart:  'Week starts on',
		sunday:     'Sunday',
		monday:     'Monday',
		year:       'Year',
		month:      'Month',
		day:        'Day',
		credits:    'Created with <strong>desktopCal.js</strong>',
		creditTitle:'Credits',
		creditDescr:'You can customize this line to include your photo credits, for example.',
		front:      'Side 1',
		back:       'Side 2',
		design:     'Choose your layout',
		edit:       'Select the image, month and year',
		language:   'Language',
		layout:     'Layout',
		desktopCal: 'Desktop calendar',
		wallSingle: 'Wall calendar',
		digitalBg:  'Digital wallpaper',
		screenConf: 'Screen configuration',
		screenRes:  'Screen resolution',
		chgOrient:  'Change orientation',
		calStyle:   'Calendar style',
		small:      'Small block',
		medium:     'Medium block',
		large:      'Large block',
		column:     'Vertical bar',
		row:        'Horizontal bar',
		calSettings: 'Calendar settings',
		modern:     'Modern',
		classic:    'Classic',
		showHolidays: 'Show holiday descriptions',
		yes:        'Yes',
		no:         'No',
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
		rotateR:    'Rotate clockwise',
		rotateL:    'Rotate counterclockwise',
		flipH:      'Flip horizontal',
		flipV:      'Flip vertical',
		reset:      'Reset',
		colors:     'Colors',
		colorPresets: 'Color schemes',
		saveColors: 'Save to a new color scheme',
		deletePreset: 'Do you really want to delete this custom color scheme?\nTHIS ACTION CANNOT BE UNDONE!',
		bgColor:    'Background color',
		bgOpacity:  'Background opacity',
		textColor:  'Text color',
		holidayColor:'Holidays color',
		loadImage:  'Load Image',
		holidays:   'Holidays',
		countryHolidays: 'National holidays',
		customHolidays: 'Custom holidays',
		description: 'Description',
		none:       'None',
		add:        'Add',
		delete:     'Delete',
		load:       'Load',
		imgNotice:  'Images are NOT uploaded anywhere outside your computer. All processing takes place in your browser.',
		printIt:    'Print It!',
		paperSize:  'Paper size / aspect ratio:',
		paperIso:   'A3 or A4',
		paperLegal: 'Legal',
		paperLetter:'Letter',
		paperTabloid:'Tabloid',
		print:      'Generate & Print',
		tipBgImg:   'Configure your printer to print <strong>background images;</strong>',
		tipPortrait:'Set page orientation to <strong>Portrait;</strong>',
		tipMargins: 'Set the minimum margins allowed;',
		tipHeaders: 'Turn off all headers and footers.',
		downloadIt: 'Download your wallpaper',
		download:   'Download',
		fileFormat: 'File format',
		loading:    'Loading, please wait...',
		loadingTip: 'If this takes too long, try loading another image.',
		preview:    'Preview:',
		fold:       'fold on the dashed lines',
	},

	es: {
		langName:   'Español',
		defCountry: 'us',
		monthNames: [ 'Mes', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
		weekDays:   [ 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ],
		weekStart:  'Semana comienza el',
		sunday:     'Domingo',
		monday:     'Lunes',
		year:       'Año',
		month:      'Mes',
		day:        'Día',
		credits:    'Creado con <strong>desktopCal.js</strong>',
		creditTitle:'Créditos',
		creditDescr:'Puede personalizar esta línea para incluir sus créditos fotográficos, por ejemplo.',
		front:      'Lado 1',
		back:       'Lado 2',
		design:     'Elige tu diseño',
		edit:       'Seleccione la imagen, mes y año',
		language:   'Idioma',
		layout:     'Layout',
		desktopCal: 'Calendario de escritorio',
		wallSingle: 'Calendario de pared',
		digitalBg:  'Fondo de pantalla',
		screenConf: 'Configuración de pantalla',
		screenRes:  'Resolución de la pantalla',
		chgOrient:  'Cambiar orientación',
		calStyle:   'Estilo de calendario',
		small:      'Bloque pequeño',
		medium:     'Bloque mediano',
		large:      'Bloque grande',
		column:     'Barra vertical',
		row:        'Barra horizontal',
		calSettings: 'Configuraciones de calendario',
		modern:     'Moderno',
		classic:    'Clásico',
		showHolidays: 'Mostrar descripciones de feriados',
		yes:        'Si',
		no:         'No',
		horAlign:   'Alineación horizontal',
		verAlign:   'Alineación vertical',
		left:       'Izquierda',
		horCenter:  'Centrado',
		right:      'Derecha',
		top:        'Superior',
		verCenter:  'Centrado',
		bottom:     'Inferior',
		width:      'Anchura',
		height:     'Altura',
		pixels:     'píxeles',
		rotateR:    'Girar derecha',
		rotateL:    'Girar izquierda',
		flipH:      'Invertir horizontalmente',
		flipV:      'Invertir verticalmente',
		reset:      'Reiniciar',
		colors:     'Colores',
		colorPresets: 'Esquemas de color',
		saveColors: 'Guardar en un nuevo esquema de color',
		deletePreset: '¿Desea realmente borrar este esquema de color personalizado?\n¡ESTA ACCIÓN NO SE PUEDE DESHACER!',
		bgColor:    'Color de fondo',
		bgOpacity:  'Opacidad del fondo',
		textColor:  'Color de texto',
		holidayColor:'Color de feriados',
		loadImage:  'Cargar Imagen',
		holidays:   'Feriados',
		countryHolidays: 'Feriados nacionales',
		customHolidays: 'Feriados personalizados',
		description: 'Descripción',
		none:       'Ninguno',
		add:        'Añadir',
		delete:     'Borrar',
		load:       'Cargar',
		imgNotice:  'Las imágenes NO se envían fuera de su computadora. Todo el procesamiento se lleva a cabo en su navegador.',
		printIt:    '¡Imprímelo!',
		paperSize:  'Tamaño de papel:',
		paperIso:   'A3 o A4',
		paperLegal: 'Legal',
		paperLetter:'Carta',
		paperTabloid:'Tabloide',
		print:      'Generar e imprimir',
		tipBgImg:   'Configure su impresora para imprimir <strong>imágenes de fondo;</strong>',
		tipPortrait:'Establezca la orientación de la página en <strong>Retrato;</strong>',
		tipMargins: 'Ajuste los márgenes para los valores más bajos permitidos;',
		tipHeaders: 'Desactive todos los encabezados y pies de página.',
		downloadIt: 'Descarga tu fondo de pantalla',
		download:   'Descargar',
		fileFormat: 'Formato',
		loading:    'Cargando, por favor espere...',
		loadingTip: 'Si esto lleva demasiado tiempo, intente cargar otra imagen.',
		preview:    'Vista previa:',
		fold:       'doblar en las líneas punteadas',
	},

	fr: {
		langName:   'Français',
		defCountry: 'fr',
		monthNames: [ 'Mois', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
		weekDays:   [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
		weekStart:  'Semaine commence le',
		sunday:     'Dimanche',
		monday:     'Lundi',
		year:       'Année',
		month:      'Mois',
		day:        'Jour',
		credits:    'Créé avec <strong>desktopCal.js</strong>',
		creditTitle:'Crédits',
		creditDescr:'Vous pouvez personnaliser cette ligne pour inclure vos crédits photo, par exemple.',
		front:      'Côté 1',
		back:       'Côté 2',
		design:     'Choisissez votre design',
		edit:       'Sélectionnez l\'image, le mois et l\'année',
		language:   'Langue',
		layout:     'Layout',
		desktopCal: 'Calendrier de bureau',
		wallSingle: 'Calendrier mural',
		digitalBg:  'Fond d\'écran',
		screenConf: 'Configuration de l\'écran',
		screenRes:  'Résolution d\'écran',
		chgOrient:  'Changer d\'orientation',
		calStyle:   'Style de calendrier',
		small:      'Petit bloc',
		medium:     'Bloc moyen',
		large:      'Gros bloc',
		column:     'Barre verticale',
		row:        'Barre Horizontale',
		calSettings: 'Paramètres de calendrier',
		modern:     'Moderne',
		classic:    'Classique',
		showHolidays: 'Afficher les descriptions de fériés',
		yes:        'Oui',
		no:         'Non',
		horAlign:   'Alignement horizontale',
		verAlign:   'Alignement verticale',
		left:       'Gauche',
		horCenter:  'Centré',
		right:      'Droit',
		top:        'Haut',
		verCenter:  'Centré',
		bottom:     'Bas',
		width:      'Largeur',
		height:     'Hauteur',
		pixels:     'pixels',
		rotateR:    'Tourner à droite',
		rotateL:    'Tourner à gauche',
		flipH:      'Retourner horizontalement',
		flipV:      'Retourner verticalement',
		reset:      'Réinitialiser',
		colors:     'Couleurs',
		colorPresets: 'Jeux de couleurs',
		saveColors: 'Enregistrer dans un nouveau jeu de couleurs',
		deletePreset: 'Voulez-vous vraiment supprimer ce jeu de couleurs personnalisé?\nCETTE ACTION NE PEUT PAS ÊTRE ANNULÉE!',
		bgColor:    'Couleur du fond',
		bgOpacity:  'Opacité du fond',
		textColor:  'Couleur du texte',
		holidayColor:'Couleur de jours fériés',
		loadImage:  'Charger Image',
		holidays:   'Jours fériés',
		countryHolidays: 'Fêtes nationales',
		customHolidays: 'Jours fériés personnalisées',
		description: 'Description',
		none:       'Aucun',
		add:        'Ajouter',
		delete:     'Effacer',
		load:       'Charger',
		imgNotice:  'Les images NE sont PAS envoyées sur votre ordinateur. Tous les traitements ont lieu dans votre navigateur.',
		printIt:    'Imprime le!',
		paperSize:  'Format de papier:',
		paperIso:   'A3 ou A4',
		paperLegal: 'Légal',
		paperLetter:'Lettre',
		paperTabloid:'Tabloïde',
		print:      'Générer et imprimer',
		tipBgImg:   'Configurez votre imprimante pour imprimer des <strong>images d’arrière-plan;</strong>',
		tipPortrait:'Définissez l\'orientation de la page sur <strong>Portrait;</strong>',
		tipMargins: 'Ajuster les marges aux valeurs les plus basses autorisées;',
		tipHeaders: 'Désactiver tous les en-têtes et pieds de page.',
		downloadIt: 'Téléchargez votre fond d\'écran',
		download:   'Télécharger',
		fileFormat: 'Format',
		loading:    'Chargement, veuillez patienter...',
		loadingTip: 'Si cela prend trop de temps, essayez de charger une autre image.',
		preview:    'Aperçu:',
		fold:       'plier sur les lignes pointillées',
	},

	pt: {
		langName:   'Português',
		defCountry: 'br',
		monthNames: [ 'Mês', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
		weekDays:   [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
		weekStart:  'Semana começa em',
		sunday:     'Domingo',
		monday:     'Segunda',
		year:       'Ano',
		month:      'Mês',
		day:        'Dia',
		credits:    'Criado com <strong>desktopCal.js</strong>',
		creditTitle:'Créditos',
		creditDescr:'Você pode personalizar esta linha para incluir seus créditos fotográficos, por exemplo.',
		front:      'Lado 1',
		back:       'Lado 2',
		design:     'Escolha o layout',
		edit:       'Selecione a imagem, mês e ano',
		language:   'Idioma',
		layout:     'Layout',
		desktopCal: 'Calendário de mesa',
		wallSingle: 'Calendário de parede',
		digitalBg:  'Papel de parede digital',
		screenConf: 'Configuração da tela',
		screenRes:  'Resolução da tela',
		chgOrient:  'Alterar orientação',
		calStyle:   'Estilo de calendário',
		small:      'Quadro pequeno',
		medium:     'Quadro médio',
		large:      'Quadro grande',
		column:     'Barra vertical',
		row:        'Barra horizontal',
		calSettings: 'Configurações do calendário',
		modern:     'Moderno',
		classic:    'Clássico',
		showHolidays: 'Exibir descrições de feriados',
		yes:        'Sim',
		no:         'Não',
		horAlign:   'Alinhamento horizontal',
		verAlign:   'Alinhamento vertical',
		left:       'Esquerda',
		horCenter:  'Centro',
		right:      'Direita',
		top:        'Superior',
		verCenter:  'Centro',
		bottom:     'Inferior',
		width:      'Largura',
		height:     'Altura',
		colors:     'Cores',
		colorPresets: 'Esquemas de cores',
		saveColors: 'Salvar em um novo esquema de cores',
		deletePreset: 'Deseja realmente excluir este esquema de cores personalizado?\nESTA AÇÃO NÃO PODE SER DESFEITA!',
		bgColor:    'Cor de fundo',
		bgOpacity:  'Opacidade do fundo',
		textColor:  'Cor do texto',
		holidayColor:'Cor dos feriados',
		pixels:     'pixels',
		rotateR:    'Girar para direita',
		rotateL:    'Girar para esquerda',
		flipH:      'Inverter horizontalmente',
		flipV:      'Inverter verticalmente',
		reset:      'Redefinir',
		loadImage:  'Carregar Imagem',
		holidays:   'Feriados',
		countryHolidays: 'Feriados nacionais',
		customHolidays: 'Feriados personalizados',
		description: 'Descrição',
		none:       'Nenhum',
		add:        'Adicionar',
		delete:     'Excluir',
		load:       'Carregar',
		imgNotice:  'As imagens NÃO são enviadas para fora de seu computador. Todo o processamento ocorre no seu navegador.',
		printIt:    'Imprima',
		paperSize:  'Formato do papel:',
		paperIso:   'A3 ou A4',
		paperLegal: 'Ofício',
		paperLetter:'Carta',
		paperTabloid:'Ofício 2',
		print:      'Gerar e Imprimir',
		tipBgImg:   'Configure sua impressora para imprimir <strong>imagens de fundo;</strong>',
		tipPortrait:'Ajuste a orientação da página para <strong>Retrato;</strong>',
		tipMargins: 'Ajuste as margens para os menores valores permitidos;',
		tipHeaders: 'Desative todos os cabeçalhos e rodapés.',
		downloadIt: 'Baixe seu papel de parede',
		download:   'Baixar',
		fileFormat: 'Formato',
		loading:    'Carregando, por favor aguarde...',
		loadingTip: 'Se demorar muito, experimente carregar outra imagem.',
		preview:    'Pré-visualização:',
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

	var html = `<option value="">${msg[lang].none}</option>`,
		keys = Object.keys( countries );

	for ( var i = 0; i < keys.length; i++ )
		html += `<option value="${ keys[ i ] }" ${ keys[ i ] == country ? 'selected' : '' }>${ countries[ keys[ i ] ].name }</option>`;

	return html;
}

function changeCountry( newCountry ) {

	country = newCountry;
	localStorage.setItem( 'country', country );
	updatePreview();
}

function changeLang( newLang ) {

	if ( ! Object.keys( msg ).includes( newLang ) ) // invalid language?
		return false;

	lang = newLang;
	localStorage.setItem( 'lang', lang );

	translatePage();
	updatePreview();
}

function translatePage() {

	var values = [];

	// save values from select elements
	document.querySelectorAll('select').forEach( ( el, i ) => values[ i ] = el.selectedIndex );

	// translate strings
	document.querySelectorAll('[data-i18n]').forEach( el => {
		let prop = 'innerHTML';
		let text = msg[ lang ][ el.dataset.i18n ];

		if ( el.tagName == 'INPUT' ) {
			prop = 'placeholder';
			text = text.replace( /<[^>]*>/g, '' );
		}
		else if ( el.classList.contains('action-button') )
			prop = 'title';
		el[ prop ] = text;
	});

	// call functions to populate specific elements
	document.querySelectorAll('[data-func]').forEach( el => el.innerHTML = window[ el.dataset.func ]() );

	// restore select elements
	document.querySelectorAll('select').forEach( ( el, i ) => {
		if ( values[ i ] >= 0 )
			el.selectedIndex = values[ i ]
	});

}
