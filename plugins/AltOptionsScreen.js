//=============================================================================
// RPG Maker MZ - Alternative Options Screen
//=============================================================================


Scene_Options.prototype.optionsWindowRect = function() {
    const n = 3;
    const ww = 400;
    const wh = this.calcWindowHeight(n, true);
    const wx = (Graphics.boxWidth - ww) / 2;
    const wy = (Graphics.boxHeight - wh) / 2;
    return new Rectangle(wx, wy, ww, wh);
};

Window_Options.prototype.addGeneralOptions = function() {
    this.addCommand(TextManager.touchUI, "touchUI");
};

Window_Options.prototype.addVolumeOptions = function() {
    this.addCommand(TextManager.bgmVolume, "bgmVolume");
    this.addCommand(TextManager.bgsVolume, "bgsVolume");
};