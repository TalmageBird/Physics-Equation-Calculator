document.getElementById('submit1').addEventListener('click',(e) => FMA(e));

function FMA(e) {
    e.preventDefault();
    const m = document.getElementById("mass").value;
    const a = document.getElementById("acceleration").value;
    const f = m * a;
    const element = " <div> <h4 class='blue'>Force:</h4><p class='blue'>" + f +" Newtons</p></div>";
    document.getElementById('fmaf').innerHTML = element;
}

document.getElementById('submit2').addEventListener('click',(e) => FMAM(e));

function FMAM(e) {
    e.preventDefault();
    const f = document.getElementById("force2").value;
    const a = document.getElementById("acceleration2").value;
    const m = f / a;
    const element = " <div> <h4 class='blue'>Mass:</h4><p class='blue'>" + m +" Kilograms</p></div>";
    document.getElementById('fmam').innerHTML = element;
}

document.getElementById('submit3').addEventListener('click',(e) => FMAA(e));

function FMAA(e) {
    e.preventDefault();
    const f = document.getElementById("force3").value;
    const m = document.getElementById("mass3").value;
    const a = f / m;
    const element = " <div> <h4 class='blue'>Acceleration:</h4><p class='blue'>" + a +" Meters per Second Squared</p></div>";
    document.getElementById('fmaa').innerHTML = element;
}

document.getElementById('submit4').addEventListener('click',(e) => K1(e));

function K1(e) {
    e.preventDefault();
    const v0 = document.getElementById("initialvelocity4").value;
    const a = document.getElementById("acceleration4").value;
    const t = document.getElementById("time4").value;
    const v = +v0 + +a * +t;
    const element = " <div> <h4 class='blue'>Final Velocity:</h4><p class='blue'>" + v +" Meters per Second</p></div>";
    document.getElementById('k1').innerHTML = element;
}

document.getElementById('submit5').addEventListener('click',(e) => K2(e));

function K2(e) {
    e.preventDefault();
    const v = document.getElementById("finalvelocity5").value;
    const a = document.getElementById("acceleration5").value;
    const t = document.getElementById("time5").value;
    const v0 = +v - (+a*+t);
    const element = " <div> <h4 class='blue'>Initial Velocity:</h4><p class='blue'>" + v0 +" Meters per Second</p></div>";
    document.getElementById('k2').innerHTML = element;
}

document.getElementById('submit6').addEventListener('click',(e) => K3(e));

function K3(e) {
    e.preventDefault();
    const v = document.getElementById("finalvelocity6").value;
    const v0 = document.getElementById("initialvelocity6").value;
    const t = document.getElementById("time6").value;
    const a = (+v - +v0) / +t;
    const element = " <div> <h4 class='blue'>Acceleration:</h4><p class='blue'>" + a +" Meters per Second Squared</p></div>";
    document.getElementById('k3').innerHTML = element;
}

document.getElementById('submit7').addEventListener('click',(e) => K4(e));

function K4(e) {
    e.preventDefault();
    const v = document.getElementById("finalvelocity7").value;
    const v0 = document.getElementById("initialvelocity7").value;
    const a = document.getElementById("acceleration7").value;
    const t = (+v - +v0) / +a;
    const element = " <div> <h4 class='blue'>Time:</h4><p class='blue'>" + t +" Seconds</p></div>";
    document.getElementById('k4').innerHTML = element;
}

document.getElementById('submit8').addEventListener('click',(e) => K5(e));

function K5(e) {
    e.preventDefault();
    const v = document.getElementById("finalvelocity8").value;
    const v0 = document.getElementById("initialvelocity8").value;
    const t = document.getElementById("time8").value;
    const d = ((+v + +v0)/2) * t; 
    const element = " <div> <h4 class='blue'>Change in Distance:</h4><p class='blue'>" + d +" Meters</p></div>";
    document.getElementById('k5').innerHTML = element;
}

document.getElementById('submit9').addEventListener('click',(e) => K6(e));

function K6(e) {
    e.preventDefault();
    const d = document.getElementById("distancechange9").value;
    const v0 = document.getElementById("initialvelocity9").value;
    const t = document.getElementById("time9").value;
    const v =((2 * +d)/+t) - +v0;
    const element = " <div> <h4 class='blue'>Final Velocity:</h4><p class='blue'>" + v +" Meters per Second</p></div>";
    document.getElementById('k6').innerHTML = element;
}

document.getElementById('submit10').addEventListener('click',(e) => K7(e));

