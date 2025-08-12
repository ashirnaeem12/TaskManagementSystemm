"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
function paginate(items, pageSize, pageNumber) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = [];
    for (let i = startIndex; i < endIndex && i < items.length; i++) {
        paginatedItems.push(items[i]);
    }
    return paginatedItems;
}
//# sourceMappingURL=paginate.js.map