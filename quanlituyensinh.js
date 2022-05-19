function testScore() {
    //B1: DOM tới các inputs
    var benchmark = +document.getElementById('benchmark').value;

    // var areaType = getAreaType();
    // var subjectType = getSubjectType();
    var areaScore = +document.getElementById('area').value;
    var subjectScore = +document.getElementById('subject').value;
    var fScore = +document.getElementById('fScore').value;
    var sScore = +document.getElementById('sScore').value;
    var tScore = +document.getElementById('tScore').value;
    
    //B2: Tính tổng điểm 
    var totalScore = calculateScore(areaScore, subjectScore, fScore, sScore, tScore)

    //B3: Nếu 1 môn bằng không xuất kết quả rớt

    if (fScore === 0 || sScore === 0 || tScore === 0) {
        document.getElementById('result').innerHTML = `Bạn đã rớt. Do có điểm bằng 0`;
        return totalScore = 0;

    }

    //B4: Đem tổng điểm so sánh với điểm chuẩn và xuất ra kết quả ra lauout
    if (benchmark > totalScore) {
        document.getElementById('result').innerHTML = `Bạn đã rớt, Tổng điểm là ${totalScore}`;
    } else {
        document.getElementById('result').innerHTML = `Bạn đã đậu, Tổng điểm là ${totalScore}`;
    }

}
//Tạo hàm tính tổng điểm
function calculateScore(area, subject, score_1, score_2, score_3) {
    var totalScore = 0;
    return totalScore = area + subject + score_1 + score_2 + score_3;
}


// function getAreaType() {
    
// }

// function getSubjectType() {
     
// }