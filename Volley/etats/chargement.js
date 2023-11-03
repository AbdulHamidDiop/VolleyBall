var etatChargement = function(){};

etatChargement.prototype = {
	
	preload: function(){
		
		barreChargement(this);
		
		// Chargement des images pour les objets du jeu
		this.load.image( 'ciel', dossierRacine + 'ressources/images/arrière_plan.png');
		this.load.image( 'rouge', dossierRacine + 'ressources/images/equipe_rouge.png');
		this.load.image( 'bleu', dossierRacine + 'ressources/images/equipe_bleu.png');
		this.load.image( 'balle', dossierRacine + 'ressources/images/balle.png');
		this.load.image( 'filet', dossierRacine + 'ressources/images/pole.png');
		this.load.image( 'sol', dossierRacine + 'ressources/images/sol.png');
	},
	
	create: function(){
		
        // Ne pas modifier la ligne suivante
		this.state.start('etatMenu');
		
	}
}