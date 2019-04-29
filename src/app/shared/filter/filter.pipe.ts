import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any, tag?: any): any {
    return tag && value.filter(res => res.tag === tag) || value;
  }
}
