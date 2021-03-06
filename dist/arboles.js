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
     
    public clsArbol() {
        this._raiz = null;
    }
*/
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
        // Cuando las dimensiones de los string es igual
        return nodo;
    }
    /**
     * buscarMinimo
     */
    buscarMinimo(nodo) {
        if (nodo == null) {
            return null;
        }
        this.trabajo = nodo;
        let minimo = this.trabajo.dato;
        while (this.trabajo.izq != null) {
            this.trabajo = this.trabajo.izq;
            minimo = this.trabajo.dato;
        }
        return minimo;
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
        if (nodo.izq != null && dato.length <= nodo.dato.length) {
            temp = this.buscarPadre(dato, nodo.izq);
        }
        //Si existen nodos a la derecha
        if (nodo.der != null && dato.length >= nodo.dato.length) {
            temp = this.buscarPadre(dato, nodo.der);
        }
        return temp;
    }
    /**
     * eliminarNodo
     */
    eliminarNodo(nodo, dato) {
        if (nodo == null) {
            return null;
        }
        if (dato.length < nodo.dato.length) {
            nodo.izq = this.eliminarNodo(nodo.izq, dato);
            return nodo;
        }
        else if (dato.length > nodo.dato.length) {
            nodo.der = this.eliminarNodo(nodo.der, dato);
            return nodo;
        }
        else if (nodo.izq == null && nodo.der == null) {
            nodo = null;
            return nodo;
        }
        else if (nodo.izq == null) {
            let padre = this.buscarPadre(dato, nodo);
            padre.der = nodo.der;
            return nodo;
        }
        else {
            let minimo = this.buscarMinimo(nodo.der);
            nodo.dato = minimo;
            nodo.der = this.eliminarNodo(nodo.der, dato);
            return nodo;
        }
    }
    /**
     * buscarNodo
     */
    buscarNodo(dato, nodo) {
        if (nodo != null) {
            if (dato.length < nodo.dato.length) {
                this.buscarNodo(dato, nodo.izq);
                return nodo;
            }
            else if (dato > nodo.dato) {
                this.buscarNodo(dato, nodo.der);
                return nodo;
            }
        }
        else {
            return null;
        }
    }
}
var arbol = new clsArbol();
var raiz = arbol.insertarNodo("raiz", null);
function guardarArbol() {
    var dato = document.getElementById("insertar").value.toString();
    if (arbol.insertarNodo(dato, raiz) != null) {
        var listado = document.getElementById("json-arbol");
        listado.innerHTML = JSON.stringify(raiz, undefined, 4);
        document.getElementById("insertar").value = "";
    }
    else {
        var listado = document.getElementById("json-arbol");
        listado.innerHTML = JSON.stringify("Elemento ya existente", undefined, 4);
        document.getElementById("insertar").value = "";
    }
}
function buscarNodo() {
    var nodoBuscado = document.getElementById("buscar").value.toString();
    arbol.buscarNodo(nodoBuscado, raiz);
    console.log(arbol);
    console.log(raiz);
    var listado = document.getElementById("json-arbol");
    listado.innerHTML = JSON.stringify(arbol, undefined, 4);
    document.getElementById("buscar").value = "";
}
function eliminarNodo() {
    var nodoEliminado = document.getElementById("borrar").value.toString();
    if (arbol.eliminarNodo(raiz, nodoEliminado) != null) {
        var listado = document.getElementById("json-arbol");
        listado.innerHTML = JSON.stringify(raiz, undefined, 4);
        document.getElementById("borrar").value = "";
    }
    else {
        var listado = document.getElementById("json-arbol");
        listado.innerHTML = JSON.stringify("Nodo no encontrado", undefined, 4);
        document.getElementById("borrar").value = "";
    }
}
//# sourceMappingURL=arboles.js.map