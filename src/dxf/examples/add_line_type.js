const Drawing = require('./../src/Drawing');
const fs = require('fs');

let d = new Drawing();

d.addLineType('DASHDOT', '_ . _ ', [0.5, -0.5, 0.0, -0.5])
d.addLayer('l_green', Drawing.ACI.GREEN, 'DASHDOT');
d.setActiveLayer('l_green');
d.drawLine(0, 0, 20, 20);

fs.writeFileSync(__filename + '.dxf', d.toDxfString());