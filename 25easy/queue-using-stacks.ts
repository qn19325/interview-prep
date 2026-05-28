class MyQueue {
    private fifo: number[];
    private lifo: number[];

    constructor() {
        this.fifo = [];
        this.lifo = [];
    }

    push(x: number): void {
        this.fifo.push(x)
    }

    pop(): number {
        while (!!this.fifo.length) {
            const popped = this.fifo.pop();
            if (popped) {
                this.lifo.push(popped);
            }
        }
        const res = this.lifo.pop() ?? -1;
        while (!!this.lifo.length) {
            const popped = this.fifo.pop();
            if (popped) {
                this.fifo.push(popped);
            }
        }
        return res
    }

    peek(): number {
        return this.fifo[0]
    }

    empty(): boolean {
        return !!this.fifo.length
    }
}

var obj = new MyQueue()
obj.push(1)
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()

console.log(param_2)
console.log(param_3)
console.log(param_4)