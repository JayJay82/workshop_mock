export class GenericResponse<T> {
    constructor(public status : string , public content : T , public errorMessage :string) {}
}