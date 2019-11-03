class clsNodo {
    private _Dato: string;
    private _Hijo: clsNodo;
    private _Hermano: clsNodo;

    public get Hermano(): clsNodo {
        return this._Hermano;
    }
    public set Hermano(value: clsNodo) {
        this._Hermano = value;
    }
    public get Dato(): string {
        return this._Dato;
    }
    public set Dato(value: string) {
        this._Dato = value;
    }
    public get Hijo(): clsNodo {
        return this._Hijo;
    }
    public set Hijo(value: clsNodo) {
        this._Hijo = value;
    }

    /**
     * clsNodo
     */
    public clsNodo() {
        this._Dato = "";
        this._Hijo = null;
        this._Hermano = null;
    }
    
}

class clsArbol {
    private _Raiz: clsNodo;
    private _Trabajo: clsNodo;
    private i=0;

    /**
     * clsArbol
     */
    public clsArbol() {
        this._Raiz = new clsNodo();
    }

    /**
     * insertarNodo
p     */
    public insertarNodo(dato:string, nodo:clsNodo):clsNodo {

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
        if(nodo.Hijo == null)
        {
            let temp: clsNodo = new clsNodo;

            temp.Dato = dato;

            nodo.Hijo = temp;

            return temp;
        }else{//ya existe un hijo y se inserta como hermano
            this._Trabajo = nodo.Hijo;

            //Recorrer el arbol hasta el ultimo hermano
            while (this._Trabajo.Hermano != null) {
                this._Trabajo = this._Trabajo.Hermano;
            }

            let temp: clsNodo = new clsNodo();

            temp.Dato = dato;

            //Asignar el temp al ultimo hermano
            this._Trabajo.Hermano = temp;

            return temp;

        }
    }
}