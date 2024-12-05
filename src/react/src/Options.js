
import packageJson from "../package.json";

export class Options
{
    static appName(){ return packageJson.description; }
    
    static appVersion(){ return packageJson.version; }

    static appTitle(){
        return this.appName() + " | v" + this.appVersion();
    }

    static getGateway(){
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') { 
            return 'http://devserver/shared/html-bootstrap-editor-showcase/react/build/'; 
        } 
        else{
            return 'https://ibatugowski.github.io/html-bootstrap-editor-showcase/';
        }
    }
}