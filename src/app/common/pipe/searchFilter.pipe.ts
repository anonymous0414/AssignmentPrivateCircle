import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], searchFilter: string): any {
        if (!items || !searchFilter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.listName.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1);
    }
}