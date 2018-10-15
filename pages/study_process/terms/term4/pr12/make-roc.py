import sys
import argparse, argcomplete
import math, random

parser=argparse.ArgumentParser(description='')

parser.add_argument("-s", "--scores", help='input file ', type = str)
parser.add_argument('-r', '--real', help = 'real Acs', type = str, default = None)
parser.add_argument('-o', '--output', help = 'output file', type = str)
argcomplete.autocomplete(parser)
options = parser.parse_args()

guess = {}

maxscore = 0
minscore = 0

indata = open(options.scores, 'r')
for line in indata:
    parts = line.split()
    if len(parts) < 3:
        continue
    score = float(parts[1].replace(",", "."))
    evalue = float(parts[2].replace(",", "."))
    guess[parts[0].strip()] = [score, evalue, False]
    minscore = min(minscore, score)
    maxscore = max(maxscore, score)

indata.close()

real = []

if options.real is not None:
    indata = open(options.real, 'r')

    for line in indata:
        line = line.strip()
        if line == '':
            continue
        real.append(line)

    indata.close()
else:
    for i in guess.keys():
        if random.randint(1, 30) > 25:
            real.append(i)

for id in real:
    try:
        guess[id][2] = True
    except:
        print('!!!')


def f(score):
    tp = 0
    fn = 0
    fp = 0
    tn = 0
    for (id, value) in guess.items():
        if value[0] >= score:
            if value[2]:
                tp +=1
            else:
                fp +=1
        else:
            if value[2]:
                fn +=1
            else:
                tn +=1
    tprate = round(tp/ (tp + fn), 5)
    fprate = round(fp / (fp + tn), 5)
    return [tprate, fprate,score,tp,fn,fp,tn]

dots = []
for (id, value) in guess.items():
    dot = f(value[0])
    dot.append(value[1])
    dots.append(dot)

dots.sort(key=lambda x: x[1])

outdata = open(options.output, 'w')
outdata.write('{0:15} {1:15} {2:10} {3:6} {4:6} {5:6} {6:6} {7:6}\n'.format('#tprate','fprate','score','tp','fn','fp','tn',"e-value"))

for i in dots:
    outdata.write('{0:15} {1:15} {2:10} {3:6} {4:6} {5:6} {6:6} {7:6}\n'.format(i[0], i[1], i[2],i[3], i[4], i[5], i[6], i[7]))

outdata.close()


