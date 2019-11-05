class clsNodo {
    private _dato: string;
    private _izq: clsNodo;
    private _der: clsNodo;

    public get der(): clsNodo {
        return this._der;
    }
    public set der(value: clsNodo) {
        this._der = value;
    }
    public get izq(): clsNodo {
        return this._izq;
    }
    public set izq(value: clsNodo) {
        this._izq = value;
    }
    
    public get dato(): string {
        return this._dato;
    }
    public set dato(value: string) {
        this._dato = value;
    }

    /**
     * clsNodo
     */
    public clsNodo() {
        this._dato = "";
        this._izq = null;
        this._der = null;
    }

}

class clsArbol {
    private _raiz: clsArbol;
    private _trabajo: clsNodo;

    private _i = 0;

    public get i() {
        return this._i;
    }
    public set i(value) {
        this._i = value;
    }

    public get trabajo(): clsNodo {
        return this._trabajo;
    }
    public set trabajo(value: clsNodo) {
        this._trabajo = value;
    }
    
    public get raiz(): clsArbol {
        return this._raiz;
    }
    public set raiz(value: clsArbol) {
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
    public insertarNodo(dato:string,nodo:clsNodo): clsNodo {
        let temp:clsNodo = null;

        //Si no a quien insertar entonces
        //se crea el nodo
        if (nodo == null) {
            temp = new clsNodo;
            temp.dato = dato;

            return temp;
        }

        if (dato.length < nodo.dato.length) {
            nodo.izq = this.insertarNodo(dato,nodo.izq);
        }
        if (dato.length > nodo.dato.length) {
            nodo.der = this.insertarNodo(dato,nodo.der);
        }

        return nodo;

    }

    /**
     * buscarMinimo
     */
    public buscarMinimo(nodo: clsNodo) {
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
    public buscarPadre (dato:string, nodo:clsNodo):clsNodo {
        let temp:clsNodo = null;

        if (nodo == null ) {
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
            temp = this.buscarPadre(dato,nodo.izq);
        }

        //Si existen nodos a la derecha
        if (nodo.der != null && dato.length > nodo.dato.length) {
            temp = this.buscarPadre(dato,nodo.der);
        }

        return temp;
    }

    /**
     * eliminarNodo
     */
    public eliminarNodo(nodo:clsNodo, dato:string):clsNodo {
        if (nodo == null) {
            return null;
        }
        if (dato.length < nodo.dato.length) {
            nodo.izq = this.eliminarNodo(nodo.izq,dato);
            return nodo;
        }else if (dato.length > nodo.dato.length) {
                nodo.der = this.eliminarNodo(nodo.der,dato);
                return nodo;
            }else if (nodo.izq == null && nodo.der == null) {
                    nodo = null;
                    return nodo;
                } else if (nodo.izq == null) {
                        let padre:clsNodo = this.buscarPadre(dato,nodo);
                        padre.der = nodo.der;
                        return nodo;
                    }else{
                        let minimo = this.buscarMinimo(nodo.der);
                        nodo.dato = minimo;
                        nodo.der = this.eliminarNodo(nodo.der, dato);
                        return nodo;
                    }
    }

    /**
     * buscarNodo
     */
    public buscarNodo(dato:string,nodo:clsNodo):clsNodo {
        if (nodo != null) {
            if (dato.length < nodo.dato.length) {
                this.buscarNodo(dato,nodo.izq);
                return nodo;
            }else if(dato > nodo.dato){
                this.buscarNodo(dato,nodo.der);
                return nodo;
            }
        } else {
            return null;
        }
    }
        

}

var arbol = new clsArbol();
var raiz:clsNodo = arbol.insertarNodo("raiz",null);

/*function listar() {
    arbol.listar();
}*/
function guardarArbol() {
    var dato = (<HTMLInputElement>document.getElementById("insertar")).value.toString();
    arbol.insertarNodo(dato,raiz);
    console.log(raiz);
    
}
function buscarNodo() {
    var nodoBuscado = (<HTMLInputElement>document.getElementById("buscar")).value.toString();
    arbol.buscarNodo(nodoBuscado,raiz);
    console.log(raiz);
}
function eliminarNodo() {
    var nodoEliminado = (<HTMLInputElement>document.getElementById("borrar")).value.toString();
    arbol.eliminarNodo(raiz,nodoEliminado);
    console.log(raiz);
}
