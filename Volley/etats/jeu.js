var etatJeu = function () { };

etatJeu.prototype = {

    create: function () {
        
     
        jeu.physics.startSystem(Phaser.Physics.ARCADE); //gravité
        jeu.physics.arcade.gravity.y = 500; //force de la gravité
        jeu.physics.arcade.setBounds( 0, 0,jeu.world.width, jeu.world.height - 115 );

        this.joueursGRP = jeu.add.physicsGroup(Phaser.Physics.ARCADE);
        this.decorsGRP  = jeu.add.physicsGroup(Phaser.Physics.ARCADE);
        this.balleGRP   = jeu.add.physicsGroup(Phaser.Physics.ARCADE);

        jeu.stage.backgroundColor = '#00ffff';

        this.sol = jeu.add.sprite( 1, 965, 'sol' ); //mettre en place le sol
        this.decorsGRP.add( this.sol );
        this.sol.body.immovable = true;
        this.sol.body.moves = false;
        this.sol.body.allowGravity = false;

        this.filet = jeu.add.sprite( 960, 620, 'filet' );//mettre en place le filet
        this.decorsGRP.add( this.filet );
        this.filet.body.immovable = true;
        this.filet.body.moves = false;

        this.balle = jeu.add.sprite( 600, 400, 'balle' ); //mettre en place la balle
        this.balleGRP.add(this.balle);
        this.balle.body.collideWorldBounds = true;//limite de l'écran
        this.balle.body.bounce.setTo(15,1);

        this.rouge1 = jeu.add.sprite( 600, 770, 'rouge' ); //mettre en place le joueur 1 rouge
        this.joueursGRP.add( this.rouge1 );
        this.rouge1.body.collideWorldBounds = true;//limite de l'écran
        this.rouge1.body.immovable = true;
        
        this.rouge2 = jeu.add.sprite( 200, 770, 'rouge' ); //mettre en place le joueur 2 rouge
        this.joueursGRP.add( this.rouge2 );
        this.rouge2.body.collideWorldBounds = true;//limite de l'écran
        this.rouge2.body.immovable = true;

        this.bleu1 = jeu.add.sprite( 1300, 770, 'bleu' ); //mettre en place le joueur 1 bleu
        this.joueursGRP.add( this.bleu1 );
        this.bleu1.body.collideWorldBounds = true;//limite de l'écran
        this.bleu1.body.immovable = true;

        this.bleu2 = jeu.add.sprite( 1700, 770, 'bleu' ); //mettre en place le joueur 2 bleu
        this.joueursGRP.add( this.bleu2 );
        this.bleu2.body.collideWorldBounds = true;//limite de l'écran
        this.bleu2.body.immovable = true;

        var personnages = [ this.rouge1, this.rouge2, this.bleu1, this.bleu2 ];

        for( var i = 0; i < joueurs.length; i++ ){

            joueurs[i].lutin = personnages[i];
            joueurs[i].vitesse = 10;

        }

        joueurs[0].getNumero(1);
        joueurs[1].getNumero(2);
        joueurs[2].getNumero(3);
        joueurs[3].getNumero(4);

        joueurs[0].setEquipe(0);
        joueurs[1].setEquipe(0);
        joueurs[2].setEquipe(1);
        joueurs[3].setEquipe(1);
         
    },

    update: function () {

        jeu.physics.arcade.collide( this.joueursGRP, this.balleGRP );
        jeu.physics.arcade.collide( this.joueursGRP, this.decorsGRP );  
        jeu.physics.arcade.collide( this.decorsGRP, this.balleGRP );
        jeu.physics.arcade.overlap( this.joueursGRP, this.joueursGRP );

         for( var i = 0; i < joueurs.length; i++ ){

            if( joueurs[i].manette.gauche() ){
                joueurs[i].lutin.x -= joueurs[i].vitesse;
            }
            if( joueurs[i].manette.droite() ){
                joueurs[i].lutin.x += joueurs[i].vitesse;
            }
            if( joueurs[i].manette.haut() ){
                joueurs[i].lutin.y -= joueurs[i].vitesse;
            }
            if( joueurs[i].manette.bas() ){
                joueurs[i].lutin.y += joueurs[i].vitesse;
            }

        }



		
    }

};