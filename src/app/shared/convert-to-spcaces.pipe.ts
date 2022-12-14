import {Pipe, PipeTransform} from "@angular/core"

@Pipe({
    name: "ConverToSpace"
})
export class ConvertToSpacePipe implements PipeTransform{
    transform(value:string, character:string):string{
        return value.replace(character, " ");
    }
}