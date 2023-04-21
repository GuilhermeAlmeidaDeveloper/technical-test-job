function printNumbers() {
    for (let i = 1; i <= 100; i++) {
        let print = "";

        if (i % 3 === 0 && i % 5 === 0) {
            print = "TechOps";
        } else if (i % 3 === 0) {
            print = "Tech";
        } else if (i % 5 === 0) {
            print = "Ops";
        } else {
            print = i
        }

        console.log(print);
    }
}

printNumbers()

