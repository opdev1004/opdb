const BGraph = require('./data-structure/bgraph.js');

module.exports = class BGraphDB {
    constructor(order = 5) {
        this.order = order;
        this.bgraph = new BGraph(order);
        this.filename;
    }

    open(filename)
    {
        this.filename = filename;
    }

    close()
    {
        this.filename = undefined;
    }

    serialize()
    {
        return this.bgraph.serialize();
    }

    deserialize(string)
    {
        this.bgraph.deserialize(string);
    }
}