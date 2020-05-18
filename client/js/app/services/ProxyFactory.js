class ProxyFactory {
    static createProxy(objeto, props, acao){
        return new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver){
                if(props.includes(prop) && typeof(target[prop]) == typeof(Function)){
                    return function(){
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            }
        });
    }
}