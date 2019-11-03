"use strict";
class clsNodo {
    get Hermano() {
        return this._Hermano;
    }
    set Hermano(value) {
        this._Hermano = value;
    }
    get Dato() {
        return this._Dato;
    }
    set Dato(value) {
        this._Dato = value;
    }
    get Hijo() {
        return this._Hijo;
    }
    set Hijo(value) {
        this._Hijo = value;
    }
    /**
     * clsNodo
     */
    clsNodo() {
        this._Dato = "";
        this._Hijo = null;
        this._Hermano = null;
    }
}
class clsArbol {
    constructor() {
        this.i = 0;
    }
    /**
     * clsArbol
     */
    clsArbol() {
        this._Raiz = new clsNodo();
    }
    /**
     * insertarNodo
p     */
    insertarNodo(dato, nodo) {
        //Si no hay nodo donde insertar, tomamon como si fuera en la raiz
        if (nodo == null) {
            this._Raiz.Dato = dato;
            this._Raiz.Dato = dato;
            //No hay hijo
            this._Raiz.Hijo = null;
            //No hay hermano
            this._Raiz.Hermano = null;
            return this._Raiz;
        }
        /*
        *Verificar si tiene hijo
        *Insertar com hijo
        */
        if (nodo.Hijo == null) {
            let temp = new clsNodo;
            temp.Dato = dato;
            nodo.Hijo = temp;
            return temp;
        }
        else { //ya existe un hijo y se inserta como hermano
            this._Trabajo = nodo.Hijo;
            //Recorrer el arbol hasta el ultimo hermano
            while (this._Trabajo.Hermano != null) {
                this._Trabajo = this._Trabajo.Hermano;
            }
            let temp = new clsNodo();
            temp.Dato = dato;
            //Asignar el temp al ultimo hermano
            this._Trabajo.Hermano = temp;
            return temp;
        }
    }
}
//# sourceMappingURL=arboles.js.map