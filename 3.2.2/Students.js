function getMaxScoreStudent(studentGroups) {
    let maxScore = 0;
    let studentWithMaxScore;
  
    studentGroups.forEach((group) => {
      group.forEach((student) => {
        if (student.score > maxScore) {
          maxScore = student.score;
          studentWithMaxScore = student;
        }
      });
    });
  
    if (studentWithMaxScore) {
      console.log(
        `Congratulations to ${studentWithMaxScore.name} with ${maxScore} points!`
      );
    } else {
      console.log("No student data provided.");
    }
  }
  
  const studentGroups = [
    [
      { name: "Ivan", score: 35, date: "2022-10-11" },
      { name: "Maria", score: 5, date: "2022-10-10" },
      { name: "Olga", score: 0, date: "" },
      { name: "Stepan", score: 35, date: "2022-10-12" },
      { name: "Oleg", score: 9, date: "2022-10-01" },
      { name: "Zanna", score: 15, date: "2022-10-11" },
    ],
    [
      { name: "Margo", score: 0, date: "2022-10-11" },
      { name: "Natalia", score: 25, date: "2022-10-10" },
      { name: "Marina", score: 25, date: "2022-10-01" },
      { name: "Dmitry", score: 25, date: "2022-10-12" },
      { name: "Denis", score: 0, date: "2022-10-02" },
      { name: "Vadimyr", score: 1, date: "2022-10-11" },
    ],
    [
      { name: "Irina", score: 0, date: "2022-10-11" },
      { name: "Vasily", score: 0, date: "2022-10-10" },
      { name: "David", score: 0, date: "2022-10-11" },
      { name: "Kristina", score: 0, date: "2022-10-12" },
      { name: "Varvara", score: 0, date: "2022-10-01" },
      { name: "Tanya", score: 0, date: "2022-10-11" },
    ],
  ];
  
  getMaxScoreStudent(studentGroups);
  
  module.exports = getMaxScoreStudent;