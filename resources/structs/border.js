class mapBorders {
    constructor() {
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
    }
    update(view) {
        this.left = view.readFloat64();
        this.top = view.readFloat64();
        this.right = view.readFloat64();
        this.bottom = view.readFloat64();
    }
};
var borders = new mapBorders();
export { borders }