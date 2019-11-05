"use strict";
class clsNodo {
    get der() {
        return this._der;
    }
    set der(value) {
        this._der = value;
    }
    get izq() {
        return this._izq;
    }
    set izq(value) {
        this._izq = value;
    }
    get dato() {
        return this._dato;
    }
    set dato(value) {
        this._dato = value;
    }
    /**
     * clsNodo
     */
    clsNodo() {
        this._dato = "";
        this._izq = null;
        this._der = null;
    }
}
class clsArbol {
    constructor() {
        this._i = 0;
    }
    get i() {
        return this._i;
    }
    set i(value) {
        this._i = value;
    }
    get trabajo() {
        return this._trabajo;
    }
    set trabajo(value) {
        this._trabajo = value;
    }
    get raiz() {
        return this._raiz;
    }
    set raiz(value) {
        this._raiz = value;
    }
    /**
     * clsArbol
     */
    clsArbol() {
        this._raiz = null;
    }
    /**
     * insertarNodo
     */
    insertarNodo(dato, nodo) {
        let temp = null;
        //Si no a quien insertar entonces
        //se crea el nodo
        if (nodo == null) {
            temp = new clsNodo;
            temp.dato = dato;
            return temp;
        }
        if (dato.length < nodo.dato.length) {
            nodo.izq = this.insertarNodo(dato, nodo.izq);
        }
        if (dato.length > nodo.dato.length) {
            nodo.der = this.insertarNodo(dato, nodo.der);
        }
        return nodo;
    }
    /**
     * buscarPadre
     */
    buscarPadre(dato, nodo) {
        let temp = null;
        if (nodo == null) {
            return null;
        }
        //verificacion si soy el padre
        if (nodo.izq != null) {
            if (nodo.izq.dato == dato) {
                return nodo;
            }
        }
        if (nodo.der != null) {
            if (nodo.der.dato == dato) {
                return nodo;
            }
        }
        //Si existen nodos a la izquierda
        if (nodo.izq != null && dato.length < nodo.dato.length) {
            temp = this.buscarPadre(dato, nodo.izq);
        }
        //Si existen nodos a la derecha
        if (nodo.der != null && dato.length > nodo.dato.length) {
            temp = this.buscarPadre(dato, nodo.der);
        }
        return temp;
    }
}
//# sourceMappingURL=arboles.js.map