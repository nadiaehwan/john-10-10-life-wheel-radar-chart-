var app = new Vue({
    el: '#app',
    data: {
        
        group2: {
            p1percent: Math.floor(Math.random() * 10) + 1,
            p2percent: Math.floor(Math.random() * 10) + 1,
            p3percent: Math.floor(Math.random() * 10) + 1,
            p4percent: Math.floor(Math.random() * 10) + 1,
            p5percent: Math.floor(Math.random() * 10) + 1,
            p6percent: Math.floor(Math.random() * 10) + 1,
            p7percent: Math.floor(Math.random() * 10) + 1,
            p8percent: Math.floor(Math.random() * 10) + 1,
            p9percent: Math.floor(Math.random() * 10) + 1,
            p10percent: Math.floor(Math.random() * 10) + 1
        }
    },
    computed: {
        
        g2fullEndPath: function () {
            let str = null;
            let vm = this;
            for (var point in vm.g2points) {
                str = str + this.g2points[point].x + "," + this.g2points[point].y + " ";
            }
            return str;
        },
        g2points: function () {
            return {
                "one": this.calcDistance(this.group2.p1percent, 1),
                "two": this.calcDistance(this.group2.p2percent, 2),
                "three": this.calcDistance(this.group2.p3percent, 3),
                "four": this.calcDistance(this.group2.p4percent, 4),
                "five": this.calcDistance(this.group2.p5percent, 5),
                "six": this.calcDistance(this.group2.p6percent, 6),
                "seven": this.calcDistance(this.group2.p7percent, 7),
                "eight": this.calcDistance(this.group2.p8percent, 8),
                "nine": this.calcDistance(this.group2.p9percent, 9),
                "ten": this.calcDistance(this.group2.p10percent, 10),
            };
        }
    },
    methods: {
        calcDistance: function (percent, pointnumber) {
            let churn = function (startval, endval) {
                return ((percent * 0.1) * (endval - startval)) + startval;
            };
            switch (pointnumber) {

                         case 10:
                                return {
                                    x: churn(370, 150.6),
                                    y: churn(332, 87.5)    
                        };
                        case 9:
                            return {
                                x: churn(346, 25.6),
                                y: churn(366, 268.5)
                            };
                        case 8:
                            return {
                                x: churn(344, 25.6),
                                y: churn(406, 469.5)
                            };
                            case 7:
                                return {
                                    x: churn(372, 150.6),
                                    y: churn(436, 690.5)
                                };
                        case 6:
                            return {
                                x: churn(402, 402.5),
                                y: churn(446, 761.5)
                            };
                            case 5:
                                return {
                                    x: churn(434, 670.6),
                                    y: churn(436, 690.5)
                                };
                        case 4:
                            return {
                                x: churn(460, 779.4), 
                                y: churn(408.4, 469.5)
                            };
                        case 3:
                            return {
                                x: churn(460.2, 779.4),
                                y: churn(360.6, 288.5)
                            };
                            case 2:
                                return {
                                    x: churn(432.2, 670.6), 
                                    y: churn(332.4, 87.5)
                                };
                        case 1:
                            return {
                                x: churn(402.5, 402.5),
                                y: churn(321.1, 6.5)
                            };
                default:
                    break;
            }

        }
    }
});


var entry = document.getElementById("Submit");
    entry.addEventListener("click", displayDetails);
    
    
    
    var row = 1;
    
    
    function displayDetails() {
        var  areas = document.getElementById("areas").value;
        var actions = document.getElementById("actions").value;
    
    
        if(!areas || !actions) {
            alert("Please fill all the boxes");
            return;
        }
        var display = document.getElementById("display");
    
        var newRow = display.insertRow(row);
    
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
    
    
        cell1.innerHTML = areas;
        cell2.innerHTML = actions;
    
        row++;
    }

    function myFunction() {
      var x = document.getElementById("myText").value;
      document.getElementById("demo").innerHTML = x;
    }
    
