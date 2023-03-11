export interface ApiEntity {
    save(val : object) : boolean;
    get() : ApiEntity;

    get path() : string;
}