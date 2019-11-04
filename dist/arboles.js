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
    /**
     * transversaPre
     */
    transversaPre(nodo) {
        let espacios = "";
        var lista = "<li>Ábrol vacio</li>";
        if (nodo == null) {
            return lista;
        }
        for (let n = 0; n < this.i; n++) {
            // El ciclo for solo se usa para dar espacios en la interfaz
            espacios = espacios + "&nbsp";
            lista = "<li>" + espacios + nodo.Dato + "</li>";
        }
        //Recorremos al hijo en transversa preorden
        if (nodo.Hijo != null) {
            this.i++;
            this.transversaPre(nodo.Hijo);
            this.i--;
        }
        //Si existen hermanos seran procesados
        if (nodo.Hermano != null) {
            this.transversaPre(nodo.Hermano);
        }
    }
    /**
     * buscarNodo
     */
    buscarNodo(dato, nodo) {
        var encontrado = null;
        if (nodo == null) {
            return encontrado;
        }
        if (nodo.Dato == dato) {
            encontrado = nodo;
            return encontrado;
        }
        //Buscamos en el hijo
        if (nodo.Hijo != null) {
            encontrado = this.buscarNodo(dato, nodo.Hijo);
            if (encontrado != null) {
                return encontrado;
            }
        }
        //Buscamos en los hermanos
        if (nodo.Hermano != null) {
            encontrado = this.buscarNodo(dato, nodo.Hermano);
            if (encontrado != null) {
                return encontrado;
            }
        }
        return encontrado;
    }
}
//# sourceMappingURL=arboles.js.map