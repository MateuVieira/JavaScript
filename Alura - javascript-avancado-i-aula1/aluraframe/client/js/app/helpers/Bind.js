
class Bind {

    constructor(model, view, ...props){

        let proxy = ProxyFatory.create(
                    model, 
                    props,
                    model => view.update(model)
        );
        view.update(model);

        return proxy;
    }

}