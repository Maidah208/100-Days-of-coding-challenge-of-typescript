let laptop = {
    make:"Apple",
    year: 2022,
    model:"MacBook",
    describe: function(){
        console.log(`This laptop is a ${laptop.year} ${laptop.make} ${laptop.model}.`);
    }
};
laptop.describe()