function K7(e) {
    e.preventDefault();
    const d = document.getElementById("distancechange10").value;
    const v = document.getElementById("finalvelocity10").value;
    const t = document.getElementById("time10").value;
    const v0 =((2 * +d)/+t) - +v;
    const element = " <div> <h4 class='blue'>Initial Velocity:</h4><p class='blue'>" + v0 +" Meters per Second</p></div>";
    document.getElementById('k7').innerHTML = element;
}

document.getElementById('submit11').addEventListener('click',(e) => K8(e));

function K8(e) {
    e.preventDefault();
    const d = document.getElementById("distancechange11").value;
    const v = document.getElementById("finalvelocity11").value;
    const v0 = document.getElementById("initialvelocity11").value;
    const t = (2 * +d) / (+v + +v0);
    const element = " <div> <h4 class='blue'>Time:</h4><p class='blue'>" + t +" Seconds</p></div>";
    document.getElementById('k8').innerHTML = element;
}

document.getElementById('submit12').addEventListener('click',(e) => K9(e));

function K9(e) {
    e.preventDefault();
    const v0 = document.getElementById("initialvelocity12").value;
    const t = document.getElementById("time12").value;
    const a = document.getElementById("acceleration12").value;
    const d = (+v0 * +t) + (.5 * +a * +t * +t);
    const element = " <div> <h4 class='blue'>Change in Distance:</h4><p class='blue'>" + d +" Meters</p></div>";
    document.getElementById('k9').innerHTML = element;
}

document.getElementById('submit13').addEventListener('click',(e) => K10(e));

function K10(e) {
    e.preventDefault();
    const d = document.getElementById("distancechange13").value;
    const t = document.getElementById("time13").value;
    const a = document.getElementById("acceleration13").value;
    const v0 = (+d - (.5 * +a * +t * +t)) / +t;
    const element = " <div> <h4 class='blue'>Initial Velcoity:</h4><p class='blue'>" + v0 +" Meters per Second</p></div>";
    document.getElementById('k10').innerHTML = element;
}

document.getElementById('submit14').addEventListener('click',(e) => K11(e));

function K11(e) {
    e.preventDefault();
    const d = document.getElementById("distancechange14").value;
    const v0 = document.getElementById("initialvelocity14").value;
    const a = document.getElementById("acceleration14").value;
    const t = (-+v0 + Math.sqrt((+v0 * +v0) + (2 * d * a))) / a;
    const element = " <div> <h4 class='blue'>Time:</h4><p class='blue'>" + t +" Seconds</p></div>";
    document.getElementById('k11').innerHTML = element;
}

document.getElementById('submit15').addEventListener('click',(e) => K12(e));

function K12(e) {
    e.preventDefault();
    const d = document.getElementById("distancechange15").value;
    const v0 = document.getElementById("initialvelocity15").value;
    const t = document.getElementById("time15").value;
    const a = (2 * (+d - (+v0 * +t))) / (+t * +t);
    const element = " <div> <h4 class='blue'>Acceleration:</h4><p class='blue'>" + a +" Meters per Second Squared</p></div>";
    document.getElementById('k12').innerHTML = element;
}

document.getElementById('submit16').addEventListener('click',(e) => K13(e));

function K13(e) {
    e.preventDefault();
    const v0 = document.getElementById("initialvelocity16").value;
    const a = document.getElementById("acceleration16").value;
    const d = document.getElementById("distancechange16").value;
    const v = Math.sqrt((+v0 * +v0) + (2 * +a * +d));
    const element = " <div> <h4 class='blue'>Final Velocity:</h4><p class='blue'>" + v +" Meters per Second</p></div>";
    document.getElementById('k13').innerHTML = element;
}

document.getElementById('submit17').addEventListener('click',(e) => K14(e));

function K14(e) {
    e.preventDefault();
    const v = document.getElementById("finalvelocity17").value;
    const a = document.getElementById("acceleration17").value;
    const d = document.getElementById("distancechange17").value;
    const v0 = Math.sqrt((+v * +v) - (2 * +a * +d));
    const element = " <div> <h4 class='blue'>Initial Velocity:</h4><p class='blue'>" + v0 +" Meters per Second</p></div>";
    document.getElementById('k14').innerHTML = element;
}

document.getElementById('submit18').addEventListener('click',(e) => K15(e));

function K15(e) {
    e.preventDefault();
    const v = document.getElementById("finalvelocity18").value;
    const v0 = document.getElementById("initialvelocity18").value;
    const d = document.getElementById("distancechange18").value;
    const a = ((+v * +v) - (+v0 * +v0)) / (2 * d);
    const element = " <div> <h4 class='blue'>Acceleration:</h4><p class='blue'>" + a +" Meters per Second Squared</p></div>";
    document.getElementById('k15').innerHTML = element;
}

