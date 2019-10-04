class cell {
    constructor(id) {
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.accountid = 0;
        this.name = false;
        this.hex = false;
        this.skin = false;
        this.virus = false;
        this.food = false;
        this.eject = false;
        this.me = false;
        this.friend = false;
    }
    setColor(r, g, b) {
        this.hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }
};

export { cell }