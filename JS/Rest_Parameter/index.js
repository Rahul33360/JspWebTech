function main() {
            return add(1,2,3,4,5,6,7,8) 
            add(2,45,7,8)
            function add(...val) {
                let sum = 0;
                for(let i=0; i<val; i++)
                    sum += val[i]
                console.log(sum);
                return sum;
            }
        }
        main()
        // console.log(main());