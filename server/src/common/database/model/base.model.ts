export default interface Base{
    [index: string]: string | any,
    _id?: string,
    created_at?: Date,
    updated_at?: Date,
}