class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static scale(pt, factor){
        return new Point(factor*pt.x, factor*pt.y);
    }

    scale(factor){
        return Point.scale(this, factor);
    }

    static neg(pt){
        return pt.scale(-1.0);
    }

    neg(){
        return Point.neg(this);
    }

    static add(pt1, pt2){
        return new Point(pt1.x+pt2.x, pt1.y, pt2.y);
    }

    add(pt){
        return Point.add(this, pt);
    }

    subtract(pt){
        return this.add(pt.neg());
    }

    static norm(pt){
        return Math.sqrt(Math.pow(pt.x,2) + Math.pow(pt.y,2));
    }

    norm(){
        return Point.norm(this);
    }

    length = norm;

    static distance(pt1, pt2){
        return pt1.subtract(pt2).norm();
    }

    static unitize(pt){
        return pt.scale(1.0/pt.norm());
    }

    unitize(){
        return Point.unitize(this);
    }

    static innerProd(pt1, pt2){
        return pt1.x*pt2.x + pt1.y*pt2.y;
    }

    innerProd(pt){
        return Point.innerProd(this, pt);
    }
    
    
}

var Vector = Point;

class FiniteGroup{
    constructor(groupTable){
        this.table = groupTable;
    }
    operate(i, j){
        return table[i][j];
    }
}

class Graph{
    constructor(graphTable){
        /*
        Represent a directed graph.
        Connectivity is stored in a 2d array,
        where indexing [i][j] returns the jth 
        neighbor of the ith node.
        */
        this.table = graphTable;
    }
    neighbors(i){
        return table[i];
    }
}