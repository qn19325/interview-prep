function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number[]>();
    for (let i=0; i<nums.length; i++) {
        const elem = nums[i];
        const has = map.get(elem);
        map.set(elem, has ? [...has, i] : [i])
    }

    for (let [key, val] of map) {
        const req = target - key;
        const get = map.get(req);

        if (get) {
            if (key === req && get?.length !== 1) {
                return val; 
            }
            
            if (key !== req) {
                return [val[0], get[0]]
            }
        }

    }

    return [];
};

console.log(twoSum([3,2,4], 6))