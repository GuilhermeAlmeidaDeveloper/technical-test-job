for (let i = 1; i <= 100; i++) {
    let print = "";

    if (i % 3 === 0) {
        print += "Tech";
    }
    if (i % 5 === 0) {
        print += "Ops";
    }

    if (i % 3 === 0 && i % 5 === 0) {
        print = "TechOps";
    }

    if (print === "") {
        print = i;
    }

    console.log(print);
}