document.getElementById('submit19').addEventListener('click',(e) => K16(e));

function K16(e) {
    e.preventDefault();
    const v = document.getElementById("finalvelocity19").value;
    const v0 = document.getElementById("initialvelocity19").value;
    const a = document.getElementById("acceleration19").value;
    const d = ((+v * +v) - (+v0 * +v0)) / (2 * a);
    const element = " <div> <h4 class='blue'>Change in Distance:</h4><p class='blue'>" + d +" Meters</p></div>";
    document.getElementById('k16').innerHTML = element;
}

document.getElementById('submit20').addEventListener('click',(e) => K20(e));

function K20(e) {
    e.preventDefault();
    const m = document.getElementById("coefficient20").value;
    const fn = document.getElementById("normalforce20").value;
    const ff = +m * +fn;
    const element = " <div> <h4 class='blue'>Force of Friction:</h4><p class='blue'>" + ff +" Newtons</p></div>";
    document.getElementById('k20').innerHTML = element;
}

document.getElementById('submit21').addEventListener('click',(e) => K21(e));

function K21(e) {
    e.preventDefault();
    const ff = document.getElementById("frictionforce21").value;
    const fn = document.getElementById("normalforce21").value;
    const m = +ff / +fn;
    const element = " <div> <h4 class='blue'>Coefficient of Friction:</h4><p class='blue'>" + m +" </p></div>";
    document.getElementById('k21').innerHTML = element;
}

document.getElementById('submit22').addEventListener('click',(e) => K22(e));

function K22(e) {
    e.preventDefault();
    const ff = document.getElementById("frictionforce22").value;
    const m = document.getElementById("coefficient22").value;
    const fn = +ff / +m;
    const element = " <div> <h4 class='blue'>Normal Force:</h4><p class='blue'>" + fn +" Newtons</p></div>";
    document.getElementById('k22').innerHTML = element;
}

document.getElementById('submit23').addEventListener('click',(e) => K23(e));

function K23(e) {
    e.preventDefault();
    const v = document.getElementById("velocity23").value;
    const r = document.getElementById("radius23").value;
    const ac = (+v * +v) / r;
    const element = " <div> <h4 class='blue'>Centripetal Acceleration:</h4><p class='blue'>" + ac +" m/s<sup>2</sup></p></div>";
    document.getElementById('k23').innerHTML = element;
}

document.getElementById('submit24').addEventListener('click',(e) => K24(e));

function K24(e) {
    e.preventDefault();
    const ac = document.getElementById("acceleration24").value;
    const r = document.getElementById("radius24").value;
    const v = Math.sqrt(+ac * +r);
    const element = " <div> <h4 class='blue'>Linear Velocity:</h4><p class='blue'>" + v +" m/s</p></div>";
    document.getElementById('k24').innerHTML = element;
}

document.getElementById('submit25').addEventListener('click',(e) => K25(e));

function K25(e) {
    e.preventDefault();
    const ac = document.getElementById("acceleration25").value;
    const v = document.getElementById("velocity25").value;
    const r = (+v * +v) / ac;
    const element = " <div> <h4 class='blue'>Radius:</h4><p class='blue'>" + r +" m</p></div>";
    document.getElementById('k25').innerHTML = element;
}

document.getElementById('submit26').addEventListener('click',(e) => K26(e));

function K26(e) {
    e.preventDefault();
    const m = document.getElementById("mass26").value;
    const v = document.getElementById("velocity26").value;
    const p = +m * +v;
    const element = " <div> <h4 class='blue'>Momentum:</h4><p class='blue'>" + p +" (kg * m)/s</p></div>";
    document.getElementById('k26').innerHTML = element;
}

document.getElementById('submit27').addEventListener('click',(e) => K27(e));

function K27(e) {
    e.preventDefault();
    const p = document.getElementById("momentum27").value;
    const v = document.getElementById("velocity27").value;
    const m = +p / +v;
    const element = " <div> <h4 class='blue'>Mass:</h4><p class='blue'>" + m +" kg</p></div>";
    document.getElementById('k27').innerHTML = element;
}

document.getElementById('submit28').addEventListener('click',(e) => K28(e));

function K28(e) {
    e.preventDefault();
    const p = document.getElementById("momentum28").value;
    const m = document.getElementById("mass28").value;
    const v = +p / +m;
    const element = " <div> <h4 class='blue'>Velocity:</h4><p class='blue'>" + v +" m/s</p></div>";
    document.getElementById('k28').innerHTML = element;
}