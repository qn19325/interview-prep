function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const dx = [0, 0, 1, -1];
    const dy = [-1, 1, 0, 0];

    const queue: number[][] = [[sr, sc]];
    const visited = new Set<string>();
    visited.add(`${sr},${sc}`)

    while (queue.length > 0) {
        const curr = queue.shift();

        if (!curr) continue;

        for (let i=0; i<dx.length; i++) {
            const nr = curr[0] + dx[i];
            const nc = curr[1] + dy[i];
            
            if (nr >= 0 && nr < image.length && nc >= 0 && nc < image[0].length && image[nr][nc] === image[sr][sc] && !visited.has(`${nr},${nc}`)) {
                image[nr][nc] = color;
                visited.add(`${nr},${nc}`);
                queue.push([nr, nc]);
            }
        }
    }

    return image
} 

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))