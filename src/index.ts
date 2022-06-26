export class ImmutableList {
    
    static add<T>(list: T[], element: T): T[] {
        const newList = list.slice();
        newList.push(element);
        return newList;
    }
    
    static addAt<T>(list: T[], element: T, index: number): T[] {
        const newList = list.slice();
        newList.splice(index, 0, element);
        return newList;
    }
    
    static setAt<T>(list: T[], element: T, index: number): T[] {
        const newList = list.slice();
        newList[index] = element;
        return newList;
    }
    
    static moveAt<T>(list: T[], element: T, index: number): false|T[] {
        const elementIndex = list.indexOf(element);
        if (elementIndex == -1) {
            return false;
        }
        const newList = list.slice();
        newList.splice(elementIndex, 1);
        newList.splice(index, 0, element);
        return newList;
    }
    
    static remove<T>(list: T[], element: T): false|T[] {
        const index = list.indexOf(element);
        if (index == -1) {
            return false;
        }
        const newList = list.slice();
        newList.splice(index, 1);
        return newList;
    }
    
    static removeAt<T>(list: T[], index: number): T[] {
        const newList = list.slice();
        newList.splice(index, 1);
        return newList;
    }
}
