{

    // 

    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLowerCase();
        } else {
            return input.toUpperCase();
        }
    }


    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4)
    }


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const resultArray: T[] = [];
        for (const arr of arrays) {
            resultArray.push(...arr);
        }
        return resultArray;
    }


    class Vehicle {
        constructor(private make: string, private year: number) {
        }
        getInfo() {
            console.log(`This Vehicle is made by ${this.make} on the year ${this.year}`)
        }
    }

    class Car extends Vehicle {
        constructor(make: string, year: number, private model: string) {
            super(make, year)
        }
        getModel() {
            console.log(`This cars model is ${this.model}`)
        }
    }



    function processValue(value: string | number): number {
        if (typeof value === 'string') {
            return value.length;
        } else {
            return value * 2
        }
    }



    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }
        let maxPricedProduct = products[0];
        for (const product of products) {
            if (product.price > maxPricedProduct.price) {
                maxPricedProduct = product;
            }
        }

        return maxPricedProduct;
    }




    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
    }





    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"))
                } else {
                    resolve(n * n)
                }
            }, 1000);
        });
    }


    


    // 


}