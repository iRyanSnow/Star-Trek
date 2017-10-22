function ShipYard()
    {
        this.shipYard = [];
    };
    ShipYard.prototype.addShip = function(ship)
    {
        if(!ship == null)
        {
            this.shipYard.push(ship);
        }
        else
        {
            console.log("Error loading ship...");
        }
       
    };
    ShipYard.prototype.modifyShipClass = function(ship)
    {
     
            if(ship.cls === "BattleShip")
            {
                this.battleShipClass(ship);    
                return true;            
            }
            else if(ship.cls === "Science")
            {
                this.scienceShipClass(ship);
            }
               
    };
    ShipYard.prototype.battleShipClass = function(ship)
    {
        var BattleClassWeapons = {
            phasors:10,
            torpedos:25,
            torpedoArmourment:150,
            active:false
        };
        var BattleClassHull = {
            hullPlating:50,
            hullReienforceMent:15,
            active:false
        };
        var BattleClassShield = {
            shieldMain:150,
            shieldBackup:45,
            active:false
        };
        var BattleClassEngines = {
            warpDrive:9.9,
            impulse:8,
            perpulsion:9,
            backUpDrive:5,
            active:false
        };
          var BattleClassSensors = {
            sensorSweep:10,
            longRangeSensor:25,
            shortRangeSensor:15,
            active:false
        };
            ship.shipHull = BattleClassHull;
            ship.weapons = BattleClassWeapons;
            ship.shields = BattleClassShield;
            ship.engines = BattleClassEngines;
            ship.sensors = BattleClassSensors;
            
    };
    ShipYard.prototype.scienceShipClass = function(ship)
    {
        var ScienceClassWeapons = {
            phasors:10,
            torpedos:25,
            torpedoArmourment:150,
            active:false
        };
        var ScienceClassHull = {
            hullPlating:50,
            hullReienforceMent:15,
            active:false
        };
        var ScienceClassShield = {
            shieldMain:150,
            shieldBackup:45,
            active:false
        };
        var ScienceClassEngines = {
            warpDrive:9.9,
            impulse:8,
            perpulsion:9,
            backUpDrive:5,
            active:false
        };
            var ScienceClassSensors = {
            sensorSweep:15,
            longRangeSensor:45,
            shortRangeSensor:25,
            active:false
        };
            ship.shipHull = ScienceClassWeapons;
            ship.weapons = ScienceClassWeapons;
            ship.shields = ScienceClassWeapons;
            ship.engines = ScienceClassWeapons;
            ship.sensors = ScienceClassSensors;
    };
    