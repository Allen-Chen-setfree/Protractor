import java.util.*;

public class Main {


    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        String string1, string2;
        List<Integer> diff = new ArrayList<>();

        System.out.println("The number of test cases (1-100):");
        int caseNumber = input.nextInt();

        for (int i = 1; i <= caseNumber; i++) {
            System.out.println("The first string in test case " + i + ":");
            string1 = input.next();

            System.out.println("The second string in test case " + i + ":");
            string2 = input.next();

            diff.addAll(stringCompare(string1, string2));

        }

        System.out.println("Output:");

        for (int i = 0; i < caseNumber; i++) {
            System.out.print(diff.get(2 * i + 0) + " ");
            System.out.print(diff.get(2 * i + 1) + "\n");
        }


    }

    private static List<Integer> stringCompare(String string1, String string2) {
        int min = 0;
        int max = 0;
        for (int i = 0; i < string1.length(); i++) {
            char char1 = string1.charAt(i);
            char char2 = string2.charAt(i);

            if (char1 == '?' || char2 == '?') {
                max++;
            } else if (char1 != char2) {
                min++;
                max++;

            }

        }
        return Arrays.asList(min, max);

    }


}
