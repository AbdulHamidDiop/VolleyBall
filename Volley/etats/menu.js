var etatMenu = function(){};

etatMenu.prototype = {
	
	create: function() {

                // Cette section devrait être les directives de ton jeu
        
                var version = "Version 0.1.0";
                var nomJeu  = "VOLLEY";
                var message = "Appuyer sur la touche Q sur le clavier ou T sur l'arcade pour continuer";
                        
                var texte = jeu.add.text( 100, 100, version, { font:"30px verdana", fill:"#888" } );
                var texte = jeu.add.text( 100, 200, nomJeu,  { font:"30px verdana", fill:"#888" } );
                var texte = jeu.add.text( 100, 300, message, { font:"30px verdana", fill:"#888" } );
                
                // Ne pas supprimer la ligne suivante
                joueurs[0].manette.bT.onDown.add( this.demarrer, this );
		
	},
	
	demarrer: function(){
		
        // Ne pas modifier la ligne suivante
		this.state.start( 'etatJeu' );
		
	}
	
};