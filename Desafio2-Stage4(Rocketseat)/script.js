const students = [
  { name: 'João', firstGrade: 8.5, secondGrade: 9.0 },
  { name: 'Maria', firstGrade: 7.0, secondGrade: 8.0 },
  { name: 'Pedro', firstGrade: 7.5, secondGrade: 8.5 },
  { name: 'Ana', firstGrade: 8.0, secondGrade: 9.5 },
  { name: 'Lucas', firstGrade: 5.5, secondGrade: 6.0 },
  { name: 'Julia', firstGrade: 7.0, secondGrade: 8.5 }
];

const passingScore = 7;

function result(students, passingScore) {
  students.forEach(student => {
    const averageScore = (student.firstGrade + student.secondGrade) / 2;
    if (averageScore >= passingScore) {
      alert(`A média do(a) aluno(a) ${student.name} é: ${averageScore}\n Parabéns, ${student.name}! Você foi aprovado(a) no concurso.`);
    } else {
      alert(`A média do(a) aluno(a) ${student.name} é: ${averageScore}\n ${student.name}, você foi reprovado(a) neste concurso.`);
    }
  });
}

result(students, passingScore);
