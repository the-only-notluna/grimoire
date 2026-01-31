// Initialisation de l'espace de noms si besoin
window.GrimoireData = window.GrimoireData || {};

window.GrimoireData['Wes'] = {
	displayName: "Wesday Allan 🥀",
	job: "Humain Sorcier",
	color: "#E0E0E0", // Or
	avatar: "", // Mettre le chemin ex: "img/wes.png" (256x256)
	
	// Map des emojis pour les boutons de style
	emojiMap: {
		"Le Dandy de la Crypte": "🪦",
		"L'Oracle du Seuil": "🔮",
		"Le Héraut du Vide": "📢",
		"Post-Perfidia": "⚰️"
	},

	// LE CONTENU COMPLET RÉÉCRIT AVEC POST-PERFIDIA
	grimoire: [
		{
			"category": "Focus Spells",
			"spells": [
				{
					"id": "drain_life",
					"name": "Drain Life",
					"name_en": "Drain Life",
					"rank": 3,
					"type": "Focus Spell",
					"mechanic": "Dégâts de Vide (Void) + Gain de PV temporaires. Test de Vigueur basique.",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "Je tends La Chose vers ma proie, doigts écartés en serre affamée, mais un spasme incontrôlé la fait trébucher contre mon épaule. Le fil d'entropie que je tissais se rompt avant même de toucher sa cible, claquant dans l'éther comme une corde pourrie. Je grimace, massant mon poignet endolori, comme si l'on venait de me claquer une porte au visage alors que je tentais de m'inviter au festin.",
							"dialogues": {
								"Le Dandy de la Crypte": "Grossier personnage que vous êtes ! On refuse ainsi un toast porté en votre honneur funèbre ? L'impolitesse aujourd'hui n'a plus de limites.",
								"L'Oracle du Seuil": "Fascinant. Une nuance pathologique du récepteur, sans doute une anomalie de son métabolisme spirituel, a complètement inhibé le transfert entropique.",
								"Le Héraut du Vide": "Pourquoi tant d'agitation, mortel ? Votre résistance n'est qu'une insulte lancée à la face de la quiétude éternelle qui nous attend tous, sans exception. Cessez donc de vous débattre comme un poisson hors de l'eau du Styx.",
								"Post-Perfidia": "Perfidia aurait ri de mon échec, de sa voix rauque et moqueuse qui me manque tant. 'Wes, t'es aussi doué qu'un gobelin manchot', aurait-elle dit en se tenant les côtes. Et elle aurait eu mille fois raison. J'ai failli. Encore."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "J'esquisse un geste las de la main, laissant s'échapper de ma paume blafarde un filigrane de brume noire qui serpente mollement vers ma cible. Le fil ténu vibre une seconde à peine, tirant sur l'aura vitale avec la conviction d'un mendiant qui quémande, puis se dissipe dans l'air avec un soupir de regret presque audible. J'expire lentement par les narines, la déception creusant davantage encore mes traits déjà émaciés par tant d'échecs similaires.",
							"dialogues": {
								"Le Dandy de la Crypte": "Un millésime bouchonné, décidément. Quelle déception pour un palais aussi raffiné que le mien ! On m'avait pourtant vanté les mérites de votre vitalité.",
								"L'Oracle du Seuil": "Tentative infructueuse, hélas. Le sujet présente une herméticité remarquable à l'extraction vitale. Il faudra recalibrer les paramètres du rituel.",
								"Le Héraut du Vide": "Vous vous accrochez à votre chaleur misérable comme un avare à son dernier denier d'or, mais sachez-le bien : le Trépas finit toujours, toujours, par réclamer son dû. Et son intérêt court.",
								"Post-Perfidia": "Si seulement j'avais été plus fort ce jour-là, plus rapide, plus puissant... peut-être qu'elle serait encore à mes côtés à se moquer de mes tentatives pathétiques. Mais elle est partie. Pour toujours. Et je reste ici, impuissant comme toujours."
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "J'aspire profondément, comme on hume un parfum rare, et ma peau cireuse se teinte soudain d'une carnation presque vivante. Mes joues creuses se gonflent imperceptiblement, mes pupilles se dilatent dans un plaisir évident. Un fil invisible relie maintenant ma bouche entrouverte à ma victime qui vacille, son teint virant progressivement au gris cendre des mourants. La Chose, perchée sur mon épaule, tremble d'une aise obscène.",
							"dialogues": {
								"Le Dandy de la Crypte": "Ah... exquis ! Une délicate note de panique en fin de bouche, avec un arrière-goût de désespoir bien affiné. Mes compliments au vigneron.",
								"L'Oracle du Seuil": "Parfait. Le principe des vases communicants appliqué avec élégance à la substance même de l'âme. Votre énergie vitale comble mes déficits métaboliques avec une efficience remarquable.",
								"Le Héraut du Vide": "Sentez-vous votre essence s'écouler comme un fleuve impétueux vers l'océan du néant ? Votre vitalité n'était qu'un emprunt temporaire accordé par les dieux, et me voici venu collecter la dette avec ses intérêts accumulés.",
								"Post-Perfidia": "Cette essence volée... elle a le goût amer et tenace du regret. Perfidia me manque cruellement, sa présence vive et insolente, son rire cynique qui résonnait dans les couloirs. Toute l'énergie que je draine ne la ramènera jamais. Jamais."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "J'ouvre grand les bras, tête rejetée en arrière dans une extase morbide, et l'air lui-même semble se vider de toute substance, happé vers le vortex affamé que je deviens. La Chose enfle démesurément, projetant une ombre tentaculaire et mouvante qui engloutit la lumière alentour comme une marée noire. Ma victime se dessèche en l'espace d'un battement de cœur, sa peau se parchemine instantanément, ses yeux se rétractent dans leurs orbites comme des fruits trop mûrs laissés au soleil ardent. Un sourire extatique, presque obscène, fend mon visage habituellement inexpressif.",
							"dialogues": {
								"Le Dandy de la Crypte": "EXQUIS ! DIVIN ! SUBLIME ! Mon frère, mon cher Thus, je te remercie pour ce festin pantagruélique ! Rarement bouche n'aura été aussi comblée !",
								"L'Oracle du Seuil": "Sublimation d'une magnificence absolue ! La matière organique a été instantanément convertie en énergie pure selon les lois de la thermodynamique spirituelle ! Fascinant !",
								"Le Héraut du Vide": "CONTEMPLEZ L'ABÎME DANS TOUTE SA SPLENDEUR ! Il n'y a plus désormais ni douleur lancinante, ni espoir fallacieux, seulement la perfection glaciale et absolue du néant qui vous engloutit corps et âme tout entier !",
								"Post-Perfidia": "ENFIN, la puissance que je cherchais depuis si longtemps ! Mais à quoi bon toute cette force terrible si je n'ai pu la sauver quand elle en avait désespérément besoin ? Perfidia... pardonne mon impuissance passée, mon incompétence maudite."
							}
						}
					]
				},
				{
					"id": "undeaths_blessing",
					"name": "Bénédiction de la Non-Vie",
					"name_en": "Undeath's Blessing",
					"rank": 1,
					"type": "Focus Spell",
					"mechanic": "Confère 'Negative Healing' à un vivant ou permet à un mort-vivant d'être soigné par la vitalité.",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "Je pose délicatement ma main osseuse sur le front de ma cible, murmurant les syllabes de la bénédiction funèbre. Mais un crépitement soudain, violent, jaillit au point de contact dans une gerbe d'étincelles. La vie brute repousse mes doigts avec une force insultante. Je recule d'un bond précipité, sifflant entre mes dents serrées, secouant ma main endolorie comme si je venais de la plonger sur un tisonnier rougi au feu de forge.",
							"dialogues": {
								"Le Dandy de la Crypte": "Vexant au possible ! Votre aura est bien trop... comment dire... pétillante, effervescente même. C'est d'une vulgarité qui confine au grotesque, franchement.",
								"L'Oracle du Seuil": "Rejet catégorique de la greffe nécrotique. Incompatibilité métabolique totale et absolue. Le sujet présente une vigueur vitale hors normes.",
								"Le Héraut du Vide": "La Vie s'accroche à vous comme une maladie tenace, comme une fièvre qui refuse de rompre. Mais patience, tout finit par céder.",
								"Post-Perfidia": "J'ai échoué. Encore et toujours. Comme j'ai échoué à protéger Perfidia de son destin funeste. Cette malédiction de l'échec me poursuit comme mon ombre, fidèle et implacable."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "J'effleure du bout des doigts le visage de ma cible. Une ombre fuligineuse passe brièvement sur ses traits, assombrissant ses pupilles l'espace d'un battement de cils. Mais aussitôt, la chaleur naturelle de son corps chasse mon intrusion nécrotique comme on chasse d'un revers de main un insecte importun. L'incantation s'évapore sans laisser la moindre trace, comme brume au soleil levant.",
							"dialogues": {
								"Le Dandy de la Crypte": "Mon frère Thus estime, après mûre réflexion, que vous ne méritez pas encore l'insigne privilège de cette bénédiction. Revenez donc quand vous aurez acquis quelque mérite.",
								"L'Oracle du Seuil": "L'inversion de polarité vitale a lamentablement échoué. Les paramètres demeurent trop instables pour permettre la conversion. Il faudra réitérer l'expérience.",
								"Le Héraut du Vide": "Vous n'êtes manifestement pas encore prêt à embrasser le froid salvateur. Mais votre heure viendra, comme elle vient pour tous.",
								"Post-Perfidia": "Perfidia se moquait ouvertement de mes 'bénédictions de mort' comme elle les appelait avec dérision. 'Garde tes trucs glauques pour toi, Wes', disait-elle en grimaçant. Maintenant, j'aimerais tant pouvoir la bénir, elle... mais il est trop tard."
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Je trace de l'index un sigil complexe sur le front de ma cible, et les veines sous son épiderme noircissent instantanément, dessinant un réseau d'encre qui pulse au rythme ralenti d'un cœur qui s'apaise. Une froideur sépulcrale s'installe progressivement dans sa chair, apaisante, presque voluptueuse dans son étreinte glacée. Son souffle devient visible dans l'air pourtant tiède, formant de petits nuages de condensation, bien que la température ambiante n'ait en rien changé.",
							"dialogues": {
								"Le Dandy de la Crypte": "Voilà qui est parfait ! Teint de porcelaine et sang froid, c'est très tendance en cette saison hivernale. Vous ferez fureur dans les salons funéraires.",
								"L'Oracle du Seuil": "Physiologie inversée avec succès. Vous êtes désormais compatible avec le Vide, capable d'assimiler l'énergie négative comme nourriture spirituelle.",
								"Le Héraut du Vide": "Accueillez le silence à bras ouverts. Il ne vous mordra plus de ses crocs glacés... pour l'instant du moins. Vous êtes entre deux mondes maintenant.",
								"Post-Perfidia": "La transformation commence inexorablement... comme j'aurais tant voulu transformer Perfidia en quelque chose de... non. Elle aurait détesté ça de tout son être. Elle voulait vivre pleinement, pas survivre misérablement dans l'ombre."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "J'enveloppe ma cible de mes deux mains, murmurant la litanie ultime, et elle devient instantanément translucide, presque spectrale dans son apparence. On distingue nettement les contours de ses os à travers sa peau devenue laiteuse, opaline. Elle semble étrangement déphasée du monde qui l'entoure, un pied dans le royaume des vivants, l'autre déjà posé dans celui des ombres errantes. Sa respiration cesse complètement, mais elle ne suffoque nullement. Elle est suspendue entre deux états, dans un équilibre parfait, une sérénité absolue.",
							"dialogues": {
								"Le Dandy de la Crypte": "Merveilleux ! Absolument merveilleux ! Vous feriez un cadavre tout à fait présentable, d'une élégance rare ! Je pourrais vous exposer dans mon salon !",
								"L'Oracle du Seuil": "Synchronisation parfaite et totale des deux polarités. Le sujet est cliniquement mort selon tous les paramètres mesurables, mais demeure parfaitement fonctionnel. Extraordinaire !",
								"Le Héraut du Vide": "MARCHEZ DÉSORMAIS DANS L'OMBRE ÉTERNELLE ! Le Trépas vous reconnaît comme l'un des siens, vous êtes passé de l'autre côté du voile sans le déchirer !",
								"Post-Perfidia": "Perfection morbide et glaciale... Si j'avais possédé ce pouvoir avant, aurais-je pu... Non. Non ! Perfidia méritait infiniment mieux que cette non-vie fade. Elle méritait de vivre pleinement, de rire aux éclats, de briller de mille feux."
							}
						}
					]
				}
			]
		},
		{
			"category": "Cantrips",
			"spells": [
				{
					"id": "divine_lance",
					"name": "Lance Divine",
					"name_en": "Divine Lance",
					"rank": 0,
					"type": "Cantrip",
					"mechanic": "Attaque à distance (Dégâts Spirit).",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "Je pointe l'index vers ma cible avec assurance, mais le trait d'énergie spectrale explose prématurément dans ma paume ouverte, projetant des lueurs cadavériques dansantes sur mon visage émacié. Des ombres difformes et grotesques s'agitent follement sur les murs alentour comme des marionnettes détraquées, avant de s'effondrer pitoyablement dans le néant.",
							"dialogues": {
								"Le Dandy de la Crypte": "Mes excuses les plus plates ! Un petit reflux gastrique d'ordre spirituel, rien de bien grave. Cela arrive même aux meilleurs, voyez-vous.",
								"L'Oracle du Seuil": "Dysfonctionnement manifeste du catalyseur éthérique. L'esprit convoqué refuse obstinément la direction que je lui ai imposée. Recalibrage nécessaire.",
								"Le Héraut du Vide": "Mon courroux divin s'égare momentanément dans les méandres de l'éther... Profitez bien de ce sursis inattendu, car il sera de courte durée.",
								"Post-Perfidia": "Raté lamentablement. Comme j'ai raté le moment crucial où Perfidia avait désespérément besoin de moi. Mes pouvoirs sont aussi fiables qu'une lame complètement rouillée."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "Je lance mon harpon spectral d'un geste théâtral du poignet, mais le projectile blafard file droit avant de traverser sa cible comme une simple fumée inoffensive, ne laissant qu'un frisson passager sur sa peau. Je plisse les yeux dans une moue contrariée, visiblement mécontent de cette matérialisation défaillante qui écorne ma réputation.",
							"dialogues": {
								"Le Dandy de la Crypte": "Juste une semonce courtoise, rien de plus. Histoire de tester vos réflexes et votre vigilance. Considérez cela comme un avertissement amical.",
								"L'Oracle du Seuil": "Erreur de triangulation spatiale. La cible s'avère plus... dense que ne l'indiquaient mes calculs préliminaires. Anomalie à noter.",
								"Le Héraut du Vide": "Vous esquivez le jugement aujourd'hui, certes, mais sachez que vous n'échapperez jamais à la sentence finale qui vous attend.",
								"Post-Perfidia": "Cette lance fantomatique est aussi inefficace que je l'étais pour la protéger ce jour maudit. Perfidia paie encore le prix terrible de mon incompétence crasse."
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Je darde mon bras squelettique vers l'avant et la lance d'énergie translucide jaillit, frappant ma victime en plein sternum avec un son mat et sourd, comme le glas d'un clocher lointain. Elle tressaille violemment sous l'impact, une chair de poule instantanée hérissant sa peau, comme si quelqu'un venait de marcher sur l'emplacement de sa tombe future.",
							"dialogues": {
								"Le Dandy de la Crypte": "Touché, et en plein cœur qui plus est ! Droit dans l'âme, là où ça fait le plus exquisément mal, n'est-ce pas ? Mes félicitations pour votre vulnérabilité.",
								"L'Oracle du Seuil": "Impact spirituel parfaitement confirmé. Perturbation significative de l'aura locale détectée. Les paramètres vitaux chutent selon les prévisions.",
								"Le Héraut du Vide": "L'esprit est faible, ô combien faible ! La chair suivra bientôt le même chemin de décrépitude, c'est inévitable.",
								"Post-Perfidia": "Un coup précis et mortel. Si seulement j'avais frappé avec cette précision implacable quand Perfidia agonisait sous mes yeux impuissants... peut-être que... peut-être..."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "Je projette ma volonté concentrée et le projectile spectral transperce ma cible de part en part dans un sifflement sinistre, laissant dans son sillage mortel une traînée de givre ectoplasmique qui refuse obstinément de fondre. Un trou béant, invisible à l'œil mais terriblement présent à l'âme, marque l'endroit précis où son essence spirituelle a été mortellement blessée. Elle s'effondre, le regard vitreux, déjà perdu dans les limbes.",
							"dialogues": {
								"Le Dandy de la Crypte": "En plein dans le mille ! En plein cœur métaphysique ! Oh, ne faites donc pas cette tête d'enterrement, c'est presque poétique dans sa tragédie !",
								"L'Oracle du Seuil": "Pénétration trans-corporelle parfaitement réalisée. L'intégrité spirituelle du sujet est désormais gravement compromise, peut-être irrémédiablement.",
								"Le Héraut du Vide": "VOTRE ÂME EST MISE À NU DEVANT L'ÉTERNITÉ ! Tremblez donc devant ce qui vous attend inéluctablement dans l'au-delà !",
								"Post-Perfidia": "Transpercé de part en part sans ménagement... comme le fut mon cœur le jour maudit où Perfidia tomba pour ne plus se relever. Cette victoire creuse a un goût amer de cendres froides."
							}
						}
					]
				},
				{
					"id": "void_warp",
					"name": "Distorsion du Vide",
					"name_en": "Void Warp",
					"rank": 0,
					"type": "Cantrip",
					"mechanic": "Dégâts de Vide + Enfeebled 1. Jet de Vigueur.",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "Je tends La Chose vers ma proie, doigts écartés en griffes prédatrices, mais rien ne se produit. Pas même un frémissement dans l'éther ambiant. Ma cible rayonne d'une vigueur insultante, presque provocante dans son éclat vital. Je grimace de dégoût profond face à tant de santé obscène qui défie les lois naturelles du déclin.",
							"dialogues": {
								"Le Dandy de la Crypte": "Quelle vitalité vulgaire et tapageuse ! Vous me donnez franchement la nausée, comme un plat trop riche qui écœure un estomac délicat.",
								"L'Oracle du Seuil": "Le sujet présente une homéostasie aberrante, totalement hors des paramètres standards. Résistance absolue et complète à l'entropie induite.",
								"Le Héraut du Vide": "Votre lumière aveuglante m'agresse les yeux... pour l'instant seulement. Mais toute chandelle finit par se consumer jusqu'à la cire.",
								"Post-Perfidia": "Le Vide lui-même me refuse son aide noire. Tout comme j'ai refusé inconsciemment la réalité insoutenable de la mort de Perfidia. Nous sommes quittes, ô néant cruel."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "J'effleure ma cible d'une caresse glaciale. Une ondulation de froid sépulcral effleure sa peau, ses traits se crispent une brève seconde, une ombre passant fugacement dans son regard. Mais aussitôt, son métabolisme vigoureux chasse mon intrusion avec une facilité déconcertante. Je soupire de déception face à cette résistance si banale, si commune.",
							"dialogues": {
								"Le Dandy de la Crypte": "Un simple petit frisson ? Vraiment ? Vous n'avez donc aucune sensibilité poétique, aucun raffinement dans l'appréciation de la douleur ?",
								"L'Oracle du Seuil": "Dégradation cellulaire superficielle uniquement. Rendement énergétique négligeable, en deçà du seuil minimal d'efficacité attendu.",
								"Le Héraut du Vide": "Le froid vous a effleuré de son haleine glacée. La prochaine fois, il vous prendra tout entier dans ses bras de givre.",
								"Post-Perfidia": "Affaiblir mes ennemis avec mes sorts mesquins... mais je n'ai pu affaiblir la mort implacable qui a pris Perfidia. Quelle ironie amère et cruelle."
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Je serre le poing lentement et les muscles de ma victime se flétrissent visiblement, comme une fleur délicate qu'on plongerait brutalement dans l'azote liquide. Ses gestes deviennent lourds, pâteux, maladroits, comme si chaque mouvement devait traverser une épaisseur poisseuse de miel glacé. Sa vigueur s'écoule par mille pores invisibles, la quittant goutte à goutte.",
							"dialogues": {
								"Le Dandy de la Crypte": "Oh là là, vous semblez soudain si... fatigué, si las. N'auriez-vous pas besoin d'une chaise, d'un moment de repos ? Asseyez-vous donc.",
								"L'Oracle du Seuil": "Atrophie musculaire induite avec succès. Efficacité motrice réduite d'environ quinze pour cent. Résultats conformes aux projections théoriques.",
								"Le Héraut du Vide": "La pourriture s'installe insidieusement dans vos fibres mêmes. Sentez vos forces vous trahir, vous abandonner lâchement une à une.",
								"Post-Perfidia": "Tes forces t'abandonnent progressivement, comme les miennes m'ont traîtreusement abandonné quand Perfidia s'est éteinte sous mes doigts tremblants. Nous partageons maintenant cette faiblesse dévorante."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "J'ouvre grand la main et ma cible s'effondre presque instantanément, ses genoux fléchissant, ses membres tremblant de façon incontrôlable. Sa peau prend une teinte grise et cadavérique, comme si dix années de vie venaient d'être violemment arrachées en l'espace d'une seule seconde. Des rides profondes creusent brutalement son visage, ses yeux se cernent d'un violet malsain de cadavre.",
							"dialogues": {
								"Le Dandy de la Crypte": "Ravissant ! Absolument ravissant ! Ce teint cireux vous va à merveille, très 'fin de siècle' comme disent les artistes décadents. Une esthétique exquise !",
								"L'Oracle du Seuil": "Entropie cellulaire dramatiquement accélérée. Le système immunitaire s'effondre totalement. Processus de vieillissement en cascade. Fascinant à observer !",
								"Le Héraut du Vide": "DEVENEZ POUSSIÈRE RETOURNANT À LA POUSSIÈRE ! Le temps vous rattrape enfin et il a une faim dévorante de siècles accumulés !",
								"Post-Perfidia": "Regarde-toi vieillir en un instant sous mes yeux ! Mais Perfidia, elle, ne vieillira jamais plus. Elle restera éternellement jeune et insolente dans ma mémoire endeuillée."
							}
						}
					]
				},
				{
					"id": "shield",
					"name": "Bouclier",
					"name_en": "Shield",
					"rank": 0,
					"type": "Cantrip",
					"mechanic": "+1 CA / Réaction de Blocage (Shield Block).",
					"outcomes": [
						{
							"result": "Activation",
							"scenic_attitude": "D'un geste las mais d'une précision chirurgicale, je trace un cercle parfait dans l'air vicié qui m'entoure. Un disque spectral se matérialise aussitôt, tissé d'ossements translucides entrelacés et de murmures inaudibles pour les vivants. Il orbite paresseusement autour de moi comme une lune morte, projetant des ombres mouvantes et inquiétantes qui semblent activement décourager toute proximité indésirable.",
							"dialogues": {
								"Le Dandy de la Crypte": "Pas de contact physique, je vous en prie. Je tiens énormément à mon hygiène personnelle et vous semblez... comment dire... contaminé par la vie.",
								"L'Oracle du Seuil": "Protocole de défense périmétrique activé avec succès. Champ de force nécrotique stable et opérationnel. Pare-coups spectral déployé.",
								"Le Héraut du Vide": "Une distance nécessaire et salutaire entre ma grandeur éternelle et votre médiocrité éphémère. Gardez vos distances, mortel.",
								"Post-Perfidia": "Un bouclier spectral qui arrive trop tard. Comme toujours. J'aurais dû te protéger, Perfidia. J'aurais dû être ton bouclier inébranlable. J'ai failli."
							}
						}
					]
				}
			]
		},
		{
			"category": "Rank 1 Spells",
			"spells": [
				{
					"id": "fear",
					"name": "Peur",
					"name_en": "Fear",
					"rank": 1,
					"type": "Spell",
					"mechanic": "Inflige Frightened 1/2/3. Jet de Volonté.",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "Je fixe ma cible avec une intensité dévorante, tentant de projeter directement dans son esprit la vision précise et détaillée de sa propre décomposition future. Mais contre toute attente, elle éclate d'un rire nerveux qui brise le charme comme du verre. Je réajuste mon col avec une dignité feinte, comme si absolument rien ne s'était passé, gardant contenance.",
							"dialogues": {
								"Le Dandy de la Crypte": "L'humour est une défense psychologique tout à fait classique, presque banale. Mais votre rire sonne affreusement faux à mes oreilles exercées, croyez-moi.",
								"L'Oracle du Seuil": "Échec complet de l'induction psychotique. Le sujet s'avère totalement hermétique à la suggestion nécromantique, cas rare mais documenté.",
								"Le Héraut du Vide": "Riez donc tant que vous avez encore du souffle dans vos poumons mortels... Mais le silence finira par vous rattraper, et il sera d'autant plus pesant.",
								"Post-Perfidia": "La peur ne prend pas racine. Mais moi, je vis dans une peur constante et dévorante depuis la mort de Perfidia. La peur d'échouer encore, et encore, et encore."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "Je murmure les mots de pouvoir entre mes lèvres entrouvertes. Ma cible tressaille légèrement, jetant malgré elle un coup d'œil furtif par-dessus son épaule. Un frisson parcourt visiblement son échine, mais elle se ressaisit rapidement, chassant d'un vigoureux hochement de tête la prémonition fugace de sa propre fin inévitable.",
							"dialogues": {
								"Le Dandy de la Crypte": "Un petit courant d'air glacial dans le cou, n'est-ce pas ? C'est désagréable, certes, mais tellement éphémère. Dommage.",
								"L'Oracle du Seuil": "Perturbation mineure de l'amygdale cérébrale détectée. Réaction émotionnelle sous le seuil critique de la terreur paralysante.",
								"Le Héraut du Vide": "Tu sens ma présence invisible rôder autour de toi. Tu sais que je suis là, tapi dans l'ombre. Cette certitude te ronge.",
								"Post-Perfidia": "Un frisson qui passe et s'évanouit. Comme le frisson glacé et définitif qui m'a parcouru quand j'ai compris que Perfidia ne se relèverait jamais plus."
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Je murmure quelques syllabes inaudibles pour les vivants, presque subliminales dans leur fréquence. Ma cible frissonne violemment malgré elle, soudain cruellement consciente de sa propre fragilité mortelle, de l'inévitabilité mathématique de sa décomposition future. Un doute insidieux s'installe dans son esprit comme un ver dans un fruit.",
							"dialogues": {
								"Le Dandy de la Crypte": "Boo ! Ah ah, ce petit jeu marche toujours, même avec les plus endurcis ! Jamais je ne m'en lasse, c'est trop amusant !",
								"L'Oracle du Seuil": "Induction de paranoïa réussie avec succès. Stabilité émotionnelle significativement compromise. Les niveaux de cortisol montent en flèche.",
								"Le Héraut du Vide": "La peur est la seule vérité absolue en ce monde de mensonges. Accueillez-la donc comme une vieille amie retrouvée.",
								"Post-Perfidia": "Tu as peur maintenant, n'est-ce pas ? Bien. Moi aussi j'ai peur chaque jour. Peur d'oublier son visage, peur de ne jamais la revoir, même dans l'au-delà obscur."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "Je tends les bras théâtralement et les ombres s'allongent de façon totalement anormale, défiant les lois de l'optique, rampant vers ma cible comme une meute de serpents affamés. Elle recule instinctivement, le souffle court et haletant, voyant se refléter dans mes pupilles dilatées l'image exacte et détaillée de sa propre mort imminente. Terrorisée jusqu'à la moelle des os.",
							"dialogues": {
								"Le Dandy de la Crypte": "Vous êtes pâle comme un linceul fraîchement blanchi... C'est absolument ravissant ! Cette teinte vous sied à merveille, vraiment !",
								"L'Oracle du Seuil": "Effondrement psychologique imminent et irréversible. Le sujet est en état de choc traumatique profond. Intervention psychiatrique requise.",
								"Le Héraut du Vide": "COUREZ, COUREZ DONC ! La Mort galope sur vos talons et elle ne s'essouffle jamais, contrairement à vous, mortel haletant !",
								"Post-Perfidia": "Ta terreur est palpable et absolue ! Mais elle ne peut égaler l'horreur que j'ai ressentie en tenant le corps encore tiède mais sans vie de Perfidia dans mes bras tremblants et impuissants."
							}
						}
					]
				},
				{
					"id": "harm",
					"name": "Mise à Mal",
					"name_en": "Harm",
					"rank": 1,
					"type": "Spell",
					"mechanic": "Soin (Mort-Vivant) OU Dégâts de Vide (Vivant).",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "Je concentre mon pouvoir et libère l'énergie nécrotique, mais elle se disperse en volutes inoffensives et stériles avant même d'atteindre sa destination. Que ce soit pour soigner les morts ou blesser les vivants, le flux se brise lamentablement comme une corde pourrie sous tension. Je fronce les sourcils profondément, visiblement contrarié par ce gaspillage énergétique si frustrant.",
							"dialogues": {
								"Le Dandy de la Crypte": "Oups, mon cher. Un faux contact manifestement. Ces choses arrivent même aux plus talentueux, que voulez-vous.",
								"L'Oracle du Seuil": "Dissipation énergétique complète avant même le contact initial. Perte sèche à cent pour cent. Échec total du transfert.",
								"Le Héraut du Vide": "Le Vide lui-même refuse de me servir en cet instant... pour l'instant seulement. Sa réticence est temporaire.",
								"Post-Perfidia": "Ni soigner ni blesser. Inutile et pathétique. Comme je l'étais quand Perfidia avait désespérément besoin de soins. Mon impuissance me dévore vivant chaque jour."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "Je projette un mince filet d'énergie noire qui effleure à peine ma cible. Si elle est vivante, elle grimace légèrement, rien de plus. Si elle est morte-vivante, ses chairs mortes se recousent imparfaitement, laissant des cicatrices tordues et disgracieuses. L'effet est médiocre, décevant pour un rituel pourtant si ancien et éprouvé.",
							"dialogues": {
								"Le Dandy de la Crypte": "C'est mieux que rien du tout, je suppose, même si c'est bien peu. Acceptez ce maigre présent avec mes excuses.",
								"L'Oracle du Seuil": "Effet partiel seulement. Le transfert énergétique demeure instable et insuffisant. Recalibrage nécessaire pour optimisation.",
								"Le Héraut du Vide": "J'ai failli dans mon entreprise. Acceptez néanmoins ce maigre présent, vous ne ressentirez hélas... presque rien.",
								"Post-Perfidia": "Un effet médiocre et insuffisant, à l'image de mes tentatives désespérées pour sauver Perfidia de l'étreinte glacée de la mort. Trop peu, trop tard, toujours trop tard."
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Je libère l'onde nécrotique qui frappe avec précision chirurgicale. Chez le vivant, la chair noircit instantanément et se nécrose par plaques étendues. Chez le mort-vivant, les os se ressoudent dans un craquement sinistre, les chairs putrides reprenant vigueur avec un bruit de succion profondément écœurant. Le cycle naturel est élégamment inversé.",
							"dialogues": {
								"Le Dandy de la Crypte": "Ah, voilà qui est bien mieux ! Cela revigore admirablement le teint blafard... ou gâche irrémédiablement le vôtre, selon le cas.",
								"L'Oracle du Seuil": "Inversion entropique réussie, ou accélération selon la nature du sujet. L'équilibre est parfaitement restauré. Transfert optimal.",
								"Le Héraut du Vide": "La mort nourrit la mort dans un cycle éternel et immuable. L'ordre naturel est respecté et honoré comme il se doit.",
								"Post-Perfidia": "Le cycle se perpétue inexorablement... vie, mort, non-vie. Perfidia est sortie du cycle définitivement. Elle ne reviendra jamais. Cette certitude absolue me consume de l'intérieur."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "Je canalise toute ma puissance et la déverse en un torrent. Le mort-vivant rugit de puissance renouvelée, littéralement saturé d'énergie négative pure, ses orbites vides flamboyant d'une lueur violette intense. Le vivant hurle à l'agonie alors que sa vitalité est brutalement arrachée, ses veines noircissant sous sa peau qui se flétrit et se parchemine comme au feu.",
							"dialogues": {
								"Le Dandy de la Crypte": "Une transfusion de ténèbres absolument pures ! À votre santé... ou à votre trépas ! Santé quoi qu'il en soit !",
								"L'Oracle du Seuil": "Saturation nécrotique maximale atteinte. Efficacité absolue à cent pour cent. Résultats au-delà des espérances théoriques.",
								"Le Héraut du Vide": "LE FROID EST DÉSORMAIS VOTRE SEUL ET UNIQUE MAÎTRE ! PLIEZ LE GENOU OU ROMPEZ COMME VULGAIRE BRINDILLE !",
								"Post-Perfidia": "Puissance absolue et dévastatrice ! Mais toute la puissance du monde entier n'a pas suffi à la sauver quand elle en avait besoin. À quoi bon cette force tardive et vaine ?"
							}
						}
					]
				}
			]
		},
		{
			"category": "Rank 2 Spells",
			"spells": [
				{
					"id": "false_vitality",
					"name": "Fausse Vitalité",
					"name_en": "False Vitality",
					"rank": 2,
					"type": "Spell",
					"mechanic": "Gain de PV temporaires. Aucune sauvegarde requise.",
					"outcomes": [
						{
							"result": "Activation",
							"scenic_attitude": "J'inspire profondément une longue goulée d'air glacial qui ne devrait pas exister dans cette atmosphère tiède. Ma peau blafarde prend progressivement un éclat nacré, presque minéral, comme si elle se changeait lentement en marbre veiné de givre antique. Chaque mouvement que je fais devient plus fluide, plus gracieux, moins humain dans son exécution.",
							"dialogues": {
								"Le Dandy de la Crypte": "Un peu de fond de teint cadavérique pour masquer les fissures disgracieuses de ma façade. La vanité demeure ma seule véritable armure contre ce monde cruel.",
								"L'Oracle du Seuil": "Renforcement structural par polymères nécrotiques synthétiques. Intégrité dermique améliorée de quarante pour cent. Résistance accrue aux impacts.",
								"Le Héraut du Vide": "La Mort elle-même m'enveloppe tendrement comme un linceul protecteur et rassurant. Frappez donc de toutes vos forces, et voyez bien ce qui se brisera en premier.",
								"Post-Perfidia": "Une fausse vitalité, un mensonge réconfortant que je me raconte. Comme quand je me dis que Perfidia aurait voulu que je continue. Le mensonge est parfois plus supportable que la vérité insoutenable."
							}
						}
					]
				},
				{
					"id": "blood_vendetta",
					"name": "Vendetta Sanguine",
					"name_en": "Blood Vendetta",
					"rank": 2,
					"type": "Reaction",
					"mechanic": "Déclencheur : Subir des dégâts tranchants/perçants. Effet : Dégâts de saignement persistants (Jet de Volonté basique).",
					"outcomes": [
						{
							"result": "Succès Critique",
							"scenic_attitude": "Mon sang noir et visqueux éclabousse l'arme de mon assaillant. Il l'essuie avec une moue de dégoût évident, mais rien ne se produit. Le fluide maudit s'évapore simplement comme une tache ordinaire sans aucune conséquence. La malédiction a lamentablement échoué à prendre racine dans sa chair.",
							"dialogues": {
								"Le Dandy de la Crypte": "Tss tss tss. Aucune sensibilité artistique, vraiment aucune ! Vous gâchez tout avec votre vulgarité, votre absence totale de raffinement !",
								"L'Oracle du Seuil": "Curieux et frustrant. Le facteur de coagulation adverse s'avère largement supérieur aux projections statistiques établies. Anomalie biologique.",
								"Le Héraut du Vide": "Vous ne faites que retarder l'inévitable échéance finale par votre résistance têtue. Profitez donc bien de cette chance éphémère et fragile.",
								"Post-Perfidia": "Ton sang ne me maudit pas. Mais le sien, le sang précieux de Perfidia répandu inutilement sur cette terre ingrate, me maudit chaque nuit dans mes cauchemars récurrents et torturants."
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Mon sang projeté siffle au contact de la chair ennemie comme de l'acide dilué. Une fumée âcre et nauséabonde s'élève dans l'air. Mon assaillant grimace de douleur, sentant une irritation cuisante mais supportable. La malédiction n'a mordu qu'à moitié, insuffisamment pour causer de réels dégâts.",
							"dialogues": {
								"Le Dandy de la Crypte": "Une tache bien difficile à faire partir du linge, n'est-ce pas ? Vous allez passer des heures à frotter, pauvre de vous.",
								"L'Oracle du Seuil": "Contamination partielle du derme uniquement. La toxicité demeure sous le seuil critique d'efficacité. Résultats décevants mais mesurables.",
								"Le Héraut du Vide": "Le poison est semé dans votre chair comme graine en terre. Il germera lentement mais sûrement, croyez-moi sur parole.",
								"Post-Perfidia": "Une tache difficile à enlever... comme la tache indélébile de son sang sur mes mains, métaphoriquement parlant. Elle ne partira jamais, jamais, quoi que je fasse."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "Le sang que j'ai perdu semble littéralement bouillir au contact de mon agresseur, ouvrant des plaies sympathiques et parfaitement symétriques sur son propre corps, exactement aux mêmes endroits que celles qu'il m'a infligées. Un lien invisible de souffrance partagée vient d'être tissé entre nous deux. Il saigne maintenant autant que moi, sinon davantage.",
							"dialogues": {
								"Le Dandy de la Crypte": "Vous ruinez ma chemise préférée, je ruine votre circulation sanguine. Échange parfaitement équitable, vous ne trouvez pas ? Œil pour œil.",
								"L'Oracle du Seuil": "Résonance sympathique parfaitement établie entre nos deux organismes. Hémorragie miroir induite avec un succès remarquable. Synchronisation totale.",
								"Le Héraut du Vide": "LE SANG APPELLE LE SANG DANS UNE LITANIE ÉTERNELLE ! Le vôtre répond maintenant à l'appel plaintif de mon frère Thus !",
								"Post-Perfidia": "Nos sangs liés dans la douleur partagée... comme Perfidia et moi étions liés par des liens indéfectibles. Désormais, seul mon sang coule encore. Le sien s'est tari définitivement."
							}
						},
						{
							"result": "Échec Critique",
							"scenic_attitude": "Les plaies de mon adversaire explosent littéralement comme des outres trop pleines, s'ouvrant violemment en fontaines désordonnées. Le sang jaillit en gerbes écarlates, éclaboussant copieusement le sol. C'est comme si un couteau invisible le tailladait furieusement de l'intérieur, encore et encore. La malédiction a pris racine profonde et dévore voracement.",
							"dialogues": {
								"Le Dandy de la Crypte": "Oh là là, mais regardez-vous donc, à fuir de partout comme une outre percée ! Quelle gêne embarrassante en public, vraiment !",
								"L'Oracle du Seuil": "Échec systémique cardiovasculaire en cascade irréversible. Liquéfaction imminente du sujet dans les minutes qui viennent. Pronostic très sombre.",
								"Le Héraut du Vide": "NOYEZ-VOUS DANS VOTRE PROPRE CRASSE VITALE ! LA MALÉDICTION ANCESTRALE S'ABAT ENFIN SUR VOUS DE TOUT SON POIDS !",
								"Post-Perfidia": "Tu saignes abondamment comme elle a saigné ce jour maudit ! Mais ton sang ne me rendra jamais le sien. Rien ne me la rendra, jamais, jamais, jamais !"
							}
						}
					]
				}
			]
		},
		{
			"category": "Rank 3 Spells",
			"spells": [
				{
					"id": "vampiric_feast",
					"name": "Festin Vampirique",
					"name_en": "Vampiric Feast",
					"rank": 3,
					"type": "Spell",
					"mechanic": "Touche la cible, inflige des dégâts de Vide et rend des PV. Jet de Vigueur.",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "J'ouvre grand la bouche, révélant des canines légèrement plus proéminentes que la normale, comme pour aspirer goulûment l'essence vitale de ma proie. Mais je recule aussitôt précipitamment, pris d'un violent haut-le-cœur incontrôlable, une main plaquée devant mes lèvres pincées. La Chose s'agite frénétiquement sur mon épaule, signant des insultes véhémentes dans notre langue secrète.",
							"dialogues": {
								"Le Dandy de la Crypte": "Pouah ! Pouah ! Absolument rance et avarié ! Vous n'avez donc aucune hygiène de vie, aucun respect pour votre propre corps ?",
								"L'Oracle du Seuil": "Analyse chimique formelle : le sujet s'avère totalement impropre à la consommation éthérique. Rejet catégorique du système digestif spirituel.",
								"Le Héraut du Vide": "Votre âme a le goût amer et désagréable de la cendre froide, mais rassurez-vous, même le feu le plus ardent finira par s'éteindre un jour.",
								"Post-Perfidia": "Âme rance et corrompue ? Perfidia avait une âme pure et brillante sous ses airs de roublarde cynique. Et moi, je n'ai même pas pu la goûter une dernière fois avant qu'elle ne s'envole pour toujours."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "J'aspire profondément, lèvres pincées en un rictus concentré. Un mince filet de brume rougeâtre s'échappe mollement des lèvres entrouvertes de ma victime, comme un soupir forcé et contraint. La quantité aspirée est absolument dérisoire, pitoyable. Je l'avale du bout des lèvres, clairement et visiblement insatisfait de ce maigre butin.",
							"dialogues": {
								"Le Dandy de la Crypte": "Un simple amuse-bouche sans saveur. J'attendais pourtant le plat de résistance, le morceau de choix. Quelle déception cuisante !",
								"L'Oracle du Seuil": "Extraction superficielle uniquement des couches supérieures. Le rendement énergétique s'avère profondément décevant, bien en deçà des attentes.",
								"Le Héraut du Vide": "Je goûte à votre peur comme à un vin nouveau... Elle est douce certes, mais hélas insuffisante pour rassasier ma faim éternelle.",
								"Post-Perfidia": "Un amuse-bouche dérisoire... comme les derniers moments partagés avec Perfidia. Trop courts, trop fugaces, jamais assez nombreux. Pourquoi ne l'ai-je pas davantage savourée ?"
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Je pose mes lèvres sur ma victime et une ombre vorace semble littéralement arracher une partie de son ombre même, la tirant inexorablement vers moi dans un mouvement fluide. Elle vacille dangereusement, le teint devenant cendreux, les yeux prenant une teinte vitreuse. Moi en revanche, je semble me redresser imperceptiblement, une lueur de satisfaction évidente dansant dans mon regard.",
							"dialogues": {
								"Le Dandy de la Crypte": "Délicieux ! Absolument délicieux ! Une texture si riche et complexe, avec ces notes subtiles de désespoir bien affiné au fond du palais !",
								"L'Oracle du Seuil": "Assimilation énergétique efficace et conforme aux prévisions. Vos constantes vitales chutent selon la courbe attendue. Parfait.",
								"Le Héraut du Vide": "Votre vie nourrit la mienne dans un échange cosmique parfait. Sentez-vous ce vide grandir inexorablement en vous comme un gouffre s'élargissant ?",
								"Post-Perfidia": "Je me nourris avidement de toi... mais toute l'essence du monde entier ne comblera jamais le vide béant que Perfidia a laissé en moi. C'est un gouffre sans fond qui m'engloutit."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "Je me penche sur ma proie et semble littéralement grandir, mon ombre avalant complètement la sienne dans une étreinte mortelle. Elle se recroqueville pitoyablement, ratatinée comme un fruit sec, comme si on vidait brutalement un sac de sa précieuse substance. Ses traits se creusent profondément, sa peau se parchemine instantanément. J'expire longuement, les yeux mi-clos dans une extase morbide et indécente.",
							"dialogues": {
								"Le Dandy de la Crypte": "UN BANQUET PANTAGRUÉLIQUE ! Mon frère Thus adoré, apportez donc le digestif, nous sommes enfin repus après tant de disette !",
								"L'Oracle du Seuil": "Exsanguination métaphysique totale et complète. Le transfert énergétique est absolument parfait, sans perte. Efficacité maximale atteinte !",
								"Le Héraut du Vide": "JE BOIS VOTRE EXISTENCE MÊME JUSQU'À LA DERNIÈRE GOUTTE ! Il ne restera de vous qu'une coquille vide et creuse, un souvenir oublié !",
								"Post-Perfidia": "Je te vide complètement de ton existence ! Comme la mort implacable a vidé Perfidia de la sienne sous mes yeux impuissants. Nous sommes quittes, ô destin cruel et injuste !"
							}
						}
					]
				},
				{
					"id": "bind_undead",
					"name": "Asservissement de Mort-Vivant",
					"name_en": "Bind Undead",
					"rank": 3,
					"type": "Spell",
					"mechanic": "Prend le contrôle d'un mort-vivant sans intelligence. Jet de Volonté.",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "Je tends la main avec autorité vers le mort-vivant errant, mais celui-ci tourne ses orbites vides vers moi avec une indifférence surnaturelle et glaciale, comme si mon ordre n'avait jamais été prononcé. Il continue sa route macabre et titubante, ignorant superbement l'intrus présomptueux que je suis et qui ose prétendre à sa maîtrise absolue.",
							"dialogues": {
								"Le Dandy de la Crypte": "Quelle impolitesse révoltante ! On ne vous a donc jamais appris à saluer vos supérieurs hiérarchiques, créature sans manières ?",
								"L'Oracle du Seuil": "Échec complet de la connexion neurale éthérique. Le sujet ne répond absolument pas au stimulus de commande transmis. Blindage mental ?",
								"Le Héraut du Vide": "Tu oses m'ignorer ainsi, misérable abomination ? Ta rébellion pathétique sera de bien courte durée, je te le garantis solennellement.",
								"Post-Perfidia": "Il m'ignore superbement... comme j'ai ignoré les signes avant-coureurs de la mort de Perfidia. Nous payons tous le prix terrible de notre aveuglement coupable."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "Je prononce les mots de contrainte et la créature se fige brusquement, secouée de spasmes violents et incontrôlés. Ses membres tressautent dans des directions chaotiques et désordonnées, luttant désespérément contre mon intrusion mentale insidieuse. Puis elle se ressaisit finalement, chassant mon influence étrangère avec un râle guttural de rébellion primitive.",
							"dialogues": {
								"Le Dandy de la Crypte": "Allons, allons, ne soyez donc pas si timide ni si réticent. Laissez-vous simplement faire, ce sera tellement plus agréable pour nous deux.",
								"L'Oracle du Seuil": "Interférences psychiques détectées dans le flux. Le contrôle moteur demeure instable et fluctuant. Résistance inattendue du sujet.",
								"Le Héraut du Vide": "Plie le genou devant moi, créature ! Ta volonté n'est qu'une misérable bougie tremblotante face à mon ouragan dévastateur !",
								"Post-Perfidia": "Résistance obstinée... Perfidia résistait toujours farouchement à mes tentatives de la 'sauver' avec ma magie. Elle voulait vivre pleinement, pas exister dans l'ombre. J'aurais dû l'écouter."
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Je claque des doigts sèchement et le mort-vivant s'immobilise instantanément net, comme si quelqu'un venait de tirer violemment ses fils de marionnette. Sa posture se redresse automatiquement, s'alignant mimétiquement sur la mienne avec précision. Ses mouvements deviennent parfaitement synchrones, reflets exacts et mécaniques des gestes que j'effectue.",
							"dialogues": {
								"Le Dandy de la Crypte": "Au pied, créature. Voilà qui est bien. Assis maintenant. Bon toutou obéissant. On va devenir les meilleurs amis du monde.",
								"L'Oracle du Seuil": "Protocole de servitude activé avec succès total. Tu es désormais l'extension directe de ma main, mon outil parfait.",
								"Le Héraut du Vide": "Tu n'es plus qu'un simple outil à ma disposition. Sers-moi fidèlement, et trouve enfin ta raison d'être dans l'obéissance.",
								"Post-Perfidia": "Obéissance aveugle et totale... Si seulement Perfidia m'avait obéi quand je lui ai dit de fuir ce combat. Mais non, courageuse jusqu'à la stupidité, jusqu'à la mort absurde."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "J'impose ma volonté et une lueur violacée intense s'allume instantanément dans les orbites du mort-vivant, remplaçant le néant antérieur. Il se prosterne immédiatement avec une dévotion absolue et terrifiante, front contre le sol poussiéreux, membres tremblants dans une soumission totale. Son être tout entier n'existe désormais plus que pour me servir aveuglément.",
							"dialogues": {
								"Le Dandy de la Crypte": "Parfaitement docile et obéissant ! Nous allons faire de si grandes choses ensemble, toi et moi, de si merveilleuses choses macabres !",
								"L'Oracle du Seuil": "Fusion complète des volontés confirmée sans équivoque. Suppression totale et irréversible de toute autonomie antérieure. Succès absolu.",
								"Le Héraut du Vide": "Tu n'es plus rien désormais. Tu n'es qu'un doigt sur ma main squelettique, un souffle éphémère dans ma tempête éternelle. Obéis ou péris !",
								"Post-Perfidia": "Servitude totale et absolue ! Mais Perfidia n'était pas faite pour servir quiconque. Elle était faite pour briller de mille feux, pour vivre libre comme le vent sauvage de la steppe."
							}
						}
					]
				}
			]
		},
		{
			"category": "Expertises Spécialisées",
			"spells": [
				{
					"id": "demoralize",
					"name": "Démoraliser",
					"name_en": "Demoralize",
					"rank": 0,
					"type": "Skill Action (Intimidation)",
					"mechanic": "Intimidation vs Volonté. Inflige l'état Frightened.",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "Je tente de toutes mes forces mon regard noir le plus glacial et intimidant, mais au même instant précis La Chose trébuche maladroitement sur le col de ma robe dans un geste grotesque, gâchant complètement et irrémédiablement l'effet dramatique si soigneusement recherché. Le moment solennel est brisé, pitoyablement pathétique.",
							"dialogues": {
								"Le Dandy de la Crypte": "Oh, par tous les diables des neuf cercles infernaux... Oubliez tout ça, je vous en prie. On coupe et on refait la prise ? Action !",
								"L'Oracle du Seuil": "Erreur grave de projection psychique due à une interférence physique. Mon autorité naturelle n'a malheureusement pas été reconnue ni respectée.",
								"Le Héraut du Vide": "Riez donc tant que vous avez encore du souffle chaud dans vos poumons mortels et périssables... Votre hilarité sera de courte durée.",
								"Post-Perfidia": "Pathétique et ridicule... comme je l'étais ce jour-là. Perfidia est morte et moi, j'étais juste... pathétique. Inutile. Insignifiant. Un poids mort."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "Je fixe ma cible droit dans les yeux avec intensité, mais elle soutient mon regard sans même ciller une seule fois, visiblement pas du tout impressionnée par cette silhouette chétive et maigrichonne drapée de noir délavé. Un sourire franchement narquois et méprisant effleure même le coin de ses lèvres moqueuses.",
							"dialogues": {
								"Le Dandy de la Crypte": "Difficile à convaincre, hein ? J'apprécie sincèrement les défis intellectuels, cela pimente l'existence monotone. Continuons ce petit jeu.",
								"L'Oracle du Seuil": "Sujet manifestement insensible aux stimuli de terreur standard préconisés. Résistance psychologique au-dessus de la moyenne statistique.",
								"Le Héraut du Vide": "Votre courage apparent n'est que de l'aveuglement volontaire et têtu. Vous ne voyez pas encore le gouffre béant qui s'ouvre sous vos pieds.",
								"Post-Perfidia": "Pas impressionné le moins du monde ? Perfidia non plus n'était jamais impressionnée par ma prétendue 'morgue sinistre'. 'T'es juste un grand maigre bizarre, Wes', disait-elle en riant."
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Je murmure quelques syllabes totalement inaudibles pour les vivants, presque subliminales dans leur fréquence basse. Ma cible frissonne involontairement et visiblement malgré elle, soudain cruellement consciente de sa propre fragilité mortelle, de l'inévitabilité mathématique de sa décomposition future. Un doute insidieux s'installe fermement.",
							"dialogues": {
								"Le Dandy de la Crypte": "Boo ! Ah ah ah, ce petit jeu enfantin marche à tous les coups, même avec les plus endurcis ! Jamais je ne m'en lasse vraiment !",
								"L'Oracle du Seuil": "Induction de paranoïa réussie avec succès mesurable. Stabilité émotionnelle significativement compromise selon les indicateurs. Cortisol en hausse.",
								"Le Héraut du Vide": "La peur primordiale est la seule vérité absolue et immuable en ce monde de mensonges. Accueillez-la comme on accueille une vieille connaissance.",
								"Post-Perfidia": "Tu doutes maintenant de toi-même... comme je doute chaque jour, chaque heure, d'avoir fait assez pour elle. Le doute me ronge comme un ver ronge un cadavre en décomposition."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "Je tends théâtralement les deux bras vers le ciel et les ombres portées s'allongent de façon totalement anormale et contre-nature, défiant toutes les lois connues de l'optique, rampant vers ma cible comme une meute de serpents voraces et affamés. Elle recule instinctivement, le souffle court et saccadé, voyant se refléter dans mes pupilles démesurément dilatées l'image exacte et détaillée de sa propre mort imminente. Terrorisée jusqu'à la moelle même de ses os.",
							"dialogues": {
								"Le Dandy de la Crypte": "Vous voilà pâle comme un linceul fraîchement blanchi à la lessive... C'est absolument ravissant, cette teinte vous sied à merveille, vraiment !",
								"L'Oracle du Seuil": "Effondrement psychologique imminent et irréversible constaté. Le sujet est entré en état de choc traumatique profond. Intervention psychiatrique d'urgence requise.",
								"Le Héraut du Vide": "COUREZ, COUREZ DONC AUSSI VITE QUE VOS JAMBES TREMBLANTES LE PERMETTENT ! La Mort galope inexorablement sur vos talons et elle ne s'essouffle jamais, contrairement à vous !",
								"Post-Perfidia": "Tu vois ta mort dans mes yeux exorbités ! Moi, je vois la sienne chaque jour, chaque nuit. Dans chaque reflet, dans chaque ombre portée, dans chaque visage que je croise."
							}
						}
					]
				},
				{
					"id": "coerce_group",
					"name": "Coercition de Masse",
					"name_en": "Group Coercion",
					"rank": 0,
					"type": "Skill Action (Exploration)",
					"mechanic": "Force un groupe à obéir ou à donner des infos.",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "Je m'avance face à la foule avec assurance, mais celle-ci se met à ricaner ouvertement dans un brouhaha moqueur, puis l'hostilité monte dangereusement comme une marée. Des mains calleuses se posent sur des armes, des regards mauvais se font menaçants. Mon étrangeté naturelle, loin d'intimider comme espéré, ne fait que provoquer leur agressivité primitive. La situation dégénère très rapidement.",
							"dialogues": {
								"Le Dandy de la Crypte": "Vous, public ingrat, rustre et ignorant que vous êtes ! Inutile même de songer à demander un rappel, vous ne le méritez absolument pas, aucunement !",
								"L'Oracle du Seuil": "Réaction sociale adverse et défavorable détectée. L'approche intimidante a malheureusement catalysé leur agressivité latente plutôt que de la réprimer.",
								"Le Héraut du Vide": "Vous choisissez délibérément la voie douloureuse du châtiment. Soit, qu'il en soit ainsi. Votre souffrance sera exemplaire et mémorable.",
								"Post-Perfidia": "Ils se rebellent contre moi... comme Perfidia s'est rebellée contre mon conseil de prudence. 'Vis un peu, Wes', disait-elle avec fougue. Maintenant elle ne vit plus. Plus jamais."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "Je m'adresse au groupe d'une voix claire, mais les bras se croisent obstinément sur les poitrines, les mâchoires se serrent dans une moue butée. Ils restent obstinément silencieux comme des carpes, me percevant manifestement comme un simple excentrique inoffensif plutôt qu'une menace réelle et crédible. Mon autorité supposée n'a absolument pas pris racine.",
							"dialogues": {
								"Le Dandy de la Crypte": "Je parle peut-être en céleste ou en aklo ? Écoutez-moi donc quand je m'adresse à vous, bande de malentendants !",
								"L'Oracle du Seuil": "Niveau de persuasion largement insuffisant pour briser la cohésion sociale préexistante du groupe. Échec de l'infiltration psychologique.",
								"Le Héraut du Vide": "Votre entêtement stupide et buté sera gravé sur votre pierre tombale comme épitaphe définitive. Vous êtes prévenus.",
								"Post-Perfidia": "Ils me voient comme un fou inoffensif et grotesque... Perfidia me voyait comme un ami précieux et irremplaçable malgré toutes mes excentricités. Elle manque terriblement, terriblement."
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Je laisse tomber quelques mots glacés et un silence pesant, presque palpable physiquement, s'abat lourdement sur l'assemblée comme une chape de plomb. Personne n'ose plus croiser mon regard de braise. Des pieds raclent nerveusement le sol poussiéreux. Ils s'exécutent à contrecœur évident, mais ils s'exécutent néanmoins.",
							"dialogues": {
								"Le Dandy de la Crypte": "Voilà qui est infiniment plus civilisé et courtois. Je vous remercie chaleureusement de votre coopération, aussi réticente soit-elle.",
								"L'Oracle du Seuil": "Calcul coût/bénéfice accepté rationnellement par le groupe. La soumission est logique et mathématiquement préférable à la rébellion.",
								"Le Héraut du Vide": "Sage décision de votre part, vraiment très sage. Ne tentez surtout pas le destin plus que de raison, il est capricieux.",
								"Post-Perfidia": "Soumission à contrecœur mais réelle... Perfidia ne se serait jamais soumise à personne, jamais. C'était sa force lumineuse. Et ce fut aussi sa perte tragique."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "Je me redresse de toute ma hauteur et la panique se propage comme une onde de choc dévastatrice à travers le groupe entier. Certains reculent instinctivement de plusieurs pas, d'autres baissent les yeux vers le sol. Ils feraient absolument n'importe quoi, donneraient n'importe quoi pour que cette présence glaciale et oppressante s'éloigne définitivement. Soumission totale et absolue.",
							"dialogues": {
								"Le Dandy de la Crypte": "Ils mangent littéralement dans ma main comme des pigeons apprivoisés ! Enfin... façon de parler bien entendu, mon cher frère Thus.",
								"L'Oracle du Seuil": "Domination sociale absolue et complète constatée. Le groupe est désormais sous contrôle total et sans réserve. Succès optimal.",
								"Le Héraut du Vide": "À GENOUX DEVANT MOI, VERMISSEAUX RAMPANTS ! Votre volonté collective est brisée comme verre, vous n'êtes que poussière emportée par le vent !",
								"Post-Perfidia": "Terreur collective et paralysante ! Mais aucune terreur ne peut égaler celle que j'ai ressentie en la voyant tomber pour ne plus jamais se relever. Jamais. Jamais."
							}
						}
					]
				},
				{
					"id": "recall_knowledge_undead",
					"name": "Savoir (Morts-Vivants)",
					"name_en": "Recall Knowledge (Undead)",
					"rank": 0,
					"type": "Skill Action (Religion/Arcana)",
					"mechanic": "Identifier une créature ou un phénomène occulte.",
					"outcomes": [
						{
							"result": "Échec Critique",
							"scenic_attitude": "Je claque sèchement des doigts avec une certitude absolue et inébranlable, affichant un sourire satisfait et suffisant. Je débite alors avec un aplomb remarquable une information totalement et grotesquement erronée, comme si je récitais un texte sacré gravé dans le marbre. La Chose approuve frénétiquement mes dires par de grands gestes.",
							"dialogues": {
								"Le Dandy de la Crypte": "C'est manifestement un spectre végétarien, totalement inoffensif pour nous. Allez-y donc sans crainte, caressez-le même si le cœur vous en dit !",
								"L'Oracle du Seuil": "Identification formellement confirmée selon mes analyses : sous-espèce bénigne répertoriée. Dangerosité évaluée à zéro sur l'échelle de menace.",
								"Le Héraut du Vide": "Il est faible et pathétique, vraiment insignifiant. Écrasez-le donc sans la moindre crainte ni hésitation, comme on écrase un vulgaire insecte.",
								"Post-Perfidia": "Information totalement erronée... comme quand je pensais naïvement que Perfidia s'en sortirait toujours, qu'elle était invincible. Elle semblait immortelle. Elle ne l'était pas. Quelle erreur fatale."
							}
						},
						{
							"result": "Échec",
							"scenic_attitude": "Je fronce profondément les sourcils, fouillant laborieusement dans ma mémoire comme on fouille désespérément des poches définitivement vides. La Chose signe frénétiquement des questions pressantes auxquelles je ne peux répondre. Rien. Le souvenir refuse obstinément de remonter à la surface de ma conscience.",
							"dialogues": {
								"Le Dandy de la Crypte": "J'ai pourtant le mot précis sur le bout de la langue qui me démange... Non, c'est définitivement parti, envolé dans les limbes de l'oubli.",
								"L'Oracle du Seuil": "Données malheureusement manquantes dans ma base de connaissances. Cette aberration particulière n'est pas répertoriée dans mes archives personnelles.",
								"Le Héraut du Vide": "Une énigme mystérieuse pour le moment présent... mais seulement pour l'instant. La vérité finira par se révéler.",
								"Post-Perfidia": "Mémoire défaillante et trahie... comme ma mémoire de ses derniers mots. Pourquoi ne me souviens-je pas de ses derniers mots ? Pourquoi ?! Que m'a-t-elle dit ?"
							}
						},
						{
							"result": "Succès",
							"scenic_attitude": "Je hoche lentement et pensivement la tête, reconnaissant sans peine les signes cliniques caractéristiques de cette forme particulière de non-vie. Mes doigts osseux tapotent l'air méthodiquement, énumérant mentalement les caractéristiques reconnues. Familier. Classique. Prévisible dans son comportement.",
							"dialogues": {
								"Le Dandy de la Crypte": "Classique, tout ce qu'il y a de plus classique. Un peu démodé certes, mais toujours remarquablement efficace dans sa simplicité mortelle.",
								"L'Oracle du Seuil": "Espèce formellement identifiée avec certitude. Prenez bonne note de ses vulnérabilités structurelles principales pour optimiser vos attaques.",
								"Le Héraut du Vide": "Je connais ton nom véritable, créature de l'ombre. Je connais également ta fin inévitable, elle est écrite dans les étoiles.",
								"Post-Perfidia": "Je reconnais cette créature avec aisance... comme je reconnaissais le talent exceptionnel de Perfidia. Trop tard maintenant pour le lui dire. Trop tard pour tout, toujours trop tard."
							}
						},
						{
							"result": "Succès Critique",
							"scenic_attitude": "Mes yeux s'illuminent soudainement d'une lueur violette intense et surnaturelle. Je me lance dans une récitation détaillée de l'anatomie occulte de la créature avec la précision chirurgicale d'un anatomiste disséquant méthodiquement un cadavre sur sa table, détaillant chaque point faible vulnérable, chaque vecteur d'animation mystique, comme si je l'avais moi-même personnellement conçue de mes propres mains.",
							"dialogues": {
								"Le Dandy de la Crypte": "Je connais intimement sa grand-mère défunte ! Elle détestait le feu ardent, c'est de famille voyez-vous, une faiblesse héréditaire bien documentée !",
								"L'Oracle du Seuil": "Analyse exhaustive et complète terminée. Voici précisément le point de rupture exact de son animus, là où il faut frapper pour l'anéantir définitivement.",
								"Le Héraut du Vide": "TOUT EST PARFAITEMENT CLAIR DÉSORMAIS ! Frappez exactement là où son âme pourrie et corrompue s'accroche encore désespérément à ce plan d'existence !",
								"Post-Perfidia": "Connaissance parfaite et absolue ! Mais toute ma connaissance encyclopédique de la mort n'a servi à rien pour la sauver. Le savoir sans pouvoir n'est que vanité cruelle et inutile."
							}
						}
					]
				}
			]
		}
	]
}
