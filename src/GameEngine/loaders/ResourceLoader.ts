import { Resource } from "./Resource";


export class ResourceLoader {
    public resourceList: Array<Resource> = [];

    constructor(resourceList : Array<Resource>) {
        this.resourceList = resourceList;
    }

    fetchAllResources() {
        this.resourceList.forEach(resource => {
            this.fetchResource(resource);
        });
    }

    fetchResource(resource: Resource) : Promise<any> | void {
        if(resource.hasLoaded) {
            return;
        }
        return fetch(resource.source).then(async res => {
            const data = await res.blob();
            resource.resourceBlob = data;
            resource.hasLoaded = true;
            console.log(resource.resourceBlob);

        })
    }

    push(resource : Resource) {
        this.resourceList.push(resource);
    }


}