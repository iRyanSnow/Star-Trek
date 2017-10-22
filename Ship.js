 function Ship(name,cls,crewManifest)
    {
        this.name = name;
        this.cls = cls;
        this.crewManifest = crewManifest;
        this.shipHull;
        this.weapons;
        this.shields;
        this.engines;
        this.sensors;
        
    };
    Ship.prototype.weaponsControl = function(atkShip, defShip)
    {
        //: If lockTarget is True attack the Target
        //: If AttackType is Phasors or Torpedos
        //: report attackedTarget total dmg      
           var rollDmg = Math.floor(Math.random() * 6 ) + atkShip.weapons.phasors;
           var totalDmg = defShip.shields.shieldMain - rollDmg;
           defShip.shields.shieldMain = totalDmg;
           
           var reportDmg = {
               dmg:totalDmg,
               atkDmg:rollDmg
           };

           localStorage.setItem('DamageReport',JSON.stringify(reportDmg));
           displayDmgReport();
    
    };

    
    