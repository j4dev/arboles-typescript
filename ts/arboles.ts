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
    private _trabajo: clsArbol;

    private _i = 0;

    public get i() {
        return this._i;
    }
    public set i(value) {
        this._i = value;
    }

    public get trabajo(): clsArbol {
        return this._trabajo;
    }
    public set trabajo(value: clsArbol) {
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
     */
    public clsArbol() {
        this._raiz = null;
    }

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
     * buscarPadre 
     */
    public buscarPadre (dato:string, nodo: clsNodo) {
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

}