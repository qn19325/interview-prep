/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let i = 0;
        let j = n;
        while (i < j) {
            const mid = Math.floor((i+j) / 2);

            if (isBadVersion(mid)) {
                j = mid;
            } else {
                i = mid + 1;
            }
        }

        return isBadVersion(j) ? j : i;
    };
};