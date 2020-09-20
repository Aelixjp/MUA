const resource_folder = "imagenes";
export default class Loader{

    constructor(){
        this.resources = new Map();
    }

    loadSource(name, src, extension){
        const source = new Image();

        return new Promise((res, rej) =>{
            source.onload = () => {this.resources.set(name, source);res(source);};
            source.onerror = e => rej(e);
            source.src = `${resource_folder}/${src}.${extension}`;
        });
    }

}