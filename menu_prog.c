#include <stdio.h>

/*objective is to make a program using functions and a loop which the user exits at will, the program will calculaate the factorial, odd or even, and prime or not for an input integer*/



int fact(int);
void odd_even(int);
void prime_noprime(int);

int main () {
    int a = 1;
    while(a ==1){
        printf("enter the serial number against the operations which you would like to carry out\n 1. Factorial\n 2. Odd or Even \n 3. prime or not prime\n 4. exit\n");
        int b;
        scanf("%d", &b);
        if(b==4){
            printf("exiting ...");
            break;
        }

        printf("enter the number that has to be operated upon: ");
        int c;
        scanf("%d", &c);

        if(b==1){
            int fac = fact(c);
            printf("factorial: %d \n", fac);
        }
        else if(b==2){
            odd_even(c);
            /*print statement*/
        }
        else if(b==3){
            prime_noprime(c);
            /*print statement*/
        }
        
        else{
            printf("invalid input");
        }
    }



}

int fact(int a){
    int fac = 1;

    if(a==0){
        return 1;
    }

    for(; a >= 1; a--){
        fac *= a;
        
    }
    return fac;
}

void odd_even(int a){
    if(a%2 == 0){
        printf("even\n");
    }
    else{
        printf("odd\n");
    }
}

void prime_noprime(int a) {
    if (a <= 1) {
        printf("%d is not prime.\n", a); // Not prime
        return; // Exit the function
    }

    // Assume the number is prime until we find a divisor
    int isPrime = 1; // Flag for primality

    // Check for factors from 2 up to the square root of a
    for (int i = 2; i * i <= a; i++) {
        if (a % i == 0) {
            isPrime = 0; // Found a divisor, set flag to not prime
            break; // No need to check further
        }
    }

    // Print the result based on the flag
    if (isPrime) {
        printf("%d is prime.\n", a);
    } else {
        printf("%d is not prime.\n", a);
    }
}
