import 'dart:io';

class Student {
  double obtain_marks;
  double total_marks;

  Student(this.obtain_marks, this.total_marks);

  double calPercentage() {
    if (total_marks <= 0) {
      return 0;
    }
    return (obtain_marks / total_marks) * 100;
  }

  String grade() {
    double percent = calPercentage();

    if (percent >= 90) return "A";
    if (percent >= 80) return "B";
    if (percent >= 70) return "C";
    if (percent >= 60) return "D";
    if (percent >= 50) return "E";
    if (percent >= 40) return "F";
    return "Fail";
  }
}

void main() {
  print("Enter the obtained marks:");
  double m = double.parse(stdin.readLineSync()!);

  print("Enter the total marks:");
  double t = double.parse(stdin.readLineSync()!);

  Student s1 = Student(m, t);

  double per = s1.calPercentage();
  print("Total percentage is: $per");

  String g = s1.grade();
  print("You got $g grade");
}