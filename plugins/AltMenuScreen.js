// RPG Maker plugin for menu scene


// Keep only 3 lines for menu window
Scene_MenuBase.prototype.commandWindowHeight = function() {
    return this.calcWindowHeight(3, true);
};


// Place menu at the center of the main window
Scene_Menu.prototype.commandWindowRect = function() {
    const ww = Graphics.boxWidth/3;
    const wh = this.commandWindowHeight();
    const wx = Graphics.boxWidth/3;
    const wy = Graphics.boxHeight/3;
    return new Rectangle(wx, wy, ww, wh);
};


// Hide status menu
Scene_Menu.prototype.statusWindowRect = function() {
    return new Rectangle(0, 0, 0, 0);
};


// Hide gold menu
Scene_Menu.prototype.goldWindowRect = function() {
    return new Rectangle(0, 0, 0, 0);
};