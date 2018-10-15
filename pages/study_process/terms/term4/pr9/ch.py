import re

indata = open('tomtom.xml', 'r')
outdata = open('tomtom-1.txt', 'w')

for line in indata:
    line = line.strip()
    if line.find('pos') > 0:
        dig = re.findall(r'[0-9]\.[0-9]*', line)
        for d in range(len(dig)):
            dig[d] = round(float(dig[d]), 5)
        outdata.write('{}\t{}\t{}\t{}\n'.format(dig[0], dig[1], dig[2], dig[3]))
    else:
        outdata.write(line + '\n')
