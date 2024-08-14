/* package whatever; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Ideone
{
	public static void main (String[] args) throws java.lang.Exception
	{
		 System.out.println("Números de 1 a 100:");
        NumerosDe1A100();
        System.out.println("\n---------------------");

        System.out.println("Somatório dos números ímpares entre 10 e 1000:");
        somaDosNumerosImparesEntre10E1000();
        System.out.println("\n---------------------");

        System.out.println("Múltiplos de 3 que não terminam em 3:");
        MultiplosDe3SemTerminarEm3();
        System.out.println("\n---------------------");
	}
	public static void NumerosDe1A100() {
        for (int i = 1; i <= 100; i++) {
            if (i == 100) {
                System.out.print(i);
            } else {
                System.out.print(i + ", ");
            }
        }
        System.out.println();
    }
    public static void somaDosNumerosImparesEntre10E1000() {
        int soma = 0;
        for (int i = 11; i <= 1000; i += 2) {
            soma += i;
        }
        System.out.println("O Somatório de todos os números ímpares entre 10 e 1000: " + soma);
    }
     public static void MultiplosDe3SemTerminarEm3() {
        for (int i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 10 != 3) {
                System.out.print(i + ", ");
            }
        }
        System.out.println();
    }
}
