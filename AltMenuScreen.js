//=============================================================================
// RPG Maker MZ - Alternative Menu Screen
//=============================================================================


(() => {
    // Window_Base.prototype.updateTone = function() {
    //     this.setTone(168, 50, 60);
    // };
    //Window_Base.prototype.drawRect = function(x, y, width, height) {
        //const outlineColor = "#ffffff";
        //const mainColor = "#ffffff";
        //this.contents.fillRect(x, y, width, height, outlineColor);
        //this.contents.fillRect(x + 1, y + 1, width - 2, height - 2, mainColor);
    //};
    Scene_MenuBase.prototype.commandWindowHeight = function() {
        return this.calcWindowHeight(3, true);
    };

    Scene_Menu.prototype.commandWindowRect = function() {
        const ww = Graphics.boxWidth/3;
        const wh = this.commandWindowHeight();
        const wx = Graphics.boxWidth/3;
        const wy = Graphics.boxHeight/3;
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_Menu.prototype.statusWindowRect = function() {
        return new Rectangle(0, 0, 0, 0);
    };

    Scene_Menu.prototype.goldWindowRect = function() {
        return new Rectangle(0, 0, 0, 0);
    };

})();
